// components/InputRadioPillGroup/InputRadioPillGroup.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import DebugOutput from '../DebugOutput/DebugOutput';
import Section from '../Grid/Section';

import InputRadio, { type InputRadioProps } from './InputRadio';
import InputRadioGroup, { type InputRadioGroupProps } from './InputRadioGroup';

const meta: Meta<typeof InputRadioGroup> = {
  title: 'Input/RadioGroup',
  component: InputRadioGroup,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    options: {
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

type Story = StoryObj<typeof InputRadioGroup>;

export const Default: Story = (args: InputRadioGroupProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Section justify="center">
      <InputRadioGroup
        {...args}
        onChange={v => setInputValue(v.currentTarget.value)}
        value={inputValue}
      />
      <DebugOutput>value: {inputValue}</DebugOutput>
    </Section>
  );
};
Default.args = {
  id: 'radio-group-id',
  groupName: 'RadioStoryGroup',
  label: 'Select One',
  options: [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ],
};

// export const Inline = Template.bind({});
// Inline.args = {
// 	id: "radio-group-id",
// 	groupName: "RadioStoryGroup",
// 	options: [
// 		{ label: "Open", value: "open" },
// 		{ label: "Closed", value: "closed" },
// 	],
// 	inline: true,
// };

export const SingleRadio = (args: InputRadioProps) => {
  return (
    <Section justify="center">
      <InputRadio {...args} />
    </Section>
  );
};
SingleRadio.args = {
  id: 'radio-id',
  label: 'Radio Label',
  value: 'foo',
  selected: '',
  disabled: false,
  invalid: false,
};
