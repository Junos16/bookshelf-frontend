import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BookTablePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<BookTablePage/>} />
          <Route path = "/login" element = {<LoginPage/>} />
          <Route path = "/signup" element = {<SignupPage/>} />
          <Route path = "/profile" element = {<ProfilePage/>}/>
          {/* <Route path = "/update" element = {}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
