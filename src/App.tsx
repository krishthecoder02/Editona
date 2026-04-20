// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Play,
//   CheckCircle,
//   Users,
//   // Clock,
//   Video,
//   Smartphone,
//   Briefcase,
//   Globe,
//   MessageCircle,
//   Mail,
//   Phone,
//   ExternalLink,
//   ChevronRight,
//   Monitor,
//   Layout,
//   Star,
//   Zap,
//   Award,
//   FileBadge
// } from 'lucide-react';

// // --- STYLES & THEME ---
// // Primary: Deep Purple (#6D28D9)
// // Accent: Gold (#F59E0B)
// // Background: Dark Charcoal (#0F0F0F)

// // --- CONSTANTS ---
// const COURSE_PRICE = "₹2499";
// const COURSE_DURATION = "45 Days";
// const CONTACT_PHONE = "6299172019";
// const CONTACT_EMAIL = "kkmandal2030@gmail.com";
// const WHATSAPP_LINK = `https://wa.me/91${CONTACT_PHONE}`;
// const TRAILER_URL = "https://youtu.be/HrrrTsJhHHw?si=6B3sE7s87OqyBvBr";

// // --- COMPONENTS ---

// const SectionHeading = ({ title , subtitle , light = false }) => (
//   <div className="text-center mb-16 px-4">
//     <motion.span
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-3 block"
//     >
//       {subtitle}
//     </motion.span>
//     <motion.h2
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.1 }}
//       className={`text-3xl md:text-5xl font-bold ${light ? 'text-white' : 'text-zinc-100'}`}
//     >
//       {title}
//     </motion.h2>
//     <motion.div
//       initial={{ width: 0 }}
//       whileInView={{ width: "80px" }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.3, duration: 0.8 }}
//       className="h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto mt-6 rounded-full"
//     />
//   </div>
// );


// // const SectionHeading: React.FC<SectionHeadingProps> = ({
// //   title,
// //   subtitle,
// //   light = false,
// // }) => (
// //   <div className="text-center mb-16 px-4">
// //     <motion.span
// //       initial={{ opacity: 0, y: 10 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-3 block"
// //     >
// //       {subtitle}
// //     </motion.span>

// //     <motion.h2
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ delay: 0.1 }}
// //       className={`text-3xl md:text-5xl font-bold ${
// //         light ? "text-white" : "text-zinc-100"
// //       }`}
// //     >
// //       {title}
// //     </motion.h2>

// //     <motion.div
// //       initial={{ width: 0 }}
// //       whileInView={{ width: "80px" }}
// //       viewport={{ once: true }}
// //       transition={{ delay: 0.3, duration: 0.8 }}
// //       className="h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto mt-6 rounded-full"
// //     />
// //   </div>
// // );



// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-xl border-b border-zinc-800' : 'bg-transparent py-6'}`}>
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-amber-500 rounded-lg flex items-center justify-center">
//             <Video className="text-white w-6 h-6" />
//           </div>
//           <span className="text-xl font-bold tracking-tighter text-white">EDIT<span className="text-amber-500">PRO</span></span>
//         </div>
//         <div className="hidden md:flex items-center gap-8 text-zinc-300 font-medium">
//           <a href="#curriculum" className="hover:text-amber-500 transition-colors">Curriculum</a>
//           <a href="#reviews" className="hover:text-amber-500 transition-colors">Reviews</a>
//           <a href="#pricing" className="hover:text-amber-500 transition-colors">Pricing</a>
//           <a
//             href={WHATSAPP_LINK}
//             className="px-6 py-2 bg-amber-500 text-black rounded-full font-bold hover:bg-amber-400 transition-all transform hover:scale-105"
//           >
//             Enroll Now
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const Hero = () => (
//   <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0A0A]">
//     {/* Background Decorative Elements */}
//     <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
//     <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />

//     <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-amber-500 text-sm font-bold mb-6">
//           <Zap size={16} />
//           <span>JOIN THE ELITE 1% OF EDITORS</span>
//         </div>
//         <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
//           Master Video Editing in <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">{COURSE_DURATION}</span>
//         </h1>
//         <h2 className="hidden">CapCut Premiere Pro After Effects Photoshop Course</h2>
//         <p className="text-zinc-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
//           From absolute beginner to a job-ready professional. Learn the industry-standard tools and start your career as a high-paid video editor.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 mb-10">
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#pricing"
//             className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2"
//           >
//             Enroll Now for {COURSE_PRICE}
//           </motion.a>
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href={WHATSAPP_LINK}
//             className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors"
//           >
//             <MessageCircle size={20} className="text-green-500" />
//             Join on WhatsApp
//           </motion.a>
//         </div>

//         <div className="flex items-center gap-6">
//           <div className="flex -space-x-3">
//             {[1, 2, 3, 4].map(i => (
//               <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
//                 <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
//               </div>
//             ))}
//           </div>
//           <p className="text-zinc-500 text-sm font-medium">
//             <span className="text-zinc-200">500+ Students</span> already enrolled this year
//           </p>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//         className="relative"
//       >
//         <div className="relative z-10 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-purple-500/10">
//           <img
//             src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
//             alt="Editing Workspace"
//             className="w-full h-auto"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-8">
//             <motion.a
//               href={TRAILER_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl w-full border border-white/10 cursor-pointer group hover:bg-white/20 transition-all shadow-xl"
//             >
//               <div className="p-3 bg-amber-500 rounded-lg group-hover:bg-amber-400 transition-colors">
//                 <Play className="text-black fill-current" size={20} />
//               </div>
//               <div className="flex-1">
//                 <p className="text-white font-bold flex items-center gap-2">
//                   Watch Trailer <ExternalLink size={14} className="opacity-50" />
//                 </p>
//                 <p className="text-zinc-300 text-sm">See what you will create in 45 days</p>
//               </div>
//             </motion.a>
//           </div>
//         </div>
//         {/* Decorative elements behind image */}
//         <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-amber-500/20 rounded-full animate-pulse" />
//         <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl" />
//       </motion.div>
//     </div>
//   </section>
// );

// const CourseOverview = () => {
//   const features = [
//     { title: "Adobe Premiere Pro", desc: "Professional Video Editing", icon: <Monitor className="text-blue-400" /> },
//     { title: "After Effects", desc: "Motion Graphics & VFX", icon: <Zap className="text-purple-400" /> },
//     { title: "Photoshop", desc: "Thumbnails & Branding", icon: <Layout className="text-blue-500" /> },
//     { title: "CapCut Desktop", desc: "Viral Shorts & Reels", icon: <Smartphone className="text-teal-400" /> }
//   ];

//   return (
//     <section className="py-24 bg-[#0F0F0F]">
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionHeading subtitle="WHAT'S INSIDE" title="Master the Industry Tools" />

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((f, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-all group"
//             >
//               <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:bg-purple-600/10 group-hover:border-purple-500 transition-colors">
//                 {f.icon}
//               </div>
//               <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
//               <p className="text-zinc-500 text-sm">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8"
//         >
//           <div className="flex-1">
//             <h3 className="text-2xl font-bold text-white mb-4">The 45-Day Career Transformation</h3>
//             <p className="text-zinc-400 mb-6">Our roadmap is designed to take you from knowing nothing to landing your first client or job. We focus on practical skills that clients actually pay for.</p>
//             <div className="flex flex-wrap gap-4">
//               <span className="flex items-center gap-2 text-zinc-300 text-sm bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
//                 <CheckCircle size={14} className="text-amber-500" /> Week 1-2: Foundations
//               </span>
//               <span className="flex items-center gap-2 text-zinc-300 text-sm bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
//                 <CheckCircle size={14} className="text-amber-500" /> Week 3-4: Advanced VFX
//               </span>
//               <span className="flex items-center gap-2 text-zinc-300 text-sm bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
//                 <CheckCircle size={14} className="text-amber-500" /> Week 5-6: Portfolio & Jobs
//               </span>
//             </div>
//           </div>
//           <div className="w-full md:w-auto">
//             <div className="text-4xl font-black text-amber-500 mb-2">45 DAYS</div>
//             <div className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Intensive Training</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Curriculum = () => {
//   const modules = [
//     {
//       title: "Adobe Premiere Pro",
//       details: ["Interface & Workflow", "Basic to Advanced Cutting", "Speed Ramping & Transitions", "Color Grading Mastery", "Audio Cleanup & SFX"]
//     },
//     {
//       title: "After Effects",
//       details: ["Motion Graphics Fundamentals", "Keyframing & Expressions", "Masking & Rotoscoping", "Visual Effects Basics", "Text Animations"]
//     },
//     {
//       title: "Photoshop for Editors",
//       details: ["YouTube Thumbnail Design", "High-Click Rate Strategies", "Custom Graphics & Assets", "Poster Design", "Brand Identity"]
//     },
//     {
//       title: "CapCut Desktop Mastery",
//       details: ["Interface & Desktop Workflow", "Viral Reel Editing Styles", "Auto-Captions & Subtitles", "Keyframe Animation in CapCut", "Exporting for Social Media"]
//     },
//     {
//       title: "Short-Form Content Strategy",
//       details: ["Viral Retention Hacking", "Trending Transitions", "Short-form Storytelling", "Niche Specific Editing", "Hook Creation Patterns"]
//     },
//     {
//       title: "The Business of Editing",
//       details: ["Getting Your First Job", "Portfolio Website Creation", "LinkedIn Profile Optimization", "Freelancing on Upwork/Fiverr", "Pricing Your Work"]
//     }
//   ];

//   return (
//     <section id="curriculum" className="py-24 bg-zinc-950">
//       <div className="max-w-5xl mx-auto px-6">
//         <SectionHeading subtitle="THE CURRICULUM" title="Everything You Need to Succeed" />

//         <div className="space-y-6">
//           {modules.map((m, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:bg-zinc-900 transition-colors"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-500 font-bold text-sm">
//                     {idx + 1}
//                   </div>
//                   <h3 className="text-xl md:text-2xl font-bold text-white">{m.title}</h3>
//                 </div>
//                 <div className="hidden sm:block px-3 py-1 bg-amber-500/10 text-amber-500 rounded text-xs font-bold uppercase tracking-wider">Module</div>
//               </div>
//               <ul className="grid sm:grid-cols-2 gap-4">
//                 {m.details.map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm md:text-base">
//                     <CheckCircle size={16} className="text-amber-500 flex-shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const LiveBenefits = () => {
//   const benefits = [
//     { title: "Live Interaction", desc: "Clear your doubts in real-time with the mentor.", icon: <Users /> },
//     { title: "Real Projects", desc: "Edit real raw footage from professional creators.", icon: <Play /> },
//     { title: "Career Guidance", desc: "One-on-one sessions for job placement strategies.", icon: <Briefcase /> },
//     { title: "Beginner Friendly", desc: "We start from 'How to open the software'.", icon: <CheckCircle /> }
//   ];

//   return (
//     <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600/5 -skew-x-12 transform origin-top-right" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <div>
//             <span className="text-amber-500 font-bold tracking-widest text-sm mb-4 block">LIVE CLASSES</span>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Interactive Learning Like Never Before</h2>
//             <div className="space-y-8">
//               {benefits.map((b, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className="flex gap-6"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/20">
//                     {React.cloneElement(b.icon, { size: 24, className: "text-white" })}
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-white mb-2">{b.title}</h4>
//                     <p className="text-zinc-500 leading-relaxed">{b.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center shadow-2xl">
//               <div className="text-center p-8">
//                 <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Video size={32} className="text-amber-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Live Session Dashboard</h3>
//                 <p className="text-zinc-500 max-w-xs mx-auto mb-8">Exclusive access to recorded sessions for life-time review.</p>
//                 <div className="flex justify-center gap-2">
//                   <div className="h-1 w-8 bg-amber-500 rounded-full" />
//                   <div className="h-1 w-2 bg-zinc-800 rounded-full" />
//                   <div className="h-1 w-2 bg-zinc-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//             {/* Floating indicator */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="absolute -top-6 -right-6 bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2"
//             >
//               <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
//               LIVE NOW
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Certification = () => (
//   <section className="py-24 bg-zinc-950 overflow-hidden">
//     <div className="max-w-7xl mx-auto px-6">
//       <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[40px] p-8 md:p-20 relative flex flex-col lg:flex-row items-center gap-16">
//         {/* Glow effect */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] pointer-events-none" />

//         <div className="flex-1 text-center lg:text-left relative z-10">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6"
//           >
//             <Award size={14} /> Get Certified
//           </motion.div>
//           <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
//             Official <span className="text-amber-500">Certification</span> for Your Portfolio
//           </h2>
//           <p className="text-zinc-400 text-lg mb-8 max-w-xl">
//             After successful completion of all 45 days and your final project, you will receive an industry-recognized certificate from EditPro. Show the world you have what it takes.
//           </p>
//           <ul className="space-y-4 mb-10 text-left max-w-sm mx-auto lg:mx-0">
//             {[
//               "Industry Recognized Credential",
//               "Valid for Job Applications",
//               "Personalized for Your Specialization",
//               "Verifiable QR Code Support"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-center gap-3 text-zinc-300">
//                 <CheckCircle size={18} className="text-amber-500 flex-shrink-0" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, rotate: 5, y: 30 }}
//           whileInView={{ opacity: 1, rotate: 0, y: 0 }}
//           viewport={{ once: true }}
//           className="flex-1 w-full max-w-lg relative"
//         >
//           {/* Certificate Mockup */}
//           <div className="bg-zinc-100 rounded-lg p-8 aspect-[1.414/1] shadow-2xl shadow-amber-500/10 border-[10px] border-zinc-900 relative">
//             <div className="border border-zinc-300 h-full w-full p-4 flex flex-col items-center justify-between text-zinc-900">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mx-auto mb-4">
//                   <Award className="text-white" />
//                 </div>
//                 <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Certificate of Completion</h3>
//                 <div className="h-[1px] w-20 bg-zinc-300 mx-auto" />
//               </div>

//               <div className="text-center">
//                 <p className="text-[8px] uppercase tracking-tighter mb-1">This is to certify that</p>
//                 <h4 className="text-xl font-serif font-bold italic border-b border-zinc-300 pb-1 mb-2">Your Name Here</h4>
//                 <p className="text-[7px] max-w-[200px] leading-tight">Has successfully completed the 45-Day Professional Video Editing Course covering Adobe Premiere Pro, After Effects, and Photoshop.</p>
//               </div>

//               <div className="w-full flex justify-between items-end px-4">
//                 <div className="text-[6px]">
//                   <p className="font-bold">Director</p>
//                   <div className="h-[1px] w-12 bg-zinc-400 mt-2" />
//                 </div>
//                 <div className="w-6 h-6 border border-zinc-300 rounded flex items-center justify-center text-[5px] font-bold">
//                   SEAL
//                 </div>
//                 <div className="text-[6px]">
//                   <p className="font-bold">Date</p>
//                   <p>January 2026</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hologram badge */}
//             <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-tr from-amber-200 to-amber-500 shadow-inner flex items-center justify-center">
//               <FileBadge className="text-amber-800" size={12} />
//             </div>
//           </div>

//           {/* Decorative floating elements */}
//           <div className="absolute -top-10 -left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// const VideoReviews = () => {
//   const reviews = [
//     {
//       name: "Ishaan Verma",
//       review: "Absolutely life-changing! I learned techniques I never saw on YouTube. Highly recommended for beginners.",
//       image: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&q=80&w=200",
//       video: "PTS3mreAWFc"
//     },
//     {
//       name: "Priyanshu Gupta",
//       review: "The focus on job hunting and portfolio building is what sets this apart. Already landed my first client!",
//       image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
//       video: "bemKBmNw2Ew"
//     },
//     {
//       name: "Arjun Das",
//       review: "Premiere Pro and After Effects were explained so clearly. The live projects are exactly what I needed.",
//       image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200",
//       video: "ya5U-1cZAYk"
//     },
//     {
//       name: "Kavya Nair",
//       review: "I went from basic phone edits to professional motion graphics. Best 45 days of my learning journey.",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
//       video: "5RjKMxppXLg"
//     }
//   ];

//   return (
//     <section id="reviews" className="py-24 bg-zinc-950">
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionHeading subtitle="SUCCESS STORIES" title="Student Video Reviews" />

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {reviews.map((rev, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group shadow-xl hover:border-amber-500/30 transition-all"
//             >
//               <div className="aspect-[9/16] w-full bg-black relative">
//                 <iframe
//                   className="w-full h-full"
//                   src={`https://www.youtube.com/embed/${rev.video}`}
//                   title={`Review by ${rev.name}`}
//                   frameBorder="1"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>

//               <div className="p-6 flex flex-col flex-1 justify-between">
//                 <p className="text-zinc-400 text-sm italic leading-relaxed mb-6">
//                   "{rev.review}"
//                 </p>

//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700 bg-zinc-800">
//                     <img src={rev.image} alt={rev.name} className="w-full h-full object-cover" />
//                   </div>
//                   <div>
//                     <p className="text-white font-bold text-sm">{rev.name}</p>
//                     <div className="flex text-amber-500">
//                       {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="currentColor" />)}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Placements = () => {
//   const placements = [
//     { name: "Rahul Sharma", company: "Zomato", role: "Sr. Video Editor", text: "Got placed within 2 weeks after completing the portfolio module." },
//     { name: "Ananya Iyer", company: "Digital Agency", role: "Content Lead", text: "The LinkedIn strategies actually work. I got multiple inbound leads." },
//     { name: "Amit Verma", company: "Influencer Hub", role: "Reels Expert", text: "Went from basic cuts to complex motion graphics in just 45 days." }
//   ];

//   return (
//     <section className="py-24 bg-[#0F0F0F]">
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionHeading subtitle="CAREER STATS" title="Our Students Work At" />

//         <div className="grid md:grid-cols-3 gap-8">
//           {placements.map((p, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 relative group overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
//                 <Award size={80} />
//               </div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">
//                   <img src={`https://i.pravatar.cc/100?u=placement${idx}`} alt={p.name} />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold">{p.name}</h4>
//                   <p className="text-amber-500 text-sm font-medium">{p.company} • {p.role}</p>
//                 </div>
//               </div>
//               <p className="text-zinc-400 italic leading-relaxed">"{p.text}"</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Pricing = () => {
//   return (
//     <section id="pricing" className="py-24 bg-[#0A0A0A] relative">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[40px] overflow-hidden shadow-2xl relative">
//           <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
//           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

//           <div className="grid md:grid-cols-2">
//             <div className="p-10 lg:p-16 border-b md:border-b-0 md:border-r border-zinc-800">
//               <span className="bg-amber-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Most Popular</span>
//               <h2 className="text-4xl font-black text-white mb-2">Standard Access</h2>
//               <p className="text-zinc-400 mb-8">Complete 45-day transformation package.</p>

//               <div className="mb-10">
//                 <span className="text-6xl font-black text-white">{COURSE_PRICE}</span>
//                 <span className="text-zinc-500 ml-2">Total Package</span>
//               </div>

//               <motion.a
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 href={WHATSAPP_LINK}
//                 className="w-full py-5 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl shadow-purple-900/40"
//               >
//                 Enroll Now
//                 <ChevronRight size={20} />
//               </motion.a>
//               <p className="text-center text-zinc-500 text-sm mt-4">Next batch starts soon. Limited seats!</p>
//             </div>

//             <div className="p-10 lg:p-16 bg-zinc-950/50">
//               <h3 className="text-xl font-bold text-white mb-6">What's included:</h3>
//               <ul className="space-y-4">
//                 {[
//                   "All Software Training (5 Tools)",
//                   "Live Classes & Recordings",
//                   "Portfolio Building Project",
//                   "Job & Freelancing Strategy",
//                   "Official Course Certificate",
//                   "Asset Pack (10GB+ Data)",
//                   "Private Community Access",
//                   "Direct Mentor Support"
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-3 text-zinc-300 font-medium">
//                     <CheckCircle size={18} className={`flex-shrink-0 ${item === "Official Course Certificate" ? "text-amber-500 animate-pulse" : "text-amber-500"}`} />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Contact = () => {
//   return (
//     <section className="py-24 bg-zinc-950">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col lg:flex-row gap-16 items-center">
//           <div className="flex-1">
//             <SectionHeading subtitle="GET IN TOUCH" title="Still Have Questions?" />
//             <div className="space-y-6 mt-10">
//               <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-6 p-6 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-all group">
//                 <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-amber-500 transition-colors">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <p className="text-zinc-500 text-sm mb-1 uppercase tracking-widest font-bold">Call Us</p>
//                   <p className="text-white text-xl font-bold">+91 {CONTACT_PHONE}</p>
//                 </div>
//               </a>
//               <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-6 p-6 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-all group">
//                 <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-amber-500 transition-colors">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-zinc-500 text-sm mb-1 uppercase tracking-widest font-bold">Email Us</p>
//                   <p className="text-white text-xl font-bold">{CONTACT_EMAIL}</p>
//                 </div>
//               </a>
//             </div>
//           </div>

//           <div className="flex-1 w-full max-w-lg">
//             <div className="bg-zinc-900 p-10 rounded-[40px] border border-zinc-800 shadow-2xl">
//               <h3 className="text-2xl font-bold text-white mb-8 text-center">Chat with the Mentor</h3>
//               <p className="text-zinc-400 text-center mb-8 leading-relaxed">Get your doubts cleared about the curriculum, schedule, or payments directly over WhatsApp.</p>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={WHATSAPP_LINK}
//                 className="w-full py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl shadow-green-900/40 transition-colors"
//               >
//                 <MessageCircle size={24} />
//                 Start Chatting
//               </motion.a>
//               <div className="flex items-center justify-center gap-2 mt-6">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//                 <span className="text-zinc-500 text-sm font-medium">Online & Responsive</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="py-12 bg-black border-t border-zinc-900">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-amber-500 rounded-lg flex items-center justify-center">
//               <Video className="text-white w-5 h-5" />
//             </div>
//             <span className="text-lg font-bold tracking-tighter text-white">EDIT<span className="text-amber-500">PRO</span></span>
//           </div>

//           <p className="text-zinc-500 text-sm">
//             © {new Date().getFullYear()} EditPro Video Course. All Rights Reserved.
//           </p>

//           <div className="flex gap-6">
//             <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
//               <Globe size={18} />
//             </a>
//             <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
//               <ExternalLink size={18} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const FloatingWhatsApp = () => (
//   <motion.a
//     initial={{ scale: 0, opacity: 0 }}
//     animate={{ scale: 1, opacity: 1 }}
//     transition={{ delay: 1 }}
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//     href={WHATSAPP_LINK}
//     className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 text-white"
//   >
//     <MessageCircle size={32} />
//     <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-green-500">1</span>
//   </motion.a>
// );

// // --- MAIN APP COMPONENT ---
// export default function App() {
//   return (
//     <div className="min-h-screen bg-zinc-950 font-sans selection:bg-purple-600/30 selection:text-white">
//       <Navbar />
//       <Hero />
//       <CourseOverview />
//       <Curriculum />
//       <LiveBenefits />
//       <Certification />

//       {/* Why Choose Section */}
//       <section className="py-24 bg-[#0A0A0A]">
//         <div className="max-w-7xl mx-auto px-6">
//           <SectionHeading subtitle="THE ADVANTAGE" title="Why This Course?" />
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { title: "Job-Focused", desc: "No fluff, only skills that get you hired.", icon: <Briefcase /> },
//               { title: "Affordable", desc: "Premium content at accessible pricing.", icon: <Award /> },
//               { title: "Mentorship", desc: "Direct access to real industry editors.", icon: <Users /> },
//               { title: "Certification", desc: "Official proof of your professional skills.", icon: <FileBadge /> }
//             ].map((item, idx) => (
//               <div key={idx} className="text-center p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800">
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
//                   {React.cloneElement(item.icon, { size: 28 })}
//                 </div>
//                 <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
//                 <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <VideoReviews />
//       <Placements />
//       <Pricing />
//       <Contact />
//       <Footer />
//       <FloatingWhatsApp />
//     </div>
//   );
// }





import React, { useEffect, useRef, useState } from 'react';
import {  MessageCircle, Monitor, Layers, Image as ImageIcon, Zap, Check, Menu,  Youtube, ArrowRight, Star, Video,  Award, Briefcase } from 'lucide-react';
import * as THREE from 'three';
import Logo from "./assets/Logo_final_png.png"
// --- WhatsApp Helper ---
const openWhatsApp = (msg: string) => {
  const phone = "916299172019";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#" onClick={(e) => {e.preventDefault(); window.scrollTo(0,0)}} className="flex items-center gap-3 group">
        <div className="relative">
             {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-200"></div> */}
             <img src={Logo} alt="Logo" className="relative h-16 w-16 object-contain  rounded-full p-1" />
        </div>
        <span className="font-bold text-xl tracking-tight text-white group-hover:text-purple-400 transition-colors">EDITONA</span>
      </a>
      
      <div className="hidden md:flex items-center gap-8">
        {['Curriculum', 'Portfolio', 'Reviews', 'Pricing'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            {item}
          </a>
        ))}
        <button 
          onClick={() => openWhatsApp("Hi Editona, I want to join!")} 
          className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10 transition-all hover:scale-105"
        >
          Chat Now
        </button>
      </div>
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer" onClick={() => openWhatsApp("Menu")}>
          <Menu className="w-6 h-6" />
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Purple Glow Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <div className="animate-fade-in-up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-8">
          <Zap className="w-3 h-3" /> Future of Editing
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Ultimate AI Video Editing<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Master Class
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Master Video Editing, Motion Graphics, and AI Tools. 
          Join the elite community of creators designing the future.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => openWhatsApp("Hi Editona, I want to enroll now!")} 
            className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold shadow-lg shadow-purple-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            Enroll via WhatsApp <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => openWhatsApp("Hi, can I talk to a mentor?")} 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> Chat with Mentor
          </button>
        </div>

        {/* Software Icons */}
        <div className="mt-16 flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {['Pr', 'Ae', 'Ps', 'Ai'].map((sw) => (
                <span key={sw} className="text-2xl font-bold text-white/80 border-2 border-white/20 rounded-lg w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    {sw}
                </span>
            ))}
        </div>
      </div>
    </div>
  </section>
);

const WhatYouLearn = () => {
  const cards = [
    { icon: Video, color: "text-purple-400", title: "Premiere Pro", desc: "Professional video editing, color grading, and audio mixing workflows used in cinema." },
    { icon: Layers, color: "text-blue-400", title: "After Effects", desc: "Advanced motion graphics, VFX compositing, and 3D animations for high-end projects." },
    { icon: ImageIcon, color: "text-pink-400", title: "Graphic Design", desc: "Photoshop & Illustrator mastery. Thumbnails, branding, and typography that sells." },
    { icon: Zap, color: "text-amber-400", title: "Gen AI & Tools", desc: "Speed up workflow by 10x using Midjourney, Firefly, and automated captioning tools." },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Master The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Stack</span></h2>
          <p className="text-gray-400 text-lg">Industry standard tools + AI integration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className={`mb-6 p-3 rounded-xl bg-white/5 w-fit ${card.color}`}>
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
          
          <div className="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
             <div>
                <h3 className="text-2xl font-bold text-white mb-2">Monetization & Freelancing</h3>
                <p className="text-gray-300">Don't just learn. Earn. We teach you how to get clients, price your work, and build a personal brand.</p>
             </div>
             <button onClick={() => openWhatsApp("How does freelancing work?")} className="shrink-0 text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Ask a Mentor <ArrowRight className="w-5 h-5 text-purple-400" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// const VideoShowcase = () => {
//     const [activeTab, setActiveTab] = useState<'long' | 'short'>('long');

//     return (
//         <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What You Will <span className="text-purple-400">Create</span></h2>
                    
//                     <div className="inline-flex p-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full">
//                         <button 
//                             className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'long' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
//                             onClick={() => setActiveTab('long')}
//                         >
//                             <Monitor className="w-4 h-4" /> Long Form
//                         </button>
//                         <button 
//                             className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'short' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
//                             onClick={() => setActiveTab('short')}
//                         >
//                             <Zap className="w-4 h-4" /> Short Form
//                         </button>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {activeTab === 'long' ? (
//                         <>
//                             <div className="group bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
//                                 <div className="aspect-video w-full bg-gray-900 relative">
//                                     <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/watch?v=F6MgT_Bdgz8" title="Long Form Edit 1" allowFullScreen></iframe>
//                                 </div>
//                                 <div className="p-6">
//                                     <h4 className="text-lg font-bold text-white mb-2">Cinematic AI Video</h4>
//                                     <p className="text-sm text-gray-400">Learn Higgsfield Ai Basic To Advanced</p>
//                                 </div>
//                             </div>
//                             <div className="group bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
//                                 <div className="aspect-video w-full bg-gray-900 relative">
//                                     <iframe className="absolute inset-0 w-full h-full" src="https://youtu.be/7RaQgAJPuP4?si=0IxQLh0DSk_n0B1e" title="Long Form Edit 2" allowFullScreen></iframe>
//                                 </div>
//                                 <div className="p-6">
//                                     <h4 className="text-lg font-bold text-white mb-2">Documentary Style</h4>
//                                     <p className="text-sm text-gray-400">Master archival footage blending and sound design.</p>
//                                 </div>
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                              <div className="group bg-black border border-white/10 rounded-2xl overflow-hidden max-w-sm mx-auto w-full hover:border-purple-500/50 transition-colors">
//                                 <div className="aspect-[9/16] w-full bg-gray-900 relative">
//                                     <iframe className="absolute inset-0 w-full h-full" src="https://youtube.com/shorts/yz8649fN07c?si=7xeJrmuaN4bhVXzG" title="Short Form Edit 1" allowFullScreen></iframe>
//                                 </div>
//                                 <div className="p-6">
//                                     <h4 className="text-lg font-bold text-white mb-2">Viral Reels</h4>
//                                     <p className="text-sm text-gray-400">High retention subtitles and motion graphics.</p>
//                                 </div>
//                             </div>
//                             <div className="group bg-black border border-white/10 rounded-2xl overflow-hidden max-w-sm mx-auto w-full hover:border-purple-500/50 transition-colors">
//                                 <div className="aspect-[9/16] w-full bg-gray-900 relative">
//                                     <iframe className="absolute inset-0 w-full h-full" src="https://youtube.com/shorts/gslMMfs5SjM?si=0bXTqRjr2jagmQT3" title="Short Form Edit 2" allowFullScreen></iframe>
//                                 </div>
//                                 <div className="p-6">
//                                     <h4 className="text-lg font-bold text-white mb-2">Dynamic Shorts</h4>
//                                     <p className="text-sm text-gray-400">Transitions and SFX that keep viewers hooked.</p>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };


const VideoShowcase = () => {
    const [activeTab, setActiveTab] = useState<'long' | 'short'>('long');

    return (
        <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        What You Will <span className="text-purple-400">Create</span>
                    </h2>
                    
                    <div className="inline-flex p-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full">
                        <button 
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                                activeTab === 'long' 
                                ? 'bg-purple-600 text-white shadow-lg' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                            onClick={() => setActiveTab('long')}
                        >
                            <Monitor className="w-4 h-4" /> Long Form
                        </button>

                        <button 
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                                activeTab === 'short' 
                                ? 'bg-purple-600 text-white shadow-lg' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                            onClick={() => setActiveTab('short')}
                        >
                            <Zap className="w-4 h-4" /> Short Form
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activeTab === 'long' ? (
                        <>
                            {/* Long Video 1 */}
                            <div className="group bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
                                <div className="aspect-video w-full bg-gray-900 relative">
                                    <iframe 
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/F6MgT_Bdgz8"
                                        title="Long Form Edit 1"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-white mb-2">Cinematic AI Video</h4>
                                    <p className="text-sm text-gray-400">Learn Higgsfield AI Basic to Advanced</p>
                                </div>
                            </div>

                            {/* Long Video 2 */}
                            <div className="group bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
                                <div className="aspect-video w-full bg-gray-900 relative">
                                    <iframe 
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/7RaQgAJPuP4"
                                        title="Long Form Edit 2"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-white mb-2">Documentary Style</h4>
                                    <p className="text-sm text-gray-400">
                                        Master archival footage blending and sound design.
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Short Video 1 */}
                            <div className="group bg-black border border-white/10 rounded-2xl overflow-hidden max-w-sm mx-auto w-full hover:border-purple-500/50 transition-colors">
                                <div className="aspect-[9/16] w-full bg-gray-900 relative">
                                    <iframe 
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/yz8649fN07c"
                                        title="Short Form Edit 1"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-white mb-2">Viral Reels</h4>
                                    <p className="text-sm text-gray-400">
                                        High retention subtitles and motion graphics.
                                    </p>
                                </div>
                            </div>

                            {/* Short Video 2 */}
                            <div className="group bg-black border border-white/10 rounded-2xl overflow-hidden max-w-sm mx-auto w-full hover:border-purple-500/50 transition-colors">
                                <div className="aspect-[9/16] w-full bg-gray-900 relative">
                                    <iframe 
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/gslMMfs5SjM"
                                        title="Short Form Edit 2"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-white mb-2">Dynamic Shorts</h4>
                                    <p className="text-sm text-gray-400">
                                        Transitions and SFX that keep viewers hooked.
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};



// --- New Scrollable Review Section ---
const HorizontalReviews = () => {
  const reviews = [
    { name: "Aditya R.", role: "YouTuber", text: "The editing techniques taught here are exactly what big creators use. My retention went up by 40%.", stars: 5 },
    { name: "Sneha P.", role: "Freelancer", text: "I landed my first $500 client within a month of joining. The portfolio building module is gold.", stars: 5 },
    { name: "Rahul K.", role: "Student", text: "I knew nothing about After Effects. Now I'm making 3D camera movements. Best investment ever.", stars: 5 },
    { name: "Vikram S.", role: "Content Creator", text: "The AI tools section saved me hours of work. Krish explains everything so simply.", stars: 4 },
    { name: "Ananya M.", role: "Editor", text: "Support on WhatsApp is super fast. Whenever I got stuck, a mentor helped me out.", stars: 5 },
    { name: "Rohan D.", role: "Agency Owner", text: "Trained my whole team using this course. The workflow optimization is top notch.", stars: 5 },
    { name: "Kartik T.", role: "Vlogger", text: "Finally understood color grading properly. My travel vlogs look cinematic now.", stars: 5 },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#0a0a0a] to-[#050505] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
            <h2 className="text-3xl font-bold text-white">What Students <span className="text-amber-500">Say</span></h2>
            <p className="text-gray-400 mt-2">Swipe to see more results</p>
        </div>
        
        {/* Scroll Container */}
        <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x mandatory scrollbar-hide w-full">
            {reviews.map((review, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[320px] bg-white/5 border border-white/10 p-6 rounded-2xl snap-center flex-shrink-0 hover:border-purple-500/30 transition-all">
                    <div className="flex items-center gap-1 mb-3 text-amber-400">
                        {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">{review.name}</h4>
                            <p className="text-xs text-gray-500">{review.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <style>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        `}</style>
    </section>
  );
};

const StudentResults = () => {
    const shorts = ["VX3llagtIJw", "xm1IuH-yUD4", "tq94nejz_LI", "o_dd0S6mGV0"];

    return (
        <section id="reviews" className="py-24 px-6 bg-black/40">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-2">Video <span className="text-purple-500">Testimonials</span></h2>
                        <p className="text-gray-400">See what our students are achieving.</p>
                    </div>
                    <a href="https://www.youtube.com/@KrishTheCoder/shorts" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
                        <Youtube className="w-5 h-5 text-red-500" /> Visit Channel
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {shorts.map((id, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-2 overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-2xl">
                            <div className="aspect-[9/16] w-full rounded-xl bg-black relative overflow-hidden">
                                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${id}`} title={`Student Review ${index+1}`} allowFullScreen></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- New Placements Section ---
const Placements = () => (
    <section className="py-20 px-6 border-b border-white/5 bg-black/80">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">Our Students Are Placed At</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                {[
                    { label: "Top YouTube Channels", icon: Youtube },
                    { label: "Creative Agencies", icon: Layers },
                    { label: "Production Houses", icon: Video },
                    { label: "Freelance Market", icon: Briefcase }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center gap-3 p-6 border border-white/5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                        <item.icon className="w-8 h-8 text-gray-400" />
                        <span className="font-bold text-gray-300 text-sm">{item.label}</span>
                    </div>
                ))}
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-gray-600 font-mono">
                <span>#ThumbnailDesigners</span> • <span>#VideoEditors</span> • <span>#VFXArtists</span> • <span>#ReelEditors</span>
            </div>
        </div>
    </section>
);

const Curriculum = () => (
    <section id="curriculum" className="py-24 px-6 bg-[#080808] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">The Path To <span className="text-purple-500">Pro</span></h2>
            
            <div className="relative">
                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-amber-500 to-purple-900 opacity-30 md:-translate-x-1/2"></div>

                {[
                    { title: "Basics & Fundamentals", desc: "Understanding UI, Cuts, Timeline, and Basic Audio Syncing.", color: "text-purple-400", dot: "bg-purple-500" },
                    { title: "Advanced Storytelling", desc: "Pacing, J-Cuts, L-Cuts, Sound Design, and keeping retention.", color: "text-amber-400", dot: "bg-amber-500" },
                    { title: "Motion & VFX", desc: "Keyframes, Masking, Tracking, and Green Screen removal.", color: "text-purple-400", dot: "bg-purple-500" },
                    { title: "Portfolio & Clients", desc: "Building a showreel, outreach scripts, and getting paid.", color: "text-amber-400", dot: "bg-amber-500" }
                ].map((item, i) => (
                    <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                        {/* Content Box */}
                        <div className={`md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all">
                                <h3 className={`text-xl font-bold mb-2 ${item.color}`}>{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        </div>
                        
                        {/* Center Dot */}
                        <div className={`absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 ${item.dot} rounded-full shadow-[0_0_15px_currentColor]`}></div>
                        
                        {/* Empty Space for alignment */}
                        <div className="md:w-[45%]"></div>
                    </div>
                ))}
            </div>
            
             <div className="text-center mt-12">
                 <button onClick={() => openWhatsApp("Send me the full syllabus PDF")} className="text-gray-400 hover:text-white underline underline-offset-4 text-sm transition-colors">
                    Request Detailed Syllabus
                </button>
            </div>
        </div>
    </section>
);

// --- New Certificate Section ---
const CertificateSection = () => (
    <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get <span className="text-amber-500">Certified</span></h2>
            <p className="text-gray-400 mb-12">Showcase your skills on LinkedIn and your Resume with our verified certificate.</p>
            
            <div className="relative group mx-auto max-w-3xl transform hover:scale-[1.01] transition-transform duration-500">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
                
                {/* Certificate Card */}
                <div className="relative bg-[#1a1a1a] border border-white/10 p-8 md:p-12 rounded-xl aspect-[1.4/1] md:aspect-[1.8/1] flex flex-col items-center justify-center overflow-hidden shadow-2xl">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-8 opacity-90">
                            <img src="png editona.png" alt="Logo" className="w-10 h-10 object-contain" />
                            <span className="font-bold text-xl tracking-widest text-white uppercase">EDITONA</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl font-serif text-amber-500 mb-4 tracking-wider">CERTIFICATE OF COMPLETION</h3>
                        <p className="text-gray-500 text-xs md:text-sm tracking-[0.2em] uppercase mb-8">This is to certify that</p>
                        
                        <div className="text-3xl md:text-5xl font-handwriting text-white mb-8 border-b border-gray-600 pb-4 px-12 min-w-[300px] text-center italic" style={{ fontFamily: 'serif' }}>
                            Your Name Here
                        </div>
                        
                        <p className="text-gray-400 text-xs md:text-sm max-w-lg leading-relaxed mb-8">
                            Has successfully completed the comprehensive training in <b>Advanced Video Editing</b> and <b>Motion Graphics</b>.
                        </p>
                        
                        <div className="flex w-full justify-between items-end px-4 md:px-16 mt-4">
                            <div className="text-center">
                                <div className="h-px w-24 bg-gray-600 mb-2"></div>
                                <p className="text-[10px] text-gray-500 uppercase">Date</p>
                            </div>
                            <Award className="w-12 h-12 text-amber-500 opacity-80" />
                            <div className="text-center">
                                <div className="h-px w-24 bg-gray-600 mb-2"></div>
                                <p className="text-[10px] text-gray-500 uppercase">Signature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="py-24 px-6 relative z-10">
        <div className="max-w-md mx-auto">
            <div className="relative group">
                {/* Glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-500 rounded-[20px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                
                <div className="relative bg-[#111] border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                    <div className="text-center mb-8">
                        <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                            Limited Time Offer
                        </span>
                        <div className="flex items-end justify-center gap-3">
                            <span className="text-gray-500 text-xl line-through decoration-red-500/50 decoration-2">₹4,999</span>
                            <span className="text-5xl font-bold text-white tracking-tight">₹1,999</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-3">One-time payment. Lifetime access.</p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                        {['Full Video Editing Course', 'Graphic Design Basics', 'AI Tools & Resources', 'WhatsApp Mentor Support', 'Certificate of Completion'].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                                <div className="mt-0.5 p-0.5 rounded-full bg-green-500/20 text-green-400">
                                    <Check className="w-3 h-3" />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>
                    
                    <button 
                        onClick={() => openWhatsApp("I am ready to enroll for Rs. 1999/-")} 
                        className="w-full py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-bold shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        Enroll on WhatsApp <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-xs text-gray-600 mt-4">Secure enrollment via verified business chat.</p>
                </div>
            </div>
        </div>
    </section>
);

const Background3D = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.05);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const p1 = new THREE.PointLight(0x7c3aed, 2, 50);
        p1.position.set(2, 3, 4);
        scene.add(p1);

        const p2 = new THREE.PointLight(0xf59e0b, 2, 50);
        p2.position.set(-2, -3, 2);
        scene.add(p2);

        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.MeshPhysicalMaterial({
            color: 0x222222,
            metalness: 0.1,
            roughness: 0.2,
            transmission: 0.5,
            transparent: true,
            opacity: 0.8,
            wireframe: true
        });

        const shapes: any[] = [];
        for (let i = 0; i < 20; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10 - 2);
            const scale = Math.random() * 0.5 + 0.2;
            mesh.scale.set(scale, scale, scale);
            scene.add(mesh);
            shapes.push({ mesh, rx: (Math.random() - 0.5) * 0.005, ry: (Math.random() - 0.5) * 0.005 });
        }

        const animate = () => {
            requestAnimationFrame(animate);
            const scrollY = window.scrollY;
            camera.position.y = -(scrollY * 0.002);
            
            shapes.forEach(s => {
                s.mesh.rotation.x += s.rx;
                s.mesh.rotation.y += s.ry;
            });
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none opacity-60"></div>;
};

const App: React.FC = () => {
  return (
    <div className="font-sans text-white bg-[#050505] min-h-screen selection:bg-purple-500 selection:text-white">
      
      {/* 3D Background */}
      <Background3D />
      
      {/* App Content */}
      <div className="relative z-10">
          <Navbar />
          <Hero />
          <WhatYouLearn />
          <VideoShowcase />
          
          {/* New Reviews & Placements */}
          <StudentResults />
          <HorizontalReviews />
          <Placements />
          
          <Curriculum />
          
          {/* New Certificate */}
          <CertificateSection />
          
          <Pricing />
          
          {/* Final CTA */}
          <section className="py-32 text-center px-6">
             <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Confused?</h2>
                <p className="text-xl text-gray-400 mb-10">Let's have a friendly chat. No bots, real mentors.</p>
                <button 
                    onClick={() => openWhatsApp("Hi, I am confused about the course.")} 
                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:scale-105"
                >
                    <MessageCircle className="w-6 h-6" /> Talk to Us on WhatsApp
                </button>
             </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/5 py-12 bg-black text-center">
             <div className="max-w-7xl mx-auto px-6">
                 <div className="flex items-center justify-center gap-2 mb-6">
                    <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
                    <span className="font-bold text-xl tracking-tight">EDITONA</span>
                 </div>
                 <p className="text-gray-500 text-sm mb-6">© 2025-2026 Editona. All rights reserved.</p>
                 <a href="https://www.youtube.com/@KrishTheCoder/shorts" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                     <Youtube className="w-4 h-4" /> Follow on YouTube
                 </a>
             </div>
          </footer>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => openWhatsApp("Hi Editona!")} 
          className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#050505] animate-bounce">
              1
            </div>
        </button>
      </div>
    </div>
  );
};

export default App;
