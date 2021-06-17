import React from 'react';
import "./style.css";
import GSCard from './GSCard'
import Demo2 from '../images/demo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate,faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const Landingpage =()=>{
    return(
        <>
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col col-xs-12 co6 col-md-2 pb-3 ">
                        <GSCard/>
                        <div className="card text-card">
                            <p ><FontAwesomeIcon icon={faCertificate} size="1x"/> Try Premium Features</p>
                        </div>
                        <div className="card text-card">
                            <p ><FontAwesomeIcon icon={faCheckCircle} size="1x" color="green"/> Available immediately</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6  col-md-3">
                        <GSCard/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 feedback">
                        <div class="feedback-head">Give Feedback<spam className="text-primary"> Binoy Pratap Singh</spam></div>
                        <div className="flex-view-about ">
                            <div className="">
                                <h4>Your feedback is <spam className="text-primary">confidential</spam></h4>
                                <p className="text-secondary">
                                    Your Feedback will be anonymous and it won't be <br/>shared with anyone.
                                </p>
                                <button type="button" class="btn btn-primary px-5">Okey</button>
                            </div>
                            <div className="demoimage ">
                                <img src={Demo2}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landingpage;