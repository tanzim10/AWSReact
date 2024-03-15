import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, {Suspense, useEffect} from 'react';
import { useSelector } from "react-redux";

const Application = React.lazy(() => import('./component/application'));
const Authentication = React.lazy(() => import('./component/auth'));


function App() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const isAuthenticated = user && user.token ? true : false;
  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);

  },[isAuthenticated])
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={!isAuthenticated? <Authentication />: <Application />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
  );

}

export default App;
