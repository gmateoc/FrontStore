import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {RouteProvider} from "./AdminRouterProvider";
import { Login } from '../auth/Login';


export const AdminRouter = () => {
  return (
    <RouteProvider>
        <Routes>
            <Route path='admin/login' element={<Login/>}></Route>
        </Routes>
    </RouteProvider>
  );
}
