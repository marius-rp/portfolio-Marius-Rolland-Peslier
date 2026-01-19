import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons"

interface AvatarProps {
  size?: "little" | "medium" | "big"
}

const sizeConfig = {
  little: {
    button: "w-16 h-16 md:w-20 md:h-20",
    iconClass: "text-3xl md:text-4xl",
  },
  medium: {
    button: "w-20 h-20 md:w-44 md:h-44",
    iconClass: "text-6xl md:text-[9rem]",
  },
  big: {
    button: "w-28 h-28 md:w-50 md:h-50",
    iconClass: "text-8xl md:text-[10rem]",
  },
}

const Avatar: React.FC<AvatarProps> = ({ size = "medium" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { button, iconClass } = sizeConfig[size]

  return (
    <>
      <button
        className={`
          cursor-pointer
          profile_item
          ${button}
          p-1 border-2 rounded-full
          hover:border-gray-400/50
          transition-all duration-500
        `}
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full h-full bg-white flex items-center justify-center p-2 rounded-full hover:scale-95 transition-all duration-500">
          <FontAwesomeIcon icon={faFaceAngry} className={iconClass} />
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faFaceAngry} className="text-[10rem]" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 cursor-pointer text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Avatar
