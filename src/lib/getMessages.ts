'use client'

import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

import { database } from "./firebase";
import { Message } from './message.type'


export default function useGetMessages () {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const query = ref(database, "messages");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const tempMessages = [];

        for (const message in data) {
          tempMessages.push(data[message])
        }
        
        setMessages(tempMessages)
      }
    });
  }, []);

  useEffect(() => {
    const messagesContainer = document.getElementById('chat-container');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages])
  
  return messages;
}