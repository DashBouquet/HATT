type StateType = {
  characterPage: any;
  total: number;
  RMApi: any;
};

export type AppContextType = {
  state: StateType;
  setData: (payload: any) => void;
};
