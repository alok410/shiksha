'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  TruckIcon,
  GlobeAsiaAustraliaIcon,
  CalculatorIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: TruckIcon,
    title: 'Door-to-Door Delivery',
    description: 'Seamless shipping from pickup to delivery, anywhere in India.'
  },
  {
    icon: GlobeAsiaAustraliaIcon,
    title: 'Global Reach',
    description: 'Connect with international markets through our worldwide network.'
  },
  {
    icon: CalculatorIcon,
    title: 'Smart Pricing',
    description: 'Get instant quotes with our advanced pricing calculator.'
  },
  {
    icon: ClockIcon,
    title: 'Real-time Tracking',
    description: 'Track your shipments 24/7 with live updates and notifications.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Shipping',
    description: 'Your packages are protected with our comprehensive insurance.'
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Competitive Rates',
    description: 'Accessible & Free Education for both domestic and international shipping.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export default function AnimatedFeatures() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-navy-900 bg-clip-text text-transparent">
            Why Choose ShikshaMitra?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of shipping with our cutting-edge features and reliable service
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-teal-50 p-3 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 flex items-center text-teal-600 font-medium">
                <span className="text-sm">Learn more</span>
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
