// resources/js/Pages/Legacy.jsx
import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function NotFound() {
  return (
    <>
      <Head title="404 - Orrialde ez da aurkitu" />
      <div className="container my-5 text-center py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="display-1 fw-bold text-muted mb-4">404</h1>
            <h2 className="mb-4">Orrialde ez da aurkitu</h2>
            <p className="lead mb-5">
              Bilatzen duzun orrialdea ez dago edo existitzen ez den helbidea duzu.
            </p>
            <Link href="/" className="btn btn-primary btn-lg px-4">
              <i className="fas fa-home me-2"></i>
              Hasiera orrialdera
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
