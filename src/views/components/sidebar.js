/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../style/sidebar.css';
import '../../style/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';


class sidebar extends React.Component {

    render() {
        return (
            <div id="sidebar" className="h-screen w-16 menu bg-blue text-black px-4 flex items-center nunito static fixed shadow">

                <ul className="list-reset ">
                    <li className="my-2 md:my-0">
                        <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <FontAwesomeIcon icon={faHome} className='mr-3'></FontAwesomeIcon><span className="w-full inline-block pb-1 md:pb-0 text-sm">C</span>
                        </a>
                    </li>
                    <li className="my-2 md:my-0 ">
                        <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <FontAwesomeIcon icon={faAddressBook} className='mr-3'></FontAwesomeIcon><span className="w-full inline-block pb-1 md:pb-0 text-sm">R</span>
                        </a>
                    </li>
                    <li className="my-2 md:my-0">
                        <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <FontAwesomeIcon icon={faBus} className='mr-3'></FontAwesomeIcon><span className="w-full inline-block pb-1 md:pb-0 text-sm">U</span>
                        </a>
                    </li>
                    <li className="my-2 md:my-0">
                        <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <FontAwesomeIcon icon={faEyeSlash} className='mr-3'></FontAwesomeIcon><span className="w-full inline-block pb-1 md:pb-0 text-sm">D</span>
                        </a>
                    </li>

                </ul>

            </div>
        );
    }
}

export default sidebar;