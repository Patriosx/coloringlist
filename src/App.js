import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/app.css";
import Navbar from "./components/Navbar";
import ShowList from "./components/ShowList";
import Title from "./components/Title";
import Result from "./components/Result";

function App() {
  console.log("%c App rendered! ", "background: #222; color: #bada55");
  const [users, setusers] = useState([]);
  const [AOE2, setAOE2] = useState([]);
  const [result, setResult] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const getColor = (color) => {
    setSelectedColor(color);
  };
  const getUsers = async () => {
    const res = await axios("https://api.github.com/users");
    const data = res.data;
    let newArr = [];
    data.forEach((element) => {
      newArr = [...newArr, { data: element.login }];
    });
    setusers(newArr);
  };
  const getCivilizationAOE2 = async () => {
    const res = await axios(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const data = res.data.civilizations;
    let newArr = [];
    data.forEach((element) => {
      newArr = [...newArr, { data: element.name }];
    });
    setAOE2(newArr);
  };
  const coloring = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
  function initializingData() {
    getUsers();
    getCivilizationAOE2();
  }
  // useEffect(() => {
  //   (async function () {
  //     const res = await axios("https://api.github.com/users");
  //     console.log(res.users);
  //     setusers(res.data);
  //   })();
  // }, []);

  useEffect(() => {
    initializingData();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/nombres"
          element={[
            <Title title={"Login usuarios"} />,
            <ShowList
              list={users}
              setResult={setResult}
              coloring={coloring}
              getColor={getColor}
            />,
          ]}
        />

        <Route
          path="/AOE2"
          element={[
            <Title title={"Civilizations"} />,
            <ShowList
              list={AOE2}
              setResult={setResult}
              coloring={coloring}
              getColor={getColor}
            />,
          ]}
        />

        <Route
          path="/result"
          element={<Result result={result} selectedColor={selectedColor} />}
        />
      </Routes>
    </div>
  );
}

export default App;
