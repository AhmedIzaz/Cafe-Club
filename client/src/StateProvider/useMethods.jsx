import { useStateValue } from "./StateContext";

function useMethods() {
  const auth_base_url = "https://localhost:8000/auth";
  const [state, dispatch] = useStateValue();
  const login = () => {
    dispatch({ type: "ADD_USER", user: "user" });
  };
  const signup = () => {};
  const logout = () => {
    dispatch({ type: "REMOVE_USER" });
  };
  return { login, signup, logout };
}

export default useMethods;
