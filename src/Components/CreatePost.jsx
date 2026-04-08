import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../Styles/Modal.css";
const CreatePost = ({ mode, initialData, onSave, onClose , showToast }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) {
      showToast("Title is required", "danger");
      return false;
    }

    if (!form.description.trim()) {
      showToast("Description is required", "danger");
      return false;
    }

    if (!form.image) {
      showToast("Image is required", "danger");
      return false;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onSave(form);
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box className="modal">
        <h2>{mode === "create" ? "New Post" : "Edit Post"}</h2>

        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        />

        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="description"
        />

        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;

            const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

            if (!allowedTypes.includes(file.type)) {
              alert("Only PNG and JPG images are allowed");
              return;
            }
            setForm({
              ...form,
              image: URL.createObjectURL(file),
            });
          }}
        />
        <div className="modal-buttons">
          <button className="btn-primary" onClick={handleSubmit}>
            {mode === "create" ? "Create" : "Update"}
          </button>
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default CreatePost;
