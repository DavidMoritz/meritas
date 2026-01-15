// components/InputEmail/InputEmail.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import DebugOutput from '../DebugOutput/DebugOutput';
import Section from '../Grid/Section';

import InputEmail, { type InputEmailProps } from './InputEmail';

const meta: Meta<typeof InputEmail> = {
  title: 'Input/Email',
  component: InputEmail,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputEmail>;

export const Default: Story = (args: InputEmailProps) => {
  const [formValue, setFormValue] = useState<string>('');

  return (
    <Section>
      <InputEmail
        {...args}
        onChange={value => setFormValue(value.target.value)}
        value={formValue}
      />

      <DebugOutput>value: {formValue}</DebugOutput>
    </Section>
  );
};
Default.args = {
  id: 'number-input-id',
  label: 'Number Input',
  placeholder: 'Number Input Placeholder Text',
  footnote: '',
  required: false,
  invalid: false,
  error: { type: 'required', message: 'This input is required' },
  theme: 'default',
  readonly: false,
  disabled: false,
  srOnlyLabel: false,
};
