import { Action, Dispatch } from 'redux';
import { SET_TOKEN } from '../../constants';

type LoginData = {
  username: string;
  password: string;
  remember: boolean;
};

export class LoginApi {
  _apiBase = 'https://';

  sendLoginInfo = async (data: LoginData) => {
    console.log(data);
    // const res = await this.getRes(`/`);
    // console.log(res);
    return 'token-shpoken';
    // return res;
  };

  async getRes(url: string) {
    try {
      const res = await fetch(`${this._apiBase}${url}`);
      return await res.json();
    } catch (e) {
      console.log(e);
      throw new Error(`Could not fetch ${url}. Got error printed above.`);
    }
  }
}

export const logOut = (dispatch: Dispatch<Action>) => {
  dispatch({ type: SET_TOKEN, payload: '' });
  localStorage.removeItem('loginToken');
};
