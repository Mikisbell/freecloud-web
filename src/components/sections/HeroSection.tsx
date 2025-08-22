"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-white/80 to-white" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
          >
            <span className="h-2 w-2 bg-primary rounded-full mr-2 animate-pulse" />
            The leading platform for Enterprise AI
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              The AI Platform for
            </span>{' '}
            <span className="relative">
              <span className="relative z-10">Everyday AI</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-100/70 -z-0" style={{ transform: 'skew(-12deg)' }} />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build, deploy, and manage AI applications at scale with the most comprehensive platform for data science and analytics.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/get-started"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
              )}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/demo"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'text-lg px-8 py-6 border-2 border-gray-300 hover:border-gray-400 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 transform hover:-translate-y-1'
              )}
            >
              <Play className="h-5 w-5 mr-2 text-blue-600" />
              Watch Demo
            </Link>
          </motion.div>

          <motion.div
            className="text-sm text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.div>
        </div>

        {/* Hero image/illustration */}
        <motion.div
          className="mt-16 md:mt-24 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative max-w-6xl mx-auto bg-white/30 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Platform Preview</h3>
                <p className="text-gray-600">Experience the power of our platform</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -bottom-8 -right-6 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 -left-20 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </motion.div>
      </div>
    </section>
  );
}