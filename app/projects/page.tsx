export const metadata = {
    title: "Business Name",
    description: "Home page of Business Name"
};
  
import PageIllustration from "@/components/page-illustration";
import { SmoothScrollHero } from "@/components/smooth-scroll";
import StackCarousel from "@/components/tech-stack";


export default function Projects() {
return (
    <>
    <PageIllustration />
    <SmoothScrollHero/>  {/*Intro Image Scroll */}
    <StackCarousel/>
    </>
);
}