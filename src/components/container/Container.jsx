// import React from "react";
import PropTypes from "prop-types"

function Container({ classname, children }) {
     return (
          <section className={`${classname} container `}>
               {children}
          </section>
     );
}

Container.propTypes = {
     classname: PropTypes.string,
     children: PropTypes.node.isRequired
}

export default Container
