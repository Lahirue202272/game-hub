import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelectors from "./components/PlatformSelectors";
import { Platform } from "./hooks/useGames";
import SortSelectors from "./components/SortSelectors";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
  genre : Genre | null;
  platform : Platform | null;
  sortOrder : string;
  searchText : string;
}

// function App() {
//  const[selectedGenre,setSelectedGenre] = useState<Genre|null>(null);
//  const[selectedPlatform,setSelectedPlatform] = useState<Platform|null>(null);


//   return (
//     <Grid templateAreas={{
//       base: `"nav" "main" `,
//       lg: `"nav nav" "aside main"`,
//     }}
//     templateColumns={{
//       base: "1fr",
//       lg: "200px 1fr",
//     }}
//     >
//       <GridItem area="nav" >
//         <NavBar/>
//       </GridItem>
//       <Show above="lg">
//         <GridItem area="aside" paddingX={5}>
//           <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <PlatformSelectors selectedPlatform = {selectedPlatform}  onSelectPlatform={(platform) =>setSelectedPlatform(platform)}/>
//         <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
//       </GridItem>
//     </Grid>
//   );
// }

// export default App;



function App() {
  // const[selectedGenre,setSelectedGenre] = useState<Genre|null>(null);
  // const[selectedPlatform,setSelectedPlatform] = useState<Platform|null>(null);
  const[gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `"nav" "main" `,
      lg: `"nav nav" "aside main"`,
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr",
    }}
    >
      <GridItem area="nav" >
        <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})} selectedGenre={gameQuery.genre}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelectors selectedPlatform = {gameQuery.platform}  onSelectPlatform={(platform) =>setGameQuery({...gameQuery,platform})}/>
            </Box>
            <SortSelectors selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) =>setGameQuery({...gameQuery,sortOrder})}/>
          </Flex>
        </Box>
        <GameGrid gamequery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;

