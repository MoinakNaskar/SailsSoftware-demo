import React from 'react'
import Container from "../global/container";
import Image from "next/image";
import { FEATURES } from '@/constants/features';
import { MagicCard } from '../ui/magic-card';
import { cn } from '@/lib/utils';
import { AnimatedList } from '../ui/animated-list';
import { AnimatedListDemo } from './AnimtedNotification';
import { AnimatedBeamDemo } from './BeamFeature';

function Features() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-4 overflow-hidden bg-black ">
        <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                      Innovation & marketing <br /> <span className="font-subheading italic bg-gradient-to-r from-[#fff] to-[#2d66ff]
      bg-clip-text text-transparent">made simple</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6 ">
                        Transform your business with automation and technology. Create campaigns faster, generate better leads, and make growth skyrocketing.
                    </p>
                </div>
            </Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-screen-xl relative overflow-visible">

{FEATURES.map((feature, index) => (
    <Container key={feature.title} delay={0.1 + index * 0.1} className={cn(
        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",
      
        
    )}>
        <MagicCard
            gradientFrom="#fff"
            gradientTo="#2d66ff"
            className="p-4 lg:p-6 lg:rounded-3xl"
            gradientColor="rgba(196,234,0,0.1)"
        >
            
            <div className="mt-6 max-w-full  bg-card/50 overflow-hidden">
            {
              feature.image? index==3?<Image
              src={feature.image}
              alt={feature.title}
              width={250}
              height={50}
              className="w-full h-half object-cover"
          />:<Image
              src={feature.image}
              alt={feature.title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
          />:
            index==2? 
            <div>
              <AnimatedListDemo></AnimatedListDemo>
            </div>: index==1?
            <AnimatedBeamDemo/>
            
            : <></> }
         
            </div>
            <div className="flex items-center space-x-4 mt-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <feature.icon className="size-5 text-primary" />
                    {feature.title}
                </h3>
            </div>
            <p className="text-sm text-muted-foreground">
                {feature.description}
            </p>
        </MagicCard>
    </Container>
))}
</div>
            
    </div>
  )
}

export default Features