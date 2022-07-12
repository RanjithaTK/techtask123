import Navbar from "./components/Navbar"
import MyForm from "./components/MyForm"
import MyPage from "./components/MyPage"
import Table from "./components/Table"
//

function App() {
  // const details = []
  // localStorage.setItem("myDetail", JSON.stringify(details))
  return (
    <div className="App">
      <Navbar />
      <MyForm />
      {/* <MyPage /> */}
    </div>
  )
}

export default App
