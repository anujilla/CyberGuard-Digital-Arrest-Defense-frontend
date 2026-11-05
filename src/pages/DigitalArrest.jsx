import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Video,
  BadgeAlert,
  Wallet,
  LockKeyhole,
  UserX,
  CheckCircle2,
  RotateCcw,
  AlertTriangle,
  PhoneCall,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const warningSigns = [
  {
    id: "video",
    title: "Threatening video call",
    description:
      "Someone claims you are under investigation through a video call.",
    points: 20,
    icon: Video,
  },
  {
    id: "authority",
    title: "Fake police or government identity",
    description:
      "A caller claims to be police, CBI, ED or another authority without verifiable proof.",
    points: 25,
    icon: BadgeAlert,
  },
  {
    id: "money",
    title: "Demand for money",
    description:
      "Someone asks you to transfer money to avoid arrest or investigation.",
    points: 30,
    icon: Wallet,
  },
  {
    id: "secrecy",
    title: "Forced secrecy",
    description:
      "You are told not to contact family, friends or other authorities.",
    points: 15,
    icon: LockKeyhole,
  },
  {
    id: "isolation",
    title: "Threats and intimidation",
    description:
      "Someone threatens immediate arrest or tries to control your movements.",
    points: 20,
    icon: UserX,
  },
];

export default function DigitalArrest() {
  const [selected, setSelected] = useState([]);
  const [assessed, setAssessed] = useState(false);

  const score = Math.min(
    100,
    warningSigns
      .filter((item) => selected.includes(item.id))
      .reduce((total, item) => total + item.points, 0),
  );

  const risk =
    score >= 60
      ? "HIGH RISK"
      : score >= 30
        ? "MEDIUM RISK"
        : score > 0
          ? "WARNING SIGNS"
          : "NO SIGNS SELECTED";

  function toggleSign(id) {
    setSelected((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    );
    setAssessed(false);
  }

  function resetAssessment() {
    setSelected([]);
    setAssessed(false);
  }

  return (
    <div className="module-page">
      <div className="module-heading">
        <div className="eyebrow">SPECIALIZED CYBER THREAT DEFENSE</div>
        <h1>
          Digital Arrest <span>Protection</span>
        </h1>
        <p>
          Recognize intimidation tactics used by scammers pretending to be law
          enforcement officials.
        </p>
      </div>

      <div className="info-banner danger-banner">
        <ShieldAlert size={24} />
        <p>
          <strong>Important:</strong> Genuine law enforcement does not conduct
          arrests through video calls or demand money to settle an
          investigation.
        </p>
      </div>

      <div className="arrest-layout">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">INTERACTIVE SELF-CHECK</div>
              <h2>Identify Warning Signs</h2>
            </div>
            <ShieldAlert size={24} />
          </div>

          <p className="module-description">
            Select every situation you have experienced or observed.
          </p>

          <div className="warning-list">
            {warningSigns.map((item) => {
              const Icon = item.icon;
              const active = selected.includes(item.id);

              return (
                <button
                  key={item.id}
                  className={`warning-option ${active ? "warning-selected" : ""}`}
                  onClick={() => toggleSign(item.id)}
                >
                  <div className="warning-icon">
                    <Icon size={21} />
                  </div>

                  <div className="warning-content">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>

                  <div className="warning-check">
                    {active && <CheckCircle2 size={20} />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="button-row">
            <button
              className="primary-button"
              disabled={selected.length === 0}
              onClick={() => setAssessed(true)}
            >
              <ShieldCheck size={18} />
              Assess My Situation
            </button>

            <button className="secondary-button" onClick={resetAssessment}>
              <RotateCcw size={17} />
              Reset
            </button>
          </div>
        </section>

        <section className="panel arrest-result">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">RISK INDICATOR</div>
              <h2>Safety Assessment</h2>
            </div>
            <ShieldCheck size={24} />
          </div>

          {!assessed ? (
            <div className="empty-result">
              <div className="empty-result-icon">
                <ShieldCheck size={42} />
              </div>
              <h3>Your Safety Matters</h3>
              <p>
                Select the warning signs and assess your situation to view an
                indicative risk level.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="result-score">
                <div className="score-number">
                  {score}
                  <small>/100</small>
                </div>
                <div>
                  <span className="eyebrow">INDICATIVE SCORE</span>
                  <h3>{risk}</h3>
                </div>
              </div>

              <div className="score-track">
                <div className="score-fill" style={{ width: `${score}%` }} />
              </div>

              <p className="assessment-note">
                {score >= 60
                  ? "Several serious warning signs are present. Stop communication and seek help."
                  : score >= 30
                    ? "Multiple warning signs are present. Verify the caller independently."
                    : score > 0
                      ? "A warning sign was selected. Stay cautious and verify independently."
                      : "No warning signs were selected. This does not establish that a situation is safe."}
              </p>
            </motion.div>
          )}

          <div className="safety-steps">
            <h3>
              <ShieldCheck size={19} /> Immediate Safety Steps
            </h3>
            <div>01. Stay calm and do not panic.</div>
            <div>02. End suspicious calls and do not share OTPs.</div>
            <div>03. Never transfer money under threats.</div>
            <div>04. Verify claims using official channels.</div>
            <div>05. Inform trusted family members.</div>
          </div>
        </section>
      </div>

      <section className="emergency-card">
        <div className="emergency-icon">
          <PhoneCall size={25} />
        </div>
        <div>
          <h3>Need Cybercrime Assistance?</h3>
          <p>
            In India, call 1930 for financial cyber fraud assistance or visit
            the official National Cyber Crime Reporting Portal.
          </p>
        </div>
        <div className="emergency-actions">
          <a href="tel:1930" className="secondary-button">
            <PhoneCall size={17} /> Call 1930
          </a>
          <a
            href="https://cybercrime.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Report Online <ExternalLink size={16} />
          </a>
        </div>
      </section>

      <div className="disclaimer-strip">
        <AlertTriangle size={18} />
        <p>
          This is an educational self-assessment, not an official investigation
          or legal determination. The score is illustrative.
        </p>
      </div>
    </div>
  );
}
