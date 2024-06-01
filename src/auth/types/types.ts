export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'
}


export interface AuthAction {
  type: string;
  payload?: {
    id: string,
    name: string,
  };
}

export interface State {
  logged: boolean;
  name?: string;
}
