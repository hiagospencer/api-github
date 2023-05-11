import React from 'react';
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link} from './styles';

import { langColors } from '../../../../services/confg';

export default function index({ repository }) {

  const color = langColors[repository.language && repository.language.toLowerCase()];

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target='_blank'>Ver</Link>
      </Footer>
    </Container>
  )
};



index.prototype = {
 repository: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired,
};
