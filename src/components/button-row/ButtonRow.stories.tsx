// ButtonRow.stories.ts

import type { Meta } from '@storybook/react';

import Column from '@/components/Grid/Column.tsx';
import Row from '@/components/Grid/Row.tsx';
import Section from '@/components/Grid/Section';

import Button from '../Button/Button';

// import { BUTTON_WIDTHS } from "../Button/Button.types";
import ButtonRow, { type ButtonRowProps } from './ButtonRow';

const meta: Meta<typeof ButtonRow> = {
  title: 'Layout/ButtonRow',
  component: ButtonRow,
  argTypes: {
    // width: {
    // 	control: { type: "select" },
    // 	options: BUTTON_WIDTHS,
    // },
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
};
export default meta;

// type Story = StoryObj<typeof ButtonRow>;

export const Default = (args: ButtonRowProps) => (
  <>
    <Section justify="center">
      <h3>Default Button Row behavior.</h3>
      <ButtonRow {...args}>
        <Button
          onClick={() => {
            /* Empty handler for story demo */
          }}
        >
          Button A
        </Button>
        <Button
          onClick={() => {
            /* Empty handler for story demo */
          }}
        >
          Button B
        </Button>
        <Button
          onClick={() => {
            /* Empty handler for story demo */
          }}
        >
          Button C
        </Button>
      </ButtonRow>
    </Section>

    <Section justify="center">
      <h3>Buttons are full width on Mobile.</h3>
      <Row>
        <Column xs="2">
          <ButtonRow>
            <Button
              onClick={() => {
                /* Empty handler for story demo */
              }}
            >
              Button A
            </Button>
            <Button
              onClick={() => {
                /* Empty handler for story demo */
              }}
            >
              Button B
            </Button>
          </ButtonRow>
        </Column>
      </Row>
    </Section>
  </>
);
Default.args = {
  id: 'btn-group-a',
  align: 'left',
};
