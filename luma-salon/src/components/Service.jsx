import "./css/Service.css";
import React, {useState} from "react";
import EditServicePlan from "./EditServicePlan";
import DeleteServicePlan from "./DeleteServicePlan";

const Service = (props)  => {
    const [servicePlan, setServicePlan] = useState(props);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showServices, setShowServices] = useState(true);

    const openEditDialog = () => {
        setShowEditDialog(true);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    }

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    }

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    }

    const hideServicePlan = () => {
        setShowServices(false);
    }

    const editServicePlan = (service) => {
        setServicePlan(service);
    }

    return (
        <>
         {showServices?(
        <div>
            {showDeleteDialog?(
              <DeleteServicePlan
              Name={servicePlan.Name}
              _id={servicePlan._id}
              closeDeleteDialog = {closeDeleteDialog}
              hideServicePlan = {hideServicePlan}
            />
            ):("")}
            
            {showEditDialog?(
               <EditServicePlan
               _id={servicePlan._id}
               Name={servicePlan.Name}
               pricing={servicePlan.Pricing}
               Description={servicePlan.Description}
               img_name={servicePlan.img_name}
               closeEditDialog = {closeEditDialog}
               editServicePlan = {editServicePlan}
             />
            ):("")
            }
        
           
        
   <div className="service">
      <h2>{servicePlan.Name}</h2>
      <section id="change-buttons">
                  <a href="#" onClick={openEditDialog} >
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                  </a>
      </section>
            <div id="headspa-image">
                <img src={"https://luma-salon-backend.onrender.com/" + servicePlan.img_name} alt={servicePlan.Name} />
            </div>
            <h4>
                {servicePlan.pricing}
            </h4>
            <p>
              {servicePlan.Description}
            </p>
</div>
    </div>
    ):("")}
    </>
    )
}

export default Service;