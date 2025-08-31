"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent dark:from-blue-900/20" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 mb-6"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              La plataforma de IA unificada líder en el sector
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforma tus datos en
            <span className="relative">
              <span className="relative z-10"> resultados </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-100 dark:bg-blue-900/50 -z-0 rounded-lg"></span>
            </span>
            con IA
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            La plataforma todo en uno para construir, implementar y escalar aplicaciones de IA empresarial con facilidad. 
            Desde análisis de datos hasta modelos de producción, todo en un solo lugar.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/demo" 
              className={cn(
                buttonVariants({ size: 'lg' }),
                'px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
              )}
            >
              Solicitar demostración
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'px-8 py-6 text-base font-medium border-2 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              )}
            >
              Habla con un experto
            </Link>
          </motion.div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="absolute top-0 left-0 w-full h-8 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 flex items-center px-4">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
              </div>
              <div className="pt-12 pb-8 px-6">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Plataforma de IA Unificada</div>
                    <p className="text-gray-600 dark:text-gray-300">Visualización en tiempo real de tu panel de control</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}