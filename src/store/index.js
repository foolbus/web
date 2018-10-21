import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducer';
import rootSaga from '../sagas';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware()



export default createStore(reducers,
                          composeEnhancers(
                          applyMiddleware(sagaMiddleware)),
                        );
sagaMiddleware.run(rootSaga);
