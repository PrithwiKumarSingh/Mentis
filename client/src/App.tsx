import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import CheckAuth from "./pages/CheckAuth"
import {ShareBrain} from "./pages/ShareBrain"



const App = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<CheckAuth/>} />
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/share/:hash" element={<ShareBrain/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App