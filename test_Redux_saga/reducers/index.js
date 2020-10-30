import {SEARCH_PRODUCT, SEARCH_MONTH, SEARCH_TYPE} from '../action/product';

const initialState = {
  name: '',
  month: '',
  type: '',
};

export default function searchContestReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return Object.assign({}, state, {
        name: action.name,
      });
    case SEARCH_MONTH:
      return Object.assign({}, state, {
        month: action.month,
      });
    case SEARCH_TYPE:
      return Object.assign({}, state, {
        type: action.type,
      });
    default:
      return state;
  }
}
