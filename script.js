/**
 * CURATOR.HUB INTERACTIVE NETWORKS
 * Precision Dropdown Trigger and Mobile Canvas Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    // Structural DOM node references acquisition arrays
    const globalHeader = document.getElementById('globalHeader');
    const hamburgerTrigger = document.getElementById('hamburgerTrigger');
    const navMenu = document.getElementById('navMenu');
    const dropdownContainer = document.getElementById('homeDropdownContainer');
    const dropdownTrigger = document.getElementById('dropdownTrigger');

    /**
     * 1. CINEMATIC SCROLL INTERACTION MANAGEMENT ENGINE
     */
    const handleScrollReflow = () => {
        if (window.scrollY > 30) {
            globalHeader.classList.add('scrolled-navigation-state');
        } else {
            globalHeader.classList.remove('scrolled-navigation-state');
        }
    };

    window.addEventListener('scroll', handleScrollReflow, { passive: true });

    /**
     * 2. INTERACTIVE HAMBURGER MATRIX OVERLAY CONTROLLER
     */
    const toggleMobileMenuSystem = () => {
        const menuExpandedStatus = hamburgerTrigger.getAttribute('aria-expanded') === 'true';
        
        hamburgerTrigger.setAttribute('aria-expanded', !menuExpandedStatus);
        hamburgerTrigger.classList.toggle('active-cross-state');
        navMenu.classList.toggle('mobile-overlay-active-state');

        if (!menuExpandedStatus) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            // Reset panel toggle state on mobile navigation drawer close out
            if (dropdownContainer) {
                dropdownContainer.classList.remove('dropdown-open-state');
            }
        }
    };

    if (hamburgerTrigger) {
        hamburgerTrigger.addEventListener('click', toggleMobileMenuSystem);
    }

    /**
     * 3. SYMMETRICAL PRESS ARKMASK DROPDOWN TOGGLE ENGINE
     * Listens to explicitly toggle active classes on link / arrow pressed signals.
     */
    if (dropdownTrigger && dropdownContainer) {
        dropdownTrigger.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents instant collision event bubble loops
            dropdownContainer.classList.toggle('dropdown-open-state');
            console.log("[SYS] Dropdown display view state changed.");
        });
    }

    /**
     * 4. APP-WIDE DISMISSAL EDGE HANDSHAKE
     * Closes the interactive dropdown panel gracefully if the cursor selects peripheral space targets.
     */
    document.addEventListener('click', (event) => {
        if (dropdownContainer && dropdownContainer.classList.contains('dropdown-open-state')) {
            if (!dropdownContainer.contains(event.target)) {
                dropdownContainer.classList.remove('dropdown-open-state');
                console.log("[SYS] Panel dismissal safety check triggered.");
            }
        }
    });

    /**
     * 5. AUTOMATIC LINK TERMINATION DECK CLOSURE
     */
    if (navMenu) {
        const menuLinks = navMenu.querySelectorAll('.nav-link-token:not(.dropdown-trigger-bridge), .dropdown-text-stack li a');
        
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('mobile-overlay-active-state')) {
                    toggleMobileMenuSystem();
                }
            });
        });
    }
});










/**
 * 1. HIGH-STATUS DOUBLE-TAP INTERACTION INTERCEPTOR
 * Mimics native smartphone application behaviors, launching an interactive scale pop animation layer.
 * @param {HTMLElement} frameContainer - Target media asset shielding box context parameter
 */
function triggerHeartPop(frameContainer) {
    const heartPopLayer = frameContainer.querySelector('.double-tap-heart-pop');
    const bottomHeartBtn = frameContainer.nextElementSibling.querySelector('.left-action-vectors button:first-child');
    
    if (!heartPopLayer) return;

    // Trigger pop overlay animation loop cleanly
    heartPopLayer.classList.remove('animate-pop-flash');
    void heartPopLayer.offsetWidth; // Hardware reflow reset method hook
    heartPopLayer.classList.add('animate-pop-flash');

    // Automatically synchronize and active target action buttons state triggers list keys
    if (bottomHeartBtn && !bottomHeartBtn.classList.contains('liked-active-vector')) {
        toggleLike(bottomHeartBtn);
    }
}

/**
 * 2. STANDALONE METRIC ACTION TOGGLE HOOKS
 * Controls inline state storage swaps instantly for user engagement vectors.
 * @param {HTMLElement} btnTrigger - Target button element DOM identity block
 */
function toggleLike(btnTrigger) {
    btnTrigger.classList.toggle('liked-active-vector');
    const heartIcon = btnTrigger.querySelector('i');
    
    if (btnTrigger.classList.contains('liked-active-vector')) {
        heartIcon.className = 'fa-solid fa-heart';
    } else {
        heartIcon.className = 'fa-regular fa-heart';
    }
}

function toggleBookmark(btnTrigger) {
    btnTrigger.classList.toggle('bookmarked-active-vector');
    const bookmarkIcon = btnTrigger.querySelector('i');
    
    if (btnTrigger.classList.contains('bookmarked-active-vector')) {
        bookmarkIcon.className = 'fa-solid fa-bookmark';
    } else {
        bookmarkIcon.className = 'fa-regular fa-bookmark';
    }
}