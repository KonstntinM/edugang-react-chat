import { push, ref, serverTimestamp } from "firebase/database";

import { database } from "@/lib/firebase";

export const sendMessage = (text: string, sender: string) => {
  const messagesCollection = ref(database, 'messages');
  push(messagesCollection, {
    sender: sender,
    text: text,
    timestamp: serverTimestamp()
  });
}