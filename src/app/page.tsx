'use client';

import * as React from 'react';

import useGetMessages from '@/lib/getMessages';
import { sendMessage } from '@/lib/sendMessage';

import Box from '@/components/chat/Box';
import ChatBubble from '@/components/chat/ChatBubble';
import ChatContainer from '@/components/chat/ChatContainer';
import InputField from '@/components/chat/InputField';
import Title from '@/components/title/Title';
import TitleHighlight from '@/components/title/TitleHighlight';


export default function HomePage() {

  const messages = useGetMessages();

  const handleSendMessage = (text: string) => {
    sendMessage(text, "Unknown");
  }

  return (
    <>
      <Title>
        Edu<TitleHighlight color="blue">Chat</TitleHighlight>
      </Title>
      <Box>
        <ChatContainer>
          {
            messages.map((message, index) => {
              return <ChatBubble key={index} from={message.sender} text={message.text} time={message.timestamp} />
            })
          }
        </ChatContainer>
        <InputField onSend={handleSendMessage} platzhalter="Yoo, Leibnizkekse! Was geht? ..." buttonColor="blue" />
      </Box>

    </>
  );
}
