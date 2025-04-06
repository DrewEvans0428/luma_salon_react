import "./css/SlideShow.css";
import {useState} from "react";
//import home_image from "../images/slideshow/home-image.jpg";
//import slideshow2 from "../images/slideshow/slideshow2.jpg";
//import slideshow1 from "../images/slideshow/slideshow1.jpg";
//import slideshow3 from "../images/slideshow/slideshow3.jpg";
//import slideshow4 from "../images/slideshow/slideshow4.jpg";


const SlideShow = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const showNextImage = () => {
        /*
        if(imageIndex == images.length - 1){
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex+1);
        }
            */

        setImageIndex(imageIndex === images.length -1? 0: imageIndex+1);
    }

    const showPreviousImage = () => {
        setImageIndex(imageIndex === 0? images.length-1:imageIndex-1);
    }

    return (
        <section id="slideshow">
            <img src={images[imageIndex]} />
            <div className="buttonGroup">
            
                <button onClick={showPreviousImage} id="previousButton">Previous</button>
                <button onClick={showNextImage} id="nextButton">Next</button>
            
            </div>
        </section>
    )
}

export default SlideShow;