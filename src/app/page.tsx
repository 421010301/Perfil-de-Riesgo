"use client"
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='m-auto'>
      <div className="container text-center">
        <h1 className='display-4 font-weight-bold mb-4'>¡Bienvenido a la Evaluación de Perfil de Riesgo!</h1>
        <p className='lead mb-4'>
          Esta evaluación te ayudará a identificar tu perfil de inversionista. A través de una serie de preguntas,
          determinaremos tu tolerancia al riesgo y te recomendaremos un tipo de inversión acorde a tus objetivos financieros.
        </p>

        <p className='mb-4'>
          El test es rápido y fácil de completar. Responde sinceramente para obtener el mejor resultado.
        </p>
        <Link href='/test' className='btn btn-primary btn-lg' >
          Iniciar Test
        </Link>
      </div>
    </div>
  )
}
