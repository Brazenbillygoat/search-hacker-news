const currentQuery = (value) => {
  return {
    type: 'UPDATEQUERY',
    payload: value
  }
}




export { currentQuery };