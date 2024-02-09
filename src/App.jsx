import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import CommingSoon from "./pages/CommingSoon";
import Contests from "./pages/Contests";
import ManageContests from "./pages/subpages/ManageContests";

const App = () => {
  return (
    <BrowserRouter>
      <main className="layout">
        <section className="w-1/6">
          <LeftSideBar />
        </section>
        <section className="w-5/6">
          <Routes>
            <Route path="/" element={<CommingSoon />} />
            <Route path="reward-coins" element={<CommingSoon />} />
            <Route path="referrals" element={<CommingSoon />} />
            <Route path="streaks" element={<CommingSoon />} />
            <Route path="contests" element={<Contests />}>
              <Route path="view-analytics" element={<CommingSoon />} />
              <Route path="manage-contests" element={<ManageContests />} />
              <Route path="award-bonuses" element={<CommingSoon />} />
            </Route>
            <Route path="events" element={<CommingSoon />} />
            <Route path="settings" element={<CommingSoon />} />
            <Route path="support" element={<CommingSoon />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
