'use client'
import React, { useCallback, useState, useEffect } from 'react'

const AdminForm = ({ setOpen }) => {

    const handleClose = useCallback(() => setOpen(false), [setOpen]);

    const [teamId, setTeamId] = useState();
    const [teams, setTeams] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        teamId,
    });

    useEffect(() => {
        const fetchTeams = async () => {
          try {
            // Comprobar localStorage
            const cachedTeams = localStorage.getItem('teams');
            const cacheTimestamp = localStorage.getItem('teams-timestamp');
            
            const cacheExpiry = 3600 * 1000;
      
            if (cachedTeams && cacheTimestamp && (Date.now() - cacheTimestamp < cacheExpiry)) {
              setTeams(JSON.parse(cachedTeams));
              console.log('Cargando datos desde caché...');
            } else {
              const response = await fetch('/api/team');
              if (!response.ok) {
                throw new Error('Error fetching teams');
              }
              const data = await response.json();

              // Guardar datos en localStorage
              
              localStorage.setItem('teams', JSON.stringify(data));
              localStorage.setItem('teams-timestamp', Date.now().toString());
              
              setTeams(data);
              console.log('Cargando datos desde API...');
            }
          } catch (err) {
            setError(err.message);
          }
        };
      
        fetchTeams();
      }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            ...formData,
            typeOfUser: 'USER_ADMINISTRATOR',
        }

        try {
            const response = await fetch("/api/admin", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`ERROR HTTP: ${response.status}`);
            }

            const data = await response.json();
            console.log("Admin creado", data);
            handleClose();

        } catch (error) {
            console.log('Error al crear el admin:', error);
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="InkuA"
                        src="/auth/inkuaLogo.png"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Crear admin
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombre
                        </label>
                        {/* <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                        </div> */}
                    </div>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            placeholder='John'
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2.5 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" onSubmit={handleSubmit} method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Dirección email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    placeholder='johndoe@inkua.com'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2.5 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <label htmlFor="team" className="block text-sm font-medium text-gray-700">
                                    Team
                                </label>
                            
                                <select
                                    name="teamId"
                                    value={teamId}
                                    onChange={handleChange}
                                    className="border text-sm rounded-lg  block w-full p-2.5 text-black"
                                >
                                    <option value="">Seleccionar equipo</option>
                                    {teams.map((team) => (
                                        <option key={team.id} value={team.id}>
                                        {team.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleClose}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                            >
                                Crear admin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminForm