export const educationData = [
  {
    institution: "Shahid Beheshti University (SBU)",
    degree: "Master of Science (M.Sc.) in Data Analysis",
    period: "2024 - Present",
    status: "In Progress",
    statusColor: "teal",
    location: "Tehran, Iran",
    url: "https://sbu.ac.ir/en",
    svg: require("assets/Beheshti/sbu_logo.svg"),
    imageSrcs: [
      require("assets/Beheshti/sbu_entrance.jpg"),
      require("assets/Beheshti/sbu_faculty.jpg"),
      require("assets/Beheshti/sbu_campus.jpg"),
    ],
    description:
      "Advanced graduate study focusing on large-scale data processing, statistical modeling, machine learning, and data engineering pipelines.",
    topCourses: [
      { name: "Advanced Data Analysis", grade: "Current" },
      { name: "Statistical Machine Learning", grade: "Current" },
    ],
  },
  {
    institution: "Kharazmi University (KHU)",
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    period: "2018 - 2023",
    status: "Graduated",
    statusColor: "primary",
    gpa: "3.16 / 4.0",
    location: "Tehran, Iran",
    url: "https://khu.ac.ir/en/",
    svg: require("assets/Kharazmi/Kharazmy_University_logo.svg"),
    imageSrcs: [
      require("assets/Kharazmi/KharazmiFirst.jpg"),
      "https://khu.ac.ir/documents/8517113/0/IMG_1848.png",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Kharazmi_University_of_Karaj_02.jpg",
    ],
    description:
      "Core computer science curriculum covering algorithmic theory, operating systems, data structures, and database architectures.",
    topCourses: [
      { name: "Data Structures", grade: "4.0 / 4.0" },
      { name: "Computational Intelligence", grade: "4.0 / 4.0" },
      { name: "Software Engineering", grade: "4.0 / 4.0" },
      { name: "Design & Analysis of Algorithms", grade: "4.0 / 4.0" },
      { name: "Databases & Data Mining", grade: "4.0 / 4.0" },
      { name: "Linear Algebra", grade: "4.0 / 4.0" },
    ],
  },
  {
    institution: "Mofid High School",
    degree: "High School Diploma in Mathematics & Physics",
    period: "2014 - 2018",
    status: "Graduated",
    statusColor: "purple",
    gpa: "3.76 / 4.0",
    location: "Tehran, Iran",
    url: "https://mofidsch.ir/",
    svg: require("assets/Mofid/Mofid_School_logo.png"),
    imageSrcs: [
      require("assets/Mofid/MofidFIrst.png"),
      "https://static.neshanmap.ir/places/images/491/335093_806717_Thumbnail--%D8%AF%D8%A8%DB%8C%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D9%85%D9%81%DB%8C%D8%AF.jpeg",
      "http://mofidsch.ir/h2/wp-content/uploads/2020/05/f1-2.jpg",
    ],
    description:
      "Intensive mathematics, physics, and analytical problem-solving foundation at one of Tehran's prestigious STEM high schools.",
  },
];
