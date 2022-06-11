
const defaultCustom = {
      customers: [],
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const MANY_CUSTOMERS = "MANY_CUSTOMERS";
const DEL_CUSTOMER = "DEL_CUSTOMER";

export const customReducer = (state=defaultCustom, action) =>{
      switch (action.type) {


            case MANY_CUSTOMERS:
                  return {...state, customers: [...state.customers, action.payLoad]}

            case ADD_CUSTOMER:
                  return  {...state, customers: [...state.customers, action.payLoad]}

            case DEL_CUSTOMER:
                  return  {...state, customers: state.customers.filter(customer=> customer.key!==action.payLoad )}

            default:
                  return state;
      }
}

export const addCustAction = (payLoad) =>({type: ADD_CUSTOMER, payLoad })
export const delCustAction = (payLoad) =>({type: DEL_CUSTOMER, payLoad })