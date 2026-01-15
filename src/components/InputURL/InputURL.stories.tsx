// components/InputURL/InputURL.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import DebugOutput from '../DebugOutput/DebugOutput';
import Section from '../Grid/Section';

import InputURL, { type InputURLProps } from './InputURL';

const meta: Meta<typeof InputURL> = {
  title: 'Input/URL',
  component: InputURL,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputURL>;

export const Default: Story = (args: InputURLProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Section>
      <InputURL
        {...args}
        onChange={v => setInputValue(v.target.value)}
        value={inputValue}
      />
      <DebugOutput>value: {inputValue}</DebugOutput>
    </Section>
  );
};
Default.args = {
  label: 'Website URL',
  required: true,
  placeholder: 'HTTP://',
};
