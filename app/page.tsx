"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Sparkles,
  Zap,
  Palette,
  Database,
  Server,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 0, 255, 0.8) 0%, rgba(0, 223, 255, 0.4) 40%, rgba(0, 0, 0, 0) 60%)`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          filter: "blur(80px)",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Noise overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20" />

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold"
            >
              shub.dev
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:flex space-x-6"
            >
              <a href="#about" className="hover:text-purple-400 transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">
                Contact
              </a>
            </motion.div>
            <div className="sm:hidden">
              <Button variant="ghost" size="sm" className="text-white p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/sp.png?height=300&width=300"
                      alt="Shubham Pandey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-full border border-purple-500/30 border-dashed"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center md:text-left max-w-lg"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-sm font-medium mb-4">
                  Web Developer
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 whitespace-nowrap w-max inline-block">
                  Shubham Pandey
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-6">
                  Building the future of the web with modern technologies and creative solutions.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    Download Resume
                  </Button>

                  <a href="https://shubham-portfolio-plum.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                      Contact Me
                    </Button>
                  </a>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-400">My Journey</CardTitle>
                    <CardDescription className="text-gray-400">How I got started in web development</CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="mb-4">
                      I started my coding journey when I was 17, experimenting with HTML and CSS to create simple
                      websites. What began as curiosity quickly evolved into passion as I discovered the power of
                      bringing ideas to life through code.

                    </p>

                    <p>
                      Currently pursuing an Information Technology degree with a focus on web technologies, I'm constantly
                      exploring new frameworks and design patterns to create seamless user experiences.
                    </p>

                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-400">What I Do</CardTitle>
                    <CardDescription className="text-gray-400">My specialties and interests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 bg-purple-500/20 p-1.5 rounded-full text-purple-400">
                          <Code size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Frontend Development</h3>
                          <p className="text-gray-400">
                            Creating responsive, accessible, and beautiful user interfaces
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 bg-blue-500/20 p-1.5 rounded-full text-blue-400">
                          <Server size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Backend Integration</h3>
                          <p className="text-gray-400">Building APIs and server-side logic to power applications</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 bg-pink-500/20 p-1.5 rounded-full text-pink-400">
                          <Palette size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">DevOps</h3>
                          <p className="text-gray-400">Developing applications with operations and engaging user experiences</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">My Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-400">
                      <Code size={20} className="text-purple-400" />
                      Frontend
                    </CardTitle>

                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>HTML/CSS</span>
                        <span>95%</span>
                      </div>
                      <div className="relative h-2 bg-gray-800 rounded-full">
                        {/* 95% Purple Progress */}
                        <div className="absolute left-0 h-full w-[95%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-l-full" />
                        {/* 5% White Progress */}
                        <div className="absolute right-0 h-full w-[5%] bg-white rounded-r-full" />
                      </div>
                    </div>


                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>JavaScript</span>
                        <span>90%</span>
                      </div>
                      <div className="relative h-2 bg-gray-800 rounded-full">
                        {/* 90% Purple Progress */}
                        <div className="absolute left-0 h-full w-[90%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-l-full" />
                        {/* 10% White Progress */}
                        <div className="absolute right-0 h-full w-[10%] bg-white rounded-r-full" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>React</span>
                        <span>85%</span>
                      </div>
                      <div className="relative h-2 bg-gray-800 rounded-full">
                        {/* 85% Purple Progress */}
                        <div className="absolute left-0 h-full w-[85%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-l-full" />
                        {/* 15% White Progress */}
                        <div className="absolute right-0 h-full w-[15%] bg-white rounded-r-full" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>Next.js</span>
                        <span>40%</span>
                      </div>
                      <div className="relative h-2 bg-gray-800 rounded-full">
                        {/* 40% Purple Progress */}
                        <div className="absolute left-0 h-full w-[40%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-l-full" />
                        {/* 60% White Progress */}
                        <div className="absolute right-0 h-full w-[60%] bg-white rounded-r-full" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>Tailwind CSS</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      </Progress>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>TypeScript</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      </Progress>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>Framer Motion</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      </Progress>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-400">
                      <Database size={20} className="text-blue-400" />
                      Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>Node.js</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      </Progress>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>Express</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      </Progress>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>MongoDB</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      </Progress>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>SQL</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      </Progress>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>GraphQL</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      </Progress>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>Firebase</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      </Progress>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>Supabase</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2 bg-gray-800">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      </Progress>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Card className="bg-black/40 border border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles size={20} className="text-yellow-400" />
                    Other Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Git</Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">Docker</Badge>
                    <Badge className="bg-pink-500/20 text-pink-400 hover:bg-pink-500/30">Figma</Badge>
                    <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">Jest</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30">TypeScript</Badge>
                    <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30">Redux</Badge>
                    <Badge className="bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30">Sass</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">Responsive Design</Badge>
                    <Badge className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30">SEO</Badge>
                    <Badge className="bg-lime-500/20 text-lime-400 hover:bg-lime-500/30">Webpack</Badge>
                    <Badge className="bg-violet-500/20 text-violet-400 hover:bg-violet-500/30">Vite</Badge>
                    <Badge className="bg-rose-500/20 text-rose-400 hover:bg-rose-500/30">Accessibility</Badge>
                    <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">Framer Motion</Badge>
                    <Badge className="bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500/30">Three.js</Badge>
                    <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30">Supabase</Badge>
                    <Badge className="bg-sky-500/20 text-sky-400 hover:bg-sky-500/30">Vercel</Badge>
                    <Badge className="bg-teal-500/20 text-teal-400 hover:bg-teal-500/30">Netlify</Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Prisma</Badge>
                    <Badge className="bg-pink-500/20 text-pink-400 hover:bg-pink-500/30">Storybook</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
                  image: "/placeholder.svg?height=200&width=400",
                  tags: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Social Media Dashboard",
                  description: "Analytics dashboard for social media accounts with real-time data visualization.",
                  image: "/placeholder.svg?height=200&width=400",
                  tags: ["React", "D3.js", "Firebase", "Material UI"],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "AI Chat Application",
                  description: "Chat application with AI-powered responses and multi-language support.",
                  image: "/placeholder.svg?height=200&width=400",
                  tags: ["TypeScript", "OpenAI API", "Socket.io", "Express"],
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Fitness Tracker",
                  description: "Mobile-first web app for tracking workouts and nutrition with progress visualization.",
                  image: "/placeholder.svg?height=200&width=400",
                  tags: ["React Native", "GraphQL", "MongoDB", "Chart.js"],
                  color: "from-red-500 to-orange-500",
                },
                {
                  title: "Weather Application",
                  description: "Weather forecast app with location detection and interactive maps.",
                  image: "/placeholder.svg?height=200&width=400",
                  tags: ["Vue.js", "Weather API", "Leaflet", "PWA"],
                  color: "from-yellow-500 to-amber-500",
                },
                {
                  title: "Portfolio Website",
                  description: "Personal portfolio website with 3D elements and interactive animations.",
                  image: "/placeholder.svg?height=200&width=400",
                  tags: ["Three.js", "GSAP", "Next.js", "Framer Motion"],
                  color: "from-violet-500 to-purple-500",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/40 border border-white/10 backdrop-blur-sm overflow-hidden h-full group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-50`}></div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="border-gray-700 text-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-gray-700 text-white hover:bg-purple-500/20 hover:border-purple-400 transition-all"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Project
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription className="text-gray-400">Feel free to reach out anytime</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-full text-purple-400">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="text-sm text-gray-400">Email</h3>
                        <p className="font-medium">shubhamp0048@gmail.com</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                      <div className="flex gap-4">
                        <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                          <Github size={20} />
                        </a>
                        <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                          <Twitter size={20} />
                        </a>
                        <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                    <CardDescription className="text-gray-400">
                      I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Your email"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Subject"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Your message"
                        ></textarea>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                <Zap size={24} className="text-purple-400 mr-2" />
                <span className="text-xl font-bold">shub.dev</span>
              </div>
              <p className="text-gray-400 mb-6">Building the future of the web, one pixel at a time.</p>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Shubham. All rights reserved.</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}

