import { FC, useState } from 'react';
import { Box, Grid, HStack } from '@chakra-ui/react';
import {
  EmptyState,
  PageHeader,
  PaginationButton,
  StarShipCard,
} from '@/components';
import { useToggleFavoriteShip, useIsShipFavorite } from '@/hooks';
import axios from 'axios';
import useSWR from 'swr';
import { PageTitles } from '@/constants';

import { Starship } from '@/types';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

/**
 * Home page with list of starships.
 *
 * @component
 *
 * @author Carlos Knopel
 */
const StarShipList: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const handleToggleShipFavorite = useToggleFavoriteShip();
  const isShipFavorite = useIsShipFavorite();

  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/starships?page=${pageIndex}`,
    fetcher
  );

  return (
    <Box h="100%" w="100%">
      <PageHeader title={PageTitles.HOME} isLoading={isLoading} />
      {!error ? (
        <>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={6}
            mt={{ base: '42px', lg: '60px' }}
            minH="500px"
          >
            {data &&
              data.results.map((ship: Starship) => (
                <StarShipCard
                  key={`${ship.name}-${ship.manufacturer}`}
                  data={ship}
                  isFavorite={isShipFavorite(ship)}
                  favoriteButtonOnClick={() => handleToggleShipFavorite(ship)}
                />
              ))}
          </Grid>
          <HStack w="100%" justifyContent="center" gap={2} mt="52px" mb="30px">
            <PaginationButton
              title="Previous page"
              onClick={() => setPageIndex((prev) => prev - 1)}
              disabled={pageIndex === 1}
            />
            <PaginationButton
              title="Next Page"
              onClick={() => setPageIndex((prev) => prev + 1)}
              disabled={data && !data.next}
            />
          </HStack>
        </>
      ) : (
        <EmptyState text="Ups! there was an error while trying to get data from the API, please try again later..." />
      )}
    </Box>
  );
};

export default StarShipList;
