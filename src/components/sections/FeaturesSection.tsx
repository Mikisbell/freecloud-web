"use client";

import { motion } from "framer-motion";
import { Code, Database, Cpu, Shield, BarChart2, GitBranch } from "lucide-react";

const features = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "No-Code to Full-Code",
    description: "From visual tools to full code notebooks, build AI applications your way."
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Data Preparation",
    description: "Clean, prepare, and visualize your data with an intuitive interface."
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Machine Learning",
    description: "Build and deploy ML models with automated machine learning capabilities."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "AI Governance",
    description: "Ensure responsible AI with built-in governance and compliance features."
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Analytics",
    description: "Create interactive dashboards and reports to gain insights from your data."
  },
  {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: "MLOps",
    description: "Operationalize your models with end-to-end MLOps capabilities."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything You Need to Build and Deploy AI
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A comprehensive platform that brings together data science, machine learning, and MLOps in one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
