import React from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import {RouteProvider} from "./AdminRouterProvider";
import { Login } from '../auth/Login';
import { Register } from '../components/register/Register';
import { Catalog } from '../components/catalog/Catalog';
import { Companies } from '../components/companies/Companies';


export const AdminRouter = () => {

  const cod = useParams();

  return (
    <RouteProvider>
        <Routes>
            <Route path='admin/login' element={<Login/>}></Route>
            <Route path='admin/register' element={<Register/>}></Route>
            <Route path='admin/catalog/:userId/:token' element={<Catalog />}></Route>
            <Route path='admin/companies/:userId/:token' element={<Companies />}></Route>
            <Route path='admin/*' element={<Navigate to={'/admin/login'} replace={true} />}/>
        </Routes>
    </RouteProvider>
  );
}
