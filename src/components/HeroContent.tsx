/* HeroContent Component - Displays the main title and subtitle */
import React from 'react'
import { cn } from '@/lib/utils'

interface HeroContentProps {
  className?: string
}

export const HeroContent: React.FC<HeroContentProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'text-center px-4 max-w-[600px] mx-auto mb-[30px] md:mb-[40px]',
        className,
      )}
    >
      <h1 className="text-[32px] md:text-[48px] font-bold text-foreground leading-[1.2] mb-6 tracking-tight">
        Transforme sua carreira imobiliária
      </h1>
      <p className="text-[16px] md:text-[20px] font-normal text-muted-foreground leading-[1.5] max-w-[80%] mx-auto md:max-w-full">
        Junte-se à maior rede de corretores do{' '}
        <br className="hidden md:block" />
        Brasil
      </p>
    </div>
  )
}
