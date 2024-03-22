import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// div should not be used as a container for a react component because it creates an extra element in the dom.

function App() {
  const foodItems = ["dal", "roti", "fruits", "vegetables", "salad", "juice"];
  return (
    //<div>
    //<>
    <React.Fragment>
      <h1>Healthy foods</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
        ;
      </ul>
    </React.Fragment>
    //</>
    //</div>
  );
}

export default App;
