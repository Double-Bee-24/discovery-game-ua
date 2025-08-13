import type { RegionKey } from "../types/GameState.interface";
import type { GameState } from "../types/GameState.interface";
import { REGIONS_MAP } from "./regions";
import { pickRandom } from "../utils/array.utils";

const regions = Object.keys(REGIONS_MAP) as RegionKey[];

// Remove cities
const notGuessedRegions: RegionKey[] = regions.filter(region =>
  region !== "Sevastopol" && region !== "Kyiv");

export const INITIAL_GAME_STATE: GameState = {
  isGameStarted: false,
  quizText: 'Натисніть "Грати", щоб почати ⟶',
  guessedRegions: [],
  notGuessedRegions,
  regionToGuess: pickRandom(notGuessedRegions),
};
