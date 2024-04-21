import Container from './Container.jsx';
import List from './List.jsx'

function App() {
  let groceries = ["bread", "butter", "tea", "Lime", "snacks"];


  return (
    <> 
      <Container>
      <List items={groceries}></List>
      </Container>

      <Container>
        hello world
      </Container>
    </>
  )
}

export default App
