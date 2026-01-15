// components/Close/Close.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import Section from '../Grid/Section';

import Close, { type CloseProps } from './Close';

const meta: Meta<typeof Close> = {
  title: 'Components/Close',
  component: Close,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Close>;

export const Default: Story = (args: CloseProps) => (
  <Section justify="center">
    <Close {...args} />
  </Section>
);
Default.args = {
  size: 'md',
  theme: 'default',
};
