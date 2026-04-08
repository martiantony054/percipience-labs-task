import { Modal, Box } from "@mui/material";
import '../Styles/Modal.css'
const Confirm = ({ onConfirm, onCancel }) => {
  return (
    <Modal open={true} onClose={onCancel}>
      <Box className="modal">
        <h3>Delete Post?</h3>
        <div className="modal-buttons">
          
          <button className="btn-primary" onClick={onConfirm}>
            Yes
          </button>
          <button className="btn-secondary" onClick={onCancel}>
            No
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default Confirm;
