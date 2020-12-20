import React from 'react'
import { createSlice, nanoid, createAction, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = [
    {
        "id": 1,
        "name": "Tech",
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 2,
        "name": "Nieuws",
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 3,
        "name": "Sports",
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 4,
        "name": "Lokaal",
        "created_at": null,
        "updated_at": null
    }
]

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoryAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(       id,
            name,
            created_at,
            updated_at){
                return{
                    payload: {
                        id: nanoid(),
                        name,
                        created_at,
                        updated_at
                    }
                }
            }
        }
    }
});

export default categorySlice.reducer;