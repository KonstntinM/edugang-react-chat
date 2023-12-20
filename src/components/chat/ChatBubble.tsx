'use client'

import * as React from 'react';

type ChatBubbleProps = {
  from: string,
  text: string,
  time: number
}

export default function ChatBubble(props: ChatBubbleProps) {
  return (
    <div className="flex items-start gap-2.5">
   <div className="flex flex-col gap-1 min-w-52 max-w-[320px]">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="text-sm font-semibold text-gray-900 dark:text-white">{props.from}</span>
         <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{new Date(props.time).toLocaleTimeString("de-de")}</span>
      </div>
      <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
         <p className="overflow-hidden text-sm text-left font-normal text-gray-900 dark:text-white">{props.text}</p>
      </div>
   </div>
</div>
  );
}
