import type { Collaborator } from "@/types";
import { useIntl } from "react-intl";

export const useCollaboratorsData = (): Collaborator[] => {
  const intl = useIntl();

  return [
    {
      id: 1,
      name: "Lenny VIGEON",
      role: intl.formatMessage({ id: 'collaborators.roles.aiExpert' }),
      specialities: [
        intl.formatMessage({ id: 'collaborators.specialities.python' }),
        intl.formatMessage({ id: 'collaborators.specialities.pytorch' }),
        intl.formatMessage({ id: 'collaborators.specialities.cpp' }),
        intl.formatMessage({ id: 'collaborators.specialities.machineLearning' })
      ],
      description: intl.formatMessage({ id: 'collaborators.lennyVigeon.description' }),
      links: {
        linkedin: "https://www.linkedin.com/in/lenny-vigeon/",
        github: "https://github.com/Linnchoeuh"
      }
    },
    {
      id: 2,
      name: "Christophe CHHOR",
      role: intl.formatMessage({ id: 'collaborators.roles.projectManager' }),
      specialities: [
        intl.formatMessage({ id: 'collaborators.specialities.projectManagement' }),
        intl.formatMessage({ id: 'collaborators.specialities.agile' }),
        intl.formatMessage({ id: 'collaborators.specialities.teamLeadership' }),
        intl.formatMessage({ id: 'collaborators.specialities.strategicPlanning' })
      ],
      description: intl.formatMessage({ id: 'collaborators.christopheChhor.description' }),
      links: {
        linkedin: "https://www.linkedin.com/in/christophe-chhor/",
        website: "https://www.haoyi.fr/"
      }
    }
  ];
};

// Legacy export for backward compatibility
const collaboratorsData: Collaborator[] = [
  {
    id: 1,
    name: "Lenny Vigeon",
    role: "AI Expert",
    specialities: ["Python", "PyTorch", "C++", "Machine Learning"],
    description: "AI specialist with deep expertise in Python and PyTorch for machine learning applications, and advanced C++ programming skills.",
    links: {
      linkedin: "https://linkedin.com/in/lennyvigeon",
      github: "https://github.com/lennyvigeon"
    }
  },
  {
    id: 2,
    name: "Christophe Chhor",
    role: "Project Manager",
    specialities: ["Project Management", "Agile", "Team Leadership", "Strategic Planning"],
    description: "Experienced project manager with a proven track record of delivering complex projects on time and within budget.",
    links: {
      linkedin: "https://linkedin.com/in/christophechhor"
    }
  }
];

export default collaboratorsData;