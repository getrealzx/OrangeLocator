import createDataContext from './createDataContext'
import locatorApi from '../api/locator'

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_stores':
            return action.payload;
        default: 
            return state
    }
}

const fetchStores = dispatch => async () => {
    const response = await locatorApi.get('/stores');
    dispatch({ type: 'fetch_stores', payload: response.data })
};

const createStore = dispatch => async (name, locations) => {
    await locatorApi.post('/stores', { name, locations })
};

export const { Provider, Context } = createDataContext (
    storeReducer,
    { fetchStores, createStore },
    []
)