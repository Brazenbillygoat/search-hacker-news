
export default function query(state = "", action) {
  switch(action.type) {
    case 'UPDATEQUERY':
      let newState = state + action.paylod;
     return newState;
    default:
      return state;
  }
}
