import { CHANGE_SEARCH_FIELD } from '../constants';

export default function searchRobots(
  state = {
    searchfield: '',
  },
  action
) {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD: {
      return {
        ...state,
        searchfield: action.payload,
      };
    }
    default:
      return state;
  }
}

