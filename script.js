// ==========================================================================
// Zomato Clone - script.js
// Front-end interactivity & animations
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. Hero entrance animation
       Adds .animate-in to logo, heading and search bar so the CSS
       keyframe animations (dropIn / fadeUp) play on load.
    ---------------------------------------------------------------------- */
    const heroLogo = document.querySelector('section.hero img');
    const heroText = document.querySelector('section.hero p');
    const heroInput = document.querySelector('section.hero input');

    [heroLogo, heroText, heroInput].forEach((el) => {
        if (el) el.classList.add('animate-in');
    });

    /* ----------------------------------------------------------------------
       2. Sticky header shrink-on-scroll effect
       Toggles a .scrolled class (styled in CSS) once the page
       scrolls past a small threshold.
    ---------------------------------------------------------------------- */
    const header = document.querySelector('header');
    const SCROLL_THRESHOLD = 40;

    const handleScroll = () => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load in case page is refreshed mid-scroll

    /* ----------------------------------------------------------------------
       3. Animated placeholder text (typing effect) for the search bar
    ---------------------------------------------------------------------- */
    if (heroInput) {
        const placeholders = [
            'Search for restaurants, cuisine or a dish',
            'Try "Biryani" near you',
            'Try "Pizza" near you',
            'Try "Chinese" near you',
            'Search for restaurants, cuisine or a dish'
        ];

        let placeholderIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const TYPE_SPEED = 60;
        const DELETE_SPEED = 30;
        const HOLD_DELAY = 1400;

        function typePlaceholder() {
            const current = placeholders[placeholderIndex];

            if (!isDeleting) {
                charIndex++;
                heroInput.setAttribute('placeholder', current.slice(0, charIndex));

                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(typePlaceholder, HOLD_DELAY);
                    return;
                }
            } else {
                charIndex--;
                heroInput.setAttribute('placeholder', current.slice(0, charIndex));

                if (charIndex === 0) {
                    isDeleting = false;
                    placeholderIndex = (placeholderIndex + 1) % placeholders.length;
                }
            }

            setTimeout(typePlaceholder, isDeleting ? DELETE_SPEED : TYPE_SPEED);
        }

        // Only auto-animate the placeholder while the input isn't focused,
        // so it doesn't distract a user who is actively typing.
        let typingStarted = false;

        function startTyping() {
            if (!typingStarted) {
                typingStarted = true;
                charIndex = placeholders[0].length; // first phrase already shown statically
                setTimeout(typePlaceholder, HOLD_DELAY);
            }
        }

        heroInput.addEventListener('focus', () => {
            isDeleting = true; // clear whatever is typed out
        });

        startTyping();
    }

    /* ----------------------------------------------------------------------
       4. Simple ripple / press feedback on nav buttons and search input
    ---------------------------------------------------------------------- */
    const clickableEls = document.querySelectorAll('header ul li a, main input');

    clickableEls.forEach((el) => {
        el.addEventListener('mousedown', () => {
            el.style.transform = 'scale(0.97)';
        });
        el.addEventListener('mouseup', () => {
            el.style.transform = '';
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });

    /* ----------------------------------------------------------------------
       5. Basic search submit handling (Enter key)
       Prevents default form-less navigation and logs / could be wired
       up to a real search endpoint later.
    ---------------------------------------------------------------------- */
    if (heroInput) {
        heroInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = heroInput.value.trim();
                if (query.length > 0) {
                    console.log('Searching for:', query);
                    // TODO: hook this up to an actual search/results page
                    alert(`Searching for "${query}"...`);
                }
            }
        });
    }

});