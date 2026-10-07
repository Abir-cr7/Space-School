/**
 * Space School: NASA Hardware & Planetary Heritage
 * Main Application Coordinator (App.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Mr. Siuu character in the Home Page launchpad centerpiece
  const siuuCenterpiece = document.getElementById('siuu-home-centerpiece');
  if (siuuCenterpiece && window.mrSiuu) {
    siuuCenterpiece.innerHTML = window.mrSiuu.getSvgMarkup('home-siuu', true);
    window.mrSiuu.initAnimations('home-siuu');
  }

  // Audio description controller
  const homeListenBtn = document.getElementById('home-siuu-listen-btn');
  const homeStatusLabel = document.getElementById('home-siuu-status-label');
  const welcomeSpeech = "Greetings, space explorers! I'm Mr. Siuu, your flight director. Since 1964, NASA has placed amazing rovers, scientific labs, and landers on the Moon and Mars. Choose your destination below to inspect their historic hardware!";

  let speechHasStarted = false;

  function updateSpeakingUI(isSpeaking) {
    if (homeListenBtn) {
      homeListenBtn.classList.toggle('speaking', isSpeaking);
    }
    if (siuuCenterpiece) {
      siuuCenterpiece.classList.toggle('speaking', isSpeaking);
    }
    if (homeStatusLabel) {
      homeStatusLabel.textContent = isSpeaking
        ? '🔊 Mr. Siuu Speaking • Click to Pause'
        : '🔊 Listen to Mr. Siuu (Flight Director)';
    }
  }

  function playWelcomeNarration() {
    if (!window.mrSiuu) return;
    if (window.mrSiuu.isSpeaking) return;

    speechHasStarted = true;
    updateSpeakingUI(true);

    window.mrSiuu.speak(
      welcomeSpeech,
      'home-siuu',
      () => {
        updateSpeakingUI(true);
      },
      () => {
        updateSpeakingUI(false);
      }
    );
  }

  function pauseWelcomeNarration() {
    if (window.mrSiuu) {
      window.mrSiuu.stopSpeech('home-siuu');
      updateSpeakingUI(false);
    }
  }

  function toggleWelcomeNarration() {
    if (window.mrSiuu && window.mrSiuu.isSpeaking) {
      pauseWelcomeNarration();
    } else {
      playWelcomeNarration();
    }
  }

  if (homeListenBtn) {
    homeListenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWelcomeNarration();
    });
  }

  if (siuuCenterpiece) {
    siuuCenterpiece.addEventListener('click', () => {
      toggleWelcomeNarration();
    });
    siuuCenterpiece.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleWelcomeNarration();
      }
    });
  }

  // Automatic Start of Audio Description on Website Open
  // Attempt immediate playback after short init delay
  setTimeout(() => {
    playWelcomeNarration();
  }, 400);

  // Fallback for browsers requiring a user gesture before Web Speech API or Audio playback
  const unlockEvents = ['pointerdown', 'click', 'keydown', 'touchstart'];
  const onFirstInteraction = () => {
    if (!speechHasStarted || (window.mrSiuu && !window.mrSiuu.isSpeaking)) {
      playWelcomeNarration();
    }
    unlockEvents.forEach(evt => window.removeEventListener(evt, onFirstInteraction));
  };
  unlockEvents.forEach(evt => {
    window.addEventListener(evt, onFirstInteraction, { once: true, passive: true });
  });

  // 2. Audio Control in Header
  const audioBtn = document.getElementById('header-audio-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (window.spaceAudio) {
        const isMuted = window.spaceAudio.toggleMute();
        audioBtn.classList.toggle('muted', isMuted);
        const label = audioBtn.querySelector('.audio-btn-label');
        if (label) label.textContent = isMuted ? 'Sound: OFF' : 'Sound: ON';
        if (isMuted && window.mrSiuu) {
          window.mrSiuu.stopSpeech('home-siuu');
          updateSpeakingUI(false);
        }
      }
    });
  }

  // First click anywhere to unlock Web Audio API
  document.addEventListener('click', () => {
    if (window.spaceAudio) window.spaceAudio.init();
  }, { once: true });

  // 3. Destination Selector Cards (Stage 1 -> Stage 2)
  const moonCard = document.getElementById('dest-card-moon');
  const marsCard = document.getElementById('dest-card-mars');

  if (moonCard) {
    moonCard.addEventListener('click', () => {
      switchDestination('Moon');
    });
    moonCard.addEventListener('mouseenter', () => {
      if (window.spaceAudio) window.spaceAudio.playHover();
    });
  }

  if (marsCard) {
    marsCard.addEventListener('click', () => {
      switchDestination('Mars');
    });
    marsCard.addEventListener('mouseenter', () => {
      if (window.spaceAudio) window.spaceAudio.playHover();
    });
  }

  function switchDestination(dest) {
    if (window.spaceAudio) window.spaceAudio.playClick();
    if (window.timelineApp) {
      window.timelineApp.setDestination(dest);
    }

    const homeStage = document.getElementById('stage-home');
    const timelineStage = document.getElementById('stage-timeline');

    if (homeStage && timelineStage) {
      homeStage.classList.add('hidden');
      timelineStage.classList.remove('hidden');

      // Update destination toggle pills
      document.querySelectorAll('.dest-toggle-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.dest === dest);
      });

      // Smooth scroll to timeline top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Trigger Mr. Siuu's destination quote
      const quote = window.mrSiuu?.getRandomQuote(dest.toLowerCase());
      const quoteBox = document.getElementById('timeline-siuu-quote');
      if (quoteBox && quote) {
        quoteBox.textContent = `Mr. Siuu: "${quote}"`;
      }
    }
  }

  // 4. Return to Launchpad (Home) Button
  const backToHomeBtn = document.getElementById('back-to-home-btn');
  if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', () => {
      if (window.spaceAudio) window.spaceAudio.playClick();
      const homeStage = document.getElementById('stage-home');
      const timelineStage = document.getElementById('stage-timeline');
      if (homeStage && timelineStage) {
        timelineStage.classList.add('hidden');
        homeStage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // 5. Destination Switcher in Timeline Header
  document.querySelectorAll('.dest-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dest = e.currentTarget.dataset.dest;
      switchDestination(dest);
    });
  });

  // 6. Filter Controls in Timeline
  // Decade Filter Chips
  document.querySelectorAll('.filter-decade-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      if (window.spaceAudio) window.spaceAudio.playClick();
      document.querySelectorAll('.filter-decade-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (window.timelineApp) {
        window.timelineApp.activeDecade = chip.dataset.value;
        window.timelineApp.render();
      }
    });
  });

  // Category Filter Chips
  document.querySelectorAll('.filter-cat-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      if (window.spaceAudio) window.spaceAudio.playClick();
      document.querySelectorAll('.filter-cat-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (window.timelineApp) {
        window.timelineApp.activeCategory = chip.dataset.value;
        window.timelineApp.render();
      }
    });
  });

  // Search input live filtering
  const searchInput = document.getElementById('mission-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      if (window.timelineApp) {
        window.timelineApp.searchQuery = e.target.value;
        window.timelineApp.render();
      }
    });
  }

  // 7. Navigation bar direct links
  const navHome = document.getElementById('nav-link-home');
  const navMoon = document.getElementById('nav-link-moon');
  const navMars = document.getElementById('nav-link-mars');
  const navLogbook = document.getElementById('nav-link-logbook');
  const navQuiz = document.getElementById('nav-link-quiz');

  if (navHome) {
    navHome.addEventListener('click', () => {
      if (window.spaceAudio) window.spaceAudio.playClick();
      const homeStage = document.getElementById('stage-home');
      const timelineStage = document.getElementById('stage-timeline');
      if (homeStage && timelineStage) {
        timelineStage.classList.add('hidden');
        homeStage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  if (navMoon) {
    navMoon.addEventListener('click', () => switchDestination('Moon'));
  }
  if (navMars) {
    navMars.addEventListener('click', () => switchDestination('Mars'));
  }
  if (navLogbook) {
    navLogbook.addEventListener('click', () => {
      if (window.quizAndLogbook) window.quizAndLogbook.openLogbookModal();
    });
  }
  if (navQuiz) {
    navQuiz.addEventListener('click', () => {
      if (window.quizAndLogbook) window.quizAndLogbook.openQuizModal();
    });
  }

  // Initial render of timeline
  if (window.timelineApp) {
    window.timelineApp.render();
  }

  // Initial logbook update
  if (window.quizAndLogbook) {
    window.quizAndLogbook.updateLogbookUI();
  }
});
