import React from "react";
import {
  ShieldCheck,
  ShieldAlert,
  ScanSearch,
  Fingerprint,
  Activity,
  ArrowUpRight,
  ArrowRight,
  Clock3,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Globe,
  LockKeyhole,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Threats Monitored",
    value: "1,284",
    change: "Demo metric",
    icon: Activity,
    color: "blue",
  },
  {
    title: "Scams Identified",
    value: "348",
    change: "Demo metric",
    icon: ShieldAlert,
    color: "red",
  },
  {
    title: "Security Checks",
    value: "2,691",
    change: "Demo metric",
    icon: ScanSearch,
    color: "purple",
  },
  {
    title: "Protection Status",
    value: "ACTIVE",
    change: "Interface status",
    icon: ShieldCheck,
    color: "green",
  },
];

const activities = [
  {
    title: "Suspicious message analysis",
    detail: "Message keyword check completed",
    time: "Recently",
    status: "Review",
    icon: ScanSearch,
  },
  {
    title: "Digital arrest awareness",
    detail: "Safety information available",
    time: "Recently",
    status: "Info",
    icon: ShieldAlert,
  },
  {
    title: "Identity safety check",
    detail: "Impersonation checklist ready",
    time: "Recently",
    status: "Ready",
    icon: Fingerprint,
  },
  {
    title: "Emergency resources",
    detail: "Cybercrime reporting information",
    time: "Available",
    status: "Ready",
    icon: LockKeyhole,
  },
];

const features = [
  {
    title: "Scam Detection",
    description:
      "Analyze suspicious messages and identify common warning signs.",
    icon: ScanSearch,
    color: "blue",
    page: "Scam Detection",
  },
  {
    title: "Digital Arrest Protection",
    description:
      "Understand threats involving fake police and video-call arrests.",
    icon: ShieldAlert,
    color: "red",
    page: "Digital Arrest",
  },
  {
    title: "Impersonation Detection",
    description:
      "Review warning signs of fake identities and official impersonation.",
    icon: Fingerprint,
    color: "purple",
    page: "Impersonation Detection",
  },
  {
    title: "Emergency Center",
    description: "Find official cybercrime reporting and emergency guidance.",
    icon: SirenIcon,
    color: "green",
    page: "Emergency Center",
  },
];

function SirenIcon(props) {
  return <AlertTriangle {...props} />;
}

export default function Dashboard({ setActivePage }) {
  return (
    <div className="dashboard-page">
      <motion.section
        className="welcome-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="welcome-content">
          <div className="eyebrow">
            <span className="live-dot" />
            DIGITAL SAFETY COMMAND CENTER
          </div>

          <h1>
            Defend Your Digital World.
            <br />
            <span>Stay One Step Ahead.</span>
          </h1>

          <p>
            Explore cybersecurity tools to recognize scam warning signs,
            understand digital arrest threats and improve online safety.
          </p>

          <button
            className="primary-button"
            onClick={() => setActivePage("Scam Detection")}
          >
            <ScanSearch size={18} />
            Analyze a Message
            <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-core">
            <ShieldCheck size={76} strokeWidth={1.3} />
          </div>
          <div className="orbit-node node-one">
            <LockKeyhole size={20} />
          </div>
          <div className="orbit-node node-two">
            <Activity size={20} />
          </div>
          <div className="orbit-node node-three">
            <Globe size={20} />
          </div>
          <div className="hero-caption">CYBER DEFENSE</div>
        </div>
      </motion.section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <div className="eyebrow">PLATFORM OVERVIEW</div>
            <h2>Security Overview</h2>
          </div>
          <span className="demo-label">DEMO DATA</span>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                className="stat-card"
                key={stat.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`stat-icon ${stat.color}`}>
                  <Icon size={22} />
                </div>
                <div className="stat-title">{stat.title}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-change">{stat.change}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <div className="eyebrow">YOUR SECURITY TOOLKIT</div>
            <h2>Explore Protection Modules</h2>
          </div>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.button
                className="feature-card"
                key={feature.title}
                onClick={() => setActivePage(feature.page)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`feature-icon ${feature.color}`}>
                  <Icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-link">
                  Open Module <ArrowRight size={16} />
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section className="bottom-grid">
        <div className="panel activity-panel">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">PLATFORM STATUS</div>
              <h2>Security Activity</h2>
            </div>
            <Activity size={20} />
          </div>

          <div className="activity-list">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div className="activity-item" key={activity.title}>
                  <div className="activity-icon">
                    <Icon size={18} />
                  </div>
                  <div className="activity-info">
                    <strong>{activity.title}</strong>
                    <span>{activity.detail}</span>
                  </div>
                  <span className="activity-status">{activity.status}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="panel safety-panel">
          <div className="safety-shield">
            <ShieldCheck size={31} />
          </div>
          <div className="eyebrow">SECURITY REMINDER</div>
          <h2>Pause. Verify. Protect.</h2>
          <p>
            Genuine authorities do not demand money through threats of immediate
            digital arrest. Never share your OTP or banking PIN.
          </p>
          <button
            className="text-button"
            onClick={() => setActivePage("Awareness Center")}
          >
            Learn Safety Tips <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <section className="disclaimer-strip">
        <AlertTriangle size={18} />
        <p>
          Educational frontend prototype. Displayed metrics and activity entries
          are illustrative demo data, not live threat intelligence.
        </p>
      </section>
    </div>
  );
}
