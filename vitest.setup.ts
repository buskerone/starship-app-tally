import { vi } from 'vitest';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
HTMLCanvasElement.prototype.getContext = () => {
  return {
    fillStyle: '',
    fillRect: vi.fn(),
  };
};
