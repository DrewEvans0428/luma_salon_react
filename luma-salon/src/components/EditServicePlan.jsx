import React, { useState } from "react";

const EditServicePlan = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    }
    
    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(`https://luma-salon-backend.onrender.com/api/services/${props._id}`,{
            method:"PUT",
            body:formData
        });

        if(response.status === 200){
            setResult("Service added successfully");
            event.target.reset();
            props.closeEditDialog();
            props.editServicePlan(await response.json());
        }
        else{
            setResult("Error editing the services");
        }
    }

    return(
        <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="Name ">Service Name:</label>
              <input
                type="text"
                id="Name"
                name="Name"
                defaultValue={props.Name}
                required
              />
            </p>
            <p>
              <label htmlFor="size">Pricing:</label>
              <input
                type="text"
                id="pricing"
                name="pricing"
                defaultValue={props.pricing}
                required
              />
            </p>
            <p>
              <label htmlFor="Description">Description</label>
              <input
                type="Text"
                id="Description"
                name="Description"
                defaultValue={props.Description}
                required
              />
            </p>
            <section className="columns">
                    <div>
                        <p id="img-prev-section">
                            {prevSrc!=""?
                            (<img id="img-prev" src={prevSrc}></img>):
                            ("")
                            }
                        </p>
                    </div>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                    </p>
                </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
    )
}

export default EditServicePlan;