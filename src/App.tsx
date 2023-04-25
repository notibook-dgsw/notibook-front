import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import GlobalStyle from "./styles/GlobalStyles";
import { RecoilRoot } from "recoil";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
