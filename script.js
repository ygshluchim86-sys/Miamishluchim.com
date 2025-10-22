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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe program cards
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
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

// Stripe Integration
let stripe;
let isStripeLoaded = false;

// Initialize Stripe when the script loads
function initializeStripe() {
    if (typeof Stripe !== 'undefined') {
        // Replace with your actual Stripe publishable key
        const PUBLISHABLE_KEY = 'pk_test_51234567890abcdef'; // This needs to be replaced with actual key
        stripe = Stripe(PUBLISHABLE_KEY);
        isStripeLoaded = true;
        console.log('Stripe initialized successfully');
    } else {
        console.error('Stripe.js failed to load');
    }
}

// Wait for Stripe.js to load
if (typeof Stripe !== 'undefined') {
    initializeStripe();
} else {
    // Retry after a short delay
    setTimeout(initializeStripe, 1000);
}

// Handle donation button clicks
function handleDonate() {
    showDonationInfo();
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
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
        animation: fadeIn 0.3s ease-out;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 25px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        max-width: 450px;
        width: 95%;
        position: relative;
        animation: slideIn 0.3s ease-out;
        margin: 20px;
    `;
    
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
            filter: brightness(0) invert(1);
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
            .donation-link {
                padding: 16px 15px;
                font-size: 15px;
                margin: 10px 0;
            }
            .donation-link img {
                height: 22px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add content
modalContent.innerHTML = `
<button class="close-btn" onclick="this.closest('div[style*=\\"position: fixed\\"]').remove()">&times;</button>
<h2 class="modal-title">💙 Donate to YG Miami</h2>
<div class="modal-description">
    <p><strong>Thank you for supporting our mission!</strong></p>
    <p>Your generous donation helps us continue providing world-class Torah education and training the next generation of Jewish leaders.</p>
    <p>Choose your preferred payment method below:</p>
</div>
<a href="${cashAppLink}" target="_blank" class="donation-link cashapp">
    <img src="cashapp-svgrepo-com.svg" alt="CashApp">
    <span>CashApp</span>
</a>
<a href="${zelleLink}" target="_blank" class="donation-link zelle">
    <img src="Zelle®_id9eOrSaCY_0.svg" alt="Zelle">
    <span>Zelle</span>
</a>
<a href="${venmoLink}" target="_blank" class="donation-link venmo">
    <img src="idJSeSAGuH_1761083556509.png" alt="Venmo">
    <span>Venmo</span>
</a>
<a href="${paypalLink}" target="_blank" class="donation-link paypal">
    <img src="paypal.svg" alt="PayPal">
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

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

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

