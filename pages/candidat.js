import Link from 'next/link'
import React from 'react'
import AddCandidat from '../components/addCandidat'

export default function candidat() {
  return (
    <>
        <AddCandidat/>
        <Link href='/'>Accueil</Link>
    </>
  )
}
