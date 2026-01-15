// components/InputPhone/InputPhone.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import DebugOutput from '../DebugOutput/DebugOutput';
import Section from '../Grid/Section';

import InputPhone, { type InputPhoneProps } from './InputPhone';

const meta: Meta<typeof InputPhone> = {
  title: 'Input/Phone',
  component: InputPhone,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputPhone>;

export const Default: Story = (args: InputPhoneProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Section>
      <InputPhone {...args} onChange={setInputValue} value={inputValue} />
      <DebugOutput>value: {inputValue}</DebugOutput>
    </Section>
  );
};
Default.args = {};
