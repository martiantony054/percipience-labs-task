import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Toast from "./Components/Toast";
import { loadPosts, savePosts, generateId } from "./Utils/Storage";
import Default from "./Components/Default";
import CreatePost from "./Components/CreatePost";
import Card from "./Components/Card";
import ViewPost from "./Components/EditPost";
import Confirm from "./Components/Confirm";

const EMPTY_FORM = { title: "", description: "", image: "" };

const App = () => {
  const [posts, setPosts] = useState(loadPosts);
  const [modal, setModal] = useState(null);
  const [deleteAnim, setDeleteAnim] = useState(null);
  const [toast, setToast] = useState(null);
  const [viewPost, setViewPost] = useState(null);

  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const openCreate = () =>
    setModal({ mode: "create", data: { ...EMPTY_FORM } });

  const openEdit = (post) => setModal({ mode: "edit", data: { ...post } });

  const closeModal = () => setModal(null);

  const handleSave = (formData) => {
    if (modal.mode === "create") {
      const newPost = {
        ...formData,
        id: generateId()
      };
      setPosts((prev) => [newPost, ...prev]);
      showToast("Post created!");
    } else {
      setPosts((prev) =>
        prev.map((p) => (p.id === formData.id ? formData : p)),
      );
      showToast("Post updated!");
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setDeleteAnim(id);
    setTimeout(() => {
      setPosts((prev) => prev.filter((p) => p.id !== id));
      setDeleteAnim(null);
      showToast("Post deleted.", "danger");
    }, 350);
  };

  return (
    <div className="app">
      <Header count={posts.length} onCreate={openCreate} />

      <main className="main">
        {posts.length === 0 ? (
          <Default onCreate={openCreate} />
        ) : (
          <div className="grid">
            {posts.map((post) => (
              <Card
                key={post.id}
                post={post}
                isDeleting={deleteAnim === post.id}
                onView={() => setViewPost(post)}
                onEdit={(e) => {
                  e.stopPropagation();
                  openEdit(post);
                }}
                onDelete={(e) => {
                  e.stopPropagation();
                  setDeleteAnim("confirm_" + post.id);
                }}
              />
            ))}
          </div>
        )}
      </main>

      {modal && (
        <CreatePost
          mode={modal.mode}
          initialData={modal.data}
          onSave={handleSave}
          onClose={closeModal}
          showToast={showToast}
        />
      )}

      {viewPost && (
        <ViewPost
          post={viewPost}
          onClose={() => setViewPost(null)}
          onEdit={() => {
            setViewPost(null);
            openEdit(viewPost);
          }}
        />
      )}

      {deleteAnim?.startsWith("confirm_") && (
        <Confirm
          onConfirm={() => {
            const id = deleteAnim.replace("confirm_", "");
            setDeleteAnim(null);
            handleDelete(id);
          }}
          onCancel={() => setDeleteAnim(null)}
        />
      )}

      {toast && <Toast toast={toast} />}
    </div>
  );
};
export default App;
