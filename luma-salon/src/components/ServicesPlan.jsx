import {useState, useEffect} from "react";
import axios from "axios";
import Service from "./Service";
import "./css/Service.css";
import AddServicePlan from "./AddServicePlan";

const ServicesPlan = () => {
    const [services, setServices] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{

        (async () => {
            const response = await axios.get("https://luma-salon-backend.onrender.com/api/services");
            setServices(response.data);
        })();

    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("I'm in the close method")
        setShowAddDialog(false);
    }

    const updateServicePlans = (servicePlan) => {
        setServices((services)=>[...services, servicePlan]);
    }

    return (
        <>

        <div className="services-area">
            {services.map((service)=>(
                <Service
                key={service._id}
                Name={service.Name}
                Stylists={service.Stylists}
                pricing={service.pricing}
                Description={service.Description}
                img_name={service.img_name}/>
            ))}
            </div>
            <section id="add">
            <button id="add-service" onClick={openAddDialog}>+</button>
            </section>
{showAddDialog?(<AddServicePlan
                    closeAddDialog={closeAddDialog}
                    updateServicePlans={updateServicePlans}
                    /> ): ("")}

            </>
    )
}

export default ServicesPlan;