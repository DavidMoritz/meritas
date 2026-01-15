// components/InputToggle/InputToggle.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import DebugOutput from '../DebugOutput/DebugOutput';
import Section from '../Grid/Section';

import InputToggle, { type InputToggleProps } from './InputToggle';

const meta: Meta<typeof InputToggle> = {
  title: 'Input/Toggle',
  component: InputToggle,
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

type Story = StoryObj<typeof InputToggle>;

export const Default: Story = (args: InputToggleProps) => {
  const [inputValue, setInputValue] = useState<boolean>(false);

  return (
    <Section justify="center">
      <InputToggle
        {...args}
        onChange={e => setInputValue(e.target.checked)}
        value={inputValue}
      />
      <DebugOutput>value: {inputValue ? 'true' : 'false'}</DebugOutput>
    </Section>
  );
};
Default.args = {
  id: 'toggle-id',
  label: 'build a snowman?',
};
