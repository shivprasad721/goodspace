import React from 'react';
import './Navbar.css'
import Logo from '../images/logo.png'
import Demo from '../images/demo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faCommentAlt,faComment} from '@fortawesome/free-regular-svg-icons';
import { faCertificate,faHSquare} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const Navbar =()=> {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light col-md-12">
        <div class="container">
            <img src={Logo} className="gs-logo"/>
            <a class="navbar-brand brandname" href="#">goodspace</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="example d-flex" action="action_page.php">
              <input type="text" placeholder="Search.." name="search"/>
              <button type="submit">
              <FontAwesomeIcon icon={faSearch} size="2x"/>
              </button>
            </form>
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                <div className="icon">
                    <FontAwesomeIcon icon={faCommentAlt} size="2x" />
                  </div>
                  Feedback
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                <div className="icon">
                    <FontAwesomeIcon icon={faHSquare} size="2x" />
                  </div>
                  Hire
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                <div className="icon">
                    <FontAwesomeIcon icon={faCertificate} size="2x" />
                  </div>
                  Try Premium
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                <div className="icon">
                    <FontAwesomeIcon icon={faBell} size="2x" />
                  </div>
                  Notifications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <div className="icon">
                    <FontAwesomeIcon icon={faComment} size="2x" />
                  </div>
                  Message                  
                </a>
              </li>
              <li class="nav-item icon-user">
                <a class="nav-link active " aria-current="page" href="#">
                  <img src={Demo} className="rounded-circle"/>
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
}

export default Navbar;