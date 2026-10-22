import type { Preview } from '@storybook/sveltekit';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import '../src/app.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      options: {
        portfolio: { name: 'Portfolio dark', value: '#0C0F14' },
      },
    },
    viewport: { options: INITIAL_VIEWPORTS },
  },
  initialGlobals: { backgrounds: { value: 'portfolio' } },
};

export default preview;
