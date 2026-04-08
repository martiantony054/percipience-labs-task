import '../Styles/Card.css'
import '../Styles/Modal.css'

const Card = ({ post, isDeleting, onView, onEdit, onDelete }) => {
  return (
    <div
      className={`post-card${isDeleting ? " deleting" : ""}`}
      onClick={onView}
    >
      <div className="post-img-wrap">
        {post.image ? (
          <img src={post.image} alt={post.title} />
        ) : (
          <div className="post-img-placeholder">◆</div>
        )}
      </div>

      <div className="card-body">
        <div className="card-title">{post.title}</div>
        <div className="card-desc">{post.description}</div>
      </div>

      <div className="modal-buttons">
        <button className="btn-primary" onClick={onEdit}>Edit</button>
        <button className="btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
