// Main JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth page transitions
    const navLinks = document.querySelectorAll('.nav-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a fade effect when navigating
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 300);
        });
    });
    
    // Add parallax effect to video background on mouse move
    document.addEventListener('mousemove', function(e) {
        const video = document.querySelector('.video-background');
        if (video) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            video.style.transform = `translate(-${x * 10}px, -${y * 10}px) scale(1.1)`;
        }
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe skill columns and other elements
    const skillColumns = document.querySelectorAll('.skill-column');
    skillColumns.forEach(column => {
        column.style.opacity = '0';
        column.style.transform = 'translateY(20px)';
        column.style.transition = 'all 0.6s ease';
        observer.observe(column);
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Prevent video context menu
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('contextmenu', e => e.preventDefault());
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pages = ['index.html', 'about.html', 'art.html', 'contact.html'];
        const currentIndex = pages.indexOf(currentPage);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            window.location.href = pages[currentIndex - 1];
        } else if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
            window.location.href = pages[currentIndex + 1];
        }
    });
});