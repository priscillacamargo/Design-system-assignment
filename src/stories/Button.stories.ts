import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/atoms/Button';

const meta = {
    title: 'Example/Button',
    component: Button,

    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        bgColor: 'bg-primary',
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        bgColor: 'bg-secondary',
        label: 'Button',
    },
};
