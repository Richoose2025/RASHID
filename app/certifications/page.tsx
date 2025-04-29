"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CertificationsPage() {
  const certifications = [
    {
      title: "Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
      provider: "Udemy",
      date: "2025",
      link: "https://www.udemy.com/certificate/UC-17a9916d-cef6-47b4-913d-fb5d79b6b9e7/",
      category: "Cloud Computing",
    },
    {
      title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
      provider: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/certificate/UC-17a9916d-cef6-47b4-913d-fb5d79b6b9e7/",
      category: "Data Science",
    },
    {
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]",
      provider: "Udemy",
      date: "2025",
      link: "https://www.udemy.com/certificate/UC-81c57473-66a5-49b7-acaa-5e57648b1fec/",
      category: "Machine Learning",
    },
    {
      title: "C++ Programming Course",
      provider: "AKSHAYA CENTRES",
      date: "2018",
      link: "",
      category: "Programming",
    },
    {
      title: "Animation Course",
      provider: "Centre of Development of Imaging Technology (C-DIT)",
      date: "2016",
      link: "",
      category: "Design",
    },
    {
      title: "IT+ Course",
      provider: "Centre of Development of Imaging Technology (C-DIT)",
      date: "2013",
      link: "",
      category: "IT",
    },
    {
      title: "Office Automation Course",
      provider: "Centre of Development of Imaging Technology (C-DIT)",
      date: "2014",
      link: "",
      category: "Office Skills",
    },
    {
      title: "DTP Course",
      provider: "Centre of Development of Imaging Technology (C-DIT)",
      date: "2015",
      link: "",
      category: "Design",
    },
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications & Achievements</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our team's professional certifications and educational achievements that demonstrate our expertise and
            commitment to continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white text-xl">{cert.title}</CardTitle>
                    <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {cert.provider} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {cert.link && (
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Additional Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Junior Red Cross Unit</CardTitle>
                <CardDescription className="text-gray-300">2013-2016 • Snups kollayill</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">National Service Scheme</CardTitle>
                <CardDescription className="text-gray-300">
                  2021-2023 • University of Kerala (PMSA Arts and Science College Kuttukadu Kadakkal)
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
