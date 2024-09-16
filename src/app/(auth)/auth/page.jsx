"use client"
import React, { useState } from 'react'
import loginBackground from "@/../public/auth/FONDOLOGIN.svg"
import logoInkua from "@/../public/auth/logo-inkua-login.svg"
import Image from 'next/image'
function Login() {
    const [Mail, setMail] = useState("")
    const [Contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleInputEmail = (e) => setMail(e.target.value)
    const handleInputContraseña = (e) => setContraseña(e.target.value)

    const ingresar = (e) => {
        e.preventDefault()
        setError(false)
        if (Mail !== "" && Contraseña !== "") {
            setContraseña("")
            setMail("")
        } else {
            setError(true)
        }
    }
  return (
<div className='flex flex-col h-screen'>
    <div className="bg-white h-full dark:bg-gray-900">
    <div className="flex h-full justify-center">
    <div className="hidden h-full lg:block lg:w-7/12" style={{ backgroundImage: `url(${loginBackground.src})`,  backgroundSize: 'cover',  backgroundRepeat: 'no-repeat' }}>
    <div className="flex items-center h-full justify-center px-20 bg-gray-900 bg-opacity-40">
        <div className='h-auto'>
            <div className="w-max mx-auto mt-3 text-white font-semibold leading-none">
                <p className='text-[60px] leading-none'>Conecta</p>
                <div className='flex m-0 p-0 gap-2 font-normal text-[40px] leading-none'>
                    con la
                    <p className='text-[#FE9C40] leading-none'>comunidad IT</p>
                </div>
                <p className='font-normal text-[45px] leading-none'>más grande</p>
                <p className='text-[40px] leading-none'>de la</p> 
                <p className='h-auto m-0 p-0 text-[#FE9C40] text-[65px] leading-none'>galaxia</p>
            </div>
        </div>
    </div>
</div>

        <div className="flex flex-col justify-between w-4/5 max-w-md p-6 mx-auto lg:w-5/12">
        <Image className='self-end' src={logoInkua} width="80" heigth="45" alt="logo inkua" />
                <div className='pb-24 w-4/5 mx-auto'>
                    <p className="mb-4 text-xl text-[#0185B6] font-bold dark:text-gray-300">Iniciar Sesión</p>
                    {error ? (<p className='text-red-600'>Debe completar todos los campos</p>) : null}
                    <form>
                        <div>
                            <label for="email" className="block mb-2 font-semibold text-md text-[#0185B6] dark:text-gray-200">Email</label>
                            <input onChange={handleInputEmail} type="email" name="email" id="email" value={Mail} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-[#0485af] rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-md font-semibold text-[#0185B6] dark:text-gray-200">Contraseña</label>
                            </div>
                            <input onChange={handleInputContraseña} type="password" name="password" value={Contraseña} id="password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-[#0485af] rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <button onClick={e => ingresar(e)} className="flex w-max mx-auto px-8 py-2 text-lg tracking-wide  shadow-[0_4px_6px_rgba(0,0,0,0.5)] bg-[#FE9C40] text-white transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-opacity-50">
                                Ingresar
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-sm text-center underline font-semibold text-[#0185B6]">¿Olvidaste tu Contraseña?</p>
                </div>
        </div>
    </div>
</div>
<div className='bg-[#232323] text-center w-full p-4'>
<p className='text-white font-extralight'>InkuA - Todos los derechos reservados</p>
</div>
</div>
  )
}

export default Login
