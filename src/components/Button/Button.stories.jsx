import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Enable = Template.bind({});
Enable.args = {
  label: 'Button',
  disabled: false,
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'Button',
  disabled: true,
};
