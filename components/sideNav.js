import React from 'react';
import Link from 'next/link';

export default function SideNav () {
    return (
        <div className="w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">
            <div className="pt-4 pb-2 px-6">
                    <div className="flex items-center">
                        <div className="shrink-0">
                        </div>
                        <div className="grow ml-3">
                            <p className="text-sm font-semibold text-blue-600">Admin CSE</p>
                        </div>
                    </div>
            </div>

            <hr className="my-2"/>
            <ul className="relative px-1">
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                       href="/addCandidat" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        </svg>
                        <span>Ajouter un candidat</span>
                    </a>
                </li>
            </ul>
            <hr className="my-2"/>
                <ul className="relative px-1">
                    <li className="relative">
                        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                           href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            </svg>
                            <span>Ajouter un employeur</span>
                        </a>
                    </li>
                </ul>
            <hr className="my-2"/>
            <ul className="relative px-1">
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                       href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

                        </svg>
                        <span>Voir tous les utilisateurs</span>
                    </a>
                </li>
            </ul>
                <div className="text-center bottom-0 absolute w-full">
                    <hr className="m-0"/>
                        <a href="#!" className="py-2 text-sm text-gray-700">Se déconnecter</a>
                </div>
        </div>
    );
};
