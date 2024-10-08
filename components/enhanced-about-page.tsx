'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Smartphone, Users, Award, TrendingUp, Zap } from 'lucide-react'

export function EnhancedAbout() {
  const [activeTab, setActiveTab] = useState("mission")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Readmi
            </Link>
            <div className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 font-semibold">
                About
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-800 transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0" style={parallaxStyle}>
            <Image
              src="/placeholder.svg"
              alt="Readmi background"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              className="text-6xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Readmi
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionizing the way you read, one page at a time. Dive into a world where technology meets literature.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-gray-800 hover:bg-gray-700 text-white text-lg px-8 py-6">
                Explore Our Story
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6 text-lg">
                  Readmi was born from a simple yet powerful idea: to make reading more accessible, enjoyable, and 
                  interactive for everyone. Founded in 2015 by a group of passionate readers and tech enthusiasts, 
                  we set out to create devices that would enhance the reading experience while maintaining the 
                  comfort and simplicity of traditional books.
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  Our journey has been one of constant innovation and growth. From our first e-reader to our latest 
                  smart reading devices, we've always pushed the boundaries of what's possible in digital reading. 
                  Today, Readmi is a trusted name in the e-reader market, known for our cutting-edge technology, 
                  sleek design, and commitment to the reading community.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="/placeholder.svg"
                  alt="Readmi journey"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose Readmi?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, title: "Vast Library", description: "Access millions of books at your fingertips" },
                { icon: Smartphone, title: "Smart Technology", description: "Intuitive interfaces and advanced features" },
                { icon: Users, title: "Community", description: "Join a global network of passionate readers" },
                { icon: Award, title: "Award-Winning", description: "Recognized for innovation and design excellence" },
                { icon: TrendingUp, title: "Continuous Improvement", description: "Regular updates and new features" },
                { icon: Zap, title: "Long Battery Life", description: "Read for weeks on a single charge" },
              ].map((item, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-gray-800 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Vision</h2>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mission">Mission</TabsTrigger>
                <TabsTrigger value="vision">Vision</TabsTrigger>
                <TabsTrigger value="values">Values</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      To empower readers worldwide by providing innovative, user-friendly, and accessible digital 
                      reading solutions that enhance the joy of reading and learning.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="vision" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                      To create a world where everyone has access to a vast library of knowledge and stories, 
                      breaking down barriers to education and imagination through cutting-edge reading technology.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="values" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Innovation: Constantly pushing the boundaries of reading technology</li>
                      <li>Accessibility: Making reading available to everyone, everywhere</li>
                      <li>Quality: Delivering premium products and experiences</li>
                      <li>Community: Fostering a global community of readers and learners</li>
                      <li>Sustainability: Committed to environmentally friendly practices</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'E-Reader Pro', description: 'Our flagship e-reader with a 7" high-resolution display', image: '/placeholder.svg' },
                { name: 'Readmi Pocket', description: 'Ultra-portable e-reader that fits in your pocket', image: '/placeholder.svg' },
                { name: 'Readmi Kids', description: 'Designed for young readers with parental controls', image: '/placeholder.svg' },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah L.", quote: "Readmi has transformed my reading habits. I can't imagine life without it now!" },
                { name: "John D.", quote: "The E-Reader Pro's battery life is incredible. I only need to charge it once a month!" },
                { name: "Emma W.", quote: "As a parent, I love the Readmi Kids. It's both educational and fun for my children." },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <p className="text-gray-800 font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Start Your Readmi Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied readers and experience the future of reading today.
            </p>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white text-lg px-8 py-6">
              Explore Our Products
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">About Readmi</h3>
              <p className="text-gray-600">Revolutionizing the way you read, one page at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
                <li><Link href="/products" className="text-gray-600 hover:text-gray-800">Products</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a></li>
              
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-md border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                />
                <Button type="submit" className="rounded-l-none bg-gray-800 hover:bg-gray-700 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">© 2024 Readmi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}