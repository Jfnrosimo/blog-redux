import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

const App = () => {
  return (
    <div>
      <PostsList />
      <AddPostForm />
    </div>
  );
};

export default App;
