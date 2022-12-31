import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);
  console.log(users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section className="border border-zinc-800 p-4">
      <h2 className="text-3xl text-center font-bold">Add a New Post</h2>
      <form className="mt-2 flex flex-col">
        <div className="p-2">
          <label className="w-1/4 inline-block" htmlFor="postTitle">
            Post Title:
          </label>
          <input
            className="border border-zinc-800 w-3/4"
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <div className="p-2">
          <label className="w-1/4 inline-block" htmlFor="postAuthor">
            Author:
          </label>
          <select
            className="border border-zinc-800 w-3/4"
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div className="p-2">
          <label className="w-1/4 inline-block align-top" htmlFor="postContent">
            Content:
          </label>
          <textarea
            className="border border-zinc-800 w-3/4"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
        </div>
        <button
          className="border bg-orange-400 w-1/4 self-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm px-1 text-white"
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
