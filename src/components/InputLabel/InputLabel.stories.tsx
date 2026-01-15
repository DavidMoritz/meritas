// components/InputLabel/InputLabel.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import Section from '../Grid/Section';

import InputLabel, { type InputLabelProps } from './InputLabel';

const meta: Meta<typeof InputLabel> = {
  title: 'Input/Label',
  component: InputLabel,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = (args: InputLabelProps) => (
  <Section justify="center" spacing="md">
    <InputLabel {...args} />
  </Section>
);
Default.args = {
  children: 'This is a form input label',
  required: true,
  srOnlyLabel: false,
  moreInfo: 'More Info',
  for: 'nothing-id',
};
