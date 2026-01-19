import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"

interface ProjectCardProps {
  title: string
  description: string
  image?: React.ReactNode
  imageGradient?: string
  technologies?: string[]
  icon?: IconProp
  buttonText?: string
  onButtonClick?: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imageGradient = "from-blue-500 to-blue-600",
  technologies = [],
  icon,
  buttonText = "En savoir plus",
  onButtonClick,
}) => {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl bg-white/5 backdrop-blur-xl border border-blue-400/20 overflow-hidden hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Image Section */}
      <div
        className={`relative h-40 md:h-48 overflow-hidden bg-gradient-to-r ${imageGradient} flex items-center justify-center`}
      >
        {image ? (
          <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {image}
          </div>
        ) : icon ? (
          <FontAwesomeIcon
            icon={icon}
            className="text-5xl md:text-6xl text-white/80 group-hover:scale-110 transition-transform duration-300"
          />
        ) : null}
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Technologies Tags */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-blue-500/20 border border-blue-400/30 text-blue-200 hover:bg-blue-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Button Section */}
      <div className="p-5 md:p-6 pt-0">
        <button
          onClick={onButtonClick}
          className="w-full px-4 md:px-6 py-2 md:py-3 rounded-lg bg-blue-500/80 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm uppercase tracking-wider shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 active:scale-95"
        >
          {buttonText}
        </button>
      </div>

      {/* Decorative Element */}
      <div className="absolute -top-1 -right-1 w-20 h-20 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-300 pointer-events-none" />
    </div>
  )
}

export default ProjectCard
