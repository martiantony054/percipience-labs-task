import '../Styles/Default.css'

const Default = ({ onCreate }) => {
  return (
    <div>
      <div className="empty-state">
        <div className="empty-icon">✦</div>
        <h2>No posts yet</h2>
        <p>Start crafting your first post.</p>
        <button className="btn-create" onClick={onCreate}>
          + Create First Post
        </button>
      </div>
    </div>
  );
};

export default Default;
