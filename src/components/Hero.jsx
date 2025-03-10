function Hero() {
  const technologies = [
    {
      title: "Core Technologies",
      skills: ["HTML5", "CSS3", "JavaScript(ES6+)"],
    },
    {
      title: "Frameworks",
      skills: ["React", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Additional Skills",
      skills: [
        "Responsive Web Design",
        "RESTful API Integration",
        "Mobile-First Development",
        "Web Performance Optimization",
        "Cross-browser Compatibility",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      {/* Skills Section */}
      <div className="space-y-8">
        {technologies.map((tech, index) => (
          <div id="my skills" key={index} className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-4">
              {tech.title}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {tech.skills.map((skill, index) => (
                <li
                  key={index}
                  className="border border-gray-600 px-6 py-3 rounded-full text-center hover:bg-gray-800/50 transition-colors duration-300 backdrop-blur-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          Projects
        </h2>

        <div id="projects" className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 inline-block border-b-4 border-blue-500 pb-2">
              Featured Projects
            </h3>

            <div className="bg-gray-900/50 p-8 rounded-2xl space-y-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h4 className="text-2xl font-bold text-yellow-500">
                  Megacashbox
                  <span className="text-gray-400 text-lg ml-2">- Frontend Development</span>
                </h4>
                <span className="px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-full text-sm">
                  Frontend Engineer • 2 weeks
                </span>
              </div>

              <div className="bg-black/20 p-6 rounded-xl">
                <h5 className="text-yellow-500 font-semibold text-xl mb-3">Project Overview</h5>
                <p className="text-gray-300 leading-relaxed">
                  Led the frontend development of Megacashbox, a betting platform.
                  Responsible for implementing responsive user interfaces and
                  ensuring seamless user experience across all devices.
                </p>
              </div>

              <a
                className="inline-block px-6 py-3 bg-amber-500/10 text-amber-500 rounded-full hover:bg-amber-500/20 transition-colors duration-300"
                href="https://www.megacashluckybox.com/"
                target="_blank"
                rel="noopener noreferrer">
                Visit MegaCashBox.com →
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 inline-block border-b-4 border-blue-500 pb-2">
              Personal Projects
            </h3>

            <div className="bg-gray-900/50 p-8 rounded-2xl space-y-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h4 className="text-2xl font-bold text-yellow-500">
                  World Wise
                  <span className="text-gray-400 text-lg ml-2">- Frontend Development</span>
                </h4>
                <span className="px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-full text-sm">
                  2 weeks
                </span>
              </div>

              <div className="bg-black/20 p-6 rounded-xl">
                <h5 className="text-yellow-500 font-semibold text-xl mb-3">Project Overview</h5>
                <p className="text-gray-300 leading-relaxed">
                  A website that adds cities a client has travelled to across the world 
                  and includes other details the client has found interesting along the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
