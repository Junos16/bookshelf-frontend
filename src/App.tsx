import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import EntityPage from "./pages/EntityPage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage/>} />
          <Route path = "/login" element = {<LoginPage/>} />
          <Route path = "/signup" element = {<SignupPage/>} />
          <Route path = "/profile" element = {<ProfilePage/>}/>
          <Route path = "/entity/:type/:id" element = {<EntityPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
