'use client'

import { JSXElementConstructor,ReactElement, ReactNode, ReactPortal } from "react";

export default function ChatContainer (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) {
  
  return (
   <div id="chat-container" className='flex flex-col gap-5 pb-10 h-96 overflow-y-auto scroll-smooth'>
      { props.children }
   </div>
  );
}
