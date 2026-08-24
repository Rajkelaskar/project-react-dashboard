// const Avatar = () => {
//   return (
//     <div className="d-flex align-items-center justify-content-end gap-2 mt-3">
//       <i className="bi bi-bell fs-4"></i>


//       <div className="p-2"> 
//       <h6 className="mb-0 user">
      
//         Alex Johnson
//           <img src="/images/avatarbt.png "></img>
//       </h6>
      
//       </div>
      
//     </div>
//   );
// };

// export default Avatar;

const Avatar = () => {
  return (
    <div className="d-flex align-items-center justify-content-end gap-2 mt-3">

      <i className="bi bi-bell fs-4"></i>

      <div className="p-2">
        <h6 className="mb-0 user">

          {/* 768px खाली name hide */}
          <span className="d-none d-md-inline">
            Alex Johnson
          </span>

          <img
            src="/images/avatarbt.png"
            alt="Avatar"
            className="avatar-img"
          />

        </h6>
      </div>

    </div>
  );
};

export default Avatar;