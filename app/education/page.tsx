"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/timeline"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Training</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic background and professional training that forms the foundation of our expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon>
                  <GraduationCap className="h-5 w-5" />
                </TimelineIcon>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col gap-1"
                >
                  <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-400">University of Kerala (PMSA Arts and Science College)</p>
                  <p className="text-sm text-gray-500">2021 - 2023</p>
                </motion.div>
              </TimelineHeader>
              <TimelineBody>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/5 p-4 rounded-lg mt-2"
                >
                  <p className="text-gray-300">
                    Completed Bachelor's degree with a CGPA of 7.278, focusing on computer science fundamentals,
                    programming, and software development.
                  </p>
                </motion.div>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon>
                  <Award className="h-5 w-5" />
                </TimelineIcon>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col gap-1"
                >
                  <h3 className="text-xl font-semibold text-white">C++ Programming Course</h3>
                  <p className="text-gray-400">AKSHAYA CENTRES</p>
                  <p className="text-sm text-gray-500">2018</p>
                </motion.div>
              </TimelineHeader>
              <TimelineBody>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/5 p-4 rounded-lg mt-2"
                >
                  <p className="text-gray-300">
                    Comprehensive training in C++ programming language, covering object-oriented programming concepts,
                    data structures, and algorithm implementation.
                  </p>
                </motion.div>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon>
                  <Calendar className="h-5 w-5" />
                </TimelineIcon>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col gap-1"
                >
                  <h3 className="text-xl font-semibold text-white">Animation Course</h3>
                  <p className="text-gray-400">Centre of Development of Imaging Technology (C-DIT)</p>
                  <p className="text-sm text-gray-500">2016</p>
                </motion.div>
              </TimelineHeader>
              <TimelineBody>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white/5 p-4 rounded-lg mt-2"
                >
                  <p className="text-gray-300">
                    Learned animation principles, digital design tools, and creative visualization techniques for
                    digital content creation.
                  </p>
                </motion.div>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon>
                  <Calendar className="h-5 w-5" />
                </TimelineIcon>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col gap-1"
                >
                  <h3 className="text-xl font-semibold text-white">Additional Courses</h3>
                  <p className="text-gray-400">Centre of Development of Imaging Technology (C-DIT)</p>
                  <p className="text-sm text-gray-500">2013 - 2015</p>
                </motion.div>
              </TimelineHeader>
              <TimelineBody>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white/5 p-4 rounded-lg mt-2 space-y-3"
                >
                  <div>
                    <h4 className="text-white font-medium">IT+ Course (2013)</h4>
                    <p className="text-gray-300">Fundamental IT skills and computer literacy training.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Office Automation Course (2014)</h4>
                    <p className="text-gray-300">Training in productivity software and office automation tools.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">DTP Course (2015)</h4>
                    <p className="text-gray-300">
                      Desktop publishing and digital design skills for print and digital media.
                    </p>
                  </div>
                </motion.div>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Volunteer Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">National Service Scheme</h3>
                <p className="text-gray-400">University of Kerala (PMSA Arts and Science College)</p>
                <p className="text-sm text-gray-500 mb-2">2021 - 2023</p>
                <p>
                  Participated in community service activities and social development programs as part of the National
                  Service Scheme.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Junior Red Cross Unit</h3>
                <p className="text-gray-400">Snups Kollayill</p>
                <p className="text-sm text-gray-500 mb-2">2013 - 2016</p>
                <p>
                  Volunteered in health awareness campaigns and community service activities through the Junior Red
                  Cross program.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
