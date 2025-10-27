// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Keep navbar style controlled by CSS (no JS override on scroll)

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe program cards
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.classList.add('hidden');
        observer.observe(card);
    });

    // Wire up donate buttons (no inline onclicks)
    const donateButtons = document.querySelectorAll('.donate-trigger');
    donateButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            handleDonate();
        });
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// No Stripe integration configured (removed)

// Handle donation button clicks
function handleDonate() {
    showDonationModal();
}

// ============================================
// DONATION FUNCTIONALITY
// ============================================

function handleDonate() {
    showDonationModal();
}

function showDonationModal() {
    // Donation links
    const cashAppLink = 'https://cash.app/$MMendelMarkel';
    const zelleLink = 'https://www.zellepay.com/';
    const venmoLink = 'https://venmo.com/code?user_id=4344283796604636665&created=1761083061';
    const paypalLink = 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mendelmarkel13@gmail.com';

    
// Create modal overlay
const modal = document.createElement('div');
modal.className = 'modal';

// Create modal content
const modalContent = document.createElement('div');
modalContent.className = 'modal-content';

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        z-index: 1000;
    }
    .modal-content {
        background: white;
        border-radius: 10px;
        padding: 20px;
        max-width: 500px;
        width: 90%;
        box-sizing: border-box;
        animation: slideIn 0.3s ease-out;
    }
    .donation-link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 14px 0;
        padding: 18px 20px;
        color: white;
        text-decoration: none;
        border-radius: 25px;
        transition: all 0.3s ease;
        font-weight: 600;
        font-size: 16px;
        min-height: 56px;
        text-align: center;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    .donation-link:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    .donation-link img {
        height: 24px;
        width: auto;
    }
    .cashapp { background: linear-gradient(135deg, #00D632, #00B82A); }
    .cashapp:hover { background: linear-gradient(135deg, #00B82A, #009620); }
    .zelle { background: linear-gradient(135deg, #6C1EB5, #5A1A9A); }
    .zelle:hover { background: linear-gradient(135deg, #5A1A9A, #481580); }
    .venmo { background: linear-gradient(135deg, #3D95CE, #2E7BB8); }
    .venmo:hover { background: linear-gradient(135deg, #2E7BB8, #1F63A2); }
    .paypal { background: linear-gradient(135deg, #0070BA, #005EA6); }
    .paypal:hover { background: linear-gradient(135deg, #005EA6, #004A92); }
    .close-btn {
        position: absolute;
        top: 20px;
        right: 25px;
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #6b7280;
        transition: all 0.3s ease;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .close-btn:hover { 
        color: #1f2937;
        transform: rotate(90deg);
    }
    .modal-title {
        text-align: center;
        color: #3b82f6;
        margin-bottom: 20px;
        margin-top: 0;
        font-size: 24px;
        font-weight: 700;
    }
    .modal-description {
        margin-bottom: 25px;
        color: #4b5563;
        line-height: 1.6;
        text-align: center;
    }
    .modal-description p {
        margin: 10px 0;
    }
    .modal-description strong {
        color: #1f2937;
    }
    @media (max-width: 480px) {
        .modal-content {
            max-width: 90%; /* Keep width responsive for platforms like Wise */
            width: 90%;
            padding: 15px; /* Reduced padding */
            box-sizing: border-box; /* Ensure padding doesn't increase size */
            min-height: 70vh; /* Ensure modal is tall enough to fit page */
            max-height: 80vh; /* Limit height to avoid overflow */
            overflow-y: auto; /* Allow scrolling if content is too long */
        }
        .modal-title {
            font-size: 20px; /* Smaller title */
            margin-bottom: 15px;
        }
        .modal-description {
            font-size: 14px; /* Smaller description text */
            margin-bottom: 15px;
        }
        .donation-link {
            padding: 12px 10px; /* Reduced padding */
            font-size: 14px; /* Smaller font */
            margin: 8px 0; /* Smaller margins */
            min-height: 48px; /* Smaller button height */
        }
        .donation-link img {
            height: 20px; /* Smaller image */
        }
        .close-btn {
            top: 10px; /* Adjust position */
            right: 15px;
            font-size: 22px; /* Smaller close button */
            width: 30px;
            height: 30px;
        }
    }
`;
    document.head.appendChild(style);
    modalContent.innerHTML = `
    <button class="close-btn" aria-label="Close modal">&times;</button>
    <h2 class="modal-title">Donate to <br> The Shluchim Of YG Miami</h2>
    <div class="modal-description">
    <p><strong>Thank you for supporting our mission!</strong></p>
    <p>We are currently working on adding our online donation platform. Until then, you can donate using one of the methods below:</p>
    <p>If you have any questions or would like to donate for a specific purpose, please email us at <a href="mailto:YGShluchim@gmail.com">YGShluchim@Gmail.com</a>.</p>
</div>
    <a href="${cashAppLink}" target="_blank" class="donation-link cashapp">
        <img src="Images/cashapp-svgrepo-com.svg" alt="CashApp">
        <span>CashApp</span>
    </a>
    <a href="https://zellepay.com/send?recipient=3472205998" target="_blank" class="donation-link zelle">
        <img src="Images/Zelle®_id9eOrSaCY_0.svg" alt="Zelle">
        <span>Zelle 347-220-5998</span>
    </a>
    <a href="${venmoLink}" target="_blank" class="donation-link venmo">
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Venmo" role="img" viewBox="0 0 512 512" width="28" height="28">
        <rect width="512" height="512" rx="15%" fill="#3396cd"/>
        <path d="m381.4 105.3c11 18.1 15.9 36.7 15.9 60.3 0 75.1-64.1 172.7-116.2 241.2h-118.8l-47.6-285 104.1-9.9 25.3 202.8c23.5-38.4 52.6-98.7 52.6-139.7 0-22.5-3.9-37.8-9.9-50.4z" fill="#ffffff"/>
    </svg>
    <span>Venmo</span>
</a>
    <a href="${paypalLink}" target="_blank" class="donation-link paypal">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill="#0070BA"/>
            <path d="M32.3305 18.0977C32.3082 18.24 32.2828 18.3856 32.2542 18.5351C31.2704 23.5861 27.9046 25.331 23.606 25.331H21.4173C20.8916 25.331 20.4486 25.7127 20.3667 26.2313L19.2461 33.3381L18.9288 35.3527C18.8755 35.693 19.1379 36 19.4815 36H23.3634C23.8231 36 24.2136 35.666 24.286 35.2127L24.3241 35.0154L25.055 30.3772L25.1019 30.1227C25.1735 29.6678 25.5648 29.3338 26.0245 29.3338H26.6051C30.3661 29.3338 33.3103 27.8068 34.1708 23.388C34.5303 21.5421 34.3442 20.0008 33.393 18.9168C33.1051 18.59 32.748 18.3188 32.3305 18.0977Z" fill="white" fill-opacity="0.6"/>
            <path d="M31.3009 17.6871C31.1506 17.6434 30.9955 17.6036 30.8364 17.5678C30.6766 17.5328 30.5127 17.5018 30.3441 17.4748C29.754 17.3793 29.1074 17.334 28.4147 17.334H22.5676C22.4237 17.334 22.2869 17.3666 22.1644 17.4254C21.8948 17.5551 21.6944 17.8104 21.6459 18.1229L20.402 26.0013L20.3662 26.2311C20.4481 25.7126 20.8911 25.3308 21.4168 25.3308H23.6055C27.9041 25.3308 31.2699 23.5851 32.2537 18.5349C32.2831 18.3854 32.3078 18.2398 32.33 18.0975C32.0811 17.9655 31.8115 17.8525 31.5212 17.7563C31.4496 17.7324 31.3757 17.7094 31.3009 17.6871Z" fill="white" fill-opacity="0.8"/>
            <path d="M21.6461 18.1231C21.6946 17.8105 21.895 17.5552 22.1646 17.4264C22.2879 17.3675 22.4239 17.3349 22.5678 17.3349H28.4149C29.1077 17.3349 29.7542 17.3803 30.3444 17.4757C30.513 17.5027 30.6768 17.5338 30.8367 17.5687C30.9957 17.6045 31.1508 17.6443 31.3011 17.688C31.3759 17.7103 31.4498 17.7334 31.5222 17.7564C31.8125 17.8527 32.0821 17.9664 32.331 18.0976C32.6237 16.231 32.3287 14.9601 31.3194 13.8093C30.2068 12.5424 28.1986 12 25.629 12H18.169C17.6441 12 17.1963 12.3817 17.1152 12.9011L14.0079 32.5969C13.9467 32.9866 14.2473 33.3381 14.6402 33.3381H19.2458L20.4022 26.0014L21.6461 18.1231Z" fill="white"/>
        </svg>
        <span>PayPal</span>
    </a>
`;



    modal.className = 'modal';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(m => m.remove());
        }
    });

    // Close modal when clicking the close button (attach listener instead of inline onclick)
    const closeBtn = modalContent.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.remove();
        });
    }
}

// Form validation and interactions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add smooth hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Ripple styles and modal styles live in style.css now; no injected styles

// Newsletter Carousel
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.newsletters-track');
    const prevButton = document.getElementById('prevNewsletter');
    const nextButton = document.getElementById('nextNewsletter');
    let currentIndex = 0;

    if (track && prevButton && nextButton) {
        const items = track.children;
        const itemWidth = items[0].offsetWidth + 32; // Including gap

        // Update button states
        function updateButtons() {
            prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextButton.style.opacity = currentIndex >= items.length - 1 ? '0.5' : '1';
            prevButton.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
            nextButton.style.cursor = currentIndex >= items.length - 1 ? 'not-allowed' : 'pointer';
        }

        // Move to next/previous item
        function moveToItem(index) {
            currentIndex = Math.max(0, Math.min(index, items.length - 1));
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            updateButtons();
        }

        // Event listeners for buttons
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                moveToItem(currentIndex - 1);
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < items.length - 1) {
                moveToItem(currentIndex + 1);
            }
        });

        // Initial button state
        updateButtons();
    }
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    }
});

// Add error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            // You could add a placeholder image here
            // this.src = 'placeholder.jpg';
        });
    });
});

// Open PDF preview in an inline modal for reading (delegated listener)
document.addEventListener('click', function(e) {
    const link = e.target.closest('a.pdf-view');
    if (!link) return;
    e.preventDefault();
    const url = link.getAttribute('href');
    const title = link.dataset.title || 'Newsletter';
    if (url) showPdfModal(url, title);
});

function showPdfModal(url, title) {
    // Ensure Font Awesome is loaded
    function loadFontAwesome() {
        return new Promise((resolve, reject) => {
            if (document.querySelector('link[href*="font-awesome"]')) {
                resolve();
                return;
            }
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    }

    // Load PDF.js dynamically if needed
    function loadPdfJs() {
        return new Promise((resolve, reject) => {
            if (window.pdfjsLib) return resolve(window.pdfjsLib);
            const script = document.createElement('script');
            // Using a stable CDN version
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
            script.onload = () => {
                // worker
                if (window.pdfjsLib) {
                    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
                    resolve(window.pdfjsLib);
                } else {
                    reject(new Error('pdfjs failed to load'));
                }
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Create modal overlay and structure
    const modal = document.createElement('div');
    modal.className = 'modal';
    const content = document.createElement('div');
    content.className = 'pdf-modal-content';

    const header = document.createElement('div');
    header.className = 'pdf-modal-header';

    const nav = document.createElement('div');
    nav.className = 'pdf-nav';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pdf-nav-button';
    prevBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M15 18l-6-6 6-6"/></svg>';
    const pageIndicator = document.createElement('div');
    pageIndicator.className = 'pdf-page-indicator'; pageIndicator.textContent = '';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pdf-nav-button';
    nextBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 18l6-6-6-6"/></svg>';
    nav.appendChild(prevBtn); nav.appendChild(pageIndicator); nav.appendChild(nextBtn);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'pdf-close-btn'; closeBtn.innerHTML = '&times;';
    header.appendChild(nav); header.appendChild(closeBtn);

    // Canvas container
    const canvasContainer = document.createElement('div');
    canvasContainer.className = 'pdf-canvas-container';
    const canvas = document.createElement('canvas');
    canvas.className = 'pdf-canvas';
    canvasContainer.appendChild(canvas);

    content.appendChild(header);
    content.appendChild(canvasContainer);
    modal.appendChild(content);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    let pdf = null;
    let currentPage = 1;
    let totalPages = 0;

    function renderPage(pageNum) {
        pdf.getPage(pageNum).then(page => {
            // fit to container width while keeping aspect ratio
            const containerWidth = Math.min(canvasContainer.clientWidth, 640);
            const viewport = page.getViewport({ scale: 1 });
            const scale = containerWidth / viewport.width;
            const scaledViewport = page.getViewport({ scale });
            const context = canvas.getContext('2d');
            canvas.width = Math.floor(scaledViewport.width);
            canvas.height = Math.floor(scaledViewport.height);
            // clear previous
            context.clearRect(0, 0, canvas.width, canvas.height);
            const renderContext = {
                canvasContext: context,
                viewport: scaledViewport
            };
            page.render(renderContext);
            pageIndicator.textContent = currentPage + ' / ' + totalPages;
            // update nav button states
            prevBtn.disabled = currentPage <= 1;
            nextBtn.disabled = currentPage >= totalPages;
        }).catch(err => {
            console.error('Error rendering page', err);
        });
    }

    function cleanup() {
        if (pdf && pdf.destroy) pdf.destroy();
        if (modal && modal.parentNode) modal.parentNode.removeChild(modal);
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
        window.removeEventListener('resize', onResize);
    }

    function onKey(e) {
        if (e.key === 'Escape') cleanup();
        if (e.key === 'ArrowRight') { if (currentPage < totalPages) { currentPage++; renderPage(currentPage); } }
        if (e.key === 'ArrowLeft') { if (currentPage > 1) { currentPage--; renderPage(currentPage); } }
    }

    function onResize() {
        // re-render current page to adjust scale
        renderPage(currentPage);
    }

    // Wire up buttons
    prevBtn.addEventListener('click', function(e) { e.preventDefault(); if (currentPage > 1) { currentPage--; renderPage(currentPage); } });
    nextBtn.addEventListener('click', function(e) { e.preventDefault(); if (currentPage < totalPages) { currentPage++; renderPage(currentPage); } });
    closeBtn.addEventListener('click', cleanup);
    modal.addEventListener('click', function(e) { if (e.target === modal) cleanup(); });
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);

    // load Font Awesome and PDF.js, then render
    Promise.all([loadFontAwesome(), loadPdfJs()]).then(() => {
        const loadingTask = window.pdfjsLib.getDocument(url);
        loadingTask.promise.then(doc => {
            pdf = doc;
            totalPages = pdf.numPages;
            currentPage = 1;
            renderPage(currentPage);
        }).catch(err => {
            console.error('Error loading PDF', err);
            cleanup();
        });
    }).catch(err => {
        console.error('Failed to load PDF.js', err);
        cleanup();
    });
}

