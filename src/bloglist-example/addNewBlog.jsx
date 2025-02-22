import { useSelector, useDispatch } from "react-redux";
import { handleInputChange, handleFormSubmit } from "../store/slices/blogList"

function AddNewBlog() {

  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();
  //console.log(blog);

  function onChangeInput(event) {
    dispatch(handleInputChange({
      [event.target.name]: event.target.value
    }))
  }

  function addTodo(event) {
    event.preventDefault();
    dispatch(handleFormSubmit())
  }

  return (
    <>

      <header className="blog-header py-5">
        <h1>Welcome to BlogZone</h1>
        <p>Sharing insights and ideas on technology, design, and development.</p>
      </header>

      <form onSubmit={addTodo}>

        <div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Title:</span>
            <input
              type="text" class="form-control" placeholder="Enter blog title..." aria-label="Username" aria-describedby="basic-addon1"
              name="title"
              id="title"
              onChange={onChangeInput}
              value={blog.formData.title} />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Description:</span>
            <input type="text" class="form-control" placeholder="Enter blog description..." aria-label="Username" aria-describedby="basic-addon1"
              name="description"
              id="description"
              onChange={onChangeInput}
              value={blog.formData.description} />
          </div>
          <button type="submit"  class="btn btn-success"  style={{marginBottom:'30px'}}>Save Blog</button>
        </div>

      </form>
    </>
  )
}
export default AddNewBlog;