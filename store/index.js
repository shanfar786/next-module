import { createSlice, configureStore } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'destination',
    initialState: {
        country: '',
        city: '',
        location: {}
    },
    reducers: {
        changeDestination: (state, action) => {
            return {
                country: action.payload.country,
                city: action.payload.city,
                location: state.location
            }
        },
        changeGeo: (state, action) => {
            return {
                country: state.country,
                city: state.city,
                location: action.payload
            }
        }
    }
})

const store = configureStore({
    reducer: locationSlice.reducer
});

export const locationActions = locationSlice.actions;

export default store;