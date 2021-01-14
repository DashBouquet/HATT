import { RMApi as Api } from './utils/api';

export type State = {
  dashboardReducer: StateDashboard;
  loginReducer: StateLogin;
};

export type StateDashboard = {
  characterPage: ParsedCharacter[];
  total: number;
  RMApi: Api;
  currPage: number;
  currChar: number;
  hiddenTextVisible: boolean;
  visible: boolean;
};
export type StateLogin = {
  loginToken: string;
};

export type AppContextType = {
  state: StateDashboard;
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

export type Breadcrumb = {
  path: string;
  breadcrumbName: string;
};

export type Feed = {
  id: string;
  links: LinkType[];
  count: number;
};

export type LinkType = {
  id: string;
  description: string;
  url: string;
  postedBy: User;
  votes: Vote[];
  createdAt: Date;
};

export type Vote = {
  id: string;
  link: LinkType;
  user: User;
};

export type User = {
  id: string;
  name: string;
  email: string;
  links: LinkType[];
};
