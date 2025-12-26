import { useEffect, useState } from "react";
import HangingBalls from "../../component/content/HangingBubles/light";
import Lottie from "lottie-react";
import megaphone from "../../lib/animation/Megaphone.json";

function HomePage() {
  const [lightsOn, setLightsOn] = useState(false);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (lightsOn) {
      const audio = new Audio("/music/jingle-bells.mp3");
      audio.play();
    }
  }, [lightsOn]);

  useEffect(() => {
    const targetDate = new Date(
      `Jan 1, ${new Date().getFullYear() + 1} 00:00:00`
    );
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown("Happy New Year!");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${hours.toString().padStart(2, "0")} : ${minutes
          .toString()
          .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen mx-auto">
      <div className="w-full">
        <HangingBalls on={lightsOn} setOn={setLightsOn} />
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {lightsOn ? (
          <>
            <h2
              className={`text-white
          } px-3 items-center text-4xl lg:text-5xl tangerine-bold tracking-wider`}
            >
              Belated Merry Christmas & <br className="block sm:hidden" />
              Advance Happy New Year
            </h2>
            <p
              className={` text-green-500
          } tangerine-regular text-2xl sm:text-4xl py-4 px-2 tracking-wide sm:tracking-normal items-center flex justify-center`}
            >
              May this Christmas bring warmth to your heart and the New Year
              open doors to endless opportunities.
            </p>
            <p className="text-yellow-600 text-4xl md:text-6xl font-bold">
              {countdown}
            </p>
          </>
        ) : (
          <div className="flex items-center justify-between gap-4 px-3">
            <Lottie
              animationData={megaphone}
              loop={true}
              autoplay={true}
              className="w-28"
            />
            <p className="text-white text-2xl md:text-3xl">
              Brighten the room - the New Year waits for no one!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default HomePage;
