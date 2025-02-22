import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogOnInitialLoad, handleDelBtn } from "../store/slices/blogList";  // Ensure `setEditBlog` action exists in your slice

function BlogList() {

  const { blog } = useSelector((state) => state);
  const { blogList } = blog;
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setBlogOnInitialLoad({
      bloglist: JSON.parse(localStorage.getItem('bloglist')) || []
    }));
  }, [dispatch]);

  function removeBlog(blogid) {
    dispatch(handleDelBtn({
      currentBlogId: blogid
    }));
  }

 
  return (
    <>
      {/* Blog Post Grid */}
      <div className="container">
        <div className="row g-4">
          {blogList?.length > 0 ? blogList.map((item) =>
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p>Blog ID: {item.id}</p>
                  <p className="card-text">{item.description}</p>
                                              
                  {/* Delete Button */}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => removeBlog(item.id)} // Trigger delete
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : <h3 style={{marginTop:'50px'}}>No blogs to render! Please add one... </h3>}
        </div>
      </div>
    </>
  );
}

export default BlogList;
