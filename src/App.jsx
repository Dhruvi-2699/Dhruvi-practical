import { useState } from 'react'
import './App.css'
import AddPackageForm from './components/addPackageForm';
import PopupComponent from './components/poupComponent';

function App() {
    const [openAddPackageForm, setOpenAddPackageForm] = useState(false);

  const handleOnClose =()=>{
    setOpenAddPackageForm(false)
  }
  return (
    <div className='flex flex-row justify-center items-center h-screen'>
      <div className='flex justify-center items-center'>
        <h1 className="text-xl font-bold">Package List</h1>
        <button onClick={()=>setOpenAddPackageForm(true)}>Add new  Package</button>
      </div>

    {
      openAddPackageForm &&
      <PopupComponent isOpen={openAddPackageForm} onClose={handleOnClose}>
        <AddPackageForm />
        </PopupComponent>
    }
    </div>
  )
}

export default App
