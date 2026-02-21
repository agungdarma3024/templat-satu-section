"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function HeroSection() {
  const socialLinks = [
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" },
  ];

  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white flex flex-col justify-center overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#a36e3e]/15 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <main className="relative grid grid-cols-12 px-8 md:px-16 lg:px-20 items-center z-10 -mt-16 md:-mt-24">
        
        {/* Sisi Kiri: Teks */}
        <div className="col-span-12 md:col-span-5 z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black leading-none mb-4 uppercase tracking-tighter">
              HEADPHONE <br /> 
              <span className="text-white/90 border-y border-white/30 py-1 md:py-2 mt-2 block w-fit">
                ACSESSORIS
              </span>
            </h1>
            
            <p className="text-gray-400 text-xs md:text-sm max-w-sm leading-relaxed mt-4 md:mt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            {/* Social Media Buttons */}
            <div className="flex gap-3 mt-6 md:mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, backgroundColor: "#a36e3e", borderColor: "#a36e3e" }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-white/20 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sisi Kanan: Gambar Produk */}
        <div className="col-span-12 md:col-span-7 relative flex justify-center items-center mt-10 md:mt-0">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/headphone.png" // PASTIKAN NAMA FILE KAMU ADALAH headphone.png
            alt="Premium Headphone"
            className="w-[90%] md:w-[75%] lg:w-[65%] object-contain z-20 drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)]"
          />
          
          <img 
            src="/headphone.png" // PASTIKAN NAMA FILE KAMU ADALAH headphone.png
            className="absolute right-[-5%] md:right-[0%] opacity-15 w-[80%] md:w-[60%] object-contain blur-sm grayscale -z-10"
            alt=""
            aria-hidden="true"
          />
        </div>
      </main>

      {/* --- Footer Cards --- */}
      <div className="absolute bottom-0 left-0 w-full grid grid-cols-2 md:grid-cols-4 gap-1 px-8 md:px-12 pb-6 md:pb-8">
        {[1, 2, 3, 4].map((item) => (
          <div 
            key={item}
            className={`p-4 md:p-6 h-28 md:h-32 flex flex-col justify-end transition-transform duration-300 hover:-translate-y-1 ${
              item % 2 === 0 ? 'bg-[#a36e3e]' : 'bg-[#1a1a1a]'
            }`}
          >
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-1">Product 0{item}</h3>
            <p className="text-[9px] text-gray-300 leading-tight opacity-70 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}