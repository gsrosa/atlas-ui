import type { Preview } from "@storybook/react";
import React from "react";

import { NexploringProvider } from "../src/theme/provider";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <NexploringProvider>
        <Story />
      </NexploringProvider>
    ),
  ],
};

export default preview;
