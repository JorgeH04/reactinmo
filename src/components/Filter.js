import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    search
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));



  
  return (
      <>


              <div class="col-md-3 p0 padding-top-40">
                    <div class="blog-asside-right pr0">
                        <div class="panel panel-default sidebar-menu wow fadeInRight animated" >
                            <div class="panel-heading">
                                <h3 class="panel-title">Smart search</h3>
                            </div>
                            <div class="panel-body search-widget">
                                <form action="" class=" form-inline"> 
                                    <fieldset>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <input 
                                                  type="text" 
                                                  name="search"
                                                  value={search}
                                                  onChange={handleChange}
                                                  class="form-control" 
                                                  placeholder="Key word"
                                                  />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <div class="row">
                                            
                                            <div class="col-xs-12">

                                                <select id="basic" class="selectpicker show-tick form-control"
                                                  name="type"
                                                  id="type"
                                                  onChange={handleChange}
                                                  className="form-control"
                                                  value={type}
                                                >
                                                  {types}
                                                


                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset class="padding-5">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <label for="price-range">Price range ($):</label>
                                                <input 
                                                            type="range"
                                                            name="price"
                                                            min={minPrice}
                                                            max={maxPrice}
                                                            id="price"
                                                            value={price}
                                                            onChange={handleChange}
                                                            className="form-control"

                                              
                                                /><br />
                                                <b class="pull-left color">2000$</b> 
                                                <b class="pull-right color">100000$</b>                                                
                                            </div>
                                                                                    
                                        </div>
                                    </fieldset>  




                                   

                                    <fieldset class="padding-5">
                                        <div class="row">
                                            <div class="col-xs-6"> 
                                                <div class="checkbox">
                                                    <label> 
                                                        <input 
                                                         type="checkbox"
                                                         name="pets"
                                                         checked={pets}
                                                         onChange={handleChange}
                                                        /> 
                                                        Swimming</label>
                                                </div>
                                            </div>  
                                            <div class="col-xs-6"> 
                                                <div class="checkbox">
                                                    <label> 
                                                        <input 
                                                                      type="checkbox"
                                                                      name="breakfast"
                                                                      id="breakfast"
                                                                      checked={breakfast}
                                                                      onChange={handleChange}
                                                        /> 
                                                        2 Stories 
                                                    </label>
                                                </div>
                                            </div>  
                                        </div>
                                    </fieldset>

                                  
 

                                                                       
                                </form>
                            </div>
                        </div>

                        <div class="panel panel-default sidebar-menu wow fadeInRight animated">
                            
                        </div>
                    </div>
                    </div>


      </>
  
  
  );
};

export default RoomsFilter;
