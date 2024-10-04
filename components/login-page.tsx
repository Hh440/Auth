"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md shadow-lg border border-blue-100 overflow-hidden">
        <div className="bg-blue-50 p-6 flex justify-center">
          <Lock className="text-blue-600 w-12 h-12" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-700">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-600 font-medium">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
              <Input 
                id="email" 
                placeholder="Enter your email" 
                type="email" 
                required 
                className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-blue-600 font-medium">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
              <Input 
                id="password" 
                placeholder="Enter your password" 
                type={showPassword ? "text" : "password"}
                required 
                className="pl-10 pr-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm text-blue-600">Remember me</Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
            Log in
          </Button>
          <div className="flex justify-between w-full text-sm">
            <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Forgot password?
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}