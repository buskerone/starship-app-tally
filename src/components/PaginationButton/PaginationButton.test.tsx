import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PaginationButton from '.';

describe('Pagination Button', () => {
  test('should show title prop', () => {
    render(
      <PaginationButton title="Next Page" onClick={() => {}} disabled={false} />
    );

    expect(screen.getByText('Next Page')).toBeDefined();
  });

  test('should check if the button is disabled', () => {
    render(<PaginationButton title="Next Page" onClick={() => {}} disabled />);

    expect(screen.getByTestId('pagination-button')).toHaveAttribute('disabled');
    expect(screen.getByTestId('pagination-button')).toBeDisabled();
  });
});
