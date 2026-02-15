"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";


export function GlobeVisualization() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        let width = 0;

        // Function to handle resize and init
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener('resize', onResize);
        onResize();

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.1, 0.1],
            markerColor: [0.1, 0.8, 1],
            glowColor: [0.1, 0.1, 0.2],
            markers: [
                // US (West, East, Central)
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.0060], size: 0.03 },
                { location: [41.8781, -87.6298], size: 0.03 },
                // Europe (London, Berlin, Paris)
                { location: [51.5074, -0.1278], size: 0.03 },
                { location: [52.5200, 13.4050], size: 0.03 },
                { location: [48.8566, 2.3522], size: 0.03 },
                // India (Mumbai, Bangalore, Delhi) - High density
                { location: [19.0760, 72.8777], size: 0.05 },
                { location: [12.9716, 77.5946], size: 0.05 },
                { location: [28.7041, 77.1025], size: 0.05 },
                // Asia Pacific (Tokyo, Singapore, Sydney)
                { location: [35.6762, 139.6503], size: 0.03 },
                { location: [1.3521, 103.8198], size: 0.03 },
                { location: [-33.8688, 151.2093], size: 0.03 },
                // Americas (Canada, Mexico, Brazil)
                { location: [45.4215, -75.6972], size: 0.03 },
                { location: [19.4326, -99.1332], size: 0.03 },
                { location: [-23.5505, -46.6333], size: 0.03 },
                // Middle East & Africa (Dubai, Cape Town)
                { location: [25.2048, 55.2708], size: 0.03 },
                { location: [-33.9249, 18.4241], size: 0.03 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.003;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', maxWidth: "600px", maxHeight: "600px", aspectRatio: 1 }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] text-zinc-400 font-mono pointer-events-none whitespace-nowrap">
                LIVE NEURAL MESH v2.0
            </div>
        </div>
    );
}
