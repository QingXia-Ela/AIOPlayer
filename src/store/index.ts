import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/src/devtoolsExtension";

const combineCollect = combineReducers({})

const enhancers = composeWithDevTools({})

export default configureStore({
  reducer: combineCollect,
  middleware: [],
  enhancers
})
