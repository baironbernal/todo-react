import AddTodoForm from "../components/AddTodoForm"
import TodoList from "../components/TodoList"
import Footer from "../components/footer/Footer"

function Home() {
  return (
    <>
      <div className="header"></div>
        <main>
        <div className="content">
            <h2 className="content_title">TODO</h2>
        </div>

        <AddTodoForm/>
        <TodoList/>
        <Footer/>
        </main>
    </>
  )
}

export default Home
