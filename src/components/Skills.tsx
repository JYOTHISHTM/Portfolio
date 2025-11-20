export default function SkillsAndExperience() {
  const skills = [
    "JavaScript", "Node.js", "MongoDB", "React", "Tailwind CSS", "Git",
    "VS Code", "Figma", "Vercel", "Netlify", "AWS",
    "HTML", "CSS", "TypeScript", "PostgreSQL", "Express.js", "Bootstrap",
  ];

  return (
    <section className="py-20 bg-white text-black font-[Inter]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* ========================= */}
        {/*        LEFT — SKILLS      */}
        {/* ========================= */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
          <p className="text-xs text-neutral-500 mt-2 tracking-wide">
            Tools & technologies I use
          </p>
          <div className="w-12 h-[1.5px] bg-black mt-3 mb-8"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group border border-black rounded-md px-3 py-2 
                           text-center text-LG font-medium 
                           shadow-[1.5px_1.5px_0px_#000]
                           transition-all duration-200
                           hover:shadow-[3px_3px_0px_#000]
                           hover:-translate-x-[2px] hover:-translate-y-[2px]
                           hover:bg-black hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/*      RIGHT — EXPERIENCE   */}
        {/* ========================= */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
          <p className="text-xs text-white text-neutral-500 mt-2 tracking-wide">
            Tools & technologies I use
          </p>
          <div className="w-12 h-[1.5px] bg-black mt-3 mb-8"></div>

          <div
            className="border border-black rounded-xl p-6 
                       shadow-[2px_2px_0px_#000]
                       hover:shadow-[4px_4px_0px_#000]
                       hover:-translate-x-[2px] hover:-translate-y-[2px]
                       transition-all duration-200"
          >
            <h3 className="text-2xl font-semibold tracking-tight">
              React Developer
            </h3>

            <p className="text-neutral-600 text-[15px] mt-1">
              Packapeer Academy • 1+ Years
            </p>

            <ul className="mt-4 text-[16px] text-neutral-800 space-y-2 leading-relaxed">
              <li>• Developed production-level React applications.</li>
              <li>• Worked on UI/UX, API integrations & component architecture.</li>
              <li>• Improved performance and code quality in real projects.</li>
              <li>• Collaborated with mentors & teams in an agile workflow.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
