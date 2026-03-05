import React from "react";
import Bg2 from "./ui/webpage Bg2.png";

const PrincipleSection = () => {
  return (
    <section
      id="principle"
      className="relative overflow-hidden py-24 flex items-center bg-white"
    >
      {/* ✅ Background band (cropped/zoomed so black parts go out of view) */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[130%] sm:w-[120%] lg:w-[110%]
          h-[520px] sm:h-[560px] lg:h-[600px]
          bg-no-repeat bg-center
        "
        style={{
          backgroundImage: `url(${Bg2})`,
          backgroundSize: "140% auto",
          backgroundPosition: "center 55%",
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6 uppercase tracking-wide">
              Reproducing the Physiological Environment
            </h2>

            <div className="space-y-6 text-gray-100/40 text-lg leading-relaxed">
              <p>
                At the core of our innovation lies a proprietary method to
                synthesize an Extracellular Matrix (ECM) that mimics nature
                itself. By combining{" "}
                <strong className="text-cyan-400">hyaluronic acid</strong> with
                key structural proteins, we create a scaffold that cells
                recognize as home.
              </p>
              <p>
                Unlike standard petri dishes or synthetic polymers, SYLPOLE's
                matrix provides the biochemical and mechanical cues necessary
                for cells to behave exactly as they would inside the human body.
              </p>
            </div>

            <div className="mt-8">
              <a
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"
                href="#"
              >
                Read scientific paper
                <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 relative fade-in-section lg:flex lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group bg-slate-800/60">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent mix-blend-overlay z-10" />

              {/* inner padded panel to create the green framed image look */}
              <div className="p-6 lg:p-8">
                <div className="rounded-xl overflow-hidden bg-gradient-to-b from-green-800/90 to-green-700/90 shadow-inner">
                  <img
                    alt="3D visualization of molecular protein structures forming a complex matrix network"
                    className="w-full h-[420px] object-contain transform group-hover:scale-105 transition-transform duration-700 bg-black/20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCRo38TiauuTkVi0KrgX09wsQ-yBXAJfS-lS_lv9GODYXHOAbnzav1b49qvTee_hEzoAu6gpSkTwKuVzHzWOsk8H8iIXIawLh4Ml4vN0gZat3v7vQmGB4kWsvTZoTqOBvw9NhCJFTRUyy2iE9p2U7NCOc5j9FfY8sbt3pAqXPd4FPxZsWtBo6_gfz5WU8Q37he2xUNXtYvXRdUOMc7HUvX1vO7OYZgCVJTf7aGu2DG7LWx3XAH2uT-UklcWNNW2rI7fUH15kWo_w"
                  />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-white">
                    ECM Synthesis Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleSection;