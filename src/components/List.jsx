export default function List({ users }) {
  return (
    <>
      {users &&
        users.map((user) => (
          <div key={user.id} className="user">
            <img src={user.avatar_url} alt={user.login} width={100} />
            <p>{user.login}</p>
          </div>
        ))}
    </>
  );
}
