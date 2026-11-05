import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileWarning,
  ShieldCheck,
  Phone,
  MessageSquare,
  Globe,
  CreditCard,
  User,
  Calendar,
  Send,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Info,
} from "lucide-react";

const initialForm = {
  scamType: "Digital Arrest",
  contactMethod: "Phone Call",
  incidentDate: "",
  suspectDetails: "",
  description: "",
  financialLoss: "No financial loss",
  amount: "",
};

export default function ReportScam() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.scamType || !form.description.trim()) {
      setError("Please select a scam type and describe the incident.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  function resetForm() {
    setForm(initialForm);
    setSubmitted(false);
    setError("");
  }

  return (
    <div className="module-page">
      <div className="module-heading">
        <div className="eyebrow">COMMUNITY CYBER SAFETY</div>
        <h1>
          Report a <span>Scam</span>
        </h1>
        <p>
          Record suspicious calls, messages, websites and payment requests. Help
          organize incident information for further action.
        </p>
      </div>

      <div className="report-info-banner">
        <div className="report-info-icon">
          <ShieldCheck size={25} />
        </div>
        <div>
          <strong>Take action. Stay protected.</strong>
          <p>
            If money has been lost, contact your bank immediately and report
            cyber financial fraud through India's official cybercrime helpline
            1930 or cybercrime.gov.in.
          </p>
        </div>
      </div>

      {!submitted ? (
        <motion.form
          className="panel report-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="report-form-heading">
            <div className="report-heading-icon">
              <FileWarning size={23} />
            </div>
            <div>
              <h2>Incident Information</h2>
              <p>
                Fill in the details you know. Avoid sharing passwords or OTPs.
              </p>
            </div>
          </div>

          <div className="report-form-grid">
            <div className="field-wrap">
              <label htmlFor="scamType">Type of Scam *</label>
              <select
                id="scamType"
                name="scamType"
                value={form.scamType}
                onChange={updateField}
                required
              >
                <option>Digital Arrest</option>
                <option>Banking Fraud</option>
                <option>UPI / Payment Fraud</option>
                <option>Phishing / Fake Link</option>
                <option>Identity Impersonation</option>
                <option>Job / Investment Fraud</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field-wrap">
              <label htmlFor="contactMethod">How did they contact you?</label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={form.contactMethod}
                onChange={updateField}
              >
                <option>Phone Call</option>
                <option>SMS / Text Message</option>
                <option>WhatsApp / Social Media</option>
                <option>Email</option>
                <option>Website / Online Advertisement</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field-wrap">
              <label htmlFor="incidentDate">
                <Calendar size={15} /> Incident Date
              </label>
              <input
                id="incidentDate"
                type="date"
                name="incidentDate"
                value={form.incidentDate}
                onChange={updateField}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="field-wrap">
              <label htmlFor="suspectDetails">
                <User size={15} /> Suspect Contact Details
              </label>
              <input
                id="suspectDetails"
                type="text"
                name="suspectDetails"
                placeholder="Optional phone number, email or website"
                value={form.suspectDetails}
                onChange={updateField}
              />
            </div>

            <div className="field-wrap full-width">
              <label htmlFor="description">Describe What Happened *</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="Explain the suspicious call, message, request or activity..."
                value={form.description}
                onChange={updateField}
                required
              />
              <span className="field-hint">
                Do not enter passwords, OTPs, PINs or full card details.
              </span>
            </div>

            <div className="field-wrap">
              <label htmlFor="financialLoss">Was Money Lost?</label>
              <select
                id="financialLoss"
                name="financialLoss"
                value={form.financialLoss}
                onChange={updateField}
              >
                <option>No financial loss</option>
                <option>Yes, money was lost</option>
                <option>Not sure</option>
              </select>
            </div>

            {form.financialLoss === "Yes, money was lost" && (
              <div className="field-wrap">
                <label htmlFor="amount">Approximate Amount Lost (₹)</label>
                <input
                  id="amount"
                  type="number"
                  name="amount"
                  min="0"
                  placeholder="Enter approximate amount"
                  value={form.amount}
                  onChange={updateField}
                />
              </div>
            )}
          </div>

          {error && (
            <div className="report-error">
              <AlertTriangle size={18} />
              {error}
            </div>
          )}

          <div className="report-submit-area">
            <div className="report-privacy-note">
              <Info size={17} />
              <span>
                Demo form only. Your information is not sent to any authority or
                stored on a server.
              </span>
            </div>

            <button className="primary-button" type="submit">
              <Send size={17} />
              Review Report
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.section
          className="panel report-success"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="report-success-icon">
            <CheckCircle2 size={46} />
          </div>

          <div className="eyebrow">DEMO REPORT PREPARED</div>
          <h2>Incident Details Recorded</h2>
          <p>
            Your report details are displayed below for review. This prototype
            has not transmitted or officially submitted them.
          </p>

          <div className="report-summary">
            <div>
              <span>Scam Type</span>
              <strong>{form.scamType}</strong>
            </div>
            <div>
              <span>Contact Method</span>
              <strong>{form.contactMethod}</strong>
            </div>
            <div>
              <span>Incident Date</span>
              <strong>{form.incidentDate || "Not provided"}</strong>
            </div>
            <div>
              <span>Financial Loss</span>
              <strong>{form.financialLoss}</strong>
            </div>
            {form.amount && (
              <div>
                <span>Approximate Amount</span>
                <strong>₹{form.amount}</strong>
              </div>
            )}
            <div className="report-summary-description">
              <span>Description</span>
              <strong>{form.description}</strong>
            </div>
          </div>

          <div className="official-report-reminder">
            <AlertTriangle size={21} />
            <div>
              <strong>Need to report an actual cybercrime?</strong>
              <p>
                Call 1930 for cyber financial fraud or use the official National
                Cyber Crime Reporting Portal.
              </p>
              <a
                href="https://cybercrime.gov.in/"
                target="_blank"
                rel="noreferrer"
              >
                Open Official Cyber Crime Portal
              </a>
            </div>
          </div>

          <button className="primary-button" onClick={resetForm}>
            <RotateCcw size={17} />
            Create Another Report
          </button>
        </motion.section>
      )}

      <div className="disclaimer-strip">
        <Info size={19} />
        <p>
          This is a frontend demonstration. It does not submit reports, contact
          police, store incident records or replace official reporting.
        </p>
      </div>
    </div>
  );
}
