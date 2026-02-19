import React from 'react';
import Header from '../legacy/components/Header/header.jsx';
import Footer from '../legacy/components/Footer/footer.jsx';
import AdminComponent from '../legacy/components/admin/admin.jsx';

export default function AdminPage({ users, recoveryUsers = [] }) {  // ← Añadido recoveryUsers
  return (
    <>
      <Header />
      <AdminComponent users={users} recoveryUsers={recoveryUsers} />  {/* ← Pasado al componente */}
      <Footer />
    </>
  );
}