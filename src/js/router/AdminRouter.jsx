import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../auth/Login';
import { Register } from '../components/register/Register';
import { Catalog } from '../components/catalog/Catalog';
import { Companies } from '../components/companies/Companies';
import GamesDetails from '../components/games/GamesDetails';


export const AdminRouter = () => {

  return (
        <Routes>
            <Route path='admin/login' element={<Login/>}></Route>
            <Route path='admin/register' element={<Register/>}></Route>
            <Route path='admin/catalog/:userId/:token' element={<Catalog />}></Route>
            <Route path='admin/companies/:userId/:token' element={<Companies />}></Route>
            <Route path='admin/detail/:userId/:token' element={<GamesDetails />}></Route>
            <Route path='admin/*' element={<Navigate to={'/admin/login'} replace={true} />}/>
        </Routes>
  );
}
