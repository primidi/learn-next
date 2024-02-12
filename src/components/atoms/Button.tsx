import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className="w-full py-3 bg-white text-black font-semibold rounded-md"
    >
      {props.children}
    </button>
  );
}
