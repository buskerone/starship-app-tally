import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import EmptyState from '.';

describe('EmptyState', () => {
  test('should show text prop', () => {
    render(<EmptyState text="Empty state text" />);

    expect(screen.getByText('Empty state text')).toBeDefined();
  });
});
