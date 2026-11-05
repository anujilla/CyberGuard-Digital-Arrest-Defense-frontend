import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Fingerprint,
  ShieldCheck,
  ShieldAlert,
  UserRound,
  BadgeCheck,
  Phone,
  Mail,
  Globe,
  Building2,
  AlertTriangle,
  Search,
  RotateCcw,
  CheckCircle2,
  Info,
} from "lucide-react";

const checks = [
  {
    id: "urgency",
    title: "Creates extreme urgency",
    description: "Pressures you to act immediately without verification.",
    points: 20,
  },
  {
    id: "money",
    title: "Requests money or sensitive details",
    description: "Asks for OTP, passwords, banking PINs or payments.",
    points: 30,
  },
  {
    id: "identity",
    title: "Unverified official identity",
    description:
      "Claims to represent a bank, police department or government office.",
    points: 20,
  },
  {
    id: "contact",
    title: "Uses unusual contact details",
    description: "Contacts you from an unfamiliar email, number or account.",
    points: 15,
  },
  {
    id: "threat",
    title: "Threatens consequences",
    description:
      "Uses arrest, account closure or legal action to frighten you.",
    points: 25,
  },
];

export default function Impersonation() {
  const [identity, setIdentity] = useState("");
  const [contact, setContact] = useState("");
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);

  const toggleCheck = (id) => {
    setSelected((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    );
    setResult(null);
  };

  const analyze = () => {
    if (!identity.trim() && !contact.trim() && selected.length === 0) {
      alert("Enter identity details or select at least one warning sign.");
      return;
    }

    const score = Math.min(
      100,
      checks
        .filter((item) => selected.includes(item.id))
        .reduce((total, item) => total + item.points, 0),
    );

    setResult({
      score,
      risk:
        score >= 60
          ? "HIGH RISK"
          : score >= 30
            ? "MEDIUM RISK"
            : score > 0
              ? "WARNING SIGNS"
              : "NO SELECTED WARNING SIGNS",
    });
  };

  const reset = () => {
    setIdentity("");
    setContact("");
    setSelected([]);
    setResult(null);
  };

  return (
    <div className="module-page">
      <div className="module-heading">
        <div className="eyebrow">IDENTITY SECURITY INTELLIGENCE</div>
        <h1>
          Impersonation <span>Detection</span>
        </h1>
        <p>
          Identify common signs of people pretending to be trusted individuals,
          officials or organizations.
        </p>
      </div>

      <div className="info-banner">
        <Fingerprint size={24} />
        <p>
          A display name, profile photo, caller ID or logo alone cannot prove
          someone's identity.
        </p>
      </div>

      <div className="impersonation-grid">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">IDENTITY REVIEW</div>
              <h2>Check Suspicious Identity</h2>
            </div>
            <UserRound size={25} />
          </div>

          <label htmlFor="claimed-identity">
            Claimed person or organization
          </label>
          <div className="field-wrap">
            <Building2 size={19} />
            <input
              id="claimed-identity"
              value={identity}
              onChange={(event) => {
                setIdentity(event.target.value);
                setResult(null);
              }}
              placeholder="Example: Bank officer / Police officer"
            />
          </div>

          <label htmlFor="contact-details">Contact detail (optional)</label>
          <div className="field-wrap">
            <Phone size={19} />
            <input
              id="contact-details"
              value={contact}
              onChange={(event) => {
                setContact(event.target.value);
                setResult(null);
              }}
              placeholder="Phone number, email or account name"
            />
          </div>

          <div className="check-section-heading">
            <ShieldAlert size={19} />
            <h3>Observed Warning Signs</h3>
          </div>

          <div className="impersonation-checks">
            {checks.map((item) => (
              <button
                key={item.id}
                className={`identity-check ${
                  selected.includes(item.id) ? "identity-selected" : ""
                }`}
                onClick={() => toggleCheck(item.id)}
              >
                <span className="check-indicator">
                  {selected.includes(item.id) && <CheckCircle2 size={18} />}
                </span>
                <span className="check-text">
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="button-row">
            <button className="primary-button" onClick={analyze}>
              <Search size={18} />
              Analyze Identity
            </button>
            <button className="secondary-button" onClick={reset}>
              <RotateCcw size={17} />
              Reset
            </button>
          </div>
        </section>

        <section className="panel identity-result">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">IDENTITY RISK REVIEW</div>
              <h2>Assessment Result</h2>
            </div>
            <BadgeCheck size={25} />
          </div>

          {!result ? (
            <div className="empty-result">
              <div className="empty-result-icon">
                <Fingerprint size={43} />
              </div>
              <h3>Identity Check Ready</h3>
              <p>
                Enter the claimed identity and select observed warning signs to
                begin your review.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="result-score">
                <div className="score-number">
                  {result.score}
                  <small>/100</small>
                </div>
                <div>
                  <span className="eyebrow">INDICATIVE SCORE</span>
                  <h3>{result.risk}</h3>
                </div>
              </div>

              <div className="score-track">
                <div
                  className="score-fill"
                  style={{ width: `${result.score}%` }}
                />
              </div>

              <div className="result-advice">
                <ShieldCheck size={21} />
                <p>
                  {result.score >= 60
                    ? "Do not trust the contact. Stop communication and verify through official channels."
                    : result.score >= 30
                      ? "Be cautious. Independently verify the identity before taking action."
                      : result.score > 0
                        ? "Some warning signs are present. Check the identity independently."
                        : "No selected warning signs were found. Identity has not been verified."}
                </p>
              </div>
            </motion.div>
          )}

          <div className="verification-guide">
            <h3>
              <CheckCircle2 size={19} /> Safe Verification
            </h3>
            <div>
              <Phone size={17} /> Call the official published phone number.
            </div>
            <div>
              <Globe size={17} /> Visit the organization's official website
              yourself.
            </div>
            <div>
              <Mail size={17} /> Check email addresses carefully.
            </div>
            <div>
              <ShieldCheck size={17} /> Never share OTPs or passwords.
            </div>
          </div>
        </section>
      </div>

      <div className="disclaimer-strip">
        <Info size={18} />
        <p>
          This tool uses user-selected warning signs. It does not verify phone
          numbers, email addresses, profiles or real-world identities. A low
          score is not proof of authenticity.
        </p>
      </div>
    </div>
  );
}
