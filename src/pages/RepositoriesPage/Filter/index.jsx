import React from 'react'
import PropTypes from 'prop-types';


import { Container, Selector, Cleaner} from './style';


export default function index({langagues, currentLanguage, onClick}) {

    const selectors = langagues.map(({name, count, color}) => (
      <Selector
        key={name.toLowerCase()}
        color={color}
        className={ currentLanguage === name ? 'selected' : ''}
        onClick={() => onClick && onClick(name)}
      >
        <span>{name}</span>
        <span>{count}</span>
      </Selector>
    ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
    </Container>
  )
}

index.defaultProps = {
  currentLanguage: null,
  onClick: null
};

index.propTypes = {
  langagues: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};
