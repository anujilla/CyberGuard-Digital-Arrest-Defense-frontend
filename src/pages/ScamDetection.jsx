import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ScanSearch,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  RotateCcw,
  MessageSquare,
  Info,
  CheckCircle2,
  XCircle,
  Lock,
  Clock,
  Activity,
  Search,
  FileWarning,
  Zap,
} from "lucide-react";

const scamPatterns = [
  {
    words: ["otp", "one time password"],
    reason: "OTP theft attempt",
    points: 30,
    advice: "Never share your OTP with anyone.",
  },
  {
    words: ["digital arrest", "under arrest", "police case"],
    reason: "Fake police or digital arrest threat",
    points: 35,
    advice:
      "Real police do not conduct digital arrests or demand money through video calls.",
  },
  {
    words: ["urgent payment", "pay immediately", "transfer money"],
    reason: "Urgent money transfer pressure",
    points: 25,
    advice: "Do not transfer money under pressure.",
  },
  {
    words: ["bank account blocked", "account suspended", "kyc expired"],
    reason: "Bank or KYC account threat",
    points: 20,
    advice: "Contact your bank using its official number.",
  },
  {
    words: ["lottery", "won prize", "lucky winner", "claim reward"],
    reason: "Fake lottery or prize claim",
    points: 20,
    advice: "Do not pay fees to claim an unexpected prize.",
  },
  {
    words: ["click here", "verify now", "open this link"],
    reason: "Suspicious link instruction",
    points: 15,
    advice: "Do not open unknown links.",
  },
  {
    words: ["keep this secret", "do not tell anyone", "stay on the call"],
    reason: "Secrecy or isolation pressure",
    points: 25,
    advice: "Discuss suspicious requests with someone you trust.",
  },
  {
    words: ["upi pin", "share password", "card number", "cvv"],
    reason: "Sensitive banking information request",
    points: 30,
    advice: "Never share your UPI PIN, CVV or password.",
  },
  {
    words: ["remote access", "install anydesk", "screen sharing"],
    reason: "Remote access or screen-sharing request",
    points: 30,
    advice: "Never give unknown callers access to your device.",
  },
  {
    words: [
      "refund processing fee",
      "pay registration fee",
      "processing charge",
    ],
    reason: "Suspicious advance fee request",
    points: 20,
    advice: "Verify any fee request independently before paying.",
  },
];

function getRisk(score) {
  if (score >= 75) {
    return {
      label: "CRITICAL RISK",
      className: "critical",
      description: "Multiple serious scam warning signs were detected.",
    };
  }

  if (score >= 50) {
    return {
      label: "HIGH RISK",
      className: "high",
      description: "Several suspicious patterns were identified.",
    };
  }

  if (score >= 25) {
    return {
      label: "MEDIUM RISK",
      className: "medium",
      description: "Some warning signs need your attention.",
    };
  }

  return {
    label: "LOW RISK",
    className: "low",
    description: "Few or no configured warning patterns were detected.",
  };
}

export default function ScamDetection() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const analyzeMessage = () => {
    if (!message.trim()) {
      alert("Please enter a message before scanning.");
      return;
    }

    const normalizedMessage = message.toLowerCase();

    const detected = scamPatterns.filter((pattern) =>
      pattern.words.some((word) => normalizedMessage.includes(word)),
    );

    const score = Math.min(
      100,
      detected.reduce((total, item) => total + item.points, 0),
    );

    const risk = getRisk(score);

    const advice = [...new Set(detected.map((item) => item.advice))];

    if (score === 0) {
      advice.push(
        "Verify the sender independently.",
        "Never share OTPs, UPI PINs or passwords.",
        "Remember that new scam messages may not match these patterns.",
      );
    }

    const scanResult = {
      id: Date.now(),
      message: message.trim(),
      score,
      risk,
      detected,
      advice,
      time: new Date().toLocaleTimeString(),
    };

    setResult(scanResult);
    setHistory((previous) => [scanResult, ...previous].slice(0, 5));
  };

  const clearScan = () => {
    setMessage("");
    setResult(null);
  };

  const loadSample = () => {
    setMessage(
      "Your bank account will be blocked today. Share your OTP immediately to complete KYC verification. Click here to verify now.",
    );
    setResult(null);
  };

  return (
    <div className="scam-page">
      {/* PAGE HEADER */}
      <div className="scam-page-heading">
        <div>
          <span className="eyebrow">
            <Activity size={14} />
            INTELLIGENT THREAT ANALYSIS
          </span>

          <h1>Advanced Scam Detection</h1>

          <p>
            Identify suspicious messages, detect fraud indicators and understand
            potential digital threats.
          </p>
        </div>

        <div className="scanner-status">
          <span className="status-dot"></span>
          SCANNER READY
        </div>
      </div>

      {/* MAIN ANALYSIS AREA */}
      <div className="scam-layout">
        {/* INPUT PANEL */}
        <section className="content-panel scam-input-panel">
          <div className="scam-panel-title">
            <div className="scam-title-icon">
              <MessageSquare size={21} />
            </div>

            <div>
              <h2>Message Analysis</h2>
              <p>Scan suspicious SMS, emails and messages</p>
            </div>
          </div>

          <label className="scam-label" htmlFor="scam-message">
            MESSAGE CONTENT
          </label>

          <textarea
            id="scam-message"
            className="scam-textarea"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Paste a suspicious message here..."
            rows={9}
          />

          <div className="scam-input-footer">
            <span>{message.length} characters</span>
            <span>Text analysis only</span>
          </div>

          <div className="scam-action-buttons">
            <button className="primary-btn" onClick={analyzeMessage}>
              <ScanSearch size={17} />
              Analyze Message
            </button>

            <button className="scam-reset-btn" onClick={clearScan}>
              <RotateCcw size={16} />
              Clear
            </button>
          </div>

          <button className="scam-sample-btn" onClick={loadSample}>
            <Zap size={15} />
            Load Sample Scam Message
          </button>

          <div className="scam-privacy-note">
            <Lock size={15} />
            <span>
              Analysis runs in your browser. Avoid entering real personal or
              banking information.
            </span>
          </div>
        </section>

        {/* RESULT PANEL */}
        <section className="content-panel scam-result-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">SCAN OUTPUT</span>
              <h3>Threat Assessment</h3>
            </div>

            <ShieldCheck size={22} />
          </div>

          {!result ? (
            <div className="scam-empty-state">
              <div className="scam-empty-icon">
                <ScanSearch size={42} />
              </div>

              <h3>Awaiting Message</h3>

              <p>
                Enter a message and start the scan to view its risk score,
                detected warning signs and safety advice.
              </p>

              <span>READY FOR ANALYSIS</span>
            </div>
          ) : (
            <motion.div
              className="scam-analysis-result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* RISK SCORE */}
              <div className={`risk-result ${result.risk.className}`}>
                <div>
                  <span>RISK SCORE</span>

                  <strong>
                    {result.score}
                    <small>/100</small>
                  </strong>

                  <b>{result.risk.label}</b>
                </div>

                <div className="risk-circle">
                  {result.score >= 50 ? (
                    <ShieldAlert size={39} />
                  ) : (
                    <ShieldCheck size={39} />
                  )}
                </div>
              </div>

              <p className="risk-description">{result.risk.description}</p>

              <div className="risk-meter">
                <div
                  className={`risk-meter-fill ${result.risk.className}`}
                  style={{ width: `${result.score}%` }}
                />
              </div>

              {/* DETECTED WARNINGS */}
              <div className="scam-detection-section">
                <h4>
                  <AlertTriangle size={16} />
                  Detected Warning Signs ({result.detected.length})
                </h4>

                {result.detected.length > 0 ? (
                  result.detected.map((item) => (
                    <div className="detected-warning" key={item.reason}>
                      <XCircle size={16} />
                      <span>{item.reason}</span>
                    </div>
                  ))
                ) : (
                  <div className="no-warning">
                    <CheckCircle2 size={17} />
                    No configured warning patterns detected.
                  </div>
                )}
              </div>

              {/* SAFETY ADVICE */}
              <div className="scam-advice">
                <h4>
                  <ShieldCheck size={16} />
                  Recommended Safety Actions
                </h4>

                {result.advice.map((item, index) => (
                  <div className="advice-item" key={index}>
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="scan-time">
                <Clock size={14} />
                Analyzed at {result.time}
              </div>
            </motion.div>
          )}
        </section>
      </div>

      {/* HISTORY */}
      <section className="content-panel scam-history-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">RECENT ACTIVITY</span>
            <h3>Analysis History</h3>
          </div>

          <Clock size={20} />
        </div>

        {history.length === 0 ? (
          <p className="scam-history-empty">
            No scans yet. Your recent analyses will appear here.
          </p>
        ) : (
          history.map((item) => (
            <div className="history-row" key={item.id}>
              <div className="history-icon">
                <Search size={17} />
              </div>

              <div className="history-message">
                <strong>
                  {item.message.slice(0, 65)}
                  {item.message.length > 65 ? "..." : ""}
                </strong>

                <span>{item.time}</span>
              </div>

              <span className={`history-risk ${item.risk.className}`}>
                {item.risk.label}
              </span>

              <strong className="history-score">{item.score}/100</strong>
            </div>
          ))
        )}
      </section>

      {/* SECURITY NOTICE */}
      <div className="scam-disclaimer">
        <Info size={17} />

        <p>
          <strong>Security Notice:</strong> This is an educational rule-based
          prototype, not a trained AI model or a live threat-intelligence
          service. A low score does not guarantee safety, and a high score is
          not proof of fraud.
        </p>
      </div>
    </div>
  );
}
