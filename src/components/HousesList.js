import React from "react";
import Room from "./House";
const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
  
<>



      <div class="col-md-9  pr0 padding-top-40 properties-page">
                    <div class="col-md-12 clear"> 
                        <div class="col-xs-10 page-subheader sorting pl0">
                            

                             
                        </div>

                        <div class="col-xs-2 layout-switcher">
                            <a class="layout-list" href="javascript:void(0);"> <i class="fa fa-th-list"></i>  </a>
                            <a class="layout-grid active" href="javascript:void(0);"> <i class="fa fa-th"></i> </a>                          
                        </div> 
                    </div>






 <div class="col-md-12 clear"> 
       <div id="list-type" class="proerty-th">
                        



        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
        
          </div>
        </div> 




                        </div>


   </>    

  );
};

export default RoomsList;










