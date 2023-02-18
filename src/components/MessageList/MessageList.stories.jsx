import React from 'react';
import { MessageList } from './MessageList';

export default {
  title: 'MessaggeList',
  component: MessageList,
};

const Template = (args) => <MessageList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  messageList: [
    {
      author: 'Bot',
      text: 'Wait a massage',
    },
    {
      author: 'Tom',
      text: 'Hi, Bot',
    },
    {
      author: 'Tom',
      text: 'How are you?',
    },
  ],
};
