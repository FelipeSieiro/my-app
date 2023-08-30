// import { Button } from "./components/Button/Button"
// import { Card } from "./components/Card/Card"
// import { Counter } from "./components/Counter/Counter"
// import { Form } from "./components/Form/Form"
// import { Header } from "./components/Header/Header"
// import { AddressForm } from "./components/AddressForm/AddressForm"
import { Address } from "./Pages/Address/Address"

function App() {
const user = {
  name: "Felipe", id: 1293
}

const products = [
  { id: 10, name: "Maça", value: 10},
  { id: 20, name: "Banana", value: 8},
  { id: 30, name:"Mamão", value: 7}
]

  return (
    <>
      {/* <Header userName={user.name} />
      <Button danger>Cancelar</Button>
      <Button sucess>Salvar</Button>
      {products.map((product) => (
        <Card key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.value}</p>
          <Button>Adicionar</Button>
        </Card>
      ))}
      <Counter start ={100} step ={100}/> */}
      {/* <Form /> */}
      <Address />
    </>
  )
}

export default App