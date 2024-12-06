import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <p>Filter contact by name</p>
      <input
        type="text"
        name="filter"
        id="filter"
        placeholder="Search by name "
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.string.isRequired,
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
