import React from "react";
import serviceSect from "./ServiceSection.module.css"

const ServiceSection = () =>
{
    return (
        <section className={serviceSect.sectionContainer}>
            <div>
                <img src="" alt="" />
                <h2>This is a service</h2>
                <h3>This is a description of the service</h3>
            </div>
            <div>
                <img src="" alt="" />
                <h2>This is a service</h2>
                <h3>This is a description of the service</h3>
            </div>
            <div>
                <img src="" alt="" />
                <h2>This is a service</h2>
                <h3>This is a description of the service</h3>
            </div>
            <div>
                <img src="" alt="" />
                <h2>This is a service</h2>
                <h3>This is a description of the service</h3>
            </div>
        </section>
    );
}

export default ServiceSection;