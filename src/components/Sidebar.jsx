import React from "react";
import {
  LayoutDashboard,
  ScanSearch,
  ShieldAlert,
  UserRoundSearch,
  Siren,
  GraduationCap,
  Gamepad2,
  FileWarning,
  ShieldCheck,
  Activity,
  X,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Scam Detection", icon: ScanSearch },
  { name: "Digital Arrest", icon: ShieldAlert },
  { name: "Impersonation Detection", icon: UserRoundSearch },
  { name: "Emergency Center", icon: Siren },
  { name: "Awareness Center", icon: GraduationCap },
  { name: "Scam Simulator", icon: Gamepad2 },
  { name: "Report a Scam", icon: FileWarning },
];

export default function Sidebar({
  activePage,
  setActivePage,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">
            <ShieldCheck size={27} />
          </div>

          <h2>CYBERGUARD</h2>
          <p>THREAT DEFENSE SYSTEM</p>
        </div>

        <div className="protection-status">
          <span className="status-dot"></span>
          <span>PROTECTION ACTIVE</span>
          <Activity size={16} />
        </div>

        <div className="sidebar-heading">MAIN MENU</div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`sidebar-link ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => {
                  setActivePage(item.name);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <ShieldAlert size={22} />

          <h4>Stay Alert. Stay Safe.</h4>

          <p>Think before you click. Never share your OTP or PIN.</p>

          <span>CYBERGUARD v1.0.0</span>
        </div>

        <button
          className="sidebar-close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </aside>
    </>
  );
}
