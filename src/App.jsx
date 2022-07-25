import Container from './layouts/Container'
import AppRoutes from './Routes'

function App() {
  return (
    <div className="App">
      <Container customClass='min-height'>
        <AppRoutes />
      </Container>
    </div>
  )
}

export default App