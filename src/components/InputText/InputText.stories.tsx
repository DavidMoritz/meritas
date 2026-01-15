// components/InputText/InputText.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import DebugOutput from '../DebugOutput/DebugOutput';
import Section from '../Grid/Section';

import InputText, { type InputTextProps } from './InputText';

const meta: Meta<typeof InputText> = {
  title: 'Input/Text',
  component: InputText,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = (args: InputTextProps) => {
  const [inputValue, setInputValue] = useState<number | string>('');

  return (
    <Section>
      <InputText
        {...args}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <DebugOutput>value: {inputValue}</DebugOutput>
    </Section>
  );
};
Default.args = {
  id: 'component-id',
  label: 'Input Label',
  placeholder: 'Input Placeholder Text',
  type: 'text',
  footnote: 'This is a footnote',
  required: false,
  invalid: false,
  error: { type: 'required', message: 'This input is required' },
  theme: 'default',
  readonly: false,
  disabled: false,
  srOnlyLabel: false,
};
