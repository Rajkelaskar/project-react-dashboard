import Avstorage from "./Avstorage";


const Nav=()=>{
    return(
      <div>
        <div className="nav d-flex flex-column vh-100 p-3 ">
          <div className="p-2">
          <h6 className="text-muted">MENU</h6>
         
       
          <ul className="
          d-lg-flex flex-column gap-3 list-unstyled click">
        <li ><i class="bi bi-columns-gap me-2 N-one"></i>Dashboard</li>
        <li><i class="bi bi-people bg-none N-two me-2"></i>Users</li>
        <li >
          
          <i class="bi bi-suitcase-lg me-2 N-three"></i>Projects</li>
        <li ><i class="bi bi-check2-square N-four me-2"></i>Tasks</li>
        </ul>

        </div>

      <div className="p-2">
        <h6 className="text-muted  ">SYSTEM</h6>
      <ul>
        <li className="menu  list-unstyled"><i class="bi bi-gear me-2"></i>Settings</li>
      </ul>
      </div>

      <div className="text-white av mt-auto  "> <Avstorage /></div>
        </div>

        <div>
          

        </div>
        </div>
    )
};
export default Nav

