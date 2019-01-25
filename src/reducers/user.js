const initialState = {
  name: 'Simon Mercier',
  username: 'simonUsername'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return { ...state, ...action.user }

    default:
      return state
  }
}
