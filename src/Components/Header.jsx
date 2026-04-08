import '../Styles/Header.css'
const Header = ({ count, onCreate }) => {
  return (
    <div>
      <header className="header">
        <div className="header-brand">
          <div className="brand-dot" />
          <span className="brand-name">Postcraft</span>
        </div>

        <span className="header-meta">
          {count} {count === 1 ? "post" : "posts"}
        </span>

        <button className="btn-create" onClick={onCreate}>
          + New Post
        </button>
      </header>
    </div>
  );
};

export default Header;
