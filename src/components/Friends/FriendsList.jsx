import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendList } from './FriendList.styled';

export default function FriendsList({ friends }) {
    return ( <FriendList>
            {friends.map((friend) => {
                return <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    id={friend.id}
            />})}
        </FriendList>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired, })),
}