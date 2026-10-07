/**
 * Space School: NASA Hardware & Planetary Heritage
 * Student Flight Logbook & Planetary Heritage Quiz
 */

class QuizAndLogbook {
  constructor() {
    this.collectedStamps = this.loadCollectedStamps();
    this.quizQuestions = [
      {
        question: "What historic task did the Ranger 7, 8, and 9 impact probes achieve before crashing onto the Moon in 1964–1965?",
        options: [
          "They brought Moon rocks back into ocean splashdown",
          "They transmitted over 17,000 close-up photos of lunar craters to prepare safe Apollo landings",
          "They planted a giant radio antenna to speak to alien worlds",
          "They dug a 1-mile deep tunnel under the lunar surface"
        ],
        answerIndex: 1,
        explanation: "Ranger transmitted thousands of sharp TV photos right up until the final second before impact, proving the Moon's surface was not covered in impassable dust!"
      },
      {
        question: "In 1997, NASA deployed the microwave-sized 'Sojourner' at Ares Vallis. What major historic milestone was this?",
        options: [
          "The first time humans lived on Mars",
          "The first successful Mars flyby in history",
          "The very first wheeled robotic rover ever driven on another planet",
          "The first spaceship to return soil from Mars"
        ],
        answerIndex: 2,
        explanation: "Sojourner was humanity's first rover on Mars! It rolled on 6 wheels to sniff rocks with its Alpha Proton X-Ray Spectrometer."
      },
      {
        question: "Why do Apollo Lunar Module descent stages, rover buggies, and astronaut footprints remain intact on the Moon for millions of years?",
        options: [
          "Because the Moon has no atmosphere, no wind, and no rain to erode them away",
          "Because robots constantly clean and varnish the hardware",
          "Because the Moon is completely frozen inside a protective magnetic bubble",
          "Because NASA covered the entire Moon in protective plastic sheets"
        ],
        answerIndex: 0,
        explanation: "With no atmospheric weather or liquid water on the Moon, these artifacts remain frozen in time as eternal planetary heritage monuments!"
      },
      {
        question: "In 2008, what did the Phoenix Mars Lander discover when its robotic arm scooped the soil near Mars' arctic north pole?",
        options: [
          "Fossilized dinosaur bones",
          "Real subsurface water ice that vaporized into the thin atmosphere",
          "Gold nuggets buried inside the sand",
          "Active volcanic molten lava"
        ],
        answerIndex: 1,
        explanation: "Phoenix dug up genuine water ice just inches under the reddish soil, proving that the Martian arctic holds vast frozen reservoirs!"
      },
      {
        question: "Which historic rotorcraft accompanied the Perseverance rover to Mars in 2020 and completed 72 powered flights in the thin Martian air?",
        options: [
          "Orion Capsule",
          "Sputnik 1",
          "Ingenuity Mars Helicopter",
          "Viking 1 Lander"
        ],
        answerIndex: 2,
        explanation: "Ingenuity became humanity's first powered aircraft on another planet, proving controlled flight is possible even in air only 1% as thick as Earth's!"
      }
    ];

    this.currentQuestionIndex = 0;
    this.quizScore = 0;
    this.quizAnswered = false;
  }

  loadCollectedStamps() {
    try {
      const saved = localStorage.getItem('space_school_stamps');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveCollectedStamps() {
    try {
      localStorage.setItem('space_school_stamps', JSON.stringify(this.collectedStamps));
    } catch (e) {}
  }

  hasCollectedStamp(missionId) {
    return this.collectedStamps.some(s => s.id === missionId);
  }

  collectStamp(mission) {
    if (this.hasCollectedStamp(mission.id)) return false;

    this.collectedStamps.push({
      id: mission.id,
      name: mission.name,
      year: mission.year,
      body: mission.body,
      type: mission.type,
      collectedAt: new Date().toLocaleDateString()
    });

    this.saveCollectedStamps();
    this.updateLogbookUI();

    if (window.spaceAudio) {
      window.spaceAudio.playBadgeUnlock();
    }
    this.triggerConfetti();
    return true;
  }

  updateLogbookUI() {
    const countEl = document.getElementById('logbook-stamp-count');
    const totalEl = document.getElementById('logbook-stamp-total');
    const progressBar = document.getElementById('logbook-progress-fill');
    const stampsGrid = document.getElementById('logbook-stamps-grid');

    const totalMissions = (window.timelineApp?.missions?.length) || 25;
    const collectedCount = this.collectedStamps.length;

    if (countEl) countEl.textContent = collectedCount;
    if (totalEl) totalEl.textContent = totalMissions;
    if (progressBar) {
      const pct = Math.round((collectedCount / totalMissions) * 100);
      progressBar.style.width = `${pct}%`;
    }

    if (!stampsGrid) return;

    if (collectedCount === 0) {
      stampsGrid.innerHTML = `
        <div class="empty-stamps-state">
          <div class="empty-stamp-icon">🚀</div>
          <h4>Your Flight Logbook is Empty</h4>
          <p>Board missions to the Moon or Mars and click "Collect Heritage Stamp" to fill your planetary passport!</p>
        </div>
      `;
      return;
    }

    stampsGrid.innerHTML = this.collectedStamps.map(stamp => `
      <div class="stamp-passport-card ${stamp.body.toLowerCase()} glass-panel">
        <div class="stamp-ring">
          <span class="stamp-dest-icon">${stamp.body === 'Moon' ? '🌙' : '🔴'}</span>
          <span class="stamp-name">${stamp.name}</span>
          <span class="stamp-date">${stamp.collectedAt}</span>
        </div>
        <div class="stamp-footer">
          <span class="stamp-type-chip">${stamp.type}</span>
        </div>
      </div>
    `).join('');
  }

  openLogbookModal() {
    if (window.spaceAudio) window.spaceAudio.playClick();
    const modal = document.getElementById('logbook-modal');
    if (modal) {
      this.updateLogbookUI();
      modal.classList.add('active');
    }
  }

  closeLogbookModal() {
    if (window.spaceAudio) window.spaceAudio.playClick();
    const modal = document.getElementById('logbook-modal');
    if (modal) modal.classList.remove('active');
  }

  /* --- QUIZ SYSTEM --- */
  openQuizModal() {
    if (window.spaceAudio) window.spaceAudio.playClick();
    const modal = document.getElementById('quiz-modal');
    if (modal) {
      this.currentQuestionIndex = 0;
      this.quizScore = 0;
      this.renderCurrentQuestion();
      modal.classList.add('active');
    }
  }

  closeQuizModal() {
    if (window.spaceAudio) window.spaceAudio.playClick();
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.classList.remove('active');
  }

  renderCurrentQuestion() {
    const q = this.quizQuestions[this.currentQuestionIndex];
    const qNumEl = document.getElementById('quiz-question-num');
    const qTotalEl = document.getElementById('quiz-question-total');
    const qTextEl = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options-container');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const nextBtn = document.getElementById('quiz-next-btn');

    this.quizAnswered = false;

    if (qNumEl) qNumEl.textContent = this.currentQuestionIndex + 1;
    if (qTotalEl) qTotalEl.textContent = this.quizQuestions.length;
    if (qTextEl) qTextEl.textContent = q.question;
    if (feedbackBox) {
      feedbackBox.className = 'quiz-feedback-box hidden';
      feedbackBox.innerHTML = '';
    }
    if (nextBtn) nextBtn.style.display = 'none';

    if (optionsContainer) {
      optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <button class="quiz-option-btn glass-panel" onclick="quizAndLogbook.selectAnswer(${idx})" id="quiz-opt-${idx}">
          <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
          <span class="option-text">${opt}</span>
        </button>
      `).join('');
    }
  }

  selectAnswer(selectedIdx) {
    if (this.quizAnswered) return;
    this.quizAnswered = true;

    const q = this.quizQuestions[this.currentQuestionIndex];
    const isCorrect = selectedIdx === q.answerIndex;
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const nextBtn = document.getElementById('quiz-next-btn');

    // Highlight selected & correct options
    const selectedBtn = document.getElementById(`quiz-opt-${selectedIdx}`);
    const correctBtn = document.getElementById(`quiz-opt-${q.answerIndex}`);

    if (isCorrect) {
      this.quizScore++;
      if (selectedBtn) selectedBtn.classList.add('correct');
      if (window.spaceAudio) window.spaceAudio.playQuizCorrect();
      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback-box correct';
        feedbackBox.innerHTML = `
          <div class="feedback-title">🎉 That's Correct!</div>
          <p>${q.explanation}</p>
        `;
      }
    } else {
      if (selectedBtn) selectedBtn.classList.add('wrong');
      if (correctBtn) correctBtn.classList.add('correct');
      if (window.spaceAudio) window.spaceAudio.playQuizIncorrect();
      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback-box wrong';
        feedbackBox.innerHTML = `
          <div class="feedback-title">💡 Good Try!</div>
          <p>${q.explanation}</p>
        `;
      }
    }

    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.textContent = this.currentQuestionIndex < this.quizQuestions.length - 1 ? 'Next Question →' : 'See Final Score 🏆';
    }
  }

  nextQuestion() {
    if (window.spaceAudio) window.spaceAudio.playClick();
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.quizQuestions.length) {
      this.renderCurrentQuestion();
    } else {
      this.renderQuizResults();
    }
  }

  renderQuizResults() {
    const card = document.getElementById('quiz-card-content');
    if (!card) return;

    if (window.spaceAudio) window.spaceAudio.playArrivalChime();
    this.triggerConfetti();

    card.innerHTML = `
      <div class="quiz-results-screen">
        <div class="quiz-trophy-badge">🏆</div>
        <h3>Mission Accomplished, Explorer!</h3>
        <p class="quiz-score-highlight">You scored ${this.quizScore} out of ${this.quizQuestions.length} correct!</p>
        <p class="quiz-congrats-text">
          Mr. Siuu says: "Remarkable work! You have mastered the history of NASA's robotic explorers, lunar landers, and planetary heritage."
        </p>
        <div class="quiz-results-actions">
          <button class="pill-btn primary" onclick="quizAndLogbook.openQuizModal()">Retake Quiz</button>
          <button class="pill-btn secondary" onclick="quizAndLogbook.closeQuizModal()">Return to Space School</button>
        </div>
      </div>
    `;
  }

  triggerConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-wrapper';
    document.body.appendChild(confettiContainer);

    const colors = ['#FF5A36', '#FF8C42', '#34D399', '#60A5FA', '#F3E8D8'];
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-particle';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = `-20px`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      confettiContainer.appendChild(piece);

      if (typeof gsap !== 'undefined') {
        gsap.to(piece, {
          y: window.innerHeight + 100,
          x: `+=${(Math.random() - 0.5) * 200}`,
          rotation: Math.random() * 720,
          duration: 2 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (i === 39) confettiContainer.remove();
          }
        });
      }
    }
  }
}

// Global quiz and logbook singleton
window.quizAndLogbook = new QuizAndLogbook();
