# CodeLearn Platform

## Overview

CodeLearn is a comprehensive EduTech website designed to help students learn programming languages. The platform serves as a complete educational hub with course catalog, detailed course information, instructor profiles, and interactive features. Built with vanilla HTML, CSS, and JavaScript, it features a modern, responsive design optimized for both desktop and mobile devices. The website includes search functionality, course filtering, contact forms, and dynamic content loading for enhanced user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Multi-Page Application**: Built with vanilla HTML, CSS, and JavaScript without any framework dependencies
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox for layout management
- **Component-Based Styling**: Modular CSS architecture with reusable classes and consistent design patterns
- **Navigation System**: Fixed header navigation with mobile hamburger menu support

### Page Structure
- **Home Page** (`index.html`): Landing page with hero section and course overview
- **About Page** (`about.html`): Company information and mission statement
- **Courses Page** (`courses.html`): Course catalog with search and filtering capabilities
- **Course Detail Page** (`course-detail.html`): Individual course information and enrollment
- **Contact Page** (`contact.html`): Contact form and company information

### Styling Architecture
- **CSS Methodology**: Custom CSS with utility classes and component-based styling
- **Design System**: Consistent color scheme, typography, and spacing using CSS custom properties
- **Mobile Responsiveness**: Breakpoint-based responsive design for various screen sizes
- **Visual Elements**: Code illustration components and interactive elements for educational theme

### Client-Side Functionality
- **Dynamic Content Loading**: JavaScript-powered course filtering and search functionality
- **Interactive Navigation**: Mobile menu toggle and active state management
- **Form Handling**: Contact form validation and submission (frontend only)
- **Course Management**: Dynamic course detail population based on URL parameters or selection

## External Dependencies

### Core Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Styling with modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript**: Client-side interactivity without external libraries

### Assets and Resources
- **Fonts**: System fonts (Segoe UI, Tahoma, Geneva, Verdana) for cross-platform compatibility
- **Icons**: Emoji-based icons for course categories (🐍 for Python, etc.)
- **Images**: No external image dependencies identified in current structure

### Browser Compatibility
- **Modern Browsers**: Designed for current versions of Chrome, Firefox, Safari, and Edge
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Mobile Support**: Responsive design for mobile devices and tablets

Note: The current implementation is a static website with no backend services, databases, or external API integrations. All functionality is handled client-side with the potential for future backend integration for user management, course progress tracking, and dynamic content management.