export default (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'REMOVE_USER':
      return {
        ...state,
        user: null
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}