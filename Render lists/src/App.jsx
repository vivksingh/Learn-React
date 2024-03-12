import List from './list'

function App() {
  const fruits = [{id : 1 ,name : "apple", calories : 95}, 
    {id : 2, name : "banana", calories : 45},
    {id : 3, name : "orange", calories: 54}, 
    {id : 4, name : "watermelon", calories: 102}, 
    {id : 5, name : "peach", calories : 43}, 
    {id : 6, name : "guava", calories : 103}
    ];

    const veges = [{id : 1 ,name : "brocolli", calories : 95}, 
    {id : 2, name : "carrot", calories : 45},
    {id : 3, name : "capsicum", calories: 54}, 
    {id : 4, name : "potato", calories: 102}, 
    {id : 5, name : "tomato", calories : 43}, 
    {id : 6, name : "onion", calories : 103}
    ];


  return (
    <>

      {veges.length > 0 ? <List items = {veges} category = "vegetables" /> : null};
      {veges.length > 0 && <List items = {fruits} category = "fruits" />}
    </>
  )
}

export default App
