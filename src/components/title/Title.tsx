'use client'

import { JSXElementConstructor, PromiseLikeOfReactNode,ReactElement, ReactNode, ReactPortal } from "react";

export default function Title (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) {
  
  return (
    <h1 className="mb-4 font-extrabold text-gray-900md:text-5xl text-6xl">
      {props.children}
    </h1>

  );
}
