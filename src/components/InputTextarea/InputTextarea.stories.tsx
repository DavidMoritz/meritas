// components/InputTextarea/InputTextarea.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import DebugOutput from '../DebugOutput/DebugOutput';
import Section from '../Grid/Section';

import InputTextarea, { type InputTextareaProps } from './InputTextarea';

const meta: Meta<typeof InputTextarea> = {
  title: 'Input/Textarea',
  component: InputTextarea,
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

type Story = StoryObj<typeof InputTextarea>;

export const Default: Story = (args: InputTextareaProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Section justify="center">
      <InputTextarea
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
  label: 'Textarea Label',
  placeholder: 'Write a long story here',
  footnote: 'You can expand the textarea on the y-axis',
  required: false,
  invalid: false,
  invalidMessage: 'This input is required',
  theme: 'default',
  readonly: false,
  disabled: false,
  srOnlyLabel: false,
  maxLength: 5000,
};
