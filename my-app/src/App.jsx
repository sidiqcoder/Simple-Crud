import { useState } from 'react'
import UserList from "./components/userList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/addUser";
import AddEdit from './components/addEdit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='add' element={<AddUser/>}/>
        <Route path='edit/:id' element={<AddEdit/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
