import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    name: string;
    profileImage: string | null;
}

const initialState: UserState = {   
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    name: 'Ambula User0050',
    profileImage: null, 
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<{ name: string; phone: string }>) => {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
        },
        updateProfileImage: (state, action: PayloadAction<string>) => {
            state.profileImage = action.payload;
        },
        updateFormData: (
            state,
            action: PayloadAction<{ firstName: string; lastName: string; gender: string; dateOfBirth: string; email: string }>
        ) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.gender = action.payload.gender;
            state.dateOfBirth = action.payload.dateOfBirth;
            state.email = action.payload.email;

            //firstName and lastName into full name
            state.name = `${action.payload.firstName} ${action.payload.lastName}`;
        },
    },
});

export const { updateUser, updateProfileImage, updateFormData } = userSlice.actions;
export default userSlice.reducer;
