import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="m-3 p-3 bg-cyan-500">
      <h2 className="text-3xl font-semibold text-center">Add a New Post</h2>
      <form className="flex flex-col">
        <div className="flex justify-end my-2">
          <label className="flex-1" htmlFor="postTitle">
            Post Title:
          </label>
          <input
            className="w-3/4"
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <div className="flex justify-end my-2">
          <label className="flex-1" htmlFor="postAuthor">
            Author:
          </label>
          <select
            className="w-3/4"
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div className="flex justify-end my-2">
          <label className="flex-1 align-top" htmlFor="postContent">
            Content:
          </label>
          <textarea
            className="w-3/4"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
        </div>
        <button
          className="my-2 bg-blue-500 w-2/4 self-center p-1 rounded"
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
