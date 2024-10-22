export const metadata = {
  title: "Business Name",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import { MacbookScroll } from "@/components/macbook-scroll";
import { SmoothScrollHero } from "@/components/smooth-scroll";
import { TextParallaxContentExample } from "@/components/features-scroll";
import Carousel from "@/components/mini-carousel";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <MacbookScroll src="/images/terminal-screenshot-home.png" /> {/* Macbook Scroll */}
      <Hero /> {/* Terminal */}
      {/*<SmoothScrollHero/>*/}  {/* Intro Image Scroll Template */}
      <Workflows /> {/* Features 1 */}
      {/*<Features />*/} {/* Features 2 */}
      <TextParallaxContentExample/>  {/* Features Scroll Template */}
      {/* <Testimonials /> */}
      {/*<Carousel/>*/}  {/* Mini Carousel Template */}
      <Cta />
    </>
  );
}
