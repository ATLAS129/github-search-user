import { useEffect } from "react";

export default function useFetchUsers(
  isSearching,
  setIsSearching,
  setUsers,
  userName
) {
  async function fetchUser() {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${userName}`
      );

      const result = await response.json();

      if (result && result.items && result.items.length) {
        setUsers([...result.items]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (isSearching) {
      fetchUser();
      setIsSearching(false);
    }
  }, [isSearching]);
}
