import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const Room = memo(({ room }) => {
  const { name, slug, images, price } = room;
  return (
 <>



                    

                             <div class="col-sm-6 col-md-4 p0">
                                    <div class="box-two proerty-item">
                                        <div class="item-thumb">
                                            <a href="property-1.html" ><img src={images[0] || defaultImg}/></a>
                                        </div>

                                        <div class="item-entry overflow">
                                            <h5><a href="property-1.html"> {name} </a></h5>
                                            <div class="dot-hr"></div>
                                            <span class="pull-left"><b> Area :</b> 120m </span>
                                            <span class="proerty-price pull-right"> $ {price}</span>
                                            <p  >  </p>
                                            <div class="property-icon">
                                                 
                                                <img src="assets/img/icon/bed.png"/>(5)|
                                                <img src="assets/img/icon/shawer.png"/>(2)|
                                                <img src="assets/img/icon/cars.png"/>(1)  
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                             







                              
                    

 </>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
