"use client";

import { ReactLenis } from "lenis/dist/lenis-react";
import React from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generation";
import Image from "next/image";
import Link from "next/link";
import { SiSpacex } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        {/* Project Section 1 */}
        {/* <TextGenerateEffectBox1 />
        <Project /> */}
        {/* Project Section 2 */}
        {/* <HeroParallax products={dummyProducts} /> */}
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      {/* <ParallaxImages /> */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" /> */}
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  const textOpacity = useTransform(scrollY, [SECTION_HEIGHT - 200, SECTION_HEIGHT + 200], [1, 0]); 
  const textY = useTransform(scrollY, [SECTION_HEIGHT - 200, SECTION_HEIGHT + 200], [0, -100]); 

  return (
    <div className="sticky top-0 h-screen w-full">
      {/* Central Image */}
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=3108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Title and description */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white"
        style={{
          opacity: textOpacity,
          y: textY,
          color : 'black'
        }}
      >
        <motion.h1 className="text-5xl font-bold">Transcendence</motion.h1>
        <motion.p className="text-xl mt-4">With us, your vision doesn't just take off—it soars beyond the horizon.</motion.p>
      </motion.div>
    </div>
  );
};

// const ParallaxImages = () => {
//   return (
//     <div className="mx-auto max-w-5xl px-4 pt-[200px]">
//       <ParallaxImg
//         src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="And example of a space launch"
//         start={-200}
//         end={200}
//         className="w-1/3"
//       />
//       <ParallaxImg
//         src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="An example of a space launch"
//         start={200}
//         end={-250}
//         className="mx-auto w-2/3"
//       />
//       <ParallaxImg
//         src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Orbiting satellite"
//         start={-200}
//         end={200}
//         className="ml-auto w-1/3"
//       />
//       <ParallaxImg
//         src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Orbiting satellite"
//         start={0}
//         end={-500}
//         className="ml-24 w-5/12"
//       />
//     </div>
//   );
// };

// const ParallaxImg = ({
//   className,
//   alt,
//   src,
//   start,
//   end,
// }: {
//   className?: string;
//   alt: string;
//   src: string;
//   start: number;
//   end: number;
// }) => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     // @ts-ignore
//     offset: [`${start}px end`, `end ${end * -1}px`],
//   });

//   const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

//   const y = useTransform(scrollYProgress, [0, 1], [start, end]);
//   const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

//   return (
//     <motion.img
//       src={src}
//       alt={alt}
//       className={className}
//       ref={ref}
//       style={{ transform, opacity }}
//     />
//   );
// };

{/* Project Section 1 */}
const TranscendenceText = `At [Your Company Name], we understand that every project is unique and deserves meticulous attention to detail. Our dedicated team combines creativity and expertise to transform your vision into reality. We pride ourselves on our superior service quality, ensuring that each aspect of your project is executed flawlessly. With a keen focus on collaboration, we work closely with you to identify your goals and craft tailored solutions that drive success. From concept to completion, our unwavering commitment to excellence ensures that your project not only meets but exceeds expectations. Let us help you transcend your aspirations and achieve extraordinary results that resonate with your audience.`;

function TextGenerateEffectBox1() {
  return <section
            id="launch-text-box"
            className="mx-auto max-w-5xl px-4 py-48 text-white"
          >
            <TextGenerateEffect duration={1} filter={false} words={TranscendenceText} />
          </section>;
}

const Project = () => {
  return (
    <section
      id="launch-project"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Our Projects
      </motion.h1>
      <ProjectItem title="Vinayak Multinationals" link = "https://www.google.com/" date="Sep 24" techstack="PHP/JS" />
      <ProjectItem title="Vinayak Enterprises" link = "https://www.google.com/" date="Sep 24" techstack="PHP/JS" />
      <ProjectItem title="Haysoftex" link = "https://www.google.com/" date="Oct 24" techstack="PHP/JS" />
      <ProjectItem title="Chitra Movie AI" link = "https://www.google.com/" date="Nov 24" techstack="MERN" />
    </section>
  );
};

const ProjectItem = ({
  title,
  link,
  date,
  techstack,
}: {
  title: string;
  link : string;
  date: string;
  techstack: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <a href={link} className="text-sm uppercase text-zinc-500 hover:text-zinc-300">Link</a>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{techstack}</p>
        <FaCode />
      </div>
    </motion.div>
  );
};

{/* Project Section 2 */}
const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <TextContent />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProjectCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProjectCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProjectCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const TextContent = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

const ProjectCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

const dummyProducts = [
  {
    title: "Product 1",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+1",
  },
  {
    title: "Product 2",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+2",
  },
  {
    title: "Product 3",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+3",
  },
  {
    title: "Product 4",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+4",
  },
  {
    title: "Product 5",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+5",
  },
  {
    title: "Product 6",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+6",
  },
  {
    title: "Product 7",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+7",
  },
  {
    title: "Product 8",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+8",
  },
  {
    title: "Product 9",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+9",
  },
  {
    title: "Product 10",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+10",
  },
  {
    title: "Product 11",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+11",
  },
  {
    title: "Product 12",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+12",
  },
  {
    title: "Product 13",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+13",
  },
  {
    title: "Product 14",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+14",
  },
  {
    title: "Product 15",
    link: "#",
    thumbnail: "https://via.placeholder.com/600x400?text=Product+15",
  },
];
