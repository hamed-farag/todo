import { useState } from "react";

import UsersDropdown from "@components/Business/Users";
import TodoListing from "./components/Listing";

function Home() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  return (
    <div>
      <UsersDropdown onChange={(userId) => setSelectedUserId(userId)} />
      <br />
      <TodoListing selectedUser={selectedUserId} />
    </div>
  );
}

export default Home;
