import { withAuthGuard } from "../../src/shared/components";
import { Swap } from "../../src/templates/swap";

const SwapPage = () => {
  return <Swap />;
};

export default withAuthGuard(SwapPage);
