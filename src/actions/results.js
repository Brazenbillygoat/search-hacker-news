const storeResults = (value) => {
  return {
    type: 'STORERESULTS',
    payload: value
  }
}

export { storeResults };