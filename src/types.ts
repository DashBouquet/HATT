type StateType = {
  characterPage: any;
  RMApi: any;
};

export type AppContextType = {
  state: StateType;
  setData: (payload: any) => void;
};
