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
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: null,
    commentArrIndex: null,
    replyArrIndex: null,
  });

  useEffect(() => {
    localStorage.setItem("commentSection", JSON.stringify(state));
  }, [state]);

  const updateScore = (id, commentArrIndex, operation) => {
    if (id === state.comments[commentArrIndex].id) {
      const newComments = state.comments;
      operation === "add"
        ? newComments[commentArrIndex].score++
        : newComments[commentArrIndex].score--;
      setState({
        ...state,
        comments: newComments,
      });
    } else {
      const newComments = state.comments;
      newComments[commentArrIndex].replies.map((reply) =>
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

  const addComment = (user, content, commentArrIndex, replyingTo) => {
    const comment = {
      id: Math.random(),
      createdAt: new Date(),
      content,
      score: 0,
      replies: [],
      user: {
        image: { png: `../assets/images/avatars/image-${user.username}.png` },
        username: user.username,
      },
      replyingTo,
    };

    if (commentArrIndex != null) {
      const comments = state.comments;
      comments[commentArrIndex].replies.push(comment);
      setState({ ...state, comments });
    } else {
      setState({ ...state, comments: [...state.comments, comment] });
    }
  };

  const deleteComment = (id, commentArrIndex) => {
    if (id !== state.comments[commentArrIndex].id) {
      const comments = state.comments;
      comments[commentArrIndex].replies = comments[
        commentArrIndex
      ].replies.filter((item) => item.id !== id);
      setState({ ...state, comments });
    } else {
      console.log(id, commentArrIndex);
      const comments = state.comments.filter((item) => item.id !== id);
      setState({ ...state, comments });
    }
    setDeleteModal({
      isOpen: false,
      id: null,
      commentArrIndex: null,
      replyArrIndex: null,
    });
  };

  const editComment = (content, commentArrIndex, replyArrIndex) => {
    console.log(content);
    const comments = state.comments;
    if (replyArrIndex) {
      comments[commentArrIndex].replies[replyArrIndex].content = content;
      console.log(comments);
      setState({ ...state, comments });
    } else {
      comments[commentArrIndex].content = content;
      console.log(comments);
      setState({ ...state, comments });
    }
  };

  return (
    <UserContext.Provider value={state.currentUser}>
      <section className={`min-w-screen min-h-screen bg-lightGray py-8`}>
        <div className="mx-auto max-w-2xl">
          {state.comments &&
            state.comments.map((comment, index) => (
              <Comment
                key={comment.id}
                commentArrIndex={index}
                comment={comment}
                updateScore={updateScore}
                addComment={addComment}
                onDelete={setDeleteModal}
                editComment={editComment}
              />
            ))}
          <CommentForm addComment={addComment} />
        </div>
        {deleteModal.isOpen && (
          <Modal
            deleteComment={deleteComment}
            closeModal={setDeleteModal}
            commentData={deleteModal}
          />
        )}
      </section>
    </UserContext.Provider>
  );
}

export default App;
