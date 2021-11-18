import { createStore, compose } from 'redux';
import { rootReducer } from './root.reducer';

export const store = createStore(
    rootReducer,
    compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);
