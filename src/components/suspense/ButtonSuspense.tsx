import React, { FC, useLayoutEffect, useState } from "react";
import { ButtonProps } from "../Button";

const numbers: number[] = Array(100000).fill(0).map((n, i) => i);
console.log(numbers)
export const ButtonSuspense: FC<ButtonProps> = (props) => {
  const { label } = props;
  const [data, setData] = useState<number[]>(numbers);
  useLayoutEffect(() => {
    setTimeout(() => {
      console.log("=========")
      numbers.sort((a, b) => b - a);
      console.log(numbers);
      setData([...numbers]);
    }, 2000)
  }, [])

  return (
    <>
      {data.map((n, i) => <div key={i} style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>{n}</div>)}
      <button>
        {label} {data}
      </button>
    </>
  );
};
