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
