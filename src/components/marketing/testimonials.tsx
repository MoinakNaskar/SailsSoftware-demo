import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import Container from "../global/container";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"

const reviews = [
  {
    name: "Amit Khanna",
    username: "CEO, UrbanNest Interiors",
    body: "Exceptional service! Wonder Creative Studio transformed our online presence with a stunning website and powerful marketing strategy",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Neha Sharma",
    username: "Founder, FreshCart Organics",
    body: "Their automation solutions saved us hours of manual work. The team is highly professional and result-driven!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Rahul Mehta",
    username: "Director, BuildRight Constructions",
    body: "From branding to lead generation, Wonder Creative Studio has been our one-stop solution for digital success",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Priya Iyer",
    username: "Marketing Head, StyleAura Fashion",
    body: "We saw a 3X increase in engagement after they revamped our website and social media campaigns!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Vikram Singh",
    username: "Co-Founder, TechNova Solutions",
    body: "The best decision we made was partnering with Wonder Creative Studio. Their automation tools are game-changers!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Sneha Patel",
    username: "Founder, Blissful Living",
    body: "Their expertise in performance marketing helped us scale our e-commerce brand faster than we imagined",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <div className="relative flex h-[700px] max-w-screen flex-col items-center justify-center overflow-hidden rounded-lg my-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug my-6">
        See What Our 
        <span className="font-subheading italic bg-gradient-to-r from-[#fff] to-[#2d66ff]
      bg-clip-text text-transparent"
      >{' '}Customer Says
      </span>
      </h1>
      <Container>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      </Container>
      <Container>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      </Container>
      <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl">
  <ScrollVelocityRow baseVelocity={20} direction={1} className="justify-between">
    <p className="px-2">{" "}Developed By Wonder Creative Studio  {" "}</p>
    <p>{" "}Developedd By Wonder Creative Studio  {" "}</p>
  </ScrollVelocityRow>
  <ScrollVelocityRow baseVelocity={20} direction={-1}>
  {" "}Developed By Wonder Creative Studio {" "}
  </ScrollVelocityRow>
</ScrollVelocityContainer>
    </div>
  );
}
