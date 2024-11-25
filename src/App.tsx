import React from 'react';
import { Brain, Code, Coins, Rocket, ChevronRight, Users, Lightbulb, Binary } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-pink-500" />
            <span className="font-bold text-xl">Brain Code Club</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-pink-500">Programs</a>
            <a href="#features" className="text-gray-700 hover:text-pink-500">Features</a>
            <a href="#about" className="text-gray-700 hover:text-pink-500">About</a>
          </div>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
            Join Now
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Empowering Young <span className="text-pink-500">Entrepreneurs</span> Through Code
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Teaching kids 8-18 the art of entrepreneurship and programming with blockchain technology.
              </p>
              <div className="flex gap-4">
                <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition flex items-center gap-2">
                  Get Started <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80"
                alt="Kids learning to code"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Brain Code Club?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Code className="w-8 h-8 text-pink-500" />}
                title="Learn to Code"
                description="Master programming fundamentals through interactive projects and real-world applications."
              />
              <FeatureCard 
                icon={<Coins className="w-8 h-8 text-pink-500" />}
                title="Blockchain Basics"
                description="Understand cryptocurrency, smart contracts, and financial management through hands-on experience."
              />
              <FeatureCard 
                icon={<Rocket className="w-8 h-8 text-pink-500" />}
                title="Start-up Mindset"
                description="Develop entrepreneurial thinking and learn to build successful business ventures."
              />
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProgramCard 
                title="Junior Entrepreneurs (Ages 8-12)"
                description="Introduction to basic programming concepts, creative thinking, and simple business ideas."
                features={[
                  "Scratch Programming",
                  "Basic Financial Concepts",
                  "Creative Problem Solving",
                  "Team Projects"
                ]}
              />
              <ProgramCard 
                title="Teen Innovators (Ages 13-18)"
                description="Advanced programming, blockchain technology, and comprehensive business planning."
                features={[
                  "Web Development",
                  "Blockchain Fundamentals",
                  "Business Plan Creation",
                  "Real Project Implementation"
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-pink-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join Brain Code Club today and become part of the next generation of tech entrepreneurs.
            </p>
            <button className="bg-white text-pink-500 px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Enroll Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-pink-500" />
                <span className="font-bold">Brain Code Club</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of tech entrepreneurs.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Junior Entrepreneurs</li>
                <li>Teen Innovators</li>
                <li>Summer Camps</li>
                <li>Private Sessions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Tutorials</li>
                <li>Documentation</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@braincodeclub.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Street</li>
                <li>Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Brain Code Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProgramCard({ title, description, features }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <ChevronRight className="w-5 h-5 text-pink-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;