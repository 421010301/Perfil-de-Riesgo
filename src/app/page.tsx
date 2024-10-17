"use client"
import { useTestContext } from '@/utils/test-context'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home() {
  const { resetTest } = useTestContext()
  const router = useRouter()

  const handleClick = () => {
    resetTest()
    router.push("/test")
  }

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
        <button className='btn btn-primary btn-lg mb-5' onClick={handleClick}>
          Iniciar Test
        </button>
      </div>
    </div>
  )
}
