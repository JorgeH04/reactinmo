import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
//import RoomsFilter from "./RoomsFilter";
import RoomsFilter from "./Filter";
import RoomsList from "./HousesList";

function HouseContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
     <div class="properties-area recent-property" >
        <div class="container">  
          <div class="row">

 
      <RoomsFilter rooms={rooms} />
     

      <RoomsList rooms={sortedRooms} />
    
 


        </div>
      </div>
    </div>
    </>
  );
}

export default withRoomConsumer(HouseContainer);


