import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, waitFor } from 'storybook/test';
import NavbarPreview from './Navbar.story-fixture.svelte';

const meta = {
  title: 'Portfolio/Navbar',
  component: NavbarPreview,
} satisfies Meta<typeof NavbarPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: 'iphone12', isRotated: false } },
};

export const BlueAfterScroll: Story = {
  play: async ({ canvasElement }) => {
    const previewWindow = canvasElement.ownerDocument.defaultView!;
    const navbar = canvasElement.querySelector('nav')!;
    previewWindow.scrollTo({ top: 250, behavior: 'instant' });
    await waitFor(() => expect(previewWindow.getComputedStyle(navbar).backgroundColor).toBe('rgb(29, 78, 216)'));
  },
};
