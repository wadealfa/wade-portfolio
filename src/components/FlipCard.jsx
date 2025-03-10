function FlipCard({isFlipped, setIsFlipped}) {
  return (
    <div className="w-full h-96 cursor-pointer">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full h-full"
      >
        <div 
          className={`absolute w-full h-full transition-all duration-500 ${
            isFlipped ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <div style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('/image7.png')`,
          }} className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl flex flex-col justify-center items-center p-8 text-white text-center border border-gray-700 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
            <div className="transform transition-all duration-300 hover:scale-105">
              <h1 className="text-5xl font-bold mb-4 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient">
                Hi, I&apos;m Wanjohi Gakuya
              </h1>
              <p className="text-2xl text-gray-200 font-light">Frontend Engineer</p>
              <div className="mt-8">
                <span className="px-4 py-2 rounded-full border border-gray-500 text-sm hover:bg-white/10 transition-colors hover:border-blue-400">
                  Click to learn more →
                </span>
              </div>
            </div>
          </div>
        </div>
        <div 
          className={`absolute w-full h-full transition-all duration-500 ${
            isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl p-12 text-white flex flex-col justify-center items-center relative overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url('/image5.png')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <p className="text-xl leading-relaxed font-light mb-8 space-y-4">
                I&apos;m a Frontend Engineer specializing in creating responsive
                and user-friendly web applications. With a year of professional
                experience, I focus on building clean, efficient, and maintainable
                code using modern web technologies.
              </p>
              <span className="px-4 py-2 rounded-full border border-gray-500 text-sm hover:bg-white/10 transition-colors hover:border-blue-400">
                ← Back to intro
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlipCard;