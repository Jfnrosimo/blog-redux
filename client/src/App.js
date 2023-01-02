import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="bg-slate-400 overflow-hidden">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
