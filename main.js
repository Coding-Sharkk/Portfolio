// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");

    // Get all nav options and add event listener to close the menu when clicked
    const navOptions = navLinks.querySelectorAll("li a"); // Select all anchor tags within the navLinks
    navOptions.forEach(navOption => {
        navOption.addEventListener('click', function () {
            navLinks.classList.remove('show'); // Remove the 'show' class to hide the menu
        });
    });
}


// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Show Back to Top Button when scrolling
window.onscroll = function () {
    const topBtn = document.getElementById('topBtn');
    // Check if the user has scrolled more than 200px
    if (window.scrollY > 200) {
        topBtn.style.display = 'block'; // Show the button
    } else {
        topBtn.style.display = 'none'; // Hide the button when close to top
    }
};

// Scroll to Top on button click with smooth scrolling
document.getElementById('topBtn').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});


// Contact Form Submission (Basic)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});

// Function to trigger animation when Skills section is in view
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill');

    // Check if skills section is visible in viewport
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const isVisible = sectionTop < window.innerHeight;

    if (isVisible) {
        skillBars.forEach(bar => bar.classList.add('active'));
    } else {
        skillBars.forEach(bar => bar.classList.remove('active'));
    }
}

// Listen for scroll event to trigger animation
window.addEventListener('scroll', animateSkills);

