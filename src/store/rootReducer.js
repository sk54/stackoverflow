import { combineReducers } from 'redux';
import FeatureQuestion from './reducer/featureQuestion';
import userDetails from './reducer/userDetails';

export const rootReducer = combineReducers({
    FeatureQuestion,
    userDetails
});

export default rootReducer;
