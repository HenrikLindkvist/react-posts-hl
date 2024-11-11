import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { PostRoutes } from "./PostRoutes";
import { NavigationButton } from "./components/NavigationButton";
import  { PATH_HOME, PATH_POST, PATH_ABOUT } from "./constants/paths"

function App() {
  return (
    <>
      <nav className="mx-auto my-2 relative flex w-fit h-fit rounded-lg bg-white shadow-sm border border-slate-200 h-screen">
        <div className="flex flex-row gap-6 px-3 py-3">
          <NavigationButton path={PATH_HOME} label="Home" />
          <NavigationButton path={PATH_POST} label="Posts" />
          <NavigationButton path={PATH_ABOUT} label="About" />
        </div>
      </nav>
      <Routes>
        <Route path={PATH_HOME} element={<Home />} />
        <Route path={`${PATH_POST}/*`} element={<PostRoutes />} />
        <Route path={PATH_ABOUT} element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
