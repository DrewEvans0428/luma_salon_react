import React, {useState} from "react";

const AddServicePlan = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault();
        setResult("Sending ... ");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch("https://luma-salon-backend.onrender.com/api/services", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Service added succesfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateServicePlans(await response.json());
        } else{
            setResult("Error adding service");
        }

    }

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addToServer}>
                        <h3>Create New Property</h3>

                        <p>
                            <label htmlFor="Name">Service Name:</label>
                            <input type="text" id="Name" name="Name" required min="3"></input>
                        </p>

                        <p>
                            <label htmlFor="pricing">Price:</label>
                            <input type="text" id="pricing" name="pricing" required></input>
                        </p>

                        <p>
                            <label htmlFor="Description">Description:</label>
                            <input type="text" id="Description" name="Description" required></input>
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
                            <button id="submit-button" type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddServicePlan;