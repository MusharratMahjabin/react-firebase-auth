
import { useAuth } from "../components/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h1>Profile</h1>
      <p>Your account information</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default Profile;
