import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionList from "./components/TransactionsHistory/TransactionList/TransactionList";
import { name, tag, location, avatar, stats } from "./data/user.json";
import friends from "./data/friends.json";
import statisticalData from "./data/statistical-data.json";
import transactions from "./data/transactions.json";
// import { modernNormalize } from "styled-modern-normalize";

function App() {
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionList transactions={transactions} />
    </>
  );
}

export default App;
