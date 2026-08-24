const Menu = ({ onMenuClick }) => {
  return (
    <div>
      <button onClick={onMenuClick} className="border-0 bg-transparent">
        <i className="bi bi-list fs-2"></i>
      </button>
    </div>
  );
};

export default Menu;