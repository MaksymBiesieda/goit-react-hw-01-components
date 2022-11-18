import styled from "@emotion/styled";

export const Friend = styled.li`
display: flex;
align-items: center;
padding: 15px;
margin: 15px 0;
box-shadow: 2px 1px 3px 2px rgba(0, 0, 0, 0.12), 2px 1px 1px 2px rgba(0, 0, 0, 0.14), 2px 2px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const OnlineIndication = styled.span`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: ${props => {if(props.indication) {return 'green'} else {return 'red'}}};
`;

export const Avatar = styled.img`
width: 100px;
height: 100px;
border-radius: 5px;
margin: 0 30px;
`;

export const FriendName = styled.p`
font-size: 50px;
`;