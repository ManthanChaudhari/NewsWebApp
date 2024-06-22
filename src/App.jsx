import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";


function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [queryParam, setQuery] = useState("general");
  return (
    <>
        <Header />
        <Outlet />
    </>
  );
}

export default App;
