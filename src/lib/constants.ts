export const SITE = {
  name: "Responin",
  tagline: "AI operations partner for growing teams",
  primaryCta: "Start with one workflow",
  secondaryCta: "See how it works",
  repo: "https://github.com/psatriyo/responin-system-design",
} as const;

export const NAV_ITEMS = [
  { label: "Workflows", href: "#workflows" },
  { label: "How it works", href: "#process" },
  { label: "Trust", href: "#trust" },
  { label: "Pilot", href: "#pilot" },
] as const;

export const HERO = {
  eyebrow: "Managed AI operations for SMB teams",
  title: "Stop being the operating system for your business.",
  description:
    "Responin checks, drafts, routes, follows up, and escalates repeatable operational work while keeping sensitive decisions human-approved.",
  proofPoints: [
    "Workflow memory and context",
    "Approval-first execution",
    "Audit logs and usage controls",
  ],
} as const;

export const SAFE_METRICS = [
  {
    value: "1",
    label: "messy workflow to start",
    detail: "Pilot one repeatable process, measure value, then expand.",
  },
  {
    value: "24/7",
    label: "scheduled monitoring",
    detail: "Event-triggered checks can run outside business hours.",
  },
  {
    value: "Human",
    label: "approval for sensitive actions",
    detail: "Customer-visible and high-risk actions stay controlled.",
  },
] as const;

export const PROBLEMS = [
  "Owners manually check chats, spreadsheets, dashboards, and reports.",
  "Follow-ups get delayed because process knowledge is scattered.",
  "Routine admin work consumes the attention of your best people.",
  "Scaling operations often means hiring coordinators instead of improving leverage.",
] as const;

export const PILLARS = [
  {
    title: "Learns, doesn't just execute",
    description:
      "Builds useful business memory: people, processes, preferences, recurring exceptions, and workflow-specific context.",
  },
  {
    title: "Acts, doesn't just advise",
    description:
      "Moves repeatable work forward by checking systems, drafting responses, preparing updates, routing exceptions, and reporting outcomes.",
  },
  {
    title: "Safe, not reckless",
    description:
      "Uses approval rules, scoped memory, audit logs, and quota controls so automation improves operations without losing human judgment.",
  },
] as const;

export const WORKFLOW_STEPS = [
  "Customer channel or scheduled trigger",
  "Workflow classification and context retrieval",
  "Policy, quota, and model routing checks",
  "AI reasoning, drafting, summarization, or recommendation",
  "Human approval where required",
  "Tool execution, audit log, and customer reporting",
] as const;

export const USE_CASES = [
  {
    title: "Daily business summary",
    description:
      "Collects operational changes, flags exceptions, and gives managers the next actions that matter.",
  },
  {
    title: "Customer escalation triage",
    description:
      "Classifies urgency, retrieves context, drafts a response, and routes risky cases for review.",
  },
  {
    title: "Invoice and payment follow-up",
    description:
      "Prepares reminders and status updates while preserving approval gates for financial communication.",
  },
  {
    title: "CRM or spreadsheet assistance",
    description:
      "Turns routine updates into reviewable actions so internal records stay current.",
  },
] as const;

export const TRUST_CONTROLS = [
  "Human approval before customer-visible or high-risk actions",
  "Scoped memory by customer, workspace, agent, and workflow",
  "Audit logs for workflow runs, approvals, and tool calls",
  "Quota and usage checks before model calls",
  "Credential references instead of plaintext configuration",
] as const;

export const FAQS = [
  {
    question: "Is Responin just ChatGPT?",
    answer:
      "No. Responin is positioned as a managed operations layer with workflow context, memory, integrations, approval rules, metering, and auditability.",
  },
  {
    question: "Will it message customers without approval?",
    answer:
      "Sensitive or customer-visible actions should require approval in the MVP. Responin can draft and recommend, while humans approve important decisions.",
  },
  {
    question: "What should a business automate first?",
    answer:
      "Start with one repeatable, measurable workflow such as daily summaries, escalation triage, payment follow-up, or order/status monitoring.",
  },
] as const;
