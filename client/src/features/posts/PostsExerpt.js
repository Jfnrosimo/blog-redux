import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";

const PostsExerpt = ({ post }) => {
  return (
    <article className="border-2 border-zinc-800 my-2 p-1">
      <h3 className="text-xl font-semibold underline capitalize">
        {post.title}
      </h3>
      <p>{post.body.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButtons post={post} />
    </article>
  );
};

export default PostsExerpt;
