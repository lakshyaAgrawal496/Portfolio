import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import Tilt from "react-parallax-tilt";

// Icons from react-icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiSocketdotio,
} from "react-icons/si";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ---------------------------------------------------------
// 1. Hero Section & 3D Element
// ---------------------------------------------------------
const InteractiveTorus = () => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.2 : 1}
      >
        <torusKnotGeometry args={[1.5, 0.4, 200, 32]} />
        <meshStandardMaterial
          color={hovered ? "#00f2fe" : "#4facfe"}
          wireframe={hovered}
          roughness={0.1}
          metalness={0.8}
          emissive={hovered ? "#00f2fe" : "#220044"}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const subtitle = "Pre-Final Year B.Tech (CSE) Student at JIIT Noida";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4facfe]/20 rounded-full blur-[150px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#00f2fe]/20 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      {/* 3D Canvas Container - Hidden on very small mobile screens for performance */}
      <div className="absolute inset-0 z-0 hidden sm:block pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f2fe" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#4facfe"
          />
          <group position={[3, 0, -2]}>
            {/* The 3D element itself gets pointer events */}
            <group className="pointer-events-auto">
              <InteractiveTorus />
            </group>
          </group>
          <Environment preset="city" />
          <ContactShadows
            position={[0, -2.5, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={4}
          />
        </Canvas>
      </div>

      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 pb-2 leading-[1.02] bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-white to-[#4facfe] drop-shadow-lg">
              Lakshya Agrawal
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light mb-8"
          >
            {subtitle}
          </motion.div>

          {/* <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="glass-panel p-6 rounded-2xl mb-12 text-gray-300 leading-relaxed max-w-xl"
          >
            {/* "I specialize in full-stack web development and real-time systems, blending technical logic with clean, interactive designs to build applications that solve real-world problems." */}
          {/* </motion.div> */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full border-2 border-[#00f2fe]/50 rounded-full group-hover:border-[#00f2fe] transition-colors duration-300" />
              <div className="absolute inset-0 w-full h-full bg-[#00f2fe]/10 group-hover:bg-[#00f2fe]/30 blur-md transition-all duration-300" />
              <span className="relative flex items-center gap-2 drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]">
                Explore Dimensions
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ↓
                </motion.span>
              </span>
            </button>

            <a
              href="https://drive.google.com/file/d/1FVcaavWRDrKHk467__WyyULjvt17mM9w/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full border-2 border-[#4facfe]/50 rounded-full group-hover:border-[#4facfe] transition-colors duration-300" />
              <div className="absolute inset-0 w-full h-full bg-[#4facfe]/10 group-hover:bg-[#4facfe]/30 blur-md transition-all duration-300" />
              <span className="relative flex items-center gap-2 drop-shadow-[0_0_8px_rgba(79,172,254,0.8)]">
                Download Resume
                <span className="group-hover:translate-y-1 transition-transform duration-300">
                  ⤓
                </span>
              </span>
            </a>
          </motion.div>
        </div>
        <div className="hidden md:block">
          {/* Spacer for 3D Canvas visual balance on Desktop */}
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 1.5 About Me Section
// ---------------------------------------------------------
const About = () => {
  return (
    <section id="about" className="py-32 relative px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          {/* Section Header */}
          <div className="md:col-span-4 sticky top-32">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-[#00f2fe]">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full" />
          </div>

          {/* Content Panel */}
          <div className="md:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border-white/10"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Hello! I'm{" "}
                <span className="text-[#00f2fe]">Lakshya Agrawal</span>
              </h3>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am a passionate and goal-oriented Computer Scienece
                  undergrad who loves the entire journey of building an
                  application—from mapping out the initial database structure to
                  polishing the final user interface.
                </p>

                <div className="flex flex-wrap gap-4 items-center py-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-[#4facfe] font-bold">Education:</span>
                    <span>B.Tech CSE, JIIT Noida (2023–2027)</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-[#00f2fe] font-bold">CGPA:</span>
                    <span>7.6</span>
                  </div>
                </div>

                <p>
                  Throughout my academic journey, I've developed a strong
                  foundation in languages like C++ and JavaScript, and I thrive
                  on building scalable projects using the MERN stack. I enjoy
                  tackling complex challenges, whether that means implementing
                  WebSocket synchronization for a real-time multiplayer chess
                  engine or building secure, map-based civic issue platforms.
                </p>

                <p>
                  Beyond writing code, I actively contribute as a Senior
                  Developer for the Innovation Technical Society, where I mentor
                  peers and build projects for hackathons. I thrive on
                  leadership and community building, having led over 200+
                  members as the Coordinator of Vamunique (Dance Society of
                  JIIT).
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 2. Tech Stack Grid
// ---------------------------------------------------------
const TechStack = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus size={40} className="text-[#00599C]" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-[#F7DF1E]" /> },
    {
      name: "React.js",
      icon: <FaReact size={40} className="text-[#61DAFB]" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} className="text-[#339933]" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress size={40} className="text-white" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-[#47A248]" />,
    },
    { name: "Git", icon: <FaGitAlt size={40} className="text-[#F05032]" /> },
    {
      name: "Socket.io",
      icon: <SiSocketdotio size={40} className="text-white" />,
    },
  ];

  return (
    <section id="skills" className="py-24 relative px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <FaCode className="text-[#00f2fe]" /> Technical{" "}
            <span className="text-[#4facfe]">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to build scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              scale={1.05}
              transitionSpeed={250}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer group transition-colors duration-300 hover:border-[#00f2fe]/50 hover:bg-[#00f2fe]/5"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: idx * 0.2,
                  }}
                  className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(0,242,254,0.6)]"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 3. Featured Projects (3D Tilt Cards)
// ---------------------------------------------------------
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={400}
        className="h-full"
      >
        <div className="glass-panel p-8 rounded-3xl flex flex-col h-full relative overflow-hidden group">
          {/* Subtle hover gradient inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4facfe]/0 via-transparent to-[#00f2fe]/0 group-hover:from-[#4facfe]/10 group-hover:to-[#00f2fe]/10 transition-all duration-500" />

          <div className="relative z-10 flex-grow">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00f2fe] transition-colors flex items-center justify-between">
              {project.title}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {project.details && (
              <ul className="mb-6 space-y-2">
                {project.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-[#4facfe] mt-1">▹</span> {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative z-10 mt-auto pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[#4facfe]"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && project.buttonText && (
              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 px-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-[#00f2fe]/20 hover:border-[#00f2fe]/50 hover:text-[#00f2fe] transition-all font-semibold"
                >
                  {project.buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Grocer Ease",
      description:
        "Recommendation-driven e-commerce platform automating ingredient-to-cart workflows.",
      details: [
        "Real-time tracking via Socket.io and Leaflet.",
        "Role-Based Access Control (RBAC) & Redis caching.",
        "Local database management explicitly via MongoDB Compass.",
        "Seamless payment processing utilizing UPI QR codes.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Redis",
        "Leaflet",
      ],
      link: "https://github.com/lakshyaAgrawal496/GrocerEase",
      buttonText: "View Repo",
    },
    {
      title: "Real-Time Chess Engine",
      description:
        "Synchronized multiplayer gameplay with strict rule enforcement.",
      details: [
        "Real-time move synchronization using WebSockets.",
        "Server-side validation with Chess.js & FEN to prevent illegal moves.",
        "Interactive drag-and-drop UI.",
      ],
      techStack: ["Node.js", "Express", "Socket.io", "Chess.js"],
      link: "https://github.com/lakshyaAgrawal496/ChessGame",
      buttonText: "View Repo",
    },
    {
      title: "Smart Campus Navigation System",
      description:
        "A navigation platform providing indoor/outdoor routing, maps, and real-time guidance for campus users.",
      details: [
        "Indoor and outdoor routing with turn-by-turn directions.",
        "Real-time location updates and route optimization.",
        "Shortest-path routing powered by Dijkstra's algorithm.",
        "Admin tools for map management and POI tagging.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Leaflet",
        "Dijkstra's Algorithm",
      ],
      link: "https://github.com/lakshyaAgrawal496/Smart-Campus-Navigation-System",
      buttonText: "View Repo",
    },
    {
      title: "Nagar Mitra",
      description:
        "Civic issue reporting platform for secure reporting and admin-managed resolution.",
      details: [
        "Secure authentication with JWT and Bcrypt.",
        "Map-based issue reporting with precise Leaflet geolocation.",
        "Admin dashboard for category tagging and status updates.",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Leaflet",
      ],
      link: "https://github.com/lakshyaAgrawal496/Nagar-Mitra",
      buttonText: "View Repo",
    },
    {
      title: "GTA-VI Web Concept",
      description:
        "A highly visual and interactive web design concept inspired by the game's bold aesthetic and immersive user interface.",
      details: [
        "Dynamic animations and scroll effects.",
        "Immersive UI/UX reflecting gaming themes.",
        "Fully responsive modern layout.",
      ],
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/lakshyaAgrawal496/GTA-VI",
      buttonText: "View Repo",
    },
  ];

  return (
    <section id="projects" className="py-24 relative px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[#00f2fe]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my 3D dimensional and full-stack technical endeavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 4. Leadership & Certifications (3D Carousel)
// ---------------------------------------------------------
const Leadership = () => {
  const items = [
    {
      title: "Coordinator",
      org: "Vamunique (Dance Society, JIIT)",
      desc: "Led 200+ members and organized 15+ cultural events.",
      icon: <FaDatabase />,
    },
    {
      title: "Senior Developer",
      org: "Innovation Technical Society",
      desc: "Mentored juniors and contributed to core technical initiatives.",
      icon: <FaServer />,
    },
    {
      title: "Certification",
      org: "Oracle OCI AI Foundations",
      desc: "Associate Certification (2025).",
      icon: <FaExternalLinkAlt />,
    },
    {
      title: "Virtual Internship",
      org: "AWS Solutions Architecture",
      desc: "Forage Virtual Experience Program (2025).",
      icon: <FaCode />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="py-32 relative px-6 bg-black/40 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          Leadership & <span className="text-[#4facfe]">Achievements</span>
        </motion.h2>

        {/* 3D Carousel Container */}
        <div className="relative h-[300px] flex items-center justify-center perspective-1000">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: 90, scale: 0.8, z: -200 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
              exit={{ opacity: 0, rotateY: -90, scale: 0.8, z: -200 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="absolute w-full max-w-xl"
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05}>
                <div className="glass-panel p-10 rounded-3xl flex flex-col items-center justify-center text-center gap-4 border border-[#4facfe]/30 shadow-[0_0_40px_rgba(79,172,254,0.15)] bg-gradient-to-b from-white/5 to-transparent">
                  <div className="p-4 bg-gradient-to-br from-[#4facfe]/20 to-[#00f2fe]/20 rounded-2xl text-[#00f2fe] mb-2 drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]">
                    {items[currentIndex].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {items[currentIndex].title}
                  </h3>
                  <p className="text-[#00f2fe] text-lg font-medium">
                    {items[currentIndex].org}
                  </p>
                  <p className="text-gray-300 mt-2">
                    {items[currentIndex].desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#4facfe]/20 hover:border-[#4facfe] transition-all group"
          >
            <span className="text-gray-400 group-hover:text-[#4facfe]">
              ← Prev
            </span>
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  idx === currentIndex ? "w-8 bg-[#00f2fe]" : "w-2 bg-white/20",
                )}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#00f2fe]/20 hover:border-[#00f2fe] transition-all group"
          >
            <span className="text-gray-400 group-hover:text-[#00f2fe]">
              Next →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 5. Contact Form (3D Elements)
// ---------------------------------------------------------
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Transmitting...");
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Transmission Successful!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Transmission Failed.");
      }
    } catch (error) {
      setStatus("Server connection lost.");
    }
    setIsSubmitting(false);
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section className="py-24 relative px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f2fe]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 relative z-10">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Initialize
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">
                    Connection
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Let's build something extraordinary together.
                </p>
              </div>

              <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
                <a
                  href="https://github.com/lakshyaAgrawal496"
                  className="flex items-center gap-4 text-gray-400 hover:text-white hover:translate-x-2 transition-all"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-[#00f2fe]/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all">
                    <FaGithub size={24} />
                  </div>{" "}
                  <span className="font-medium text-lg">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/lakshya-agrawal-42a960329"
                  className="flex items-center gap-4 text-gray-400 hover:text-white hover:translate-x-2 transition-all"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-[#4facfe]/50 hover:shadow-[0_0_15px_rgba(79,172,254,0.3)] transition-all">
                    <FaLinkedin size={24} />
                  </div>{" "}
                  <span className="font-medium text-lg">LinkedIn</span>
                </a>
                <a
                  href="mailto:lakshyagrawal192005@email.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-white hover:translate-x-2 transition-all"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-[#00f2fe]/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all">
                    <FaEnvelope size={24} />
                  </div>{" "}
                  <span className="font-medium text-lg">Email</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 transition-all glowing-border-focus"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 transition-all glowing-border-focus"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 transition-all glowing-border-focus resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95, y: 5 }} // 3D push effect
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group inline-flex items-center justify-center px-8 py-5 font-bold text-white bg-gradient-to-r from-[#00f2fe]/20 to-[#4facfe]/20 rounded-2xl border border-[#00f2fe]/30 hover:border-[#00f2fe] shadow-[0_4px_15px_rgba(0,242,254,0.15)] hover:shadow-[0_8px_25px_rgba(0,242,254,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-3 text-lg drop-shadow-md">
                  {isSubmitting ? "Transmitting..." : "Send Message"}
                </span>
              </motion.button>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "text-center font-medium mt-4",
                    status.includes("Successful")
                      ? "text-[#00f2fe]"
                      : "text-[#4facfe]",
                  )}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// Main App Component
// ---------------------------------------------------------
export default function Portfolio() {
  return (
    <div className="bg-grid-pattern min-h-screen relative selection:bg-[#00f2fe]/30 selection:text-white">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Leadership />
      <Contact />

      <footer className="py-10 text-center border-t border-white/5 text-gray-500 text-sm bg-black/50 backdrop-blur-sm z-20 relative">
        <p className="flex items-center justify-center gap-2">
          &copy; {new Date().getFullYear()} Lakshya Agrawal.{" "}
        </p>
      </footer>
    </div>
  );
}
