import React from "react";
import { motion } from "framer-motion";
import {
  Siren,
  PhoneCall,
  ShieldAlert,
  ExternalLink,
  AlertTriangle,
  MessageCircle,
  LockKeyhole,
  CreditCard,
  Globe,
  FileText,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const emergencySteps = [
  {
    number: "01",
    title: "Stop communication",
    description:
      "Disconnect suspicious calls and stop responding to threatening messages.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Protect your accounts",
    description:
      "Never share OTPs, passwords, PINs or remote access to your device.",
    icon: LockKeyhole,
  },
  {
    number: "03",
    title: "Save evidence",
    description:
      "Keep screenshots, phone numbers, transaction IDs and message records.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Report the incident",
    description:
      "Use official cybercrime reporting channels and contact your bank if money was lost.",
    icon: ShieldAlert,
  },
];

const resources = [
  {
    title: "National Cybercrime Helpline",
    number: "1930",
    description: "Helpline for reporting financial cyber fraud in India.",
    icon: PhoneCall,
    action: "Call 1930",
    href: "tel:1930",
  },
  {
    title: "National Cyber Crime Portal",
    number: "Official Website",
    description:
      "Access the Government of India's cybercrime reporting portal.",
    icon: Globe,
    action: "Open Portal",
    href: "https://cybercrime.gov.in/",
  },
  {
    title: "Emergency Assistance",
    number: "112",
    description: "India's emergency response number for immediate emergencies.",
    icon: Siren,
    action: "Call 112",
    href: "tel:112",
  },
];

export default function Emergency() {
  return (
    <div className="module-page">
      <div className="module-heading">
        <div className="eyebrow">CYBER INCIDENT RESPONSE</div>
        <h1>
          Emergency <span>Center</span>
        </h1>
        <p>
          Find important reporting resources and learn what to do when you
          encounter a suspected cybercrime.
        </p>
      </div>

      <motion.section
        className="emergency-hero"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="emergency-hero-icon">
          <Siren size={38} />
        </div>
        <div className="emergency-hero-content">
          <span>NEED IMMEDIATE HELP?</span>
          <h2>Don't Panic. Take Action.</h2>
          <p>
            If you suspect financial cyber fraud, contact the appropriate
            official reporting service immediately.
          </p>
        </div>
        <a href="tel:1930" className="emergency-call-button">
          <PhoneCall size={19} />
          Call 1930
        </a>
      </motion.section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <div className="eyebrow">OFFICIAL SUPPORT</div>
            <h2>Emergency Resources</h2>
          </div>
        </div>

        <div className="emergency-resource-grid">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.div
                className="panel emergency-resource-card"
                key={resource.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="resource-icon">
                  <Icon size={24} />
                </div>
                <h3>{resource.title}</h3>
                <strong>{resource.number}</strong>
                <p>{resource.description}</p>
                <a
                  className="primary-button resource-button"
                  href={resource.href}
                  target={
                    resource.href.startsWith("https") ? "_blank" : undefined
                  }
                  rel="noreferrer"
                >
                  {resource.action}
                  {resource.href.startsWith("https") && (
                    <ExternalLink size={16} />
                  )}
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <div className="eyebrow">INCIDENT RESPONSE GUIDE</div>
            <h2>What Should You Do?</h2>
          </div>
        </div>

        <div className="response-grid">
          {emergencySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="panel response-card"
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="response-top">
                  <span>{step.number}</span>
                  <Icon size={23} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="panel financial-alert">
        <div className="financial-alert-icon">
          <CreditCard size={25} />
        </div>
        <div>
          <h3>Have You Lost Money to a Cyber Fraud?</h3>
          <p>
            Contact your bank immediately to report the transaction, request
            assistance and preserve transaction details. You can also report
            financial cyber fraud through 1930.
          </p>
          <a
            href="https://cybercrime.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="text-button"
          >
            Visit Cybercrime Portal <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <div className="disclaimer-strip">
        <AlertTriangle size={18} />
        <p>
          These links and numbers are provided as public information.
          Availability and response depend on the relevant authorities. This
          prototype does not submit reports automatically.
        </p>
      </div>
    </div>
  );
}
