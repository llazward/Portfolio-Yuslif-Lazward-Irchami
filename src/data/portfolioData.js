/**
 * Portfolio Data for Yuslif Lazward Irchami
 * All data strictly adheres to provided profile & CV specifications.
 */

export const personalInfo = {
  name: "Yuslif Lazward Irchami",
  shortName: "Lazward",
  title: "Full-Stack Developer",
  location: "Surabaya, Jawa Timur, Indonesia",
  email: "mrlazward@gmail.com",
  phone: "+62-87849689255",
  phoneFormatted: "+62 878 4968 9255",
  whatsappUrl: "https://wa.me/6287849689255",
  linkedin: "https://www.linkedin.com/in/yuslif-lazward-irchami/",
  github: "https://github.com/llazward",
  educationDegree: "Sarjana Komputer (S.Kom.) – Teknik Informatika",
  educationCampus: "Universitas 17 Agustus 1945 Surabaya",
  educationPeriod: "September 2022 – Agustus 2026",
  gpa: "3.71",
  gpaMax: "4.00",
  honor: "Cum Laude",
  heroHeadline: "Full-Stack Developer Building Real-World Digital Solutions",
  heroSubheadline: "Fresh Graduate in Informatics Engineering with hands-on experience in full-stack web development, Web-Based Augmented Reality, and production-ready applications.",
  aboutStory: "I enjoy turning real-world problems into practical software solutions, from designing relational databases and REST APIs to building responsive interfaces and deploying production applications."
}

export const quickStats = [
  { value: "3.71 / 4.00", label: "GPA", sub: "Cum Laude Academic Achievement" },
  { value: "Cum Laude", label: "Academic Achievement", sub: "Teknik Informatika UNTAG" },
  { value: "2+", label: "Professional Projects", sub: "Web AR & Government E-Arsip" },
  { value: "1000+", label: "Documents Digitized", sub: "Dinas PU Bina Marga Prov Jatim" },
  { value: "Web AR", label: "Real-Time 3D Experience", sub: "React Three Fiber & MediaPipe" }
]

export const techStackCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "code",
    skills: [
      "React",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "PHP",
      "HTML",
      "CSS",
      "React Three Fiber"
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: "server",
    skills: [
      "Laravel",
      "RESTful API",
      "MVC Architecture",
      "Object-Oriented Programming"
    ]
  },
  {
    id: "database",
    name: "Database",
    icon: "database",
    skills: [
      "MySQL",
      "Relational Database Design",
      "CRUD",
      "Data Integrity"
    ]
  },
  {
    id: "ar3d",
    name: "AR / 3D",
    icon: "box",
    skills: [
      "MediaPipe",
      "React Three Fiber",
      "Blender",
      "3D Rigging",
      "3D Asset Optimization"
    ]
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    icon: "git-branch",
    skills: [
      "Git",
      "GitHub",
      "Netlify",
      "Debugging",
      "Troubleshooting",
      "Flowchart",
      "SDLC"
    ]
  },
  {
    id: "ai",
    name: "AI-Assisted Development",
    icon: "cpu",
    skills: [
      "Antigravity",
      "ChatGPT",
      "Claude",
      "Gemini",
    ],
    note: "Digunakan sebagai development assistant untuk mempercepat scaffolding, riset, dan eksplorasi ide. Seluruh kode hasil AI tetap melalui review, pemahaman logika, dan validasi mandiri secara ketat demi keandalan sistem."
  }
]

export const featuredProjects = [
  {
    id: "web-ar-tryon",
    title: "Web-Based AR Virtual Try-On",
    isFlagship: true,
    category: "Web-Based Augmented Reality",
    company: "Susilawati Collection",
    period: "Dec 2025 – Jul 2026",
    role: "Sole Contributor / AR & Frontend Engineer",
    description: "Real-time web-based Augmented Reality virtual try-on system for an Indonesian traditional clothing rental business.",
    image: "public/foto_Lazward.PNG",

    tech: [
      "React",
      "React Three Fiber",
      "MediaPipe",
      "Blender",
      "Git / GitHub"
    ],
    highlights: [
      "Developed the entire product as a sole contributor.",
      "Responsible for architecture decisions, frontend implementation, 3D asset pipeline, and production deployment.",
      "Implemented real-time body and pose tracking directly in web browsers via MediaPipe.",
      "Developed an approach for stabilizing virtual clothing placement using rotation calibration, body-size calibration, smoothing, and interpolation.",
      "Designed clothing-size calibration using interpupillary distance (IPD), correction multipliers, and multi-frame stabilization.",
      "Modeled, rigged, and optimized 3D assets in Blender for fast web performance."
    ],
    caseStudy: {
      overview: "Web-Based AR Virtual Try-On adalah aplikasi real-time berbasis web browser yang memungkinkan calon penyewa busana adat tradisional Indonesia untuk mencoba pakaian secara virtual langsung melalui kamera smartphone/laptop tanpa perlu mengunduh aplikasi terpisah.",
      problem: "Pelanggan bisnis penyewaan pakaian tradisional seringkali kesulitan menentukan kesesuaian ukuran, proporsi fisik, dan estetika busana tanpa harus datang langsung ke gerai fisik. Solusi AR mobile native membutuhkan instalasi aplikasi yang memberatkan, sehingga dibutuhkan solusi berbasis web yang instan, ringan, dan akurat.",
      myRole: "Sebagai Sole Contributor, bertanggung jawab penuh dari hulu ke hilir: menentukan arsitektur teknis, pemodelan dan rigging busana 3D di Blender, optimasi format GLTF/GLB, rekayasa pelacakan landmark tubuh MediaPipe di browser, kalibrasi ukuran virtual, hingga deployment production.",
      architecture: [
        { step: "01", title: "Camera Feed", desc: "Browser MediaDevices API menangkap video input real-time." },
        { step: "02", title: "MediaPipe Pose Tracking", desc: "Mendeteksi koordinat 33 3D body landmark secara frame-by-frame." },
        { step: "03", title: "Body Measurements", desc: "Kalkulasi jarak bahu, torso, dan estimasi Interpupillary Distance (IPD)." },
        { step: "04", title: "Calibration & Stabilization", desc: "Interpolasi smoothing & correction multipliers untuk mengeliminasi jitter." },
        { step: "05", title: "React Three Fiber", desc: "Sinkronisasi posisi, skala, dan orientasi matriks 3D object." },
        { step: "06", title: "3D Garment Rendering", desc: "Aset GLB teroptimasi dirender secara fluid dengan pencahayaan realistis." }
      ],
      technicalApproach: "Mengintegrasikan React Three Fiber dengan MediaPipe Pose Tracking yang diproses secara asynchronous di client-side web browser. Menghubungkan landmark titik bahu, leher, dan pinggang dengan bone rig pakaian 3D, serta menerapkan multi-frame exponential moving average untuk menghasilkan transisi fitting yang mulus dan bebas getaran (jitter-free).",
      challenges: "Tantangan utama adalah variasi jarak kamera ke pengguna, fluktuasi frame rate kamera pada perangkat mobile, jitter koordinat pose tracking, dan ukuran file 3D busana adat yang memiliki detail kain serta ornamen kompleks sehingga berpotensi membebani memori browser.",
      solution: "Mengembangkan algoritma kalibrasi ukuran adaptif berbasis rasio IPD dan koreksi jarak pundak. Mengoptimasi topologi mesh dan texture baking di Blender hingga ukuran GLB terkompresi secara signifikan. Mengimplementasikan rotation quaternion interpolation dan damping smoothing agar busana menempel secara presisi pada tubuh.",
      technologies: ["React", "React Three Fiber (Three.js)", "MediaPipe Pose", "Blender 3D", "JavaScript/TypeScript", "Git & GitHub"],
      outcome: "Menghasilkan sistem Web-Based Virtual Try-On yang interaktif dan dapat diakses langsung via browser tanpa dependensi aplikasi pihak ketiga, membuktikan kemampuan rekayasa grafika 3D interaktif dan computer vision di lingkungan web modern."
    }
  },
  {
    id: "sistem-e-arsip",
    title: "Sistem E-Arsip",
    isFlagship: false,
    category: "Full-Stack Web Application",
    company: "Dinas Pekerjaan Umum Bina Marga Provinsi Jawa Timur",
    period: "Jan 2025 – Feb 2025",
    role: "Full-Stack Web Developer",
    description: "Internal electronic archive management system developed end-to-end to digitize and manage government archive documents.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "RESTful API",
      "Eloquent ORM",
      "Raw SQL",
      "Git / GitHub"
    ],
    highlights: [
      "Built the application end-to-end using Laravel and MySQL.",
      "Migrated and managed 1000+ archive documents into a digital database.",
      "Designed relational database schema with strict data integrity.",
      "Implemented RESTful API integration for modular data flow.",
      "Built multi-role authentication and authorization (Super Admin full CRUD, Admin restricted via middleware).",
      "Applied Eloquent ORM and raw SQL depending on operation requirements for peak performance.",
      "Performed thorough debugging and performance optimization.",
      "Collaborated directly with the institution's IT staff."
    ],
    caseStudy: {
      overview: "Sistem E-Arsip Internal adalah aplikasi manajemen kearsipan berbasis web enterprise yang dibangun dari nol untuk mendigitalkan dan mengorganisir ribuan berkas dokumen infrastruktur publik di lingkungan dinas pemerintahan provinsi.",
      problem: "Pengelolaan arsip fisik konvensional di instansi pemerintah menghadapi kendala penumpukan dokumen kertas, risiko kerusakan fisik, inefisiensi waktu dalam pencarian data historis, serta keterbatasan pengawasan hak akses dokumen sensitif.",
      myRole: "Sebagai Full-Stack Developer, merancang arsitektur aplikasi end-to-end: mendesain normalisasi skema MySQL, mengimplementasikan logika backend Laravel, membangun REST API, menyiapkan middleware keamanan otorisasi bertingkat, serta berkoordinasi langsung dengan staf IT instansi.",
      architecture: [
        { step: "01", title: "User Interaction", desc: "Antarmuka web responsif untuk pengelolaan dokumen dan pencarian data." },
        { step: "02", title: "Frontend Client", desc: "Validasi form, rendering data tabel, dan asynchronous fetch request." },
        { step: "03", title: "REST API / Laravel", desc: "Routing terstruktur, controller modular, dan business validation layer." },
        { step: "04", title: "Middleware Auth", desc: "Verifikasi sesi, otentikasi role Super Admin vs Admin secara ketat." },
        { step: "05", title: "Query Execution", desc: "Kombinasi Eloquent ORM untuk CRUD dan Raw SQL teroptimasi untuk reporting." },
        { step: "06", title: "MySQL Database", desc: "Penyimpanan relasional dengan foreign key constraints dan indexing." }
      ],
      technicalApproach: "Menerapkan arsitektur MVC berbasis Laravel dengan integrasi RESTful endpoint. Menyusun schema migration dan foreign key constraint di MySQL untuk menjaga integritas data relasi antar departemen. Menerapkan middleware kustom untuk memisahkan hak istimewa Super Admin (CRUD penuh) dan staf Admin biasa.",
      challenges: "Menjaga integritas data historis selama migrasi lebih dari 1000 dokumen dengan variasi format metadata, mencegah bottleneck kueri pada saat pencarian dokumen berukuran besar, serta menjamin kepatuhan hak akses dokumen antar divisi.",
      solution: "Mengoptimasi skrip migrasi data dengan batch processing, menulis kueri Raw SQL yang terindeks untuk laporan agregasi arsip guna memangkas response time, serta menerapkan validasi input ganda di sisi backend dan middleware otentikasi.",
      technologies: ["Laravel", "PHP", "MySQL", "RESTful API", "Eloquent ORM", "Raw SQL", "Git & GitHub"],
      outcome: "Berhasil mendigitalkan dan mengelola 1000+ dokumen arsip penting dalam satu basis data terpusat, mempermudah pencarian berkas bagi pegawai, serta meningkatkan keamanan data melalui kontrol otorisasi yang teruji."
    }
  }
]

export const professionalExperience = [
  {
    role: "Web-Based Augmented Reality Virtual Try-On Engineer",
    company: "Susilawati Collection",
    location: "Lamongan, Jawa Timur, Indonesia",
    type: "UMKM Penyewaan Pakaian Adat",
    period: "Dec 2025 – Jul 2026",
    bullets: [
      "Mengembangkan aplikasi web Augmented Reality Virtual Try-On secara real-time menggunakan React, React Three Fiber, dan MediaPipe.",
      "Bertindak sebagai sole contributor yang bertanggung jawab atas arsitektur frontend, pipeline aset 3D, hingga deployment ke production.",
      "Mengimplementasikan pelacakan pose tubuh secara akurat di web browser dengan metode kalibrasi rotasi, kalibrasi ukuran tubuh, dan stabilisasi multi-frame.",
      "Memodelkan, merigging, dan mengoptimalkan aset 3D busana adat berformat GLB/GLTF di Blender untuk menghasilkan transfer data ringan dan rendering mulus.",
      "Mengelola version control dan alur rilis aplikasi menggunakan Git dan GitHub."
    ],
    tech: ["React", "React Three Fiber", "MediaPipe", "Blender", "Git / GitHub"]
  },
  {
    role: "Full-Stack Web Developer",
    company: "Dinas Pekerjaan Umum Bina Marga Provinsi Jawa Timur",
    location: "Surabaya, Jawa Timur, Indonesia",
    type: "Instansi Pemerintah Provinsi",
    period: "Jan 2025 – Feb 2025",
    bullets: [
      "Membangun aplikasi Sistem E-Arsip internal secara end-to-end menggunakan Laravel (PHP) dan MySQL.",
      "Berhasil memigrasikan dan mengelola lebih dari 1000 dokumen arsip penting ke dalam basis data digital terstruktur.",
      "Merancang skema database relasional dengan integritas data yang kokoh serta membangun integrasi RESTful API.",
      "Menerapkan sistem otentikasi dan otorisasi multi-role: Super Admin memiliki akses CRUD penuh, sedangkan Admin dibatasi melalui middleware keamanan.",
      "Menggunakan Eloquent ORM dan kueri Raw SQL secara selektif untuk mencapai performa eksekusi optimal.",
      "Melakukan debugging dan optimasi performa dalam kolaborasi langsung bersama staf IT instansi."
    ],
    tech: ["Laravel", "PHP", "MySQL", "RESTful API", "Eloquent ORM", "Raw SQL", "Git / GitHub"]
  }
]

export const educationData = {
  institution: "Universitas 17 Agustus 1945 Surabaya",
  degree: "Sarjana Komputer (S.Kom.) – Teknik Informatika",
  period: "September 2022 – Agustus 2026",
  gpa: "3.71 / 4.00",
  honor: "Cum Laude",
  location: "Surabaya, Indonesia",
  coursework: [
    "Web & Mobile Programming",
    "Database Systems / SQL",
    "Data Structures & Algorithms",
    "Software Engineering",
    "Artificial Intelligence",
    "Human Computer Interaction",
    "Computer Vision",
    "Business Intelligence"
  ]
}

export const achievementsData = [
  {
    title: "Jakarta Science Fair 2025",
    badge: "Juara 1 / Gold Medal",
    medal: "🥇",
    type: "gold",
    year: "2025",
    description: "Meraih Juara 1 (Gold Medal) dalam ajang kompetisi sains dan inovasi teknologi tingkat internasional di Jakarta.",
    image: "public/foto_Lazward.PNG"
  },
  {
    title: "Thailand International Science, Invention and Innovation Fair 2026",
    badge: "Juara 2 / Silver Medal",
    medal: "🥈",
    type: "silver",
    year: "2026",
    description: "Meraih Juara 2 (Silver Medal) pada kompetisi riset, penemuan, dan inovasi teknologi tingkat internasional di Thailand."
  },
  {
    title: "Kejuaraan Pencak Silat Tingkat Nasional",
    badge: "11 Gelar Juara Nasional",
    medal: "🥇🥈🥉",
    type: "bronze",
    year: "2022 – 2026",
    description: "Memperoleh 11 gelar juara lainnya di tingkat nasional selama masa studi aktif di kampus, membuktikan dedikasi tinggi, daya juang pantang menyerah, dan kedisiplinan yang konsisten."
  }
]

export const certificationsData = [
  {
    title: "LSP P1 Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP P1",
    year: "2026",
    desc: "Sertifikasi kompetensi nasional standar pemrograman web, desain basis data, dan praktik kode berstandar industri."
  },
  {
    title: "TOEFL ITP — Score 550",
    issuer: "Institutional Testing Program",
    year: "2026",
    desc: "Kecakapan bahasa Inggris tingkat kerja untuk komunikasi teknis, penulisan dokumentasi, dan kolaborasi global."
  }
]

export const leadershipData = {
  organization: "Unit Kegiatan Mahasiswa PSHT",
  location: "Surabaya, Indonesia",
  position: "Kepala Divisi Kepelatihan",
  period: "Feb 2025 – Jan 2026",
  description: "Responsible for designing, organizing, and supervising training programs while ensuring that the implemented methods operated effectively.",
  bullets: [
    "Merancang kurikulum dan materi latihan atlet UKM secara terstruktur.",
    "Mengorganisir dan memimpin jadwal sesi latihan berkala bagi para anggota.",
    "Mengawasi efektivitas metode kepelatihan demi menjamin peningkatan performa yang terukur dan aman."
  ]
}

export const softSkillsData = [
  "Analytical Thinking",
  "Problem Solving",
  "Logical Thinking",
  "Honest",
  "Leadership",
  "Teamwork",
  "Project Management",
  "Communication",
  "Discipline",
  "Responsibility",
  "Integrity",
  "Attention to Detail",
  "Emotional Intelligence"
]

export const developmentPhilosophy = [
  {
    number: "01",
    title: "Understand",
    desc: "Understand the business problem and user needs through thorough analysis, requirements gathering, and workflow mapping."
  },
  {
    number: "02",
    title: "Design",
    desc: "Design the system architecture, database schema with relational integrity, REST API contracts, and user flow."
  },
  {
    number: "03",
    title: "Build",
    desc: "Develop frontend, backend, API, and required integrations with clean, modular, and maintainable code."
  },
  {
    number: "04",
    title: "Improve",
    desc: "Debug, optimize database queries, conduct performance testing, code review, and deploy production-ready applications."
  }
]
