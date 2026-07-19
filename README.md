# TRACK IT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/platform-linux-lightgrey.svg)](https://www.gnome.org/)

**TRACK IT** is a desktop time-tracking and productivity app for Linux (GNOME). It connects to your GNOME Calendar so your events automatically appear as trackable tasks — no manual imports, no account sign-ups, everything stays on your machine.

---

## What You Can Do

### 📋 Dashboard
See today's tasks, total tracked time, and completion stats at a glance. If a timer is running, a live card shows what you're working on right now.

### 🗓️ Schedule
View all your GNOME Calendar events alongside manually created tasks. Filter by **Today**, **Upcoming**, or **Past**, and drag-and-drop to reorder your priorities.

### ⏱️ Timer
Pick a task and start tracking. The timer enters a distraction-free fullscreen mode so you can focus without alt-tabbing. Press **Esc** to exit fullscreen — the timer keeps running in the background.

### 📊 Analytics
Charts and summaries of your tracked time — daily progress, total hours, session count, completion rate, and your most-worked tasks. Filter by **This Week**, **This Month**, or **All Time**.

### 📁 Projects
Group related calendar tasks into custom projects. Drag tasks between projects or keep them in the unassigned pool until you're ready to organize.

### ✅ Habits
Create daily habits and mark them as completed or failed each day on a monthly calendar grid. Streaks are tracked automatically.

---

## Key Highlights

- **GNOME Calendar sync** — Events appear automatically and update in real-time when you edit them in GNOME Calendar.
- **Fully offline** — All data is stored locally on your machine. No accounts, no cloud.
- **Auto-save on exit** — If you close the app while a timer is running, your session is saved automatically.
- **Custom task ordering** — Drag-and-drop your task list and the order persists across Dashboard, Schedule, and Timer.
- **Separate reset scopes** — Reset your schedule data without losing analytics, or clear analytics without touching your tasks.

---

## Getting Started

### Prerequisites
*   **Node.js** >= v24.18.0
*   **npm** >= v11.16.0
*   **GNOME Desktop** with Evolution Data Server (pre-installed on Ubuntu, Fedora, Debian, and most GNOME-based distros).

### Install

```bash
git clone https://github.com/abdullahsamir74/progress-tracker.git
cd progress-tracker
npm install --allow-scripts
```

### Run

```bash
npm start
```

For development mode (opens DevTools alongside the app):

```bash
npm run dev
```

---

## Add to Your GNOME Dock

1. Run the desktop launcher installer:
    ```bash
    npm run install-desktop
    ```
2. Press **Super**, search for **"TRACK IT"**, right-click and select **Pin to Dash**.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
