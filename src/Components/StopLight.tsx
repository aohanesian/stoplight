import { useEffect, useState } from "react";

type StopLightState = "stop" | "slow" | "go";

const STOP_DELAY = 3000;
const SLOW_DELAY = 2000;
const GO_DELAY = 5000;

export function StopLight({ initialState }: { initialState?: StopLightState }) {
  const [state, setState] = useState<StopLightState>(initialState ?? "stop");

  function getStopLightClass(light: StopLightState): string {
    return `light ${light}` + (state === light ? " on" : "");
  }

  useEffect(() => {
    let intervalId: number;
    let nextStopLightState: StopLightState;

    switch (state) {
      case "stop":
        nextStopLightState = "go";
        intervalId = setTimeout(() => setState(nextStopLightState), STOP_DELAY);
        break;
      case "slow":
        nextStopLightState = "stop";
        intervalId = setTimeout(() => setState(nextStopLightState), SLOW_DELAY);
        break;
      case "go":
        nextStopLightState = "slow";
        intervalId = setTimeout(() => setState(nextStopLightState), GO_DELAY);
        break;
      default:
        break;
    }
    
    return () => {
      clearTimeout(intervalId);
    };
  }, [state]);



  return (
    <>
      <div className="stop-light">
        <div className={getStopLightClass("stop")}></div>
        <div className={getStopLightClass("slow")}></div>
        <div className={getStopLightClass("go")}></div>
      </div>
    </>
  );
}
