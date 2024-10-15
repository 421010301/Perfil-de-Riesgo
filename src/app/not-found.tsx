import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">¡Oops! Esto no es parte del test.</h2>
      <p className="lead mb-5">
        Parece que te has desviado un poco del camino. No te preocupes, incluso los mejores inversionistas
        se pierden a veces.
      </p>
      <Link href="/" className="btn btn-primary btn-lg">
        Volver al test
      </Link>
    </div>
  );
}
