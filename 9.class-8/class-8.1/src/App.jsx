import { useState } from "react";
import { RevenueCard } from "./components/RevenueCard";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <div>
          <SideBar />
        </div>
        <div>
          <RevenueCard
            title={"Amount pending"}
            amount={"92,312.20"}
            orderCount={13}
          />
        </div>
      </div>
    </>
  );
}

export default App;
