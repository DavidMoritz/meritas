// components/Alert/Alert.stories.ts

import type { Meta } from '@storybook/react';
import { useState } from 'react';

import Button from '@/components/Button/Button';
import ButtonRow from '@/components/button-row/ButtonRow';

import Alert, { type AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

// type Story = StoryObj<typeof Alert>;

export const Default = (args: AlertProps) => {
  const [open, setOpen] = useState(true);

  return <Alert {...args} onDismiss={setOpen} open={open} />;
};
Default.args = {
  id: 'alert-id',
  theme: 'info',
  open: true,
  children: (
    <>
      <h4>Alert!</h4>
      <p>This is an example Alert!</p>
      <ul>
        <li>Dismiss the alert with the close button.</li>
        <li>You can add HTML to the body of the alert.</li>
      </ul>
    </>
  ),
};

export const OpenAlert = () => {
  const [openAlert, setOpenAlert] = useState('');

  return (
    <>
      <ButtonRow>
        <Button onClick={() => setOpenAlert('info')} theme="info">
          Info Alert
        </Button>
        <Button onClick={() => setOpenAlert('warning')} theme="warning">
          Warning Alert
        </Button>
        <Button onClick={() => setOpenAlert('danger')} theme="danger">
          Danger Alert
        </Button>
      </ButtonRow>
      <Alert
        onDismiss={() => setOpenAlert('')}
        open={openAlert === 'info'}
        theme="info"
      >
        This is an info Alert.
      </Alert>
      <Alert
        onDismiss={() => setOpenAlert('')}
        open={openAlert === 'warning'}
        theme="warning"
      >
        This is an warning Alert.
      </Alert>
      <Alert
        onDismiss={() => setOpenAlert('')}
        open={openAlert === 'danger'}
        theme="danger"
      >
        This is an danger Alert.
      </Alert>
    </>
  );
};
