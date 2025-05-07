'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import PricingCalculator from "@/components/PricingCalculator";
import PartnersShowcase from "@/components/PartnersShowcase";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const CircularProgress = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#e0e0e0"
        strokeWidth="8"
        fill="transparent"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#4caf50"
        strokeWidth="8"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
      <text x="50" y="55" textAnchor="middle" fontSize="16" fontWeight="bold">{percentage}%</text>
    </svg>
  );
};
export default function Home() {
  const listStyle = {
    background: "#f9f9f9",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center"
  };

  const topics = [
    "Mathematics - Algebra",
    "Science - Ecosystems",
    "History - Ancient Civilizations",
    "Geography - Maps and Continents",
    "English - Grammar and Writing",
    "Computer Science - Basic Programming",
    "Physics - Forces and Motion"
  ];
  const selectedTopics  = [
    "Mathematics - Algebra",
    "Science - Ecosystems",
    "History - Ancient Civilizations",
    "Geography - Maps and Continents",
    "English - Grammar and Writing",
    "Computer Science - Basic Programming",
    "Physics - Forces and Motion"
  ];

  const [data] = useState([
    { month: "Jan", growth: 10 },
    { month: "Feb", growth: 20 },
    { month: "Mar", growth: 35 },
    { month: "Apr", growth: 50 },
    { month: "May", growth: 70 },
  ]);

  const cardStyle = {
    background: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    padding: "16px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px"
  };
  const iconStyle = {
    fontSize: "24px",
    marginRight: "12px"
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
      {
        image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Container Terminal"
      },
      {
        image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Logistics Warehouse"
      },
      {
        image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Cargo Ship at Port"
      }
    ];

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);

    return (
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        {/* Background Images Slideshow */}
        {slides.map((slide, index) => (
          <motion.div
            key={slide.image}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1.05 : 1
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              quality={90}
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Because Every Student
              </span>{' '}
              <span className="text-white">
                Deserves A Education
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Empower your learning journey with ShikshaMitra’s innovative education platform—access quality resources, track your progress in real-time, and connect with expert mentors to shape a brighter future.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                href="#calculate"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="#features"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
    );
  };

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen custom-scrollbar">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="h-14 w-[200px]">
                <object
                  data="/logo.svg"
                  type="image/svg+xml"
                  className="h-full w-full"
                  aria-label="ShikshaMitra Logo"
                >
                  ShikshaMitra Logo
                </object>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                ['Features', '/#Features'],
                ['How It Works', '/#how-it-works'],
                ['About', '/#about'],
                ['Need Help?', '/#track'],
                ['Contact', '/#contact'],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`font-medium transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-indigo-600' 
                      : 'text-white hover:text-indigo-200'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
              <Link
                href="/profile"
                className="text-indigo-600 hover:text-indigo-500"
              >
                profile
              </Link>
              <Link
                href="/track-package"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Need Help?
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 mb-2"
          >
            <div className="px-4 py-2 space-y-2">
              {[
                ['Features', '/#Features'],
                ['How It Works', '/#how-it-works'],
                ['About', '/#about'],
                ['Need Help?', '/#track'],
                ['Contact', '/#contact'],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Link
                  href="/login"
                  className="block w-full py-2 px-4 text-white bg-white/10 hover:bg-white/20 rounded-lg text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/track-package"
                  className="block w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Need Help?
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Why ShikshaMitra Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose ShikshaMitra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of education with our innovative learning solutions. We combine technology with expert guidance to transform your learning journey.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AI-Driven Performance Monitoring</h3>
              <p className="text-gray-600">
              Track and enhance student progress with intelligent AI insights for personalized learning growth.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-violet-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Parent Monitoring</h3>
              <p className="text-gray-600">
              Complete Child Safety with Real-Time Monitoring and Activity Alerts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Accessible & Free Education</h3>
              <p className="text-gray-600">
                Quality learning at no cost, supported by government initiatives for every child’s future.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-violet-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Nationwide Learning Network</h3>
              <p className="text-gray-600">
                Nationwide Learning NetworkEmpowering students across India with quality education and seamless learning resources.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock Student support to assist you with any queries or concerns.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-violet-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Support Tailored to Your Region</h3>
              <p className="text-gray-600">
              Providing full tutoring and nutritional support, tailored to your region, to ensure the holistic development of every child .
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {/* Feature 7 */}
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-14 h-14 bg-green-100 rounded-lg mb-6 flex items-center justify-center">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-4 text-gray-900">Parental Oversight for Early Learners</h3>
    <p className="text-gray-600">
      For children under 8, only parents can access and monitor learning activities, track progress, and tailor educational content to their needs.
    </p>
  </div>

  {/* Feature 8 */}
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-14 h-14 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-4 text-gray-900">Self-Paced Learning with Video Solutions</h3>
    <p className="text-gray-600">
      Students above 8 can learn independently and access video tutorials and book solutions to resolve their doubts.
    </p>
  </div>

  {/* Feature 9 */}
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-14 h-14 bg-red-100 rounded-lg mb-6 flex items-center justify-center">
      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-6 2h12a2 2 0 012 2v5H4v-5a2 2 0 012-2z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-4 text-gray-900">Student Eligibility Verification</h3>
    <p className="text-gray-600">
      We verify eligibility using Aadhaar or Birth Certificates, ensuring students receive the right educational resources.
    </p>
  </div>
</div>

{/*Dashboard*/}
<div>
<div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
  
  {/* Row 1 - Four Cards in One Row */}
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    justifyContent: "center",
    alignItems: "stretch"
  }}>
    {[
      { title: "Lessons Completed", value: "35", percentage: 70 },
      { title: "Badges Achieved", value: "5", percentage: 50 },
      { title: "Learning Start Date", value: "Jan 15, 2024" },
      { title: "Growth Over Time", chart: true }
    ].map((item, index) => (
      <div key={index} style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        minHeight: "160px" // Increased height
      }}>
        <h3 style={{ fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
          {item.title}
        </h3>
        {item.chart ? (
          <ResponsiveContainer width="200%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="growth" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <>
            <p style={{ color: "gray", fontSize: "14px" }}>{item.value}</p>
            {item.percentage && <CircularProgress percentage={item.percentage} />}
          </>
        )}
      </div>
    ))}
  </div>

  {/* Row 2 - Topic Lists */}
  <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    width: "100%"
  }}>
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    }}>
      <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>
        Suggest Topics for Class 7 (AI generated - Based on your past records)
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {topics.map((topic, index) => (
          <div key={index} style={listStyle}>{topic}</div>
        ))}
      </div>
    </div>

    <div style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    }}>
      <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>
        Topics You Have Selected to Learn
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {selectedTopics.map((topic, index) => (
          <div key={index} style={listStyle}>{topic}</div>
        ))}
      </div>
    </div>
  </div>

</div>

</div>




          
              
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Link 
              href="/signup"
              className="inline-block bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105"
            >
              Join ShikshaMitra Today
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Voices from Our Learning Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued Learners have to say about ShikshaMitra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-gray-600">Father of 9-Year-Old Twins</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                ShikshaMitra has greatly enhanced my children's learning with personalized support and real-time progress tracking.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-gray-600">Student Of 10th Grade</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                The support from ShikshaMitra has been amazing. They’ve been there for me every step of the way, making my board exam journey smoother and more manageable.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Amit Patel</h4>
                  <p className="text-gray-600">Fathe Of 6-Year-old Boy</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
              As a father, I’m thankful for ShikshaMitra’s nutritional support for my son. It has made a significant difference in his overall health and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Transform Your  Experience?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied Student who trust ShikshaMitra for their Education needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/login"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>    

      {/* Feedback Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-full blur-xl"></div>
          </motion.div>
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.3, 1],
              y: [0, 20, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20"
          >
            <div className="w-40 h-40 bg-gradient-to-r from-violet-400/20 to-indigo-400/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z"/>
                </svg>
              </div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"
            >
              Your Voice Matters
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Help us improve your experience
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 rounded-2xl shadow-xl p-8 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-900 bg-gray-50/50"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-900 bg-gray-50/50"
                    placeholder="Your email"
                  />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-900 h-32 bg-gray-50/50"
                  placeholder="Share your experience with us"
                ></textarea>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(79, 70, 229, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg"
              >
                <motion.span className="inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Send Feedback
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              x: [-10, 10, -10]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -left-20 top-1/2 transform -translate-y-1/2"
          >
            <div className="w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          </motion.div>
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1],
              x: [10, -10, 10]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -right-20 top-1/2 transform -translate-y-1/2"
          >
            <div className="w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Stay Updated with ShikshaMitra
              <br />
              <span className="text-2xl font-normal mt-2 block text-indigo-100">
                Get the latest Education updates and exclusive features
              </span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <motion.div 
              className="flex flex-col md:flex-row gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg"
              whileHover={{ boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgb(249, 250, 251)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <motion.span 
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center"
                >
                  Subscribe Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H6"/>
                  </svg>
                </motion.span>
              </motion.button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-indigo-100 mt-4 text-sm"
            >
              By subscribing, you agree to our Terms of Service and Privacy Policy
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Image
                src="/logo.svg"
                alt="ShikshaMitra"
                width={180}
                height={50}
                className="brightness-0 invert"
              />
              <p className="text-gray-400">
                Introduce India ShikshaMitra, an Indian Education aggregator dedicated to supporting Students in optimizing their Learning.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 5.16c-.94.42-1.95.7-3 .82v.63c0 7-5.37 15.06-15.19 15.06-3.02 0-5.83-.87-8.2-2.37.42.05.84.07 1.27.07 2.5 0 4.79-.85 6.6-2.28-2.33-.04-4.3-1.58-4.98-3.69.32.06.65.1.99.1.48 0 .94-.06 1.38-.18-2.43-.49-4.26-2.63-4.26-5.21v-.07c.72.4 1.54.64 2.41.67-1.43-.96-2.37-2.58-2.37-4.43 0-.98.26-1.89.72-2.68 2.62 3.22 6.54 5.33 10.96 5.55-.09-.4-.14-.81-.14-1.23 0-2.98 2.42-5.4 5.4-5.4 1.55 0 2.95.66 3.93 1.71.98-.19 1.9-.55 2.73-1.04-.32 1-.99 1.84-1.87 2.37.87-.1 1.69-.34 2.46-.67-.57.84-1.3 1.58-2.14 2.17z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-emerald-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="text-gray-400">Mehasana, Gujarat (India)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-emerald-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-gray-400">info@ShikshaMitra.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-emerald-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-gray-400">+971-0504681209</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="py-8 border-t border-gray-800 text-center text-gray-400">
            <p>Copyright 2025 ShikshaMitra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
