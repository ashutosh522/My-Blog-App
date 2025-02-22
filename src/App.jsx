import './App.css'
import AddNewBlog from "./bloglist-example/addNewBlog"
import BlogList from "./bloglist-example/bloglist"
import CounterButton from "./counter-example/counter-button"
import CounterValue from "./counter-example/counter-value"
import NanoIDConcepts from "./nanoid-concepts/nanoid"

function App() {

  return (
    <>
      {/* <h3>Learning Redux Tool Kit</h3> */}
      {/* <CounterButton></CounterButton>
      <CounterValue></CounterValue> */}
      <AddNewBlog></AddNewBlog>
      <BlogList></BlogList>
      {/* <NanoIDConcepts></NanoIDConcepts> */}
    </>
  )
}

export default App
