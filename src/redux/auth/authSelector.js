export const selectorIsAuth = (state) => state.auth.isAuth;
export const selectorUserEmail = (state) => state.auth.user.email;
export const selectorAuthError = (state)=> state.auth.error;
export const selectorIsRefreshingUser =(state)=> state.auth.selectorIsRefreshingUser