export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'
}


export type AuthAction = {
  type: string;
  payload: string;
};

export type State = {
  logged: boolean;
  name?: string;
};
