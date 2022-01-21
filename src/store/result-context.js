import { createContext, useState } from "react";
import axios from "axios";

//devuelve un componente de React
const ResultContext = createContext({
  results: [],
  totalResult: 0,
  users: [],
  AOE2: [],
});
//agregamos este componente común de React a este fichero par realizar acciones con los datos del contexto creado
// tiene el trabajo de proveer este contexto a todos los componentes que necesitan los valores de este contexto
export function ResultContextProvider(props) {
  const [userResults, setUserResults] = useState([]);
  const [users, setusers] = useState([]);
  const [AOE2, setAOE2] = useState([]);
  const context = {
    results: userResults,
    totalResult: userResults.length,
    users,
    AOE2,
    getUsers,
    getCivilizationAOE2,
    addToResults: addResultHandler,
    removeFromResults: removeResultHandler,
    isOnResult: itemIsResultHandler,
  };
  function addResultHandler(item) {
    setUserResults((prev) => {
      return prev.concat(item);
    });
  }
  function itemIsResultHandler(id) {
    return userResults.some((item) => item.id === id);
  }
  function removeResultHandler(id) {
    setUserResults(() => userResults.filter((item) => item.id !== id));
  }
  async function getUsers() {
    const res = await axios("https://api.github.com/users");
    const data = res.data;
    let newArr = [];
    data.forEach((element) => {
      newArr = [...newArr, { data: element.login, id: "user_" + element.id }];
    });
    setusers(newArr);
  }
  async function getCivilizationAOE2() {
    const res = await axios(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const data = res.data.civilizations;
    let newArr = [];
    data.forEach((element) => {
      newArr = [...newArr, { data: element.name, id: "civ_" + element.id }];
    });
    setAOE2(newArr);
  }

  return (
    <ResultContext.Provider value={context}>
      {props.children}
    </ResultContext.Provider>
  );
}

export default ResultContext;
