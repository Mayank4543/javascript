# JavaScript Learning & Practice

This repository contains various JavaScript projects and components I've been working on to improve my JavaScript skills. The projects range from simple UI components to more complex applications.

## Project Structure

```
javascript/
├── function/
│   └── index.js
├── interview/
│   └── interview.js
├── navbar/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── notemaking/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── Practice/
│   ├── 01Revision/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── Project01/
│   │   ├── index.html
│   │   └── style.css
│   └── Project02/
│       ├── Index.html
│       ├── script.js
│       └── style.css
├── question/
│   └── index.html
└── todolistt/
    ├── index.html
    ├── script.js
    └── style.css
```

## Projects Overview

### Responsive Navbar (Practice/Project02)

A responsive navigation bar that collapses into a hamburger menu on smaller screens.

#### Features:

- Clean, modern design
- Mobile-friendly with hamburger menu toggle
- Smooth transitions for better user experience

#### Technologies Used:

- HTML5
- CSS3 (Flexbox for layout)
- JavaScript (DOM manipulation)

#### How to Use:

1. Open `Practice/Project02/Index.html` in a web browser
2. On desktop, the navigation links appear horizontally
3. On mobile or smaller screens (width < 768px), the links collapse into a hamburger menu
4. Click the hamburger icon to toggle the menu visibility

#### Implementation Details:

- The navbar uses flexbox for layout
- Media queries handle responsive design changes
- JavaScript toggles an 'active' class to show/hide the menu on mobile

```javascript
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle");
  const navLink = document.querySelector(".nav-list");

  toggleBtn.addEventListener("click", () => {
    navLink.classList.toggle("active");
  });
});
```

### Todo List (todolistt)

A simple todo list application for tracking tasks.

### Note Making App (notemaking)

An application for creating and saving notes.

## Interview Questions

The `interview/interview.js` file contains practice solutions for common JavaScript interview questions and coding challenges.

## Getting Started

1. Clone this repository
2. Navigate to any project folder
3. Open the index.html file in your browser

## Browser Compatibility

These projects have been tested and work in:

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)

## Future Improvements

- Add localStorage support to the Todo and Note apps
- Implement user authentication
- Add more interactive JavaScript components

## License

This project is open-source and available for anyone to use and learn from.

---

Created by Mayank Rathore | June 2025
