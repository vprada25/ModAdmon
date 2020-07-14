/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../style/main.css';
import '../../style/login.css';
import auto from '../../assets/auto.png';
import wave from '../../assets/wave.png';


class login extends React.Component {
    render() {
        return (
           
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                 <body>
                    <img class="wave" src={wave} alt=""></img>
                </body>
                <div className="max-w-md w-full">
                    <div>
                        <img className="mx-auto h-56 w-auto" src={auto} alt="Workflow">
                        </img>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Bienvenido
                        </h2>

                    </div>
                    <form className="mt-8" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm">
                            <div>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Nombre
                                </label>
                                <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
                            </div>
                            <div className="-mt-px">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Contraseña
                                </label>
                                <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                <label for="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                                    Recordarme
                                </label>
                            </div>

                            <div className="text-sm leading-5">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    ¿olvidaste tu contraseña?
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                    Iniciar Sesion
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}


export default login;