'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Laptop, Sofa, Gift, Users, Globe, Zap, Shield } from "lucide-react"

export function DanezioAbout() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <header className="py-12 text-center bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600">
        <h1 className="text-5xl font-bold mb-4">Discover Daneizo</h1>
        <p className="text-2xl italic">Revolutionizing Rentals: Why Buy When You Can Rent It! 🎉</p>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-center">Welcome to the Future of Renting</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl mb-6 leading-relaxed">
                Step into Daneizo, where the thrill of renting rivals the excitement of buying! We've reimagined the rental experience, creating a vibrant marketplace where possibilities are endless and access trumps ownership.
              </p>
              <p className="text-xl mb-6 leading-relaxed">
                Our cutting-edge platform is a testament to innovation, constantly evolving thanks to our passionate community of users and contributors. Whether you're a tech wizard or a curious newcomer, Daneizo welcomes you to be part of this rental revolution.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-lg transform rotate-3"></div>
              <img 
                src="/placeholder.svg?height=300&width=400" 
                alt="Daneizo platform showcase" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
        
        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Our Visionary Mission</h2>
          <Card className="bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 border-none">
            <CardContent className="p-8">
              <p className="text-2xl text-center italic mb-6">
                "To empower individuals by providing affordable, accessible, and sustainable rental solutions, fostering a community where sharing resources leads to endless possibilities."
              </p>
              <ul className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <Users className="h-8 w-8" />, text: "Building a collaborative sharing economy" },
                  { icon: <Globe className="h-8 w-8" />, text: "Promoting sustainable consumption" },
                  { icon: <Zap className="h-8 w-8" />, text: "Innovating the rental experience" },
                  { icon: <Shield className="h-8 w-8" />, text: "Ensuring secure and trustworthy transactions" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full">{item.icon}</div>
                    <span className="text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Explore Our Rental Universe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <RentalCategory icon={<Laptop className="h-12 w-12" />} title="Cutting-Edge Electronics" items={["Laptops", "Smartphones", "Drones", "VR Headsets"]} gradient="from-violet-500 to-purple-600" />
            <RentalCategory icon={<Sofa className="h-12 w-12" />} title="Stylish Furniture" items={["Modern Sofas", "Ergonomic Desks", "Artistic Lamps", "Cozy Beds"]} gradient="from-emerald-400 to-teal-500" />
            <RentalCategory icon={<ShoppingBag className="h-12 w-12" />} title="Fashion Forward" items={["Designer Dresses", "Luxury Watches", "Trendy Accessories", "Formal Wear"]} gradient="from-rose-400 to-pink-600" />
            <RentalCategory icon={<Gift className="h-12 w-12" />} title="Exciting Miscellaneous" items={["Party Supplies", "Camping Gear", "Musical Instruments", "Sports Equipment"]} gradient="from-amber-400 to-orange-500" />
          </div>
        </section>
        
        <section className="text-center mb-20">
          <h2 className="text-4xl font-semibold mb-6">Join Our Innovative Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the rental revolution! Whether you're a developer, designer, or enthusiast, your skills can help shape the future of Daneizo. Contribute, collaborate, and create impact!
          </p>
          <Button variant="outline" size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white border-none">
            Start Your Daneizo Journey
          </Button>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">What Our Community Says</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex", role: "Tech Enthusiast", quote: "Daneizo has transformed how I access technology. It's like having a tech playground at my fingertips!", gradient: "from-indigo-400 to-blue-500" },
              { name: "Sophia", role: "Fashion Blogger", quote: "The fashion rentals on Daneizo are a game-changer. I can stay on trend without the hefty price tag.", gradient: "from-fuchsia-400 to-pink-500" },
              { name: "Marcus", role: "Startup Founder", quote: "Furnishing our office space was a breeze with Daneizo. Flexible, affordable, and hassle-free!", gradient: "from-lime-400 to-green-500" }
            ].map((testimonial, index) => (
              <Card key={index} className={`bg-gradient-to-br ${testimonial.gradient} border-none`}>
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-blue-100">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Dive In?</h2>
          <p className="text-xl mb-8">
            Experience the freedom of renting. Join Daneizo today and unlock a world of possibilities!
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600">
              Start Renting
            </Button>
            <Button variant="outline" size="lg" className="border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white">
              List Your Items
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#080816] text-center py-8 mt-20">
        <p>&copy; {new Date().getFullYear()} Daneizo. All rights reserved.</p>
        <p className="mt-2">Empowering the sharing economy, one rental at a time.</p>
      </footer>
    </div>
  )
}

function RentalCategory({ icon, title, items, gradient }: { icon: React.ReactNode; title: string; items: string[]; gradient: string }) {
  return (
    <Card className={`bg-gradient-to-br ${gradient} border-none overflow-hidden group`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">{title}</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <Badge variant="secondary" className="mr-2 bg-white bg-opacity-20">{index + 1}</Badge>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}