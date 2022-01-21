import { createContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";
//devuelve un componente de React
export const ResultContext = createContext();
//agregamos este componente común de React a este fichero par realizar acciones con los datos del contexto creado
// tiene el trabajo de proveer este contexto a todos los componentes que necesitan los valores de este contexto
export function ResultContextProvider(props) {
  const initialState = {
    results: [],
    totalResult: 0,
    users: [],
    AOE2: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const context = {
    results: state.results,
    totalResult: state.results.length,
    users: state.users,
    AOE2: state.AOE2,
    getUsers,
    getCivilizationAOE2,
    addToResults: addResultHandler,
    removeFromResults: removeResultHandler,
    isOnResult: itemIsResultHandler,
  };
  function addResultHandler(item) {
    dispatch({
      type: "ADD_TO_RESULTS",
      payload: item,
    });
  }
  function itemIsResultHandler(id) {
    return state.results.some((item) => item.id === id);
  }
  function removeResultHandler(id) {
    dispatch({
      type: "DELETE_FROM_RESULTS",
      payload: id,
    });
  }
  async function getUsers() {
    try {
      const res = await axios("https://api.github.com/users");
      const data = res.data;
      let newArr = [];
      data.forEach((element) => {
        newArr = [...newArr, { data: element.login, id: "user_" + element.id }];
      });
      dispatch({
        type: "GET_USERS",
        payload: newArr,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function getCivilizationAOE2() {
    try {
      const res = await axios(
        "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
      );
      const data = res.data.civilizations;
      let newArr = [];
      data.forEach((element) => {
        newArr = [...newArr, { data: element.name, id: "civ_" + element.id }];
      });
      dispatch({
        type: "GET_AOE2",
        payload: newArr,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ResultContext.Provider value={context}>
      {props.children}
    </ResultContext.Provider>
  );
}

export default ResultContext;
