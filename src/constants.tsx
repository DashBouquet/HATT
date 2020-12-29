// dashboard
export const SET_DATA = 'SET_DATA';
export const SET_CURR_PAGE = 'SET_CURR_PAGE';
export const SET_CURR_CHAR = 'SET_CURR_CHAR';
export const SET_TEXT_VISIBLE = 'SET_TEXT_VISIBLE';
export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE';
export const DEFAULT_DATA = {
  locName: 'unknown',
  locDimension: 'unknown',
  residentsAmount: 'unknown',
};

//login
export const SET_TOKEN = 'SET_TOKEN';

export const routes = [
  {
    path: '/',
    breadcrumbName: 'HATT',
  },
  {
    path: '/unknown_css',
    breadcrumbName: 'Unknown Css Workshop',
  },
];
