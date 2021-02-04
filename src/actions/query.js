
const updateQuery = (value) => {
  return {
    type: 'UPDATEQUERY',
    payload: value
  }
}

const saveQuery = (value) => {
  return {
    type: 'SAVEQUERY',
    payload: value
  }
}

export { updateQuery, saveQuery };