export const handleAuthFulfield = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

export const handleAuthRejected = (state, action) => {
  state.error = action.payload;
};

export const handleAuthLogout = state => {
  state.user = { name: '', email: '' };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleAuthRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};
