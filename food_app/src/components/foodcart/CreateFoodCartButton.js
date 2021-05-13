import React from 'react';
import {Link} from 'react-router-dom';
const CreateFoodCartButton= ()=>
{
    return(
     <React.Fragment>
          <Link to="/addFoodCart" className="btn btn-lg btn-info">Add FoodCart</Link> 
     </React.Fragment>
    );
}
export default CreateFoodCartButton;