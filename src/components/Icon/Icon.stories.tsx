// components/Icon/Icon.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import { ICON_OPTIONS, type IconOption } from '@/components/Icon/Icon.types';

import Section from '../Grid/Section';

import Icon, { type IconProps } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    viewBox: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

const Default: Story = (args: IconProps) => (
  <Section>
    <Icon {...args} />
  </Section>
);
Default.args = {
  icon: 'pulse',
  theme: 'default',
  size: 'md',
  role: 'icon',
};

export const AllIcons: Story = (args: IconProps) => (
  <Section>
    {ICON_OPTIONS.map(item => {
      return (
        <Icon
          icon={item as IconOption}
          key={item}
          size={args.size}
          theme={args.theme}
          title={item}
        />
      );
    })}
  </Section>
);
AllIcons.args = {
  size: 'lg',
  theme: 'default',
};

// export const AllSizes: ComponentStory<typeof Icon> = (args: IconProps) => (
//   <Section>
//     {(getKeys<IconOptions>(Icons) || []).map((item, index) => {
//       return <Icon key={index} icon={item} size={args.size} theme={args.theme} />;
//     })}
//   </Section>
// );
