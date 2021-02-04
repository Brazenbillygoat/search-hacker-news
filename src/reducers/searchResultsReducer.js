export default function storeResults(state = [], action) {
  switch(action.type) {
    case 'STORERESULTS':
      return action.payload;
    default:
      return state;
  }
}