
const defaultState = {
      cash: 0,
}

const ADD_CASH = "ADD_CASH"
const GET_CASH = "GET_CASH"

export const cashReducer = (state = defaultState, action) => {
      switch (action.type) {

            case ADD_CASH:
                  return { ...state, cash: state.cash + action.payLoad }

            case GET_CASH:
                  return { ...state, cash: state.cash - action.payLoad }

            default:
                  return state;
      }
}

export const addCashAction = (payLoad) => ({ type: ADD_CASH, payLoad })
export const getCashAction = (payLoad) => ({ type: GET_CASH, payLoad })