import React from 'react';
import Link from "next/link";
import AddEmployeur from "../components/addEmployeur";

export default function Employeur(props) {
    return (
        <>
         <AddEmployeur/>
            <Link href='/'>Accueil</Link>
        </>
    );
}