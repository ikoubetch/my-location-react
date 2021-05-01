

export function setUser(user) {
  return { type: 'SET_USER', payload: user }
}

export function removeUser() {
  return { type: 'REMOVE_USER' }
}

export function setLoading(loading) {
  return { type: 'SET_LOADING', payload: loading }

}