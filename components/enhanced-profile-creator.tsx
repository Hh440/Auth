'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { PlusCircle, X, User, MapPin, FileText, Link, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function Profile() {
  const { theme, setTheme } = useTheme()
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState('')

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()])
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader className="border-b border-border/50">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">Create Your Profile</CardTitle>
              <div className="flex items-center space-x-2">
                <Label htmlFor="dark-mode" className="text-sm">Theme</Label>
                <Switch
                  id="dark-mode"
                  checked={theme === 'dark'}
                  onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Name</span>
                  </Label>
                  <Input id="name" placeholder="Your name" className="bg-background/50" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <Label htmlFor="location" className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Location</span>
                  </Label>
                  <Input id="location" placeholder="Your location" className="bg-background/50" />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <Label htmlFor="bio" className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Bio</span>
                </Label>
                <Textarea id="bio" placeholder="Tell us about yourself" className="bg-background/50" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <Label htmlFor="avatar" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Avatar URL</span>
                  </Label>
                  <Input id="avatar" type="url" placeholder="https://example.com/avatar.jpg" className="bg-background/50" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <Label htmlFor="portfolio" className="flex items-center space-x-2">
                    <Link className="w-4 h-4" />
                    <span>Portfolio Link</span>
                  </Label>
                  <Input id="portfolio" type="url" placeholder="https://yourportfolio.com" className="bg-background/50" />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <Label className="flex items-center space-x-2">
                  <PlusCircle className="w-4 h-4" />
                  <span>Skills</span>
                </Label>
                <div className="flex space-x-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    className="bg-background/50"
                  />
                  <Button type="button" onClick={addSkill} size="icon" variant="outline">
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm flex items-center"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-1 text-primary/70 hover:text-primary"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <Label htmlFor="github" className="flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </Label>
                  <Input id="github" type="url" placeholder="https://github.com/yourusername" className="bg-background/50" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <Label htmlFor="linkedin" className="flex items-center space-x-2">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </Label>
                  <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourusername" className="bg-background/50" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <Label htmlFor="twitter" className="flex items-center space-x-2">
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </Label>
                  <Input id="twitter" type="url" placeholder="https://twitter.com/yourusername" className="bg-background/50" />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button type="submit" className="w-full bg-primary/90 hover:bg-primary text-primary-foreground">
                  Create Profile
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}