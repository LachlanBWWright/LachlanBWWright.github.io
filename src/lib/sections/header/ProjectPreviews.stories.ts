import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from 'storybook/test';
import ProjectPreviews from './ProjectPreviews.svelte';

const meta = {
  title: 'Portfolio/Project previews',
  component: ProjectPreviews,
} satisfies Meta<typeof ProjectPreviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: 'iphone12', isRotated: false } },
};

export const NavigateProjects: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const next = canvas.getByRole('button', { name: 'Next project' });
    const previous = canvas.getByRole('button', { name: 'Previous project' });

    await userEvent.click(next);
    await expect(canvas.getByRole('heading', { name: 'Resource Fork Parser' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Show Resource Fork Parser' })).toHaveAttribute('aria-pressed', 'true');

    await userEvent.click(canvas.getByRole('button', { name: 'Show Android game ports' }));
    await expect(canvas.getByRole('heading', { name: 'Android game ports' })).toBeVisible();

    await userEvent.click(next);
    await userEvent.click(next);
    await expect(canvas.getByRole('heading', { name: 'Pangea Resource Edit' })).toBeVisible();

    await userEvent.click(previous);
    await expect(canvas.getByRole('heading', { name: 'Reckless Drivin’' })).toBeVisible();
    await userEvent.click(next);
  },
};
