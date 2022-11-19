import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';

const Nav = ({ fastType, mode, onToggle }) => (
  <nav className="nav">
    <Toggle
      checked={fastType}
      leftLabel="Tipado normal"
      name="fastType"
      onChange={onToggle}
      rightLabel="Tipado rápido"
    />
    <Toggle
      checked={mode}
      leftLabel="Modo Claro"
      name="dark"
      onChange={onToggle}
      rightLabel="Modo Oscuro"
    />
  </nav>
);

Nav.propTypes = {
  fastType: PropTypes.bool,
  mode: PropTypes.bool,
  onToggle: PropTypes.func,
};

export { Nav };
