import React from "react";
import serviceSect from "./ServiceSection.module.css"
import { serviceInfo } from "./ServiceSectionData";

const ServiceSection = () =>
{
    return (
        <section className={serviceSect.sectionContainer}>

            {serviceInfo.map((item) =>
            {
                return (
                    <div className={serviceSect.serviceDiv}>
                        <img src={item.img} alt="" />
                        <h2>{item.serviceName}</h2>
                        <h3>{item.serviceDescription}</h3>
                    </div>
                )
            })}
            
        </section>
    );
}

export default ServiceSection;