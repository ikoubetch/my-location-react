export default (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: action.payload
      }
    case 'REMOVE_USER':
      return {
        user: null
      }
    default:
      return state;
  }
}