"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { motion as motion2d } from "framer-motion";

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Slow ambient rotation matching reference
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} ref={meshRef} scale={2.8}>
            <MeshDistortMaterial
                color="#151515" // Slightly lighter black to be visible against pure black bg
                attach="material"
                distort={0.5} // More distortion for liquid effect
                speed={2}
                roughness={0.1} // Glossy
                metalness={1} // Full chrome/liquid metal
                bumpScale={0.005}
                clearcoat={1}
                clearcoatRoughness={0.1}
                radius={1}
            />
        </Sphere>
    );
}

// Separate component for the floating buttons to keep the scene clean
function FloatingInterface() {
    // Exact positions from reference: Top-Left, Bottom-Left, Top-Right (near), Bottom-Right
    return (
        <div className="absolute inset-0 pointer-events-none z-10 w-full h-full">
            {/* AI Automation - Top Left */}
            <motion2d.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-[15%] left-0 md:top-[20%] md:left-[-15%] pointer-events-auto"
            >
                <motion2d.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors cursor-pointer group shadow-2xl"
                >
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12 2.1 12.1" /><path d="M2.1 12.1a10 10 0 0 1 17.8-5.9" /></svg>
                    </div>
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase font-heading">AI AUTOMATION</span>
                </motion2d.div>
            </motion2d.div>

            {/* AI Assistants - Middle Left */}
            <motion2d.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-[65%] left-[5%] md:top-[70%] md:left-[-15%] pointer-events-auto"
            >
                <motion2d.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors cursor-pointer group shadow-2xl"
                >
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><path d="M4 11v2a4 4 0 0 0 8 0v-2" /><path d="M12 17v4" /><path d="M8 21h8" /><path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" /><path d="M8 9H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" /></svg>
                    </div>
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase font-heading">AI ASSISTANTS</span>
                </motion2d.div>
            </motion2d.div>

            {/* Web Systems - Bottom Left */}
            <motion2d.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute top-[40%] left-[-2%] md:top-[45%] md:left-[-5%] pointer-events-auto"
            >
                <motion2d.div
                    animate={{ y: [0, -9, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors cursor-pointer group shadow-2xl"
                >
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><path d="M9 21V9" /></svg>
                    </div>
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase font-heading">WEB SYSTEMS</span>
                </motion2d.div>
            </motion2d.div>

            {/* Data Pipelines - Top Right */}
            <motion2d.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[10%] right-[-5%] md:right-[-5%] pointer-events-auto"
            >
                <motion2d.div
                    animate={{ y: [0, -11, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors cursor-pointer group shadow-2xl"
                >
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h5" /><path d="M12 12v9" /><path d="M16 16h6" /><path d="M16 20h6" /></svg>
                    </div>
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase font-heading">DATA PIPELINES</span>
                </motion2d.div>
            </motion2d.div>

            {/* Cloud Architecture - Middle Right */}
            <motion2d.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-[35%] right-[-15%] md:right-[-20%] pointer-events-auto"
            >
                <motion2d.div
                    animate={{ y: [0, -13, 0] }}
                    transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors cursor-pointer group shadow-2xl"
                >
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3-1.3-3-3s1.3-3 3-3h.4c.3-1.8 1.9-3.2 3.8-3.2 2.2 0 4 1.8 4 4 0 .4-.1.8-.2 1.2" /><path d="M12 12c.6-2.6 3.1-4 5.7-3.5 1.5.3 2.7 1.4 3.2 2.9.5 2.1-.2 4.3-1.9 5.6H17.5" /></svg>
                    </div>
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase font-heading">CLOUD ARCHITECTURE</span>
                </motion2d.div>
            </motion2d.div>

            {/* System Integration - Bottom Right */}
            <motion2d.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute top-[60%] right-[-5%] md:right-[-10%] pointer-events-auto"
            >
                <motion2d.div
                    animate={{ y: [0, -9, 0] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                    className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors cursor-pointer group shadow-2xl"
                >
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                    </div>
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase font-heading">SYSTEM INTEGRATION</span>
                </motion2d.div>
            </motion2d.div>

            {/* Intelligent Infrastructure - Bottom Middle */}
            <motion2d.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute top-[85%] right-0 md:right-[-10%] pointer-events-auto"
            >
                <motion2d.div
                    animate={{ y: [0, -9, 0] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                    className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors cursor-pointer group shadow-2xl"
                >
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                    </div>
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase font-heading">INTELLIGENT INFRASTRUCTURE</span>
                </motion2d.div>
            </motion2d.div>
        </div>
    );
}

export function FluidSphere() {
    return (
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            {/* The 3D Canvas */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5.5] }} className="outline-none focus:outline-none !outline-none" tabIndex={-1}>
                    {/* Studio Environment is KEY for liquid reflections */}
                    <Environment preset="studio" blur={0.6} />

                    <ambientLight intensity={2} />
                    {/* Sharp spotlight for rim lighting */}
                    <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={5} color="white" />
                    <pointLight position={[-10, -5, -10]} intensity={5} color="#8b5cf6" /> {/* Purple backlight */}

                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <AnimatedSphere />
                    </Float>
                </Canvas>
            </div>

            {/* The Floating UI Overlay */}
            <FloatingInterface />
        </div>
    );
}
