import React, { useState } from "react";
import Sidebar from "./components/sidebar.jsx";
import Header from "./components/Header.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import ScamDetection from "./pages/ScamDetection.jsx";
import DigitalArrest from "./pages/DigitalArrest.jsx";
import Impersonation from "./pages/Impersonation.jsx";
import Emergency from "./pages/Emergency.jsx";
import Awareness from "./pages/Awareness.jsx";
import ScamSimulator from "./pages/ScamSimulator.jsx";
import ReportScam from "./pages/ReportScam.jsx";

import "./App.css";

const pages = {
  Dashboard: Dashboard,
  "Scam Detection": ScamDetection,
  "Digital Arrest": DigitalArrest,
  "Impersonation Detection": Impersonation,
  "Emergency Center": Emergency,
  "Awareness Center": Awareness,
  "Scam Simulator": ScamSimulator,
  "Report a Scam": ReportScam,
};

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ActivePage = pages[activePage] || Dashboard;

  return (
    <div className="app-shell">
      {/* Sidebar Navigation */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Application */}
      <main className="main-area">
        {/* Header */}
        <Header activePage={activePage} setSidebarOpen={setSidebarOpen} />

        {/* Dynamic Page Content */}
        <div className="page-content">
          <ActivePage setActivePage={setActivePage} />
        </div>

        {/* Footer */}
        <footer className="app-footer">
          <span>CYBERGUARD</span>

          <span>Digital Safety & Threat Awareness Platform</span>

          <span>Frontend Prototype · 2026</span>
        </footer>
      </main>
    </div>
  );
}
