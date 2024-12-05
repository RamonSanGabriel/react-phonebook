import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        id="filter"
        placeholder="Type contact name "
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      ></input>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default Filter;
