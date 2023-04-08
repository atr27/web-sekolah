import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../assets/smkn4bandung.jpg'
import hero2 from './../assets/smkn4gdungutama.jpg'
import hero3 from './../assets/kegiatan.jpg'


const Hero = () => {
    return(
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Gedung Kelas</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Gedung Depan Sekolah</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Kegiatan Sekolah</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default Hero;

