import React, { useEffect } from 'react';
import { Route, Routes, redirect, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
  const nav = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if(!isLogin) {
      nav('/error')
    }
  })
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
