import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "./Components/Container";
// div should not be used as a container for a react component because it creates an extra element in the dom.

function App() {
  const foodItems = ["dal", "roti", "fruits", "vegetables", "salad", "juice"];
  return (
    //<div>
    //<>
    <React.Fragment>
    <Container>
      <h1>Healthy foods</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
        ;
      </ul>
      </Container>

      <Container>
        <p>These are the foods that are healthy</p>
      </Container>
    </React.Fragment>
    //</>
    //</div>
  );
}

export default App;
