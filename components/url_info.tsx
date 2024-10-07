import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Link as LinkIcon, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Url_info() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Shorten Your Links, Expand Your Reach
        </h1>
        
        <section className="mb-16">
          <p className="text-xl text-center mb-8 text-gray-300">
            Transform long, unwieldy URLs into short, powerful links. Boost your online presence with our cutting-edge URL shortener.
          </p>
          <div className="flex justify-center">
            <Link href="/shorten">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 transition-colors font-semibold">
                Try it now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <LinkIcon className="mr-2 h-5 w-5 text-purple-500" />
                Easy to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Shorten URLs with just a few clicks. No technical knowledge required.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Zap className="mr-2 h-5 w-5 text-purple-500" />
                Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Our system processes your links instantly, saving you valuable time.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Shield className="mr-2 h-5 w-5 text-purple-500" />
                Secure & Reliable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">We prioritize the security of your links and the privacy of your data.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-400">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Enter your long URL into our shortener",
              "Click the \"Shorten\" button",
              "Copy your new, shortened URL",
              "Share it anywhere you like!"
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg">
                <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-400">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Custom short links for brand recognition",
              "Detailed analytics to track your link performance",
              "API access for developers",
              "24/7 customer support",
              "Free plan available with premium upgrades"
            ].map((reason, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-900 p-3 rounded-lg">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">Ready to get started?</h2>
          <Link href="/signup">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 transition-colors font-semibold">
              Create your free account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}