/* ActionButtonGroup Component - Sticky bottom buttons */
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ActionButtonGroupProps {
  className?: string
}

export const ActionButtonGroup: React.FC<ActionButtonGroupProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        'w-full mt-auto flex flex-col items-center gap-4',
        className,
      )}
    >
      <Button className="w-[90%] md:w-[320px] h-[48px] md:h-[56px] bg-primary hover:bg-[#C40026] text-white font-semibold text-[16px] md:text-[18px] rounded-[12px] transition-all duration-150 active:scale-[0.98] shadow-sm">
        Cadastre-se
      </Button>
      <Button
        variant="outline"
        className="w-[90%] md:w-[320px] h-[48px] md:h-[56px] bg-white text-primary border-2 border-primary hover:bg-primary/5 font-semibold text-[16px] md:text-[18px] rounded-[12px] transition-all duration-150 active:scale-[0.98]"
      >
        Entrar
      </Button>
    </div>
  )
}
