import Wrapper from "@/components/global/wrapper";
import Features from "@/components/marketing/features";
import {Footer} from "@/components/marketing/footer";
import Hero from "@/components/marketing/hero";
import Testimonials from "@/components/marketing/testimonials";

export default function Home() {
  return (
    <>
      <Hero/>
      <Wrapper className="py-20 bg-black">
      <Features/>
      </Wrapper>
      <Testimonials/>
      <Footer/>
      
      </>
    
  );
}
