import { Pools } from "../../src/templates/pools";
import { withAuthGuard } from "../../src/shared/withAuthGuard";

const PoolsPage = () => {
  return <Pools />;
};

export default withAuthGuard(PoolsPage);
