function Hero() {
  const technologies = [
    // {coreTechnologies:[]}
    {
      title: "core Technologies",
      skills: ["HTML5", "CSS3", "JavaScript(ES6+)"],
    },
    {
      title: "FrameWorks",
      skills: ["React", "Tailwind CSS", "  Bootstrap"],
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
    <div className="p-2">
      <div>
        {technologies.map((tech, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-[#fc1a0e]">{tech.title}</h2>
            <ul className="grid grid-cols-2 md:flex ">
              {tech.skills.map((skill, index) => (
                <li
                  key={index}
                  className="border-2 px-4 py-2 text-center rounded-3xl m-1 justify-center">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#fc1a0e] ">Projects</h2>

        <div>
          <h3 className="text-2xl font-semibold p-1 underline decoration-4 decoration-dashed italic text-[#00ff]">
            Feartured Projects
          </h3>

          <ul>
            <h4 className="px-2 py-2">
              <span className="text-yellow-500 font-semibold text-xl">
                Megacashbox
              </span>
              - Frontend Development
            </h4>

            <li className="px-2 py-2">
              <span className="text-yellow-500 font-semibold text-xl">
                Role:
              </span>{" "}
              Frontend Engineer
            </li>
            <li className="px-2 py-2">
              <span className="text-yellow-500 font-semibold text-xl">
                Duration:
              </span>{" "}
              2 weeks
            </li>
            <li className="border-2 rounded-2xl p-4">
              <span className="text-yellow-500 font-semibold text-xl block">
                Project Overview:
              </span>
              Led the frontend development of Megacashbox, a betting platform.
              Responsible for implementing responsive user interfaces and
              ensuring seamless user experience across all devices.
            </li>

            <a className="block py-2 px-5"
              href="https://www.megacashluckybox.com/"
              target="blank">
              MegaCashBox.com &rarr; 🕸
            </a>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold p-1 underline decoration-4 decoration-dashed italic text-[#00ff]">Personal Projects</h3>

          <ul>
            <h4><span className="text-yellow-500 font-semibold text-xl">world Wise -</span> Frontend Development </h4>

            <li>
              <span className="text-yellow-500 font-semibold text-xl">Duration:</span> 2 weeks
            </li>
            <li className="border-2 rounded-2xl p-4">
              <span className="text-yellow-500 font-semibold text-xl block">Project Overview:</span>A website that add cities a client
              has travelled to across the world and includes other details the
              client has found interesting along the journey.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
