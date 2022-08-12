import React from 'react'
import {Card, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

const Profile = (props) => {
    //console.log(props) 
    const handleName=(fullName) => alert (`My name is ${props.fullName} Please check my ${props.bio}`)
  return (
    <div style={{margin:"2% 28%"}}>
        <Card style={{ width: '18rem' }}>
      {props.children}
      <Card.Body>
        <Card.Title>{props.fullName}</Card.Title>
        <Card.Text>{props.bio}</Card.Text>
        <Card.Text>{props.profession}</Card.Text>
    <Button variant="primary" onClick={handleName}>Submit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
Profile.defaultProps={
    fullName:"Mounir"
    
}

Profile.propTypes={
    fullName:PropTypes.string
}

export default Profile