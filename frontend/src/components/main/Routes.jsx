import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../home/Home'
import UserCrud from '../user/UserCrud'

export default props => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/users' element={<UserCrud />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)
