"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { ScrollArea } from '@radix-ui/react-scroll-area';

const about = {
  title: 'About me',
  info: [
    { fieldName: "Name", fieldValue: "Aamira" },
    { fieldName: "Phone", fieldValue: "(91) 800" },
    { fieldName: "Experience", fieldValue: "12+ years" },
    { fieldName: "Skype", fieldValue: "aamira@" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "aamira02@gmail" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Hindi, Arabic" },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "Professional journey and career highlights",
  items: [
    {
      company: "Texch",
      position: "Full Stack Developer",
      duration: "2024-Present",
    },
    {
      company: "Web Design Studios",
      position: "Front-End Developer",
      duration: "2022-2024",
    },
    {
      company: "E-commerce Startup",
      position: "Full Stack Developer",
      duration: "2024-Present",
    },
    {
      company: "Tech Academy",
      position: "Technical Assistant",
      duration: "2024-Present",
    },
    {
      company: "Digital Agency",
      position: "Editor",
      duration: "2024-Present",
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description: "Academic background and qualifications",
  items: [
    {
      institute: "Dayanand Sagar College",
      degree: "Full Stack Development",
      duration: "2024",
    },
    {
      institute: "Dayanand Sagar College",
      degree: "Web Development Certification",
      duration: "2024",
    },
    {
      institute: "Dayanand Sagar College",
      degree: "Advanced Programming",
      duration: "2024",
    },
    {
      institute: "Dayanand Sagar College",
      degree: "Software Engineering",
      duration: "2024",
    },
    {
      institute: "Dayanand Sagar College",
      degree: "Computer Science",
      duration: "2024",
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "Technical expertise and technologies",
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML 5' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaNodeJs />, name: 'Node.js' },
  ]
};

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } 
      }} 
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[220px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
          <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-8 rounded-xl shadow-md flex flex-col gap-2"
                      >
                        <h4 className="text-xl font-semibold text-white">{item.company}</h4>
                        <p className="text-white/60">{item.position}</p>
                        <p className="text-white/40">{item.duration}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {education.items.map((item, index) => (
                    <div key={index} className="bg-[#232329] p-4 rounded-xl shadow-md">
                      <h4 className="text-xl font-semibold text-white">{item.institute}</h4>
                      <p className="text-white/60">{item.degree}</p>
                      <p className="text-white/40">{item.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.skillList.map((skill, index) => (
                    <div key={index} className="bg-[#232329] p-4 rounded-xl flex flex-col items-center">
                      <div className="text-3xl text-accent mb-2">{skill.icon}</div>
                      <p className="text-white/60">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{about.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {about.info.map((item, index) => (
                    <div key={index} className="bg-[#232329] p-4 rounded-xl">
                      <h4 className="text-xl font-semibold text-white/60">{item.fieldName}</h4>
                      <p className="text-white">{item.fieldValue}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume