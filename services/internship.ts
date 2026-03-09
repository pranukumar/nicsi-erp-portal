export type InternshipCategory = {
  title: string;
  criteria: string[];
};

export type InternshipContent = {
  lastUpdated: string;
  sourceFileDate: string;
  sourceNoticeUrl: string;
  objective: string[];
  benefits: string[];
  policy: Array<{ label: string; value: string }>;
  eligibility: InternshipCategory[];
  documentsRequired: string[];
  process: Array<{ step: string; detail: string }>;
  domains: string[];
  compliance: string[];
};

const internshipContent: InternshipContent = {
  lastUpdated: "February 27, 2026",
  sourceFileDate: "January 28, 2026",
  sourceNoticeUrl: "/pdfs/internship/NICSI_DOCS.pdf",
  objective: [
    "NICSI Internship Scheme aims to provide practical exposure to design, development, implementation and management of e-Governance solutions and digital public infrastructure.",
    "The programme bridges academic learning with real-world government systems including cybersecurity, cloud computing, software delivery and ICT-enabled public services.",
    "The scheme also promotes innovation, ethical technology practices and professional discipline while building understanding of government IT processes.",
  ],
  benefits: [
    "Structured exposure to Artificial Intelligence, Cyber Security, Cloud Computing, Data Analytics and Digital Governance.",
    "Participation in live Government IT and e-Governance project environments.",
    "Improves technical proficiency, analytical capability and understanding of public-sector digital systems.",
    "Strengthens employability and academic-industry relevance aligned with national digital transformation goals.",
    "Stipend may be considered by NICSI as per prevailing policy and competent authority approval.",
  ],
  policy: [
    { label: "Internship Type", value: "Paid/Unpaid (as per NICSI policy)" },
    { label: "Availability", value: "Throughout the year based on NICSI requirements" },
    { label: "Duration", value: "Minimum 6 weeks and maximum 6 months" },
    { label: "Attendance", value: "Minimum 80% required; below 75%: no extension/certificate" },
    { label: "Division Capacity", value: "Up to 10 interns per division at a time (relaxable)" },
  ],
  eligibility: [
    {
      title: "General Academic Scope",
      criteria: [
        "Bonafide students from recognized University/Institution in India or abroad.",
        "Eligible programmes include B.Tech/B.E. (CS/IT/Electronics/allied), MCA, LLB, MBA, and specialized tracks in Cyber Security, Data Science, AI/ML and Software Development.",
        "Selection is based on academic merit and relevance to NICSI functional domains.",
      ],
    },
    {
      title: "Category A: Undergraduate Students",
      criteria: [
        "Completed/appeared term-end exams of 2nd year / 4th semester.",
        "Minimum 70% (or equivalent) marks in Class 12.",
      ],
    },
    {
      title: "Category B: Postgraduate / Research",
      criteria: [
        "Completed/appeared term-end exams of 1st year / 2nd semester of PG, or pursuing Research/PhD.",
        "Minimum 75% (or equivalent) marks in Graduation.",
      ],
    },
    {
      title: "Category C: Final Exam Completed (Awaiting Higher Admission)",
      criteria: [
        "Minimum 70% cumulative marks in all semesters/years of Graduation/PG till application date.",
        "Gap between final result declaration and internship start month must not exceed 6 months.",
      ],
    },
  ],
  documentsRequired: [
    "Photocopy of Class 10 marksheet",
    "Latest marksheet or provisional certificate issued by University/College",
    "Original NOC from University/College at joining time",
  ],
  process: [
    {
      step: "Online Application Window",
      detail: "Applications are accepted online on NICSI website from 1st to 10th of every month.",
    },
    {
      step: "Internship Month Planning",
      detail: "Application can be made up to 6 months in advance, but not later than 2 months before desired internship month.",
    },
    {
      step: "Area of Interest Declaration",
      detail: "Applicants must clearly indicate internship domain/area; ineligible submissions are auto-rejected by system.",
    },
    {
      step: "Screening & Selection",
      detail: "Applications are reviewed by concerned Heads of Divisions / HoD-HR / NICSI for scrutiny and final selection.",
    },
    {
      step: "Joining Compliance",
      detail: "Selected candidates must produce required documents at joining; otherwise candidature is cancelled.",
    },
  ],
  domains: [
    "Artificial Intelligence & Machine Learning (AI/ML)",
    "Blockchain Technology",
    "Cyber Security & Threat Analysis",
    "Quantum Computing & Cryptography",
    "Cloud Computing & Infrastructure",
    "Data Analytics & Big Data Solutions",
    "Internet of Things (IoT)",
    "DevOps & Automation",
    "Web & Mobile App Development (React / Angular / PHP / .NET / Java)",
    "Micro Services Architecture",
    "Open APIs & Backend Integrations",
    "Software Documentation & Testing",
    "UI/UX and Frontend Development",
    "Networking & Infrastructure Technologies",
    "Chatbots & Intelligent Interfaces",
    "GIS Technologies",
    "Cloud Data Management",
    "Scanning & Digitalisation",
    "Social Media",
    "Legal / HR",
    "e-Governance Consultancy",
  ],
  compliance: [
    "Intern must arrange own laptop; NICSI provides workspace, internet and required office support.",
    "Successful completion certificate is issued by concerned subject division.",
    "Conduct, data access and supervision are controlled by concerned Heads/Advisers.",
    "MD, NICSI may relax conditions for deserving candidates.",
  ],
};

export async function getInternshipContent(): Promise<InternshipContent> {
  return internshipContent;
}
