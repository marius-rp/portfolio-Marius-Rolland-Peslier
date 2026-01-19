import React from "react"
import "./rotatingCard.css"

interface CSSVariables extends React.CSSProperties {
  "--quantity"?: number
  "--index"?: number
}

interface RotatingCardsProps {
  children: React.ReactNode
}

const RotatingCards: React.FC<RotatingCardsProps> = ({ children }) => {
  const items = React.Children.toArray(children)
  const quantity = items.length

  return (
    <div className="wrapper">
      <div className="inner" style={{ "--quantity": quantity } as CSSVariables}>
        {items.map((child, index) => (
          <div
            key={index}
            className="card"
            style={{ "--index": index } as CSSVariables}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RotatingCards
