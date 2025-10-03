import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gamequery : GameQuery;
  // selectedGenre : Genre| null;
  // selectedPlatform: Platform | null;
}

// const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
const GameGrid = ({gamequery}:Props) => {
  //const { data, error, isLoading } = useGames(selectedGenre,selectedPlatform);
  const { data, error, isLoading } = useGames(gamequery);
  // const skeletons = [1, 2, 3, 4, 5, 6];
  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);


  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
