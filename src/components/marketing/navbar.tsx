import { NAV_LINKS } from "@/constants/links";
import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import { SlideTabsExample } from "../global/SlideTab";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                            {/* <video
                              autoPlay
                              muted
                              playsInline
                              style={{ width: '55px', height: 'auto' }}
                            >
                              <source src="/icons/Logo-1-[remix] (1).mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video> */}
                        <Link href="/" className="flex items-center gap-2">
                            {/* <Icons.icon className="w-6" /> */}
                            
                            <span className="text-xl font-semibold lg:block">
                                SAIL
                            </span>
                        </Link>
                    </div>
                    <SlideTabsExample/>
                    
                    

                    <div className="flex items-center gap-4">
                        <Link href="/leadform" className="hidden lg:block">
                            <Button variant="default"className="bg-gradient-to-r from-[#4069ff] to-[#9a81fe] hover:bg-white text-white rounded-full p-5 text-light">
                               Contact
                            </Button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
