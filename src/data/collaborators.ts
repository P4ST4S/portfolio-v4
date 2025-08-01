import type { Collaborator } from "@/types";
import { useIntl } from "react-intl";

export const useCollaboratorsData = (): Collaborator[] => {
  const intl = useIntl();
  
  return [
    {
      id: 1,
      name: "John Doe",
      role: intl.formatMessage({ id: 'collaborators.roles.uiuxDesigner' }),
      specialities: [
        intl.formatMessage({ id: 'collaborators.specialities.uiDesign' }),
        intl.formatMessage({ id: 'collaborators.specialities.uxResearch' }),
        intl.formatMessage({ id: 'collaborators.specialities.prototyping' }),
        intl.formatMessage({ id: 'collaborators.specialities.branding' })
      ],
      description: intl.formatMessage({ id: 'collaborators.johnDoe.description' }),
      links: {
        linkedin: "https://linkedin.com/in/johndoe",
        website: "https://johndoe-design.com",
        email: "john@example.com"
      },
      company: "Design Studio"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: intl.formatMessage({ id: 'collaborators.roles.mobileDevExpert' }),
      specialities: [
        intl.formatMessage({ id: 'collaborators.specialities.reactNative' }),
        intl.formatMessage({ id: 'collaborators.specialities.flutter' }),
        intl.formatMessage({ id: 'collaborators.specialities.ios' }),
        intl.formatMessage({ id: 'collaborators.specialities.android' })
      ],
      description: intl.formatMessage({ id: 'collaborators.janeSmith.description' }),
      links: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        email: "jane@example.com"
      },
      company: "Tech Corp"
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: intl.formatMessage({ id: 'collaborators.roles.devOpsEngineer' }),
      specialities: [
        intl.formatMessage({ id: 'collaborators.specialities.aws' }),
        intl.formatMessage({ id: 'collaborators.specialities.kubernetes' }),
        intl.formatMessage({ id: 'collaborators.specialities.terraform' }),
        intl.formatMessage({ id: 'collaborators.specialities.cicd' })
      ],
      description: intl.formatMessage({ id: 'collaborators.alexJohnson.description' }),
      links: {
        github: "https://github.com/alexjohnson",
        website: "https://alexjohnson-devops.com",
        linkedin: "https://linkedin.com/in/alexjohnson"
      },
      company: "Cloud Solutions Inc"
    }
  ];
};

// Legacy export for backward compatibility (example data)
const collaboratorsData: Collaborator[] = [
  {
    id: 1,
    name: "John Doe",
    role: "UI/UX Designer",
    specialities: ["UI Design", "UX Research", "Prototyping", "Branding"],
    description: "Creative designer with 5 years of experience in creating intuitive and beautiful user interfaces.",
    links: {
      linkedin: "https://linkedin.com/in/johndoe",
      website: "https://johndoe-design.com",
      email: "john@example.com"
    },
    company: "Design Studio"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Mobile Development Expert",
    specialities: ["React Native", "Flutter", "iOS", "Android"],
    description: "Mobile development specialist focusing on cross-platform solutions and native performance.",
    links: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      email: "jane@example.com"
    },
    company: "Tech Corp"
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "DevOps Engineer",
    specialities: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    description: "Infrastructure expert specializing in cloud architecture and automated deployment pipelines.",
    links: {
      github: "https://github.com/alexjohnson",
      website: "https://alexjohnson-devops.com",
      linkedin: "https://linkedin.com/in/alexjohnson"
    },
    company: "Cloud Solutions Inc"
  }
];

export default collaboratorsData;