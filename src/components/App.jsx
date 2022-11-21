import user from '../otput_data/user.json';
import data from '../otput_data/data.json';
import friends from '../otput_data/friends.json';
import transactions from '../otput_data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendsList';
import TransactionHistory from './Transaction/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />

      <FriendsList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />;
    </div>
  );
};
