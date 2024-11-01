export default function Form({ userName, setName, setIsSearching }) {
  function handleSubmit(e) {
    e.preventDefault();
    setIsSearching(true);
  }

  return (
    <>
      <form className="search-query-form" onSubmit={handleSubmit}>
        <input
          value={userName}
          onChange={setName}
          className="search-query-input"
          placeholder="Enter nickname"
        />
        <input type="submit" className="search-query-submit" />
      </form>
    </>
  );
}
