import { logoutUser } from "@/Services/Actions/logoutUser";
import { getUserInfo } from "@/Services/auth.service";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
    console.log("logout");
  };
  return (
    <>
      {userInfo ? (
        <Button color="error" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
