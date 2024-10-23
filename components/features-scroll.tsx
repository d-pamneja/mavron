"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const SlideContentCombined = () => {
  return (
    <div className="bg-white"> 
      <SlideContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Together, We Build."
      >
        <CollaborateContent />
      </SlideContent>
      <SlideContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Excellence Delivered."
      >
        <QualityContent />
      </SlideContent>
      <SlideContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Sleek and Smart."
      >
        <ModernContent />
      </SlideContent>
    </div>
  );
};

const IMG_PADDING = 15;

const SlideContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh] mt-8">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const CollaborateContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-black">
      Teamwork makes the dream work—and we love dreaming big!
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        We believe that collaboration is the cornerstone of exceptional outcomes. 
        We partner closely with our clients to understand their unique vision and aspirations, 
        ensuring that their needs remain at the forefront of our process.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        With us, you'll experience a tailored journey with end-to-end support as we ensure client satisfaction at every step.
        Our commitment to your success means that we meticulously craft every detail to align with your goals, 
        resulting in a digital presence that truly reflects your brand's identity.
      </p>
    </div>
  </div>
);

const QualityContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-black">
      Crafted with care, served with flair!
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Quality isn't just a checkbox for us; it's the heartbeat of our work. 
        We infuse every project with a commitment to outstanding craftsmanship, 
        ensuring that your vision is realized with flair and sophistication.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Say goodbye to cookie-cutter solutions! With us, you'll enjoy a unique digital experience, 
        thoughtfully designed to elevate your brand. Our passion for excellence ensures your website not 
        only meets expectations but redefines them.
      </p>
    </div>
  </div>
);

const ModernContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-black">
      Innovate, Don't Imitate—We're Here to Elevate!
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        At the intersection of creativity and technology, we thrive on crafting solutions that reflect the pulse of today's digital world. 
        Our team of modern software developers is committed to delivering innovative and tailored experiences that elevate your brand and engage your audience.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Say goodbye to cookie-cutter designs and templates! We craft bespoke experiences that not only meet but exceed your expectations. 
        With our agile approach, we ensure that your vision is transformed into a sleek, professional reality that stands out in the crowded marketplace.
      </p>
    </div>
  </div>
);