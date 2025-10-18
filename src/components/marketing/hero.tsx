"use client";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";
import { Cursor } from "../ui/cursor";
import Features from "./features";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
const Hero = () => {
    return (
        <div
        className="bg-[url('/hero-bg.png')] bg- bg-center bg-no-repeat 
            w-full mx-auto lg:max-w-screen lg:mx-auto px-4 md:px-12 py-10 relative">
        <div className="relative flex flex-col items-center justify-center w-full py-10">
            <div className="absolute flex lg:hidden size-40 rounded-full bg-white blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="flex flex-col items-center justify-center gap-y-8 relative">
                <Container className="hidden lg:flex absolute inset-0 top-7/12 mb-auto flex-col items-center justify-center w-full min-h-screen z-0">
                    <OrbitingCircles
                        speed={0.5}
                        radius={300}
                    >
                        <Icons.circle1 className="size-4 text-foreground/70" />
                        <Icons.circle2 className="size-1 text-foreground/80" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.25}
                        radius={400}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.1}
                        radius={500}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                </Container>

                <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
                    <Container className="relative block overflow-hidden">
                    <Cursor
                      attachToParent
                      variants={{
                        initial: { height: 0, opacity: 0, scale: 0.3 },
                        animate: { height: "auto", opacity: 1, scale: 1 },
                        exit: { height: 0, opacity: 0, scale: 0.3 },
                      }}
                      transition={{
                        type: "spring",
                        duration: 0.3,
                        bounce: 0.1,
                      }}
                      className="overflow-hidden"
                      springConfig={{
                        bounce: 0.01,
                      }}
                    >
                       <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-[400px] h-auto rounded-[25px] bg-transparent"
                        >
                          <source src="/icons/App Intro Show Reel.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                    </Cursor>
                        <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-[#4069ff] to-[#9a81fe]  text-[9px] font-light mr-2 text-white-700">
                                    NEW
                                </span>
                                Explore the 2024 recap
                            </span>
                        </button>
                    </Container>
                    <Container delay={0.15}>
                        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-center !leading-tight max-w-4xl mx-auto   ">
                        {/* Smart, Scalable & Sales-Driven – Digital Solutions That Work! */}
                           Smart, Scalable & Sales-Driven {" "}
                           </h1>
                           <br/>
                           <AnimatedGradientText colorFrom="#fff"
                           colorTo="#2d66ff"
                           className="text-4xl md:text-4xl lg:text-6xl font-bold text-center !leading-tight max-w-3xl mx-auto ">
                           
                            <span >
                             Solutions {" "}
                            </span>
                            That Work's
                           
                            </AnimatedGradientText>
                        
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-xl mx-auto mt-2 text-base lg:text-base text-center text-muted-foreground">
                        Empowering brands with cutting-edge technology, innovative strategies, and a personalized approach
                        </p>
                    </Container>
                    <Container delay={0.25} className="z-20">
                        <div className="flex items-center justify-center mt-6 gap-x-4">
                            <Link href="/leadform" className="flex items-center gap-2 group">
                                <InteractiveHoverButton  className="bg-gradient-to-r from-[#4069ff] to-[#9a81fe] text-white rounded-full">
                                    Need a Custom Solution
                                    {/* <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-all duration-300" /> */}
                                </InteractiveHoverButton>
                            </Link>
                        </div>

                    </Container>
                    <Container delay={0.3} className="relative items-center justify-center">
                    <p className="text-gray-400 text-sm mb-8 text-ce">Trusted by 500+ companies worldwide</p>
                    <div className="flex items-center justify-center space-x-8 md:space-x-12 opacity-60">
                        <div className="text-white font-bold text-lg">attracts</div>
                        <div className="text-white font-bold text-lg">verse</div>
                        <div className="text-white font-bold text-lg">exon</div>
                        <div className="text-white font-bold text-lg">celio</div>
                        <div className="text-white font-bold text-lg">Holob</div>
                        
                    </div>
                    </Container>
                    

                    
                    

                </div>
                
                
            </div>
            
        </div>
       
        </div>
    )
};

export default Hero
