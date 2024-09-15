import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state of the form
interface FormDataState {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    email: string;
}

const initialState: FormDataState = {
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
};

const formSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        saveFormData: (state, action: PayloadAction<FormDataState>) => {
            return { ...action.payload };
        },
        resetFormData: () => initialState,
    },
});

export const { saveFormData, resetFormData } = formSlice.actions;

export default formSlice.reducer;
