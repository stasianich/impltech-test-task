import React from 'react';
import './PeopleList.scss';
import PropTypes from 'prop-types';
import { Person } from '../Person';
import { PersonType } from '../../types';

export const PeopleList = ({
  people,
}) => (
  <ul className="peopleList">
    {people.map(person => (
      <li
        key={person.name}
        className="person"
      >
        <Person
          person={person}
        />
      </li>
    ))}
  </ul>
);

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PersonType).isRequired,
};
