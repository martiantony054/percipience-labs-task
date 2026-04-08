const STORAGE_KEY = "crud_posts";

export const generateId = () =>
  `post_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

export const loadPosts = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

export const savePosts = (posts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};