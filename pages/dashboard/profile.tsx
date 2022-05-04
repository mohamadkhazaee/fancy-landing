import { withAuthGuard } from "../../src/shared/components";
import { Profile } from "../../src/templates/profile";

const ProfilePage = () => {
  return <Profile />;
};

export default withAuthGuard(Profile);
