import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Person.scss';
import classNames from 'classnames';
import { PersonType } from '../../types';

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
    <article className="person-card">
      <h2 className="person-card__name">
        {person.name}
      </h2>

      <h4 className="person-card__birth-year">
        {`Birth year: ${person.birth_year}`}
      </h4>

      <hr className="person-card__line" />

      <form
        className="add-comment-form"
        onSubmit={(event) => {
          event.preventDefault();
          addComment();
        }}
      >
        <textarea
          className="add-comment-form__body"
          value={newComment}
          onChange={event => setNewComment(event.target.value)}
        />
        <button
          type="submit"
          className={
            classNames(
              'add-comment-form__submit-button', {
                'submit-button--enabled': newComment,
              },
            )
          }
          disabled={!newComment}
        >
          Add comment
        </button>
      </form>

      <hr className="person-card__line" />

      <div className="person-card__comments comments">
        <h5 className="comments__title">
          COMMENTS:
        </h5>

        {commentsList.length > 0
          ? (
            <ol
              className="comments__comments-list"
            >
              {commentsList.map(comment => (
                <li
                  className="comment"
                  key={comment.id}
                >
                  {comment.body}
                </li>
              ))}
            </ol>
          )
          : (
            <span>
              No comments
            </span>
          )
        }
      </div>
    </article>
  );
};

Person.propTypes = {
  person: PersonType.isRequired,
};
