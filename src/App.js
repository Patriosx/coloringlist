import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/app.css";
import Navbar from "./components/Navbar";
import ShowList from "./components/ShowList";
import Title from "./components/Title";
import Result from "./components/Result";
import ResultContext from "./store/result-context";
import GeoLoc from "./components/GeoLoc";

function App() {
  // console.log("%c App rendered! ", "background: #222; color: #bada55");
  const { getUsers, getCivilizationAOE2, users, AOE2 } =
    useContext(ResultContext);

  function initializingData() {
    getUsers();
    getCivilizationAOE2();
  }
  useEffect(() => {
    initializingData();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/users"
          element={[
            <Title title={"Login usuarios"} />,
            <ShowList list={users} />,
          ]}
        />

        <Route
          path="/AOE2"
          element={[
            <Title title={"Civilizations"} />,
            <ShowList list={AOE2} />,
          ]}
        />

        <Route
          path="/result"
          element={[<Title title={"Results"} />, <Result />]}
        />
        <Route
          path="/location"
          element={[<Title title={"Your current location"} />, <GeoLoc />]}
        />
      </Routes>
    </>
  );
}

export default App;
