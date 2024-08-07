
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProductState = {
    //   user: null,
    //   token: '',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // setCredentials: (state, action) => {
        //   const { user, accessToken } = action.payload;
        //   state.user = user;
        //   state.token = accessToken;
        // },
        // userLoggedOut: (state) => {
        //   state.token = '';
        //   state.user = null;
        // },
    },
});

// export const { setCredentials, userLoggedOut } = authSlice.actions;
export default productSlice.reducer;