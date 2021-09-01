import PropTypes from 'prop-types';

export const PersonType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  species: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
  starships: PropTypes.array.isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
