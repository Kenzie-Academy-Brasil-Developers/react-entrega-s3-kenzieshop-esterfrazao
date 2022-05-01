import Routes from "./routes";
import Header from "./components/Header";
import { Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <Stack boxSizing="border-box" width="100vw">
      <Header />
      <Routes />;
    </Stack>
  );
};

export default App;
