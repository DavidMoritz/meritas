// components/Toaster/Toaster.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import { getRandomValueFromArray } from '@/utils/get-random-value-from-array/get-random-value-from-array';

import Button from '../Button/Button';
import ButtonRow from '../ButtonRow/ButtonRow';
import Section from '../Grid/Section';

import Toaster from './Toaster';
import { useToaster } from './useToaster';

const meta: Meta<typeof Toaster> = {
  title: 'Modals/Toaster',
  component: Toaster,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = () => {
  const toaster = useToaster();

  const popToast = () => {
    toaster.pop({
      message: 'Example Toast',
      type: getRandomValueFromArray(['warning', 'error', 'info', 'success']),
    });
  };

  return (
    <Section grow>
      <ButtonRow>
        <Button onClick={popToast}>Show Toast</Button>
      </ButtonRow>
    </Section>
  );
};
Default.args = {};
