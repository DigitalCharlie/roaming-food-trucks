import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import './HeroImage.css'

export default function Slider() {
    return (
        <Carousel className='carousel' variant="light">
            <Carousel.Item>
                <img
                    className="auto"
                    src="/assets/hero1.png"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="auto"
                    src="/assets/hero2.png"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="auto"
                    src="/assets/hero3.png"
                />
            </Carousel.Item>
        </Carousel>
    )
}