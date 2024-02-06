import React, { useState } from 'react';
import UtilizationDoc from './document';
import UtilizationForm from './form'; 

export default function App() {
  return (
    <div>
      <UtilizationForm />
      <UtilizationDoc />
    </div>
  );
}
