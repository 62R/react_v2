import React from 'react';

import { App } from './App';

export default {
  title: 'App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <App {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primal = Template.bind({});
