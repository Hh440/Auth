'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BarChart, Users, Mail, Globe, Shield, Zap, Timer, BarChart2, Layers } from "lucide-react"

export function CounterAboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Placeholder for existing navigation bar */}
      <nav className="bg-blue-600 dark:bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">Your existing navigation bar goes here</p>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-12 lg:mb-0 text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-4">Counter Clock</h1>
              <p className="text-xl text-blue-100 mb-8">Mastering Time, Empowering Progress</p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">
                Start Free Trial
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Timer, title: "Precise Timing" },
                { icon: BarChart2, title: "Smart Analytics" },
                { icon: Layers, title: "Team Sync" },
                { icon: Shield, title: "Data Security" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-blue-400 bg-opacity-20 dark:bg-blue-900 dark:bg-opacity-30 p-6 rounded-lg backdrop-blur-sm transition duration-300 ease-in-out transform hover:scale-105">
                  <item.icon className="w-12 h-12 mb-4" />
                  <span className="text-lg font-semibold text-center">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-8 text-center">About Counter Clock</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-blue-700 dark:text-blue-300 mb-4 text-lg">
                Counter Clock is not just a timekeeping application; it's a revolution in how we perceive and manage our most valuable resource - time. Born from the need for precision and efficiency in our fast-paced world, Counter Clock has quickly become the cornerstone of productivity for individuals and teams across the globe.
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-lg">
                Since our inception in 2023, we've been on a mission to transform time management from a mundane task into an empowering experience. Our state-of-the-art technology, coupled with an intuitive interface, ensures that every second counts towards your success.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">Our Vision</h3>
              <p className="text-blue-700 dark:text-blue-300 text-lg">
                To create a world where time is valued, utilized, and celebrated, enabling individuals and organizations to achieve their fullest potential.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-8 text-center">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Precise Timekeeping", description: "Accurate to the millisecond, ensuring you never miss a beat in your productivity journey." },
              { icon: BarChart, title: "Detailed Analytics", description: "Gain deep insights into your time usage with comprehensive, customizable reports." },
              { icon: Users, title: "Team Collaboration", description: "Seamlessly track time across teams and projects, fostering a culture of efficiency." },
              { icon: Zap, title: "Smart Automation", description: "Automate repetitive time-tracking tasks and focus on what truly matters." },
              { icon: Globe, title: "Cross-Platform Sync", description: "Access your time data anywhere, anytime, across all your devices." },
              { icon: Shield, title: "Data Security", description: "Your time data is protected with state-of-the-art encryption and security measures." },
            ].map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                    <feature.icon className="mr-3 h-6 w-6" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 dark:text-blue-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-8 text-center">Why Choose Counter Clock?</h2>
          <div className="bg-blue-600 dark:bg-blue-800 text-white p-10 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">Unlock Your Productivity Potential</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 max-w-2xl mx-auto">
              <li>Boost individual and team productivity by up to 25%</li>
              <li>Reduce time waste and optimize resource allocation</li>
              <li>Make data-driven decisions with our advanced analytics</li>
              <li>Seamless integration with popular project management tools</li>
              <li>24/7 customer support to ensure smooth operation</li>
            </ul>
            <div className="text-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 text-lg px-8 py-3">Start Your Free Trial</Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-8 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-blue-700 dark:text-blue-300 mb-6 text-lg">
                We're always excited to hear from you! Whether you have questions, feedback, or just want to share your Counter Clock success story, our team is here to listen and assist.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-blue-700 dark:text-blue-300">
                  <Mail className="mr-3 h-6 w-6" />
                  <a href="mailto:info@counterclock.com" className="hover:underline">info@counterclock.com</a>
                </p>
                <p className="flex items-center text-blue-700 dark:text-blue-300">
                  <Globe className="mr-3 h-6 w-6" />
                  <a href="https://www.counterclock.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.counterclock.com</a>
                </p>
              </div>
            </div>
            <Card className="bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-300 text-2xl">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 dark:text-blue-400 mb-6">Subscribe to our newsletter for the latest updates, tips, and exclusive offers.</p>
                <div className="flex">
                  <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 border border-blue-300 dark:border-blue-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" />
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-l-none px-6">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 dark:bg-blue-800 text-white py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2023 Counter Clock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}