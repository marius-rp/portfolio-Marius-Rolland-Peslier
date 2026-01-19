import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IconCardProps {
  icon: IconProp
  color?: "gray" | "black" | "blue"
  onClick?: () => void
}

const IconCard: React.FC<IconCardProps> = ({
  icon,
  color = "gray",
  onClick,
}) => {
  const colorMap = {
    gray: {
      bg: "bg-gray-600/20",
      color: "bg-gray-600",
      border: "border-gray-600",
      text: "text-white",
      shadow: "shadow-gray-400/60",
    },
    black: {
      bg: "bg-black/20",
      color: "bg-black",
      border: "border-black",
      text: "text-white",
      shadow: "shadow-black/60",
    },
    blue: {
      bg: "bg-blue-600/20",
      color: "bg-blue-600",
      border: "border-blue-600",
      text: "text-white",
      shadow: "shadow-blue-400/60",
    },
  }

  const selectedColor = colorMap[color]

  return (
    <div
      onClick={onClick}
      className={`flex items-center cursor-pointer gap-4 rounded-full ${selectedColor.bg}`}
    >
      <div className="social-button">
        <button className="relative w-12 h-12 rounded-full group flex items-center justify-center">
          <div
            className={`floater absolute top-0 left-0 w-full h-full rounded-full transition-all duration-300 group-hover:-top-8 group-hover:shadow-xl ${selectedColor.color} ${selectedColor.shadow}`}
          ></div>

          <div
            className={`absolute cursor-pointer inset-0 z-10 border-2 ${selectedColor.border} rounded-full`}
          ></div>

          <FontAwesomeIcon
            icon={icon}
            className={`relative z-20 cursor-pointer text-xl ${selectedColor.text}`}
          />
        </button>
      </div>
    </div>
  )
}

export default IconCard
