import { createSlice } from "@reduxjs/toolkit";

export const IncDecSlice = createSlice({
    name: 'incdec',
    initialState: 10,
    reducers:{
        Inc :(state , action) =>{
            // return state += 1;
            return state += action.payload;
        },
        Dec : (state , action) =>{
            // return state -=1;
            return state -= action.payload;
        }
    }
})

export const {Inc , Dec} = IncDecSlice.actions;
export default IncDecSlice.reducer;