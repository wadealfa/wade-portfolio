


function FlipCard({isFlipped, setIsFlipped}) {
  
  return (
    


    <div className="w-full h-80 [perspective:1000px]">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden] ">
          <div  style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/image7.png')`,
        }} className="w-full h-full  bg-cover   bg-center bg-no-repeat   rounded-xl shadow-lg  py-32 text-white text-center">
            <h1>Hi there I am Wanjohi Gakuya a Frontend Engineer</h1>
          </div>
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <div className="w-full h-full    bg-cover   bg-center bg-no-repeat   rounded-xl shadow-lg  p-12  text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/image5.png')`,
        }}
        >
            <p className="bg-transparent">
              I&apos;m a Frontend Engineer specializing in creating responsive
              and user-friendly web applications. With a year of professional
              experience, I focus on building clean, efficient, and maintainable
              code using modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
