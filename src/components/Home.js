import { DynamicWidget } from "@dynamic-labs/sdk-react";
import Menu from "./Menu";

const Home = () => (
  <div className="min-h-screen relative flex align-center justify-end flex-col bg-home bg-contain bg-no-repeat bg-center">
    <Menu />
    <div className="mb-32 mx-auto">
      <DynamicWidget />
    </div>
  </div>
);

export default Home;
