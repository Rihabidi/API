import React from 'react'
import { Table } from 'react-bootstrap'

function UserTable({user}) {
  return (
    <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>email</th>
      <th>adress</th>
      <th>phone</th>
      <th>website</th>
      <th>company</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.address.city},{user.address.street},{user.address.suite}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.company.name}</td>
    </tr>
    
    
  </tbody>
</Table>
    </div>
  )
}

export default UserTable