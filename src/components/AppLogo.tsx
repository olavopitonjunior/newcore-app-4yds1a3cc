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
      <img
        src="https://res.cloudinary.com/subframe/image/upload/v1741634676/uploads/516/2205562d-005f-4d37-8898-333068e64c2a.png"
        alt="Newcore Logo"
        className="w-[160px] md:w-[220px] h-auto object-contain animate-fade-in"
      />
    </div>
  )
}
