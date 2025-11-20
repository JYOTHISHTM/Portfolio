import { Mail, Phone, Linkedin, Download } from 'lucide-react';
import Profile from '../assets/Profile.jpg'
import { useEffect, useState } from "react";


export default function Hero() {
  const titles = ["React", "Frontend", "Backend", "Full-Stack"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);


  const EMAIL = "jothishtm2002@gmail.com";
  const PHONE = "8590020234";

  const [showEmail, setShowEmail] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [showPhone, setShowPhone] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleShow = (
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setShow(true);
    setTimeout(() => setShow(false), 1500); // Auto close in 1 sec
  };

  const handleCopy = async (
    text: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-12"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
            <div className="space-y-4">


              <div className="inline-flex items-center gap-1">
                <span className="text-sm font-semibold tracking-wider text-slate-800 uppercase">
                  {titles[index]}
                </span>

                <span className="text-sm font-semibold tracking-wider text-slate-600 uppercase">
                  Developer
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">

                <span className="relative inline-block">
                  <span className="relative z-10">JYOTHISH T M</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-cyan-300 -z-0"></span>
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Full Stack MERN Developer with 1+ years of experience building clean UIs and robust backend systems.
                I focus on scalable code, smooth performance, and creating modern digital experiences that make an impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 
             font-medium hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
                href="/resume.pdf"
                download
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>


              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 font-medium border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                View Projects
              </a>
            </div>






            <div className="flex items-center gap-6 pt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jyothish-t-m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 transition"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <div className="space-y-4">
                {/* EMAIL */}
                <div className="relative inline-block">
                  <div
                    className="flex items-center space-x-2 cursor-pointer select-none"
                    onClick={() => handleShow(setShowEmail)}
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Email</span>
                  </div>

                  {showEmail && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white-700 text-black rounded px-3 py-2 shadow-xl whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <a>
                          {EMAIL}
                        </a>

                        {!copiedEmail ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopy(EMAIL, setCopiedEmail);
                            }}
                            className="ml-2 px-2 py-1 bg-black rounded text-white text-xs"
                          >
                            Copy
                          </button>
                        ) : (
                          <span className="ml-2 text-green-400 text-xs font-semibold">
                            Copied!
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* PHONE */}
                <div className="relative inline-block">
                  <div
                    className="flex items-center space-x-5 cursor-pointer select-none"
                    onClick={() => handleShow(setShowPhone)}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Phone</span>
                  </div>

                  {showPhone && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white-700 text-black rounded px-3 py-2 shadow-xl whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <a>
                          {PHONE}
                        </a>

                        {!copiedPhone ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopy(PHONE, setCopiedPhone);
                            }}
                            className="ml-2 px-2 py-1 bg-black rounded text-white text-xs"
                          >
                            Copy
                          </button>
                        ) : (
                          <span className="ml-2 text-green-400 text-xs font-semibold">
                            Copied!
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>


          </div>

          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-2xl blur-2xl opacity-40"></div>

              <div className="relative w-[300px] h-[380px] md:w-[350px] md:h-[450px]">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">

                  <img
                    src={Profile}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}