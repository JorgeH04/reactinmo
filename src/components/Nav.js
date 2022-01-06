import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (

<>

        <div id="preloader">
            <div id="status">&nbsp;</div>
       </div>
 
    <div class="header-connect">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-8  col-xs-12">
                    <div class="header-half header-call">
                        <p>
                            <span><i class="pe-7s-call"></i> +1 234 567 7890</span>
                            <span><i class="pe-7s-mail"></i> your@company.com</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-2 col-md-offset-5  col-sm-3 col-sm-offset-1  col-xs-12">
                    <div class="header-half header-social">
                        <ul class="list-inline">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-vine"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>        
 
    <nav class="navbar navbar-default ">
        <div class="container">
             <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                  <Link to="/">
                      <img src="assets/img/logo.png" alt=""/>
                  </Link>
                 
            </div>

             <div class="collapse navbar-collapse yamm" id="navigation">
                <div class="button navbar-right">
                    <button class="navbar-btn nav-button wow bounceInRight login" onclick=" window.open('register.html')" data-wow-delay="0.45s">Login</button>
                    <button class="navbar-btn nav-button wow fadeInRight" onclick=" window.open('submit-property.html')" data-wow-delay="0.48s">Submit</button>
                </div>
                <ul class="main-nav nav navbar-nav navbar-right">
                    <li class="dropdown ymm-sw " data-wow-delay="0.1s">
                        <a href="index.html" class="dropdown-toggle active" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Home <b class="caret"></b></a>
                        <ul class="dropdown-menu navbar-nav">
                            <li>
                                <a href="index-2.html">Home Style 2</a>
                            </li>
                            <li>
                                <a href="index-3.html">Home Style 3</a>
                            </li>
                            <li>
                                <a href="index-4.html">Home Style 4</a>
                            </li>
                            <li>
                                <a href="index-5.html">Home Style 5</a>
                            </li>

                        </ul>
                    </li>
                     


                    <li class="wow fadeInDown" data-wow-delay="0.2s"><a class="" href="properties.html"> <Link to="/rooms">Propiedades</Link></a></li>
                    <li class="wow fadeInDown" data-wow-delay="0.3s"><a class="" href="property.html">Property</a></li>
                   

                    <li class="wow fadeInDown" data-wow-delay="0.5s"><a href="contact.html">Contact</a></li>
                </ul>
            </div> 
        </div> 
    </nav>
     
   
   </>
    );
  }
}
