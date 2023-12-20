'use client'

import { JSXElementConstructor, PromiseLikeOfReactNode,ReactElement, ReactNode, ReactPortal } from "react";

export default function TitleHighlight (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, color: "green" | "red" | "blue" | "yellow" }) {
  
  let colorString = "to-blue-500 from-sky-400"

  switch(props.color) {
    case "green":
      colorString = "to-green-500 from-emerald-400"
      break
    case "red":
      colorString = "to-red-500 from-orange-400"
      break
    case "yellow":
      colorString = "to-yellow-500 from-orange-300"
      break
  }

  return (
    <span className={"text-transparent bg-clip-text bg-gradient-to-r " + colorString}>
      {props.children}
    </span>
  );
}
