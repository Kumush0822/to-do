import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, ExternalLink } from "lucide-react";

// Single-file React component portfolio
// Uses Tailwind CSS utility classes and Framer Motion for animations.
// Drop this component into a React app configured with Tailwind + Framer Motion + lucide-react.

export default function Portfolio() {
  const projects = [
    {
      title: "Ansor Med",
      description: "Sog'liqni saqlash uchun responsive web-ilova (EMR / appointment).",
      tags: ["React", "Tailwind", "API"],
      url: "#",
    },
    {
      title: "Calculator",
      description: "Minimal, tez va aniq kalkulyator — mobil va desktop uchun optimallashtirilgan.",
      tags: ["Vanilla JS", "UX"],
      url: "#",
    },
    {
      title: "To Do",
      description: "To-do ilovasi — localStorage bilan offline qo'llab-quvvatlash.",
      tags: ["React", "LocalStorage"],
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900 text-slate-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-pink-500 flex items-center justify-center text-slate-900 font-bold shadow-2xl">OK</div>
          <div>
            <h1 className="text-lg font-semibold">Ozodova Kumush</h1>
            <p className="text-sm text-slate-300">Frontend Developer — zamonaviy UI & animatsiyalar</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-slate-200">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#" className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20">
            Resume
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm text-indigo-200/80">Salom — men</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Ozodova Kumush
            </h2>
            <p className="text-slate-300 max-w-xl">
              Zamonaviy, responsiv va interaktiv veb-ilovalar yarataman. Animatsiyalar va
              foydalanuvchi tajribasiga (UX) katta e'tibor beraman. Quyida mening tanlangan
              loyihalarimni ko'rishingiz mumkin.
            </p>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-3 bg-indigo-500 px-4 py-2 rounded-lg font-medium shadow-lg"
              >
                Ko'rish
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10"
              >
                <Mail size={16} /> Kontakt
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-6 rounded-2xl shadow-2xl"
          >
            <div className="h-64 rounded-lg bg-gradient-to-br from-indigo-700 to-pink-600 flex items-center justify-center text-2xl font-bold">
              Profil banner / screenshot
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-slate-200">
              <div className="bg-white/3 p-3 rounded-lg">React</div>
              <div className="bg-white/3 p-3 rounded-lg">Tailwind</div>
              <div className="bg-white/3 p-3 rounded-lg">Framer Motion</div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">Tanlangan loyihalar</h3>
          <p className="text-slate-300 mt-2">Quyida 3 ta loyiham — bosib ko'rish uchun kirishlar mavjud.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ translateY: -6 }}
                className="bg-white/4 p-5 rounded-2xl shadow-lg border border-white/6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    <p className="text-slate-300 mt-2 text-sm">{p.description}</p>
                  </div>
                  <a href={p.url} className="inline-flex items-center gap-2 text-sm text-slate-200 opacity-90">
                    <ExternalLink size={16} /> Batafsil
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button className="px-3 py-2 rounded-md bg-indigo-500 text-sm font-medium">Preview</button>
                  <button className="px-3 py-2 rounded-md border border-white/8 text-sm">Source</button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">About me</h3>
            <p className="text-slate-300 mt-3">
              Men Ozodova Kumush — front-end yo'nalishida dizayn va kodni uyg'unlashtiraman. Loyihalarda
              responsivlik, performance va qulay UX dizayniga e'tibor beraman. Animatsiyalar orqali
              foydalanuvchi bilan aloqani yumshatib, interfeysni qiziqarli qilaman.
            </p>

            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• Zamonaviy UI: Tailwind CSS, component-first</li>
              <li>• Animatsiyalar: Framer Motion</li>
              <li>• JavaScript: React, Vanilla JS</li>
            </ul>
          </div>
          <div className="bg-white/4 p-6 rounded-2xl">
            <h4 className="font-semibold">Tez ma'lumot</h4>
            <div className="mt-3 text-sm text-slate-200 space-y-2">
              <div><strong>Ism:</strong> Ozodova Kumush</div>
              <div><strong>Rol:</strong> Frontend Developer</div>
              <div><strong>Kontakt:</strong> <a href="#contact" className="underline">Kontakt sahifasi</a></div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">Kontakt</h3>
          <p className="text-slate-300 mt-2">Ishlash yoki savol uchun yozing — tez orada javob beraman.</p>

          <motion.form
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 grid md:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input placeholder="Ism" className="p-3 rounded-lg bg-white/5 border border-white/6" />
            <input placeholder="Email" className="p-3 rounded-lg bg-white/5 border border-white/6" />
            <textarea placeholder="Xabaringiz" className="p-3 rounded-lg bg-white/5 border border-white/6 md:col-span-2" rows={4} />
            <div className="md:col-span-2 flex items-center gap-3">
              <button className="px-4 py-2 bg-indigo-500 rounded-lg font-medium">Yuborish</button>
              <a href="#" className="inline-flex items-center gap-2 text-sm underline"><Github size={16} /> GitHub</a>
            </div>
          </motion.form>
        </section>

        <footer className="mt-16 py-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Ozodova Kumush — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
