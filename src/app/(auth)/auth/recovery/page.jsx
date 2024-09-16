"use client"
import React, { useState } from 'react'
import Link from 'next/link'
function RecoveryPass() {
  const [errorIgualdad, setErrorIgualdad] = useState(false)
  const [errorVacio, setErrorVacio] = useState(false)
  const [mail1, setMail1] = useState("")
  const [mail2, setMail2] = useState("")

  const mail1Change = (e) => {
      setMail1(e.target.value)
  }

  const mail2Change = (e) => {
      setMail2(e.target.value)
  }
  const confirmarRecuperacion = () => {
      setErrorIgualdad(false)
      setErrorVacio(false)
      mail1 !== mail2 ? setErrorIgualdad(true) : setErrorIgualdad(false)
      mail1 === "" || mail2 === "" ? setErrorVacio(true) : setErrorVacio(false)
  }

  return (
  <div className='w-full h-screen flex justify-center items-center'>
    <div className='flex flex-col justify-center mx-auto w-11/12 bg-slate-300 p-6 rounded-lg lg:w-6/12'>
            <h1 className='text-center text-3xl mb-4'>Recuperar Contraseña</h1>
            <div className="flex flex-col w-8/12 mx-auto m-2">
                <p className={`${errorVacio || errorIgualdad ? "flex" : "hidden"} mb-4 text-red-700`}>{errorIgualdad ? "Los campos deben ser iguales" : "Debes completar todos los campos"}</p>
                <label htmlFor="inputEmail">Correo Electrónico</label>
                <input
                    onChange={mail1Change}
                    type="email"
                    className="rounded-lg p-3"
                    id="inputEmail"
                    placeholder='ejemplo@inkua.de'
                />
            </div>
            <div className="flex flex-col w-8/12 mx-auto m-2">
                <label htmlFor="inputEmail">Repetir Correo Electrónico</label>
                <input
                    onChange={mail2Change}
                    type="email"
                    className="rounded-lg p-3"
                    id="inputEmail"
                    placeholder='ejemplo@inkua.de'
                />
                <div className='flex gap-4 mt-2'>
                    <Link className='text-inkuaBlue' href="/auth">Iniciar Sesión</Link>
                </div>
            </div>
            <button onClick={() => confirmarRecuperacion()} className='w-max text-white rounded-md mt-6 self-end ml-3 p-2 bg-inkuaBlue'>Recuperar</button>
        </div>
  </div>
  )
}

export default RecoveryPass
