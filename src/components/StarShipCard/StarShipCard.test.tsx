import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import StarShipCard from '.';

const data = {
  name: 'Solar Sailer',
  model: 'Punworcca 116-class interstellar sloop',
  manufacturer: 'Huppla Pasa Tisc Shipwrights Collective',
  cost_in_credits: '35700',
  length: '15.2',
  max_atmosphering_speed: '1600',
  crew: '3',
  passengers: '11',
  cargo_capacity: '240',
  consumables: '7 days',
  hyperdrive_rating: '1.5',
  MGLT: 'unknown',
  starship_class: 'yacht',
  pilots: [],
  films: ['https://swapi.dev/api/films/5/'],
  created: '2014-12-20T18:37:56.969000Z',
  edited: '2014-12-20T21:23:49.937000Z',
  url: 'https://swapi.dev/api/starships/58/',
};

describe('Starship Card', () => {
  test('should show starship card', () => {
    render(
      <StarShipCard data={data} isFavorite favoriteButtonOnClick={() => {}} />
    );

    expect(screen.getByTestId('starship-card')).toBeDefined();
  });

  test('should show notes text area', () => {
    render(
      <StarShipCard
        data={data}
        isFavorite
        favoriteButtonOnClick={() => {}}
        isNotesBoxVisible
      />
    );

    expect(screen.getByTestId('starship-notes')).toBeDefined();
  });

  test('should show starship name', () => {
    render(
      <StarShipCard
        data={data}
        isFavorite
        favoriteButtonOnClick={() => {}}
        isNotesBoxVisible
      />
    );

    expect(screen.getByTestId('starship-name')).toBeDefined();
  });

  test('should show starship manufacturer', () => {
    render(
      <StarShipCard
        data={data}
        isFavorite
        favoriteButtonOnClick={() => {}}
        isNotesBoxVisible
      />
    );

    expect(screen.getByTestId('starship-manufacturer')).toBeDefined();
  });

  test('should show starship passengers', () => {
    render(
      <StarShipCard
        data={data}
        isFavorite
        favoriteButtonOnClick={() => {}}
        isNotesBoxVisible
      />
    );

    expect(screen.getByTestId('starship-passengers')).toBeDefined();
  });

  test('should show starship favorite button', () => {
    render(
      <StarShipCard
        data={data}
        isFavorite
        favoriteButtonOnClick={() => {}}
        isNotesBoxVisible
      />
    );

    expect(screen.getByTestId('starship-favorite')).toBeDefined();
  });

  test('should show starship image', () => {
    render(
      <StarShipCard
        data={data}
        isFavorite
        favoriteButtonOnClick={() => {}}
        isNotesBoxVisible
      />
    );

    expect(screen.getByTestId('starship-image')).toBeDefined();
  });
});
