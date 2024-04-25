import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import EntityPage from "./pages/EntityPage";

const App: React.FC = () => {
  return (
    <div className = "min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
      {/* <div className = "max-w-md w-full space-y-8"> */}
      {/* <div className="bg-emerald-300 py-2 px-4 rounded-md"> */}
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<HomePage/>} />
            <Route path = "/login" element = {<LoginPage/>} />
            <Route path = "/signup" element = {<SignupPage/>} />
            <Route path = "/profile" element = {<ProfilePage/>}/>
            <Route path = "/entity/:type/:id" element = {<EntityPage/>}/>
          </Routes>
        </BrowserRouter>
      {/* </div> */}
    </div>
  );
}

export default App;
