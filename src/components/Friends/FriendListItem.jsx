import PropTypes from 'prop-types';
import { Friend, OnlineIndication, Avatar, FriendName } from './FriendsListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (<Friend>
  <OnlineIndication indication={isOnline}></OnlineIndication>
  <Avatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
</Friend>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}