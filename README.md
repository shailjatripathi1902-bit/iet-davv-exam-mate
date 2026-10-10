# 🎓 IET DAVV ExamMate

**A Beginner-Friendly Academic Companion Website for 1st Year B.Tech Students at IET DAVV, Indore.**

---

## 🌟 Overview

**IET DAVV ExamMate** is a clean, responsive, and functional web application built specifically for first-year engineering students at the **Institute of Engineering & Technology, Devi Ahilya Vishwavidyalaya (IET DAVV), Indore**.

It helps students manage their syllabus, revise core concepts, test their knowledge with timed mock quizzes, track upcoming Mid-Sem / End-Sem exam dates, and plan their daily study targets — all directly within their browser without requiring any external database, server, or complex backend setup.

---

## 🚀 How to Run the Project

Since this project uses pure vanilla HTML5, CSS3, and modern JavaScript, **no installation, build tool, or server is required!**

### Method 1: Direct Browser Launch (Easiest)
1. Open the project folder: `d:\Downloads\exam assistence`
2. Double-click **`index.html`** or right-click and choose **Open with > Google Chrome** (or Microsoft Edge / Firefox).
3. The website will load instantly with all features fully interactive!

### Method 2: Using VS Code Live Server (Optional)
1. Open the folder in VS Code.
2. If you have the "Live Server" extension installed, right-click `index.html` and click **"Open with Live Server"**.
3. It will open at `http://127.0.0.1:5500/index.html`.

---

## 📂 Project Structure

The project follows a clean separation of concerns, keeping files minimal, well-documented, and easy for beginners to understand:

```text
exam assistence/
├── index.html        # Page structure, semantic HTML5 sections, and accessible navigation
├── styles.css        # Navy blue & light blue responsive styling, cards, and UI components
├── data.js           # Sample 1st-year academic syllabus notes, quizzes, and PYQs dataset
├── app.js            # Interactive application logic, localStorage handling, and calculations
└── README.md         # Documentation, guide, and presentation talking points
```

---

## ✨ Features Breakdown

### 1. 📊 Home & Student Dashboard
- **Welcome Banner:** Friendly greeting tailored for autonomous first-year B.Tech students.
- **Quick Metric Cards:** Live counters for Upcoming Exams, Study Tasks Completed, Latest Quiz Score, and Bookmarked Notes.
- **First-Year Subject Cards:** Direct shortcuts to the 5 core subjects:
  - Engineering Mathematics - I (`AM101`)
  - Applied Physics (`AP102`)
  - Basic Electrical & Electronics Engineering - BEEE (`EE103`)
  - Programming for Problem Solving in C (`CS104`)
  - Engineering Graphics & Design (`ME105`)
- **Upcoming Exam Tracker:** Students can enter exam names (e.g. Mid-Sem 1, Class Test) and dates. The app calculates and displays dynamic countdown badges (e.g., *"In 5 days"*, *"Tomorrow!"*, *"Exam Today!"*).
- **Recent Performance Preview:** Shows the student's most recent quiz score and quick actions.

### 2. 📚 Notes & Study Material
- **Syllabus & Unit-wise Organization:** Detailed notes covering key first-year topics (e.g., Cayley-Hamilton Theorem, Newton's Rings, Kirchhoff's Laws & Thevenin Theorem, C Pointers & Dynamic Memory, First-Angle Projections).
- **Real-Time Live Search:** Filter notes dynamically as you type topic keywords, unit names, or concepts.
- **Subject Filter Dropdown:** Focus on one subject at a time or browse all.
- **Interactive Bookmarks:** Star revision notes with one click. Use the *"Bookmarked Only"* toggle for rapid last-minute exam prep.
- **Full Reading Modal:** Click *"Read Note"* to view comprehensive derivations, formulas, and key takeaways in an organized dialog.
- **Authorized References:** Links to standard NPTEL and reference textbooks.

### 3. 📝 Mock Tests & Quizzes
- **Multiple-Choice Questions:** 4 clear options per question.
- **Instant Automatic Scoring:** Calculates the exact score (e.g. `5 / 5 (100%)`).
- **Visual Answer Key:** Upon submission, the app highlights correct answers in green and incorrect selections in red.
- **Step-by-Step Explanations:** Reveals beginner-friendly explanations for every question so students learn from mistakes.
- **Retake & Reset:** Easy one-click retake button to practice until mastery.
- **Score Persistence:** Saves quiz attempts to the student's history, updating dashboard and progress metrics automatically.

### 4. 📅 Simple Study Planner
- **Add Study Tasks:** Choose task title, subject, target date, and priority level (*High*, *Medium*, *Normal*).
- **Interactive Checklist:** Mark tasks complete with custom checkboxes (displays strike-through styling and updates completion rate).
- **Filter Tabs:** View *All*, *Pending*, or *Completed* tasks.
- **Browser LocalStorage:** Tasks remain safely stored in your browser even if you close or refresh the tab.

### 5. ❓ PYQs & Important Questions
- **Organized by Subject & Unit:** High-yield and repeated exam-style questions.
- **Marks Weightage Indicator:** Clearly labeled marks (e.g. `[7 Marks]`, `[4 Marks]`).
- **Collapsible Model Solutions:** Click *"Show Detailed Solution"* to reveal step-by-step mathematical derivations, circuit steps, or verified C code.
- **Transparent Labelling:** Explicit advisory indicating these are sample academic revision questions aligned with autonomous syllabus patterns, linking to the official IET DAVV examination portal.

### 6. 📈 My Academic Progress
- **Planner Completion Percentage:** Visual progress bar tracking completed vs pending tasks.
- **Average Quiz Score:** Mathematical average of all test attempts.
- **Revision Bookmarks Counter:** Tracks total saved revision materials.
- **Quiz History Table:** Displays dates, subjects, scores, and percentage badges.
- **Demo Reset Button:** Convenient option to reset data back to initial defaults during testing or viva demonstrations.

---

## 🎨 Design & UI/UX Highlights

- **Color Scheme:**
  - Deep Navy Blue (`#0B2545`) & Royal Navy (`#133E87`) for headers and primary emphasis.
  - Light Sky Blue (`#EEF5FF`) & Soft Blue (`#D9E9FF`) for subtle backgrounds and badges.
  - Clean White (`#FFFFFF`) for readable card containers.
  - Accent colors: Green (`#10B981`) for completed tasks/correct answers; Amber/Red for deadlines and high priority.
- **Responsive Layout:** Adapts seamlessly across desktop monitors, laptops, tablets, and mobile devices (includes a responsive mobile slide-out navigation menu).
- **Toast Notifications:** Gentle non-intrusive floating feedback messages (*"Task added!"*, *"Bookmark saved!"*, *"Quiz submitted!"*).

---

## 💡 Beginner Coding Concepts Used in this Project

If you are explaining this project in your college viva or practical exam, here are the main concepts to mention:

1. **HTML5 Semantic Elements:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` for clean document hierarchy.
2. **CSS Flexbox & CSS Grid:** Flexible layouts for cards (`grid-template-columns: repeat(auto-fit, minmax(...))`) and responsive navigation.
3. **CSS Variables (`:root`):** Centralized color palette and spacing for easy theme modifications.
4. **JavaScript DOM Manipulation:** `document.getElementById()`, `addEventListener()`, `innerHTML`, and class list manipulation (`classList.add()`, `classList.toggle()`).
5. **Browser `localStorage` API:** `localStorage.setItem()` and `localStorage.getItem()` to preserve student tasks and quiz history across browser sessions without a server.
6. **Array Methods:** Modern declarative JavaScript methods:
   - `.filter()` for live note search and task filtering.
   - `.map()` for generating HTML cards dynamically.
   - `.reduce()` for calculating average quiz scores.

---

## ✏️ How to Add Your Own Notes or Questions

To add your own notes, open **`data.js`**:
1. Scroll to `EXAMMATE_DATA.notes`.
2. Copy any note block and update `subjectId`, `title`, `unit`, and `summary`.
3. Save the file and refresh your browser!

To add a new quiz question:
1. Open **`data.js`** and scroll to `EXAMMATE_DATA.quizzes`.
2. Add a new object inside `questions` with `question`, 4 `options`, the index of `correctAnswer` (0, 1, 2, or 3), and an `explanation`.
3. Refresh the page!

---

## 📜 Academic Disclaimer
*This website is a student study companion tool developed for revision purposes. All course structures and sample questions are based on standard autonomous first-year B.Tech curricula. For official schedules, admit cards, and examination results, please visit the official [IET DAVV Examination Portal](https://www.ietdavv.edu.in/).*
