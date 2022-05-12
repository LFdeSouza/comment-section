import Comment from "./components/Comment";
import jsonData from "./data.json";

function App() {
  if (!localStorage.getItem("commentSection")) {
    localStorage.setItem("commentSection", JSON.stringify(jsonData));
  }
  const data = JSON.parse(localStorage.getItem("commentSection"));
  const comments = data.comments;

  return (
    <section className="min-w-screen min-h-screen bg-lightGray pt-8">
      {comments &&
        comments.map((comment) => (
          <Comment
            content={comment.content}
            createdAt={comment.createdAt}
            user={comment.user}
            score={comment.score}
            replies={comment.replies}
          />
        ))}
    </section>
  );
}

export default App;
