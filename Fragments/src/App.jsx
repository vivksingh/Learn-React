import "bootstrap/dist/css/bootstrap.min.css";
import styles from './item.module.css'
import React from "react";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
// div should not be used as a container for a react component because it creates an extra element in the dom.

function App() {
  const foodItems = ["dal", "roti", "fruits", "vegetables", "salad", "juice"];

  const handleOnClick = (item, event) => {
    // console.log(`${item} is being bought`);
    // console.dir(event);
  }

  const handleOnChange = (event) => {
    console.log(event.target.value)
  }

  return (
    //<div>
    //<>
    <React.Fragment>
    <Container>
      <h1>Healthy foods</h1>
      <FoodInput handleEvent={handleOnChange}></FoodInput>
      <ul className="list-group">

        {foodItems.map((item) =>{
          return (
            <li key = {item} className = "list-group-item">
              {item}
              <button type="button" className={`btn btn-info ${styles.button}`} 
              // onClick={()=>{ console.log(`buying ${item}`)}}
              onClick={(event) => handleOnClick(item, event)}
              >Buy</button>
            </li>
        )})};
        
      </ul>
      </Container>

      {/* <Container>
        <p>These are the foods that are healthy</p>
      </Container> */}
    </React.Fragment>
    //</>
    //</div>
  );
}

export default App;
