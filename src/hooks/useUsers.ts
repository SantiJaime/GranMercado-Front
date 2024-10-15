import { useEffect, useState } from "react";
import { getAllUsers } from "../helpers/usersQueries";
import { toast } from "sonner";

type User = Pick<UserResponse, "email" | "fullName" | "role" | "id">;

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers()
      .then((res) => setUsers(res.allUsers))
      .catch((err) => toast.error(err.message));
  }, []);

  return { users, setUsers };
};

export default useUsers;
