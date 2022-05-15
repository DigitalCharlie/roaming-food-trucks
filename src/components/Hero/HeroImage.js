import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import './HeroImage.css'

export default function Slider() {
    return (
        <Carousel className='carousel' variant="light">
            <Carousel.Item>
                <img
                    className="auto"
                    src="https://i.imgur.com/bFdlYwA.png"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="auto"
                    src="https://i.imgur.com/pnFbsxI.png"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="auto"
                    src="https://i.imgur.com/3SkIAxQ.png"
                />
            </Carousel.Item>
        </Carousel>
    )
}