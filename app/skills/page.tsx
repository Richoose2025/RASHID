"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsPage() {
  const programmingSkills = [
    { name: "C", level: 85 },
    { name: "C++", level: 80 },
    { name: "Java", level: 75 },
    { name: "Python", level: 70 },
  ]

  const webSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 65 },
  ]

  const databaseSkills = [{ name: "MySQL", level: 60 }]

  const otherSkills = [
    { name: "Git & GitHub", level: 65 },
    { name: "Google Cloud Platform", level: 55 },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our team's expertise in various programming languages, web technologies, and development tools.
          </p>
        </motion.div>

        <Tabs defaultValue="programming" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8 bg-white/10 p-1">
            <TabsTrigger value="programming" className="data-[state=active]:bg-purple-500 text-white">
              Programming
            </TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-purple-500 text-white">
              Web Dev
            </TabsTrigger>
            <TabsTrigger value="database" className="data-[state=active]:bg-purple-500 text-white">
              Database
            </TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:bg-purple-500 text-white">
              Other Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programming">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-white">{skill.name}</CardTitle>
                        <span className="text-gray-300">{skill.level}%</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-white/20"
                        indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="web">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              {webSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-white">{skill.name}</CardTitle>
                        <span className="text-gray-300">{skill.level}%</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-white/20"
                        indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="database">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              {databaseSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-white">{skill.name}</CardTitle>
                        <span className="text-gray-300">{skill.level}%</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-white/20"
                        indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="other">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              {otherSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-white">{skill.name}</CardTitle>
                        <span className="text-gray-300">{skill.level}%</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-white/20"
                        indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Academic Achievement</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science (BSC CS)</h3>
                  <p>University of Kerala (PMSA Arts and Science College Kuttukadu Kadakkal)</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">CGPA: 7.278</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
