export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Bridge between Hardware & Software, creating complete solutions from chip to cloud",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "MERN Stack + Embedded Systems expertise for end-to-end solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Constantly evolving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for IoT and innovation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building cutting-edge IoT solutions",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Home Automation System",
    des: "IoT-powered home automation using ESP32 microcontrollers with real-time control via mobile app and web dashboard. Features include voice control, energy monitoring, and automated scheduling.",
    img: "/p1.svg",
    iconLists: ["/esp32.svg", "/re.svg", "/node.svg", "/mongo.svg", "/c.svg"],
    link: "https://github.com/yourusername/smart-home",
  },
  {
    id: 2,
    title: "MERN Stack Sensor Dashboard",
    des: "Full-stack web application for visualizing real-time sensor data from IoT devices. Built with MongoDB, Express, React, and Node.js featuring live charts, data analytics, and RESTful API.",
    img: "/p2.svg",
    iconLists: ["/mongo.svg", "/express.svg", "/re.svg", "/node.svg", "/tail.svg"],
    link: "https://github.com/yourusername/sensor-dashboard",
  },
  {
    id: 3,
    title: "C++ Microcontroller Library",
    des: "High-performance embedded library for Arduino and ESP32 platforms. Includes sensor drivers, communication protocols (I2C, SPI, UART), and optimized algorithms for resource-constrained devices.",
    img: "/p3.svg",
    iconLists: ["/c.svg", "/arduino.svg", "/esp32.svg", "/git.svg"],
    link: "https://github.com/yourusername/mcu-library",
  },
  {
    id: 4,
    title: "3D IoT Device Visualizer",
    des: "Interactive 3D web visualization of IoT device networks using Three.js and React. Real-time rendering of device status, data flow, and network topology with stunning visual effects.",
    img: "/p4.svg",
    iconLists: ["/three.svg", "/re.svg", "/ts.svg", "/tail.svg", "/framer.svg"],
    link: "https://github.com/yourusername/3d-iot-viz",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Embedded Systems Engineer",
    desc: "Developed firmware for IoT devices using C/C++ on Arduino and ESP32 platforms. Implemented sensor integration, power optimization, and wireless communication protocols.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer (MERN)",
    desc: "Built scalable web applications using MongoDB, Express.js, React, and Node.js. Designed RESTful APIs, implemented authentication systems, and optimized database performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "IoT Solutions Architect",
    desc: "Designed end-to-end IoT systems integrating hardware sensors with cloud-based platforms. Led development of real-time monitoring dashboards and data analytics pipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Hardware-Software Integration Lead",
    desc: "Led cross-functional teams bridging embedded systems and web applications. Architected solutions for industrial automation, smart cities, and connected devices.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/Souvikhazra15",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/yourusername",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hazrasouvik21/",
  },
];

export const techStack = {
  web: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "Next.js"],
  embedded: ["C/C++", "Arduino", "ESP32", "Raspberry Pi", "MQTT", "I2C/SPI", "FreeRTOS"],
  database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "InfluxDB"],
  tools: ["Git", "Docker", "VS Code", "Postman", "Arduino IDE", "PlatformIO"],
  frameworks: ["Three.js", "Framer Motion", "Socket.io", "TensorFlow Lite"],
};
