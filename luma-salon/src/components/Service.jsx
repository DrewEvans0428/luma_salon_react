import "./css/Service.css";

const Service = (services)  => {
    return (
   <div className="service">
      <h2>{services.Name}</h2>
            <div id="headspa-image">
                <img src={"https://luma-salon-backend.onrender.com/" + services.img_name} />
            </div>
            <h4>
                {services.pricing}
            </h4>
            <p>
              {services.Description}
            </p>
    </div>
    )
}

export default Service;