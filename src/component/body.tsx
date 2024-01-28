import { Carousel } from 'react-bootstrap'
import Lemon1 from '../assets/images/lemonc1.jpg';
import Lemon2 from '../assets/images/lemonc2.jpg';
import MenuGrid from './MenuGrid';
import ReservationForm from './ReservationForm';

const Body = () => {
    return (
        <>
            <Carousel className='custom-carausel shadow mb-5 bg-body rounded' >
                <Carousel.Item style={{ height: '400px' }}>
                    <img
                        className="d-block w-100"
                        src={Lemon1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Classic Lemonade</h3>
                        <p>Some description for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '400px' }}>
                    <img
                        className="d-block w-100"
                        src={Lemon2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Minty Lemonade</h3>
                        <p>Some description for the second slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Items as needed */}
            </Carousel>
            <div className='text-center'>
                <h2>List Item</h2>
                <div className="line"></div>
            </div>
            <MenuGrid />
            <div className="line"></div>
            <ReservationForm />
        </>
    )
}

export default Body