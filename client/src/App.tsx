import { BrowserRouter, Routes, Route } from "react-router-dom"
import {lazy, Suspense} from "react";
import { DashboardShimmer } from "./components/Shimmer/DashboardShimmer";
import { LandingPage } from "./pages/LandingPage";

const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);
const Signin = lazy(()=> import("./pages/Signin"))
const ShareBrain = lazy(()=> import("./pages/ShareBrain"))



const App = () => {
  return(
    <BrowserRouter>
    <Suspense fallback={<DashboardShimmer/>}>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/auth/google" element={<Signin/>}></Route>
          {/* <Route path="/signup" element={<Signup/>}></Route> */}
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/share/:hash" element={<ShareBrain/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App