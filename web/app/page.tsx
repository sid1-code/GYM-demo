"use client";

import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Flame,
  Trophy,
  Clock,
  Target,
  Dumbbell,
  Zap,
  ChevronRight,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="relative flex flex-col overflow-x-hidden bg-black">
      {/* Global Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* NEW Top Hero Section (FitFusion Style) */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

        <div className="container-custom relative z-30 h-full flex flex-col items-center justify-between py-12">
          {/* Main Headline (z-10: Behind Figure) */}
          {/* Main Headline (z-10: Behind Figure) */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-full text-center z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[8vw] md:text-[6.5rem] font-black leading-[0.8] tracking-tighter font-outfit uppercase select-none"
            >
              <span className="text-primary block mb-2">Sculpt Your Body,</span>
              <span className="text-white/30 block">Elevate Your Spirit</span>
            </motion.h1>
          </div>

          {/* Central Figure (z-20: Foreground) */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="relative w-full h-[95vh] max-w-5xl mt-auto">
              <NextImage
                src="/hero-figure.png"
                alt="Elite Athlete"
                fill
                className="object-contain object-bottom grayscale brightness-[0.85] contrast-[1.25] drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
                priority
              />
            </div>
          </div>

          {/* Floating Stats Cards (z-30: Positioned around person) */}
          <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
            <div className="relative w-full max-w-5xl aspect-[4/5] md:aspect-[3/4]">
              {/* Hours (Left - Moved further out and down) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="absolute top-[45%] left-[5%] md:left-[10%] pointer-events-auto"
              >
                <div className="bg-[#121612]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[130px] transform -rotate-3 scale-90 md:scale-100">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 shadow-[0_0_15px_rgba(182,248,41,0.2)]">
                    <Clock size={20} />
                  </div>
                  <div className="text-[9px] text-text-muted uppercase font-black tracking-[0.2em] mb-1">Hours</div>
                  <div className="text-2xl font-black text-white">1.5</div>
                </div>
              </motion.div>

              {/* Poses (Right - Moved further out and down) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute top-[45%] right-[5%] md:right-[10%] pointer-events-auto"
              >
                <div className="bg-[#121612]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[130px] transform rotate-3 scale-90 md:scale-100">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 shadow-[0_0_15px_rgba(182,248,41,0.2)]">
                    <Target size={20} />
                  </div>
                  <div className="text-[9px] text-text-muted uppercase font-black tracking-[0.2em] mb-1">Poses</div>
                  <div className="text-2xl font-black text-white">20</div>
                </div>
              </motion.div>

              {/* Kcal (Left Forearm Projection) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-[35%] left-[5%] md:left-[12%] pointer-events-auto"
              >
                <div className="bg-[#121612]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[130px] transform rotate-6 scale-90 md:scale-100">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 shadow-[0_0_15px_rgba(182,248,41,0.2)]">
                    <Flame size={20} />
                  </div>
                  <div className="text-[9px] text-text-muted uppercase font-black tracking-[0.2em] mb-1">Kcal</div>
                  <div className="text-2xl font-black text-white">550</div>
                </div>
              </motion.div>

              {/* Sets (Right Forearm Projection) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-[35%] right-[5%] md:right-[12%] pointer-events-auto"
              >
                <div className="bg-[#121612]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[130px] transform -rotate-6 scale-90 md:scale-100">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 shadow-[0_0_15px_rgba(182,248,41,0.2)]">
                    <Dumbbell size={20} />
                  </div>
                  <div className="text-[9px] text-text-muted uppercase font-black tracking-[0.2em] mb-1">Sets</div>
                  <div className="text-2xl font-black text-white">5</div>
                </div>
              </motion.div>
            </div>
          </div>


          {/* 4. Bottom Blur Overlay (z-35) */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent z-35 pointer-events-none" />

          {/* Social Proof & CTA Bar (z-40) */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-auto z-40">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-surface-2 overflow-hidden relative shadow-lg">
                    <NextImage src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" fill />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-2xl font-black text-white leading-none">12k+</div>
                <div className="text-text-muted text-xs font-bold uppercase tracking-widest mt-1">Happy Spirits</div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce cursor-pointer flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
          <ChevronRight size={24} className="rotate-90 text-primary mt-2" />
        </div>
      </section>

      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-black pb-24">
        {/* Animated Background Blurs */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"
          />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight font-outfit">
              Unlock Your <br />
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                className="text-transparent bg-clip-text bg-accent-gradient drop-shadow-[0_0_15px_rgba(182,248,41,0.3)] bg-[length:200%_auto]"
              >
                Elite Potential
              </motion.span>
            </h1>

            <p className="text-xl text-text-secondary max-w-lg mx-auto lg:mx-0">
              Transform your body and mind with premium fitness programs designed for peak performance. Join the 1% who train without limits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/programs">
                <Button size="lg" className="w-full sm:w-auto">Start Training</Button>
              </Link>
              <Link href="/success-stories">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">View Transformation</Button>
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-text-muted text-sm">Athletes</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-text-muted text-sm">Success Rate</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-text-muted text-sm">Elite Coaches</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <Card className="p-0 overflow-hidden border-white/10 bg-[#121612]/50 backdrop-blur-sm aspect-[4/3] relative group shadow-2xl" hoverEffect={false}>
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#0B0E0C] via-transparent to-transparent opacity-60" />
              <NextImage
                src="/gym-hero.png"
                alt="FitPulse Elite Gym"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="px-3 py-1 bg-primary text-black text-[10px] font-bold uppercase tracking-widest rounded mb-2 w-fit">
                  Live View
                </div>
                <div className="text-2xl font-bold text-white font-outfit">FitPulse HQ</div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container-custom">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="rounded-[32px] overflow-hidden relative p-12 md:p-24 text-center border border-white/5 shadow-2xl"
        >
          <div className="absolute inset-0 bg-accent-gradient opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-outfit">Ready to <br />Level Up?</h2>
            <p className="text-xl text-text-secondary">Join thousands of athletes who have transformed their lives with FitPulse.</p>
            <div className="flex justify-center">
              <Link href="/contact" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto min-w-[200px]">Get Started Now</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
