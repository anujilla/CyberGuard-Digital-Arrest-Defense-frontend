import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  ShieldAlert,
  Smartphone,
  CreditCard,
  UserRound,
  Mail,
  Globe,
  LockKeyhole,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

const topics = [
  {
    title: "Digital Arrest Scams",
    category: "Impersonation",
    icon: ShieldAlert,
    color: "red",
    description:
      "Scammers pretend to be police or government officials and threaten people with arrest through calls or video calls.",
    tips: [
      "Real arrests are not conducted through video calls.",
      "Never transfer money to avoid an alleged arrest.",
      "Verify claims using independently found official contact details.",
    ],
  },
  {
    title: "Phishing Messages",
    category: "Online Fraud",
    icon: Mail,
    color: "blue",
    description:
      "Fraudsters send fake emails or messages to steal passwords, banking details or personal information.",
    tips: [
      "Check the complete website address before opening links.",
      "Avoid entering passwords through unknown links.",
      "Visit official websites directly.",
    ],
  },
  {
    title: "UPI and Payment Scams",
    category: "Financial Fraud",
    icon: CreditCard,
    color: "purple",
    description:
      "Fraudsters trick users into approving payment requests or sharing sensitive banking information.",
    tips: [
      "You do not need to enter your UPI PIN to receive money.",
      "Check the recipient before approving a payment.",
      "Never share your UPI PIN or OTP.",
    ],
  },
  {
    title: "Identity Impersonation",
    category: "Identity Theft",
    icon: UserRound,
    color: "green",
    description:
      "Criminals pretend to be trusted people, bank staff, company employees or public officials.",
    tips: [
      "Verify unexpected requests through another channel.",
      "Do not trust profile pictures or caller names alone.",
      "Never share confidential information with unverified contacts.",
    ],
  },
  {
    title: "Fake Websites",
    category: "Online Fraud",
    icon: Globe,
    color: "cyan",
    description:
      "Fraudulent websites imitate legitimate services to collect payments and personal information.",
    tips: [
      "Check the domain name carefully.",
      "Avoid unknown payment pages.",
      "Do not rely on a padlock icon alone as proof of legitimacy.",
    ],
  },
  {
    title: "OTP and Account Takeover",
    category: "Account Security",
    icon: LockKeyhole,
    color: "orange",
    description:
      "Scammers try to obtain OTPs or account credentials to take control of online accounts.",
    tips: [
      "Never share OTPs with anyone.",
      "Enable two-factor authentication.",
      "Use unique and strong passwords.",
    ],
  },
];

const safetyTips = [
  "Never share OTPs, PINs or passwords.",
  "Do not transfer money under pressure or threats.",
  "Verify unexpected calls using official numbers.",
  "Avoid clicking unknown links and attachments.",
  "Use strong passwords and two-factor authentication.",
  "Report suspected financial cyber fraud quickly.",
];

export default function Awareness() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="module-page">
      <div className="module-heading">
        <div className="eyebrow">KNOWLEDGE IS YOUR FIRST DEFENSE</div>
        <h1>
          Cyber Awareness <span>Center</span>
        </h1>
        <p>
          Learn how common cyber scams work and discover practical ways to
          protect yourself online.
        </p>
      </div>

      <section className="awareness-hero">
        <div className="awareness-hero-icon">
          <GraduationCap size={42} />
        </div>
        <div>
          <div className="eyebrow">SECURITY KNOWLEDGE HUB</div>
          <h2>Think Smart. Browse Safe.</h2>
          <p>
            Awareness helps you recognize suspicious behavior before it becomes
            a serious problem.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <div className="eyebrow">LEARNING LIBRARY</div>
            <h2>Understand Common Scams</h2>
          </div>
          <span className="demo-label">6 TOPICS</span>
        </div>

        <div className="awareness-grid">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            const isOpen = expanded === index;

            return (
              <motion.article
                className="panel awareness-card"
                key={topic.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                <div className={`awareness-icon ${topic.color}`}>
                  <Icon size={24} />
                </div>

                <span className="topic-category">{topic.category}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>

                <button
                  className="text-button topic-toggle"
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  {isOpen ? "Close Safety Tips" : "Learn Safety Tips"}
                  <ChevronDown
                    size={17}
                    className={isOpen ? "chevron-rotated" : ""}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    className="topic-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    {topic.tips.map((tip) => (
                      <div className="topic-tip" key={tip}>
                        <CheckCircle2 size={16} />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="panel safety-tips-panel">
        <div className="panel-heading">
          <div>
            <div className="eyebrow">EVERYDAY PROTECTION</div>
            <h2>Essential Cyber Safety Rules</h2>
          </div>
          <ShieldCheck size={25} />
        </div>

        <div className="safety-tip-grid">
          {safetyTips.map((tip, index) => (
            <div className="safety-tip-item" key={tip}>
              <div className="tip-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <CheckCircle2 size={18} />
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="awareness-reminder">
        <Lightbulb size={23} />
        <div>
          <h3>Remember: Pause Before You Trust</h3>
          <p>
            Scammers often create fear, urgency and confusion. Take time to
            verify before sharing information or sending money.
          </p>
        </div>
        <BookOpen size={24} />
      </section>
    </div>
  );
}
