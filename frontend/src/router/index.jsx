import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { URLS } from './const.ts'
import Home from '@/pages/Home'
import DashBoard from '@/pages/DashBoard'
import Manger from '@/pages/Manger'
import Account from '@/pages/Account'
import Login from '@/pages/Login/index.jsx'
import NotFount from '@/pages/NotFount/index.jsx'

export default function index() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={URLS.HOME} element={<Home />}>
          <Route path={URLS.DASHBOARD} element={<DashBoard />}></Route>
          <Route path={URLS.MANAGER} element={<Manger />}></Route>
          <Route path={URLS.ACCOUNT} element={<Account />}></Route>
        </Route>
        <Route path={URLS.LOGIN} element={<Login />}></Route>
        <Route path={'*'} element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  )
}
