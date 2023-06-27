import { Grid, Slider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SeekbarProps {
  value: number;
  min: number;
  max: number;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSeekTime: Dispatch<SetStateAction<number>>;
  appTime: number;
}

const Seekbar = ({
  value,
  min,
  max,
  onInput,
  setSeekTime,
  appTime,
}: SeekbarProps) => {
  const getTime = (time: any) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <>
      {/* <p>{value === 0 ? "0:00" : getTime(value)}</p> */}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
      />
      {/* <p>{max === 0 ? "0:00" : getTime(max)}</p> */}
    </>
  );
};

export default Seekbar;
