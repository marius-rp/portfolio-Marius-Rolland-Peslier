import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface BadgeProps {
  icon: IconProp
  title: string
  description: string
}

const Badge: React.FC<BadgeProps> = ({ icon, title, description }) => {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 text-blue-400 group-hover:scale-110 transition-transform duration-300">
        <FontAwesomeIcon icon={icon} className="text-xl relative z-20" />
      </div>

      <div className="flex flex-col">
        <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-100 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default Badge
