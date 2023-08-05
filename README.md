# Starship - Tally - Take home test

## This is a take home test made with React/Vite that shows two different pages:

- Home page: all the starships are being fetched from SWAPI API
- Favorite page: renders all the favorite starships selected by the user

Note: if the user tries to enter to a unknown page then a NotFound page will be rendered

## Vercel deployment
[Vercel deployment](https://starship-app-tally.vercel.app/)

## How to run it?

Make sure you are using Node v18.16.0 or similar

First, make sure you have the following env var in your .env.local file (root folder):

```bash
VITE_API_URL="https://swapi.dev/api"
```

```bash
yarn install
```

```bash
yarn dev
```

## How to run tests?

```bash
yarn test
```

```bash
yarn test:ui
```

## Technologies used:

- TypeScript
- Vite
- Vitest
- Chakra UI
- Lottie
- SWR
- Context
- Axios
- Prettier
- Eslint
- Lint staged
- Husky

## Folder structure

- [assets/](./src/assets)
  - [empty-animation.json](./src/assets/empty-animation.json)
  - [empty_heart.svg](./src/assets/empty_heart.svg)
  - [full_heart.svg](./src/assets/full_heart.svg)
  - [full_star.svg](./src/assets/full_star.svg)
  - [half_star.svg](./src/assets/half_star.svg)
  - [home_logo.jpg](./src/assets/home_logo.jpg)
  - [index.ts](./src/assets/index.ts)
  - [starship.jpg](./src/assets/starship.jpg)
- [components/](./src/components)
  - [EmptyState/](./src/components/EmptyState)
  - [NavBar/](./src/components/NavBar)
  - [PageHeader/](./src/components/PageHeader)
  - [PaginationButton/](./src/components/PaginationButton)
  - [RatingStars/](./src/components/RatingStars)
  - [StarShipCard/](./src/components/StarShipCard)
  - [index.ts](./src/components/index.ts)
- [context/](./src/context)
  - [FavoritesContext.tsx](./src/context/FavoritesContext.tsx)
  - [NotesContext.tsx](./src/context/NotesContext.tsx)
- [hooks/](./src/hooks)
  - [index.ts](./src/hooks/index.ts)
  - [useIsShipFavorite.ts](./src/hooks/useIsShipFavorite.ts)
  - [useToggleFavoriteShip.ts](./src/hooks/useToggleFavoriteShip.ts)
- [layouts/](./src/layouts)
  - [MainLayout/](./src/layouts/MainLayout)
  - [index.ts](./src/layouts/index.ts)
- [pages/](./src/pages)
  - [Favorites/](./src/pages/Favorites)
  - [NotFound/](./src/pages/NotFound)
  - [StarShipList/](./src/pages/StarShipList)
  - [index.ts](./src/pages/index.ts)
- [router/](./src/router)
  - [Router.tsx](./src/router/Router.tsx)
  - [index.ts](./src/router/index.ts)
- [types/](./src/types)
  - [index.ts](./src/types/index.ts)
- [App.tsx](./src/App.tsx)
- [constants.ts](./src/constants.ts)
- [main.tsx](./src/main.tsx)
- [theme.ts](./src/theme.ts)
- [vite-env.d.ts](./src/vite-env.d.ts)
