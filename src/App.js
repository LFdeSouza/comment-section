import { useState } from "react";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import Modal from "./components/Modal";
import jsonData from "./data.json";

function App() {
  const [modal, setModal] = useState(false);

  if (!localStorage.getItem("commentSection")) {
    localStorage.setItem("commentSection", JSON.stringify(jsonData));
  }
  const data = JSON.parse(localStorage.getItem("commentSection"));
  const comments = data.comments;

  return (
    <>
      <section
        className={`min-w-screen min-h-screen ${
          modal && "max-h-screen overflow-y-hidden"
        } bg-lightGray py-8`}
      >
        {modal && <Modal />}
        <div className="mx-auto max-w-2xl">
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
          <CommentForm user={data.currentUser} />
        </div>
      </section>
    </>
  );
}

export default App;
