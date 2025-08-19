import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Satellite,
  TrendingUp,
  Users,
  Shield,
  Leaf,
} from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  // Only initialize motion hooks after component is mounted
  const isStatsInView = useInView(statsRef, { 
    once: true, 
    amount: 0.5,
    // Add fallback for server-side rendering
    root: typeof window !== "undefined" ? undefined : null
  });

  // const { scrollYProgress } = useScroll({
  //   target: dashboardRef,
  //   offset: ["start end", "end start"],
  // });

  // const dashboardY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const farmersCount = useCountAnimation({
    end: 1500,
    duration: 2500,
    startOnView: mounted && isStatsInView,
  });
  const hectaresCount = useCountAnimation({
    end: 1000,
    duration: 2200,
    startOnView: mounted && isStatsInView,
  });
  const regionsCount = useCountAnimation({
    end: 2,
    duration: 1500,
    startOnView: mounted && isStatsInView,
  });
  const accuracyCount = useCountAnimation({
    end: 89.9,
    duration: 2000,
    startOnView: mounted && isStatsInView,
  });

  useEffect(() => {
    if (mounted && isStatsInView) {
      farmersCount.startAnimation();
      hectaresCount.startAnimation();
      regionsCount.startAnimation();
      accuracyCount.startAnimation();
    }
  }, [mounted, isStatsInView, farmersCount, hectaresCount, regionsCount, accuracyCount]);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-950/20 pt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-950/20 pt-24 overflow-hidden cursor-none">
        {/* Enhanced Custom Cursor */}
        {/* <div className="fixed inset-0 pointer-events-none z-50">
          <div className="cursor-dot w-2 h-2 bg-green-500 rounded-full fixed opacity-80 animate-pulse shadow-lg shadow-green-500/50"></div>
          <div className="cursor-ring w-8 h-8 border-2 border-blue-400 rounded-full fixed opacity-40 animate-spin-slow">ok</div>
        </div> */}

        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Multiple Floating Satellites with different sizes */}
          <div className="absolute top-16 left-8 animate-float hover:animate-spiral cursor-pointer transition-all duration-300 hover:scale-150">
            <Satellite className="h-6 w-6 text-blue-400 opacity-60 hover:opacity-100 hover:drop-shadow-lg" />
          </div>
          <div
            className="absolute top-32 right-16 animate-float cursor-pointer transition-all duration-300 hover:scale-200"
            style={{ animationDelay: "1s" }}
          >
            <Satellite className="h-4 w-4 text-green-400 opacity-50 hover:opacity-100 hover:drop-shadow-lg" />
          </div>
          <div
            className="absolute bottom-40 left-1/4 animate-float cursor-pointer transition-all duration-300 hover:scale-150"
            style={{ animationDelay: "2s" }}
          >
            <Satellite className="h-5 w-5 text-blue-500 opacity-40 hover:opacity-100 hover:drop-shadow-lg" />
          </div>
          <div
            className="absolute top-20 right-1/3 animate-float cursor-pointer transition-all duration-300 hover:scale-125"
            style={{ animationDelay: "3s" }}
          >
            <Satellite className="h-7 w-7 text-purple-400 opacity-50 hover:opacity-100 hover:drop-shadow-lg" />
          </div>
          <div
            className="absolute bottom-20 right-20 animate-float cursor-pointer transition-all duration-300 hover:scale-150"
            style={{ animationDelay: "4s" }}
          >
            <Satellite className="h-5 w-5 text-cyan-400 opacity-60 hover:opacity-100 hover:drop-shadow-lg" />
          </div>

          {/* Enhanced Animated Grid Pattern with Movement */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse-grow"></div>
          <div
            className="absolute inset-0 bg-grid-pattern opacity-3 animate-float"
            style={{ transform: "rotate(45deg)" }}
          ></div>

          {/* More Interactive Floating Orbs */}
          <div className="absolute top-1/6 left-1/4 w-16 h-16 bg-gradient-to-r from-green-300 to-blue-300 rounded-full blur-xl opacity-30 animate-pulse cursor-pointer hover:blur-lg hover:opacity-60 hover:scale-125 transition-all duration-500"></div>
          <div className="absolute bottom-1/4 right-1/5 w-24 h-24 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-xl opacity-20 animate-bounce-gentle cursor-pointer hover:blur-lg hover:opacity-50 hover:scale-125 transition-all duration-500"></div>
          <div className="absolute top-1/3 left-1/6 w-12 h-12 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-xl opacity-25 animate-float cursor-pointer hover:blur-lg hover:opacity-55 hover:scale-150 transition-all duration-500"></div>
          <div
            className="absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full blur-xl opacity-15 animate-bounce-gentle cursor-pointer hover:blur-lg hover:opacity-45 hover:scale-125 transition-all duration-500"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/6 left-1/3 w-14 h-14 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full blur-xl opacity-20 animate-float cursor-pointer hover:blur-lg hover:opacity-50 hover:scale-150 transition-all duration-500"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Enhanced Moving Lines - More Dynamic */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-shimmer hover:via-green-600 transition-all duration-300 cursor-pointer hover:h-0.5"></div>
            <div
              className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shimmer hover:via-blue-600 transition-all duration-300 cursor-pointer hover:h-0.5"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-shimmer hover:via-purple-600 transition-all duration-300 cursor-pointer hover:h-0.5"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer hover:via-cyan-600 transition-all duration-300 cursor-pointer hover:h-0.5"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>

          {/* Enhanced Diagonal Moving Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-2 h-full bg-gradient-to-b from-transparent via-green-300/20 to-transparent animate-float transform rotate-12 cursor-pointer hover:via-green-300/50 hover:w-3 transition-all duration-300"></div>
            <div
              className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent animate-bounce-gentle transform -rotate-12 cursor-pointer hover:via-blue-300/50 hover:w-2 transition-all duration-300"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Main Heading with Gradient Text */}
            <div className="mb-8 animate-fade-in">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-emerald-100/80 border border-emerald-200/50 rounded-full mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-emerald-700 font-medium text-sm flex gap-x-3 items-center">
                  <Leaf size="1.2em" /> Transforming Agriculture with AI
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight cursor-default">
                <span
                  className="block animate-slide-up text-gray-900 dark:text-white hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: "0.2s" }}
                >
                  AI-Powered{" "}
                  <span className="gradient-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-shift hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg">
                    Satellite Intelligence
                  </span>{" "}
                  for Smart Farming
                </span>
              </h1>
            </div>

            <div
              className="animate-fade-in mb-8"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed cursor-default hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                Welcome to{" "}
                <span className="font-bold text-green-600 hover:text-green-700 transition-colors duration-300 cursor-pointer hover:scale-105 inline-block">
                  SparkyAI Private Limited
                </span>
                , your one-stop solution for AI-powered satellite imagery
                analytics. We're transforming agriculture in India through
                cutting-edge technology and timely field monitoring.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <a target="_blank" href="https://sparky-ai-dashboard-power.vercel.app/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg group transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl rounded-full animate-glow cursor-pointer hover:rotate-1"
                >
                  Start Free Farm Analysis
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform animate-bounce-gentle" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg border-2 hover:bg-green-50 hover:border-green-300 transition-all duration-300 hover:scale-110 rounded-full flex items-center gap-3 hover-glow cursor-pointer hover:-rotate-1"
              >
                <Play className="h-6 w-6 animate-pulse" />
                Watch Demo
              </Button>
            </div>
            <motion.div
              ref={dashboardRef}
              className="rounded-lg relative max-w-7xl mx-auto animate-fade-in hover-scale mt-16"
              // style={{ animationDelay: "0.8s", y: dashboardY }}
            >
              <div className="relative h-[420px] overflow-hidden rounded-2xl">
                <img 
                  src="./dashboardUI.png" 
                  alt="Dashboard UI" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 relative z-10 mt-10">
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-100"
            whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              {farmersCount.count}+
            </motion.div>
            <div className="text-gray-600">Farmers Connected</div>
          </motion.div>

          <motion.div
            className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-100"
            whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-teal-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              {hectaresCount.count}+
            </motion.div>
            <div className="text-gray-600">Hectares Monitored</div>
          </motion.div>

          <motion.div
            className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100"
            whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              {regionsCount.count}
            </motion.div>
            <div className="text-gray-600">States in India</div>
          </motion.div>

          <motion.div
            className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100"
            whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              {accuracyCount.count}%
            </motion.div>
            <div className="text-gray-600">Model Accuracy</div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
