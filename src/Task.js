

function Tasks() {
  return (
    <div className="bg-white rounded-4 p-3">
  

     <div className="d-flex justify-content-between align-items-start mb-4 border-bottom">
    <div>
      <h3 className="fw-bold mb-1 fs-5">My Tasks</h3>
      <p className="text-muted mb-0">Items needing your attention</p>
    </div>

    <button className="btn btn-outline-primary rounded-circle">
      <i className="bi bi-plus"></i>
    </button>
  </div> 


 <div className="d-flex align-items-start gap-3 py-3 ">
    <input type="checkbox" className="form-check-input mt-1" />

    <div>
      <h5 className="fw-bold fs-6 mb-2">Review marketing assets</h5>

      <div className="d-flex flex-wrap gap-3">
        <span className="badge text-danger bg-danger-subtle">
          High Priority
        </span>

        <span className="text-muted">
          <i className="bi bi-calendar2 me-1"></i>
          Today
        </span>
      </div>
    </div>
  </div>



  <div className="d-flex align-items-start gap-3 py-3 ">
    <input type="checkbox" className="form-check-input mt-1" />

    <div>
      <h5 className="fw-bold fs-6 mb-2">Weekly sync with frontend</h5>

      <div className="d-flex flex-wrap gap-3">
        <span className="badge text-secondary bg-light">
       Normal
        </span>

        <span className="text-muted">
          <i className="bi bi-calendar2 me-1"></i>
          Today
        </span>
      </div>
    </div>
  </div>


  <div className="d-flex align-items-start gap-3 py-3 ">
    <input type="checkbox" className="form-check-input mt-1" />

    <div>
      <h5 className="fw-bold fs-6 mb-2">Update documentation</h5>

      <div className="d-flex flex-wrap gap-3">
        <span className="badge text-primary bg-primary-subtle">
          High Priority
        </span>

        <span className="text-muted">
          <i className="bi bi-calendar2 me-1"></i>
          Today
        </span>
      </div>
    </div>
  </div>


  <div className="d-flex align-items-start gap-3 py-3 ">
    <input type="checkbox" className="form-check-input mt-1" />

    <div>
      <h5 className="fw-bold fs-6 mb-2">Update documentation</h5>

      <div className="d-flex flex-wrap gap-3">
        <span className="badge text-danger bg-danger-subtle">
          High Priority
        </span>

        <span className="text-muted">
          <i className="bi bi-calendar2 me-1"></i>
          Today
        </span>
      </div>
    </div>
  </div>

  <button className="task-btn">+ create new task </button>


  </div>
  );
}

export default Tasks;