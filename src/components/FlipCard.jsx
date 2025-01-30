


function FlipCard({isFlipped, setIsFlipped}) {
  console.log(isFlipped)
  return (
    // {/* Perspective container */}
    // <div className="preserve-3d w-64 h-96 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
    //   {/* Card container */}
    //   <div className={`relative w-full h-full duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
    //     {/* Front side */}
    //     <div className="absolute w-full h-full backface-hidden">
    //       <div className="w-full h-full bg-blue-500 rounded-xl shadow-lg p-6 text-white">
    //         <h3 className="text-2xl font-bold mb-4">Front Side</h3>
    //         <p>Click to flip!</p>
    //       </div>
    //     </div>

    //     {/* Back side */}
    //     <div className="absolute w-full h-full backface-hidden rotate-y-180">
    //       <div className="w-full h-full bg-green-500 rounded-xl shadow-lg p-6 text-white">
    //         <h3 className="text-2xl font-bold mb-4">Back Side</h3>
    //         <p>Click to flip back!</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>





    // <div className="preserve-3d w-64  h-80 flex ">
    //   <div onClick={() => setIsFlipped(!isFlipped)}
    //     className={`relative left-1/4 h-full w-full duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""
    //     }`}>
    //     <div className="h-full w-full absolute backface-hidden">
    //       <div className="w-full h-full bg-blue-500 rounded-xl shadow-lg p-6 text-white text-center ">
    //         <h1>Hi there I am Wanjohi Gakuya a Frontend Engineer</h1>
    //       </div>
    //     </div>
    //     <div className="absolute w-full h-full backface-hidden rotate-y-180">
    //       <div className="w-full h-full bg-green-500 rounded-xl shadow-lg p-6 text-white">
    //         <p>
    //           I&apos;m a Frontend Engineer specializing in creating responsive
    //           and user-friendly web applications. With a year of professional
    //           experience, I focus on building clean, efficient, and maintainable
    //           code using modern web technologies.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>





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
