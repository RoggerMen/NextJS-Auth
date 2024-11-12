'use client';
import React from 'react';

const ProfileForm = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile Form</h2>
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Username</span>
          <input type="text" className="mt-1 block w-full p-2 border rounded-lg" placeholder="Nombre de usuario" />
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Guardar</button>
      </form>
    </div>
  );
};

export default ProfileForm;
