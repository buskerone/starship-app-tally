import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageHeader from '.';
import { PageTitles } from '@/constants';

describe('PageHeader', () => {
  test('should show title prop', () => {
    render(<PageHeader title={PageTitles.HOME} />);

    expect(screen.getByText(PageTitles.HOME)).toBeDefined();
  });
});
