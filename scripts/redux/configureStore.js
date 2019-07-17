import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const configureStore = function (intitalState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore( 
        rootReducer, 
        intitalState, 
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}

export default{
    configureStore
}

log('redux store configured with an initial-state, compose and thunk middleware...');