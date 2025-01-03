import { BrowserRouter, Routes, Route } from "react-router-dom";

import Grid from "@components/Gird";
import GridHr from "@components/GridHr";
import GridFinance from "@components/GridFinance";
import Navigation from "@components/Navigation";
import GridInventory from "@components/GridInventory/";

function App() {
  return (
    <BrowserRouter>
      <main className="w-full h-screen flex flex-row relative">
        <Navigation />
        <section className="flex flex-col p-5 ml-20 w-full gap-3">
          <div className="lg:overflow-y-hidden overflow-y-auto">
            <Routes>
              <Route path="/" exact element={<Grid />} />
              <Route path="/team" element={<GridHr />} />
              <Route path="/finance" element={<GridFinance />} />
              <Route path="/inventory" element={<GridInventory />} />
            </Routes>
          </div>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
