import React from 'react';
import PropTypes from 'prop-types';

import Repository from './Repository';

import { Container} from './styles';


export default function index({ repositories, currentLanguage }) {

  const respo = repositories
  .filter((repository) =>
      currentLanguage === undefined || repository.language === currentLanguage
  )
  .map((repository) =>(
    <Repository key={repository.id} repository={repository}/>
  ));

  return (
    <div>
      < Container>
       {respo}
      </Container>
    </div>
  )
};

index.defaultProps = {
  currentLanguage: undefined,
};

index.prototype = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
};
