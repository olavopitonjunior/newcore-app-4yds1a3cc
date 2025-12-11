/* AppLogo Component - Displays the NEWCORE brand logo */
import React from 'react'
import { cn } from '@/lib/utils'

interface AppLogoProps {
  className?: string
}

export const AppLogo: React.FC<AppLogoProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center mb-10 md:mb-[60px]',
        className,
      )}
    >
      <svg
        width="180"
        height="60"
        viewBox="0 0 180 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[120px] md:w-[180px] h-auto"
        aria-label="NEWCORE Logo"
      >
        {/* House Icon - Primary Red */}
        <path
          d="M90 5L65 25H75V45H105V25H115L90 5Z"
          fill="#E5002C"
          stroke="#E5002C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Text - Dark Text */}
        <text
          x="90"
          y="58"
          textAnchor="middle"
          fill="#212121"
          fontSize="16"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.2em"
        >
          NEWCORE
        </text>
      </svg>
    </div>
  )
}
