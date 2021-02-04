export default function saveQuery(state = [], action) {
  switch(action.type) {
    case 'SAVEQUERY':
      return state = [...state, action.payload];
    default:
      return state;
  }
}