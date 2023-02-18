import React from 'react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const ValidTrue = Template.bind({});
ValidTrue.args = {
  handleChange: null,
  isValid: true,
  placeholder: 'Write some text',
};

export const ValidFalse = Template.bind({});
ValidFalse.args = {
  handleChange: null,
  isValid: false,
  placeholder: 'Write some text',
};
