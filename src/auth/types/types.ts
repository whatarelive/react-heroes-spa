export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'
}


export type AuthAction = {
  type: string;
  payload?: {
    id: string,
    name: string,
  };
};

export type State = {
  logged: boolean;
  name?: string;
};
