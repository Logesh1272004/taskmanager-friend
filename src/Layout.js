import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #343a40;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 30px;
`;

export const Header = () => (
  <HeaderContainer>
    <h1>Task Manager Pro</h1>
    <p>Organize your tasks efficiently</p>
  </HeaderContainer>
);

export const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Task Manager Pro. All rights reserved.</p>
  </FooterContainer>
);
