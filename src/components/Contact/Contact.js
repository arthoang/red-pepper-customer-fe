import React, { Component } from 'react';
import classes from './Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";


library.add(faPhoneAlt);
library.add(faMapMarkerAlt);
library.add(faEnvelope);

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
            
            <section className={classes.Section}>
                <div className="row" >
                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon className={classes.Icon} icon="map-marker-alt" />
                        <h3>Address</h3>
                        123 3 Ave S, Saskatoon, SK S7K 1L6 Canada
                    </div>

                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon className={classes.Icon} icon="phone-alt" />
                        <h3>Phone</h3>
                        <a href="tel:3064771977" className={classes.Call}>(306) 477-1977</a>
                    </div>

                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon className={classes.Icon} icon="envelope" />
                        <h3>Email</h3>
                        info@redpepper.com
                    </div>
                </div>


            </section>
            
            </React.Fragment>
        );
    }
}

export default Contact;