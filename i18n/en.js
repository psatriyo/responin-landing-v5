// English strings. Indonesian (the default) lives directly in index.html so the
// page is complete without JavaScript and is indexable. Every data-i18n /
// data-i18n-attr key in index.html must exist here (checked by scripts/check.mjs).
window.ResponinI18n = window.ResponinI18n || {};
window.ResponinI18n.en = {
  title: 'Responin | AI Operations Agent for Business Teams',
  meta: {
    description:
      'Responin is a managed AI operations agent that checks, drafts, routes, follows up, and escalates repetitive business work — with human approval for sensitive decisions.'
  },
  attr: {
    'brand.home': 'Responin home',
    'nav.primary': 'Primary navigation',
    'language.label': 'Choose language',
    'hero.panelLabel': 'Example Responin operations queue',
    'example.outputLabel': 'Example daily operations summary',
    'contact.startHref': 'mailto:hello@responin.com?subject=Responin%20workflow%20pilot',
    'contact.trustPackHref': 'mailto:hello@responin.com?subject=Responin%20trust%20%26%20technical%20pack%20request'
  },
  text: {
    'a11y.skip': 'Skip to content',
    'nav.workflows': 'Workflows',
    'nav.process': 'How it works',
    'nav.trust': 'Trust',
    'nav.pilot': 'Pilot',
    'nav.pricing': 'Packages',
    'nav.faq': 'FAQ',
    'cta.startOne': 'Start with one workflow',
    'cta.seeHow': 'See how it works',

    'hero.eyebrow': 'Managed AI operations agent for business teams',
    'hero.title': 'Stop being the operating system for your business.',
    'hero.description':
      'Many teams lose hours each day manually checking chats, spreadsheets, and reports. Responin checks, drafts, routes, follows up, and escalates repetitive operational work — while sensitive decisions stay human-approved.',
    'hero.proof.memory': 'Business-context memory',
    'hero.proof.approval': 'Approval for sensitive actions',
    'hero.proof.audit': 'Audit logs and usage controls',
    'queue.label': 'Today’s operations queue',
    'queue.invoice': 'Follow-up draft for invoice INV-1048',
    'queue.needsApproval': 'Needs approval',
    'queue.escalation': 'Repeated customer complaint',
    'queue.routed': 'Routed to manager',
    'queue.order': 'Order ORD-2217 waiting on stock',
    'queue.flagged': 'Flagged',
    'queue.summary': 'Daily business summary',
    'queue.ready': 'Ready',
    'queue.caption': 'Illustration. Sample data, not a real customer.',
    'metrics.oneTitle': 'workflow to start',
    'metrics.oneBody': 'Pilot one repeatable process, measure value, then expand.',
    'metrics.days': '30 days',
    'metrics.pilotTitle': 'pilot with a clear scope',
    'metrics.pilotBody': 'Focused workflows usually reach first measurable value in 2–4 weeks.',
    'metrics.human': 'Humans',
    'metrics.approvalTitle': 'approve sensitive actions',
    'metrics.approvalBody':
      'Scheduled checks can run outside business hours; customer-visible and financial actions still wait for approval.',

    'problems.eyebrow': 'The operating drag',
    'problems.title': 'Your best people are doing your least important work.',
    'problems.description':
      'Most businesses already have enough tools. What they lack is an operational layer that checks those tools, understands what changed, and moves routine work forward.',
    'problems.one': 'Owners and managers manually check chats, dashboards, spreadsheets, and reports every day.',
    'problems.two': 'Customer and payment follow-ups slip because context is scattered.',
    'problems.three': 'Team execution depends on whoever remembers the process.',
    'problems.four': 'Adding capacity means hiring another admin instead of improving leverage.',
    'problems.quote1': '“I check this spreadsheet every day.”',
    'problems.quote2': '“Customers keep asking for order status.”',
    'problems.quote3': '“Payments need constant follow-up.”',
    'problems.quote4': '“If I don’t remind the team, it doesn’t happen.”',

    'principles.eyebrow': 'Product principles',
    'principles.title': 'A reliable operations worker, not another chatbot.',
    'principles.description':
      'Responin runs repeatable business workflows with context, memory, and approval rules.',
    'principles.learnTitle': 'Learns, doesn’t just execute',
    'principles.learnBody':
      'Builds useful business memory — people, processes, preferences, recurring exceptions, and workflow-specific context — so you don’t re-explain your operations every time.',
    'principles.actTitle': 'Acts, doesn’t just advise',
    'principles.actBody':
      'Moves work forward: checks systems, drafts responses, prepares record updates, routes exceptions, and reports outcomes.',
    'principles.safeTitle': 'Safe, not reckless',
    'principles.safeBody':
      'Approval rules, scoped memory, audit logs, and quota controls make sure automation never removes human judgment.',

    'workflows.eyebrow': 'First workflows',
    'workflows.title': 'Start narrow, prove value, then expand.',
    'workflows.description':
      'The best first workflow is frequent, painful, measurable, and safe to run with approval gates.',
    'workflows.controlLabel': 'Control',
    'workflows.metricLabel': 'Measured by',
    'workflows.summaryTitle': 'Daily business summary',
    'workflows.summaryBody':
      'Every morning, checks approved sources, summarizes exceptions, blockers, and overdue items, and sends a concise brief to the owner.',
    'workflows.summaryControl': 'Internal summary runs automatically',
    'workflows.summaryMetric': 'Manual checking time reduced',
    'workflows.invoiceTitle': 'Invoice and payment follow-up drafts',
    'workflows.invoiceBody':
      'Finds overdue invoices, pulls customer context, and prepares a polite reminder draft.',
    'workflows.invoiceControl': 'Draft is automatic; sending requires approval',
    'workflows.invoiceMetric': 'Follow-up delay reduced',
    'workflows.escalationTitle': 'Customer escalation triage',
    'workflows.escalationBody':
      'Detects urgent messages, retrieves order or account context, summarizes the issue, and routes it to the right person.',
    'workflows.escalationControl': 'Classification is automatic; sensitive replies require approval',
    'workflows.escalationMetric': 'Urgent issues surfaced earlier',
    'workflows.orderTitle': 'Order and status monitoring',
    'workflows.orderBody':
      'Checks order, stock, or delivery data and flags delays before customers have to chase you.',
    'workflows.orderControl': 'Internal alerts are automatic; customer updates require approval',
    'workflows.orderMetric': 'Delayed orders caught earlier',
    'workflows.crmTitle': 'CRM or spreadsheet update assistant',
    'workflows.crmBody':
      'Turns completed conversations into proposed record updates so internal data stays current.',
    'workflows.crmControl': 'Policy-dependent; important records require approval',
    'workflows.crmMetric': 'Records updated faster',
    'workflows.reminderTitle': 'Team follow-ups and reminders',
    'workflows.reminderBody':
      'Tracks commitments and overdue tasks, sends internal reminders, and escalates only when it matters.',
    'workflows.reminderControl': 'Internal reminders per policy',
    'workflows.reminderMetric': 'Fewer manager interruptions',

    'process.eyebrow': 'How it works',
    'process.title': 'From trigger to approved action.',
    'process.description':
      'Responin separates reasoning from system control. AI reasons, summarizes, classifies, and drafts. The system authorizes, meters, executes, and logs.',
    'process.one': 'Channel or scheduled trigger',
    'process.two': 'Workflow classification and scoped context retrieval',
    'process.three': 'Policy, quota, and risk checks',
    'process.four': 'AI reasons, summarizes, or drafts a recommendation',
    'process.five': 'Human approval where required',
    'process.six': 'Tool execution, audit log, and customer reporting',
    'process.journeyTitle': 'Four-week adoption journey',
    'process.week1Title': 'Week 1 — Learn the business',
    'process.week1Body': 'Map checks, follow-ups, and exceptions. Define approval boundaries and success metrics.',
    'process.week2Title': 'Week 2 — Configure the agent',
    'process.week2Body': 'Connect approved sources, set triggers and approval rules, and test with real examples.',
    'process.week3Title': 'Week 3 — Launch with controls',
    'process.week3Body': 'Run in approval-only or recommendation-first mode, then tune from feedback.',
    'process.week4Title': 'Week 4 — Measure and expand',
    'process.week4Body': 'ROI report, results review, and the next workflow recommendation.',

    'trust.eyebrow': 'Trust model',
    'trust.title': 'Responin handles the volume. Humans keep judgment.',
    'trust.description':
      'The AI does not decide on its own what it is allowed to do. Platform policy decides whether an output can be executed, needs approval, or is blocked.',
    'trust.tableCaption': 'Default controls by action type',
    'trust.colAction': 'Action',
    'trust.colControl': 'Default control',
    'trust.row1Action': 'Summarize yesterday’s unresolved support items',
    'trust.row2Action': 'Draft a payment reminder',
    'trust.row3Action': 'Send a payment reminder to a customer',
    'trust.row4Action': 'Update an internal status field',
    'trust.row5Action': 'Change customer billing details',
    'trust.row6Action': 'Delete data, refund, discount, or change terms',
    'trust.auto': 'Automatic',
    'trust.autoDraft': 'Automatic draft',
    'trust.approval': 'Approval required',
    'trust.policy': 'Policy-dependent',
    'trust.restricted': 'Restricted / high-risk',
    'trust.accessTitle': 'Scoped data access',
    'trust.accessBody':
      'The agent sees only the sources approved for that workflow. Memory is scoped by customer, workspace, agent, and workflow. Credentials are stored as secret references, not plaintext.',
    'trust.auditTitle': 'Everything is logged',
    'trust.auditBody':
      'Triggers, model used, estimated usage, drafts, approval decisions, tool actions, operator access, and errors and retries are logged for review.',
    'trust.controlTitle': 'You stay in control',
    'trust.controlBody':
      'Pause a workflow at any time, revert to draft-only mode, disable one integration, change approval rules, cap usage, and review logs before re-enabling.',
    'trust.privacyTitle': 'Privacy, by deployment model',
    'trust.privacyBody':
      'For approved API-based model providers, customer data should not be used to train public models under the selected provider settings and terms. The provider and deployment model are documented for each customer.',
    'trust.managedTitle': 'Responin-managed',
    'trust.managedBody':
      'Scoped access, approved providers, audit logging, and customer-specific configuration. The usual starting point for SMB pilots.',
    'trust.ownApiTitle': 'Customer-owned API account',
    'trust.ownApiBody':
      'The customer owns the model-provider account or project while Responin configures the workflow layer.',
    'trust.ownDeployTitle': 'Customer-owned deployment',
    'trust.ownDeployBody':
      'Data can remain inside customer-controlled infrastructure, subject to the selected model and integration providers.',

    'compare.eyebrow': 'Why Responin',
    'compare.title': 'Between chatbots and rigid automation.',
    'compare.description':
      'ChatGPT helps people think and draft. Automation tools move clean data through fixed rules. Responin understands messy business context, prepares the next operational step, and asks for approval when judgment matters.',
    'compare.colAlt': 'Alternative',
    'compare.colGood': 'Good for',
    'compare.colLimit': 'Limitation',
    'compare.colWhy': 'Responin advantage',
    'compare.chatgpt': 'ChatGPT / generic AI chat',
    'compare.chatgptGood': 'One-off thinking and drafting',
    'compare.chatgptLimit': 'Depends on manual prompting; no recurring execution, approvals, or audit trail',
    'compare.chatgptWhy': 'Recurring workflows with memory, triggers, approvals, and logs',
    'compare.zapier': 'Zapier / Make',
    'compare.zapierGood': 'Deterministic automation between clean systems',
    'compare.zapierLimit': 'Brittle when data is messy or judgment is needed',
    'compare.zapierWhy': 'Handles natural language, context, and exceptions',
    'compare.admin': 'Hiring another admin',
    'compare.adminGood': 'Human judgment and relationships',
    'compare.adminLimit': 'Expensive, inconsistent, and scales with headcount',
    'compare.adminWhy': 'Gives leverage to the existing team; nuance stays with people',
    'compare.bpo': 'Virtual assistant / BPO',
    'compare.bpoGood': 'Outsourced manual execution',
    'compare.bpoLimit': 'Needs training, supervision, and data exposure',
    'compare.bpoWhy': 'Standardized workflows with logs and controls',
    'compare.custom': 'Custom automation',
    'compare.customGood': 'Highly specific systems',
    'compare.customLimit': 'Slow, expensive to maintain, often rigid',
    'compare.customWhy': 'Starts with one high-ROI workflow, then expands',

    'solutions.eyebrow': 'By industry',
    'solutions.title': 'For businesses that run on chat, spreadsheets, and email.',
    'solutions.description':
      'Best fit for Indonesian SMBs with 5–100 employees, and growing operations teams with 20–250 employees.',
    'solutions.startWith': 'Start with:',
    'solutions.retailTitle': 'Retail and distribution',
    'solutions.retailBody': 'Order inquiries, stock checks, payment confirmation, and supplier updates.',
    'solutions.retailFirst': 'Order monitoring',
    'solutions.clinicTitle': 'Clinics and appointment-based services',
    'solutions.clinicBody': 'Scheduling questions, reminders, complaints, and appointment changes.',
    'solutions.clinicFirst': 'Escalation triage + daily summary',
    'solutions.logisticsTitle': 'Logistics and order-heavy businesses',
    'solutions.logisticsBody': 'Dispatch checks, delivery status, ETA requests, and delayed handoffs.',
    'solutions.logisticsFirst': 'Status monitoring',
    'solutions.agencyTitle': 'Agencies and service firms',
    'solutions.agencyBody': 'Client updates, approvals, deadline reminders, and meeting follow-ups.',
    'solutions.agencyFirst': 'Team reminders + client update drafts',
    'solutions.financeTitle': 'Finance and admin-heavy businesses',
    'solutions.financeBody': 'Invoice checks, payment reminders, missing documents, and recurring reports.',
    'solutions.financeFirst': 'Invoice follow-up drafts',

    'example.eyebrow': 'Illustrative example',
    'example.title': 'A morning at a retail distributor.',
    'example.description':
      'A distributor with 20–60 employees takes orders through chat and marketplaces. Every morning, a manager checks unpaid invoices, order-status questions, unconfirmed stock, and yesterday’s complaints.',
    'example.after':
      'With Responin, one morning workflow reads approved sources, classifies exceptions, prepares drafts, and requests approval for customer-visible or financial messages.',
    'example.disclaimer':
      'This is a model example to explain the workflow, not a customer case study. Real results are measured during the pilot.',
    'example.outHead': 'Daily Operations Summary — 08:30',
    'example.outIntro': '3 items need attention today:',
    'example.out1Title': 'Payment follow-up needed',
    'example.out1Body':
      'INV-1048 is 8 days overdue. The customer usually pays after a reminder. Draft ready — approval required before sending.',
    'example.out2Title': 'Order delay risk',
    'example.out2Body':
      'ORD-2217 is waiting for stock confirmation. The customer asked about delivery timing yesterday at 17:42. Recommended: confirm with the warehouse before replying.',
    'example.out3Title': 'Escalation candidate',
    'example.out3Body':
      'Same complaint twice in 24 hours. Recommended: assign to the operations manager and prepare an update draft.',

    'readiness.eyebrow': 'What’s ready today',
    'readiness.title': 'Clear about what’s real.',
    'readiness.description':
      'We would rather be honest about boundaries than promise everything. Integrations are chosen per pilot based on the most reliable data sources.',
    'readiness.available': 'Available',
    'readiness.pilot': 'Pilot-ready',
    'readiness.roadmap': 'On the roadmap',
    'readiness.notSupported': 'Not supported',
    'readiness.audit': 'Workflow discovery and operations audit',
    'readiness.workflows':
      'Daily summaries, invoice follow-ups, escalation triage, order monitoring, CRM/spreadsheet updates',
    'readiness.approvals': 'Human approval for sensitive actions',
    'readiness.telegram': 'Telegram-based agent interface',
    'readiness.email': 'Gmail / email draft support',
    'readiness.sheets': 'Direct Google Sheets read/write (pilots can start from exports)',
    'readiness.whatsapp': 'WhatsApp Business — provider and templates confirmed per pilot',
    'readiness.autonomous': 'Fully autonomous customer-facing messaging, and unlimited AI usage',

    'pilot.eyebrow': '30-day pilot program',
    'pilot.title': 'Pick one messy workflow. Make it measurable.',
    'pilot.description':
      'The pilot is not an open-ended AI experiment. It is a focused operational improvement project with clear scope, safeguards, and success metrics.',
    'pilot.w1': 'Week 1',
    'pilot.w1Title': 'Discovery',
    'pilot.w1Body': 'Workflow spec, data sources, approval policy, and baseline.',
    'pilot.w2': 'Week 2',
    'pilot.w2Title': 'Configuration',
    'pilot.w2Body': 'Connected channels and sources, draft workflow, test runs.',
    'pilot.w3': 'Week 3',
    'pilot.w3Title': 'Controlled operation',
    'pilot.w3Body': 'Daily runs, approval review, error handling, refinement.',
    'pilot.w4': 'Week 4',
    'pilot.w4Title': 'Measure and decide',
    'pilot.w4Body': 'ROI report and recommendation: expand, refine, or stop.',
    'pilot.weProvideTitle': 'What Responin provides',
    'pilot.we1': 'Workflow discovery and design',
    'pilot.we2': 'Agent, memory, and context configuration',
    'pilot.we3': 'Integration setup for approved sources',
    'pilot.we4': 'Approval policy configuration',
    'pilot.we5': 'Weekly review and optimization',
    'pilot.we6': 'Usage, cost, and pilot outcome reporting',
    'pilot.youProvideTitle': 'What you provide',
    'pilot.you1': 'One workflow owner',
    'pilot.you2': 'Access to approved sources or exported data',
    'pilot.you3': 'Approval rules for sensitive actions',
    'pilot.you4': 'Examples of good and bad outputs',
    'pilot.you5': 'Feedback during the controlled live phase',
    'pilot.you6': 'No coding required',

    'pricing.eyebrow': 'Packages',
    'pricing.title': 'Modular pricing for Indonesian operations.',
    'pricing.description':
      'Responin is not a low-cost unlimited AI subscription. Evaluate it against the cost of adding another admin or coordinator. Pricing is set after a consultation, based on workflows and volume.',
    'pricing.auditTitle': 'Workflow audit',
    'pricing.auditTag': 'Free for small businesses',
    'pricing.audit1': 'Workflow map',
    'pricing.audit2': 'Automation opportunity list',
    'pricing.audit3': 'Human approval points',
    'pricing.audit4': 'Data and integration requirements',
    'pricing.starterTitle': 'Starter Pilot',
    'pricing.starterTag': 'To prove the first workflow',
    'pricing.starter1': '1 agent, 1–3 workflows',
    'pricing.starter2': 'Basic usage quota',
    'pricing.starter3': 'Approval workflow',
    'pricing.starter4': 'Monthly report',
    'pricing.growthTitle': 'Growth Operations',
    'pricing.growthTag': 'For active operational use',
    'pricing.growth1': '1–3 agents, 2–5 workflows',
    'pricing.growth2': 'Higher usage quota',
    'pricing.growth3': 'Monthly optimization',
    'pricing.growth4': 'Priority issue handling',
    'pricing.scaleTitle': 'Scale / Enterprise',
    'pricing.scaleTag': 'For larger teams',
    'pricing.scale1': 'Multiple agents and custom workflows',
    'pricing.scale2': 'Customer-owned API option',
    'pricing.scale3': 'Audit log exports',
    'pricing.scale4': 'Custom security review',
    'pricing.note': 'Every package uses quotas and usage reporting, so AI costs never come as a surprise.',

    'faq.eyebrow': 'Buyer questions',
    'faq.title': 'Clear answers before the pilot starts.',
    'faq.q1': 'Is Responin just ChatGPT?',
    'faq.a1':
      'No. Responin is configured around a business workflow: approved data sources, memory, integrations, approval rules, usage limits, and reporting. It is an operations layer that knows what to check, when to escalate, and which actions require approval.',
    'faq.q2': 'Will it message customers without approval?',
    'faq.a2':
      'Not for sensitive or customer-visible actions. Responin can draft and recommend, but external messages, financial actions, disputes, refunds, medical/legal matters, and low-confidence cases require approval.',
    'faq.q3': 'Where does our data go?',
    'faq.a3':
      'It depends on the deployment model. Responin-managed deployments use scoped access, approved providers, secret references, and audit logging. Customer-owned API or deployment options give larger buyers stronger control. We are explicit about which sources are connected, which provider processes the model call, and what is logged.',
    'faq.q4': 'Does Responin train AI on our data?',
    'faq.a4':
      'Responin does not use customer data to train public models. For each deployment, we confirm the model provider, account ownership, and its data-processing terms.',
    'faq.q5': 'What if the AI is wrong?',
    'faq.a5':
      'The AI reasons, classifies, summarizes, and drafts; the platform authorizes, meters, executes, and logs. High-risk actions require approval, ambiguous cases are escalated, and outputs are reviewed during pilot tuning.',
    'faq.q6': 'Does it work with WhatsApp?',
    'faq.a6':
      'WhatsApp matters for Indonesian SMBs, but the provider and approach are chosen per deployment. Early pilots can start with Telegram, email, spreadsheets, or exported data while WhatsApp support is finalized.',
    'faq.q7': 'How long before we see results?',
    'faq.a7':
      'Focused pilots aim for first measurable value within the first month — usually 2–4 weeks. The fastest results come from workflows that are frequent, repetitive, measurable, and handled manually today.',
    'faq.q8': 'Does our team need technical skills?',
    'faq.a8':
      'No coding is required. You provide workflow context, data-source access, approval owners, and feedback during tuning. Responin is a managed implementation, not a self-serve developer platform.',
    'faq.q9': 'Why not just hire another admin?',
    'faq.a9':
      'Hiring adds recruiting, onboarding, and management costs. Start with the workflow you would give your next admin, then test whether Responin can reduce that workload before adding headcount.',
    'faq.q10': 'What should we automate first?',
    'faq.a10':
      'Something your team checks every day, repeats often, and can measure clearly: invoice follow-up, order monitoring, daily summaries, escalation triage, or spreadsheet updates. Bring one messy workflow to the audit.',

    'contact.eyebrow': 'Start with one workflow',
    'contact.title': 'Tell us the workflow that drains your team’s time.',
    'contact.description':
      'We will map it, identify what can be automated safely, and propose a 30-day pilot with clear metrics.',
    'contact.start': 'Request a workflow audit',
    'contact.trustPack': 'Request the trust & technical pack',
    'contact.or': 'Or email us directly:',
    'footer.tagline': 'Responin handles the volume. Humans keep judgment.'
  }
};
