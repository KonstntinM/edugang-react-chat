'use client'

import { JSXElementConstructor, PromiseLikeOfReactNode,ReactElement, ReactNode, ReactPortal } from "react";

export default function Box (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) {
  
  return (
    <div className="block w-full max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow">
     {props.children}
    </div>
  );
}
