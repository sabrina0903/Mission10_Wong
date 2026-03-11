import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from "./components/Heading";
import BowlerTable from "./components/BowlerTable";

function App() {
  return (
    <>
      <Heading />
      <BowlerTable />
    </>
  );
}

export default App;
