import { useEffect, useState } from "react";

type HangingBallsProps = {
  on: boolean;
  setOn: React.Dispatch<React.SetStateAction<boolean>>;
};

function HangingBalls({ on, setOn }: HangingBallsProps) {
  console.log("on:", on);
  const COLORS = ["orange", "red", "green", "blue", "yellow", "purple"];
  const getLampCount = () => {
    if (window.innerWidth < 640) return 27; // sm
    if (window.innerWidth < 768) return 37; // md
    if (window.innerWidth < 1024) return 50; // md
    if (window.innerWidth < 1280) return 63; // md
    if (window.innerWidth > 1280) return 67; // md
  };
  const [lampCount, setLampCount] = useState(getLampCount);
  const [lamps, setLamps] = useState<
    {
      color: string;
      delay: string;
      marginTop: string;
    }[]
  >([]);

  useEffect(() => {
    const handleResize = () => setLampCount(getLampCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const generated = Array.from({ length: lampCount }).map((_, i) => {
      const color = COLORS[i % COLORS.length];
      return {
        color,
        delay: `${Math.floor(Math.random() * 500)}ms`,
        marginTop: `${Math.abs(50 * Math.cos((i * 12.3 * Math.PI) / 180))}px`,
      };
    });
    setLamps(generated);
  }, [lampCount]);

  return (
    <div className="mx-auto w-full gap-20 ">
      <div className="fixed inset-0 overflow-hidden">
        {/* Cable */}
        <svg
          className="fixed top-0 left-0 w-full h-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M -150 0 Q 0 100 170 0" stroke="white" fill="transparent" />
          <path d="M 170 0 Q 300 100 460 0" stroke="white" fill="transparent" />
          <path d="M 460 0 Q 600 100 750 0" stroke="white" fill="transparent" />
          <path
            d="M 750 0 Q 900 100 1050 0"
            stroke="white"
            fill="transparent"
          />
          <path
            d="M 1050 0 Q 1200 100 1340 0"
            stroke="white"
            fill="transparent"
          />
          <path
            d="M 1340 0 Q 1485 90 1640 0"
            stroke="white"
            fill="transparent"
          />
          <path
            d="M 1640 0 Q 1800 100 1910 0"
            stroke="white"
            fill="transparent"
          />
        </svg>

        {/* Lamps */}
        <div className="relative mt-12 flex flex-wrap">
          {lamps.map((lamp, i) => (
            <div
              className="lamp-swing h-5 w-5 rounded-[20px_0_20px]"
              style={{
                animationDelay: lamp.delay,
                marginTop: lamp.marginTop,
                backgroundColor: on ? lamp.color : "#222",
                boxShadow: on ? `0 0 50px 5px ${lamp.color}` : "none",
              }}
            />
          ))}
        </div>
        {/* Switch */}
        <button
          onClick={() => setOn((prev) => !prev)}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 h-10 w-20 rounded-lg bg-green-800 font-bold text-white active:scale-95"
        >
          SWITCH
        </button>
      </div>
    </div>
  );
}

export default HangingBalls;
