


const Search = () => {
  return (
    <div>
    <div className="d-lg-flex justify-content-evenly">
      
      <div className="position-relative w-50 mt-3">
        <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 "></i>

        <input
          type="text"
          className="search form-control ps-5 "
          placeholder="Search anything..."
        />
      </div>

      <button className="d-none d-sm-none d-md-none btn btn-primary btn-sm d-lg-flex align-items-center btn-3">
  <i className="bi bi-plus me-2"></i>
  Quick Actions
</button>

    </div>
    {/* <div className=" d-lg-none">
      <Avatar/>
    </div> */}
    </div>
  );
};

export default Search;