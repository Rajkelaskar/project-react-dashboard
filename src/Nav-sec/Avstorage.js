// const Avstorage=()=>{
//     return(

//         <div className="storage-card container text-center">
//             <span className="text-mute">Available storage</span>
//             <input type="range" min="0" max="100"/>
    
//             <h5 className="text-white">75.2 OUT OF 100GB</h5>
//             <button type="button" className="btn btn-primary" >Upagrade Pro</button>


//         </div>
//     )
// }
// export default Avstorage







const Avstorage = () => {
  const usedStorage = 75.2;
  const totalStorage = 100;

  const progress = (usedStorage / totalStorage) * 100;

  return (
    <div className="storage-card">

      <div className="storage-title">
        Available storage
      </div>

      <div className="storage-amount">
        <strong>{usedStorage} GB</strong> of {totalStorage} GB
      </div>

      <div className="progress">
        <div
          className="progress-value"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <button className="upgrade-button">
        Upgrade Pro
      </button>

    </div>
  );
};

export default Avstorage;