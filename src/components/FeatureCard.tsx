/* FeatureCard Component - Displays a single feature in the carousel */
import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <Card
      className={cn(
        'bg-[#F8F8F8] border-none shadow-soft rounded-[20px] h-[180px] md:h-[220px] w-full max-w-[320px] mx-auto select-none',
        className,
      )}
    >
      <CardContent className="flex flex-col items-center justify-center h-full p-[30px] text-center">
        <div className="mb-5 text-primary">
          <Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2.5} />
        </div>
        <h3 className="text-[20px] md:text-[24px] font-semibold text-foreground mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-[14px] md:text-[16px] font-normal text-muted-foreground leading-[1.4]">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
