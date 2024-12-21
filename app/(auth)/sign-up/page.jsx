"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Sign-Up successful: " + result.message);
      } else {
        const error = await response.json();
        alert("Sign-Up failed: " + error.message);
      }
    } catch (err) {
      alert("Error connecting to the server: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            Create Account<span className="text-accent">.</span>
          </CardTitle>
          <CardDescription>
            Sign up and enter OTP to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-pink-500"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-pink-500"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="text-pink-500"
                id="username"
                placeholder="Enter unique username"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone No.</Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="text-pink-500"
                id="phone"
                placeholder="+91 800000000"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  name="password"
                  value={formData.password}
                  type={showPassword ? "text" : "password"}
                  onChange={handleInputChange}
                  className="text-pink-500"
                  id="password"
                  placeholder="Enter your password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  className="absolute right-2 top-2.5"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  type={showPassword ? "text" : "password"}
                  onChange={handleInputChange}
                  className="text-pink-500"
                  id="confirmPassword"
                  placeholder="Re-enter your password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  className="absolute right-2 top-2.5"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Sign In</Button>
          <Button onClick={handleSignIn}>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
