import { REGIONS_MAP } from "../constants/regions";

export type RegionKey = keyof typeof REGIONS_MAP;

export interface GameState {
  isGameStarted: boolean;
  quizText: string;
  guessedRegions: RegionKey[];
  notGuessedRegions: RegionKey[];
  regionToGuess: RegionKey;
}
