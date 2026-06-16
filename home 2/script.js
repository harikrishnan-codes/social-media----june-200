// ==========================================================================
// STACKLY APPLICATION LUXURY INTERACTION CORE LOGIC
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SILKY INTRO PRESENTATION EFFECT
    // Triggers smooth CSS animation framework loop on navigation render
    const appHeaderNode = document.querySelector(".app-premium-header");
    if (appHeaderNode) {
        setTimeout(() => {
            appHeaderNode.style.opacity = "1";
            appHeaderNode.style.transform = "translateY(0)";
        }, 100);
    }

    // 2. RESPONSIVE CURTAIN SLATE MENU OPERATIONS
    const hamburgerBtn = document.getElementById("mobileHamburger");
    const navigationDeck = document.querySelector(".app-navigation-deck");

    if (hamburgerBtn && navigationDeck) {
        hamburgerBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle("hamburger-active");
            navigationDeck.classList.toggle("mobile-tray-active");
        });

        // Close overlay menu automatically if an internal nav link receives a touch event
        const trayLinks = document.querySelectorAll(".app-nav-link");
        trayLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburgerBtn.classList.remove("hamburger-active");
                navigationDeck.classList.remove("mobile-tray-active");
            });
        });

        // Outside Click Safe Boundary Protection Trap Logic
        document.addEventListener("click", (event) => {
            if (window.innerWidth <= 768 && navigationDeck.classList.contains("mobile-tray-active")) {
                if (!navigationDeck.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                    hamburgerBtn.classList.remove("hamburger-active");
                    navigationDeck.classList.remove("mobile-tray-active");
                }
            }
        });
    }
});










// ==========================================================================
    // 3. HIGH-FIDELITY FEED CARD MATRIX GESTURE CONTROLLERS
    // ==========================================================================
    const feedMediaDisplayFrame = document.getElementById("postMediaFrame");
    const interactionLikeIconButton = document.getElementById("likeButton");
    const centerAnimationHeartOverlay = document.querySelector(".center-heart-overlay");

    // Unified helper logic function to animate visual like updates
    function executeVisualLikeNotification() {
        if (!interactionLikeIconButton) return;
        
        interactionLikeIconButton.classList.add("liked-active-state");
        const heartIconVector = interactionLikeIconButton.querySelector("i");
        heartIconVector.className = "fa-solid fa-heart";

        // Native High-Velocity Web Animation sequence execution loop
        if (centerAnimationHeartOverlay) {
            centerAnimationHeartOverlay.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
                { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 1, offset: 0.5 },
                { transform: 'translate(-50%, -50%) scale(0.9)', opacity: 1, offset: 0.8 },
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 }
            ], {
                duration: 750,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
            });
        }
    }

    // Standard Individual Click Interaction Routine Track
    if (interactionLikeIconButton) {
        interactionLikeIconButton.addEventListener("click", function() {
            const innerVector = this.querySelector("i");
            this.classList.toggle("liked-active-state");
            
            if (this.classList.contains("liked-active-state")) {
                innerVector.className = "fa-solid fa-heart";
            } else {
                innerVector.className = "fa-regular fa-heart";
            }
        });
    }

    // High-Fidelity Double-Tap Gesture Engine Detection Loop
    if (feedMediaDisplayFrame) {
        let lastTouchDetectionTimestamp = 0;
        
        feedMediaDisplayFrame.addEventListener("click", () => {
            const currentClickTimestamp = new Date().getTime();
            const elapsedInteractionTimeGap = currentClickTimestamp - lastTouchDetectionTimestamp;

            // Trigger action instantly if a double-tap window falls within 300ms metric limits
            if (elapsedInteractionTimeGap < 300 && elapsedInteractionTimeGap > 0) {
                executeVisualLikeNotification();
            }
            lastTouchDetectionTimestamp = currentClickTimestamp;
        });
    }