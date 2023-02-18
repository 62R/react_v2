import React from 'react';
import { Textarea } from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

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
