import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div>
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
