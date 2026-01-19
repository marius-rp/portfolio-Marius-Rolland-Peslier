import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons"
import InformativePopUp from "../components/popUp/InformativePopUp"
import { useState } from "react"
import QuestionMarkInformation from "../components/ui/tooltip/QuestionMarkInformation"
import Badge from "../components/Badge"
import {
  faBookBookmark,
  faGraduationCap,
  faLightbulb,
  faRocket,
  faStar,
  faCode,
  faTools,
} from "@fortawesome/free-solid-svg-icons"

type Skill = {
  name: string
  icon: any
  level: string
  color: "gray" | "black" | "blue"
}

interface SkillCategory {
  title: string
  icon: any
  skills: Skill[]
}

const Skills: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const skillsCategories: SkillCategory[] = [
    {
      title: "Langages",
      icon: faCode,
      skills: [
        {
          name: "JavaScript",
          icon: faJs,
          level: "Avancé",
          color: "blue",
        },
        {
          name: "TypeScript",
          icon: faJs,
          level: "Intermédiaire",
          color: "gray",
        },
        {
          name: "HTML/CSS",
          icon: faJs,
          level: "Avancé",
          color: "blue",
        },
      ],
    },
    {
      title: "Frameworks & Bibliothèques",
      icon: faRocket,
      skills: [
        {
          name: "React",
          icon: faReact,
          level: "Avancé",
          color: "blue",
        },
        {
          name: "Node.js",
          icon: faNodeJs,
          level: "Intermédiaire",
          color: "gray",
        },
        {
          name: "Tailwind CSS",
          icon: "",
          level: "Avancé",
          color: "blue",
        },
      ],
    },
    {
      title: "Outils & Technologies",
      icon: faTools,
      skills: [
        {
          name: "Git",
          icon: faGitAlt,
          level: "Avancé",
          color: "blue",
        },
        {
          name: "VS Code",
          icon: faCode,
          level: "Avancé",
          color: "blue",
        },
        {
          name: "Figma",
          icon: faFigma,
          level: "Intermédiaire",
          color: "gray",
        },
      ],
    },
  ]

  const skillLevels = [
    {
      icon: faGraduationCap,
      title: "Expert",
      description: "Résolution de problèmes complexes.",
    },
    {
      icon: faStar,
      title: "Avancé",
      description: "Maîtrise complète, utilisation régulière.",
    },
    {
      icon: faLightbulb,
      title: "Maîtrise",
      description: "Bases solides, utilisation en production.",
    },
    {
      icon: faBookBookmark,
      title: "Fondamentaux",
      description: "Bases, compréhension des concepts.",
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-0 md:mt-10">
          {skillsCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative rounded-3xl border border-blue-400/20 bg-white/5 backdrop-blur-xl p-6 md:p-8 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-400/30 group-hover:bg-blue-500/30 transition-colors">
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-xl text-blue-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-blue-400/10 hover:bg-white/10 hover:border-blue-400/20 transition-all duration-300 group/skill"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/20 group-hover/skill:scale-110 transition-transform">
                        <FontAwesomeIcon
                          icon={skill.icon}
                          className="text-blue-300 text-sm"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm md:text-base font-semibold text-white truncate">
                          {skill.name}
                        </p>
                        <p className="text-xs text-blue-200/50">
                          {skill.level}
                        </p>
                      </div>
                    </div>

                    <div className="flex cursor-pointer items-center justify-between">
                      <QuestionMarkInformation
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsOpen(true)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -top-1 -right-1 w-20 h-20 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <InformativePopUp
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={"Niveaux de Compétence"}
        >
          <div className="flex flex-col text-white gap-4">
            {skillLevels.map((level, index) => (
              <Badge
                key={index}
                icon={level.icon}
                title={level.title}
                description={level.description}
              />
            ))}
          </div>
        </InformativePopUp>
      )}
    </div>
  )
}

export default Skills
