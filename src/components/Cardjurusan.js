import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardjurusan = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.jurusan}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="success">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardjurusan;