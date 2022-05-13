import { useState } from "react";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import Modal from "./components/Modal";
import jsonData from "./data.json";

function App() {
  //initialize localStorage
  if (!localStorage.getItem("commentSection")) {
    localStorage.setItem("commentSection", JSON.stringify(jsonData));
  }
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("commentSection"))
  );
  const [modal, setModal] = useState(false);

  const updateScore = (id, index, operation) => {
    if (id === state.comments[index].id) {
      const newComments = state.comments;
      operation === "add"
        ? newComments[index].score++
        : newComments[index].score--;
      setState({
        ...state,
        comments: newComments,
      });
    } else {
      const newComments = state.comments;
      newComments[index].replies.map((reply) =>
        reply.id === id && operation === "add"
          ? reply.score++
          : reply.id === id && operation === "subtract"
          ? reply.score--
          : reply
      );
      setState({
        ...state,
        comments: newComments,
      });
    }
  };

  return (
    <section
      className={`min-w-screen min-h-screen ${
        modal && "max-h-screen overflow-y-hidden"
      } bg-lightGray py-8`}
    >
      <div className="mx-auto max-w-2xl">
        {state.comments &&
          state.comments.map((comment, index) => (
            <Comment
              key={comment.id}
              index={index}
              comment={comment}
              updateScore={updateScore}
            />
          ))}
        <CommentForm user={state.currentUser} />
      </div>
      {modal && <Modal />}
    </section>
  );
}

export default App;
