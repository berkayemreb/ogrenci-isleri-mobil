import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
    user: {
        email: string | null;
        uid: string | null;
    }
}

const initialState: initialStateProps = {
    user: {
        email: null,
        uid: null,

    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.user.email = action.payload.email
            state.user.uid = action.payload.uid
        },
        setUserLogout: state => {
            state.user.email = null
            state.user.uid = null

        },
    }
});

export default userSlice.reducer;
export const { setActiveUser, setUserLogout } = userSlice.actions;