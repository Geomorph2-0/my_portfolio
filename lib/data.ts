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
      "A custom flight controller built from scratch on a dual-MCU, dual-IMU architecture with a barometer. This is the hardware the UAV project documentation is built around. Currently in active implementation.",
    status: "In Progress",
    tags: ["STM32", "ESP32", "C", "IMU", "Sensor Fusion", "PCB Design"],
    link: "https://github.com/Geomorph2-0/fyp2",
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
      "An offline campus payment system enabling peer-to-peer transactions over local WiFi using RCoin — a custom digital currency. Built solo (team MB-Zero) for the Interswitch Discovery Series at Redeemer's University in September 2025. Placed second overall. Interswitch extended an invitation to develop it further. Stalled due to final year workload — resumes after graduation.",
    status: "Stalled",
    tags: ["Networking", "WiFi", "Fintech", "Systems Design"],
    link: "https://github.com/Geomorph2-0/R-Tranzact",
  },
  {
    name: "ps4-controller",
    description:
      "A professional-grade C library for DualShock 4 controller input — full HID report decoding (buttons, sticks, triggers, touchpad, IMU, battery), USB wired input via libusb, Bluetooth via BlueZ, with planned ESP32 adaptation for wireless embedded projects.",
    status: "Planned",
    tags: ["C", "Bluetooth", "ESP32", "Embedded Systems"],
    link: "https://github.com/Geomorph2-0/ps4-controller",
  },
  {
    name: "Veroboard Planner",
    description:
      "A browser-based layout tool for stripboard and perfboard circuits. Plan designs visually before picking up a soldering iron — route wires, place components (resistors, caps, LEDs, ICs, connectors), drop batteries, and export as JSON. Built with React, TypeScript, and Zustand.",
    status: "Stalled",
    tags: ["React", "TypeScript", "Tools", "Hardware"],
    link: "https://github.com/Geomorph2-0/veroboard_planner",
  },
  {
    name: "AI Navigation Agent",
    description:
      "An agent that helps users — developers and newcomers alike — navigate unfamiliar apps, websites, and tech stacks based on their specific use case. The problem: people get pointed at tools by friends or AI models and then get lost trying to actually use them. Still in the ideas and problem-definition stage.",
    status: "Planned",
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
    period: "Aug 2025 – Present",
    role: "Vice President",
    org: "Redeemer's University Technology Space",
    description: [
      "Secured a partnership with NVIDIA to deliver a hands-on training and certification workshop, upskilling 100 students across the university",
      "Organised a community visit to Flutterwave HQ, connecting members with industry experts for a live knowledge-sharing session",
      "Hosted a two-week webinar series with alumni of the university, featuring a Senior Solutions Architect at AWS and a Postdoctoral Researcher at the University of Manchester",
      "Planned and hosted the 5th Edition of TechFest, welcoming tech communities from 6 universities and securing sponsorship from Flutterwave, VFD Bank, Payaza, AfricaTech Academy, Bank78, and Digital Inclusion Initiative",
      "Organised and hosted a Hackathon as a flagship event of TechFest, with Payaza as headline sponsor",
      "Partnered with DII to secure 100 Coursera course licences for top-performing community members",
    ],
  },
  {
    period: "Aug 2025 – Sep 2025",
    role: "Network Intern",
    org: "MTN Nigeria",
    description: [
      "Monitored network infrastructure and supported troubleshooting of telecommunications hardware",
      "Performed daily power and HVAC checks across the switching center to maintain optimal operating conditions",
      "Conducted and documented site audits at critical locations across the state, including the International Conference Centre, University of Ibadan",
      "Attended to customer complaints onsite to help improve network performance in affected areas",
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
      "Key Coursework: Computer Architecture, Microprocessor Systems, Digital Logic Design, Embedded Systems, Control Systems, Cryptography Principles and Applications, Technology Policy",
    ],
  },
];
