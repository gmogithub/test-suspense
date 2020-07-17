import React, { FC } from "react";

const ButtonLazy = React.lazy(() => import("./suspense/ButtonSuspense").then(({ButtonSuspense}) => ({default: ButtonSuspense})));

export interface ButtonProps {
  label: string
}

export const Button: FC<ButtonProps> = (props) => {
  return (<React.Suspense fallback={<div>loading</div>}>
    <ButtonLazy {...props}/>
  </React.Suspense>);
};