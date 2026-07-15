import { BrowserRouter, Routes, Route } from "react-router-dom"
import {lazy, Suspense} from "react";
import { DashboardShimmer } from "./components/Shimmer/DashboardShimmer";
import { Index } from "./components/landingPage/Index";

const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);
const Auth = lazy(()=> import("./pages/Auth"))
const ShareBrain = lazy(()=> import("./pages/ShareBrain"))



const App = () => {
  return(
    <BrowserRouter>
    <Suspense fallback={<DashboardShimmer/>}>
      <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/auth/google" element={<Auth/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/share/:hash" element={<ShareBrain/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App