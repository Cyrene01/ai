
"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub, } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { Description } from "@radix-ui/react-dialog"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import WorkSliderBtns from "@/components/ui/WorkSliderBtns"
const projects = [
{
  nums: '01',
  category: 'frontend',
  title: 'project 1',
  description: 'akldj',
  stack: [
    {name: 'html'}, {name: "css"}
  ],
  image: '/assets/work/thumb1.png',
  live: "",
  github: "",
},
{
  nums: '02',
  category: 'frontend',
  title: 'project 2',
  description: 'akldj',
  stack: [
    {name: 'html'}, {name: "css"}
  ],
  image: '/assets/work/thumb1.png',
  live: "",
  github: "",
},
{
  nums: '03',
  category: 'frontend',
  title: 'project 3',
  description: 'akldj',
  stack: [
    {name: 'html'}, {name: "css"}
  ],
  image: '/assets/work/thumb1.png',
  live: "",
  github: "",
},

];
const Work = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

const handleSlideChange = (swiper) => {
  const currentIndex = swiper.activeIndex;
  setSelectedProject(projects[currentIndex]);
};

  return (
    <motion.section inital={{opacity: 0}} animate={{opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"} }} className="min-h-[80vh] flex flex-co justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col cl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects.nums}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects.category} project
              </h2>
              <p className="text-white/60 ">
                {projects.description}
              </p>
              <ul className="flex gap-4">
                {selectedProject.stack.map((item, index)=> {
                  return (<li key={index} className="text-xl text-accent">{index.name}

                  {index !== selectedProject.stack.length - 1 && ","}
                  </li>);
                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">

                
              <Link href={selectedProject.live || "#"} passHref>
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className="w-[72px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
      </TooltipTrigger>
      <TooltipContent>
        <p>Live project</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</Link>
<Link href={selectedProject.github || "#"} passHref>
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className="w-[72px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
        <BsGithub className="text-white text-3xl group-hover:text-accent" />
      </TooltipTrigger>
      <TooltipContent>
        <p>GitHub Repo</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</Link>

              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}>
              {projects.map((project, index)=> {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="aboslute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                   <Image src={project.image} fill className="object-cover" alt="" /></div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 button-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Work
