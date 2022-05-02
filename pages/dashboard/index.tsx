import { Dashboard } from "../../src/templates/dashboard";
import { withAuthGuard } from "../../src/shared/withAuthGuard";
const DashboardPage = () => {
  return <Dashboard />;
};

export default withAuthGuard(DashboardPage);
