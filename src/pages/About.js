import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell,CAvatar } from '@coreui/react';
function About() {
    const [user, setUser] = useState([]);
    const [mode, setMode]=useState('online');
    useEffect(()=>{
        axios
        .get('http://ec2-18-119-104-7.us-east-2.compute.amazonaws.com:3000/api/v1/categories?page=0&limit=50')
        .then(response => {
         setUser(response.data.data);  
         localStorage.setItem("values",JSON.stringify(response.data.data))
        }).catch((err)=>{
            setMode('offline')
          let collection=localStorage.getItem('values');
          setUser(JSON.parse(collection));
        })
    },[])
    return (
        <>
           <div>
              {
                  mode==='offline'?
                  <div>You are at offline mode</div>:
                  null
              }
           </div>
        <div>
        <CTable color="dark" striped>
    <CTableHead>
      <CTableRow>
      <CTableHeaderCell scope="col">User Image</CTableHeaderCell>
        <CTableHeaderCell scope="col">User Id</CTableHeaderCell>
        <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
        <CTableHeaderCell scope="col">User Description</CTableHeaderCell>
        
      </CTableRow>
    </CTableHead>
  
    <CTableBody>
    {user.map(user =>
      <CTableRow>
       <CTableDataCell><CAvatar src={user.image} /></CTableDataCell>
        <CTableDataCell>{user.id}</CTableDataCell>
        <CTableDataCell>{user.name}</CTableDataCell>
        <CTableDataCell>{user.description}</CTableDataCell>
      </CTableRow>
   
            )}
    </CTableBody>
  </CTable>
        </div>
        </>
    )
}

export default About
