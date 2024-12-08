"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectTrigger } from "@/components/ui/select"


import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+91)"
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "aamira"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "address",
    description: "line bazaar"
  }


];
import { motion } from "framer-motion";
import { SelectValue } from "@radix-ui/react-select"

const Contact = () => {
  return (
   <motion.section inital={{opacity: 0}} animate={{opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"} }} className="py-6 ">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none ">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
           <h3 className="text-4xl text-accent">
            work
           </h3>
           <p className="text-white/60">
            sajdfl
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="firstname" placeholder="first name"/>
            <Input type="lastName" placeholder="last name"/>
            <Input type="email" placeholder="email address"/>
            <Input type="phone no." placeholder="phone no"/>
           </div>
           <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>
                  select a serive 
                </SelectLabel>
                <SelectItem value="est">web dev</SelectItem>
                <SelectItem value="cst">Ui/ux</SelectItem>
                <SelectItem value="mst">logo des</SelectItem>
              </SelectGroup>
            </SelectContent>
           </Select>
           <Textarea className="h-[200px]" placeholder="message" />
          </form>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </div>
   </motion.section>
  )
}

export default Contact
