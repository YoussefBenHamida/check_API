import Card from 'react-bootstrap/Card';

const UserCard = ({el}) => {
  return (
    <div>
          <Card style={{ backgroundImage: 'linear-gradient(35deg, #0f2653 1%, #1f2127 50%, #1f2127 70%, #1f2127 70%, #474a51 100%)',height:'200px',width:'250px'}}>
      <Card.Body style={{display:'flex',justifyContent:'center',flexWrap: 'wrap'}}>
      <Card.Title style={{display:'flex',justifyContent:'center',fontSize:'20px',color:'rgb(204, 214, 223)'}}>{el.name}</Card.Title>
        <Card.Text style={{fontSize:'20px',color:'rgb(204, 214, 223)',width:'170px',height:"50px"}} >{el.username}</Card.Text>
        <Card.Text style={{fontSize:'15px',color:'rgb(204, 214, 223)'}} >{el.email}</Card.Text>
        <Card.Text style={{fontSize:'15px',color:'rgb(204, 214, 223)'}} >Phone: {el.phone}</Card.Text>
      </Card.Body>
      </Card>

    </div>
  )
}

export default UserCard