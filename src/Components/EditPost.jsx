import { Modal, Box } from "@mui/material";
import '../Styles/Modal.css'
const EditPost = ({ post, onClose, onEdit }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Box className="modal">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className="modal-buttons">
          <button className="btn-primary" onClick={onEdit}>Edit</button>
          <button className="btn-danger" onClick={onClose}>Close</button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditPost;
