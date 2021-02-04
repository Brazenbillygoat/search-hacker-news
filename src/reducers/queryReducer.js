
export default function query(state = "", action) {
  switch(action.type) {
    case 'UPDATEQUERY':
     return action.payload;
    default:
      return state;
  }
}
