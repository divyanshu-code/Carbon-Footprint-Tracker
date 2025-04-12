import React, { useState } from 'react';
import { Leaf, Menu, X, Mail, Lock, User, Calculator, BarChart2, Award, Users, Lightbulb, Globe2, TreePine, Recycle } from 'lucide-react';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-green-500" />,
      title: "Real-Time Emission Calculator",
      description: "Calculate your carbon footprint in real-time based on your daily activities and consumption patterns.",
      details: [
        "Track transportation emissions",
        "Monitor household energy usage",
        "Calculate food consumption impact",
        "Measure waste generation"
      ]
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-green-500" />,
      title: "Visual Dashboard",
      description: "Comprehensive analytics dashboard with interactive charts and progress tracking.",
      details: [
        "Monthly emission trends",
        "Category-wise breakdown",
        "Progress comparison",
        "Goal tracking visualization"
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Green Score System",
      description: "Earn points and badges for sustainable actions and reducing your carbon footprint.",
      details: [
        "Achievement badges",
        "Weekly challenges",
        "Sustainability milestones",
        "Personal goal setting"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Leaderboard",
      description: "Compete with friends and community members to create the biggest environmental impact.",
      details: [
        "Global rankings",
        "Friend competitions",
        "Community challenges",
        "Monthly awards"
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-500" />,
      title: "Daily Sustainability Tips",
      description: "Get personalized recommendations and tips to reduce your environmental impact.",
      details: [
        "Seasonal eco-tips",
        "Actionable suggestions",
        "Resource saving guides",
        "Local sustainability events"
      ]
    }
  ];

  const missionPoints = [
    {
      icon: <Globe2 className="h-6 w-6 text-green-500" />,
      title: "Global Impact",
      description: "We're committed to reducing global carbon emissions through individual action and awareness."
    },
    {
      icon: <TreePine className="h-6 w-6 text-green-500" />,
      title: "Environmental Stewardship",
      description: "Promoting sustainable practices and environmental consciousness in daily life."
    },
    {
      icon: <Recycle className="h-6 w-6 text-green-500" />,
      title: "Sustainable Future",
      description: "Building a better tomorrow through data-driven environmental decisions today."
    }
  ];

  const FeatureModal = () => {
    if (!isFeatureModalOpen || !selectedFeature) return null;

    return (
      <div id='log1' className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
          <button
            onClick={() => {
              setIsFeatureModalOpen(false);
              setSelectedFeature(null);
            }}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {selectedFeature.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedFeature.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {selectedFeature.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
            <ul className="space-y-2">
              {selectedFeature.details.map((detail, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              setIsFeatureModalOpen(false);
              setSelectedFeature(null);
              setIsLogin(false);
              setIsAuthModalOpen(true);
            }}
            className="mt-8 w-full bg-green-500 text-white font-semibold p-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            Try This Feature
          </button>
        </div>
      </div>
    );
  };

  const AuthModal = () => {
    if (!isAuthModalOpen) return null;

    return (
      <div id='log' className="fixed inset-0  bg-gray-400 bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isLogin
                ? 'Enter your credentials to access your account'
                : 'Sign up to start tracking your carbon footprint'}
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button className="w-full bg-green-500 text-white font-semibold p-3 rounded-lg hover:bg-green-600 transition-colors duration-200">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-green-500 hover:text-green-600 font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10 rounded">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
             
                   
             <a href="#"><Leaf className="h-8 w-8 text-green-500" /></a> 
              <a href="#"><span className="ml-2 text-xl font-semibold text-gray-900">EcoTrack</span></a>
            </div>
            
            
            <nav className="hidden md:flex space-x-8 ">
              <a href="#" className="text-gray-700 font-semibold hover:text-green-500 px-3 py-2 text-sm ">Home</a>
              <a href="#features" className="text-gray-700 font-semibold hover:text-green-500 px-3 py-2 text-sm ">Features</a>
              <a href="#about" className="text-gray-700 font-semibold hover:text-green-500 px-3 py-2 text-sm ">About</a>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="text-green-500 cursor-pointer hover:text-green-600 px-4 py-2 text-sm font-semibold bg-green-50 rounded-full"
              >
                Login / Register
              </button>
            </nav>
            
        
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-600">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

   
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Track Your Impact on the Planet 🌍
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Monitor, reduce, and take action against your carbon footprint.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => {
                  setIsLogin(false);
                  setIsAuthModalOpen(true);
                }}
                className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
              <a
                href="#about"
                className="px-8 py-3 bg-white text-green-500 font-semibold rounded-full border-2 border-green-500 hover:bg-green-50 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <img
                src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-jungle-tree-clipart-cartoon-tree-in-the-jungle-vector-png-image_11091177.png"
                alt="Earth from space"
                className="rounded-2xl mt-10 animate-float "
              />
              
            </div>
          </div>
        </div>

        <section id="features" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
            <p className="mt-4 text-xl text-gray-600">Discover how we help you make a difference</p>
          </div>
          
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                onClick={() => {
                  setSelectedFeature(feature);
                  setIsFeatureModalOpen(true);
                }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer transform hover:-translate-y-1 "
              >
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {feature.title}
                </h3> 
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-16 bg-white rounded-3xl shadow-lg mb-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Leaf className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About EcoTrack</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              EcoTrack is your partner in the journey towards a sustainable future. We believe that small actions, when multiplied by millions, can transform the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-8 mb-16">
            {missionPoints.map((point, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-green-50 transform hover:-translate-y-1 transition-transform duration-200">
                <div className="flex justify-center mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto px-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2025, EcoTrack emerged from a simple yet powerful idea: making environmental impact measurable and actionable for everyone. Our platform combines cutting-edge technology with environmental science to help individuals and communities understand and reduce their carbon footprint.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we're proud to serve millions of users worldwide, contributing to significant reductions in global carbon emissions through informed individual actions and collective effort.
              </p>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setIsAuthModalOpen(true);
                }}
                className="w-full md:w-auto px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Join Our Mission
              </button>
            </div>
          </div>
        </section>
      </main>

      <AuthModal />
      <FeatureModal />
    </div>
  );
}

export default App;