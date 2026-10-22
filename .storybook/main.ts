import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  framework: '@storybook/sveltekit',
  staticDirs: ['../static'],
  core: { disableTelemetry: true },
};

export default config;
