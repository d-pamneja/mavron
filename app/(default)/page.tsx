export const metadata = {
  title: "Business Name",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import TerminalCode from "@/components/terminal-code";
import { MacbookScroll } from "@/components/macbook-scroll";
import { SlideContentCombined } from "@/components/features-scroll";
import Workflows from "@/components/workflows";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <MacbookScroll src="/images/terminal-screenshot-home.png" /> {/* Macbook Scroll */}
      <TerminalCode /> {/* Terminal */}
      {/*<SmoothScrollHero/>*/}  {/* Intro Image Scroll Template */}
      <Workflows /> {/* Features 1 */}
      {/*<Features />*/} {/* Features 2 */}
      <SlideContentCombined/>  {/* Features Scroll Template */}
      {/* <Testimonials /> */}
      {/*<Carousel/>*/}  {/* Mini Carousel Template */}
      <Cta />
    </>
  );
}
