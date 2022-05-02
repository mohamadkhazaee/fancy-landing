import { withAuthGuard } from "../../src/shared/withAuthGuard";
import { Portfolio } from "../../src/templates/Portfolio";

const PortfolioPage = () => {
  return <Portfolio />;
};

export default withAuthGuard(PortfolioPage);
