
import { useEffect, useState } from 'react';
import './App.css';
import AllInfoCard from './components/AllInfoCard';
import CreateForm from './components/CreateForm';
import createNewUsers from './services/createNewUsers';
import deleteUser from './services/deleteUser';
import getAllInfo from './services/getAllInfo';

function App() {

  const [allInfo, setAllInfo] = useState([])
  const [newUser, setNewUser] = useState({})
  const [deleteId, setDeleteId] = useState('')

  
  useEffect (() => {
    getAllInfo()
    .then((response) => {
      setAllInfo(response.data) 
    })
  },[])

  useEffect(() => {
   if(newUser.first_name) {
    createNewUsers(newUser)
     .then((res) => {
      // console.log(res.data)
      setAllInfo([res.data, ...allInfo])
      setNewUser({})
     })
    }
  
    else {
      console.log('no hay valores para hacer el post')
    }
  }, [newUser, allInfo])

  useEffect(() => {
    if(deleteId){
    deleteUser (deleteId)
    .then(() => {
      setAllInfo(filterUsers(deleteId))
    })
    } 
  }, [deleteId])

  const filterUsers = (id) => {
    const newArr = allInfo.filter((allInf) => id !== allInf.id)
    return newArr
  }

  
  const handlerOnCreateUser = (event) => {
    setNewUser(event)

  }

  const handlerOnDelete = (id) => {
setDeleteId(id)
console.log('este viene del handlerOnDelete',id)
  }


  const list = allInfo.map ((info) => <AllInfoCard key={info.id} onDelete={handlerOnDelete} infoCard={info} />)

  return ( 
    <div className="App">
      <header className="App-header">
      
      <CreateForm onCreate={handlerOnCreateUser}/>
      {list}
      </header>
    </div>
  );
}

export default App;