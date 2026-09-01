/**
 * TaskFlow — app.js
 * Git Basics Course Real-World Project
 *
 * Features:
 *  - Add / complete / delete tasks
 *  - Priority levels (high / medium / low)
 *  - Optional due dates with overdue detection
 *  - Filter by status and priority
 *  - Persist tasks to localStorage
 */

'use strict';

// ── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'taskflow-tasks';

const PRIORITY_LABELS = {
  high:   { label: 'High',   icon: '🔴' },
  medium: { label: 'Medium', icon: '⚡' },
  low:    { label: 'Low',    icon: '🟢' },
};

// ── State ────────────────────────────────────────────────────────────────────

let tasks = loadTasks();
let activeFilter = 'all';
let activePriorityFilter = 'all';

// ── Persistence ──────────────────────────────────────────────────────────────

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// ── Task Operations ───────────────────────────────────────────────────────────

/**
 * Create a new task object.
 * @param {string} text
 * @param {'high'|'medium'|'low'} priority
 * @param {string} dueDate - ISO date string (YYYY-MM-DD) or empty string
 * @returns {Object}
 */
function createTask(text, priority, dueDate) {
  return {
    id:        crypto.randomUUID(),
    text:      text.trim(),
    priority,
    dueDate,
    done:      false,
    createdAt: new Date().toISOString(),
  };
}

function addTask(text, priority, dueDate) {
  const task = createTask(text, priority, dueDate);
  tasks.unshift(task);
  saveTasks();
  return task;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    saveTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
}

function clearCompleted() {
  tasks = tasks.filter(t => !t.done);
  saveTasks();
}

// ── Filtering ────────────────────────────────────────────────────────────────

function getFilteredTasks() {
  return tasks.filter(task => {
    const matchesStatus =
      activeFilter === 'all' ||
      (activeFilter === 'active' && !task.done) ||
      (activeFilter === 'completed' && task.done);

    const matchesPriority =
      activePriorityFilter === 'all' ||
      task.priority === activePriorityFilter;

    return matchesStatus && matchesPriority;
  });
}

// ── Rendering ────────────────────────────────────────────────────────────────

function isOverdue(dueDate) {
  if (!dueDate) return false;
  const today = new Date().toISOString().slice(0, 10);
  return dueDate < today;
}

function formatDueDate(dueDate) {
  if (!dueDate) return '';
  const date = new Date(dueDate + 'T00:00:00');
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderTaskItem(task) {
  const li = document.createElement('li');
  li.className = `task-item task-item--${task.priority}${task.done ? ' task-item--done' : ''}`;
  li.dataset.id = task.id;

  const overdue = !task.done && isOverdue(task.dueDate);

  li.innerHTML = `
    <input
      type="checkbox"
      class="task-checkbox"
      aria-label="Mark '${escapeHtml(task.text)}' as done"
      ${task.done ? 'checked' : ''}
    />
    <div class="task-body">
      <span class="task-text">${escapeHtml(task.text)}</span>
      <div class="task-meta">
        <span class="task-badge task-badge--${task.priority}">
          ${PRIORITY_LABELS[task.priority].icon} ${PRIORITY_LABELS[task.priority].label}
        </span>
        ${task.dueDate ? `
          <span class="task-due${overdue ? ' task-due--overdue' : ''}">
            ${overdue ? '⚠️ Overdue · ' : '📅 Due '}${formatDueDate(task.dueDate)}
          </span>
        ` : ''}
      </div>
    </div>
    <div class="task-actions">
      <button class="btn btn--icon delete-btn" aria-label="Delete task" title="Delete">🗑</button>
    </div>
  `;

  // Events
  li.querySelector('.task-checkbox').addEventListener('change', () => {
    toggleTask(task.id);
    render();
  });

  li.querySelector('.delete-btn').addEventListener('click', () => {
    deleteTask(task.id);
    render();
  });

  return li;
}

function render() {
  const list = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  const filtered = getFilteredTasks();

  list.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    filtered.forEach(task => list.appendChild(renderTaskItem(task)));
  }

  // Update stats
  const total = tasks.length;
  const done  = tasks.filter(t => t.done).length;
  document.getElementById('stat-total').textContent = `${total} task${total !== 1 ? 's' : ''}`;
  document.getElementById('stat-done').textContent  = `${done} done`;
}

// ── Utilities ────────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ── Event Listeners ──────────────────────────────────────────────────────────

document.getElementById('add-task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input    = document.getElementById('task-input');
  const priority = document.getElementById('priority-select').value;
  const dueDate  = document.getElementById('due-date-input').value;
  const errorEl  = document.getElementById('form-error');
  const text     = input.value.trim();

  if (!text) {
    errorEl.textContent = 'Please enter a task description.';
    input.focus();
    return;
  }

  errorEl.textContent = '';
  addTask(text, priority, dueDate);
  input.value = '';
  document.getElementById('due-date-input').value = '';
  input.focus();
  render();
});

// Clear error on input
document.getElementById('task-input').addEventListener('input', () => {
  document.getElementById('form-error').textContent = '';
});

// Status filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
  });
});

// Priority filter
document.getElementById('priority-filter').addEventListener('change', (e) => {
  activePriorityFilter = e.target.value;
  render();
});

// Clear completed
document.getElementById('clear-completed-btn').addEventListener('click', () => {
  clearCompleted();
  render();
});

// ── Init ─────────────────────────────────────────────────────────────────────

render();
