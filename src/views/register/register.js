/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../style/main.css';
import auto from '../../assets/auto.png'
import wave from '../../assets/wave.png';


class register extends React.Component {

    render() {
        return (

            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <body>
                    <img class="wave" src={wave}></img>
                </body>
                <div className="max-w-md w-full">
                    <div>
                        <img className="mx-auto h-10 w-auto" src={auto} alt="Workflow"></img>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Bienvenido
                        </h2>

                    </div>
                    <form className="mt-8" action="#" method="POST">
                        <div className="rounded-md shadow-sm">
                            <div class="w-full md:w-1/2 px-3 mb-3 pt-0 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Nombre
                                </label>
                                <input aria-label="Name" name="name" type="name" required className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" placeholder="Name" />
                                
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Apellido
                                </label>
                                <input aria-label="Name" name="name" type="name" required className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Name" />
                                
                            </div>
                            <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Correo
                                </label>
                                <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
                            </div>
                            <div className="-mt-px">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Contraseña
                                </label>
                                <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
                            </div>
                            <div className="-mt-px">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Repite Contraseña
                                </label>
                                <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Repeat Password" />
                            </div>
                            
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                    Registrarme
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}

export default register;