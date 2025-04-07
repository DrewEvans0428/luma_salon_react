import "./css/Service.css";

const Service = (services)  => {
    return (
   <div className="service">
      <h2>{services.Name}</h2>
            <div id="headspa-image">
                <img src={"http://localhost:3001/images/" + services.img_name} alt={services.name} />
            </div>
            <h4>
                {services.Stylists}
            </h4>
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