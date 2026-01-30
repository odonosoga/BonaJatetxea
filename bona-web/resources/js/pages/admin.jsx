import React from 'react';
import Header from '../legacy/components/Header/header.jsx';
import Footer from '../legacy/components/Footer/footer.jsx';
import AdminComponent from '../legacy/components/admin/admin.jsx';  // ← Renombrado

export default function AdminPage({ users }) {  // ← Recibe props de Laravel
  return (
    <>
      <Header />
      <AdminComponent users={users} />  {/* ← Pasa users */}
      <Footer />
    </>
  );
}
