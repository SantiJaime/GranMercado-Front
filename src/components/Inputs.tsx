import type { ChangeEvent } from "react";

interface RangeProps {
  id: string;
  value: number;
  min: number;
  max: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RangeInput: React.FC<RangeProps> = ({
  id,
  value,
  onChange,
  min,
  max
}) => {
  return (
      <input
        id={id}
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className="w-full rounded-lg bg-gray-300"
      />
  );
};
