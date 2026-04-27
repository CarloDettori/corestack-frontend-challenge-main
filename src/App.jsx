import { GlobalProvider } from "./context/GlobalContext.jsx";
import DefaultLayout from "../src/layout/DefaultLayout.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostPage from "./pages/PostPage.jsx";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;