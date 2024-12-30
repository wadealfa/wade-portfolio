import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";

function Drama() {
  const [isFlipped, setIsFlipped] = useState(true);
  function flipState() {
   setIsFlipped((isFlipped) => !isFlipped);
  }
  useEffect(
    function () {
      const intervalId=setInterval(flipState, 10000);
   return()=> clearInterval(intervalId);
    },
    []
  );
  return (
    <div>
      <FlipCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
    </div>
  );
}

export default Drama;
