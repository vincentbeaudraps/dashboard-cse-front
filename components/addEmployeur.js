import React from 'react';

export default function AddEmployeur() {
    return (

        <form className="grid lg:grid-cols-2 w-4/6 gap-4">
            <div className="input-type">
                <input type="text" name="firstname" className="bord w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName"/>
            </div>
            <div className="input-type">
                <input type="text" name="lastname" className="bord w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName"/>
            </div>
            <div className="input-type">
                <input type="email" name="email" className="bord w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email"/>
            </div>
            <div className="input-type">
                <input type="text" name="role" className="bord w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Role"/>
            </div>
            <div className="form-check">
                <input type="checkbox" value="Inactif" id="checkDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="checkDefault1" className="inline-block text-gray-800">BAFA</label>
            </div>
            <div className="form-check">
                <input type="checkbox" value="Inactif" id="checkDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="checkDefault2" className="inline-block text-gray-800">BAFD</label>
            </div>
            <div className="form-check">
                <input type="checkbox" value="Inactif" id="checkDefault3" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="checkDefault3" className="inline-block text-gray-800">Stage pratique</label>
            </div>
            <div className="form-check">
                <input type="checkbox" value="Inactif" id="checkDefault4" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="checkDefault4" className="inline-block text-gray-800">BAFA en cours</label>
            </div>
            <div className="form-check">
                <input type="checkbox" value="Inactif" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault2" className="inline-block text-gray-800">BPJEPS</label>
            </div>
            <div className="form-check">
                <input type="checkbox" value="Inactif" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault2" className="inline-block text-gray-800">Nom diplômé</label>
            </div>
            <div className="flex gap-10 items-center ">
                <div className="form-check">
                    <input type="radio" value="Actif" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label htmlFor="radioDefault1" className="inline-block text-gray-800">Actif</label>
                </div>
                <div className="form-check">
                    <input type="radio" value="Inactif" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label htmlFor="radioDefault2" className="inline-block text-gray-800">Inactif</label>
                </div>
            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Ajouter</button>
        </form>
    );
}

