// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Simple validation
            if (!name || !email || !subject || !message) {
                showFormStatus('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            showFormStatus('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    // Course Search and Filter Functionality
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card-large');
    const noResults = document.getElementById('noResults');

    if (searchInput && filterButtons && courseCards) {
        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterCourses(searchTerm, getActiveFilter());
        });

        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                const searchTerm = searchInput.value.toLowerCase();
                filterCourses(searchTerm, category);
            });
        });
    }

    // Course Detail Page Dynamic Content
    if (window.location.pathname.includes('course-detail.html')) {
        loadCourseDetails();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Helper Functions

function showFormStatus(message, type) {
    const formStatus = document.getElementById('form-status');
    if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        
        // Hide status message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}

function getActiveFilter() {
    const activeButton = document.querySelector('.filter-btn.active');
    return activeButton ? activeButton.getAttribute('data-category') : 'all';
}

function filterCourses(searchTerm, category) {
    const courseCards = document.querySelectorAll('.course-card-large');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;

    courseCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const categories = card.getAttribute('data-category').split(' ');
        
        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = category === 'all' || categories.includes(category);
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide no results message
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

function loadCourseDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    
    if (!courseId) {
        return;
    }

    const courseData = {
        python: {
            icon: '🐍',
            title: 'Python Programming',
            subtitle: 'Master Python from fundamentals to advanced topics',
            duration: '8 weeks',
            level: 'Beginner',
            students: '1,234 students',
            rating: '4.8 (456 reviews)',
            price: '$99',
            overview: `
                <p>This comprehensive Python course is designed to take you from a complete beginner to an advanced Python developer. You'll learn fundamental programming concepts, data structures, object-oriented programming, and how to build real-world applications.</p>
                
                <h3>What You'll Learn:</h3>
                <ul>
                    <li>Python syntax and fundamentals</li>
                    <li>Data types, variables, and operators</li>
                    <li>Control flow and functions</li>
                    <li>Data structures (lists, dictionaries, sets)</li>
                    <li>Object-oriented programming concepts</li>
                    <li>File handling and error management</li>
                    <li>Web development basics with Flask</li>
                    <li>Database integration</li>
                    <li>Building real-world projects</li>
                </ul>
            `,
            instructor: {
                avatar: '👨‍💻',
                name: 'Alex Johnson',
                title: 'Senior Python Developer & Instructor',
                bio: 'Alex has over 10 years of experience in software development and has been teaching Python for 5 years. He has worked with major tech companies and has helped thousands of students launch their programming careers.'
            }
        },
        javascript: {
            icon: '⚡',
            title: 'JavaScript Fundamentals',
            subtitle: 'Learn JavaScript for modern web development',
            duration: '6 weeks',
            level: 'Beginner',
            students: '2,156 students',
            rating: '4.7 (789 reviews)',
            price: '$89',
            overview: `
                <p>Master JavaScript, the language of the web. This course covers everything from basic syntax to advanced concepts like closures, promises, and modern ES6+ features.</p>
                
                <h3>What You'll Learn:</h3>
                <ul>
                    <li>JavaScript fundamentals and syntax</li>
                    <li>DOM manipulation and events</li>
                    <li>Functions and scope</li>
                    <li>Objects and arrays</li>
                    <li>Asynchronous JavaScript and Promises</li>
                    <li>ES6+ features (arrow functions, destructuring, modules)</li>
                    <li>Error handling and debugging</li>
                    <li>Building interactive web applications</li>
                    <li>Introduction to popular frameworks</li>
                </ul>
            `,
            instructor: {
                avatar: '👩‍💻',
                name: 'Sarah Chen',
                title: 'JavaScript Expert & Full-Stack Developer',
                bio: 'Sarah is a full-stack developer with 8 years of experience. She specializes in modern JavaScript, React, and Node.js, and has taught thousands of students worldwide.'
            }
        },
        java: {
            icon: '☕',
            title: 'Java Programming',
            subtitle: 'Build robust applications with Java',
            duration: '10 weeks',
            level: 'Intermediate',
            students: '987 students',
            rating: '4.9 (234 reviews)',
            price: '$129',
            overview: `
                <p>Learn Java, one of the world's most popular programming languages. This course covers object-oriented programming, data structures, and enterprise-level development practices.</p>
                
                <h3>What You'll Learn:</h3>
                <ul>
                    <li>Java syntax and fundamentals</li>
                    <li>Object-oriented programming principles</li>
                    <li>Inheritance and polymorphism</li>
                    <li>Collections framework</li>
                    <li>Exception handling</li>
                    <li>File I/O operations</li>
                    <li>Multithreading and concurrency</li>
                    <li>Database connectivity with JDBC</li>
                    <li>Building enterprise applications</li>
                </ul>
            `,
            instructor: {
                avatar: '👨‍🔬',
                name: 'Michael Rodriguez',
                title: 'Java Architect & System Designer',
                bio: 'Michael is a former software architect with 12 years of experience in Java development. He has designed large-scale systems and is passionate about teaching clean code practices.'
            }
        },
        sql: {
            icon: '🗄️',
            title: 'SQL Database Fundamentals',
            subtitle: 'Master database queries and design',
            duration: '4 weeks',
            level: 'Beginner',
            students: '1,567 students',
            rating: '4.6 (345 reviews)',
            price: '$69',
            overview: `
                <p>Learn SQL, the standard language for managing and querying relational databases. This course covers database design, complex queries, and optimization techniques.</p>
                
                <h3>What You'll Learn:</h3>
                <ul>
                    <li>SQL syntax and basic queries</li>
                    <li>Database design principles</li>
                    <li>Joins and relationships</li>
                    <li>Advanced queries and subqueries</li>
                    <li>Aggregate functions and grouping</li>
                    <li>Index optimization</li>
                    <li>Stored procedures and triggers</li>
                    <li>Database normalization</li>
                    <li>Performance tuning</li>
                </ul>
            `,
            instructor: {
                avatar: '👩‍🏫',
                name: 'Emily Thompson',
                title: 'Database Administrator & SQL Expert',
                bio: 'Emily has extensive experience in database design and administration. She has worked with Fortune 500 companies optimizing their database systems and teaching best practices.'
            }
        },
        cpp: {
            icon: '⚙️',
            title: 'C++ Programming',
            subtitle: 'System programming and high-performance applications',
            duration: '12 weeks',
            level: 'Advanced',
            students: '543 students',
            rating: '4.8 (156 reviews)',
            price: '$149',
            overview: `
                <p>Dive deep into C++, a powerful language for system programming, game development, and high-performance applications. Learn memory management, advanced algorithms, and modern C++ features.</p>
                
                <h3>What You'll Learn:</h3>
                <ul>
                    <li>C++ syntax and fundamentals</li>
                    <li>Memory management and pointers</li>
                    <li>Object-oriented programming in C++</li>
                    <li>Templates and generic programming</li>
                    <li>Standard Template Library (STL)</li>
                    <li>Advanced data structures and algorithms</li>
                    <li>Modern C++11/14/17 features</li>
                    <li>Performance optimization</li>
                    <li>Building system-level applications</li>
                </ul>
            `,
            instructor: {
                avatar: '👨‍🔬',
                name: 'David Kim',
                title: 'System Programmer & C++ Expert',
                bio: 'David has 15 years of experience in system programming and has contributed to several open-source C++ projects. He specializes in high-performance computing and real-time systems.'
            }
        },
        react: {
            icon: '⚛️',
            title: 'React Development',
            subtitle: 'Build modern web applications with React',
            duration: '8 weeks',
            level: 'Intermediate',
            students: '1,892 students',
            rating: '4.9 (567 reviews)',
            price: '$119',
            overview: `
                <p>Learn React, the most popular JavaScript library for building user interfaces. Master components, hooks, state management, and modern React development practices.</p>
                
                <h3>What You'll Learn:</h3>
                <ul>
                    <li>React fundamentals and JSX</li>
                    <li>Components and props</li>
                    <li>State management with hooks</li>
                    <li>Event handling and forms</li>
                    <li>React Router for navigation</li>
                    <li>Context API for global state</li>
                    <li>Performance optimization</li>
                    <li>Testing React applications</li>
                    <li>Deployment and best practices</li>
                </ul>
            `,
            instructor: {
                avatar: '👩‍💻',
                name: 'Lisa Wang',
                title: 'React Developer & UI/UX Expert',
                bio: 'Lisa is a frontend specialist with 6 years of experience building React applications. She has worked with startups and large enterprises, focusing on user experience and performance.'
            }
        },
        'python-data-science': {
            icon: '📊',
            title: 'Python Data Science',
            subtitle: 'Data analysis and machine learning with Python',
            duration: '10 weeks',
            level: 'Intermediate',
            students: '1,234 students',
            rating: '4.8 (389 reviews)',
            price: '$139',
            overview: `
                <p>Learn data science with Python, including data analysis, visualization, and machine learning. Work with real datasets and build predictive models.</p>
                
                <h3>What You'll Learn:</h3>
                <ul>
                    <li>NumPy and Pandas for data manipulation</li>
                    <li>Data visualization with Matplotlib and Seaborn</li>
                    <li>Statistical analysis and hypothesis testing</li>
                    <li>Machine learning with scikit-learn</li>
                    <li>Data preprocessing and feature engineering</li>
                    <li>Regression and classification algorithms</li>
                    <li>Clustering and dimensionality reduction</li>
                    <li>Model evaluation and validation</li>
                    <li>Real-world data science projects</li>
                </ul>
            `,
            instructor: {
                avatar: '👨‍🔬',
                name: 'Dr. Robert Chen',
                title: 'Data Scientist & Machine Learning Expert',
                bio: 'Dr. Chen has a PhD in Statistics and 8 years of experience in data science. He has worked with tech companies and research institutions, specializing in predictive modeling and AI.'
            }
        },
        nodejs: {
            icon: '🟢',
            title: 'Node.js Backend Development',
            subtitle: 'Build scalable backend applications',
            duration: '9 weeks',
            level: 'Intermediate',
            students: '876 students',
            rating: '4.7 (234 reviews)',
            price: '$109',
            overview: `
                <p>Master Node.js for backend development. Learn to build RESTful APIs, work with databases, handle authentication, and deploy scalable server applications.</p>
                
                <h3>What You'll Learn:</h3>
                <ul>
                    <li>Node.js fundamentals and npm</li>
                    <li>Express.js framework</li>
                    <li>RESTful API development</li>
                    <li>Database integration (MongoDB, PostgreSQL)</li>
                    <li>Authentication and authorization</li>
                    <li>Middleware and error handling</li>
                    <li>File uploads and processing</li>
                    <li>Testing and debugging</li>
                    <li>Deployment and scaling</li>
                </ul>
            `,
            instructor: {
                avatar: '👨‍💻',
                name: 'Carlos Martinez',
                title: 'Backend Developer & Node.js Expert',
                bio: 'Carlos has 7 years of experience building scalable backend systems with Node.js. He has worked with fintech and e-commerce companies, focusing on API design and performance.'
            }
        }
    };

    const course = courseData[courseId];
    if (!course) {
        return;
    }

    // Update course details
    updateElement('courseIcon', course.icon);
    updateElement('courseTitle', course.title);
    updateElement('courseSubtitle', course.subtitle);
    updateElement('courseDuration', course.duration);
    updateElement('courseLevel', course.level);
    updateElement('courseStudents', course.students);
    updateElement('courseRating', course.rating);
    updateElement('coursePrice', course.price);
    updateElement('courseBreadcrumb', course.title);
    
    // Update overview content
    const overviewElement = document.getElementById('courseOverview');
    if (overviewElement) {
        overviewElement.innerHTML = course.overview;
    }

    // Update instructor info
    const instructorElement = document.getElementById('instructorProfile');
    if (instructorElement && course.instructor) {
        instructorElement.innerHTML = `
            <div class="instructor-avatar-large">${course.instructor.avatar}</div>
            <div class="instructor-details">
                <h3>${course.instructor.name}</h3>
                <p class="instructor-title">${course.instructor.title}</p>
                <p class="instructor-bio">${course.instructor.bio}</p>
                <div class="instructor-stats">
                    <span class="instructor-stat">⭐ 4.9 rating</span>
                    <span class="instructor-stat">👥 15,000+ students</span>
                    <span class="instructor-stat">📚 12 courses</span>
                </div>
            </div>
        `;
    }

    // Update page title
    document.title = `${course.title} - CodeLearn`;
}

function updateElement(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = content;
    }
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.course-card, .instructor-card, .philosophy-item, .value-item');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', addScrollAnimations);

// Cache busting for development
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    // Add cache control headers for development
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Cache-Control';
    meta.content = 'no-cache, no-store, must-revalidate';
    document.head.appendChild(meta);
}