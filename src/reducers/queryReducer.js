
export default function updateQuery(state = "", action) {
  switch(action.type) {
    case 'UPDATEQUERY':
     return state = {...state, query: action.payload}
    default:
      return state;
  }
}
