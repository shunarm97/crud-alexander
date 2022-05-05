
import './App.css';
import { useEffect, useState } from 'react';
import AllInfoCard from './components/AllInfoCard';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import createNewUsers from './services/createNewUsers';
import deleteUser from './services/deleteUser';
import editUser from './services/editUser';
import getAllInfo from './services/getAllInfo';

function App() {

  const [allInfo, setAllInfo] = useState([])
  const [newUser, setNewUser] = useState({})
  const [deleteId, setDeleteId] = useState('')
  const [editDefault, setEditDefault] = useState({})
  const [editFormRes, setEditFormRes] = useState({})


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
      setAllInfo([res.data, ...allInfo])
      setNewUser({})
     })
    }
  }, [newUser, allInfo])

  useEffect(() => {
    const filterUsers = (id) => {
      const newArr = allInfo.filter((allInf) => id !== allInf.id)
      return newArr
    }
    if(deleteId){
    deleteUser (deleteId)
    .then(() => {
      setAllInfo(filterUsers(deleteId))
    })
    } 
  }, [deleteId, allInfo])

  useEffect(() => {
    const filterUsers = (id) => {
      const newArr = allInfo.filter((allInf) => id !== allInf.id)
      return newArr
    }
    if(editFormRes.id) {
      editUser(editFormRes.id, editFormRes)
      .then((res) => {
        console.log(res.data)
        setAllInfo([ res.data, ...filterUsers(editFormRes.id)])
        setEditFormRes({})
      } )
    }
  }, [editFormRes, allInfo])
 
  const handlerOnEdit = (obj) => {
    setEditDefault(obj)
  }
  const handlerOnEditUser = (data) => {
    setEditFormRes(data)
  }

  const handlerOnCreateUser = (event) => {
    setNewUser(event)
  }

  const handlerOnDelete = (id) => {
    setDeleteId(id)
  }


  const list = allInfo.map ((info) => <AllInfoCard key={info.id} onDelete={handlerOnDelete} onEdit={handlerOnEdit} infoCard={info} />)

  return ( 
    <div className="App">
      <header className="App-header">
        <h1>REGISTROS DE USUARIOS</h1>
        <div className='gird'>
          <div className='saved'>
          <h2>REGISTROS YA GUARDADOS</h2>
          {list}
          </div>
          <div className='handling'>
            <h2>CREAR USUARIO NUEVO</h2>
            <CreateForm onCreate={handlerOnCreateUser}/>
            <h2>EDITAR USUARIO YA EXISTENTE</h2>
            <EditForm onEdit={handlerOnEditUser} defValues={editDefault}/>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;

