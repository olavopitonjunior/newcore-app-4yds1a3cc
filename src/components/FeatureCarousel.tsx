/* FeatureCarousel Component - Interactive carousel with features */
import React, { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { FeatureCard } from '@/components/FeatureCard'
import { TrendingUp, Users, Briefcase, Headphones } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: TrendingUp,
    title: 'Anúncios Gratuitos',
    description:
      'Anuncie seus imóveis nos principais portais imobiliários gratuitamente',
  },
  {
    icon: Users,
    title: 'Networking Ilimitado',
    description: 'Conecte-se com milhares de corretores em todo o país',
  },
  {
    icon: Briefcase,
    title: 'Gestão Simplificada',
    description:
      'Ferramentas completas para gerenciar sua carteira de clientes',
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description:
      'Equipe dedicada para auxiliar no seu crescimento profissional',
  },
]

export const FeatureCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <div className="w-full max-w-[400px] md:max-w-[500px] flex flex-col items-center mx-auto relative mb-8">
      <Carousel
        setApi={setApi}
        className="w-full max-w-[320px] md:max-w-[400px] mx-auto"
        opts={{
          loop: false,
          align: 'center',
          duration: 40,
        }}
      >
        <CarouselContent className="-ml-0">
          {features.map((feature, index) => (
            <CarouselItem key={index} className="pl-0 basis-full">
              <div className="p-1">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom positioned navigation arrows */}
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 h-12 w-12 border-none shadow-button hover:scale-105 hover:bg-background transition-all duration-150 disabled:opacity-50" />
          <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 h-12 w-12 border-none shadow-button hover:scale-105 hover:bg-background transition-all duration-150 disabled:opacity-50" />
        </div>

        {/* Mobile arrows (positioned closer) */}
        <div className="md:hidden">
          <CarouselPrevious className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-10 w-10 border-none shadow-button disabled:opacity-50" />
          <CarouselNext className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-10 w-10 border-none shadow-button disabled:opacity-50" />
        </div>
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-[30px]">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-2 w-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
              index === current ? 'bg-primary' : 'bg-[#CCCCCC]',
            )}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
