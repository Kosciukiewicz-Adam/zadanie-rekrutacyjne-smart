import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SearchTermsKeys } from '../interfaces/SearchTermsKeys'
import { SearchTermsKeyNames } from '../consts'


const initialState: SearchTermsKeys = {
  username: "",
  email: "",
  phone: "",
  name: "",
}

export const searchTerms = createSlice({
  name: 'searchTerms',
  initialState,
  reducers: {
    changeKeyValue: (state, action: PayloadAction<{ key: SearchTermsKeyNames, value: string }>) => {
      state[action.payload.key] = action.payload.value;
    },
    clearKeyValue: (state, action: PayloadAction<{ key: SearchTermsKeyNames }>) => {
      state[action.payload.key] = "";
    },
  },
})

export const { changeKeyValue, clearKeyValue } = searchTerms.actions;

export default searchTerms.reducer;