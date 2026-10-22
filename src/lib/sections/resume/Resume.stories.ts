import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from 'storybook/test';
import Resume from './Resume.svelte';

const meta = {
  title: 'Portfolio/Resume',
  component: Resume,
} satisfies Meta<typeof Resume>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlwaysVisible: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvasElement.querySelector('details')).not.toBeInTheDocument();
    await expect(canvas.getByRole('img', { name: 'Resume Page 1' })).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'Download resume PDF' })).toHaveAttribute('href', '/Resume.pdf');
  },
};

export const Mobile: Story = {
  globals: { viewport: { value: 'iphone12', isRotated: false } },
};
