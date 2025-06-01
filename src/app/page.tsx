'use client';

import { useState } from 'react';
import CreateUserForm from '@/components/CreateUserForm';
import UserList from '@/components/UserList';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUserCreated = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">User Management</h1>
        <CreateUserForm onUserCreated={handleUserCreated} />
        <UserList key={refreshKey} />
      </div>
    </main>
  );
}
