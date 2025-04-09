import React from "react"

import { QRCodeSVG } from "qrcode.react"

// TypeScript interfaces for props
interface QRCodeProps {
  value?: string
  size?: number
  backgroundColor?: string
  fgColor?: string
  level?: "L" | "M" | "Q" | "H"
  className?: string
}

// Reusable QR Code Component
export const QRCode: React.FC<QRCodeProps> = ({
  value = "https://www.linkedin.com/in/oyinlola-olasunkanmi-raymond-71b6b8aa/",
  size = 220,
  backgroundColor = "fff",
  fgColor = "black",
  level = "L",
  className = "",
}) => {
  return (
    <div className={`rounded-md p-4 ${className}`}>
      <QRCodeSVG
        value={value}
        size={size}
        bgColor={backgroundColor}
        fgColor={fgColor}
        level={level}
      />
    </div>
  )
}
