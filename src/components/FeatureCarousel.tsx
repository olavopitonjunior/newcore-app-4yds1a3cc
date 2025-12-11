/* FeatureCarousel Component - Interactive 3D carousel with circular features */
import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { FeatureCard } from '@/components/FeatureCard'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'

const DEFAULT_ITEMS = [
  {
    title: 'Anúncios Gratuitos.',
    description: 'Seus imóveis nos principais portais imobiliários.',
  },
  {
    title: 'Maior comissão do mercado.',
    description: 'A maior parte da comissão é sua.',
  },
  {
    title: 'Transparência e Liberdade',
    description: 'Tudo que você precisa está no APP.',
  },
  {
    title: 'Treinamentos e Acompanhamento',
    description: 'Sistema de treinamentos Newcore.',
  },
]

export const FeatureCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

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

  const onScroll = useCallback((api: CarouselApi) => {
    if (!api) return

    const slides = api.slideNodes()
    const rootNode = api.rootNode()
    const viewportCenter = rootNode.getBoundingClientRect().width / 2

    slides.forEach((slide) => {
      const slideRect = slide.getBoundingClientRect()
      const slideCenter = slideRect.left + slideRect.width / 2
      const dist = slideCenter - viewportCenter

      // Calculate normalized distance based on slide width
      const percent = dist / (slideRect.width || 1)

      const rotateY = percent * 45
      const scale = 1 - Math.abs(percent) * 0.15
      const opacity = 1 - Math.abs(percent) * 0.2

      const content = slide.querySelector(
        '.feature-card-wrapper',
      ) as HTMLElement
      if (content) {
        content.style.transform = `perspective(1000px) rotateY(${rotateY}deg) scale(${scale})`
        content.style.opacity = `${Math.max(opacity, 0.5)}`
        // Adjust z-index to ensure center item is on top
        content.style.zIndex = `${10 - Math.round(Math.abs(percent) * 10)}`
      }
    })
  }, [])

  useEffect(() => {
    if (!api) return

    onScroll(api)
    api.on('scroll', () => onScroll(api))
    api.on('reInit', () => onScroll(api))
  }, [api, onScroll])

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <div className="w-full flex flex-col items-center relative mb-8">
      <Carousel
        setApi={setApi}
        plugins={[autoplayRef.current]}
        className="w-full max-w-[100vw] overflow-visible perspective-1000"
        opts={{
          loop: true,
          align: 'center',
          dragFree: false,
        }}
      >
        <CarouselContent className="-ml-0 items-center">
          {DEFAULT_ITEMS.map((feature, index) => (
            <CarouselItem
              key={index}
              className="pl-0 basis-[85%] md:basis-[55%] lg:basis-[40%] flex justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="feature-card-wrapper transition-none will-change-transform p-4"
                style={{ transformOrigin: 'center center' }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  className="w-[280px] h-[280px] md:w-[340px] md:h-[340px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-3 mt-8 z-10">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
              index === current
                ? 'bg-primary w-8'
                : 'bg-border hover:bg-muted-foreground/50',
            )}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
