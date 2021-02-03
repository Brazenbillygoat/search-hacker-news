
export default function query(state = "", action) {
  switch(action.type) {
    case 'UPDATEQUERY':
     return state = action.payload;
    default:
      return state;
  }
}
