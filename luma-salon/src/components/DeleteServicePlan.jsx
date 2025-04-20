import React, { useState } from "react";

const DeleteServicePlan = (props) => {
    const [result, setResult] = useState("");

    const deleteServicePlan = async() => {
        const response = await fetch(`https://luma-salon-backend.onrender.com/api/services/${props._id}`,{
            method:"DELETE"
        });

        if(response.status === 200){
            setResult("Service deleted successfully");
            props.closeDeleteDialog();
            props.hideServicePlan();
        } else{
            setResult("Sorry, couldn't delete the service");
        }
    }

    return (
        <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick = {props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.Name}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteServicePlan}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
    )
}

export default DeleteServicePlan;