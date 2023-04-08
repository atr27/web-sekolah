import Card from 'react-bootstrap/Card';

const Cardkegiatan = (props) => {
    return(
        <Card>
        <Card.Img variant="top" src={props.image} style={{ height:'30rem'}}/>
        <Card.Body>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Cardkegiatan;