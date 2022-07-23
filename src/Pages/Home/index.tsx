import Users from "@components/Business/Users";

function Home() {
  return (
    <div>
      <Users onChange={(userId) => console.log(userId)} />
    </div>
  );
}

export default Home;
