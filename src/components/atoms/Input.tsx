import React, { forwardRef } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = forwardRef((props: Props, ref: any) => {
  return (
    <input
      {...props}
      ref={ref}
      className="w-full border border-gray-400 rounded-md p-2 bg-transparent"
    />
  );
});

Input.displayName = "Input";

export default Input;
