import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import NewsDetail from "./NewsDetail";
import { newsListAtom } from "./NewsList/NewAtom";
import { API } from "./utils/api";
function App() {
  const setNewsList = useSetAtom(newsListAtom);
  useEffect(() => {
    API.getNewsList().then((data) => {
      return setNewsList(data);
    });
  }, [setNewsList]);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
