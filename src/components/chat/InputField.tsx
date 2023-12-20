'use client'

import * as React from 'react';
import { useState } from 'react';

type InputFieldProps = {
  onSend: (text: string) => void,
  platzhalter: string,
  buttonColor?: "red" | "yellow" | "blue" | "green"
}

export default function InputField(props: InputFieldProps) {
  const [message, setMessage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleSend = () => {
    props.onSend(message);
    setMessage("")
  }

  let buttonColorClasses = "bg-blue-700 hover:bg-blue-800";

  switch (props.buttonColor) {
    case("green"):
      buttonColorClasses = "bg-green-600 hover:bg-green-700"
      break
    case("red"):
      buttonColorClasses = "bg-red-500 hover:bg-red-600"
      break
    case ("yellow"):
      buttonColorClasses = "bg-yellow-800 hover:bg-yellow-900"
  }

  return (
    <div className="relative">
        <input onChange={handleChange} value={message} id="text-input" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder={props.platzhalter} required></input>
        <button onClick={handleSend} className={"text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 " + buttonColorClasses }>Senden</button>
    </div>
  );
}
