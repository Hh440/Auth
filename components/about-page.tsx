'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Circle, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AboutPage() {
  const [activeTab, setActiveTab] = useState("about")
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const boardSquares = [
    { symbol: 'X', color: 'text-blue-500' },
    { symbol: 'O', color: 'text-red-500' },
    { symbol: 'X', color: 'text-blue-500' },
    { symbol: 'O', color: 'text-red-500' },
    { symbol: 'X', color: 'text-blue-500' },
    { symbol: null, color: '' },
    { symbol: 'O', color: 'text-red-500' },
    { symbol: null, color: '' },
    { symbol: 'X', color: 'text-blue-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
          Tic Tac Toe: Reimagined
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="howToPlay">How to Play</TabsTrigger>
            <TabsTrigger value="strategies">Strategies</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Tic Tac Toe</CardTitle>
                <CardDescription>Discover the timeless game of strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-4"
                >
                  Tic Tac Toe, also known as Noughts and Crosses, is a classic game that has entertained people for generations. Its simplicity belies a depth of strategy that continues to engage players of all ages.
                </motion.p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="grid grid-cols-3 gap-2 w-64 h-64 mx-auto mb-8"
                >
                  {boardSquares.map((square, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-md shadow-md flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <AnimatePresence>
                        {square.symbol && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                            className={`text-4xl font-bold ${square.color}`}
                          >
                            {square.symbol === 'X' ? <X size={32} /> : <Circle size={32} />}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => setActiveTab("howToPlay")}>Learn How to Play</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="howToPlay">
            <Card>
              <CardHeader>
                <CardTitle>How to Play</CardTitle>
                <CardDescription>Master the basics of Tic Tac Toe</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ol
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="list-decimal list-inside space-y-2 mb-4"
                >
                  <li>The game is played on a 3x3 grid.</li>
                  <li>Two players take turns placing their symbol (X or O) in empty cells.</li>
                  <li>The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins.</li>
                  <li>If all cells are filled and no player has won, the game is a draw.</li>
                </motion.ol>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Button onClick={() => toggleSection('videoTutorial')} className="w-full justify-between">
                    Watch Video Tutorial
                    {expandedSection === 'videoTutorial' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                  <AnimatePresence>
                    {expandedSection === 'videoTutorial' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe
                            src="https://www.youtube.com/embed/5SdW0_wTX5c"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                          ></iframe>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="strategies">
            <Card>
              <CardHeader>
                <CardTitle>Winning Strategies</CardTitle>
                <CardDescription>Elevate your Tic Tac Toe game</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-2 mb-4"
                >
                  <li>
                    <strong>Control the Center:</strong> The center square is the most strategic position on the board.
                  </li>
                  <li>
                    <strong>Block Your Opponent:</strong> Always be on the lookout for your opponent's potential winning moves.
                  </li>
                  <li>
                    <strong>Create a Fork:</strong> Set up a situation where you have two ways to win on your next move.
                  </li>
                  <li>
                    <strong>Play the Corners:</strong> After the center, the corners are the next most advantageous positions.
                  </li>
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Button onClick={() => toggleSection('advancedStrategies')} className="w-full justify-between">
                    Advanced Strategies
                    {expandedSection === 'advancedStrategies' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                  <AnimatePresence>
                    {expandedSection === 'advancedStrategies' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-gray-100 rounded-lg"
                      >
                        <p className="mb-2">
                          <strong>The Perfect Game:</strong> With perfect play from both sides, Tic Tac Toe always ends in a draw. Understanding this can help you force a draw even when you're not in a winning position.
                        </p>
                        <p>
                          <strong>Psychological Tactics:</strong> Sometimes, the best strategy is to play unpredictably. Mix up your opening moves to keep your opponent guessing.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => window.open('https://www.wikihow.com/Win-at-Tic-Tac-Toe', '_blank')}>Learn More Strategies</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-red-500 text-white">
            Play Now
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}