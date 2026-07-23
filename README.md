# TRACK IT

**TRACK IT** is a premium, high-density desktop time-tracking and productivity suite built natively for Linux (GNOME). It seamlessly integrates with your **GNOME Calendar** via Evolution Data Server so your schedule events automatically appear as trackable tasks — no manual imports, no cloud sign-ups, everything stays 100% local and private on your machine.

---

## ✨ Features & Highlights

### 🌓 Dual-Theme System (Night & Day)
- **Night Mode**: Deep matte black surface (`#09090b`), dark panel surfaces (`#18181b`), subtle `#27272a` borders, and crisp high-contrast text.
- **Day Mode**: Pure clean white surface (`#ffffff`), soft panel surfaces (`#f4f4f6`), dark pill buttons, and deep dark text.
- Toggle instantly from the titlebar theme switch — your preference is saved automatically.

### 📋 Dashboard
See today's schedule, total tracked time, session count, completion rate, and daily progress histogram at a glance. When a timer is running, a live active card displays real-time progress.

### 🗓️ Schedule & Drag-and-Drop Tasks
View all your GNOME Calendar events alongside manually created tasks. Filter by **Today**, **Upcoming**, or **Past**, and drag-and-drop tasks to reorder priorities with smooth spring physics transitions.

### ⏱️ Timer & Fullscreen Focus Mode
Select any task and start tracking. Features an ambient glowing pulse ring (`@keyframes pulseGlow`) during active sessions and a distraction-free fullscreen mode. Press **Esc** to exit — tracking continues in the background.

### 📊 High-Density Analytics & GitHub / LeetCode Activity Heatmap
- **Daily Progress Histogram**: Fixed calendar week histogram chart (`Sun` to `Sat`) styled in vibrant Sky Blue (`#38bdf8`).
- **Yearly Activity Heatmap**: GitHub / LeetCode-grade 365-day contribution map with compact 11px cubes and authentic green activity levels (`#39d353`).
- **Side-by-Side Zero-Scroll Layout**: Integrated Heatmap and Overall Weekly Time Target card in a balanced side-by-side grid fitting on-screen simultaneously with zero vertical scrolling.

### 📁 Executive Projects Board
- **Full-Width Workspace Cards**: Linear/Notion-style accordion list with left accent color strips (`border-left: 4px solid project.color`).
- **Interactive Dashed Dropzones**: Empty project workspaces display a clean interactive dashed target (`.project-drop-target`) that glows on hover and drag-over.
- **Unassigned Task Pool**: Full-width collapsible drawer for sorting unassigned calendar events.

### ✅ Habits & Productivity Streaks
- Track daily habits on a monthly calendar grid.
- Sidebar footer features a vibrant **Ember Flame Streak Counter** (`#f97316`) that tracks consecutive active days automatically.

---

## 🔒 Privacy & Architecture

- **100% Local & Privacy-First**: No remote servers, no cloud sync, no tracking telemetries.
- **GNOME Evolution Data Server Integration**: Syncs in real-time with GNOME Calendar.
- **Auto-Save Protection**: Live timer sessions save automatically if the app closes unexpectedly.

---

## 🚀 Getting Started

### Prerequisites

* **Node.js** >= v24.18.0
* **npm** >= v11.16.0
* **GNOME Desktop** with Evolution Data Server (`eds-service` pre-installed on Ubuntu, Fedora, Debian, Pop!_OS, Arch, and most GNOME distributions).

### Installation

```bash
git clone https://github.com/abdullahsamir74/TRACK-IT.git
cd TRACK-IT
npm install --allow-scripts
```

### Running the App

```bash
# Start standard desktop mode
npm start

# Start development mode (opens DevTools alongside app)
npm run dev
```

---

## 📌 Add to Your GNOME Dock

1. Install the GNOME desktop launcher:
   ```bash
   npm run install-desktop
   ```
2. Press **Super**, search for **"TRACK IT"**, right-click and select **Pin to Dash**.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
