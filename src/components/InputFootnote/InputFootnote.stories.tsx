// components/InputFootnote/InputFootnote.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import Section from '../Grid/Section';

import InputFootnote, { type InputFootnoteProps } from './InputFootnote';

const meta: Meta<typeof InputFootnote> = {
  title: 'Input/Footnote',
  component: InputFootnote,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputFootnote>;

export const Default: Story = (args: InputFootnoteProps) => {
  return (
    <Section justify="center">
      <InputFootnote {...args} />
    </Section>
  );
};
Default.args = {
  children: 'This is footnote text.',
};
