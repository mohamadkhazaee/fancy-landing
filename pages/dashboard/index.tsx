import { Dashboard } from "../../src/templates/dashboard";
import { withAuthGuard } from "../../src/shared/components";
const DashboardPage = () => {
  return <Dashboard />;
};

export default withAuthGuard(DashboardPage);
