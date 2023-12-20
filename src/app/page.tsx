'use client';

import * as React from 'react';

import useGetMessages from '@/lib/getMessages';
import { sendMessage } from '@/lib/sendMessage';

function handleSendMessage(text: string) {
  sendMessage(text, 'Unknown');
}

import Box from '@/components/chat/Box';
import ChatBubble from '@/components/chat/ChatBubble';
import ChatContainer from '@/components/chat/ChatContainer';
import InputField from '@/components/chat/InputField';
import Title from '@/components/title/Title';
import TitleHighlight from '@/components/title/TitleHighlight';

/**
 * Diese Komponenten stehen dir zur Verfügung.
 *
 * <TitleHighlight color='blue'></TitleHighlight>
 * <Box></Box>
 * <ChatContainer></ChatContainer>
 * <ChatBubble from="Unknown" text="Hello World" time={0} />
 * <InputField onSend={handleSendMessage} platzhalter='Gib hier deine Nachricht ein.' buttonColor='blue' />
 * 
 * Diese Code-Bausteine könnt ihr kopieren oder abtippen.
 * 
   const messages = [{
      sender: "Konstantin",
      text: "Guten Morgen!",
      timestamp: 0
    }, {
      sender: "ChatGPT",
      text: "Guten Morgen, Konstantin!",
      timestamp: 0
    }]
*
*
    {
      messages.map((message, index) => {
        return <ChatBubble key={index} from={message.sender} text={message.text} time={message.timestamp} />
      })
    }
 */

export default function HomePage() {

  return (
    <>
      <Title>
        EduGang
      </Title>
    </>
  );
}
