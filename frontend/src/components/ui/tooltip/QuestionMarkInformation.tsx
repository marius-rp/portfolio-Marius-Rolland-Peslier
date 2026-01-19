import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface QuestionMarkInformationProps {
  onClick: (e: React.MouseEvent) => void
  className?: string
}

const QuestionMarkInformation: React.FC<QuestionMarkInformationProps> = ({
  onClick,
  className
}) => {
  return (
    <div
      onClick={onClick}
      className="relative flex justify-center items-center"
    >
      <div className={`group flex justify-center transition-all rounded-full ${className}`}>
        <FontAwesomeIcon icon={faCircleQuestion} size="xl" />
      </div>
    </div>
  )
}

export default QuestionMarkInformation
