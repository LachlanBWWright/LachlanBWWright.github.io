import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from 'storybook/test';
import Header from './Header.svelte';

const meta = {
  title: 'Portfolio/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole('link', { name: 'View resume' })).toHaveAttribute('href', '#resume');
  },
};

export const Mobile: Story = {
  globals: { viewport: { value: 'iphone12', isRotated: false } },
};
