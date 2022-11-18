import styled from '@emotion/styled';

export const Section = styled.section`
text-align: center;
margin: 0 auto;
background-color: ${props => props.theme.colors.backgroundColor};
width: 500px;
margin: 30px auto;
padding: 60px 0;
`;

export const Title = styled.h2`
color: ${props => props.theme.colors.titleTextColor};
text-transform: uppercase;
margin-bottom: 30px;
`;

export const StatList = styled.ul`
list-style: none;
display: flex;
padding: 0;
`;

export const StatItem = styled.li`
width: calc(100% / 4); 
background-color: ${getRandomHexColor};
padding: 20px;
border: 2px solid transparent;
`;

export const StatLable = styled.span`
display: block;
margin-bottom: 10px;
font-size: 20px;
color: ${props => props.theme.colors.secondaryTextColor};
`;

export const Percentage = styled.span`
display: block;
font-size: 30px;
font-weight: 500;
color: ${props => props.theme.colors.secondaryTextColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}