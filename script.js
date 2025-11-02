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

        // Wire up donate buttons
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

// Handle donation button clicks
function handleDonate() {
    window.open('https://charidy.com/miamishluchim', '_blank');
}

// Donation Modal
function showDonationModal() {
    // Donation links
    const cashAppLink = 'https://cash.app/$MMendelMarkel';
    const venmoLink = 'https://venmo.com/code?user_id=4344283796604636665&created=1761083061';
    const paypalLink = 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mendelmarkel13@gmail.com';

    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Fundraiser options');

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = `
        <button class="close-btn" aria-label="Close modal">&times;</button>
        <h2 class="modal-title">Fundraiser for <br> The Shluchim Of YG Miami</h2>
        <div class="modal-description">
            <p><strong>Thank you for supporting our mission!</strong></p>
            <p>We are currently working on adding our online donation platform. Until then, you can donate using one of the methods below:</p>
            <p>If you have any questions or would like to donate for a specific purpose, please email us at <a href="mailto:YGShluchim@gmail.com">YGShluchim@Gmail.com</a>.</p>
        </div>
        <a href="${cashAppLink}" target="_blank" rel="noopener noreferrer" class="donation-link cashapp">
            <img src="Images/cashapp-svgrepo-com.svg" alt="Cash App">
            <span>CashApp</span>
        </a>
        <a href="https://zellepay.com/send?recipient=3472205998" target="_blank" rel="noopener noreferrer" class="donation-link zelle">
            <img src="Images/Zelle®_id9eOrSaCY_0.svg" alt="Zelle">
            <span>Zelle 347-220-5998</span>
        </a>
        <a href="${venmoLink}" target="_blank" rel="noopener noreferrer" class="donation-link venmo" aria-label="Donate with Venmo">
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Venmo" role="img" viewBox="0 0 512 512" width="28" height="28">
                <rect width="512" height="512" rx="15%" fill="#3396cd"/>
                <path d="m381.4 105.3c11 18.1 15.9 36.7 15.9 60.3 0 75.1-64.1 172.7-116.2 241.2h-118.8l-47.6-285 104.1-9.9 25.3 202.8c23.5-38.4 52.6-98.7 52.6-139.7 0-22.5-3.9-37.8-9.9-50.4z" fill="#ffffff"/>
            </svg>
            <span>Venmo</span>
        </a>
        <a href="${paypalLink}" target="_blank" rel="noopener noreferrer" class="donation-link paypal" aria-label="Donate with PayPal">
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="#0070BA"/>
                <path d="M32.3305 18.0977C32.3082 18.24 32.2828 18.3856 32.2542 18.5351C31.2704 23.5861 27.9046 25.331 23.606 25.331H21.4173C20.8916 25.331 20.4486 25.7127 20.3667 26.2313L19.2461 33.3381L18.9288 35.3527C18.8755 35.693 19.1379 36 19.4815 36H23.3634C23.8231 36 24.2136 35.666 24.286 35.2127L24.3241 35.0154L25.055 30.3772L25.1019 30.1227C25.1735 29.6678 25.5648 29.3338 26.0245 29.3338H26.6051C30.3661 29.3338 33.3103 27.8068 34.1708 23.388C34.5303 21.5421 34.3442 20.0008 33.393 18.9168C33.1051 18.59 32.748 18.3188 32.3305 18.0977Z" fill="white" fill-opacity="0.6"/>
                <path d="M31.3009 17.6871C31.1506 17.6434 30.9955 17.6036 30.8364 17.5678C30.6766 17.5328 30.5127 17.5018 30.3441 17.4748C29.754 17.3793 29.1074 17.334 28.4147 17.334H22.5676C22.4237 17.334 22.2869 17.3666 22.1644 17.4254C21.8948 17.5551 21.6944 17.8104 21.6459 18.1229L20.402 26.0013L20.3662 26.2311C20.4481 25.7126 20.8911 25.3308 21.4168 25.3308H23.6055C27.9041 25.3308 31.2699 23.5851 32.2537 18.5349C32.2831 18.3854 32.3078 18.2398 32.33 18.0975C32.0811 17.9655 31.8115 17.8525 31.5212 17.7563C31.4496 17.7324 31.3757 17.7094 31.3009 17.6871Z" fill="white" fill-opacity="0.8"/>
                <path d="M21.6461 18.1231C21.6946 17.8105 21.895 17.5552 22.1646 17.4264C22.2879 17.3675 22.4239 17.3349 22.5678 17.3349H28.4149C29.1077 17.3349 29.7542 17.3803 30.3444 17.4757C30.513 17.5027 30.6768 17.5338 30.8367 17.5687C30.9957 17.6045 31.1508 17.6443 31.3011 17.688C31.3759 17.7103 31.4498 17.7334 31.5222 17.7564C31.8125 17.8527 32.0821 17.9664 32.331 18.0976C32.6237 16.231 32.3287 14.9601 31.3194 13.8093C30.2068 12.5424 28.1986 12 25.629 12H18.169C17.6441 12 17.1963 12.3817 17.1152 12.9011L14.0079 32.5969C13.9467 32.9866 14.2473 33.3381 14.6402 33.3381H19.2458L20.4022 26.0014L21.6461 18.1231Z" fill="white"/>
            </svg>
            <span>PayPal</span>
        </a>
    `;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const restoreScroll = () => { document.body.style.overflow = ''; };
    document.body.style.overflow = 'hidden';

    const cleanup = () => {
        restoreScroll();
        modal.remove();
        document.removeEventListener('keydown', onKey);
    };

    const onKey = (e) => { if (e.key === 'Escape') cleanup(); };

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) { if (e.target === modal) cleanup(); });
    // Close modal with Escape key
    document.addEventListener('keydown', onKey);
    // Close modal when clicking the close button
    const closeBtn = modalContent.querySelector('.close-btn');
    if (closeBtn) closeBtn.addEventListener('click', cleanup);
}

// Form validation and interactions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// Expose for reuse and to satisfy linters if referenced externally
// eslint-disable-next-line no-undef
window.validateEmail = validateEmail;

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
                        // Use provided observer param to avoid unused warnings
                        observer.unobserve(img);
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
            // eslint-disable-next-line no-console
            console.warn('Failed to load image:', this.src);
            // You could add a placeholder image here
            // this.src = 'placeholder.jpg';
        });
    });
});

// Open PDF preview in an inline modal for reading
document.addEventListener('click', function(e) {
    const link = e.target.closest('a.pdf-view');
    if (!link) return;
    e.preventDefault();
    const url = link.getAttribute('href');
    const title = link.dataset.title || 'Newsletter';
    if (url) showPdfModal(url, title);
});
// (PDF modal implementation is defined below)

function showPdfModal(url, title) {
    // Ensure Font Awesome is loaded (icons already referenced in CSS too)
    function loadFontAwesome() {
        return new Promise((resolve, reject) => {
            if (document.querySelector('link[href*="font-awesome"]')) return resolve();
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
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
            script.onload = () => {
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
    modal.setAttribute('role', 'dialog');
    if (title) modal.setAttribute('aria-label', `PDF preview: ${title}`);
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
    pageIndicator.className = 'pdf-page-indicator';
    pageIndicator.textContent = '';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pdf-nav-button';
    nextBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 18l6-6-6-6"/></svg>';
    nav.appendChild(prevBtn);
    nav.appendChild(pageIndicator);
    nav.appendChild(nextBtn);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'pdf-close-btn';
    closeBtn.innerHTML = '&times;';
    header.appendChild(nav);
    header.appendChild(closeBtn);

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
            const containerWidth = Math.min(canvasContainer.clientWidth, 640);
            const viewport = page.getViewport({ scale: 1 });
            const scale = containerWidth / viewport.width;
            const scaledViewport = page.getViewport({ scale });
            const context = canvas.getContext('2d');
            canvas.width = Math.floor(scaledViewport.width);
            canvas.height = Math.floor(scaledViewport.height);
            context.clearRect(0, 0, canvas.width, canvas.height);
            const renderContext = {
                canvasContext: context,
                viewport: scaledViewport
            };
            page.render(renderContext);
            pageIndicator.textContent = currentPage + ' / ' + totalPages;
            prevBtn.disabled = currentPage <= 1;
            nextBtn.disabled = currentPage >= totalPages;
        }).catch(err => {
            // eslint-disable-next-line no-console
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
        renderPage(currentPage);
    }

    // Wire up buttons
    prevBtn.addEventListener('click', function(e) { e.preventDefault(); if (currentPage > 1) { currentPage--; renderPage(currentPage); } });
    nextBtn.addEventListener('click', function(e) { e.preventDefault(); if (currentPage < totalPages) { currentPage++; renderPage(currentPage); } });
    closeBtn.addEventListener('click', cleanup);
    modal.addEventListener('click', function(e) { if (e.target === modal) cleanup(); });
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);

    // Load Font Awesome and PDF.js, then render
    Promise.all([loadFontAwesome(), loadPdfJs()]).then(() => {
        const loadingTask = window.pdfjsLib.getDocument(url);
        loadingTask.promise.then(doc => {
            pdf = doc;
            totalPages = pdf.numPages;
            currentPage = 1;
            renderPage(currentPage);
        }).catch(err => {
            // eslint-disable-next-line no-console
            console.error('Error loading PDF', err);
            cleanup();
        });
    }).catch(err => {
        // eslint-disable-next-line no-console
        console.error('Failed to load PDF.js', err);
        cleanup();
    });
}

// Donation Progress Functionality
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('donationSection');
    const progressText = document.getElementById('progressText');
    const track = section ? section.querySelector('.progress-track') : null;
    const fill = section ? section.querySelector('.progress-fill') : null;
    const recentDonationsList = document.getElementById('recentDonationsList');
    const donationGoal = 67000; // $67,000 goal

    if (!section || !progressText || !track || !fill || !recentDonationsList) return;

    // Persistence helpers
    const STORAGE_KEY = 'donations';
    const loadSaved = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : null;
        } catch (_) { return null; }
    };
    const save = (list) => {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (_) { /* ignore */ }
    };

    // Start with saved donations if available and non-empty; otherwise use defaults
    const defaultDonations = [
        { name: 'Yerach', amount: 101 },
        { name: 'Sruly and Chaya Avtzon', amount: 100 },
        { name: 'Faigy and Mendel', amount: 100 },
        { name: 'Tova Fogel', amount: 100 },
        { name: 'Berel & Shternie Hazan', amount: 75 },
        { name: 'Mendel & Liba Stock', amount: 100 },
        { name: 'Brocha Friedman', amount: 36 },
        { name: 'Zalman and Nechama Duchman', amount: 36 },
        { name: 'Mendy & Chaya Mushka Labkowski', amount: 54 },
        { name: 'Tenenbaum fam', amount: 25 },
        { name: 'Benzion & Musia Stock', amount: 360 },
        { name: 'Anonymous', amount: 18 },
        { name: 'Chavi', amount: 100 },
        { name: 'Menashe Aronov', amount: 36 },
        { name: 'Menashe Aronov', amount: 36 },
        { name: 'Mendel & Esti Mochkin', amount: 770 },
        { name: 'Anonymous', amount: 100 },
        { name: 'Anonymous', amount: 250 },
        { name: 'Shlomo Weinman', amount: 36 },
        { name: 'Shimmy Tenenbaum', amount: 18 },
        { name: 'Shalom and Shana Wolf', amount: 100 },
        { name: 'Anonymous', amount: 36 },
        { name: 'Mendel Reiter', amount: 36 },
        { name: 'Ariel and Sophia Licht', amount: 54 },
        { name: 'Levi Finck', amount: 36 },
        { name: 'Anonymous', amount: 68 },
        { name: 'Michelle P', amount: 100 },
        { name: 'Meir Hochhauser', amount: 25 },
        { name: 'Shlomo Amar', amount: 50 },
        { name: 'Anonymous', amount: 18 },
        { name: 'Mendy and Kreinie Paltiel', amount: 36 },
        { name: 'Ron Morali', amount: 54 },
        { name: 'Rabbi Shlomo Chaim Kesselman', amount: 180 },
        { name: 'Chana Rivka & Dovid Novack', amount: 108 },
        { name: 'Menachem Wilmowsky', amount: 36 },
        { name: 'Chaim\'s Proud Parents', amount: 770 },
        { name: 'Rabbi Leib Schapiro', amount: 50 },
        { name: 'Anonymous', amount: 36 },
        { name: 'Delta Electrical Contractors INC', amount: 100 },
        { name: 'Ma and Ta', amount: 100 },
        { name: 'Michoel Rotenberg', amount: 36 },
        { name: 'Yossel Vaisfiche', amount: 20 },
        { name: 'Chana Schapiro', amount: 36 },
        { name: 'Shimon Rivkin', amount: 54 },
        { name: 'Yossel Vaisfiche', amount: 20 },
        { name: 'Yossel Vaisfiche', amount: 20 },
        { name: 'Menachem Freeman', amount: 18 },
        { name: 'Barash Family', amount: 36 },
        { name: 'Shmulie Grossbaum', amount: 1 },
        { name: 'Cheely Fogel', amount: 50 },
        { name: 'Shmuel', amount: 18 },
        { name: 'Moshe and Shaina Schwartz', amount: 36 },
        { name: 'Anonymous Anonymous', amount: 18 },
        { name: 'Ari Kay', amount: 18 },
        { name: 'Anonymous', amount: 36 },
        { name: 'Susan Bard', amount: 180 },
        { name: 'Levi and Sara Y. Schapiro', amount: 36 },
        { name: 'Yaakov Fogel', amount: 100 },
        { name: 'Yossi Sasonkin', amount: 2 },
        { name: 'Yossi Sasonkin', amount: 2 },
        { name: 'David-Emmanuel Cohen', amount: 200 },
        { name: 'Fitche Lubin', amount: 5 },
        { name: 'Pinchus and Dinie Rapoport', amount: 100 },
        { name: 'Mendel Markel', amount: 100 },
        { name: 'Yossi Sasonkin', amount: 5 },
        { name: 'Isaac Hertz', amount: 100 },
        { name: 'Leah and Nochum Kurinsky', amount: 36 },
        { name: 'Yossi Sasonkin', amount: 40 },
        { name: 'Anonymous', amount: 50 },
        { name: 'Mendel Fogel', amount: 108 },
        { name: 'Shmulie Grossbaum', amount: 1 },
        { name: 'Boruch Star', amount: 56 },
        { name: 'The Rich Uncle', amount: 54 },
        { name: 'Yossi Hirsch', amount: 18 },
        { name: 'Berel Minsky', amount: 18 },
        { name: 'Menachem Forer', amount: 180 },
        { name: 'Peretz', amount: 18 }
    ];
    const savedDonations = loadSaved();
    let donations = (Array.isArray(savedDonations) && savedDonations.length > 0) ? savedDonations : defaultDonations;

    const formatUSD = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    const getTotal = () => donations.reduce((sum, d) => sum + d.amount, 0);

    const animateNumber = (el, from, to, duration = 700) => {
        const start = performance.now();
        const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const val = Math.round(from + (to - from) * p);
            const pct = Math.min(100, Math.round((val / donationGoal) * 100));
            el.textContent = `${formatUSD(val)} of ${formatUSD(donationGoal)} • ${pct}%`;
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    // Render the top donations as an in-place wheel (top 5)
    const updateRecent = () => {
        // If there's an existing wheel track, stop it before rebuilding
        const existingTrack = recentDonationsList.querySelector('.donation-wheel-track');
        if (existingTrack) stopDonationWheel(existingTrack);

        recentDonationsList.innerHTML = `
            <div class="donations-wheel" tabindex="0" aria-label="Top donations wheel">
                <div class="donation-wheel-track"></div>
            </div>
        `;
        const trackEl = recentDonationsList.querySelector('.donation-wheel-track');
        // Show all donations in the wheel, but we'll size the viewport to show 5 at a time
        const top = donations.slice().sort((a, b) => b.amount - a.amount);
        top.forEach(d => {
            const item = document.createElement('div');
            item.className = 'donation-wheel-item';
            item.innerHTML = `<span class="donor-name">${d.name}</span><span class="donation-amount">${formatUSD(d.amount)}</span>`;
            trackEl.appendChild(item);
        });
        startDonationWheel(trackEl);
    };

    const renderProgress = (animate = true) => {
        const total = getTotal();
        const pct = Math.min((total / donationGoal) * 100, 100);

        track.setAttribute('aria-valuemin', '0');
        track.setAttribute('aria-valuemax', String(donationGoal));
        track.setAttribute('aria-valuenow', String(total));

        if (animate) {
            requestAnimationFrame(() => { fill.style.width = `${pct}%`; });
            const currentText = progressText.textContent || '';
            const match = currentText.match(/\$([\d,]+)/);
            const current = match ? Number(match[1].replace(/,/g, '')) : 0;
            animateNumber(progressText, current, total);
        } else {
            fill.style.width = `${pct}%`;
            progressText.textContent = `${formatUSD(total)} of ${formatUSD(donationGoal)} • ${Math.round(pct)}%`;
            // Update remaining text if present
            const remEl = document.getElementById('remainingText');
            if (remEl) {
                const rem = Math.max(0, donationGoal - total);
                remEl.textContent = `Remaining: ${formatUSD(rem)}`;
            }
        }
    };

    const startWhenVisible = () => {
        if (!('IntersectionObserver' in window)) {
            renderProgress(true);
            updateRecent();
            return;
        }
        const io = new IntersectionObserver((entries, obs) => {
            if (entries.some(e => e.isIntersecting)) {
                renderProgress(true);
                updateRecent();
                obs.disconnect();
            }
        }, { threshold: 0.3 });
        io.observe(section);
    };

    // Admin: add manual donations and persist
    const addDonation = (name, amount) => {
        const trimmed = String(name || '').trim() || 'Anonymous';
        const num = Number(amount);
        if (!Number.isFinite(num) || num <= 0) return false;
        donations.push({ name: trimmed, amount: Math.round(num) });
        save(donations);
        updateRecent();
        renderProgress(true);
        return true;
    };

    // Optional reset to defaults
    const clearDonations = () => {
        donations = [
            { name: 'Anonymous', amount: 1500 },
            { name: 'Yosef Cohen', amount: 1000 },
            { name: 'Sarah Levi', amount: 250 } ,
        
        ];
        save(donations);
        updateRecent();
        renderProgress(false);
    };

    // Expose helpers for quick console use
    window.addDonation = addDonation;
    window.clearDonations = clearDonations;

    // Inline admin form when ?admin=1 is present
    const params = new URLSearchParams(window.location.search);
    if (params.has('admin')) {
        const container = document.createElement('div');
        container.className = 'manual-donation-container';
        container.innerHTML = `
            <form class="donation-form" id="donationAdminForm">
                <label for="donorName">Donor name</label>
                <input id="donorName" type="text" placeholder="Anonymous" autocomplete="name" />
                <label for="donationAmount">Amount (USD)</label>
                <input id="donationAmount" type="number" min="1" step="1" placeholder="100" />
                <div style="display:flex; gap:10px; justify-content:center;">
                    <button type="submit" class="btn btn-primary">Add Donation</button>
                    <button type="button" id="resetDonations" class="btn btn-secondary">Reset Defaults</button>
                </div>
                <p style="color:#fff; opacity:0.8; font-size:0.9rem; text-align:center; margin-top:8px;">Data is saved to this browser only.</p>
            </form>
        `;
        section.appendChild(container);
        const form = container.querySelector('#donationAdminForm');
        const nameInput = container.querySelector('#donorName');
        const amountInput = container.querySelector('#donationAmount');
        const resetBtn = container.querySelector('#resetDonations');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const ok = addDonation(nameInput.value, amountInput.value);
            if (ok) {
                nameInput.value = '';
                amountInput.value = '';
                amountInput.focus();
            }
        });
        resetBtn.addEventListener('click', () => {
            clearDonations();
        });
    }

    // Initialize UI (set text immediately; animate progress when section becomes visible)
    fill.style.width = '0%';
    updateRecent();
    // Ensure the numbers are not stuck at $0 before scrolling
    renderProgress(false);
    startWhenVisible();

    // Wire the 'expand all donations' arrow/button to show inline expanded list
    const openAllBtn = section.querySelector('#openAllDonations');
    const expandedEl = section.querySelector('#donationsExpanded');
    if (openAllBtn && recentDonationsList) {
        openAllBtn.setAttribute('aria-expanded', 'false');
        openAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const wheelTrack = recentDonationsList.querySelector('.donation-wheel-track');
            const isWheelOpen = !!wheelTrack;
            if (isWheelOpen) {
                // collapse: stop wheel and restore static top-5 list
                stopDonationWheel(wheelTrack);
                updateRecent();
                openAllBtn.setAttribute('aria-expanded', 'false');
                openAllBtn.classList.remove('open');
            } else {
                // expand: replace the small top-5 list with a vertical donations wheel (in-place)
                // build wheel
                recentDonationsList.innerHTML = `
                    <div class="donations-wheel" tabindex="0" aria-label="Top donations wheel">
                        <div class="donation-wheel-track"></div>
                    </div>
                `;
                const trackEl = recentDonationsList.querySelector('.donation-wheel-track');
                const top = donations.slice().sort((a, b) => b.amount - a.amount).slice(0, 5);
                top.forEach(d => {
                    const item = document.createElement('div');
                    item.className = 'donation-wheel-item';
                    item.innerHTML = `<span class="donor-name">${d.name}</span><strong class="donation-amount">${formatUSD(d.amount)}</strong>`;
                    trackEl.appendChild(item);
                });
                startDonationWheel(trackEl);
                openAllBtn.setAttribute('aria-expanded', 'true');
                openAllBtn.classList.add('open');
                const wheelContainer = recentDonationsList.querySelector('.donations-wheel'); if (wheelContainer) wheelContainer.focus();
            }
        });
    }

    // Vertical donations wheel: manual scroll implementation (user-controlled)
    function startDonationWheel(trackEl) {
        if (!trackEl) return;
        // stop any existing wheel on this element
        stopDonationWheel(trackEl);

        const container = trackEl.closest('.donations-wheel');
        const items = Array.from(trackEl.children);
        if (!container || items.length === 0) return;

        // Make the container scrollable and enable scroll snapping.
        // We'll compute the maxHeight so exactly 5 items are visible (or fewer if there are <5 items).
        container.style.overflowY = 'auto';
        container.style.scrollSnapType = 'y mandatory';
        items.forEach(i => { i.style.scrollSnapAlign = 'start'; });

        // Compute sizing after layout so offsetHeight is available.
        requestAnimationFrame(() => {
            const VISIBLE_COUNT = 5;
            const gap = 8; // approximate gap between items (matches CSS spacing)
            const visible = Math.min(items.length, VISIBLE_COUNT);
            const itemH = (items[0] && items[0].offsetHeight) ? items[0].offsetHeight : 44;
            const maxH = (itemH * visible) + (gap * (visible - 1));
            container.style.maxHeight = `${maxH}px`;
        });

        // Keyboard support: ArrowUp/ArrowDown to move one item
        const onKey = (e) => {
            if (e.key === 'ArrowDown') {
                const h = (items[0] && items[0].offsetHeight) || 48;
                container.scrollBy({ top: h + 8, behavior: 'smooth' });
                e.preventDefault();
            }
            if (e.key === 'ArrowUp') {
                const h = (items[0] && items[0].offsetHeight) || 48;
                container.scrollBy({ top: -(h + 8), behavior: 'smooth' });
                e.preventDefault();
            }
        };

        container.addEventListener('keydown', onKey);

        // store cleanup references
        trackEl._donationWheel = { onKey, container };
    }

    function stopDonationWheel(trackEl) {
        if (!trackEl || !trackEl._donationWheel) return;
        const { onKey, container } = trackEl._donationWheel;
        if (container && onKey) container.removeEventListener('keydown', onKey);
        delete trackEl._donationWheel;
    }
});