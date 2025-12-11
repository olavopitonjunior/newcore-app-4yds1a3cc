/* FeatureCard Component - Displays a single feature in the carousel */
import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface FeatureCardProps {
  title: string
  description: string
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <Card
      className={cn(
        'rounded-full bg-white border-4 border-white shadow-xl relative overflow-hidden flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-primary/10 hover:shadow-2xl',
        className,
      )}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 pointer-events-none" />

      {/* Decorative ring */}
      <div className="absolute inset-[2px] rounded-full border border-gray-100 pointer-events-none" />

      <CardContent className="relative z-10 flex flex-col items-center justify-center h-full w-full p-8 md:p-10 space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight tracking-tight px-2">
          {title}
        </h3>
        <div className="w-12 h-1 bg-primary/20 rounded-full my-1 md:my-2" />
        <p className="text-sm md:text-base font-medium text-muted-foreground leading-relaxed max-w-[240px]">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
