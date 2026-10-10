/**
 * ====================================================================
 * IET DAVV ExamMate - Main Application Logic (app.js)
 * ====================================================================
 * Beginner-Friendly Structure:
 * 1. Global State & LocalStorage Management
 * 2. Navigation & Tab Switching
 * 3. Dashboard Logic (Metrics, Exam Dates, Subjects)
 * 4. Previous Year Question Papers (PYQs) - Search, Multi-Filter, View, Download
 * 5. PYQ Analysis & Important Questions (Topic Frequency, Occurrences, Verification)
 * 6. Notes & Study Resources (Type Filters, Bookmark System, Reading Modal)
 * 7. Mock Tests & Quizzes (Execution, Scoring, Explanations, Retake)
 * 8. Simple Study Planner (Add, Toggle, Delete, LocalStorage)
 * 9. My Progress Tracking & Calculations
 * 10. Modals, Toast Notifications & Event Listeners
 * ====================================================================
 */

// Global Application Controller Object
const ExamMateApp = {
  // State variables loaded from browser localStorage
  state: {
    tasks: [],
    examDates: [],
    quizHistory: [],
    bookmarkedResourceIds: [],
    activeQuizId: "quiz-maths",
    activeTaskFilter: "all",
    activeResourceType: "all",
    showOnlyBookmarkedNotes: false
  },

  /**
   * Initialize the application on page load
   */
  init() {
    console.log("Initializing IET DAVV ExamMate...");
    this.loadStateFromStorage();
    this.setupNavigation();
    this.renderDashboard();
    this.renderPYQPapers();
    this.renderAnalysisSection();
    this.renderStudyResources();
    this.setupQuizSection();
    this.renderPlannerTasks();
    this.renderProgressPage();
    this.setupEventListeners();
  },

  // ==================================================================
  // 1. LOCAL STORAGE & STATE MANAGEMENT
  // ==================================================================

  loadStateFromStorage() {
    // 1. Load Study Tasks
    const savedTasks = localStorage.getItem("exammate_tasks");
    if (savedTasks) {
      try {
        this.state.tasks = JSON.parse(savedTasks);
      } catch (e) {
        this.state.tasks = [];
      }
    } else {
      // Default sample tasks for 1st year B.Tech
      const today = new Date();
      const inTwoDays = new Date(today);
      inTwoDays.setDate(today.getDate() + 2);
      const inFiveDays = new Date(today);
      inFiveDays.setDate(today.getDate() + 5);

      this.state.tasks = [
        {
          id: "task-1",
          title: "Solve Cayley-Hamilton & Matrix Rank PYQs (2017 & 2024)",
          subject: "Engineering Mathematics",
          dueDate: inTwoDays.toISOString().split("T")[0],
          priority: "High",
          completed: false
        },
        {
          id: "task-2",
          title: "Revise Newton's Rings derivation and formula Dn² = 4nλR",
          subject: "Applied Physics",
          dueDate: inFiveDays.toISOString().split("T")[0],
          priority: "Medium",
          completed: false
        },
        {
          id: "task-3",
          title: "Practice Thevenin circuit reduction problems from 2009 & 2017 papers",
          subject: "Basic Electrical & Electronics",
          dueDate: today.toISOString().split("T")[0],
          priority: "Normal",
          completed: true
        }
      ];
      this.saveTasksToStorage();
    }

    // 2. Load Upcoming Exam Dates
    const savedExamDates = localStorage.getItem("exammate_exam_dates");
    if (savedExamDates) {
      try {
        this.state.examDates = JSON.parse(savedExamDates);
      } catch (e) {
        this.state.examDates = [];
      }
    } else {
      // Sample initial exam dates
      const now = new Date();
      const midSemDate = new Date(now);
      midSemDate.setDate(now.getDate() + 12);
      const classTestDate = new Date(now);
      classTestDate.setDate(now.getDate() + 5);

      this.state.examDates = [
        {
          id: "exam-1",
          subject: "Engineering Mathematics",
          name: "Mid-Semester 1 Examination",
          date: midSemDate.toISOString().split("T")[0]
        },
        {
          id: "exam-2",
          subject: "Applied Physics",
          name: "Class Test & Viva Voce",
          date: classTestDate.toISOString().split("T")[0]
        }
      ];
      this.saveExamDatesToStorage();
    }

    // 3. Load Bookmarks
    const savedBookmarks = localStorage.getItem("exammate_bookmarks");
    if (savedBookmarks) {
      try {
        this.state.bookmarkedResourceIds = JSON.parse(savedBookmarks);
      } catch (e) {
        this.state.bookmarkedResourceIds = [];
      }
    } else {
      // Pre-bookmark first resource
      this.state.bookmarkedResourceIds = ["res-math-1"];
      this.saveBookmarksToStorage();
    }

    // 4. Load Quiz History
    const savedQuizHistory = localStorage.getItem("exammate_quiz_history");
    if (savedQuizHistory) {
      try {
        this.state.quizHistory = JSON.parse(savedQuizHistory);
      } catch (e) {
        this.state.quizHistory = [];
      }
    } else {
      this.state.quizHistory = [];
    }
  },

  saveTasksToStorage() {
    localStorage.setItem("exammate_tasks", JSON.stringify(this.state.tasks));
  },

  saveExamDatesToStorage() {
    localStorage.setItem("exammate_exam_dates", JSON.stringify(this.state.examDates));
  },

  saveBookmarksToStorage() {
    localStorage.setItem("exammate_bookmarks", JSON.stringify(this.state.bookmarkedResourceIds));
  },

  saveQuizHistoryToStorage() {
    localStorage.setItem("exammate_quiz_history", JSON.stringify(this.state.quizHistory));
  },

  // ==================================================================
  // 2. NAVIGATION & TAB SWITCHING
  // ==================================================================

  setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navList = document.getElementById("nav-list");

    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute("data-target");
        this.navigateTo(targetSection);
        if (navList) navList.classList.remove("mobile-open");
      });
    });

    if (mobileMenuBtn && navList) {
      mobileMenuBtn.addEventListener("click", () => {
        navList.classList.toggle("mobile-open");
      });
    }

    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        this.navigateTo(hash);
      }
    });

    if (window.location.hash) {
      const initialTab = window.location.hash.replace("#", "");
      this.navigateTo(initialTab);
    }
  },

  navigateTo(targetId) {
    const validSections = ["dashboard", "pyqpapers", "analysis", "notes", "quizzes", "planner", "progress"];
    if (!validSections.includes(targetId)) {
      targetId = "dashboard";
    }

    // Update active nav link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      if (link.getAttribute("data-target") === targetId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Update active section visibility
    const sections = document.querySelectorAll(".app-section");
    sections.forEach(sec => {
      if (sec.id === `section-${targetId}`) {
        sec.classList.add("active-section");
      } else {
        sec.classList.remove("active-section");
      }
    });

    window.location.hash = targetId;

    if (targetId === "dashboard") this.updateDashboardMetrics();
    if (targetId === "pyqpapers") this.renderPYQPapers();
    if (targetId === "analysis") this.renderAnalysisSection();
    if (targetId === "notes") this.renderStudyResources();
    if (targetId === "planner") this.renderPlannerTasks();
    if (targetId === "progress") this.renderProgressPage();

    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // ==================================================================
  // 3. DASHBOARD LOGIC
  // ==================================================================

  renderDashboard() {
    this.updateDashboardMetrics();
    this.renderDashboardExamDates();
    this.renderDashboardSubjects();
    this.renderDashboardRecentQuiz();
  },

  updateDashboardMetrics() {
    // 1. Total PYQ Papers count
    const pyqsCountElem = document.getElementById("dash-metric-pyqs");
    if (pyqsCountElem && EXAMMATE_DATA.pyqPapers) {
      pyqsCountElem.textContent = EXAMMATE_DATA.pyqPapers.length;
    }

    // 2. Upcoming Exams count
    const examsCountElem = document.getElementById("dash-metric-exams");
    if (examsCountElem) {
      examsCountElem.textContent = this.state.examDates.length;
    }

    // 3. Study Tasks Completed
    const totalTasks = this.state.tasks.length;
    const completedTasks = this.state.tasks.filter(t => t.completed).length;
    const taskRatioElem = document.getElementById("dash-metric-tasks");
    const taskSubElem = document.getElementById("dash-metric-tasks-sub");
    if (taskRatioElem) {
      taskRatioElem.textContent = `${completedTasks} / ${totalTasks}`;
    }
    if (taskSubElem) {
      const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
      taskSubElem.textContent = `${percentage}% completion rate`;
    }

    // 4. Recent Quiz Score
    const quizScoreElem = document.getElementById("dash-metric-quiz");
    const quizSubElem = document.getElementById("dash-metric-quiz-sub");
    if (this.state.quizHistory.length > 0) {
      const latest = this.state.quizHistory[this.state.quizHistory.length - 1];
      if (quizScoreElem) quizScoreElem.textContent = `${latest.score} / ${latest.total}`;
      if (quizSubElem) quizSubElem.textContent = `${latest.percentage}% (${latest.subjectName})`;
    } else {
      if (quizScoreElem) quizScoreElem.textContent = "--";
      if (quizSubElem) quizSubElem.textContent = "Take a practice quiz!";
    }

    // 5. Bookmarks Count
    const bookmarksElem = document.getElementById("dash-metric-bookmarks");
    if (bookmarksElem) {
      bookmarksElem.textContent = this.state.bookmarkedResourceIds.length;
    }
  },

  renderDashboardExamDates() {
    const listElem = document.getElementById("dashboard-exam-list");
    if (!listElem) return;

    if (this.state.examDates.length === 0) {
      listElem.innerHTML = `
        <li style="padding: 1.5rem; text-align: center; color: var(--text-muted); background: var(--bg-main); border-radius: var(--radius-sm);">
          No upcoming exams added yet. Click <strong>+ Add Date</strong> above to keep track of tests!
        </li>
      `;
      return;
    }

    const sortedExams = [...this.state.examDates].sort((a, b) => new Date(a.date) - new Date(b.date));

    listElem.innerHTML = sortedExams.map(exam => {
      const daysLeft = this.calculateDaysRemaining(exam.date);
      let daysBadgeText = "";
      let isUrgent = false;

      if (daysLeft < 0) {
        daysBadgeText = "Completed / Past";
      } else if (daysLeft === 0) {
        daysBadgeText = "⚡ Exam Today!";
        isUrgent = true;
      } else if (daysLeft === 1) {
        daysBadgeText = "🚨 Tomorrow!";
        isUrgent = true;
      } else {
        daysBadgeText = `In ${daysLeft} days`;
        if (daysLeft <= 3) isUrgent = true;
      }

      return `
        <li class="exam-date-item">
          <div class="exam-info">
            <h4>${exam.subject}</h4>
            <p>${exam.name} • <strong>${this.formatDisplayDate(exam.date)}</strong></p>
          </div>
          <div class="exam-countdown">
            <span class="days-left-pill ${isUrgent ? 'urgent' : ''}">${daysBadgeText}</span>
            <button class="delete-btn-tiny" title="Delete Exam Date" onclick="ExamMateApp.deleteExamDate('${exam.id}')">✕</button>
          </div>
        </li>
      `;
    }).join("");
  },

  renderDashboardSubjects() {
    const gridElem = document.getElementById("dashboard-subjects-grid");
    if (!gridElem) return;

    gridElem.innerHTML = EXAMMATE_DATA.subjects.map(sub => `
      <div class="subject-card" style="border-top-color: ${sub.color};">
        <div>
          <div class="subject-card-header">
            <div class="subject-icon">${sub.icon}</div>
            <div>
              <h3>${sub.name}</h3>
              <span class="subject-code">${sub.code} • ${sub.semester}</span>
            </div>
          </div>
          <p class="subject-desc">${sub.description}</p>
        </div>
        <div class="subject-actions">
          <button class="btn btn-teal btn-sm" onclick="ExamMateApp.filterPYQBySubject('${sub.id}')">
            📄 PYQ Papers
          </button>
          <button class="btn btn-secondary btn-sm" onclick="ExamMateApp.filterNotesBySubject('${sub.id}')">
            📚 Notes
          </button>
        </div>
      </div>
    `).join("");
  },

  renderDashboardRecentQuiz() {
    const recentBox = document.getElementById("dashboard-recent-quiz-box");
    if (!recentBox) return;

    if (this.state.quizHistory.length === 0) {
      recentBox.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); background: var(--bg-main); border-radius: var(--radius-sm);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📝</div>
          <p style="margin-bottom: 0.75rem;">You haven't taken any mock tests yet.</p>
          <button class="btn btn-teal btn-sm" onclick="ExamMateApp.navigateTo('quizzes')">Take Quick Quiz Now</button>
        </div>
      `;
      return;
    }

    const latest = this.state.quizHistory[this.state.quizHistory.length - 1];
    recentBox.innerHTML = `
      <div style="background: var(--bg-main); border-radius: var(--radius-sm); padding: 1rem; border-left: 4px solid var(--teal-primary);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
          <h4 style="font-size: 1rem; color: var(--navy-dark); font-weight: 700;">${latest.subjectName}</h4>
          <span class="badge ${latest.percentage >= 60 ? 'badge-green' : 'badge-amber'}">${latest.percentage}%</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          ${latest.quizTitle} • Score: <strong>${latest.score} / ${latest.total}</strong>
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.75rem; color: var(--text-muted);">Taken on ${latest.date}</span>
          <button class="btn btn-sm btn-secondary" onclick="ExamMateApp.navigateTo('quizzes')">Practice More</button>
        </div>
      </div>
    `;
  },

  addExamDate(subject, name, date) {
    const newExam = {
      id: "exam-" + Date.now(),
      subject,
      name,
      date
    };
    this.state.examDates.push(newExam);
    this.saveExamDatesToStorage();
    this.renderDashboardExamDates();
    this.updateDashboardMetrics();
    this.showToast("Exam date scheduled successfully! ⏰");
  },

  deleteExamDate(examId) {
    this.state.examDates = this.state.examDates.filter(e => e.id !== examId);
    this.saveExamDatesToStorage();
    this.renderDashboardExamDates();
    this.updateDashboardMetrics();
    this.showToast("Exam date removed.");
  },

  // ==================================================================
  // 4. PREVIOUS YEAR QUESTION PAPERS (DEDICATED PYQ SECTION)
  // ==================================================================

  renderPYQPapers() {
    const container = document.getElementById("pyq-papers-container");
    const countBadge = document.getElementById("pyq-papers-count-badge");
    if (!container) return;

    const searchKeyword = (document.getElementById("pyq-papers-search-input")?.value || "").toLowerCase().trim();
    const subjectFilter = document.getElementById("pyq-papers-subject-filter")?.value || "all";
    const semesterFilter = document.getElementById("pyq-papers-semester-filter")?.value || "all";
    const yearFilter = document.getElementById("pyq-papers-year-filter")?.value || "all";

    const allPapers = EXAMMATE_DATA.pyqPapers || [];

    // Filter papers based on combined criteria
    const filteredPapers = allPapers.filter(paper => {
      // 1. Subject filter
      if (subjectFilter !== "all" && paper.subjectId !== subjectFilter) {
        return false;
      }
      // 2. Semester filter
      if (semesterFilter !== "all" && paper.semester !== semesterFilter) {
        return false;
      }
      // 3. Year filter
      if (yearFilter !== "all" && paper.year.toString() !== yearFilter) {
        return false;
      }
      // 4. Search query
      if (searchKeyword) {
        const titleMatch = paper.title.toLowerCase().includes(searchKeyword);
        const subMatch = paper.subject.toLowerCase().includes(searchKeyword);
        const examMatch = paper.examinationType.toLowerCase().includes(searchKeyword);
        const yearMatch = paper.year.toString().includes(searchKeyword);
        return titleMatch || subMatch || examMatch || yearMatch;
      }
      return true;
    });

    if (countBadge) {
      countBadge.textContent = `${filteredPapers.length} of ${allPapers.length} Papers`;
    }

    if (filteredPapers.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <span class="empty-icon">📂</span>
          <h4 style="color: var(--navy-dark); font-size: 1.1rem;">No question papers match your filters</h4>
          <p style="font-size: 0.88rem; margin-top: 0.4rem; color: var(--text-muted);">
            Try selecting "All Subjects" or "All Examination Years" above to see available papers in the collection.
          </p>
          <button class="btn btn-secondary btn-sm" style="margin-top: 1rem;" onclick="ExamMateApp.resetPYQFilters()">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = filteredPapers.map(paper => {
      return `
        <div class="pyq-paper-card">
          <div>
            <div class="pyq-card-top-tags">
              <span class="badge badge-navy">${paper.year}</span>
              <span class="badge badge-teal">${paper.semester}</span>
              <span class="badge badge-blue">${paper.resourceType}</span>
            </div>
            <h3 class="pyq-paper-title">${paper.title}</h3>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--teal-dark); margin-bottom: 0.4rem;">
              📘 ${paper.subject} • ${paper.examinationType}
            </div>
            <p class="pyq-paper-desc">${paper.description}</p>
          </div>

          <div class="pyq-paper-footer">
            <button class="btn btn-teal btn-sm" onclick="ExamMateApp.openPaperViewer('${paper.id}')">
              👁️ View Paper
            </button>
            <a href="${paper.downloadUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" download title="Download official PDF">
              📥 Download PDF
            </a>
          </div>
        </div>
      `;
    }).join("");
  },

  resetPYQFilters() {
    const sInput = document.getElementById("pyq-papers-search-input");
    const sSub = document.getElementById("pyq-papers-subject-filter");
    const sSem = document.getElementById("pyq-papers-semester-filter");
    const sYear = document.getElementById("pyq-papers-year-filter");

    if (sInput) sInput.value = "";
    if (sSub) sSub.value = "all";
    if (sSem) sSem.value = "all";
    if (sYear) sYear.value = "all";

    this.renderPYQPapers();
  },

  filterPYQBySubject(subjectId) {
    this.navigateTo("pyqpapers");
    const subjectSelect = document.getElementById("pyq-papers-subject-filter");
    if (subjectSelect) {
      subjectSelect.value = subjectId;
      this.renderPYQPapers();
    }
  },

  openPaperViewer(paperId) {
    const paper = (EXAMMATE_DATA.pyqPapers || []).find(p => p.id === paperId);
    if (!paper) return;

    const modalTitle = document.getElementById("paper-modal-title");
    const modalSubtitle = document.getElementById("paper-modal-subtitle");
    const iframeElem = document.getElementById("paper-modal-iframe");
    const openDriveBtn = document.getElementById("paper-modal-open-drive-btn");
    const downloadBtn = document.getElementById("paper-modal-download-btn");

    if (modalTitle) modalTitle.textContent = paper.title;
    if (modalSubtitle) modalSubtitle.textContent = `${paper.subject} • ${paper.examinationType} • Year: ${paper.year}`;

    // Set Google Drive embedded preview URL
    if (iframeElem) {
      iframeElem.src = paper.previewUrl;
    }

    if (openDriveBtn) openDriveBtn.href = paper.sourceUrl;
    if (downloadBtn) downloadBtn.href = paper.downloadUrl;

    const overlay = document.getElementById("paper-viewer-modal");
    if (overlay) overlay.classList.add("open");
  },

  closePaperViewer() {
    const overlay = document.getElementById("paper-viewer-modal");
    const iframeElem = document.getElementById("paper-modal-iframe");
    if (iframeElem) iframeElem.src = "about:blank"; // Stop loading
    if (overlay) overlay.classList.remove("open");
  },

  // ==================================================================
  // 5. PYQ ANALYSIS AND IMPORTANT QUESTIONS
  // ==================================================================

  renderAnalysisSection() {
    const container = document.getElementById("analysis-cards-container");
    const countBadge = document.getElementById("analysis-count-badge");
    if (!container) return;

    const searchKeyword = (document.getElementById("analysis-search-input")?.value || "").toLowerCase().trim();
    const subjectFilter = document.getElementById("analysis-subject-filter")?.value || "all";
    const typeFilter = document.getElementById("analysis-type-filter")?.value || "all";

    const allAnalysis = EXAMMATE_DATA.pyqAnalysis || [];

    const filtered = allAnalysis.filter(item => {
      // 1. Subject filter
      if (subjectFilter !== "all" && item.subjectId !== subjectFilter) {
        return false;
      }
      // 2. Question type filter
      if (typeFilter !== "all" && !item.questionType.toLowerCase().includes(typeFilter.toLowerCase())) {
        return false;
      }
      // 3. Search keyword
      if (searchKeyword) {
        const topicMatch = item.topic.toLowerCase().includes(searchKeyword);
        const subMatch = item.subject.toLowerCase().includes(searchKeyword);
        const whyMatch = item.whyImportant.toLowerCase().includes(searchKeyword);
        const qMatch = (item.supportingQuestions || []).some(q => q.toLowerCase().includes(searchKeyword));
        return topicMatch || subMatch || whyMatch || qMatch;
      }
      return true;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Topics Analysed`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">🔍</span>
          <h4 style="color: var(--navy-dark); font-size: 1.1rem;">No analysed topics match your search</h4>
          <p style="font-size: 0.88rem; margin-top: 0.4rem; color: var(--text-muted);">
            Try selecting "All Subjects" or clearing the search keyword.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      return `
        <div class="analysis-topic-card">
          <div class="analysis-card-header">
            <div>
              <div style="display: flex; gap: 0.4rem; align-items: center; margin-bottom: 0.4rem; flex-wrap: wrap;">
                <span class="badge badge-teal">${item.subject}</span>
                <span class="badge badge-navy">${item.questionType}</span>
                <span class="badge badge-green">${item.marksWeightage}</span>
              </div>
              <h3 class="analysis-topic-title">${item.topic}</h3>
            </div>

            <div class="analysis-occurrences-pill">
              ⭐ ${item.occurrencesCount} Verified Papers Analysed
            </div>
          </div>

          <div class="analysis-years-row">
            <strong>Verified Exam Papers in Collection:</strong>
            ${item.verifiedYears.map(yr => `<span class="year-tag">${yr}</span>`).join(" ")}
          </div>

          <div class="why-important-box">
            <strong>💡 Why this topic deserves revision attention:</strong>
            <p style="margin-top: 0.25rem;">${item.whyImportant}</p>
          </div>

          <div class="supporting-questions-container">
            <h5>Actual Sample Questions from Archive Papers:</h5>
            <ul class="supporting-questions-list">
              ${(item.supportingQuestions || []).map(q => `<li>${q}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;
    }).join("");
  },

  // ==================================================================
  // 6. NOTES AND STUDY RESOURCES
  // ==================================================================

  renderStudyResources() {
    const container = document.getElementById("notes-cards-container");
    const countBadge = document.getElementById("notes-count-badge");
    if (!container) return;

    const searchKeyword = (document.getElementById("notes-search-input")?.value || "").toLowerCase().trim();
    const subjectFilter = document.getElementById("notes-subject-filter")?.value || "all";
    const typeFilter = this.state.activeResourceType;
    const onlyBookmarked = this.state.showOnlyBookmarkedNotes;

    const allResources = EXAMMATE_DATA.studyResources || [];

    const filtered = allResources.filter(res => {
      // 1. Subject filter
      if (subjectFilter !== "all" && res.subjectId !== subjectFilter) {
        return false;
      }
      // 2. Type filter
      if (typeFilter !== "all" && res.type !== typeFilter) {
        return false;
      }
      // 3. Bookmarked only filter
      if (onlyBookmarked && !this.state.bookmarkedResourceIds.includes(res.id)) {
        return false;
      }
      // 4. Search query
      if (searchKeyword) {
        const titleMatch = res.title.toLowerCase().includes(searchKeyword);
        const subMatch = res.subject.toLowerCase().includes(searchKeyword);
        const unitMatch = res.unit.toLowerCase().includes(searchKeyword);
        const sumMatch = res.summary.toLowerCase().includes(searchKeyword);
        return titleMatch || subMatch || unitMatch || sumMatch;
      }
      return true;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Resources`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <span class="empty-icon">📚</span>
          <h4 style="color: var(--navy-dark); font-size: 1.1rem;">No study resources match your selection</h4>
          <p style="font-size: 0.88rem; margin-top: 0.4rem; color: var(--text-muted);">
            Try selecting "All Resources" or clearing the search bar.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(res => {
      const isBookmarked = this.state.bookmarkedResourceIds.includes(res.id);
      return `
        <div class="study-resource-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
              <span class="badge badge-teal">${res.typeBadge}</span>
              <button class="bookmark-action-btn ${isBookmarked ? 'is-bookmarked' : ''}" 
                      title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark this Resource'}"
                      onclick="ExamMateApp.toggleBookmark('${res.id}')">
                ★
              </button>
            </div>
            <h3 class="pyq-paper-title">${res.title}</h3>
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--navy-dark); margin-bottom: 0.4rem;">
              ${res.subject} • ${res.unit}
            </div>
            <p class="pyq-paper-desc">${res.summary}</p>
          </div>

          <div class="pyq-paper-footer">
            <button class="btn btn-teal btn-sm" onclick="ExamMateApp.openNoteModal('${res.id}')">
              📖 Read Notes & Formulas
            </button>
            <a href="${res.verifiedPdfUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="Open verified course material">
              Reference PDF ↗
            </a>
          </div>
        </div>
      `;
    }).join("");
  },

  toggleBookmark(resourceId) {
    const index = this.state.bookmarkedResourceIds.indexOf(resourceId);
    if (index === -1) {
      this.state.bookmarkedResourceIds.push(resourceId);
      this.showToast("Resource added to revision bookmarks! ⭐");
    } else {
      this.state.bookmarkedResourceIds.splice(index, 1);
      this.showToast("Resource removed from bookmarks.");
    }
    this.saveBookmarksToStorage();
    this.renderStudyResources();
    this.updateDashboardMetrics();
    this.renderProgressPage();
  },

  filterNotesBySubject(subjectId) {
    this.navigateTo("notes");
    const subjectSelect = document.getElementById("notes-subject-filter");
    if (subjectSelect) {
      subjectSelect.value = subjectId;
      this.renderStudyResources();
    }
  },

  openNoteModal(resourceId) {
    const res = (EXAMMATE_DATA.studyResources || []).find(r => r.id === resourceId);
    if (!res) return;

    const modalTitle = document.getElementById("note-modal-title");
    const modalSubject = document.getElementById("note-modal-subject");
    const modalUnit = document.getElementById("note-modal-unit");
    const modalType = document.getElementById("note-modal-type");
    const modalBody = document.getElementById("note-modal-body-content");
    const takeawaysList = document.getElementById("note-modal-takeaways-list");
    const takeawaysBox = document.getElementById("note-modal-takeaways-box");
    const extLink = document.getElementById("note-modal-external-link");

    if (modalTitle) modalTitle.textContent = res.title;
    if (modalSubject) modalSubject.textContent = res.subject;
    if (modalUnit) modalUnit.textContent = res.unit;
    if (modalType) modalType.textContent = res.typeBadge;

    if (modalBody) modalBody.innerHTML = this.formatMarkdownToHtml(res.details);

    if (res.keyFormulas && res.keyFormulas.length > 0 && takeawaysList && takeawaysBox) {
      takeawaysList.innerHTML = res.keyFormulas.map(f => `<li>${f}</li>`).join("");
      takeawaysBox.style.display = "block";
    } else if (takeawaysBox) {
      takeawaysBox.style.display = "none";
    }

    if (extLink) {
      extLink.href = res.verifiedPdfUrl;
      extLink.textContent = `📖 Open Verified Course PDF (${res.pdfName || 'NPTEL Handout'})`;
    }

    const overlay = document.getElementById("note-modal-overlay");
    if (overlay) overlay.classList.add("open");
  },

  closeNoteModal() {
    const overlay = document.getElementById("note-modal-overlay");
    if (overlay) overlay.classList.remove("open");
  },

  // ==================================================================
  // 7. MOCK TESTS & QUIZZES
  // ==================================================================

  setupQuizSection() {
    this.renderQuizSubjectPills();
    this.loadQuiz(this.state.activeQuizId);
  },

  renderQuizSubjectPills() {
    const listElem = document.getElementById("quiz-subject-pills");
    if (!listElem) return;

    listElem.innerHTML = (EXAMMATE_DATA.quizzes || []).map(q => {
      const isActive = q.id === this.state.activeQuizId;
      return `
        <li>
          <button class="quiz-subject-btn ${isActive ? 'active' : ''}" 
                  onclick="ExamMateApp.switchQuiz('${q.id}')">
            <span>${q.subjectName}</span>
            <span style="font-size: 0.75rem;">5 Qs</span>
          </button>
        </li>
      `;
    }).join("");
  },

  switchQuiz(quizId) {
    this.state.activeQuizId = quizId;
    this.renderQuizSubjectPills();
    this.loadQuiz(quizId);
  },

  loadQuiz(quizId) {
    const quiz = (EXAMMATE_DATA.quizzes || []).find(q => q.id === quizId) || (EXAMMATE_DATA.quizzes || [])[0];
    if (!quiz) return;

    const resultBanner = document.getElementById("quiz-result-banner");
    if (resultBanner) resultBanner.classList.remove("show");

    const titleElem = document.getElementById("quiz-display-title");
    const descElem = document.getElementById("quiz-display-desc");
    const badgeElem = document.getElementById("quiz-display-badge");
    if (titleElem) titleElem.textContent = quiz.title;
    if (descElem) descElem.textContent = quiz.description;
    if (badgeElem) badgeElem.textContent = quiz.subjectName;

    const container = document.getElementById("quiz-questions-list");
    if (!container) return;

    container.innerHTML = quiz.questions.map((q, index) => `
      <div class="question-block" id="question-block-${q.id}">
        <div class="question-prompt">
          <span class="question-num">${index + 1}</span>
          <span>${q.question}</span>
        </div>

        <ul class="quiz-options-list">
          ${q.options.map((optionText, optIndex) => `
            <li>
              <label class="option-item-label" id="option-label-${q.id}-${optIndex}">
                <input type="radio" name="question_${q.id}" value="${optIndex}">
                <span>${optionText}</span>
              </label>
            </li>
          `).join("")}
        </ul>

        <div class="question-explanation-box" id="explanation-${q.id}">
          <strong>💡 Solution & Explanation:</strong>
          <p style="margin-top: 0.25rem;">${q.explanation}</p>
        </div>
      </div>
    `).join("");

    this.setQuizInteractive(true);
  },

  setQuizInteractive(enabled) {
    const radioInputs = document.querySelectorAll("#quiz-questions-form input[type='radio']");
    radioInputs.forEach(input => {
      input.disabled = !enabled;
    });

    const submitBtn = document.getElementById("btn-submit-quiz");
    if (submitBtn) {
      submitBtn.disabled = !enabled;
      submitBtn.style.opacity = enabled ? "1" : "0.5";
    }
  },

  submitCurrentQuiz() {
    const quiz = (EXAMMATE_DATA.quizzes || []).find(q => q.id === this.state.activeQuizId);
    if (!quiz) return;

    let score = 0;
    const total = quiz.questions.length;
    let answeredCount = 0;

    quiz.questions.forEach((q) => {
      const selectedOption = document.querySelector(`input[name="question_${q.id}"]:checked`);
      const explanationBox = document.getElementById(`explanation-${q.id}`);

      if (explanationBox) explanationBox.classList.add("show-explanation");

      const correctLabel = document.getElementById(`option-label-${q.id}-${q.correctAnswer}`);
      if (correctLabel) correctLabel.classList.add("correct-choice");

      if (selectedOption) {
        answeredCount++;
        const selectedIndex = parseInt(selectedOption.value, 10);
        if (selectedIndex === q.correctAnswer) {
          score++;
        } else {
          const wrongLabel = document.getElementById(`option-label-${q.id}-${selectedIndex}`);
          if (wrongLabel) wrongLabel.classList.add("wrong-choice");
        }
      }
    });

    this.setQuizInteractive(false);
    const percentage = Math.round((score / total) * 100);

    const resultBanner = document.getElementById("quiz-result-banner");
    const scoreText = document.getElementById("quiz-result-score-text");
    const headingText = document.getElementById("quiz-result-heading");
    const feedbackText = document.getElementById("quiz-result-feedback");

    if (scoreText) scoreText.textContent = `${score} / ${total} (${percentage}%)`;

    if (percentage >= 80) {
      if (headingText) headingText.textContent = "🎉 Outstanding Performance!";
      if (feedbackText) feedbackText.textContent = "Superb understanding of core concepts! Keep up this great momentum for your university exams.";
    } else if (percentage >= 60) {
      if (headingText) headingText.textContent = "👍 Good Effort!";
      if (feedbackText) feedbackText.textContent = "You've got a solid foundation. Review the short explanations below to master the few questions you missed.";
    } else {
      if (headingText) headingText.textContent = "📚 Needs Practice";
      if (feedbackText) feedbackText.textContent = "Don't worry! Read through the explanations below, review the corresponding revision notes, and retake the test.";
    }

    if (resultBanner) {
      resultBanner.classList.add("show");
      if (typeof resultBanner.scrollIntoView === "function") {
        resultBanner.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    const attemptRecord = {
      id: "attempt-" + Date.now(),
      quizId: quiz.id,
      quizTitle: quiz.title,
      subjectName: quiz.subjectName,
      score: score,
      total: total,
      percentage: percentage,
      date: new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })
    };

    this.state.quizHistory.push(attemptRecord);
    this.saveQuizHistoryToStorage();
    this.updateDashboardMetrics();
    this.renderDashboardRecentQuiz();
    this.renderProgressPage();

    this.showToast(`Quiz completed! You scored ${score}/${total}`);
  },

  resetQuizForm() {
    const form = document.getElementById("quiz-questions-form");
    if (form) form.reset();

    document.querySelectorAll(".option-item-label").forEach(label => {
      label.classList.remove("correct-choice", "wrong-choice");
    });
    document.querySelectorAll(".question-explanation-box").forEach(box => {
      box.classList.remove("show-explanation");
    });

    const resultBanner = document.getElementById("quiz-result-banner");
    if (resultBanner) resultBanner.classList.remove("show");

    this.setQuizInteractive(true);
    this.showToast("Quiz selections cleared.");
  },

  retakeCurrentQuiz() {
    this.resetQuizForm();
    const quizArea = document.querySelector(".quiz-active-area");
    if (quizArea) quizArea.scrollIntoView({ behavior: "smooth" });
  },

  // ==================================================================
  // 8. STUDY PLANNER
  // ==================================================================

  renderPlannerTasks() {
    const listElem = document.getElementById("planner-tasks-list");
    const countTextElem = document.getElementById("planner-task-count-text");
    if (!listElem) return;

    const filter = this.state.activeTaskFilter;

    const filteredTasks = this.state.tasks.filter(task => {
      if (filter === "pending") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });

    const totalCount = this.state.tasks.length;
    const completedCount = this.state.tasks.filter(t => t.completed).length;

    if (countTextElem) {
      countTextElem.textContent = `${completedCount} of ${totalCount} completed`;
    }

    if (filteredTasks.length === 0) {
      let emptyMsg = "No study tasks found.";
      if (filter === "pending") emptyMsg = "No pending tasks! All caught up 🎉";
      if (filter === "completed") emptyMsg = "No completed tasks yet. Finish a task and check it off!";

      listElem.innerHTML = `
        <li class="empty-state">
          <span class="empty-icon">📝</span>
          <p>${emptyMsg}</p>
        </li>
      `;
      return;
    }

    listElem.innerHTML = filteredTasks.map(task => {
      const priorityBadgeClass = task.priority === "High" ? "badge-red" : task.priority === "Medium" ? "badge-amber" : "badge-teal";
      
      return `
        <li class="task-item ${task.completed ? 'completed' : ''}" id="task-item-${task.id}">
          <div class="task-left-col">
            <input type="checkbox" class="task-checkbox" 
                   ${task.completed ? 'checked' : ''} 
                   onchange="ExamMateApp.toggleTaskComplete('${task.id}')"
                   title="Mark as completed">
            <div class="task-meta-info">
              <span class="task-title">${task.title}</span>
              <div class="task-sub-info">
                <span>📘 ${task.subject}</span>
                <span>📅 Due: ${this.formatDisplayDate(task.dueDate)}</span>
                <span class="badge ${priorityBadgeClass}">${task.priority}</span>
              </div>
            </div>
          </div>
          <button class="delete-btn-tiny" onclick="ExamMateApp.deleteTask('${task.id}')" title="Delete Task">✕</button>
        </li>
      `;
    }).join("");
  },

  addPlannerTask(title, subject, dueDate, priority) {
    const newTask = {
      id: "task-" + Date.now(),
      title,
      subject,
      dueDate,
      priority,
      completed: false
    };

    this.state.tasks.unshift(newTask);
    this.saveTasksToStorage();
    this.renderPlannerTasks();
    this.updateDashboardMetrics();
    this.renderProgressPage();
    this.showToast("New study goal added to planner! ✅");
  },

  toggleTaskComplete(taskId) {
    const task = this.state.tasks.find(t => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;
    this.saveTasksToStorage();
    this.renderPlannerTasks();
    this.updateDashboardMetrics();
    this.renderProgressPage();

    if (task.completed) {
      this.showToast("Task completed! Great job! 🎉");
    }
  },

  deleteTask(taskId) {
    this.state.tasks = this.state.tasks.filter(t => t.id !== taskId);
    this.saveTasksToStorage();
    this.renderPlannerTasks();
    this.updateDashboardMetrics();
    this.renderProgressPage();
    this.showToast("Task deleted.");
  },

  // ==================================================================
  // 9. MY PROGRESS SECTION
  // ==================================================================

  renderProgressPage() {
    const totalTasks = this.state.tasks.length;
    const completedTasks = this.state.tasks.filter(t => t.completed).length;
    const taskPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const taskPercentElem = document.getElementById("prog-task-percentage");
    const taskBarElem = document.getElementById("prog-task-bar");
    const taskRatioElem = document.getElementById("prog-task-ratio");

    if (taskPercentElem) taskPercentElem.textContent = `${taskPercent}%`;
    if (taskBarElem) taskBarElem.style.width = `${taskPercent}%`;
    if (taskRatioElem) taskRatioElem.textContent = `${completedTasks} of ${totalTasks} tasks done`;

    const attempts = this.state.quizHistory;
    let avgQuizPercent = 0;
    if (attempts.length > 0) {
      const sumPercent = attempts.reduce((acc, curr) => acc + curr.percentage, 0);
      avgQuizPercent = Math.round(sumPercent / attempts.length);
    }

    const quizAvgElem = document.getElementById("prog-quiz-avg");
    const quizBarElem = document.getElementById("prog-quiz-bar");
    const quizRatioElem = document.getElementById("prog-quiz-ratio");

    if (quizAvgElem) quizAvgElem.textContent = `${avgQuizPercent}%`;
    if (quizBarElem) quizBarElem.style.width = `${avgQuizPercent}%`;
    if (quizRatioElem) quizRatioElem.textContent = `${attempts.length} test${attempts.length === 1 ? '' : 's'} taken`;

    const bookmarksCount = this.state.bookmarkedResourceIds.length;
    const totalRes = (EXAMMATE_DATA.studyResources || []).length;
    const bookmarksPercent = Math.min(100, Math.round((bookmarksCount / Math.max(1, totalRes)) * 100));

    const bookmarksCountElem = document.getElementById("prog-bookmarks-count");
    const bookmarksBarElem = document.getElementById("prog-bookmarks-bar");

    if (bookmarksCountElem) bookmarksCountElem.textContent = bookmarksCount;
    if (bookmarksBarElem) bookmarksBarElem.style.width = `${bookmarksPercent}%`;

    const tbody = document.getElementById("quiz-history-tbody");
    if (!tbody) return;

    if (attempts.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">
            No quiz attempts recorded yet. Head over to <strong>Mock Tests</strong> to test your knowledge!
          </td>
        </tr>
      `;
      return;
    }

    const reversed = [...attempts].reverse();
    tbody.innerHTML = reversed.map(att => `
      <tr>
        <td><strong>${att.subjectName}</strong></td>
        <td>${att.quizTitle}</td>
        <td>${att.score} / ${att.total}</td>
        <td>
          <span class="badge ${att.percentage >= 60 ? 'badge-green' : 'badge-amber'}">
            ${att.percentage}%
          </span>
        </td>
        <td>${att.date}</td>
      </tr>
    `).join("");
  },

  resetAllData() {
    if (confirm("Are you sure you want to reset your tasks, exam dates, bookmarks, and quiz scores back to initial defaults?")) {
      localStorage.removeItem("exammate_tasks");
      localStorage.removeItem("exammate_exam_dates");
      localStorage.removeItem("exammate_bookmarks");
      localStorage.removeItem("exammate_quiz_history");
      this.loadStateFromStorage();
      this.renderDashboard();
      this.renderPYQPapers();
      this.renderAnalysisSection();
      this.renderStudyResources();
      this.renderPlannerTasks();
      this.renderProgressPage();
      this.showToast("All user data successfully reset to initial demo state!");
    }
  },

  // ==================================================================
  // 10. EVENT LISTENERS & UI HELPERS
  // ==================================================================

  setupEventListeners() {
    // 1. PYQ Papers Search and Filters
    const pyqSearch = document.getElementById("pyq-papers-search-input");
    if (pyqSearch) pyqSearch.addEventListener("input", () => this.renderPYQPapers());

    const pyqSubFilter = document.getElementById("pyq-papers-subject-filter");
    if (pyqSubFilter) pyqSubFilter.addEventListener("change", () => this.renderPYQPapers());

    const pyqSemFilter = document.getElementById("pyq-papers-semester-filter");
    if (pyqSemFilter) pyqSemFilter.addEventListener("change", () => this.renderPYQPapers());

    const pyqYearFilter = document.getElementById("pyq-papers-year-filter");
    if (pyqYearFilter) pyqYearFilter.addEventListener("change", () => this.renderPYQPapers());

    // 2. Paper Viewer Modal Close
    const closePaperBtn = document.getElementById("btn-close-paper-modal");
    const paperOverlay = document.getElementById("paper-viewer-modal");
    if (closePaperBtn) closePaperBtn.addEventListener("click", () => this.closePaperViewer());
    if (paperOverlay) {
      paperOverlay.addEventListener("click", (e) => {
        if (e.target === paperOverlay) this.closePaperViewer();
      });
    }

    // 3. Question Analysis Search and Filters
    const anaSearch = document.getElementById("analysis-search-input");
    if (anaSearch) anaSearch.addEventListener("input", () => this.renderAnalysisSection());

    const anaSubFilter = document.getElementById("analysis-subject-filter");
    if (anaSubFilter) anaSubFilter.addEventListener("change", () => this.renderAnalysisSection());

    const anaTypeFilter = document.getElementById("analysis-type-filter");
    if (anaTypeFilter) anaTypeFilter.addEventListener("change", () => this.renderAnalysisSection());

    // 4. Notes Search and Filters
    const notesSearch = document.getElementById("notes-search-input");
    if (notesSearch) notesSearch.addEventListener("input", () => this.renderStudyResources());

    const notesSubFilter = document.getElementById("notes-subject-filter");
    if (notesSubFilter) notesSubFilter.addEventListener("change", () => this.renderStudyResources());

    const bookmarkToggleBtn = document.getElementById("notes-bookmark-filter-btn");
    if (bookmarkToggleBtn) {
      bookmarkToggleBtn.addEventListener("click", () => {
        this.state.showOnlyBookmarkedNotes = !this.state.showOnlyBookmarkedNotes;
        bookmarkToggleBtn.classList.toggle("active", this.state.showOnlyBookmarkedNotes);
        bookmarkToggleBtn.textContent = this.state.showOnlyBookmarkedNotes ? "⭐ Showing Bookmarks Only" : "⭐ Bookmarked Only";
        this.renderStudyResources();
      });
    }

    // Resource Type Tabs in Notes
    const typeButtons = document.querySelectorAll("#notes-type-tabs .resource-type-btn");
    typeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        typeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.activeResourceType = btn.getAttribute("data-type");
        this.renderStudyResources();
      });
    });

    // 5. Note Modal Close
    const closeNoteBtn = document.getElementById("btn-close-note-modal");
    const noteOverlay = document.getElementById("note-modal-overlay");
    if (closeNoteBtn) closeNoteBtn.addEventListener("click", () => this.closeNoteModal());
    if (noteOverlay) {
      noteOverlay.addEventListener("click", (e) => {
        if (e.target === noteOverlay) this.closeNoteModal();
      });
    }

    // 6. Add Exam Date Modal
    const openExamModalBtn = document.getElementById("btn-open-exam-modal");
    const closeExamModalBtn = document.getElementById("btn-close-exam-modal");
    const cancelExamModalBtn = document.getElementById("btn-cancel-exam-modal");
    const examOverlay = document.getElementById("exam-modal-overlay");
    const addExamForm = document.getElementById("add-exam-form");

    if (openExamModalBtn) {
      openExamModalBtn.addEventListener("click", () => {
        const dateInput = document.getElementById("exam-input-date");
        if (dateInput) {
          dateInput.min = new Date().toISOString().split("T")[0];
          dateInput.value = new Date().toISOString().split("T")[0];
        }
        if (examOverlay) examOverlay.classList.add("open");
      });
    }

    const closeExamModal = () => { if (examOverlay) examOverlay.classList.remove("open"); };
    if (closeExamModalBtn) closeExamModalBtn.addEventListener("click", closeExamModal);
    if (cancelExamModalBtn) cancelExamModalBtn.addEventListener("click", closeExamModal);
    if (examOverlay) {
      examOverlay.addEventListener("click", (e) => {
        if (e.target === examOverlay) closeExamModal();
      });
    }

    if (addExamForm) {
      addExamForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const subject = document.getElementById("exam-input-subject").value;
        const name = document.getElementById("exam-input-name").value.trim();
        const date = document.getElementById("exam-input-date").value;

        if (subject && name && date) {
          this.addExamDate(subject, name, date);
          addExamForm.reset();
          closeExamModal();
        }
      });
    }

    // 7. Quiz Buttons
    const submitQuizBtn = document.getElementById("btn-submit-quiz");
    if (submitQuizBtn) submitQuizBtn.addEventListener("click", () => this.submitCurrentQuiz());

    const resetQuizBtn = document.getElementById("btn-reset-quiz");
    if (resetQuizBtn) resetQuizBtn.addEventListener("click", () => this.resetQuizForm());

    const retakeQuizBtn = document.getElementById("btn-retake-quiz");
    if (retakeQuizBtn) retakeQuizBtn.addEventListener("click", () => this.retakeCurrentQuiz());

    // 8. Planner Form & Filter Pills
    const plannerForm = document.getElementById("planner-form");
    if (plannerForm) {
      const dateInput = document.getElementById("task-input-date");
      if (dateInput) dateInput.value = new Date().toISOString().split("T")[0];

      plannerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("task-input-title").value.trim();
        const subject = document.getElementById("task-select-subject").value;
        const dueDate = document.getElementById("task-input-date").value;
        const priority = document.getElementById("task-select-priority").value;

        if (title && subject && dueDate) {
          this.addPlannerTask(title, subject, dueDate, priority);
          document.getElementById("task-input-title").value = "";
        }
      });
    }

    const filterPills = document.querySelectorAll(".filter-pills .pill-btn");
    filterPills.forEach(pill => {
      pill.addEventListener("click", () => {
        filterPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.state.activeTaskFilter = pill.getAttribute("data-filter");
        this.renderPlannerTasks();
      });
    });

    // 9. Reset Demo Data Button
    const resetAllBtn = document.getElementById("btn-reset-all-data");
    if (resetAllBtn) resetAllBtn.addEventListener("click", () => this.resetAllData());
  },

  calculateDaysRemaining(dateString) {
    const target = new Date(dateString + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = target - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  },

  formatDisplayDate(dateString) {
    if (!dateString) return "";
    try {
      const parts = dateString.split("-");
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    } catch (e) {
      return dateString;
    }
  },

  formatMarkdownToHtml(markdownText) {
    if (!markdownText) return "";

    return markdownText
      .replace(/```([a-z]*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code style="background:#E2E8F0; padding:2px 5px; border-radius:4px; font-size:0.85em;">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*\*([0-9]+\.\s[^*]+)\*\*/g, '<h4 style="color:var(--navy-dark); margin-top:1rem; margin-bottom:0.25rem;">$1</h4>')
      .replace(/^- (.*$)/gim, '<li style="margin-left: 1.25rem;">$1</li>')
      .replace(/\n\n/g, '<p style="margin-bottom: 0.75rem;"></p>')
      .replace(/\n/g, '<br>');
  },

  showToast(message) {
    const toast = document.getElementById("toast-notification");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }
};

// Bootstrap application once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  ExamMateApp.init();
});
