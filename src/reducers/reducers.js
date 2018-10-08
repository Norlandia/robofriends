import { CHANGE_SEARCHFIELD } from '../constants';

export default function searchRobots(
  state = {
    searchfield: '',
  },
  action
) {
  switch (action.type) {
    case CHANGE_SEARCHFIELD: {
      return {
        ...state,
        searchfield: action.payload,
      };
    }
    default:
      return state;
  }
}
