import React from 'react';
import PropTypes from 'prop-types';

import { MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md';


import {Container, Header, Login, Avatar, Name, Inner, Data} from './style'

export default function Profile({user}){
  return(
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>

        <Data>
          <MdGroup size={20} />
          {user.followers} &nbsp; <i>Seguidores</i>&nbsp; &middot; {user.following} &nbsp; <i>Seguindo</i>
        </Data>

        { user.company && (
        <Data>
          <MdWork size={20} />
          {user.company}
        </Data>
        )}

        {user.location && (
        <Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>
        )}

        { user.blog && (
        <Data>
          <MdLink size={20} />
          <a href={user.blog} target="_blank" rel="noreferrer" >{user.blog}</a>
        </Data>
        )}
      </Inner>
    </Container>
  );
};

  Profile.propTypes ={
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        company: PropTypes.string,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        blog: PropTypes.string,
        location: PropTypes.string,
    }).isRequired
  };
