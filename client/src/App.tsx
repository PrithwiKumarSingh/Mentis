import { BrowserRouter, Routes, Route } from "react-router-dom"
import {lazy, Suspense} from "react";
import { DashboardShimmer } from "./components/Shimmer/DashboardShimmer";

const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);
const Signin = lazy(()=> import("./pages/Signin"))
const Signup = lazy(()=> import("./pages/Signup"))
const CheckAuth = lazy(()=> import("./pages/CheckAuth"))
const ShareBrain = lazy(()=> import("./pages/ShareBrain"))



const App = () => {
  return(
    <BrowserRouter>
    <Suspense fallback={<DashboardShimmer/>}>
      <Routes>
          <Route path="/" element={<CheckAuth/>} />
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/share/:hash" element={<ShareBrain/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App