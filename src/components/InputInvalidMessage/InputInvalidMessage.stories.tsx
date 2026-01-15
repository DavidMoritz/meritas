// components/InputInvalidMessage/InputInvalidMessage.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import InputInvalidMessage, {
  type InputInvalidMessageProps,
} from './InputInvalidMessage';

const meta: Meta<typeof InputInvalidMessage> = {
  title: 'Input/InvalidMessage',
  component: InputInvalidMessage,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputInvalidMessage>;

export const Default: Story = (args: InputInvalidMessageProps) => (
  <InputInvalidMessage {...args} />
);
Default.args = {
  message: 'This input is invalid.',
};
