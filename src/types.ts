type StateType = {
  characterPage: any;
};

export type AppContextType = {
  state: StateType;
  setData: (payload: any) => void;
};
