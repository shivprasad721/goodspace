import React from 'react';
import Demo from '../images/demo.jpg';
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';


const GSCard =()=>{
    return(
        <>
            <div className="card">
                <div className="card-head">
                    <img src={Demo} className="card-img rounded-circle" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">John L. Glenn</h5>
                    <p className="card-date fw-light">26, New Delhi</p>
                    <p className="card-text text-secondary"><FontAwesomeIcon icon={faCircle} size="1x" color="green"/> Available immediately</p>
                </div>
                <div className="card-footer">
                    <h5 className="skill">Skills</h5>
                    <div className="flex-view-skill">
                        <button type="button " className="btn btn-success m-1  rounded-pill">Python</button>
                        <button type="button" className="btn btn-success m-1  rounded-pill">SQL</button>
                        <button type="button" className="btn btn-success m-1  rounded-pill">SQL</button>
   
                    </div>
                    <div className="flex-view">
                        <h5>Type of work</h5>
                        <FontAwesomeIcon icon={faClock} size="1x" />
                    </div>
                    <p className="wfh">Work From Home</p>
                    <div className="flex-view">
                        <h5>Compenstaion</h5>
                    </div>
                    <div className="flex-view">
                        <p>Per Month</p>
                        <p>25k - 50k</p>
                    </div>
                    <div className="flex-view">
                        <p>Per Hours</p>
                        <p>200 - 300</p>
                    </div>
                </div>
            </div>
        </>
    );   
}

export default GSCard;