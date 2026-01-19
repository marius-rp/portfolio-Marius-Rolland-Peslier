import React, { useEffect, useCallback } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  variant?: "default" | "minimal" | "gradient"
  size?: "small" | "medium" | "large"
}

const sizeConfig = {
  small: {
    modal: "max-w-sm",
    padding: "p-5",
    titleSize: "text-xl",
    contentSize: "text-sm",
  },
  medium: {
    modal: "max-w-md",
    padding: "p-8",
    titleSize: "text-2xl",
    contentSize: "text-base",
  },
  large: {
    modal: "max-w-xl",
    padding: "p-10",
    titleSize: "text-3xl",
    contentSize: "text-base",
  },
}

const InformativePopUp: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  variant = "default",
  size = "medium",
}) => {
  const config = sizeConfig[size]

  // Fermeture avec la touche Echap
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  const variantStyles = {
    default: "bg-slate-900/95 border-blue-400/30 shadow-blue-500/20",
    minimal: "bg-gray-900/80 border-white/20 shadow-white/5",
    gradient: "bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900 border-blue-400/40 shadow-cyan-500/20",
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className={`
          relative overflow-hidden rounded-3xl w-full border backdrop-blur-2xl shadow-2xl
          transition-all transform duration-300 animate-in zoom-in-95
          ${config.modal} ${config.padding} ${variantStyles[variant]}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Elements (Glow effects) */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px] pointer-events-none" />

        {/* Close Button */}
        <button
          className="absolute cursor-pointer top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 text-white/50 hover:text-red-400 transition-all duration-200"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Header */}
        <div className="mb-6 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
            <h2 className={`${config.titleSize} font-bold text-white tracking-tight`}>
              {title}
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-blue-400/50 via-blue-400/10 to-transparent" />
        </div>

        {/* Content Section - Scrollbar styling added */}
        <div className={`
          ${config.contentSize} text-white relative z-10 max-h-[60vh] pr-4 mb-8
        `}>
          {children}
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
    </div>
  )
}

export default InformativePopUp