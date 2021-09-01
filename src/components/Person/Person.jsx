import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Person.scss';
import { PersonType } from '../../types';
import 'bootstrap/dist/css/bootstrap.css';

export const Person = ({ person }) => {
  const [newComment, setNewComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const addComment = () => {
    const comment = {
      id: uuidv4(),
      body: newComment,
    };

    setNewComment('');

    setCommentsList([comment, ...commentsList]);
  };

  useEffect(() => {
    const commentsFromStorage = JSON.parse(localStorage.getItem(person.name));

    if (commentsFromStorage) {
      setCommentsList(commentsFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage[person.name] = JSON.stringify(commentsList);
  }, [commentsList]);

  return (
    <div className="card" style={{ width: `${18}rem` }}>
      <div className="card-body">
        <h5 className="card-title">
          {person.name}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {`Birth year: ${person.birth_year}`}
        </h6>
      </div>

      <form
        className="new-comment-form"
        onSubmit={(event) => {
          event.preventDefault();
          addComment();
        }}
      >
        <div className="form-group">
          <label htmlFor="inputComment">New comment:</label>
          <textarea
            className="form-control"
            rows="3"
            id="inputComment"
            value={newComment}
            onChange={event => setNewComment(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add comment</button>
      </form>

      <h6
        className="card-subtitle text-muted"
        style={{ textAlign: 'center' }}
      >
        {`All comments: ${commentsList.length}`}
      </h6>
      <ul className="list-group list-group-flush">
        {commentsList.length > 0
          ? (
            <>
              {commentsList.map(comment => (
                <li
                  key={comment.id}
                  className="list-group-item"
                >
                  {comment.body}
                </li>
              ))}
            </>
          ) : (
            <li className="list-group-item">
              No comments
            </li>
          )}
      </ul>
    </div>
  );
};

Person.propTypes = {
  person: PersonType.isRequired,
};
