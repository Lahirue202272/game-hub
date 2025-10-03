import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = ( 
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { 
      // genres: selectedGenre?.id, 
      // platforms: selectedPlatform?.id 
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    },
  },
    // [selectedGenre?.id, selectedPlatform?.id]
    [gameQuery ]
  );

export default useGames;
