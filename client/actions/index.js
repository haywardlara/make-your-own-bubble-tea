import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}
