"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Login() {
    const [Mail, setMail] = useState("")
    const [Contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleInputEmail = (e) => setMail(e.target.value)
    const handleInputContraseña = (e) => setContraseña(e.target.value)

    const buscar = () => {
        setError(false)
        if (Mail !== "" && Contraseña !== "") {
            setContraseña("")
            setMail("")
        } else {
            setError(true)
        }
    }
  return (
    <div className='flex flex-col justify-center mx-auto w-11/12 bg-slate-300 p-6 rounded-lg lg:w-6/12'>
            <Image
                className='mb-4'
                width="80"
                height="50"
                src="/auth/inkuaLogo.png"
                alt="logo inkua"
                priority
            />
            <h1 className='text-center text-3xl mb-4'>Inicia Sesión</h1>
            <div className="flex flex-col w-8/12 mx-auto m-2">
                <p className={`${error ? "flex" : "hidden"} mb-4 text-red-700`}>Debes completar todos los campos</p>
                <label htmlFor="inputEmail">Correo Electrónico</label>
                <input
                    onChange={handleInputEmail}
                    value={Mail || ""}
                    type="email"
                    className="rounded-lg p-3"
                    id="inputEmail"
                    placeholder='ejemplo@inkua.de'
                />
            </div>
            <div className="flex flex-col w-8/12 mx-auto m-2">
                <label htmlFor="inputPassword">Contraseña</label>
                <input
                    onChange={handleInputContraseña}
                    type="password"
                    value={Contraseña || ""}
                    className="rounded-lg p-3"
                    id="inputPassword"
                />
                <div className='flex flex-col'>
                    <Link className='text-sm text-inkuaBlue mt-2' href="/Login/Recuperar">Recuperar Contraseña</Link>
                    <Link className='text-sm text-inkuaBlue mt-2' href="/Login/Actualizar">Actualizar Contraseña</Link>
                </div>
            </div>
            <button onClick={buscar} className='w-max text-white rounded-md mt-6 self-end ml-3 p-2 bg-inkuaBlue'>Iniciar Sesión</button>
        </div>
  )
}

export default Login
