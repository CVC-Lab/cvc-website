require("dotenv").config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/cvc-website",
  siteMetadata: {
    title: `Computational Visualization Center`,
    peopleCards: [
      {
        name: "Chandrajit Bajaj",
        image: "chandrajit.png",
        position: "Director, Principle Investigator",
        status: "current",
      },
      {
        name: "Laura Lansing",
        image: "laura.png",
        position: "Research Administrator",
        status: "current",
      },
      {
        name: "Taemin Heo",
        image: "taemin.png",
        position: "Postdoctoral Researcher",
        status: "current",
      },
      {
        name: "Yi Wang",
        image: "yi.png",
        position: "PhD Candidate",
        status: "current",
      },
      {
        name: "Ryan Farell",
        image: "ryan.png",
        position: "PhD Candidate",
        status: "current",
      },
      {
        name: "Minh Nguyen",
        image: "minh.png",
        position: "PhD Candidate",
        status: "current",
      },
      {
        name: "Luke McLennan",
        image: "luke.png",
        position: "PhD Student",
        status: "current",
      },
      {
        name: "Aaron Dominick",
        image: "aaron.png",
        position: "PhD Student",
        status: "current",
      },
      {
        name: "Qing Zhu",
        image: "qing.png",
        position: "PhD Student",
        status: "current",
      },
      {
        name: "Shubham Bhardwaj",
        image: "shubham.png",
        position: "PhD Student",
        status: "current",
      },
      {
        name: "Omatharv Bharat Vaidya",
        image: "omatharv.png",
        position: "Graduate Student",
        status: "current",
      },
      {
        name: "Shruti Raghavan",
        image: "shruti.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Jan-Christopher Cohrs",
        image: "jan.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Rochan Avlur",
        image: "rochan.png",
        position: "Graduate Student",
        status: "current",
      },
      {
        name: "Ashwin Vinod",
        image: "ashwin.png",
        position: "Graduate Student",
        status: "current",
      },
      {
        name: "Jasleen Dhillon",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "George J Zhai",
        image: "george.png",
        position: "Graduate Student",
        status: "current",
      },
      {
        name: "Abhiram C Maddukuri",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "current",
      },
      {
        name: "Aditya Sai",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Alexey Izmailov",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Arya Anantula",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "current",
      },
      {
        name: "Harsha Honnappa",
        image: "honnappa.png",
        position: "Research Fellow from Purdue University",
        status: "alumni",
      },
      {
        name: "Jasper Lee",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Michael Zhang",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Nikitha Gollamudi",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Raghav Pant",
        image: "placeholder.png",
        position: "PhD Student",
        status: "current",
      },
      {
        name: "Shreyash Sinha",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Pronoma Banerjee",
        image: "pronoma.png",
        position: "Graduate Research Scholar - Interning from India",
        status: "current",
      },
      {
        name: "Jeffrey Mo",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "current",
      },
      {
        name: "Ava Machado",
        image: "ava.png",
        position: "Undergraduate Student",
        status: "current",
      },
      {
        name: "Anubhav Goel",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Ruiqui Zuo",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "current",
      },
      {
        name: "Conrad Li",
        image: "conrad.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Kai Chang",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Mohamed Abouhawwash",
        image: "placeholder.png",
        position: "Research Fellow",
        status: "alumni",
      },
      {
        name: "Ahmed Abdelkader",
        image: "ahmed.png",
        position: "Postdoctoral Researcher",
        status: "alumni",
      },
      {
        name: "Xiaohan Zuo",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "William Porteous",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Trevor Nguyen",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Mahshid Alamdar",
        image: "placeholder.png",
        position: "PhD Student",
        status: "alumni",
      },
      {
        name: "Yunhao Yang",
        image: "yunhao.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Teja Gorantla",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Soumil Chopra",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Zachary Endres",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Aaryan Sagar",
        image: "placeholder.png",
        position: "High School Student",
        status: "alumni",
      },
      {
        name: "Yuhan Zheng",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Ariaan Ghatate",
        image: "placeholder.png",
        position: "High School Student",
        status: "alumni",
      },
      {
        name: "Priyansh Kedia",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Amrutha Srinivasan",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Chase Tessmer",
        image: "chase.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Nathan Clement",
        image: "nathan.png",
        position: "PhD Student",
        status: "alumni",
      },
      {
        name: "Thomas Ghorbanian",
        image: "thomas.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Sumit Sinha",
        image: "placeholder.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Sean Zanyk McLean",
        image: "sean.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Yorick Sanders",
        image: "yorick.png",
        position: "Graduate Student",
        status: "alumni",
      },
      {
        name: "Benjamin Beal",
        image: "ben.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Nikhil Ajjarapu",
        image: "nikhil.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Edward Zhou",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Binglin Zhang",
        image: "bingling.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Abrar Anwar",
        image: "abrar.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Yash Totlani",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Arman Maesumi",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Sebastian Rutherford",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Harrison White",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Viraj Joshi",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Joshua Prupes",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Ian Shin",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Eshani Kaul",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Ryan Bethke",
        image: "placeholder.png",
        position: "Undergraduate Student",
        status: "alumni",
      },
      {
        name: "Tianming Wang",
        image: "placeholder.png",
        position: "Postdoctoral Researcher",
        status: "alumni",
      },
      {
        name: "Ahmed Abdelrazek",
        image: "placeholder.png",
        position: "Postdoctoral Researcher",
        status: "alumni",
      },
    ],
    newsTiles: [
      {
        name: "Fall 2021 Seminar Series #1",
        description: "Multivariate Gaussian Processes and Noisy Regression",
        category: "seminars",
        link: "/seminars/fall2021/seminar1",
        date: "2021-09-03",
      },
      {
        name: "Fall 2021 Seminar Series #2",
        description:
          "Probabilistic Inference for Fast Learning in Optimal Control",
        category: "seminars",
        link: "/seminars/fall2021/seminar2",
        date: "2021-09-10",
      },
      {
        name: "Fall 2021 Seminar Series #3",
        description: "Camera Image Signal Processing (ISP)",
        category: "seminars",
        link: "/seminars/fall2021/seminar3",
        date: "2021-09-27",
      },
      {
        name: "Fall 2021 Seminar Series #4",
        description:
          "Maximum Pontryagin Principle, Optimal Control of Dynamic Systems / Reinforcement Learning",
        category: "seminars",
        link: "/seminars/fall2021/seminar4",
        date: "2021-09-28",
      },
      {
        name: "Fall 2021 Seminar Series #5",
        description: "Kernel Methods for Multi-Output Vector",
        category: "seminars",
        link: "/seminars/fall2021/seminar5",
        date: "2021-10-08",
      },
      {
        name: "Fall 2021 Seminar Series #6",
        description:
          "Towards Efficient Rank-Ordered Search-and-Score of Digital Tumor Scans with Multi-Agent RL",
        category: "seminars",
        link: "/seminars/fall2021/seminar6",
        date: "2021-10-08",
      },
      {
        name: "An Honorary Bountiful Tree Planted for Prof. Bajaj",
        category: "news",
        link: "/tree",
        date: "2021-06-23",
      },
      {
        name: "CVC talked to Bill Gates",
        category: "news",
        link: "/bill-gates",
        date: "2021-03-13",
      },
      {
        name: "Journal paper accepted for publication in Mathematics for Computation, 2013",
        category: "news",
        link: "/quadratic",
        date: "2021-03-25",
      },
      {
        name: "Journal paper published in Nature, Feb, 2013",
        category: "news",
        link: "/ribosome",
        date: "2013-03-25",
      },
      {
        name: "Training F2Dock",
        category: "seminars",
        link: "/seminars/fall2011/f2dock",
        date: "2011-11-08",
      },
      {
        name: "A Reduced Flexibility Model for Macromolecules",
        category: "seminars",
        link: "/seminars/fall2011/macromolecules",
        date: "2011-10-19",
      },
      {
        name: "Understanding Shear in Proteins",
        category: "seminars",
        link: "/seminars/fall2011/shear",
        date: "2011-10-11",
      },
      {
        name: "Latest VolRover Sources",
        category: "news",
        link: "/latest-volrover",
        date: "2011-10-09",
      },
      {
        name: "Geometry in Compression Structures",
        category: "seminars",
        link: "/seminars/fall2011/geometry",
        date: "2011-10-04",
      },
      {
        name: "Multi-protein Docking for Viral Capsids",
        category: "seminars",
        link: "/seminars/fall2011/multi-protein-docking",
        date: "2011-10-04",
      },
      {
        name: "Ribosomal Protein Modeling for Trypanosoma Brucei from a 5.16A EM Density Map",
        category: "seminars",
        link: "/seminars/fall2011/ribosomal-protein",
        date: "2011-09-27",
      },
      {
        name: "Classification of Heterogeneous Particles in Cryo-EM Reconstructions",
        category: "seminars",
        link: "/seminars/fall2011/cryo-em",
        date: "2011-09-20",
      },
      {
        name: "Learning Parameters in F2Dock",
        category: "seminars",
        link: "/seminars/fall2011/learning-parameters",
        date: "2011-09-13",
      },
      {
        name: "Newer Binaries Posted",
        category: "news",
        link: "/newer-binaries",
        date: "2011-09-08",
      },
      {
        name: "Polyhedron Separation",
        category: "seminars",
        link: "/seminars/fall2011/polyhedron",
        date: "2011-09-06",
      },
      {
        name: "Parallelizing molecular energy and force calculations using cilk++ and CUDA",
        category: "seminars",
        link: "/seminars/fall2011/clik",
        date: "2011-09-02",
      },
      {
        name: "Code Review: TexMol and VolRover",
        category: "seminars",
        link: "/seminars/fall2011/code-review",
        date: "2011-08-19",
      },
      {
        name: "Flexible Fitting of Crystal Structures into Density Maps",
        category: "seminars",
        link: "/seminars/spring2011/flexible-fitting",
        date: "2011-06-02",
      },
      {
        name: "A Reduced Flexibility Model and Improved Scoring Scheme For Lead Optimization In Computational Drug Design",
        category: "seminars",
        link: "/seminars/spring2011/reduced-flexibility",
        date: "2011-06-02",
      },
      {
        name: "Sampling macromolecular recognition landscapes using Fast Fourier Transforms based approaches and their generalizations",
        category: "seminars",
        link: "/seminars/spring2011/fast-fourier-transforms",
        date: "2011-05-10",
      },
      {
        name: "Centroidal Voronoi Tessellation vs. Optimal Delaunay Triangulation",
        category: "seminars",
        link: "/seminars/spring2011/centrodial",
        date: "2011-05-02",
      },
      {
        name: "Stability of Dual Discretization Methods for PDEs",
        category: "seminars",
        link: "/seminars/spring2011/stability",
        date: "2011-04-27",
      },
      {
        name: "New Set of Binaries",
        category: "news",
        link: "/new-set-binaries",
        date: "2011-04-23",
      },
      {
        name: "Lead Optimization in Computational Drug Design: An Iterative Approach to Structural and Chemical Refinement",
        category: "seminars",
        link: "/seminars/spring2011/drug-design",
        date: "2011-04-20",
      },
      {
        name: "Multi protein docking",
        category: "seminars",
        link: "/seminars/spring2011/multi-protein-docking",
        date: "2011-04-12",
      },
      {
        name: "Flexible fitting of subunit assemblies into cryo-EM density maps",
        category: "seminars",
        link: "/seminars/spring2011/flexible-fitting",
        date: "2011-04-06",
      },
      {
        name: "Survey of GPU-accelerated Molecular Dynamics",
        category: "seminars",
        link: "/seminars/spring2011/dynamics",
        date: "2011-03-29",
      },
      {
        name: "Analysis-ready 3D reconstructions of complex objects from planar cross-sectional slices",
        category: "seminars",
        link: "/seminars/spring2011/reconstructions",
        date: "2011-03-25",
      },
      {
        name: "Convergence of Adaptive Finite Element Methods for Nonlinear Geometric PDE",
        category: "seminars",
        link: "/seminars/spring2011/convergence",
        date: "2011-03-22",
      },
      {
        name: "Molecular docking: current approaches and remaining challenges",
        category: "seminars",
        link: "/seminars/spring2011/molecular-docking",
        date: "2011-03-09",
      },
      {
        name: "Optimal (Co)homologous (Co)chains",
        category: "seminars",
        link: "/seminars/spring2011/optimal",
        date: "2011-03-01",
      },
      {
        name: "Statistical regularization method for electron tomography reconstruction",
        category: "seminars",
        link: "/seminars/spring2011/tomography",
        date: "2011-02-22",
      },
      {
        name: "Computational Anatomy – An approach to incorporate a priori shape information into 3D electron microscopy",
        category: "seminars",
        link: "/seminars/spring2011/computational-anatomty",
        date: "2011-02-16",
      },
      {
        name: "Simulation of Transmission Electron Microscope Images of Biological Specimens",
        category: "seminars",
        link: "/seminars/spring2011/simulation",
        date: "2011-02-09",
      },
      {
        name: "A Closer Look at the Poisson-Boltzmann Model",
        category: "seminars",
        link: "/seminars/spring2011/poisson-boltzmann",
        date: "2011-02-01",
      },
      {
        name: "Molecular Surfaces: Area, Volume, and Atomic Derivatives",
        category: "seminars",
        link: "/seminars/spring2011/molecular",
        date: "2011-01-25",
      },
      {
        name: "Conforming Vector Interpolation Functions for Polyhedral Meshes",
        category: "seminars",
        link: "/seminars/spring2011/interpolation",
        date: "2011-01-18",
      },
      {
        name: "CVC YouTube Channel Created",
        category: "news",
        link: "/youtube",
        date: "2010-12-06",
      },
      {
        name: "Capstone Project",
        category: "news",
        link: "/capstone",
        date: "2010-12-06",
      },
      {
        name: "Compressed Sensing",
        category: "seminars",
        link: "/seminars/spring2010/compressed-sensing",
        date: "2010-11-22",
      },
      {
        name: "Rational Curves from Rotation-Minimizing Frames",
        category: "seminars",
        link: "/seminars/spring2010/rotation-minimizing",
        date: "2010-11-17",
      },
      {
        name: "Dr. Chandrajit Bajaj and Andrew Gillette won the Best Paper Award",
        category: "news",
        link: "/best-paper",
        date: "2010-09-02",
      },
      {
        name: "International Collaboratory for Emerging Technologies Workshop",
        category: "news",
        link: "/workshop",
        date: "2009-02-03",
      },
      {
        name: "National Science Foundation Grant",
        category: "news",
        link: "/nsf-grant",
        date: "2005-11-29",
      },
      {
        name: "Best Student Poster cup from 13th International Meshing Roundtable",
        category: "news",
        link: "/best-poster",
        date: "2004-10-01",
      },
      {
        name: "Job Opportunity: Software Engineer (IT Network/Security Specialist)",
        category: "news",
        link: "/network-job",
        date: "2024-04-19",
      },
      {
        name: "Job Opportunity: Software Engineer",
        category: "news",
        link: "/swe-job",
        date: "2024-04-19",
      },
      {
        name: "Job Opportunity: Post-Doctoral Researcher",
        category: "news",
        link: "/postdoc-job",
        date: "2024-04-19",
      },
      {
        name: "Job Opportunity: Lead Research Scientist (AI Networking and Security)",
        category: "news",
        link: "/research-job",
        date: "2024-04-19",
      },
      {
        name: "UT Austin Aids Army in Test of Drone Defenses in Downtown Austin",
        category: "news",
        link: "https://news.utexas.edu/2021/12/21/ut-austin-aids-army-in-test-of-drone-defenses-in-downtown-austin/",
        date: "2024-04-19",
      },
      {
        name: "Computer Science Professor Trains AI Through Game Theory",
        category: "news",
        link: "https://dra.utexas.edu/trainingAI",
        date: "2024-05-13",
      },
    ],
    projectTiles: [
      {
        name: "DEDRECON",
        description:
          "Advanced machine learning applied to real-life image visual perception under multi-modality fusion techniques",
        img_name: "project_tiles/afc_logo",
        link: "/projects/dedrecon",
        tags: ["Computer Vision", "Scientific ML"],
        date: "2020-09-01",
      },
      {
        name: "Video Imputation",
        description:
          "On-the fly error-recovery in adaptive streaming, compression, and super resolution",
        img_name: "project_tiles/video_imputation_crop",
        link: "/projects/video-imputation",
        tags: ["Computer Vision"],
        date: "2021-11-01",
      },
      {
        name: "MCE-VAE",
        description:
          "Invariance-based multi-clustering of latent space embeddings for equivariant learning",
        img_name: "project_tiles/mce_vae",
        link: "/projects/mce-vae",
        tags: ["Scientific ML"],
        date: "2021-11-15",
      },
      {
        name: "Sample Complexity",
        description:
          "Theoretical conditions and algorithmic developments enabling sample-efficient reinforcement learning",
        img_name: "project_tiles/sample_complexity_2",
        link: "/projects/sample-complexity",
        tags: ["Reinforcement Learning"],
        date: "2021-09-28",
      },
      {
        name: "Dynamic Belief Games",
        description:
          "Dynamic Belief Games focuses on developing dynamic next-generation learning agents that engage in planning, cross-training, and effective action choices in communications systems.",
        img_name: "project_tiles/dbg",
        link: "/projects/dynamic-belief-games",
        tags: ["Reinforcement Learning"],
        date: "2024-05-01",
      },
      {
        name: "Optimal Control",
        description:
          "Optimal control problem solving by applying the Pontryagin maximum principle and then solving for a Hamiltonian dynamical system",
        img_name: "project_tiles/optimal_control_2",
        link: "/projects/optimal-control",
        tags: ["Scientific ML", "Reinforcement Learning"],
        date: "2020-11-11",
      },
      {
        name: "Adversarial Cloaking",
        description:
          "Patch-based adversarial attack pipeline for training adversarial patches on 3D human meshes",
        img_name: "project_tiles/adversarial_cloaking_crop",
        link: "/projects/adversarial-cloaking",
        tags: ["Computer Vision", "Scientific ML"],
        date: "2020-09-01",
      },
      {
        name: "Camera ISP",
        description:
          "Structured deep learning models that solves the heterogeneous image artifact filtering problem",
        img_name: "project_tiles/isp_crop",
        link: "/projects/camera-isp",
        tags: ["Computer Vision"],
        date: "2020-09-01",
      },
      {
        name: "Dynamic Mode Decomposition",
        description:
          "Using compressive sensing and variational inference to side-step the traditional DMD analysis",
        img_name: "project_tiles/dmd",
        link: "/projects/dmd",
        tags: ["Scientific ML"],
        date: "2021-11-16",
      },
      {
        name: "Angstrom",
        description:
          "Multi-resolution geometric data structures and computational mathematics algorithms",
        img_name: "project_tiles/angstrom",
        link: "/projects/angstrom",
        tags: ["Scientific ML"],
        date: "2020-09-01",
      },
      {
        name: "Spectre",
        description:
          "Smart data structures and prediction optimization with provable guarantees for spectral and geometric processing",
        img_name: "project_tiles/spectre_logo",
        link: "/projects/spectre",
        tags: ["Scientific ML"],
        date: "2020-09-01",
      },
      {
        name: "Generative Material Design",
        description:
          "Semi-supervised variational inference for generative materials design",
        img_name: "project_tiles/generative_material_logo",
        link: "/projects/generative-material-design",
        tags: ["Scientific ML"],
        date: "2020-09-01",
      },
      // {
      //   name: "Shape Optimization",
      //   description:
      //     "Inverse generative modeling for stealth and cloaking devices using meta-materials",
      //   img_name: "project_tiles/shape_logo",
      //   link: "/projects/shape-optimization",
      //   tags: ["Scientific ML", "Computer Vision"],
      //   date: "2020-09-01",
      // },
      {
        name: "Rank-ordered Search-and-Score",
        description:
          "Multi-Agent Reinforcement Learning for sample efficient Rank-ordered Search-and-Score of giga-pixel images",
        img_name: "project_tiles/search_n_score",
        link: "/projects/search-n-score",
        tags: ["Reinforcement Learning"],
        date: "2020-09-01",
      },
      {
        name: "Physics-informed Neural Networks",
        description:
          "Robust physics-informed neural networks for solving partial differential equations by capturing the physics induced constraints",
        img_name: "project_tiles/robust_pinns",
        link: "/projects/robust-pinns",
        tags: ["Scientific ML"],
        date: "2021-10-26",
      },
      {
        name: "Theoretical Bound for OCF Algorithm",
        description:
          "This work aims to provide a more solid theoretical and mathematical understanding of optimal control flow (OCF) algorithm.",
        img_name: "project_tiles/theoretical_bound",
        link: "/projects/theoretical-bound",
        tags: ["Reinforcement Learning"],
        date: "2023-08-07",
      },
      {
        name: "Real Time Processing of Hyperspectral Video",
        description:
          "This project showcases various aspects of processing hyperspectral video streams in real-time using advanced machine learning techniques.",
        img_name: "project_tiles/intelligent_ml",
        link: "https://cvc-lab.github.io/afc-website/",
        tags: ["Computer Vision"],
        date: "2023-12-01",
      },
      {
        name: "Dueling Neural ODEs",
        description:
          "Dueling Neural ODEs seek to enforce stability in learning forward and adjoint dynamic.",
        img_name: "project_tiles/dueling_neural_odes",
        link: "/projects/neuralode",
        tags: ["Scientific ML"],
        date: "2023-11-21",
      },
      {
        name: "Parkinsons's Disease Early Biomarker Discovery",
        description:
          "Quick and efficient extraction of patient specific SBR Ratios",
        img_name: "project_tiles/parkinsons",
        link: "https://cvc-lab.github.io/parkinsons-website/",
        tags: ["Health AI/ML"],
        date: "2024-04-06",
      },
      {
        name: "OC Protein Side-Chain and Folding",
        description:
          "This work aims to solve the side-chain packing and protein-folding problem with a continuous RL framework.",
        img_name: "project_tiles/protein_sidechain",
        link: "/projects/protein-sidechain",
        tags: ["Reinforcement Learning"],
        date: "2024-09-12",
      },
      {
        name: "Night-time Aerial Material Segmentation",
        description:
          "A low-cost solution for robust night-time material segmentation using hyperspectral data with RGB imagery.",
        img_name: "project_tiles/aerial_material_segmentation",
        link: "/projects/aerial-material-segmentation",
        tags: ["Computer Vision"],
        date: "2024-09-12",
      },
    ],
    softwareProjects: [
      {
        category: "Graphical User Tools",
        items: [
          {
            name: "TexMol",
            description: "Molecular visualization and computation",
          },
          {
            name: "VolumeRover",
            description: "Scalable Image Processing and Visualization Tool",
          },
          {
            name: "VolRoverN",
            description:
              "Geometric and electrophysiological neuronal simulation and visualization package",
          },
          {
            name: "LBIE",
            description: "Level Set Boundary-Interior-Exterior Meshing Tool",
          },
          {
            name: "Prism",
            description: "Geometric modeling using algebraic patches",
          },
          { name: "GANITH", description: "Algebraic geometry toolkit" },
        ],
      },
      {
        category: "Software Libraries and Command-Line Utilities",
        items: [
          {
            name: "MolSurf",
            description: "Molecular surface generation and manipulation",
          },
          {
            name: "MolEnergy",
            description: "Molecular energetics computation",
          },
          { name: "DPG", description: "Dynamic packing grids" },
          {
            name: "SSEP",
            description: "Secondary structure elucidation package",
          },
          {
            name: "Pocket/Tunnel",
            description: "Protein pocket/tunnel extractor",
          },
          {
            name: "QHM",
            description: "Quality Quadrilateral/Hexahedral Mesh Generator",
          },
          {
            name: "QTM",
            description: "Quality Triangular/Tetrahedral Mesh Generator",
          },
          {
            name: "QMDM",
            description: "Quality Multi-Domain Meshing with Gap",
          },
          {
            name: "QMDMNG",
            description: "Quality Multi-Domain Meshing with No Gap",
          },
          {
            name: "GPU Renderer",
            description: "Surface/Volume Rendering Packages",
          },
          { name: "Shastra", description: "X11 Based Scientific Toolkits" },
          {
            name: "Tracing/Tiling/Tetra",
            description:
              "Arbitrary Topology Shape Reconstruction Library from Planar Cross Sections",
          },
          { name: "PFCorr", description: "Polar Fourier Correlation" },
          {
            name: "PF2Fit",
            description: "Polar Fast Fourier Rigid-body Fitting",
          },
          {
            name: "PF3Fit",
            description: "Polar Fast Fourier Flexible Fitting",
          },
          { name: "PMEOPA", description: "Parallel Molecular Energetics" },
          { name: "PGBFOPA", description: "Parallel Generalized Born Force" },
          { name: "TVCT", description: "Time-varying Contour Trees" },
        ],
      },
      {
        category: "Server Based Codes",
        items: [
          { name: "F2Dock", description: "Protein docking software" },
          { name: "TRLIB", description: "Texture-based Rendering Library" },
          {
            name: "ParIso",
            description: "Fast Parallel Isosurface Rendering Library",
          },
          {
            name: "MTD",
            description: "Server-Client based Multi-Tiled Display Library",
          },
          { name: "PVRC", description: "Parallel Volume Ray Casting Library" },
        ],
      },
    ],
    menuLinks: [
      {
        name: "PROJECTS",
        link: "/#projects",
        scroll_link: false,
      },
      {
        name: "PEOPLE",
        link: "people",
        scroll_link: true,
      },
      {
        name: "PUBLICATIONS",
        link: "/publications",
        scroll_link: false,
      },
      {
        name: "NEWS",
        link: "/news",
        scroll_link: false,
      },
      {
        name: "SOFTWARE",
        link: "/software",
        scroll_link: false,
      },
      {
        name: "SPONSORS",
        link: "/sponsors",
        scroll_link: false,
      },
      {
        name: "ABOUT US",
        link: "about",
        scroll_link: true,
      },
      {
        name: "INTERNAL LINKS",
        link: "/internal",
        scroll_link: false,
      },
    ],
    description: `A cross-disciplinary effort to develop and improve the technologies for computational modeling, simulation, analysis, and visualization.`,
    author: `cvc`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        password: process.env.GATSBY_INTERNAL_LINKS_PASSWORD,
        pagePaths: [
          "/internal",
          "internal",
          "/internal/",
          "/cvc-website/internal",
          "/cvc-website/internal",
          "/cvc-website/internal/",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Computational Visualization Center at the University of Texas at Austin`,
        short_name: `CVC`,
        start_url: `/`,
        background_color: `#bf5700`,
        theme_color: `#bf5700`,
        display: `minimal-ui`,
        icon: `src/favicons/favicon.png`,
        icons: [
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-remark`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              path: `${__dirname}/src/images/projects/`,
            },
          },
          {
            resolve: "gatsby-remark-static-images",
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
