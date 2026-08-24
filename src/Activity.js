const Activity=()=>{
  return (
    <div className="activity-box  ">
      <h3>Recent Activity</h3>
<div className="table-responsive">
      <table>
        <thead>
          <tr>
        
            <th className="text-muted text-uppercase fs-6">User</th>
            <th className="text-muted  text-uppercase fs-6">Action</th>
            <th className="text-muted  text-uppercase fs-6">Time</th>
            <th className="text-muted  text-uppercase fs-6 ">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
           
            <td><h6 className="user"><img src="/images/avatar1.png" ></img>Sarah Miller</h6>
              <span className="role">Design Team</span>
            </td>
            <td>Created project Brand Kit</td>
              <td>2 Min ago</td>
            <td>Completed</td>
          </tr>

          <tr>
            <td ><h6 className="user"><img src="/images/avatar2.png" ></img> Marc Evans</h6>
              <span className="role">Devops</span>
            </td>
            <td>Updated deployment scripts</td>
              <td>45 min ago</td>
            <td>Pending</td>
          </tr>

           <tr>
            <td>
              <h6 className="user"><img src="/images/brwn.png" ></img> Olivia Brown
                </h6>

                <span className="role">Designer</span>
              </td>
            <td>New user registration</td>
              <td>2 hr ago</td>
            <td>Completed</td>
          </tr>

          <tr>
            <td> <h6 className="user"><img src="/images/avatar3.png" ></img> James Wilson
                </h6><span className="role">Sales</span>
              </td>
            <td>Requested refund #8902</td>
              <td>5 hr ago</td>
            <td>Pending</td>
          </tr>

          


        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Activity;



