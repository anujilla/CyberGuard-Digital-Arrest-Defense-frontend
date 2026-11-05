import React from "react";
import { Menu, Bell, Search, ShieldCheck, ChevronDown } from "lucide-react";

export default function Header({ activePage, setSidebarOpen }) {
  return (
    <header className="top-header">
      <div className="header-left">
        <button
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <div>
          <div className="breadcrumb">CyberGuard / Console</div>
          <h2>{activePage || "Dashboard"}</h2>
        </div>
      </div>

      <div className="header-right">
        <div className="system-status">
          <span className="status-dot"></span>
          <span>All Systems Ready</span>
        </div>

        <button className="header-icon-btn" aria-label="Search">
          <Search size={19} />
        </button>

        <button className="header-icon-btn" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <div className="header-profile">
          <div className="profile-avatar">
            <ShieldCheck size={20} />
          </div>
          <div className="profile-info">
            <strong>Security Admin</strong>
            <span>Administrator</span>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}
