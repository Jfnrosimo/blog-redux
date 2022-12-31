import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

const App = () => {
  return (
    <div>
      <main className="p-4">
        <AddPostForm />
        <PostsList />
      </main>
    </div>
  );
};

export default App;
