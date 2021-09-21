import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./actions";

const contacts = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((element) => element.id !== action.payload),
});

const filter = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
