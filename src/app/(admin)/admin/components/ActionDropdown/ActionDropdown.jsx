'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import FormEdit from "../FormEdit/FormEdit"

function ActionDropdown({ handleAdminId, data }) {
    
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false)
    const router = useRouter()



    const updateData = async (newData) => {
        try {
            const response = await fetch(`http://localhost:3000/api/admin/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: '',
                    ...newData,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                alert("Operación Exitosa!");
                router.refresh();
            } else {
                alert("No se pudo realizar la operación: " + responseData.error);
            }
        } catch (error) {
            console.error('Error actualizando los datos:', error);
            alert("Error actualizando los datos");
        }
    }


    return (
        <>
            <button
                className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
                onClick={() => setToggle(!toggle)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </button>
            {
                toggle && (
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:underline"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                                onClick={() => setOpen(true)}
                            >
                                Edit
                            </a>
                            <FormEdit isOpen={open} setIsOpen={setOpen} saveData={updateData} data={data} add={false} setToggle={setToggle} />
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={handleAdminId}>
                                Detail
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline" role="menuitem" tabIndex="-1" id="menu-item-2">Settings</a>
                        </div>
                        <div className="py-1" role="none">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline" role="menuitem" tabIndex="-1" id="menu-item-3">Delete</a>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ActionDropdown;
