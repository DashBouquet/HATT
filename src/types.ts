import { RMApi as Api } from './utils/api';

export type StateType = {
  characterPage: ParsedCharacter[];
  total: number;
  RMApi: Api;
};

export type AppContextType = {
  state: StateType;
  setData: (payload: ParsedRes) => void;
};

export type ParsedLoc = {
  locName: string;
  locDimension: string;
  residentsAmount: number;
};

export type ParsedCharacter = {
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
  episodesList: string[];
  origin: ParsedLoc;
  location: ParsedLoc;
};

export type ParsedRes = {
  total: number;
  characterPage: ParsedCharacter[];
};

export type CharacterSchema = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationSchema;
  location: LocationSchema;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type LocationSchema = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type GetLocationsRes = {
  originData: ParsedLoc;
  locationData: ParsedLoc;
};

export type ExtractedLocNumbers = {
  origin: number;
  location: number;
};
