import "./css/Service.css";

const Service = (services)  => {
    return (
   <div className="service">
      <h2>{services.Name}</h2>
            <div id="headspa-image">
                <img src={"http://localhost:3001/" + services.img_name} alt={services.name} />
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