const Dashboard = () => {
    return (

        <div className="d-md-flex justify-content-between align-items-center">


            <div className=" ">
                <h1 className="fw-medium fs-2">Dashboard Overview</h1>
                <span className="text-mute " >Welcome back, here's what's happening with your workspace.</span>
            </div>
            <div className="exp">
                <button className="btn bg-white border px-2 m-0">
                    <i className="bi bi-download me-2"></i>
                    Export Report
                </button>
            </div>




        </div>
    )
}
export default Dashboard