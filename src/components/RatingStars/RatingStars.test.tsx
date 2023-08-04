import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import RatingStars from '.';

describe('Rating Stars', () => {
  test('should show rating stars', () => {
    render(<RatingStars rating={2} />);

    expect(screen.getByTestId('rating-stars')).toBeDefined();
  });
});
