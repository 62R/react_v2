import React from 'react';
import { Message } from './Message';

export default {
  title: 'Message',
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  author: 'Tom',
  text: 'Some message',
  isOtherAuthor: true,
  isFirstMessage: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  author: 'Tom',
  text: 'Some message',
  isOtherAuthor: false,
  isFirstMessage: false,
};

export const Bot = Template.bind({});
Bot.args = {
  author: 'Bot',
  text: 'Some message',
  isOtherAuthor: true,
  isFirstMessage: false,
};
