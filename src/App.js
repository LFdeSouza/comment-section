import { useEffect, useState, createContext } from "react";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import Modal from "./components/Modal";
import jsonData from "./data.json";
export const UserContext = createContext(null);

function App() {
  //initialize localStorage
  if (!localStorage.getItem("commentSection")) {
    localStorage.setItem("commentSection", JSON.stringify(jsonData));
  }

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("commentSection"))
  );
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("commentSection", JSON.stringify(state));
  }, [state]);

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

  const addComment = (user, content, index, replyingTo) => {
    const comment = {
      id: Math.random(),
      createdAt: new Date(),
      content,
      score: 0,
      user: {
        image: { png: `../assets/images/avatars/image-${user.username}.png` },
        username: user.username,
      },
    };

    if (replyingTo) {
      const comments = state.comments;
      comments[index].replies.push(comment);
      setState({ ...state, comments: comments });
    } else {
      setState({ ...state, comments: [...state.comments, comment] });
    }
  };

  return (
    <UserContext.Provider value={state.currentUser}>
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
                addComment={addComment}
              />
            ))}
          <CommentForm addComment={addComment} />
        </div>
        {modal && <Modal />}
      </section>
    </UserContext.Provider>
  );
}

export default App;
