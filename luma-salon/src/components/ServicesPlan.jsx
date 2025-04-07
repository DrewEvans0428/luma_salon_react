import {useState, useEffect} from "react";
import axios from "axion";
import Service from "./Service";

const ServicesPlan = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{

        (async () => {
            const response = await axios.get("https://luma-salon-backend.onrender.com/");
            setServices(response.data);
        })();

    },[]);

    return (
        <div className="services-area">
            {services.map((service)=>(
                <Service
                Name={service.Name}
                Stylists={service.Stylists}
                Price={service.price}
                Description={service.Description}
                img_name={service.img_name}/>
            ))}
            </div>
    )
}

export default ServicesPlan;