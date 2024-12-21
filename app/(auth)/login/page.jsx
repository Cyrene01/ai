"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, // Keep this import
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+91)",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "aamira",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "address",
    description: "line bazaar",
  },
];
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <form
        action="http://localhost:3000/login"
        method="POST"
        enctype="multipart/form-data"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>login to existing account</CardTitle>
              <CardDescription className="justify-center">
                login
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">email</Label>
                    <Input id="name" placeholder="example@gmail.com" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">name</Label>
                    <Input id="name" placeholder="enter unique username" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">sign-in</Button>
              <Button>sign-up</Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </>
  );
};

export default Contact;

//mongodb+srv://bushraaamira06:<db_password>@ai-ads.0hlgt.mongodb.net/
//passward: Aamira02
