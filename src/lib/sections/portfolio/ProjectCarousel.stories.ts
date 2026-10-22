import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from 'storybook/test';
import ProjectCarousel from './ProjectCarousel.svelte';

const screenshots = [
  { src: '/portfolio/pangea/Pangea1.png', alt: 'Pangea level map' },
  { src: '/portfolio/pangea/Pangea2.png', alt: 'Pangea object editor' },
  { src: '/portfolio/pangea/Pangea3.png', alt: 'Pangea asset editor' },
];

const meta = {
  title: 'Portfolio/Project carousel',
  component: ProjectCarousel,
  args: { images: screenshots },
} satisfies Meta<typeof ProjectCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: 'iphone12', isRotated: false } },
};

export const PortraitScreenshots: Story = {
  args: {
    images: [
      { src: '/portfolio/timetable/TripLeg.jpg', alt: 'Public transport trip leg' },
      { src: '/portfolio/timetable/StopMap.jpg', alt: 'Public transport stop map' },
    ],
  },
};

export const SingleImage: Story = {
  args: { images: [{ src: '/portfolio/exam/Exam1.png', alt: 'Online examination system' }] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img', { name: 'Online examination system' })).toBeVisible();
    await expect(canvas.queryByRole('button', { name: 'Next slide' })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', { name: 'Previous slide' })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument();
  },
};

export const MixedVideoAndScreenshots: Story = {
  args: {
    images: [
      { src: '/portfolio/cryo/Cryo1.png', alt: 'Cryogenic wiring simulation' },
      {
        iframe: true,
        src: 'https://www.youtube.com/embed/1Q-ZASEpHeI',
        thumb: '/portfolio/cryo/Cryo1.png',
        alt: 'Cryogenic wiring simulation demonstration',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Next slide' }));
    await expect(canvas.getByTitle('Cryogenic wiring simulation demonstration')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Previous slide' }));
    await expect(canvas.queryByTitle('Cryogenic wiring simulation demonstration')).not.toBeInTheDocument();
    await expect(canvas.getByRole('img', { name: 'Cryogenic wiring simulation' })).toBeVisible();
  },
};

export const NavigateScreenshots: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const next = canvas.getByRole('button', { name: 'Next slide' });
    const previous = canvas.getByRole('button', { name: 'Previous slide' });
    await userEvent.click(next);
    await expect(canvas.getByRole('img', { name: 'Pangea object editor' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Show slide 2: Pangea object editor' })).toHaveAttribute('aria-pressed', 'true');

    await userEvent.click(canvas.getByRole('button', { name: 'Show slide 3: Pangea asset editor' }));
    await expect(canvas.getByRole('img', { name: 'Pangea asset editor' })).toBeVisible();
    await userEvent.click(next);
    await expect(canvas.getByRole('img', { name: 'Pangea level map' })).toBeVisible();
    await userEvent.click(previous);
    await expect(canvas.getByRole('img', { name: 'Pangea asset editor' })).toBeVisible();
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument();
    await userEvent.click(next);
  },
};
