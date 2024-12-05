import React from 'react';

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
