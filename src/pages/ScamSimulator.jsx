import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

const scenarios = [
  {
    category: "DIGITAL ARREST",
    title: "The Fake Police Call",
    message:
      "A caller claims to be a police officer. They say your Aadhaar number is connected to a criminal case and demand that you stay on a video call.",
    options: [
      "Stay on the call and follow instructions.",
      "End the call and verify through official channels.",
      "Share your OTP to prove your identity.",
    ],
    answer: 1,
    explanation:
      "Correct! End suspicious calls. Verify the claim independently through official contact details. Police do not conduct digital arrests through video calls.",
  },
  {
    category: "BANKING FRAUD",
    title: "The Urgent Bank Message",
    message:
      "You receive an SMS saying your bank account will be blocked in 10 minutes. It contains a link asking you to enter your card number and OTP.",
    options: [
      "Click the link and enter the details.",
      "Forward your OTP to the sender.",
      "Ignore the link and contact your bank using its official number.",
    ],
    answer: 2,
    explanation:
      "Correct! Do not use links in suspicious messages. Contact your bank through its official app, website or published phone number.",
  },
  {
    category: "UPI SCAM",
    title: "The Unexpected Payment Request",
    message:
      "A stranger says they want to send you money through UPI. They ask you to enter your UPI PIN to receive the amount.",
    options: [
      "Enter the UPI PIN to receive money.",
      "Never enter your PIN to receive money; verify the transaction.",
      "Share your PIN with the stranger.",
    ],
    answer: 1,
    explanation:
      "Correct! A UPI PIN authorizes a payment. You do not need to enter it to receive money.",
  },
  {
    category: "IMPERSONATION",
    title: "The Fake Company Recruiter",
    message:
      "Someone claiming to be a company recruiter offers you a job immediately but asks you to pay a registration fee to secure the position.",
    options: [
      "Pay immediately to secure the job.",
      "Share your banking details.",
      "Verify the recruiter and job through the company's official website.",
    ],
    answer: 2,
    explanation:
      "Correct! Verify job offers independently. Be cautious about advance fees, pressure and requests for sensitive information.",
  },
  {
    category: "PHISHING",
    title: "The Prize Winner Message",
    message:
      "You receive a message saying you won a large lottery prize, even though you never entered. The sender asks you to pay a processing fee.",
    options: [
      "Pay the processing fee.",
      "Ignore the offer and do not share personal or financial details.",
      "Send your identity documents.",
    ],
    answer: 1,
    explanation:
      "Correct! Unexpected prizes requiring advance payment are a common scam warning sign.",
  },
];

export default function ScamSimulator() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const scenario = scenarios[current];
  const answered = selected !== null;

  function chooseAnswer(index) {
    if (answered) return;

    setSelected(index);

    if (index === scenario.answer) {
      setScore((previous) => previous + 1);
    }
  }

  function nextScenario() {
    if (current === scenarios.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <div className="module-page">
      <div className="module-heading">
        <div className="eyebrow">INTERACTIVE CYBERSECURITY TRAINING</div>
        <h1>
          Scam <span>Simulator</span>
        </h1>
        <p>
          Test your cyber safety knowledge with realistic educational scenarios
          and learn to spot common scam tactics.
        </p>
      </div>

      <div className="simulator-intro">
        <div className="simulator-intro-icon">
          <Gamepad2 size={36} />
        </div>
        <div>
          <div className="eyebrow">SECURITY AWARENESS CHALLENGE</div>
          <h2>Would You Spot the Scam?</h2>
          <p>Five scenarios. Five decisions. Learn how to respond safely.</p>
        </div>
        <div className="scenario-total">
          <strong>{scenarios.length}</strong>
          <span>SCENARIOS</span>
        </div>
      </div>

      {!finished ? (
        <motion.section
          className="panel simulator-panel"
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="simulator-progress-header">
            <span>
              SCENARIO {current + 1} OF {scenarios.length}
            </span>
            <span>
              YOUR SCORE: {score}/{scenarios.length}
            </span>
          </div>

          <div className="simulator-progress-track">
            <div
              className="simulator-progress-fill"
              style={{
                width: `${((current + 1) / scenarios.length) * 100}%`,
              }}
            />
          </div>

          <div className="scenario-category">
            <AlertTriangle size={17} />
            {scenario.category}
          </div>

          <h2 className="scenario-title">{scenario.title}</h2>

          <div className="scenario-message">
            <MessageSquare size={21} />
            <p>{scenario.message}</p>
          </div>

          <h3 className="scenario-question">What should you do?</h3>

          <div className="scenario-options">
            {scenario.options.map((option, index) => {
              const isCorrect = index === scenario.answer;
              const isSelected = selected === index;

              let className = "scenario-option";

              if (answered && isCorrect) {
                className += " option-correct";
              } else if (answered && isSelected) {
                className += " option-wrong";
              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() => chooseAnswer(index)}
                  disabled={answered}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {answered && isCorrect && <CheckCircle2 size={19} />}
                  {answered && isSelected && !isCorrect && (
                    <XCircle size={19} />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div
                className={`scenario-feedback ${
                  selected === scenario.answer
                    ? "feedback-correct"
                    : "feedback-wrong"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {selected === scenario.answer ? (
                  <CheckCircle2 size={22} />
                ) : (
                  <ShieldAlert size={22} />
                )}

                <div>
                  <strong>
                    {selected === scenario.answer
                      ? "Excellent! Correct Answer."
                      : "Not quite. Learn the safe response."}
                  </strong>
                  <p>{scenario.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="simulator-actions">
            <button className="secondary-button" onClick={restart}>
              <RotateCcw size={17} />
              Restart
            </button>

            <button
              className="primary-button"
              disabled={!answered}
              onClick={nextScenario}
            >
              {current === scenarios.length - 1
                ? "View My Result"
                : "Next Scenario"}
              <ArrowRight size={17} />
            </button>
          </div>
        </motion.section>
      ) : (
        <motion.section
          className="panel simulator-complete"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="trophy-icon">
            <Trophy size={48} />
          </div>
          <div className="eyebrow">CHALLENGE COMPLETED</div>
          <h2>Your Cyber Safety Score</h2>

          <div className="final-score">
            {score}
            <span>/{scenarios.length}</span>
          </div>

          <h3>
            {score === 5
              ? "Cyber Safety Champion!"
              : score >= 3
                ? "Great Work! Keep Learning."
                : "Keep Practicing and Stay Alert."}
          </h3>

          <p>
            You answered {score} out of {scenarios.length} scenarios correctly.
            Continue learning to strengthen your awareness of cyber threats.
          </p>

          <div className="simulator-result-actions">
            <button className="primary-button" onClick={restart}>
              <RotateCcw size={17} />
              Play Again
            </button>
          </div>
        </motion.section>
      )}

      <div className="disclaimer-strip">
        <Lightbulb size={19} />
        <p>
          This simulator is an educational activity. Its scenarios are
          illustrative and do not represent live threat detection.
        </p>
      </div>
    </div>
  );
}
