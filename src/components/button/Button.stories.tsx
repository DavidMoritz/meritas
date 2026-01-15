// components/Button/Button.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import ButtonRow from '@/components/button-row/ButtonRow';
import Section from '../Grid/Section';

import Button, { type ButtonProps } from './Button';
import { BUTTON_SIZES, BUTTON_THEMES, BUTTON_WIDTHS } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args: ButtonProps) => (
  <Section justify="center">
    <Button {...args} />
  </Section>
);
Default.args = {
  children: 'Button Label',
  theme: 'primary',
  size: 'md',
  width: 'standard',
  disabled: false,
};

export const AllThemes = (args: ButtonProps) => (
  <>
    <Section justify="center">
      <ButtonRow>
        {BUTTON_THEMES.map(theme => {
          return (
            <Button {...args} key={theme} theme={theme}>
              {theme}
            </Button>
          );
        })}
      </ButtonRow>
    </Section>

    <Section justify="center" theme="dark">
      <ButtonRow>
        {BUTTON_THEMES.map(theme => {
          return (
            <Button {...args} key={theme} theme={theme}>
              {theme}
            </Button>
          );
        })}
      </ButtonRow>
    </Section>
  </>
);

export const AllSizes = (args: ButtonProps) => (
  <Section justify="center">
    <ButtonRow>
      {BUTTON_SIZES.map(size => {
        return (
          <Button {...args} key={size} size={size}>
            size: {size}
          </Button>
        );
      })}
    </ButtonRow>
  </Section>
);

export const AllWidths = (args: ButtonProps) => (
  <Section justify="center">
    <ButtonRow>
      {BUTTON_WIDTHS.map(width => {
        return (
          <Button {...args} key={width} width={width}>
            {width}
          </Button>
        );
      })}
    </ButtonRow>
  </Section>
);

export const AllSubTypes = () => {
  return (
    <Section justify="center">
      <ButtonRow>
        <Button
          onClick={() => {
            /* Empty handler for story demo */
          }}
        >
          Button
        </Button>
        <Button.Input value="Button.Input" />
        {/*<Button.Link to={""}>Button.Link</Button.Link>*/}
      </ButtonRow>

      <form>
        <ButtonRow>
          <Button.Submit>Button.Submit</Button.Submit>
          <Button.Reset>Button.Reset</Button.Reset>
        </ButtonRow>
      </form>
    </Section>
  );
};

export const IconButtons = () => {
  return (
    <Section>
      <ButtonRow>
        <Button onClick={() => {}}>
          <Button.Icon icon="caret-left" />
          <span>Icon on the left</span>
        </Button>
        <Button onClick={() => {}}>
          <span>Icon on the right</span>
          <Button.Icon icon="caret-right" />
        </Button>
        <Button onClick={() => {}}>
          <Button.Icon icon="caret-up" />
          Icon on both sides
          <Button.Icon icon="caret-down" />
        </Button>
      </ButtonRow>
    </Section>
  );
};
