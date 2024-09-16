"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Update (){
    const [contraseñaActual, setContraseñaActual] = useState("")
    const [contraseña1, setContraseña1] = useState("")
    const [contraseña2, setContraseña2] = useState("")
    const [error, setError] = useState(false)
    const [errorIgualdad, setErrorIgualdad] = useState(false)

    const changeActual = (e) => {
        setContraseñaActual(e.target.value)
    }
    const changeContraseña1 = (e) => {
        setContraseña1(e.target.value)
    }
    const changeContraseña2 = (e) => {
        setContraseña2(e.target.value)
    }

    const actualizarContraseña = () => {
        setError(false)
        setErrorIgualdad(false)
        contraseña1 !== contraseña2 ? setErrorIgualdad(true) : setErrorIgualdad(false)
        contraseñaActual === "" || contraseña1 === "" || contraseña2 === "" ? setError(true) : setError(false)
    }


    return(
        <div className='w-full h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center mx-auto w-11/12 h-max bg-slate-300 p-6 rounded-lg lg:w-6/12'>
            <h1 className='text-center text-3xl mb-4'>Actualizar Contraseña</h1>
            <div className="flex flex-col w-8/12 mx-auto m-2">
                <p className={`${error || errorIgualdad ? "flex" : "hidden"} mb-4 text-red-700`}>{errorIgualdad ? "Los campos 'Nueva Contraseña' deben ser iguales" : "Debes completar todos los campos"}</p>
                <label htmlFor="inputEmail">Contraseña Actual</label>
                <input
                    onChange={changeActual}
                    type="password"
                    className="rounded-lg p-3"
                    />
            </div>
            <div className="flex flex-col w-8/12 mx-auto m-2">
                <label htmlFor="inputPassword">Nueva Contraseña</label>
                <input
                    onChange={changeContraseña1}
                    type="password"
                    className="rounded-lg p-3"
                    />
            </div>
            <div className="flex flex-col w-8/12 mx-auto m-2">
                <label htmlFor="inputPassword">Repetir Nueva Contraseña</label>
                <input
                    onChange={changeContraseña2}
                    type="password"
                    className="rounded-lg p-3"
                    />
                <div className='flex gap-4'>
                    <Link className='text-inkuaBlue mt-4' href="/auth">Iniciar Sesión</Link>
                </div>
            </div>
            <button onClick={actualizarContraseña} className='w-max text-white rounded-md mt-6 self-end ml-3 p-2 bg-inkuaBlue'>Actualizar</button>
        </div>
                    </div>
    )
}

export default Update