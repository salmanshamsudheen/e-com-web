import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from '../Screens/Login/LoginScreen'
import OtpScreen from '../Screens/otpScreen/OtpScreen'
import InformationDetails from '../Screens/informationDetails/InformationDetails'

const NavigationStack = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginScreen/>} />
        <Route path='/otp' element={<OtpScreen/>} />
        <Route path='/informationdetails' element={<InformationDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default NavigationStack