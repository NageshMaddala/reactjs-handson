import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        destinations: [
            {
                id: 1,
                name: "Paris",
                description: "The city of lights and love.",
                image: "https://example.com/paris.jpg",
                country: "France",
            },
            {
                id: 2,
                name: "Tokyo",
                description: "A bustling metropolis with a rich culture.",
                image: "https://example.com/tokyo.jpg",
                country: "Japan",
            },
            {
                id: 3,
                name: "New York",
                description: "The city that never sleeps.",
                image: "https://example.com/newyork.jpg",
                country: "USA",
            },
        ],
        destinationSelected: null
    }
};

export const destinationSlice = createSlice({
    name: "destination",
    initialState: initialState(),
    reducers: {
        destinationClicked: (state, action) => {
            state.destinationSelected = action.payload;
            console.log(action.payload);
        },
        resetDestination: (state) => {
            state.destinationSelected = null;
        },
        addDestination: (state, action) => {
            const newDestination = action.payload;
            state.destinations.push(newDestination);
        },
        removeDestination: (state, action) => {
            const idToRemove = action.payload.id;
            state.destinations = state.destinations.filter(dest => dest.id !== idToRemove);
        },
        updateDestination: (state, action) => {
            const updatedDestination = action.payload;
            const index = state.destinations.findIndex(dest => dest.id === updatedDestination.id);
            if (index !== -1) {
                state.destinations[index] = updatedDestination;
            }
        },
    },
});

export const destinationReducer = destinationSlice.reducer; // Exporting the reducer so that it can be used in the store
export const { destinationClicked, resetDestination } = destinationSlice.actions;