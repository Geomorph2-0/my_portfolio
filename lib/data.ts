export type BuildStatus = "In Progress" | "Experimenting" | "Planned" | "Stalled";

export type CurrentBuild = {
  name: string;
  description: string;
  status: BuildStatus;
  tags?: string[];
  link?: string;
  started?: string;
};

export const currentBuilds: CurrentBuild[] = [
  {
    name: "MB0.1",
    description:
      "A custom flight controller built from scratch — STM32 + ESP32 MCUs, ICM-20948 and MPU-9250 IMUs, MS-5611 barometer. This is the hardware the UAV project documentation is built around. Currently in active implementation.",
    status: "In Progress",
    tags: ["STM32", "ESP32", "C", "IMU", "Sensor Fusion", "PCB Design"],
  },
  {
    name: "Kubit",
    description:
      "A wall-climbing robot designed to clean cobwebs using a vacuum/suction mechanism. Conceived mid-lecture, currently in ideation and early research. Stalled — final year project, exams, and end-of-year activities are taking priority. Firmware knowledge from MB0.1 is already feeding into the design thinking.",
    status: "Stalled",
    tags: ["Robotics", "Embedded Systems", "Mechanical Design"],
    link: "https://github.com/Geomorph2-0/Kubit",
  },
  {
    name: "RTranzact",
    description:
      "An offline campus payment system enabling monetary transactions over local WiFi — no internet required. Built for the Interswitch Discovery Series at Redeemer's University. Interswitch extended an invitation to develop it further, but competing responsibilities made it impossible to continue. Whether it picks back up after graduation is still an open question.",
    status: "Stalled",
    tags: ["Networking", "WiFi", "Fintech", "Systems Design"],
  },
  {
    name: "AI Navigation Agent",
    description:
      "An agent that helps users — developers and newcomers alike — navigate unfamiliar apps, websites, and tech stacks based on their specific use case. The problem: people get pointed at tools by friends or AI models and then get lost trying to actually use them. Still in the ideas and problem-definition stage.",
    status: "Experimenting",
    tags: ["AI", "Agents", "UX", "Developer Tools"],
  },
];

export const skillGroups = [
  {
    category: "Microcontrollers",
    items: ["ESP32", "STM32", "Arduino Uno/Mega/Nano", "Raspberry Pi"],
  },
  {
    category: "Dev Environments",
    items: ["VS Code", "PlatformIO", "STM32Cube Suite", "ESP-IDF", "Arduino IDE", "Vivado"],
  },
  {
    category: "Hardware",
    items: ["PCB Design (KiCad)", "Proteus Simulation", ""],
  },
  {
    category: "Software",
    items: ["C / C++", "Python"],
  },
];

export const skillTags = skillGroups.flatMap((g) => g.items);

export const experience = [
  {
    period: "Sep 2025 – Present",
    role: "Vice President",
    org: "Redeemer's University Technology Space",
    description: [
      "Lead technical initiatives and community building at the university's technology hub",
      "Spearheaded TechFest 5.0 — the community's annual event themed 'Create, Code and Culture'",
    ],
  },
  {
    period: "Aug 2025 – Sep 2025",
    role: "Network Intern",
    org: "MTN Nigeria",
    description: [
      "Monitored network infrastructure and troubleshot telecommunications hardware",
      "Conducted site audits as part of routine maintenance and troubleshooting activities",
    ],
  },
  {
    period: "Apr 2025 – Jul 2025",
    role: "Hardware Engineering Intern",
    org: "Constantlink Technologies Limited",
    description: [
      "Diagnosed and repaired PCB-level faults across major smartphone brands (Samsung, Infinix, Oppo, Tecno, iPhone, Itel, Redmi, Huawei, Gionee)",
      "Engineered solar power solutions including load calculation and panel/inverter installation",
      "Maintained industrial-grade hardware including inverters, UPS systems, and printers",
    ],
  },
];

export const education = [
  {
    period: "Oct 2021 – Oct 2026 (Expected)",
    role: "B.Eng. Computer Engineering",
    org: "Redeemer's University",
    description: [
      "Key Coursework: Computer Architecture, Microprocessor Systems, Digital Logic Design, Embedded Systems, Control Systems, Cryptography Principles and Applications",
    ],
  },
];
