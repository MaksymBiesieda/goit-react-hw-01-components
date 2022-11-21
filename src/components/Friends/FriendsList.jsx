import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendList } from './FriendList.styled';

export default function FriendsList({ friends }) {
    return ( <FriendList>
            {friends.map(({avatar, name, isOnline, id}) => {
                return <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
            />})}
        </FriendList>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired, })),
}