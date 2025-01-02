import { BrowserRouter, Routes, Route } from "react-router";

import Grid from "@components/Gird";
import GridHr from "@components/GridHr";
import GridFinance from "@components/GridFinance";
import Navigation from "@components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <main className="w-full h-screen flex flex-row relative">
        <Navigation />
        <section className="flex flex-col p-10 ml-20 w-full gap-3">
          <Routes>
            <Route path="/" exact element={<Grid />} />
            <Route path="/team" element={<GridHr />} />
            <Route path="/finance" element={<GridFinance />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
