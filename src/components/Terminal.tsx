import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { useReducedMotion } from "motion/react";
import { useProjectsData } from "@/data/projects";
import type { Project } from "@/types";

type TerminalLink = {
  label: string;
  href: string;
};

type CommandOutput = {
  text: string;
  links?: TerminalLink[];
};

type CommandContext = {
  projects: Project[];
  profileLine: string;
  commands: Pick<Command, "name" | "description">[];
  commandNames: string[];
};

type Command = {
  name: string;
  description: string;
  run: (args: string[], context: CommandContext) => CommandOutput;
};

type LogEntry =
  | {
      id: number;
      type: "command";
      command: string;
    }
  | {
      id: number;
      type: "output";
      text: string;
      links?: TerminalLink[];
    }
  | {
      id: number;
      type: "system";
      text: string;
    };

type NewLogEntry =
  | Omit<Extract<LogEntry, { type: "command" }>, "id">
  | Omit<Extract<LogEntry, { type: "output" }>, "id">
  | Omit<Extract<LogEntry, { type: "system" }>, "id">;

const PROMPT = "antoine@portfolio:~$";
const CHIP_COMMANDS = ["help", "whoami", "ls projects", "cat mcp-audit"];

const normalizeLookup = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const findProject = (projects: Project[], query: string) => {
  const normalizedQuery = normalizeLookup(query);

  return projects.find((project) => {
    const title = normalizeLookup(project.title);

    return (
      title === normalizedQuery ||
      title.includes(normalizedQuery) ||
      String(project.id) === normalizedQuery
    );
  });
};

const formatProjectList = (projects: Project[]) => {
  const projectSlugs = projects.map((project) => normalizeLookup(project.title));
  const nameColumnWidth =
    Math.max(...projectSlugs.map((slug) => slug.length), "project".length) + 2;

  return [
    ...projects.map((project, index) => {
      const slug = projectSlugs[index].padEnd(nameColumnWidth, " ");
      const stackPreview = project.tags.slice(0, 3).join(" · ");
      return `${slug}${stackPreview}`;
    }),
    "",
    "Try: cat <project-name>",
  ].join("\n");
};

const formatProjectDetails = (project: Project): CommandOutput => {
  const links = Object.entries(project.links)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([label, href]) => ({ label, href }));

  return {
    text: [
      project.title,
      `  ${project.description}`,
      `  Stack: ${project.mainTech}`,
      `  Result: ${project.result}`,
      project.actions.length > 0 ? `  Actions: ${project.actions.join(" ")}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    links,
  };
};

const createCommands = (): Command[] => [
  {
    name: "help",
    description: "List available commands",
    run: (_args, context) => ({
      text: context.commands
        .map((command) => `${command.name.padEnd(12, " ")}${command.description}`)
        .join("\n"),
    }),
  },
  {
    name: "whoami",
    description: "Show the short profile",
    run: (_args, context) => ({
      text: context.profileLine,
    }),
  },
  {
    name: "ls",
    description: "List folders or project summaries",
    run: (args, context) => {
      if (args[0]?.toLowerCase() === "projects") {
        return { text: formatProjectList(context.projects) };
      }

      return { text: "projects/" };
    },
  },
  {
    name: "cat",
    description: "Show project details: cat <project>",
    run: (args, context) => {
      if (args.length === 0) {
        return { text: "usage: cat <project-name>" };
      }

      const project = findProject(context.projects, args.join(" "));

      if (!project) {
        return {
          text: `project not found: ${args.join(" ")}\nTry 'ls projects' to list available projects.`,
        };
      }

      return formatProjectDetails(project);
    },
  },
];

const TypewriterText = ({
  text,
  reducedMotion,
  onDone,
  onUpdate,
}: {
  text: string;
  reducedMotion: boolean;
  onDone?: () => void;
  onUpdate?: () => void;
}) => {
  const [visibleText, setVisibleText] = useState(reducedMotion ? text : "");

  useEffect(() => {
    if (reducedMotion) {
      setVisibleText(text);
      onUpdate?.();
      onDone?.();
      return;
    }

    setVisibleText("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));
      window.requestAnimationFrame(() => onUpdate?.());

      if (index >= text.length) {
        window.clearInterval(timer);
        onDone?.();
      }
    }, 12);

    return () => window.clearInterval(timer);
  }, [onDone, onUpdate, reducedMotion, text]);

  return <>{visibleText}</>;
};

const LogRow = memo(function LogRow({
  entry,
  reducedMotion,
  onOutputUpdate,
}: {
  entry: LogEntry;
  reducedMotion: boolean;
  onOutputUpdate: () => void;
}) {
  if (entry.type === "command") {
    return (
      <div className="text-slate-100">
        <span className="text-[#5EEAD4]">{PROMPT}</span>{" "}
        <span>{entry.command}</span>
      </div>
    );
  }

  if (entry.type === "system") {
    return <div className="whitespace-pre-wrap text-slate-300">{entry.text}</div>;
  }

  return (
    <div className="space-y-2">
      <pre className="whitespace-pre-wrap break-words font-mono text-slate-200">
        <TypewriterText
          text={entry.text}
          reducedMotion={reducedMotion}
          onUpdate={onOutputUpdate}
        />
      </pre>
      {entry.links && entry.links.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {entry.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-[#5EEAD4]/40 px-2 py-1 text-xs font-semibold text-[#5EEAD4] transition-colors hover:border-[#5EEAD4] hover:bg-[#5EEAD4]/10 focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
});

const Terminal = () => {
  const projects = useProjectsData();
  const intl = useIntl();
  const reducedMotion = Boolean(useReducedMotion());
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(0);
  const commandHistoryRef = useRef<string[]>([]);
  const historyIndexRef = useRef<number | null>(null);
  const commands = useMemo(() => createCommands(), []);
  const commandNames = useMemo(
    () => commands.map((command) => command.name),
    [commands],
  );
  const profileLine = useMemo(
    () => `Antoine Rospars - ${intl.formatMessage({ id: "hero.title" })}`,
    [intl],
  );
  const projectNames = useMemo(
    () => projects.map((project) => normalizeLookup(project.title)),
    [projects],
  );
  const [log, setLog] = useState<LogEntry[]>(() => [
    {
      id: nextIdRef.current++,
      type: "system",
      text: "booting portfolio...\nready. Type 'help' or use a shortcut below.",
    },
  ]);

  const appendEntries = useCallback((entries: NewLogEntry[]) => {
    setLog((current) => [
      ...current,
      ...entries.map((entry): LogEntry => ({ ...entry, id: nextIdRef.current++ })),
    ]);
  }, []);

  const setInputValue = useCallback((value: string) => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, []);

  const scrollOutputToBottom = useCallback((behavior: ScrollBehavior) => {
    const output = outputRef.current;

    if (!output) {
      return;
    }

    output.scrollTo({
      top: output.scrollHeight,
      behavior,
    });
  }, []);

  const scrollOutputAfterRender = useCallback(() => {
    window.requestAnimationFrame(() => scrollOutputToBottom("instant"));
  }, [scrollOutputToBottom]);

  const executeCommand = useCallback(
    (rawCommand: string) => {
      const trimmedCommand = rawCommand.trim();

      if (!trimmedCommand) {
        appendEntries([{ type: "command", command: "" }]);
        return;
      }

      const [rawName = "", ...args] = trimmedCommand.split(/\s+/);
      const name = rawName.toLowerCase();

      if (name === "clear") {
        setLog([]);
        return;
      }

      commandHistoryRef.current = [
        ...commandHistoryRef.current.filter((item) => item !== trimmedCommand),
        trimmedCommand,
      ].slice(-40);
      historyIndexRef.current = null;

      const command = commands.find((item) => item.name === name);
      const output = command
        ? command.run(args, { projects, profileLine, commands, commandNames })
        : {
            text: `command not found: ${name}. type 'help' for available commands.`,
          };

      appendEntries([
        { type: "command", command: trimmedCommand },
        { type: "output", text: output.text, links: output.links },
      ]);
    },
    [appendEntries, commandNames, commands, profileLine, projects],
  );

  const completeInput = useCallback(() => {
    const value = inputRef.current?.value ?? "";
    const [rawName = "", ...args] = value.trimStart().split(/\s+/);
    const name = rawName.toLowerCase();

    if (!value.trim() || args.length === 0) {
      const match = commandNames.find((commandName) =>
        commandName.startsWith(name),
      );

      if (match) {
        setInputValue(match === "cat" ? `${match} ` : match);
      }
      return;
    }

    if (name === "cat") {
      const query = normalizeLookup(args.join(" "));
      const match = projectNames.find((projectName) => projectName.startsWith(query));

      if (match) {
        setInputValue(`cat ${match}`);
      }
    }
  }, [commandNames, projectNames, setInputValue]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const value = event.currentTarget.value;
        event.currentTarget.value = "";
        executeCommand(value);
        return;
      }

      if (event.key === "Tab") {
        event.preventDefault();
        completeInput();
        return;
      }

      if (event.ctrlKey && event.key.toLowerCase() === "l") {
        event.preventDefault();
        setLog([]);
        return;
      }

      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        const history = commandHistoryRef.current;
        if (history.length === 0) {
          return;
        }

        event.preventDefault();
        const currentIndex =
          historyIndexRef.current === null ? history.length : historyIndexRef.current;
        const nextIndex =
          event.key === "ArrowUp"
            ? Math.max(0, currentIndex - 1)
            : Math.min(history.length, currentIndex + 1);

        historyIndexRef.current = nextIndex === history.length ? null : nextIndex;
        setInputValue(nextIndex === history.length ? "" : history[nextIndex]);
      }
    },
    [completeInput, executeCommand, setInputValue],
  );

  useEffect(() => {
    scrollOutputToBottom(reducedMotion ? "instant" : "smooth");
  }, [log, reducedMotion, scrollOutputToBottom]);

  return (
    <section
      aria-label="Interactive portfolio terminal"
      className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg border border-slate-700 bg-zinc-950 text-left font-mono shadow-2xl shadow-slate-950/30"
    >
      <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900 px-4 py-3">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <p className="text-xs font-semibold text-slate-300">antoine@portfolio: ~</p>
      </div>

      <div className="flex flex-col-reverse gap-4 p-4 sm:flex-col sm:p-5">
        <div
          ref={outputRef}
          role="log"
          aria-live="polite"
          className="h-72 overflow-y-auto pr-2 text-sm leading-6 text-slate-200 sm:h-80"
        >
          <div className="space-y-3">
            {log.map((entry) => (
              <LogRow
                key={entry.id}
                entry={entry}
                reducedMotion={reducedMotion}
                onOutputUpdate={scrollOutputAfterRender}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-col">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const input = inputRef.current;
              const value = input?.value ?? "";

              if (input) {
                input.value = "";
              }

              executeCommand(value);
            }}
            className="flex items-center gap-2 rounded border border-slate-700 bg-slate-950 px-3 py-2 focus-within:border-[#5EEAD4]"
          >
            <label htmlFor="portfolio-terminal-input" className="sr-only">
              {intl.locale.startsWith("fr")
                ? "Commande du terminal portfolio"
                : "Portfolio terminal command"}
            </label>
            <span className="hidden shrink-0 text-sm text-[#5EEAD4] sm:inline">
              {PROMPT}
            </span>
            <input
              ref={inputRef}
              id="portfolio-terminal-input"
              type="text"
              inputMode="text"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              onKeyDown={handleKeyDown}
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-100 caret-[#5EEAD4] outline-none placeholder:text-slate-500"
              placeholder="help"
            />
          </form>

          <div className="flex flex-wrap gap-2">
            {CHIP_COMMANDS.map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => executeCommand(command)}
                className="rounded border border-[#5EEAD4]/30 bg-[#5EEAD4]/10 px-3 py-2 text-xs font-bold text-[#B2F5EA] transition-colors hover:border-[#5EEAD4] hover:bg-[#5EEAD4]/20 focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]"
              >
                {command}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
