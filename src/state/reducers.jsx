const defaultState = {
  num: 0,
  user: {
    name: 'Gz'
  }
}
const reducer = (state = defaultState, action) => {
  let x = { ...state }
  switch (action.type) {
    case 'ADD':
      if (!action.id) {
        x.num++
        return x
      } else {
        if (action.id === 1) {
          // let x = { ...state }
          x.user.name = null
          return x
        } else {
          return state
        }
      }
    case 'SUB':
      // let x = { ...state }
      x.num--
      return x
    default:
      return state
  }
}
export default reducer
