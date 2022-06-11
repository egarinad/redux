import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {addCustAction, delCustAction} from "./store/customReduser";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashRed.cash);
  const customers = useSelector((state) => state.customRed.customers);

  const addCash = (load) => {
    console.log(Number.isFinite(load))
    if(!Number.isFinite(load))
      return alert("Вы ввели не число");
      dispatch(addCashAction(load ));
  };

  const getCash = (load) => {
    if(load> cash)
      return alert("Недосточно средств на счету")
    dispatch(getCashAction(load));
  };

  const addCust = (name) => {
    const customer = {
      name,
      key: Date.now(),
    }
    dispatch(addCustAction(customer));
  };

  const delCust = (customer) =>{
    dispatch(delCustAction(customer.key));
  }

  const delCustById = (num) =>{
    num-=1;
    dispatch(delCustAction(customers[num].key));
  }

  return (
    <div className="container">
      <div className="cash">{cash}</div>
      <div>
        <button
          className="decCash"
          onClick={() => {
            getCash(Number(prompt("Сколько хотите снять со счёта:", "0")));
          }}
        >
          Снять
        </button>
        <button
          className="incCash"
          onClick={() => {
            addCash(Number(prompt("Сколько хотите положить на счёт:", "0")));
          }}
        >
          Пополнить
        </button>
        <button
              className="incCustomer"
              onClick={() => {
                addCust(prompt("Введите имя:", "0"));
              }}
        >
          Добавить клиента
        </button>
        <button
              className="incCustomer"
              onClick={() => {
                delCustById(Number(prompt("Введите номер:", "0")));
              }}
        >
          Удалить клиента
        </button>
      </div>
      {customers.length > 0 ?
            <div>
              {customers.map((customer,i) =>
                <div onClick={()=>delCust(customer)} key={i}>
                  {customer.name}
                </div>)
              }
            </div>
            :
            <div>Клиентов нет</div>
      }
    </div>
  );
}

export default App;
