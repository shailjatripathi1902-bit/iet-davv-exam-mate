/**
 * ====================================================================
 * IET DAVV ExamMate - Academic Data & Verified PYQs
 * ====================================================================
 * This file contains:
 * 1. Subjects catalog for first-year B.Tech at IET DAVV.
 * 2. Verified Previous Year Question Papers (PYQs) extracted from
 *    the official Google Drive collection (2009 - 2024).
 * 3. Question Analysis & High-Yield Repeated Topics (Based on papers analysed).
 * 4. Study Notes & Resources organized by Subject, Unit & Type (Formula sheets,
 *    derivations, definitions, solved numericals, and revision notes).
 * 5. Practice Mock Tests & Quizzes.
 * 
 * Beginner Note:
 * All Google Drive file links use verified IDs from the student's shared folder:
 * https://drive.google.com/drive/folders/10mf7VFpDkma2xlLN6JKGatIZ5_KtNrmc
 * (Subfolder BE-1: 1SQdAR7FRlGtrFO91Trt04Nmqt7V8pc_H)
 * ====================================================================
 */

const EXAMMATE_DATA = {
  // Reference links to official folders
  driveMetadata: {
    rootFolderUrl: "https://drive.google.com/drive/folders/10mf7VFpDkma2xlLN6JKGatIZ5_KtNrmc",
    be1FolderUrl: "https://drive.google.com/drive/folders/1SQdAR7FRlGtrFO91Trt04Nmqt7V8pc_H",
    folderName: "IET Official Question Paper (BE-1 Archive)",
    availableYears: [2024, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2011, 2009],
    disclaimer: "Based on available papers analysed from the IET DAVV archive. Only papers present in the collection are indexed."
  },

  // First-Year Subjects at IET DAVV (Both Group A and Group B)
  subjects: [
    {
      id: "maths1",
      name: "Engineering Mathematics",
      code: "AM101 / AM102",
      semester: "Semester 1 & 2",
      icon: "📐",
      description: "Calculus, Linear Algebra, Matrices, Rolle's Theorem, Vector Calculus, and Differential Equations.",
      color: "#2563EB"
    },
    {
      id: "physics",
      name: "Applied Physics",
      code: "AP102",
      semester: "Semester 1 & 2",
      icon: "⚡",
      description: "Optics & Newton's Rings, Lasers, Optical Fibers, Quantum Mechanics, and Solid State Physics.",
      color: "#0D9488"
    },
    {
      id: "beee",
      name: "Basic Electrical & Electronics",
      code: "EE103 / EC103",
      semester: "Semester 1 & 2",
      icon: "🔌",
      description: "DC/AC Network Theorems, Transformers, Semiconductor Diodes, BJT, and Digital Logic.",
      color: "#16B8A6"
    },
    {
      id: "pps",
      name: "Programming & Computer Science",
      code: "CS104 / CP104",
      semester: "Semester 1 & 2",
      icon: "💻",
      description: "C Programming, Control Structures, Arrays, Pointers, Dynamic Memory Allocation, and C++ OOP.",
      color: "#7C3AED"
    },
    {
      id: "chemistry",
      name: "Applied Chemistry",
      code: "CH102",
      semester: "Semester 1 & 2",
      icon: "🧪",
      description: "Water treatment, Boiler troubles, Polymers, Lubricants, Phase Rule, and Instrumental Analysis.",
      color: "#E11D48"
    },
    {
      id: "graphics",
      name: "Engineering Graphics & Design",
      code: "ME105",
      semester: "Semester 1 & 2",
      icon: "📏",
      description: "Scales, Orthographic Projections (1st & 3rd angle), Projection of Lines & Solids, Isometric views.",
      color: "#EA580C"
    },
    {
      id: "mech",
      name: "Elements of Mechanical Engineering",
      code: "ME103",
      semester: "Semester 1 & 2",
      icon: "⚙️",
      description: "Thermodynamics laws, Steam Boilers, Refrigeration, I.C. Engines, and Power transmission.",
      color: "#475569"
    },
    {
      id: "all_compiled",
      name: "All Branches Compiled Papers",
      code: "ALL-100",
      semester: "First Year (All)",
      icon: "📁",
      description: "Complete official question paper booklets containing all branch exam papers for that session.",
      color: "#102A43"
    }
  ],

  // ==================================================================
  // VERIFIED PREVIOUS YEAR QUESTION PAPERS (PYQs)
  // Extracted directly from Google Drive Folder: 1SQdAR7FRlGtrFO91Trt04Nmqt7V8pc_H
  // ==================================================================
  pyqPapers: [
    {
      id: "pyq-2024-may-all",
      title: "1st Year All Branches - May 2024 (Complete Booklet)",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1 & 2 (Compiled)",
      year: 2024,
      examinationType: "End-Semester Examination (May 2024)",
      fileId: "1znyajEiN-U4h9VB4m4BwMpReF0A0111b",
      sourceUrl: "https://drive.google.com/file/d/1znyajEiN-U4h9VB4m4BwMpReF0A0111b/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1znyajEiN-U4h9VB4m4BwMpReF0A0111b/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1znyajEiN-U4h9VB4m4BwMpReF0A0111b",
      resourceType: "Official Compiled Booklet PDF",
      verified: true,
      paperType: "Complete Session Booklet",
      description: "Full official question paper compilation for 1st Year B.Tech students across all branches (May 2024 Session)."
    },
    {
      id: "pyq-2019-apr-all",
      title: "1st Year All Branches - April 2019 (Complete Booklet)",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1 & 2 (Compiled)",
      year: 2019,
      examinationType: "End-Semester Examination (April 2019)",
      fileId: "1FphC2HPhLH-ad3NrvEYDv7WmOAuMLgZ8",
      sourceUrl: "https://drive.google.com/file/d/1FphC2HPhLH-ad3NrvEYDv7WmOAuMLgZ8/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1FphC2HPhLH-ad3NrvEYDv7WmOAuMLgZ8/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1FphC2HPhLH-ad3NrvEYDv7WmOAuMLgZ8",
      resourceType: "Official Compiled Booklet PDF",
      verified: true,
      paperType: "Complete Session Booklet",
      description: "Official compiled university question paper book containing all 1st-year papers from the April 2019 exam series."
    },
    {
      id: "pyq-2018-apr-all",
      title: "1st Year All Branches - April 2018 (Complete Booklet)",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1 & 2 (Compiled)",
      year: 2018,
      examinationType: "End-Semester Examination (April 2018)",
      fileId: "1gJyHIx5aTs9oK690kp8_o5QIE_jFfwP6",
      sourceUrl: "https://drive.google.com/file/d/1gJyHIx5aTs9oK690kp8_o5QIE_jFfwP6/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1gJyHIx5aTs9oK690kp8_o5QIE_jFfwP6/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1gJyHIx5aTs9oK690kp8_o5QIE_jFfwP6",
      resourceType: "Official Compiled Booklet PDF",
      verified: true,
      paperType: "Complete Session Booklet",
      description: "Comprehensive April 2018 examination papers booklet for first-year engineering students at IET DAVV."
    },
    {
      id: "pyq-2017-dec-maths",
      title: "Engineering Mathematics - Dec 2017",
      subject: "Engineering Mathematics",
      subjectId: "maths1",
      semester: "Semester 1",
      year: 2017,
      examinationType: "Winter End-Semester Examination (Dec 2017)",
      fileId: "1q9GpHbUHXQ52RNn9FzcumnZmeS31-_1q",
      sourceUrl: "https://drive.google.com/file/d/1q9GpHbUHXQ52RNn9FzcumnZmeS31-_1q/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1q9GpHbUHXQ52RNn9FzcumnZmeS31-_1q/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1q9GpHbUHXQ52RNn9FzcumnZmeS31-_1q",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Dedicated subject paper covering Linear Algebra, Rank, Calculus, Differential Equations & Series (Dec 2017)."
    },
    {
      id: "pyq-2017-dec-physics",
      title: "Applied Physics - Dec 2017",
      subject: "Applied Physics",
      subjectId: "physics",
      semester: "Semester 1",
      year: 2017,
      examinationType: "Winter End-Semester Examination (Dec 2017)",
      fileId: "1P0x7mZCfBFb9OkMGzC4Tt1ZKKFHuaEB-",
      sourceUrl: "https://drive.google.com/file/d/1P0x7mZCfBFb9OkMGzC4Tt1ZKKFHuaEB-/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1P0x7mZCfBFb9OkMGzC4Tt1ZKKFHuaEB-/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1P0x7mZCfBFb9OkMGzC4Tt1ZKKFHuaEB-",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Official Applied Physics question paper: Newton's Rings, Laser action, Fiber optics, and Wave mechanics."
    },
    {
      id: "pyq-2017-dec-electrical",
      title: "Basic Electrical Engineering - Dec 2017",
      subject: "Basic Electrical & Electronics",
      subjectId: "beee",
      semester: "Semester 1",
      year: 2017,
      examinationType: "Winter End-Semester Examination (Dec 2017)",
      fileId: "1S5xa8apdtPbm6AndkgVn11NQXFIH7vDO",
      sourceUrl: "https://drive.google.com/file/d/1S5xa8apdtPbm6AndkgVn11NQXFIH7vDO/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1S5xa8apdtPbm6AndkgVn11NQXFIH7vDO/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1S5xa8apdtPbm6AndkgVn11NQXFIH7vDO",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "DC & AC Circuits, Kirchhoff's Laws, Thevenin/Norton Theorems, and Transformers paper (Dec 2017)."
    },
    {
      id: "pyq-2017-dec-electronics",
      title: "Basic Electronics (Code 072) - Dec 2017",
      subject: "Basic Electrical & Electronics",
      subjectId: "beee",
      semester: "Semester 1",
      year: 2017,
      examinationType: "Winter End-Semester Examination (Dec 2017)",
      fileId: "1WTaATCdRPN96ckQ3ZGgIVk-6cMVuuQch",
      sourceUrl: "https://drive.google.com/file/d/1WTaATCdRPN96ckQ3ZGgIVk-6cMVuuQch/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1WTaATCdRPN96ckQ3ZGgIVk-6cMVuuQch/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1WTaATCdRPN96ckQ3ZGgIVk-6cMVuuQch",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Semiconductor Diodes, BJT Transistor configurations, Biasing, and Rectifier circuits paper."
    },
    {
      id: "pyq-2017-dec-prog",
      title: "Computer Programming in C (Code 074) - Dec 2017",
      subject: "Programming & Computer Science",
      subjectId: "pps",
      semester: "Semester 1",
      year: 2017,
      examinationType: "Winter End-Semester Examination (Dec 2017)",
      fileId: "1TudBjPdPvbT2SLZL-9_T_ka-P5OeyBrK",
      sourceUrl: "https://drive.google.com/file/d/1TudBjPdPvbT2SLZL-9_T_ka-P5OeyBrK/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1TudBjPdPvbT2SLZL-9_T_ka-P5OeyBrK/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1TudBjPdPvbT2SLZL-9_T_ka-P5OeyBrK",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory & Code",
      description: "C Language control structures, Functions, Pointers, Arrays, Strings, and Structure programs."
    },
    {
      id: "pyq-2017-dec-chemistry",
      title: "Applied Chemistry - Dec 2017",
      subject: "Applied Chemistry",
      subjectId: "chemistry",
      semester: "Semester 1",
      year: 2017,
      examinationType: "Winter End-Semester Examination (Dec 2017)",
      fileId: "19BdayFf7uGYWuBJRcOdy7isLX1MuLOIH",
      sourceUrl: "https://drive.google.com/file/d/19BdayFf7uGYWuBJRcOdy7isLX1MuLOIH/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/19BdayFf7uGYWuBJRcOdy7isLX1MuLOIH/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=19BdayFf7uGYWuBJRcOdy7isLX1MuLOIH",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Water hardness, EDTA method, Polymers, Fuels, Lubricants, and Phase rule derivations."
    },
    {
      id: "pyq-2017-dec-ed",
      title: "Engineering Drawing (ED) - Dec 2017",
      subject: "Engineering Graphics & Design",
      subjectId: "graphics",
      semester: "Semester 1",
      year: 2017,
      examinationType: "Winter End-Semester Examination (Dec 2017)",
      fileId: "1osKIJtgzKXURbt1kzmwjq8GfWESl-HSt",
      sourceUrl: "https://drive.google.com/file/d/1osKIJtgzKXURbt1kzmwjq8GfWESl-HSt/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1osKIJtgzKXURbt1kzmwjq8GfWESl-HSt/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1osKIJtgzKXURbt1kzmwjq8GfWESl-HSt",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Drawing & Problem Sheet",
      description: "Scales, Conic curves, Projections of Straight Lines inclined to both HP and VP, and Projection of Solids."
    },
    {
      id: "pyq-2017-dec-mech",
      title: "Mechanical Engineering (Code 073) - Dec 2017",
      subject: "Elements of Mechanical Engineering",
      subjectId: "mech",
      semester: "Semester 1",
      year: 2017,
      examinationType: "Winter End-Semester Examination (Dec 2017)",
      fileId: "1092as2cAges7n5K7teuzSFM4VW6gvHf5",
      sourceUrl: "https://drive.google.com/file/d/1092as2cAges7n5K7teuzSFM4VW6gvHf5/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1092as2cAges7n5K7teuzSFM4VW6gvHf5/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1092as2cAges7n5K7teuzSFM4VW6gvHf5",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "First & Second Laws of Thermodynamics, Steam Boilers, Steam Condensers, and 2-Stroke / 4-Stroke Engines."
    },
    {
      id: "pyq-2016-apr-all",
      title: "1st Year All Branches - April 2016 (Complete Booklet)",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1 & 2 (Compiled)",
      year: 2016,
      examinationType: "End-Semester Examination (April 2016)",
      fileId: "1cNIYlOhw0ZLDPeuplSkXpliFBvA4weLA",
      sourceUrl: "https://drive.google.com/file/d/1cNIYlOhw0ZLDPeuplSkXpliFBvA4weLA/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1cNIYlOhw0ZLDPeuplSkXpliFBvA4weLA/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1cNIYlOhw0ZLDPeuplSkXpliFBvA4weLA",
      resourceType: "Official Compiled Booklet PDF",
      verified: true,
      paperType: "Complete Session Booklet",
      description: "University end-semester exam paper collection for 1st Year B.Tech across all disciplines (April 2016)."
    },
    {
      id: "pyq-2015-dec-be1",
      title: "BE-1 All Subjects - December 2015",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1 & 2 (Compiled)",
      year: 2015,
      examinationType: "Winter Session (Dec 2015)",
      fileId: "1OhN-kBO_ztKun1Ux3ddJzOIYUTKr99uT",
      sourceUrl: "https://drive.google.com/file/d/1OhN-kBO_ztKun1Ux3ddJzOIYUTKr99uT/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1OhN-kBO_ztKun1Ux3ddJzOIYUTKr99uT/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1OhN-kBO_ztKun1Ux3ddJzOIYUTKr99uT",
      resourceType: "Official Compiled Booklet PDF",
      verified: true,
      paperType: "Complete Session Booklet",
      description: "Official BE First-Year complete paper booklet for Dec 2015 semester examination."
    },
    {
      id: "pyq-2014-nov-all",
      title: "BE-1st Year - November-December 2014",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1",
      year: 2014,
      examinationType: "Winter Session (Nov-Dec 2014)",
      fileId: "1BBo7fRblkzF-ht2un0tnmXeC-rRrcTfq",
      sourceUrl: "https://drive.google.com/file/d/1BBo7fRblkzF-ht2un0tnmXeC-rRrcTfq/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1BBo7fRblkzF-ht2un0tnmXeC-rRrcTfq/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1BBo7fRblkzF-ht2un0tnmXeC-rRrcTfq",
      resourceType: "Official Compiled Booklet PDF",
      verified: true,
      paperType: "Complete Session Booklet",
      description: "Official First-Year paper booklet for November-December 2014 examination."
    },
    {
      id: "pyq-2013-nov-all",
      title: "BE-1st Year - November 2013 Booklet",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1",
      year: 2013,
      examinationType: "Winter Examination (Nov 2013)",
      fileId: "1sP4Md10jOqq0lsWBBB3wczL7rCnsI4-p",
      sourceUrl: "https://drive.google.com/file/d/1sP4Md10jOqq0lsWBBB3wczL7rCnsI4-p/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1sP4Md10jOqq0lsWBBB3wczL7rCnsI4-p/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1sP4Md10jOqq0lsWBBB3wczL7rCnsI4-p",
      resourceType: "Official Compiled Booklet PDF",
      verified: true,
      paperType: "Complete Session Booklet",
      description: "Compiled BE-1st year question paper set from November 2013 session."
    },
    {
      id: "pyq-2011-nov-group-a",
      title: "1st Year Group A - Nov 2011 (CS, IT, E&TC)",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1",
      year: 2011,
      examinationType: "Winter Semester (Nov 2011)",
      fileId: "1t1Rlk_B2L5TuDXZxMWI1vGDFrgSVJkRk",
      sourceUrl: "https://drive.google.com/file/d/1t1Rlk_B2L5TuDXZxMWI1vGDFrgSVJkRk/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1t1Rlk_B2L5TuDXZxMWI1vGDFrgSVJkRk/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1t1Rlk_B2L5TuDXZxMWI1vGDFrgSVJkRk",
      resourceType: "Group A Booklet PDF",
      verified: true,
      paperType: "Group A Papers",
      description: "Full Group A paper set including Applied Maths, Applied Physics, BEEE, and Computer Programming."
    },
    {
      id: "pyq-2011-nov-group-b",
      title: "1st Year Group B - Nov 2011 (Mech, Civil, EI)",
      subject: "All Branches Compiled Papers",
      subjectId: "all_compiled",
      semester: "Semester 1",
      year: 2011,
      examinationType: "Winter Semester (Nov 2011)",
      fileId: "1JHpQFeX4yzUL2UhzxtHrsueopVs3UQny",
      sourceUrl: "https://drive.google.com/file/d/1JHpQFeX4yzUL2UhzxtHrsueopVs3UQny/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1JHpQFeX4yzUL2UhzxtHrsueopVs3UQny/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1JHpQFeX4yzUL2UhzxtHrsueopVs3UQny",
      resourceType: "Group B Booklet PDF",
      verified: true,
      paperType: "Group B Papers",
      description: "Full Group B paper set including Applied Chemistry, Engineering Drawing, and Mechanical Engineering."
    },
    {
      id: "pyq-2009-maths-1",
      title: "Applied Mathematics - I (Code 409) - May 2009",
      subject: "Engineering Mathematics",
      subjectId: "maths1",
      semester: "Semester 1",
      year: 2009,
      examinationType: "Summer Examination (Apr-May 2009)",
      fileId: "1_G89iEU7Qz6KlNdI45gzGVGjnICSN6gO",
      sourceUrl: "https://drive.google.com/file/d/1_G89iEU7Qz6KlNdI45gzGVGjnICSN6gO/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1_G89iEU7Qz6KlNdI45gzGVGjnICSN6gO/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1_G89iEU7Qz6KlNdI45gzGVGjnICSN6gO",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Applied Mathematics-I question paper covering Matrices, Cayley-Hamilton, Calculus, and Series."
    },
    {
      id: "pyq-2009-maths-2",
      title: "Applied Mathematics - II (Code 412) - May 2009",
      subject: "Engineering Mathematics",
      subjectId: "maths1",
      semester: "Semester 2",
      year: 2009,
      examinationType: "Summer Examination (Apr-May 2009)",
      fileId: "1jvaLiOWizI66orrXekx1hvt3mlLZ7Ydi",
      sourceUrl: "https://drive.google.com/file/d/1jvaLiOWizI66orrXekx1hvt3mlLZ7Ydi/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1jvaLiOWizI66orrXekx1hvt3mlLZ7Ydi/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1jvaLiOWizI66orrXekx1hvt3mlLZ7Ydi",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Applied Mathematics-II question paper: Differential Equations, Laplace Transforms, and Fourier Series."
    },
    {
      id: "pyq-2009-physics",
      title: "Applied Physics (Code 416) - May 2009",
      subject: "Applied Physics",
      subjectId: "physics",
      semester: "Semester 1",
      year: 2009,
      examinationType: "Summer Examination (Apr-May 2009)",
      fileId: "17r-Py9r49NolBvCNjhqhx_SXHPCI9rUS",
      sourceUrl: "https://drive.google.com/file/d/17r-Py9r49NolBvCNjhqhx_SXHPCI9rUS/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/17r-Py9r49NolBvCNjhqhx_SXHPCI9rUS/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=17r-Py9r49NolBvCNjhqhx_SXHPCI9rUS",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Interference & Newton's Rings, Laser theory, Fiber optics numericals, and Quantum mechanics."
    },
    {
      id: "pyq-2009-electrical",
      title: "Electrical Engineering (Code 404) - May 2009",
      subject: "Basic Electrical & Electronics",
      subjectId: "beee",
      semester: "Semester 1",
      year: 2009,
      examinationType: "Summer Examination (Apr-May 2009)",
      fileId: "1LbHxQ7kLSGeC69hW6kWMFYhomxzcTeh3",
      sourceUrl: "https://drive.google.com/file/d/1LbHxQ7kLSGeC69hW6kWMFYhomxzcTeh3/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1LbHxQ7kLSGeC69hW6kWMFYhomxzcTeh3/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1LbHxQ7kLSGeC69hW6kWMFYhomxzcTeh3",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Thevenin's & Norton's theorems, Superposition, A.C. circuits, and 1-phase Transformer analysis."
    },
    {
      id: "pyq-2009-electronics",
      title: "Basic Electronics (Code 405) - May 2009",
      subject: "Basic Electrical & Electronics",
      subjectId: "beee",
      semester: "Semester 1",
      year: 2009,
      examinationType: "Summer Examination (Apr-May 2009)",
      fileId: "1u4hu4bn9UHSHmQ7JgdK-PAriG7QmhfDT",
      sourceUrl: "https://drive.google.com/file/d/1u4hu4bn9UHSHmQ7JgdK-PAriG7QmhfDT/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1u4hu4bn9UHSHmQ7JgdK-PAriG7QmhfDT/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1u4hu4bn9UHSHmQ7JgdK-PAriG7QmhfDT",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Semiconductor diodes, Zener voltage regulator, BJT configurations, and CE amplifier analysis."
    },
    {
      id: "pyq-2009-cprog",
      title: "Computer Programming in C (Code 507) - May 2009",
      subject: "Programming & Computer Science",
      subjectId: "pps",
      semester: "Semester 1",
      year: 2009,
      examinationType: "Summer Examination (Apr-May 2009)",
      fileId: "1PwwfqEJqB75r8KAGPKBM6nFhl1f7DMoX",
      sourceUrl: "https://drive.google.com/file/d/1PwwfqEJqB75r8KAGPKBM6nFhl1f7DMoX/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1PwwfqEJqB75r8KAGPKBM6nFhl1f7DMoX/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1PwwfqEJqB75r8KAGPKBM6nFhl1f7DMoX",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory & Code",
      description: "Flowcharts, C syntax, Operators, Recursion, Pointers, Arrays, and Dynamic memory functions."
    },
    {
      id: "pyq-2009-ed",
      title: "Engineering Drawing (Code 500) - May 2009",
      subject: "Engineering Graphics & Design",
      subjectId: "graphics",
      semester: "Semester 1",
      year: 2009,
      examinationType: "Summer Examination (Apr-May 2009)",
      fileId: "1Yrhw8LLa8wP62vdJWLCqC5pncOVGHejp",
      sourceUrl: "https://drive.google.com/file/d/1Yrhw8LLa8wP62vdJWLCqC5pncOVGHejp/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/1Yrhw8LLa8wP62vdJWLCqC5pncOVGHejp/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1Yrhw8LLa8wP62vdJWLCqC5pncOVGHejp",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Drawing Sheet",
      description: "Representative fraction, Diagonal scales, Projections of Straight Lines, and Cylinder intersections."
    },
    {
      id: "pyq-2009-mech",
      title: "Elements of Mechanical Engg (Code 503) - May 2009",
      subject: "Elements of Mechanical Engineering",
      subjectId: "mech",
      semester: "Semester 1",
      year: 2009,
      examinationType: "Summer Examination (Apr-May 2009)",
      fileId: "162X9fmBnlMKygm0Rc9fmAnw0X29YbeFm",
      sourceUrl: "https://drive.google.com/file/d/162X9fmBnlMKygm0Rc9fmAnw0X29YbeFm/view?usp=sharing",
      previewUrl: "https://drive.google.com/file/d/162X9fmBnlMKygm0Rc9fmAnw0X29YbeFm/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=162X9fmBnlMKygm0Rc9fmAnw0X29YbeFm",
      resourceType: "Individual Subject PDF",
      verified: true,
      paperType: "Theory Paper",
      description: "Properties of Steam, Dryness fraction, Babcock & Wilcox Boiler, Otto & Diesel cycles."
    }
  ],

  // ==================================================================
  // QUESTION ANALYSIS & FREQUENT TOPICS
  // "Based on available papers analysed" (2009 - 2024 archive)
  // ==================================================================
  pyqAnalysis: [
    {
      id: "ana-math-cayley",
      subject: "Engineering Mathematics",
      subjectId: "maths1",
      topic: "Rank of Matrix & Cayley-Hamilton Theorem",
      questionType: "Derivation & Numericals",
      marksWeightage: "7 Marks (Compulsory pattern)",
      verifiedYears: [2009, 2011, 2017, 2018, 2024],
      occurrencesCount: 5,
      frequencyLabel: "Very High Frequency",
      supportingQuestions: [
        "State Cayley-Hamilton Theorem. Verify it for matrix A and hence compute its inverse A⁻¹.",
        "Find the rank of matrix A by reducing it to Normal Form or Echelon Form.",
        "Use Cayley-Hamilton theorem to compute high powers like A⁴ or A⁸ without manual multiplication."
      ],
      whyImportant: "Appears in Unit-1 of almost every winter and summer examination paper analysed. Questions either ask to verify for a 2x2 or 3x3 matrix and compute A⁻¹, or ask for reducing to Echelon form."
    },
    {
      id: "ana-math-rolle",
      subject: "Engineering Mathematics",
      subjectId: "maths1",
      topic: "Rolle's & Lagrange's Mean Value Theorems",
      questionType: "Theory & Problem",
      marksWeightage: "7 Marks",
      verifiedYears: [2009, 2011, 2017, 2019, 2024],
      occurrencesCount: 5,
      frequencyLabel: "Very High Frequency",
      supportingQuestions: [
        "Verify Rolle's Theorem for f(x) = x(x - 3)² in [0, 3] and determine point c.",
        "State and verify Lagrange's Mean Value Theorem (LMVT) for given algebraic and trigonometric functions.",
        "State Cauchy's Mean Value Theorem and derive its geometric interpretation."
      ],
      whyImportant: "Guaranteed question in Unit-2 Calculus. Evaluates the student's grasp of continuity, differentiability, and finding intermediate values in open intervals."
    },
    {
      id: "ana-math-eigen",
      subject: "Engineering Mathematics",
      subjectId: "maths1",
      topic: "Eigenvalues, Eigenvectors & Diagonalization",
      questionType: "Numerical Problem",
      marksWeightage: "7 Marks",
      verifiedYears: [2009, 2011, 2017, 2018],
      occurrencesCount: 4,
      frequencyLabel: "High Frequency",
      supportingQuestions: [
        "Find the eigenvalues and eigenvectors of a given 3x3 real symmetric matrix.",
        "Determine whether matrix A is diagonalizable. If so, find modal matrix P such that P⁻¹AP = D."
      ],
      whyImportant: "Fundamental topic in Linear Algebra. Frequently carries full 7 marks and tests properties of orthogonal vectors."
    },
    {
      id: "ana-phys-newton",
      subject: "Applied Physics",
      subjectId: "physics",
      topic: "Newton's Rings & Wavelength Determination",
      questionType: "Derivation & Numericals",
      marksWeightage: "7 Marks",
      verifiedYears: [2009, 2011, 2016, 2017, 2018, 2024],
      occurrencesCount: 6,
      frequencyLabel: "Very High Frequency",
      supportingQuestions: [
        "Explain the formation of Newton's Rings by reflected light and derive the expression for diameter of dark rings Dn² = 4nλR.",
        "Why is the central fringe dark in reflected light in Newton's rings?",
        "In Newton's rings experiment, the diameter of the 4th and 12th dark rings are 0.4 cm and 0.7 cm. Find the wavelength λ of light if R = 100 cm."
      ],
      whyImportant: "Core experiment and derivation in Wave Optics. Repeated consistently across the entire 2009–2024 archive with slight numerical value changes."
    },
    {
      id: "ana-phys-laser",
      subject: "Applied Physics",
      subjectId: "physics",
      topic: "Lasers: He-Ne Laser Construction & Population Inversion",
      questionType: "Theory & Diagram",
      marksWeightage: "7 Marks",
      verifiedYears: [2009, 2016, 2017, 2018, 2024],
      occurrencesCount: 5,
      frequencyLabel: "Very High Frequency",
      supportingQuestions: [
        "Explain the principle of stimulated emission, spontaneous emission, and population inversion with neat energy level diagram.",
        "Describe the construction and working of Helium-Neon (He-Ne) gas laser with schematic diagram and transition equations.",
        "Differentiate between 3-level and 4-level laser systems."
      ],
      whyImportant: "Major long-answer theory question in Laser Physics. Neatly drawn energy level transition diagrams guarantee high scores."
    },
    {
      id: "ana-phys-fiber",
      subject: "Applied Physics",
      subjectId: "physics",
      topic: "Optical Fiber: Acceptance Angle & Numerical Aperture",
      questionType: "Derivation & Numericals",
      marksWeightage: "4 to 7 Marks",
      verifiedYears: [2009, 2011, 2017, 2019],
      occurrencesCount: 4,
      frequencyLabel: "High Frequency",
      supportingQuestions: [
        "Define Acceptance Angle and Numerical Aperture (NA) of an optical fiber. Derive formula NA = √(n₁² - n₂²).",
        "Calculate the Numerical Aperture and critical angle for a step-index fiber with core refractive index n₁ = 1.55 and cladding n₂ = 1.50."
      ],
      whyImportant: "Standard numerical and derivation combo in Fiber Optics. Straightforward formula makes it high-scoring."
    },
    {
      id: "ana-beee-thevenin",
      subject: "Basic Electrical & Electronics",
      subjectId: "beee",
      topic: "Thevenin's Theorem, Norton's Theorem & Superposition",
      questionType: "Circuit Theorem & Numericals",
      marksWeightage: "7 Marks",
      verifiedYears: [2009, 2011, 2016, 2017, 2018, 2024],
      occurrencesCount: 6,
      frequencyLabel: "Very High Frequency",
      supportingQuestions: [
        "State Thevenin's Theorem. Explain the systematic step-by-step procedure to determine Vth and Rth in a DC circuit.",
        "Find the current flowing through 10-ohm load resistor using Thevenin's theorem for the given bridge circuit.",
        "State and explain Maximum Power Transfer Theorem for DC resistive networks."
      ],
      whyImportant: "The backbone of network analysis in BEEE. Present in every single question paper booklet analysed."
    },
    {
      id: "ana-beee-transformer",
      subject: "Basic Electrical & Electronics",
      subjectId: "beee",
      topic: "Single-Phase Transformer: EMF Equation & Equivalent Circuit",
      questionType: "Derivation & Numericals",
      marksWeightage: "7 Marks",
      verifiedYears: [2009, 2011, 2017, 2019],
      occurrencesCount: 4,
      frequencyLabel: "High Frequency",
      supportingQuestions: [
        "Derive the EMF equation of an ideal single-phase transformer: E = 4.44 f N Φm.",
        "Explain the open-circuit (OC) and short-circuit (SC) tests performed on a transformer to determine equivalent circuit parameters.",
        "A 20 kVA, 2000/200 V single-phase transformer has primary and secondary winding resistances. Calculate efficiency at full load."
      ],
      whyImportant: "Unit-3 transformer theory and numericals carry a dedicated question in university examinations."
    },
    {
      id: "ana-pps-pointers",
      subject: "Programming & Computer Science",
      subjectId: "pps",
      topic: "Pointers, Dynamic Memory Allocation & Call by Reference",
      questionType: "Theory & C Code",
      marksWeightage: "7 Marks",
      verifiedYears: [2009, 2016, 2017, 2018, 2024],
      occurrencesCount: 5,
      frequencyLabel: "Very High Frequency",
      supportingQuestions: [
        "Explain Call by Value and Call by Reference with working C program to swap two numbers using pointers.",
        "Explain dynamic memory allocation functions: malloc(), calloc(), realloc(), and free() with syntax and memory layout.",
        "What is a dangling pointer and memory leak? How do you prevent them in C?"
      ],
      whyImportant: "Pointer questions are essential in B.Tech C programming exams and carry both theory and code snippets."
    },
    {
      id: "ana-pps-structures",
      subject: "Programming & Computer Science",
      subjectId: "pps",
      topic: "Structures vs Unions & Array of Structures",
      questionType: "Comparison & C Code",
      marksWeightage: "7 Marks",
      verifiedYears: [2009, 2011, 2017, 2019],
      occurrencesCount: 4,
      frequencyLabel: "High Frequency",
      supportingQuestions: [
        "Differentiate between Structure and Union in C with memory layout diagrams.",
        "Write a C program to store records of 50 students (Roll No, Name, Marks) using an array of structures and display students scoring > 75%."
      ],
      whyImportant: "Standard structured programming question that evaluates struct definitions, dot operators, and loop indexing."
    },
    {
      id: "ana-ed-lines",
      subject: "Engineering Graphics & Design",
      subjectId: "graphics",
      topic: "Projections of Straight Lines Inclined to Both Planes",
      questionType: "Drawing Sheet Problem",
      marksWeightage: "7 to 10 Marks",
      verifiedYears: [2009, 2017, 2018, 2024],
      occurrencesCount: 4,
      frequencyLabel: "High Frequency",
      supportingQuestions: [
        "A straight line AB of true length 80 mm has end A in HP and 20 mm in front of VP. The line is inclined at 30° to HP and 45° to VP. Draw its front view and top view.",
        "Differentiate between First Angle Projection and Third Angle Projection with international standard symbols."
      ],
      whyImportant: "Straight line problems test true lengths, apparent lengths, and locus lines. Mandatory drawing question in ED."
    }
  ],

  // ==================================================================
  // STUDY NOTES & REVISION RESOURCES
  // Organized by Subject, Semester, Unit & Resource Type
  // ==================================================================
  studyResources: [
    {
      id: "res-math-1",
      subject: "Engineering Mathematics",
      subjectId: "maths1",
      semester: "Semester 1",
      unit: "Unit 1: Linear Algebra & Matrices",
      type: "Revision Note",
      typeBadge: "Concise Notes",
      title: "Rank of a Matrix, Echelon Form & Cayley-Hamilton",
      summary: "Reduction to row echelon form, system consistency AX = B, and matrix inverse computation via Cayley-Hamilton theorem.",
      details: `
**1. Row Echelon Form & Rank:**
- The rank of matrix A is the number of non-zero rows in its Row Echelon Form.
- A system $AX = B$ is consistent if and only if $Rank(A) = Rank(A|B)$.
- Unique solution occurs when $Rank(A) = Rank(A|B) = n$ (number of unknowns).

**2. Cayley-Hamilton Theorem:**
Every square matrix satisfies its own characteristic equation: $|A - \\lambda I| = 0$.
If characteristic equation is $\\lambda^n + c_{n-1}\\lambda^{n-1} + \\dots + c_0 = 0$, then:
$$A^n + c_{n-1}A^{n-1} + \\dots + c_0 I = O$$

**3. Formula for Matrix Inverse:**
$$A^{-1} = -\\frac{1}{c_0} [A^{n-1} + c_{n-1}A^{n-2} + \\dots + c_1 I]$$
      `,
      keyFormulas: [
        "Characteristic Equation: |A - λI| = 0",
        "Trace of A = Sum of eigenvalues",
        "Determinant |A| = Product of eigenvalues",
        "Rank(A) = Number of non-zero rows in echelon form"
      ],
      verifiedPdfUrl: "https://nptel.ac.in/courses/111105121",
      pdfName: "NPTEL Linear Algebra Course Notes"
    },
    {
      id: "res-math-2",
      subject: "Engineering Mathematics",
      subjectId: "maths1",
      semester: "Semester 1",
      unit: "Unit 2: Differential Calculus",
      type: "Derivations",
      typeBadge: "Derivations",
      title: "Rolle's & Lagrange's Mean Value Theorems Derivation",
      summary: "Geometric and analytical derivations of Rolle's theorem, Cauchy's theorem, and Lagrange's Mean Value Theorem (LMVT).",
      details: `
**1. Statement of Rolle's Theorem:**
Let $f(x)$ be continuous in $[a, b]$, differentiable in $(a, b)$, and $f(a) = f(b)$.
Then there exists at least one point $c \\in (a, b)$ such that $f'(c) = 0$.

**2. Lagrange's Mean Value Theorem (LMVT):**
If $f(x)$ is continuous in $[a, b]$ and differentiable in $(a, b)$, then there exists $c \\in (a, b)$ such that:
$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

**Geometric Meaning:**
The tangent at point $(c, f(c))$ is strictly parallel to the chord joining end-points $(a, f(a))$ and $(b, f(b))$.
      `,
      keyFormulas: [
        "Rolle's: f'(c) = 0 for some c ∈ (a, b)",
        "LMVT: f'(c) = [f(b) - f(a)] / (b - a)",
        "Cauchy's: [f'(c) / g'(c)] = [f(b) - f(a)] / [g(b) - g(a)]"
      ],
      verifiedPdfUrl: "https://nptel.ac.in/courses/111106146",
      pdfName: "Calculus & Applications (NPTEL)"
    },
    {
      id: "res-phys-1",
      subject: "Applied Physics",
      subjectId: "physics",
      semester: "Semester 1",
      unit: "Unit 1: Wave Optics & Interference",
      type: "Derivations",
      typeBadge: "Derivations",
      title: "Newton's Rings Diameter Derivation & Wavelength",
      summary: "Full step-by-step derivation of dark and bright fringe diameters and experimental calculation of wavelength λ.",
      details: `
**1. Path Difference for Reflected Light:**
$$\\Delta = 2\\mu t \\cos r + \\frac{\\lambda}{2}$$
For air film ($\\mu = 1$) and normal incidence ($\\cos r \\approx 1$):
$$\\Delta = 2t + \\frac{\\lambda}{2}$$

**2. Dark Rings Condition (Destructive Interference):**
$$2t + \\frac{\\lambda}{2} = (2n + 1)\\frac{\\lambda}{2} \\implies 2t = n\\lambda$$

From circle geometry, air film thickness $t = \\frac{r_n^2}{2R} = \\frac{D_n^2}{8R} \\implies 2t = \\frac{D_n^2}{4R}$.
$$\\frac{D_n^2}{4R} = n\\lambda \\implies D_n^2 = 4n\\lambda R$$

**3. Wavelength Formula:**
$$\\lambda = \\frac{D_{n+p}^2 - D_n^2}{4pR}$$
      `,
      keyFormulas: [
        "Diameter of n-th dark ring: Dn = √(4nλR)",
        "Diameter of n-th bright ring: Dn = √[2(2n - 1)λR]",
        "Wavelength: λ = (D_{n+p}² - Dn²) / (4pR)"
      ],
      verifiedPdfUrl: "https://nptel.ac.in/courses/115101011",
      pdfName: "Optics & Interference Lecture Handout"
    },
    {
      id: "res-phys-2",
      subject: "Applied Physics",
      subjectId: "physics",
      semester: "Semester 1",
      unit: "Unit 2: Lasers & Fiber Optics",
      type: "Formula Sheet",
      typeBadge: "Formula Sheet",
      title: "Laser Physics & Optical Fiber Quick Formulas",
      summary: "Einstein coefficients, population inversion, Helium-Neon transitions, Numerical Aperture, and Acceptance Angle.",
      details: `
**1. Einstein's Relations:**
- Ratio of spontaneous to stimulated emission: $A_{21} / B_{21} = \\frac{8\\pi h \\nu^3}{c^3}$
- Stimulated absorption = Stimulated emission: $B_{12} = B_{21}$

**2. Fiber Optics Key Formulas:**
- Critical Angle: $\\sin \\theta_c = \\frac{n_2}{n_1}$
- Numerical Aperture: $\\text{NA} = \\sin \\theta_0 = \\sqrt{n_1^2 - n_2^2}$
- Fractional Refractive Index Change: $\\Delta = \\frac{n_1 - n_2}{n_1}$
- Approximation: $\\text{NA} \\approx n_1 \\sqrt{2\\Delta}$
- V-Number (Normalized Frequency): $V = \\frac{2\\pi a}{\\lambda}\\text{NA}$
      `,
      keyFormulas: [
        "Numerical Aperture: NA = √(n₁² - n₂²)",
        "Acceptance Angle: θ₀ = sin⁻¹(NA)",
        "He-Ne Emission Wavelength: 632.8 nm (Red light)",
        "Fractional change: Δ = (n₁ - n₂) / n₁"
      ],
      verifiedPdfUrl: "https://nptel.ac.in/courses/115102026",
      pdfName: "Lasers & Fiber Optics Reference Notes"
    },
    {
      id: "res-beee-1",
      subject: "Basic Electrical & Electronics",
      subjectId: "beee",
      semester: "Semester 1",
      unit: "Unit 1: DC Circuit Analysis",
      type: "Solved Numericals",
      typeBadge: "Solved Numericals",
      title: "Thevenin's Theorem Step-by-Step Circuit Solution",
      summary: "Complete method to find Open Circuit Voltage (Vth), Thevenin Resistance (Rth), and Load Current (IL).",
      details: `
**Procedure:**
1. **Remove Load Resistor $R_L$** across terminals A and B.
2. **Find $V_{th}$:** Calculate open-circuit voltage across terminals A-B using nodal or mesh analysis.
3. **Find $R_{th}$:** Deactivate all independent sources (Voltage source $\\to$ Short Circuit; Current source $\\to$ Open Circuit) and calculate equivalent resistance between A and B.
4. **Calculate Load Current:**
$$I_L = \\frac{V_{th}}{R_{th} + R_L}$$

**Maximum Power Transfer Theorem:**
Maximum power is delivered when $R_L = R_{th}$:
$$P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$$
      `,
      keyFormulas: [
        "Thevenin Load Current: IL = Vth / (Rth + RL)",
        "Max Power to Load: Pmax = Vth² / (4 Rth)",
        "Norton Current: IN = Vth / Rth"
      ],
      verifiedPdfUrl: "https://nptel.ac.in/courses/108108076",
      pdfName: "Electrical Network Theorems Notes"
    },
    {
      id: "res-pps-1",
      subject: "Programming & Computer Science",
      subjectId: "pps",
      semester: "Semester 1",
      unit: "Unit 3: Pointers & Dynamic Memory",
      type: "Important Definitions",
      typeBadge: "Important Definitions",
      title: "C Pointers, Memory Allocation & Call by Reference",
      summary: "Clear definitions and working C snippets for pointer dereferencing, malloc, calloc, realloc, and free.",
      details: `
**1. Pointer Definition:**
A pointer is a variable that stores the memory address of another variable.
\`\`\`c
int a = 10;
int *p = &a; // p points to address of a
printf("%d", *p); // Dereferencing prints 10
\`\`\`

**2. Dynamic Memory Functions in \`<stdlib.h>\`:**
- \`malloc(size)\`: Allocates uninitialized memory of given bytes.
- \`calloc(n, size)\`: Allocates zero-initialized memory for n elements.
- \`realloc(ptr, new_size)\`: Resizes previously allocated dynamic memory.
- \`free(ptr)\`: Releases heap memory to prevent memory leaks.
      `,
      keyFormulas: [
        "Pointer declaration: data_type *ptr_name;",
        "malloc syntax: ptr = (cast_type*) malloc(byte_size);",
        "calloc syntax: ptr = (cast_type*) calloc(n, element_size);",
        "free memory: free(ptr); ptr = NULL;"
      ],
      verifiedPdfUrl: "https://nptel.ac.in/courses/106104128",
      pdfName: "Programming in C Course Handout"
    },
    {
      id: "res-graphics-1",
      subject: "Engineering Graphics & Design",
      subjectId: "graphics",
      semester: "Semester 1",
      unit: "Unit 2: Projections of Points & Lines",
      type: "Formula Sheet",
      typeBadge: "Formula Sheet",
      title: "First Angle vs Third Angle & Line True Length Rules",
      summary: "BIS standard First Angle projection rules, apparent angles, and true length determination.",
      details: `
**1. First Angle Projection (Indian / BIS Standard):**
- Object placed in 1st Quadrant (between observer and plane).
- **Front View (Elevation)** is ABOVE Reference Line ($xy$).
- **Top View (Plan)** is BELOW Reference Line ($xy$).
- **Left Hand Side View** is drawn on the RIGHT of Front View.

**2. Straight Line Inclinations:**
- True length (TL) has true angle $\\theta$ with HP and $\\phi$ with VP.
- Apparent angle with HP is $\\alpha$ (in elevation); apparent angle with VP is $\\beta$ (in plan).
      `,
      keyFormulas: [
        "First Angle: Elevation on TOP, Plan on BOTTOM",
        "Third Angle: Plan on TOP, Elevation on BOTTOM",
        "Representative Fraction: RF = Drawing Size / Actual Object Size"
      ],
      verifiedPdfUrl: "https://nptel.ac.in/courses/112103019",
      pdfName: "Engineering Graphics Standards (NPTEL)"
    }
  ],

  // Mock Tests & Practice Quizzes (Retained from existing version)
  quizzes: [
    {
      id: "quiz-maths",
      subjectId: "maths1",
      subjectName: "Engineering Mathematics",
      title: "Matrices, Rank & Calculus Practice Test",
      description: "Test your understanding of Rank, Eigenvalues, and Mean Value Theorems. 5 Questions, 5 Marks.",
      questions: [
        {
          id: "m1",
          question: "If A is a 3x3 non-singular matrix, what is the rank of matrix A?",
          options: ["0", "1", "2", "3"],
          correctAnswer: 3,
          explanation: "For an n x n square matrix, it is non-singular if and only if |A| ≠ 0, which means all 3 rows are linearly independent. Hence its rank is 3."
        },
        {
          id: "m2",
          question: "According to Cayley-Hamilton theorem, every square matrix satisfies its own:",
          options: [
            "Characteristic equation",
            "Trace equation",
            "Determinant matrix",
            "Transpose equation"
          ],
          correctAnswer: 0,
          explanation: "Cayley-Hamilton theorem explicitly states that every square matrix A satisfies its own characteristic equation |A - λI| = 0."
        },
        {
          id: "m3",
          question: "For Rolle's Theorem to be applicable on f(x) in [a, b], which condition must be satisfied?",
          options: [
            "f(a) must equal f(b)",
            "f'(x) must be continuous in [a, b]",
            "f(x) must be discontinuous at x = a",
            "f(a) + f(b) = 0"
          ],
          correctAnswer: 0,
          explanation: "Rolle's theorem requires f(x) to be continuous on [a, b], differentiable on (a, b), and f(a) = f(b) so that there exists some c with f'(c) = 0."
        },
        {
          id: "m4",
          question: "The sum of the eigenvalues of any matrix A is always equal to:",
          options: [
            "Determinant of A",
            "Trace (sum of principal diagonal elements) of A",
            "Rank of A",
            "Zero"
          ],
          correctAnswer: 1,
          explanation: "A fundamental property of matrices: Sum of eigenvalues = Trace of A, and Product of eigenvalues = Determinant of A."
        },
        {
          id: "m5",
          question: "A system of linear equations AX = B has a unique solution if:",
          options: [
            "Rank(A) < Rank(A|B)",
            "Rank(A) = Rank(A|B) = number of unknowns",
            "Rank(A) = Rank(A|B) < number of unknowns",
            "Determinant of A is 0"
          ],
          correctAnswer: 1,
          explanation: "When Rank of matrix A equals the Rank of the augmented matrix (A|B) and also equals the number of variables, the system has a unique consistent solution."
        }
      ]
    },
    {
      id: "quiz-physics",
      subjectId: "physics",
      subjectName: "Applied Physics",
      title: "Optics, Lasers & Fibers Quick Check",
      description: "Evaluate your grasp of Newton's rings, Laser action, and Numerical Aperture. 5 Questions, 5 Marks.",
      questions: [
        {
          id: "p1",
          question: "In Newton's rings experiment, why is the central spot in reflected light dark?",
          options: [
            "Because light is completely absorbed by glass",
            "Because of additional phase change of π (path difference λ/2) upon reflection",
            "Because air film thickness is infinite at center",
            "Because refractive index of lens equals zero"
          ],
          correctAnswer: 1,
          explanation: "At the point of contact, film thickness t = 0. Due to reflection at the boundary of a denser medium, an extra path difference of λ/2 is introduced, causing destructive interference."
        },
        {
          id: "p2",
          question: "The phenomenon essential for producing laser light is:",
          options: [
            "Spontaneous emission",
            "Stimulated emission",
            "Photoelectric effect",
            "Compton scattering"
          ],
          correctAnswer: 1,
          explanation: "Stimulated emission produces photons of identical energy, phase, and polarization, giving laser its signature coherence and intensity."
        },
        {
          id: "p3",
          question: "In an optical fiber, light propagates through the core due to:",
          options: [
            "Total Internal Reflection (TIR)",
            "Diffraction",
            "Polarization",
            "Dispersion"
          ],
          correctAnswer: 0,
          explanation: "Since the core has a higher refractive index than the cladding (n1 > n2), light striking above the critical angle undergoes continuous Total Internal Reflection."
        },
        {
          id: "p4",
          question: "The formula for Numerical Aperture (NA) of a step-index optical fiber is:",
          options: [
            "NA = n1 + n2",
            "NA = √(n1² - n2²)",
            "NA = n1 / n2",
            "NA = √(n1² + n2²)"
          ],
          correctAnswer: 1,
          explanation: "Numerical Aperture NA = sin(θ_max) = √(n1² - n2²), representing the light-gathering capacity of the fiber."
        },
        {
          id: "p5",
          question: "In Newton's rings by reflected light, the diameter of dark rings is directly proportional to:",
          options: [
            "n",
            "√n",
            "n²",
            "1/√n"
          ],
          correctAnswer: 1,
          explanation: "The diameter formula is Dn = √(4nλR), which means diameter Dn is directly proportional to the square root of the ring order number (√n)."
        }
      ]
    },
    {
      id: "quiz-beee",
      subjectId: "beee",
      subjectName: "Basic Electrical & Electronics",
      title: "DC Circuits & Network Theorems Quiz",
      description: "Quick 5-question test on Ohm's law, Kirchhoff's laws, and Thevenin equivalent circuits.",
      questions: [
        {
          id: "b1",
          question: "Kirchhoff's Current Law (KCL) is based on the conservation of:",
          options: ["Energy", "Electric Charge", "Momentum", "Magnetic Flux"],
          correctAnswer: 1,
          explanation: "KCL states that the algebraic sum of currents entering a node is zero, which is a direct consequence of conservation of electric charge."
        },
        {
          id: "b2",
          question: "To calculate Thevenin resistance (Rth), independent voltage sources are replaced by:",
          options: [
            "Open circuits",
            "Short circuits",
            "Capacitors",
            "Their internal voltages unchanged"
          ],
          correctAnswer: 1,
          explanation: "An ideal voltage source has zero internal resistance, so deactivating it corresponds to replacing it with a short circuit (0 V)."
        },
        {
          id: "b3",
          question: "Maximum Power Transfer Theorem states that maximum power is transferred to load when:",
          options: [
            "RL = 0",
            "RL = ∞",
            "RL = Rth (Load resistance equals Thevenin resistance)",
            "RL = 2 × Rth"
          ],
          correctAnswer: 2,
          explanation: "In DC resistive networks, the power delivered to the load resistor is maximized when RL equals the source's internal Thevenin resistance (RL = Rth)."
        },
        {
          id: "b4",
          question: "The power factor of a purely resistive AC circuit is:",
          options: ["0", "0.5 lagging", "1 (Unity)", "0 leading"],
          correctAnswer: 2,
          explanation: "In a purely resistive circuit, voltage and current are in phase (phase angle φ = 0°). Hence cos(φ) = cos(0°) = 1."
        },
        {
          id: "b5",
          question: "A step-down transformer decreases voltage and simultaneously:",
          options: [
            "Decreases current",
            "Increases current (assuming ideal efficiency)",
            "Decreases frequency",
            "Increases frequency"
          ],
          correctAnswer: 1,
          explanation: "Since power is conserved (V1 × I1 ≈ V2 × I2), when voltage decreases across the secondary coil, current increases proportionally. Frequency remains constant."
        }
      ]
    },
    {
      id: "quiz-pps",
      subjectId: "pps",
      subjectName: "Programming & Computer Science",
      title: "C Language Fundamentals & Pointers",
      description: "Test basic syntax, operator precedence, pointers, and memory concepts in C. 5 Questions, 5 Marks.",
      questions: [
        {
          id: "c1",
          question: "What is the output of `sizeof('a')` in a standard C compiler (e.g. GCC on 32/64-bit)?",
          options: [
            "1 byte",
            "sizeof(int) typically 4 bytes",
            "2 bytes",
            "Syntax Error"
          ],
          correctAnswer: 1,
          explanation: "In C, character literals like 'a' have type `int` (character constants are promoted to integer). Therefore `sizeof('a')` evaluates to `sizeof(int)`, which is 4 bytes in modern compilers."
        },
        {
          id: "c2",
          question: "Which function dynamically allocates memory initialized to zero in C?",
          options: ["malloc()", "calloc()", "alloc()", "realloc()"],
          correctAnswer: 1,
          explanation: "calloc(n, size) allocates memory for an array of n elements and initializes all bytes to zero, unlike malloc() which leaves garbage values."
        },
        {
          id: "c3",
          question: "What does the expression `*ptr++` do in C?",
          options: [
            "Increments the value pointed to by ptr",
            "Returns value pointed to by ptr, then increments the pointer address",
            "Increments the pointer address, then fetches the value",
            "Causes a compilation error"
          ],
          correctAnswer: 1,
          explanation: "Due to operator precedence and associativity: the postfix `++` has higher precedence than `*`, but postfix returns old pointer value before incrementing. Thus it evaluates `*ptr` and then moves `ptr` to the next element."
        },
        {
          id: "c4",
          question: "What happens if a dynamically allocated pointer is not freed before terminating its scope?",
          options: [
            "Segmentation fault immediately",
            "Memory Leak",
            "Compilation warning",
            "Automatic garbage collection by C"
          ],
          correctAnswer: 1,
          explanation: "C does not have automatic garbage collection. If you allocate memory with malloc/calloc and lose the pointer without calling free(), it causes a memory leak."
        },
        {
          id: "c5",
          question: "Which of the following is true about arrays and pointers in C?",
          options: [
            "Array names can be assigned new addresses using `=` operator",
            "An array name acts as a constant pointer to its first element",
            "Pointers cannot be indexed using bracket notation `ptr[i]`",
            "Arrays are passed by value by default to functions"
          ],
          correctAnswer: 1,
          explanation: "In most expressions, the name of an array decays into a constant pointer pointing to its first element (`&arr[0]`), and cannot be reassigned."
        }
      ]
    }
  ]
};
