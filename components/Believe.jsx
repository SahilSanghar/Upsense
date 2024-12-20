"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export default function Believe() {
return (
    (<AuroraBackground>
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-5xl md:text-7xl font-bold dark:text-white me-[680px]">
            We Believe
        </div>
        <div
            className="font-extralight text-base md:text-8xl dark:text-neutral-200 py-4">
            "Design should be easy <br />
            to understand because <br/>
            simple ideas are quicker <br />
            to grasp..."
        </div>
    </motion.div>
    </AuroraBackground>)
);
}
