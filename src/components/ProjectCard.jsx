/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import cashew from '../images/cashew.jpg';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  ${tw('flex items-end content-end')};
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.05);
  }
`;

const Text = styled.div`
  ${tw('opacity-75 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

// const Title = styled.div`
//   ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
//   text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
// `;

const ProjectCard = ({ description, link, children, image }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" image={cashew}>
    <Text>{children}</Text>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  image: PropTypes.string.isRequired,
};
