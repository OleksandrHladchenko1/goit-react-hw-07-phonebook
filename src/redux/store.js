import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phonebookApi } from '../Components/api/api';

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ]
});

setupListeners(store.dispatch);

export default store;





