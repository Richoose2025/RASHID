"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ArrowDown, Mail, Phone, ExternalLink, Github, Linkedin, Send } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const scrollToSection = (section: string) => {
    sectionRefs[section as keyof typeof sectionRefs]?.current?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(section)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop
          const height = ref.current.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          <Environment preset="city" />
          <BackgroundScene />
        </Canvas>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-2xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                MUHAMMED RASHID N
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {Object.keys(sectionRefs).map((section, index) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`text-white hover:text-purple-400 transition-colors ${
                      activeSection === section ? "text-purple-400 font-semibold" : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Tabs defaultValue={activeSection} onValueChange={scrollToSection}>
                <TabsList className="bg-black/50">
                  {Object.keys(sectionRefs).map((section) => (
                    <TabsTrigger key={section} value={section} className="text-xs">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Passionate developer and pursuing MCA.                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Creating immersive digital experiences with cutting-edge technologies and creative design solutions
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  Contact Me
                </Button>
                <Button
                  onClick={() => scrollToSection("skills")}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  View Skills
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/20">
                {/* Replace with your photo */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white">
                  <p className="text-center px-4">
                    Add your photo here
                    <br />
                    (300x300px recommended)
                  </p>
                </div> */}


                <img
                src="./img/ra.png"
                alt="Muhammed Rashid N Profile Photo"
                className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          >
            <button onClick={() => scrollToSection("about")} aria-label="Scroll down">
              <ArrowDown size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black/80 to-purple-950/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-300">University of Kerala (PMSA Arts and Science College)</p>
                    <p className="text-sm text-gray-400">2021 - 2023</p>
                    <Badge className="mt-2 bg-purple-500/20 text-purple-300 border-purple-500">CGPA: 7.278</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">Additional Training</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                      <li>C++ Programming Course (2018) - AKSHAYA CENTRES</li>
                      <li>Animation Course (2016) - C-DIT</li>
                      <li>Office Automation Course (2014) - C-DIT</li>
                      <li>DTP Course (2015) - C-DIT</li>
                      <li>IT+ Course (2013) - C-DIT</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Experience & Volunteer Work</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">National Service Scheme</h3>
                    <p className="text-gray-300">University of Kerala (PMSA Arts and Science College)</p>
                    <p className="text-sm text-gray-400">2021 - 2023</p>
                    <p className="mt-2 text-gray-300">
                      Participated in community service activities and social development programs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">Junior Red Cross Unit</h3>
                    <p className="text-gray-300">Snups Kollayill</p>
                    <p className="text-sm text-gray-400">2013 - 2016</p>
                    <p className="mt-2 text-gray-300">
                      Volunteered in health awareness campaigns and community service activities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={sectionRefs.skills}
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-purple-950/80 to-black/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
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
              <div className="space-y-4">
                {[
                  { name: "C", level: 85 },
                  { name: "C++", level: 80 },
                  { name: "Java", level: 75 },
                  { name: "Python", level: 70 },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
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
              </div>
            </TabsContent>

            <TabsContent value="web">
              <div className="space-y-4">
                {[
                  { name: "HTML5", level: 90 },
                  { name: "CSS3", level: 85 },
                  { name: "JavaScript", level: 65 },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
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
              </div>
            </TabsContent>

            <TabsContent value="database">
              <div className="space-y-4">
                {[{ name: "MySQL", level: 60 }].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
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
              </div>
            </TabsContent>

            <TabsContent value="other">
              <div className="space-y-4">
                {[
                  { name: "Git & GitHub", level: 65 },
                  { name: "Google Cloud Platform", level: 55 },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
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
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        ref={sectionRefs.certifications}
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black/80 to-purple-950/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
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
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-xl">{cert.title}</CardTitle>
                      <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500">
                        {cert.category}
                      </Badge>
                    </div>
                    <p className="text-gray-300">
                      {cert.provider} • {cert.date}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center"
                      >
                        View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-purple-950/80 to-black/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-300">rmuhammedrashidn@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-gray-300">+91 8129416472</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-white font-medium mb-4">Connect With Me</h3>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white/20 text-white hover:bg-white/10"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white/20 text-white hover:bg-white/10"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-white">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-white">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-white">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white min-h-[120px]"
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-md py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Digital Product Solutions &copy; {new Date().getFullYear()} MUHAMMED RASHID N. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function BackgroundScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3, 1, -5]}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial color="#9333ea" wireframe />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[3, -1, -2]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.7}>
        <mesh position={[0, 3, -4]}>
          <dodecahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#ec4899" wireframe />
        </mesh>
      </Float>
      <Stars />
    </>
  )
}

function Stars() {
  const count = 500
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 30
    positions[i3 + 1] = (Math.random() - 0.5) * 30
    positions[i3 + 2] = (Math.random() - 0.5) * 30
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" sizeAttenuation />
    </points>
  )
}
