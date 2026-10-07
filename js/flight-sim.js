/**
 * Space School: NASA Hardware & Planetary Heritage
 * Cinematic Rocket Flight Simulation Engine (Stage 3)
 * Multi-stage parallax launch, authentic NASA archival gallery, and Mr. Siuu narration
 */

class FlightSimulator {
  constructor() {
    this.activeMission = null;
    this.isFlying = false;
    this.flightTimeline = null;
    this.currentStage = 'ground'; // 'ground', 'stratosphere', 'space', 'orbit', 'cockpit'
  }

  /**
   * Starts the seamless cinematic flight sequence for a chosen mission
   */
  startFlightSequence(mission) {
    this.activeMission = mission;
    this.isFlying = true;

    const overlay = document.getElementById('flight-sim-overlay');
    if (!overlay) return;

    // Show simulation overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset simulator UI
    this.resetSimulationElements();

    // Update HUD info
    const hudMission = document.getElementById('hud-mission-name');
    const hudTarget = document.getElementById('hud-target-body');
    const hudYear = document.getElementById('hud-launch-year');
    if (hudMission) hudMission.textContent = mission.name;
    if (hudTarget) hudTarget.textContent = mission.body === 'Moon' ? '🌙 Moon' : '🔴 Mars';
    if (hudYear) hudYear.textContent = mission.year;

    // Set target planet appearance
    const targetPlanetEl = document.getElementById('flight-target-body');
    if (targetPlanetEl) {
      targetPlanetEl.className = `target-celestial-body ${mission.body.toLowerCase()}`;
    }

    // Play countdown & launch sequence
    this.runCountdownAndLaunch();
  }

  resetSimulationElements() {
    const cockpit = document.getElementById('mission-cockpit-view');
    const flightScene = document.getElementById('flight-parallax-scene');
    const countdownEl = document.getElementById('flight-countdown-display');
    const rocket = document.getElementById('sim-flight-rocket');
    const groundLayer = document.getElementById('layer-ground');
    const cloudLayer = document.getElementById('layer-clouds');
    const spaceLayer = document.getElementById('layer-space');
    const orbitLayer = document.getElementById('layer-orbit');

    if (cockpit) cockpit.classList.remove('active');
    if (flightScene) flightScene.style.display = 'block';
    if (countdownEl) countdownEl.style.display = 'flex';

    if (typeof gsap !== 'undefined') {
      gsap.set(rocket, { y: 0, scale: 1, rotation: 0, opacity: 1 });
      gsap.set(groundLayer, { y: 0, opacity: 1 });
      gsap.set(cloudLayer, { y: 800, opacity: 0 });
      gsap.set(spaceLayer, { y: 1200, opacity: 0 });
      gsap.set(orbitLayer, { y: 1000, opacity: 0 });
    }
  }

  runCountdownAndLaunch() {
    const countText = document.getElementById('countdown-number');
    const statusText = document.getElementById('hud-stage-status');
    const flameGroup = document.getElementById('rocket-exhaust-flames');

    if (statusText) statusText.textContent = "T-Minus 3 Seconds to Liftoff";

    let count = 3;
    if (countText) countText.textContent = count;

    if (window.spaceAudio) {
      window.spaceAudio.playLaunchTone(false);
    }

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        if (countText) countText.textContent = count;
        if (window.spaceAudio) window.spaceAudio.playLaunchTone(false);
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(countText, { scale: 1.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });
        }
      } else if (count === 0) {
        if (countText) countText.textContent = "LIFTOFF!";
        if (statusText) statusText.textContent = "Main Engine Ignition & Liftoff!";
        if (window.spaceAudio) {
          window.spaceAudio.playLaunchTone(true);
          window.spaceAudio.playRocketIgnition(5.0);
        }
        clearInterval(interval);

        // Turn on flame animation
        if (flameGroup) flameGroup.classList.add('ignited');

        // Launch rocket & transition parallax layers
        setTimeout(() => {
          const countdownBox = document.getElementById('flight-countdown-display');
          if (countdownBox && typeof gsap !== 'undefined') {
            gsap.to(countdownBox, { opacity: 0, duration: 0.4, onComplete: () => countdownBox.style.display = 'none' });
          }
          this.executeParallaxAscent();
        }, 800);
      }
    }, 1000);
  }

  executeParallaxAscent() {
    if (typeof gsap === 'undefined') {
      this.showMissionCockpit();
      return;
    }

    const rocket = document.getElementById('sim-flight-rocket');
    const groundLayer = document.getElementById('layer-ground');
    const cloudLayer = document.getElementById('layer-clouds');
    const spaceLayer = document.getElementById('layer-space');
    const orbitLayer = document.getElementById('layer-orbit');
    const hudStatus = document.getElementById('hud-stage-status');
    const hudAltitude = document.getElementById('hud-telemetry-altitude');
    const hudSpeed = document.getElementById('hud-telemetry-speed');

    this.flightTimeline = gsap.timeline();

    // 1. Stage 1: Ground Launch (0 to 1.8s)
    this.flightTimeline
      .to(rocket, {
        y: -120,
        duration: 1.8,
        ease: "power2.in",
        onUpdate: () => {
          const prog = this.flightTimeline.progress();
          if (hudAltitude) hudAltitude.textContent = `${Math.floor(prog * 35)} km`;
          if (hudSpeed) hudSpeed.textContent = `${Math.floor(prog * 3200)} km/h`;
        }
      })
      .to(groundLayer, {
        y: 600,
        opacity: 0,
        duration: 1.6,
        ease: "power1.in"
      }, "<0.2")

    // 2. Stage 2: Stratosphere & Cloud Punch (1.6s to 3.4s)
      .call(() => {
        if (hudStatus) hudStatus.textContent = "Passing through Stratosphere";
        if (window.spaceAudio) window.spaceAudio.playWhoosh();
      })
      .to(cloudLayer, {
        y: -300,
        opacity: 1,
        duration: 1.8,
        ease: "none"
      }, "-=0.2")
      .to(rocket, {
        y: -180,
        scale: 0.9,
        duration: 1.8,
        ease: "none",
        onUpdate: () => {
          const prog = this.flightTimeline.progress();
          if (hudAltitude) hudAltitude.textContent = `${Math.floor(35 + prog * 120)} km`;
          if (hudSpeed) hudSpeed.textContent = `${Math.floor(3200 + prog * 14000)} km/h`;
        }
      }, "<")

    // 3. Stage 3: Deep Outer Space (3.4s to 5.2s)
      .call(() => {
        if (hudStatus) hudStatus.textContent = `Interplanetary Transfer (${this.activeMission.travelDuration})`;
        if (window.spaceAudio) {
          window.spaceAudio.playWhoosh();
          window.spaceAudio.startAmbientSpaceHum();
        }
      })
      .to(spaceLayer, {
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out"
      }, "-=0.2")
      .to(cloudLayer, {
        y: 800,
        opacity: 0,
        duration: 1.2
      }, "<")
      .to(rocket, {
        y: -140,
        scale: 0.75,
        rotation: 6,
        duration: 1.8,
        ease: "power1.inOut",
        onUpdate: () => {
          const prog = this.flightTimeline.progress();
          if (hudAltitude) hudAltitude.textContent = `${Math.floor(155 + prog * 80000)} km`;
          if (hudSpeed) hudSpeed.textContent = `${Math.floor(17200 + prog * 22000)} km/h`;
        }
      }, "<")

    // 4. Stage 4: Orbital Arrival at Target Body (5.2s to 6.8s)
      .call(() => {
        if (hudStatus) hudStatus.textContent = `Arrived at ${this.activeMission.body}! Orbital Insertion Complete`;
        if (window.spaceAudio) {
          window.spaceAudio.playArrivalChime();
        }
      })
      .to(orbitLayer, {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power2.out"
      }, "-=0.2")
      .to(rocket, {
        y: -80,
        scale: 0.65,
        rotation: 0,
        duration: 1.6,
        ease: "power2.out"
      }, "<")

    // 5. Transition into Mission Cockpit
      .call(() => {
        setTimeout(() => {
          this.showMissionCockpit();
        }, 600);
      });
  }

  /**
   * Configures the Parallax Space scene to the orbital arrival & landing state (matching Picture 2)
   */
  configureArrivedLandingBackdrop(mission) {
    const flightScene = document.getElementById('flight-parallax-scene');
    const groundLayer = document.getElementById('layer-ground');
    const cloudLayer = document.getElementById('layer-clouds');
    const spaceLayer = document.getElementById('layer-space');
    const orbitLayer = document.getElementById('layer-orbit');
    const countdownBox = document.getElementById('flight-countdown-display');
    const rocket = document.getElementById('sim-flight-rocket');
    const flameGroup = document.getElementById('rocket-exhaust-flames');
    const targetPlanetEl = document.getElementById('flight-target-body');

    if (flightScene) flightScene.style.display = 'block';
    if (countdownBox) countdownBox.style.display = 'none';
    if (flameGroup) flameGroup.classList.remove('ignited');

    // Configure celestial body (Moon for Moon missions, Mars for Mars missions)
    if (targetPlanetEl) {
      targetPlanetEl.className = `target-celestial-body ${mission.body.toLowerCase()}`;
    }

    // Telemetry HUD matching the arrival / landing state
    const hudMission = document.getElementById('hud-mission-name');
    const hudTarget = document.getElementById('hud-target-body');
    const hudYear = document.getElementById('hud-launch-year');
    const hudStatus = document.getElementById('hud-stage-status');
    const hudAltitude = document.getElementById('hud-telemetry-altitude');
    const hudSpeed = document.getElementById('hud-telemetry-speed');

    if (hudMission) hudMission.textContent = mission.name;
    if (hudTarget) hudTarget.textContent = mission.body === 'Moon' ? '🌙 Moon' : '🔴 Mars';
    if (hudYear) hudYear.textContent = mission.year;
    if (hudStatus) hudStatus.textContent = `Arrived at ${mission.body}! Orbital Insertion Complete`;
    if (hudAltitude) hudAltitude.textContent = mission.body === 'Moon' ? '62655 km' : '384000 km';
    if (hudSpeed) hudSpeed.textContent = mission.body === 'Moon' ? '34387 km/h' : '45120 km/h';

    // Position background layers in landed / orbit arrival state (matches 2nd picture)
    if (typeof gsap !== 'undefined') {
      gsap.set(groundLayer, { opacity: 0, y: 800 });
      gsap.set(cloudLayer, { opacity: 0, y: 800 });
      gsap.set(spaceLayer, { opacity: 1, y: 0 });
      gsap.set(orbitLayer, { opacity: 1, y: 0 });
      gsap.set(rocket, { y: -80, scale: 0.65, rotation: 0, opacity: 0.95 });
    } else {
      if (groundLayer) groundLayer.style.display = 'none';
      if (cloudLayer) cloudLayer.style.display = 'none';
      if (spaceLayer) spaceLayer.style.opacity = '1';
      if (orbitLayer) orbitLayer.style.opacity = '1';
    }
  }

  /**
   * Displays the comprehensive Mission Cockpit & Hardware Inspector
   */
  showMissionCockpit() {
    const flightScene = document.getElementById('flight-parallax-scene');
    const cockpit = document.getElementById('mission-cockpit-view');

    // Keep the space landing backdrop visible behind the cockpit view!
    if (flightScene) {
      flightScene.style.display = 'block';
      this.configureArrivedLandingBackdrop(this.activeMission);
    }
    if (!cockpit) return;

    cockpit.classList.add('active');

    // Populate Mission Details
    const mission = this.activeMission;

    // 1. Mission Header
    document.getElementById('cockpit-mission-title').textContent = mission.name;
    document.getElementById('cockpit-mission-year').textContent = `${mission.year} • ${mission.type}`;
    document.getElementById('cockpit-body-chip').innerHTML = mission.body === 'Moon' ? '🌙 Moon Explorer' : '🔴 Mars Explorer';
    
    const statusPill = document.getElementById('cockpit-status-pill');
    if (statusPill) {
      statusPill.textContent = mission.status;
      statusPill.className = `cockpit-status-tag ${mission.statusCategory}`;
    }

    // 2. Authentic NASA Archival Photo Integration
    const nasaImg = document.getElementById('cockpit-nasa-img');
    const nasaCaption = document.getElementById('cockpit-nasa-caption');
    const nasaIdTag = document.getElementById('cockpit-nasa-id');
    const nasaFullLink = document.getElementById('cockpit-nasa-full-link');

    if (nasaImg) {
      nasaImg.src = mission.nasaImage;
      nasaImg.alt = `${mission.name} - ${mission.nasaTitle}`;
      nasaImg.onerror = () => {
        nasaImg.src = 'https://images-assets.nasa.gov/image/PIA02975/PIA02975~small.jpg';
      };
    }
    if (nasaCaption) {
      nasaCaption.textContent = mission.nasaTitle;
    }
    if (nasaIdTag) {
      nasaIdTag.textContent = `Official NASA Catalog ID: ${mission.nasaId}`;
    }
    if (nasaFullLink) {
      nasaFullLink.href = mission.nasaImage;
    }

    // 3. Mr. Siuu's Enlarged Mascot & Dedicated Audio Starting Button
    const fullStory = `Welcome aboard! The year is ${mission.year.split('-')[0]}. We have reached our destination: the ${mission.body}! It took us ${mission.travelDuration} to journey here. ${mission.story} NASA hardware left here includes: ${mission.hardware}. Current heritage status: ${mission.status}. Let's inspect each engineering component below!`;

    // Embed enlarged Mr. Siuu SVG avatar
    const avatarSlot = document.getElementById('cockpit-siuu-avatar-slot');
    if (avatarSlot && window.mrSiuu) {
      avatarSlot.innerHTML = window.mrSiuu.getSvgMarkup('cockpit-siuu', true);
      window.mrSiuu.initAnimations('cockpit-siuu');
    }

    // Configure Audio Starting Button
    const speechBtn = document.getElementById('cockpit-listen-btn');
    const audioIcon = document.getElementById('cockpit-audio-icon');
    const audioLabel = document.getElementById('cockpit-audio-label');
    const audioWaves = document.getElementById('cockpit-audio-waves');

    const updateAudioButton = (isPlaying) => {
      if (speechBtn) {
        if (isPlaying) {
          speechBtn.classList.add('playing');
          if (audioIcon) audioIcon.textContent = '⏸';
          if (audioLabel) audioLabel.textContent = 'Pause Audio Narration';
          if (audioWaves) audioWaves.style.display = 'inline-flex';
        } else {
          speechBtn.classList.remove('playing');
          if (audioIcon) audioIcon.textContent = '▶';
          if (audioLabel) audioLabel.textContent = 'Start Audio Narration';
          if (audioWaves) audioWaves.style.display = 'none';
        }
      }
    };

    updateAudioButton(false);

    if (speechBtn) {
      speechBtn.onclick = () => {
        if (window.mrSiuu) {
          if (window.mrSiuu.isSpeaking) {
            window.mrSiuu.stopSpeech('cockpit-siuu');
            updateAudioButton(false);
          } else {
            updateAudioButton(true);
            window.mrSiuu.speak(fullStory, 'cockpit-siuu', null, () => {
              updateAudioButton(false);
            });
          }
        }
      };
    }

    // 4. Interactive Hardware Deep-Dive Blueprint List
    const hwListContainer = document.getElementById('cockpit-hardware-breakdown');
    if (hwListContainer && mission.hardwareDeepDive) {
      hwListContainer.innerHTML = mission.hardwareDeepDive.map((hw, idx) => `
        <div class="blueprint-hw-card glass-panel" data-hw-index="${idx}">
          <div class="blueprint-hw-header">
            <span class="blueprint-hw-badge">Component #${idx + 1}</span>
            <h4 class="blueprint-hw-name">${hw.name}</h4>
          </div>
          <p class="blueprint-hw-func"><strong>Scientific Purpose:</strong> ${hw.function}</p>
          <p class="blueprint-hw-heritage"><strong>Heritage on Surface/Orbit:</strong> ${hw.heritage}</p>
        </div>
      `).join('');
    }

    // 5. Initialize 4-Question Interactive Mission Mastery Quiz
    this.initMissionQuiz(mission);

    // 6. Update Collect Heritage Stamp Button State
    const stampBtn = document.getElementById('cockpit-collect-stamp-btn');
    if (stampBtn && window.quizAndLogbook) {
      const isCollected = window.quizAndLogbook.hasCollectedStamp(mission.id);
      if (isCollected) {
        stampBtn.innerHTML = `✅ Heritage Stamp in Logbook`;
        stampBtn.classList.add('collected');
      } else {
        stampBtn.innerHTML = `⭐ Collect Heritage Stamp in Logbook`;
        stampBtn.classList.remove('collected');
      }
    }

    // Auto-scroll cockpit to top
    cockpit.scrollTop = 0;

    // Animate cockpit entrance
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(cockpit.querySelector('.cockpit-layout-grid'),
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }

  /**
   * Initializes the 4-question quiz for the active mission
   */
  initMissionQuiz(mission) {
    this.quizState = {
      missionId: mission.id,
      questions: mission.quiz || [],
      currentIndex: 0,
      score: 0,
      answers: [null, null, null, null],
      completed: false
    };
    this.renderMissionQuiz();
  }

  /**
   * Renders the interactive 4-question quiz card
   */
  renderMissionQuiz() {
    const quizBody = document.getElementById('cockpit-quiz-body');
    const scorePill = document.getElementById('cockpit-quiz-score-pill');
    const stepsContainer = document.getElementById('cockpit-quiz-steps');
    if (!quizBody || !this.quizState || !this.quizState.questions.length) return;

    const { questions, currentIndex, score, answers, completed } = this.quizState;

    if (scorePill) {
      scorePill.textContent = `Score: ${score} / ${questions.length}`;
    }

    // Update step dots Q1 to Q4
    if (stepsContainer) {
      stepsContainer.innerHTML = questions.map((_, i) => {
        let statusClass = '';
        if (answers[i] !== null) {
          statusClass = answers[i] === questions[i].answerIndex ? ' answered-correct' : ' answered-wrong';
        } else if (i === currentIndex && !completed) {
          statusClass = ' active';
        }
        return `<span class="quiz-step-dot${statusClass}" data-q="${i}">Q${i + 1}</span>`;
      }).join('');
    }

    if (completed) {
      const percentage = Math.round((score / questions.length) * 100);
      let trophy = '🏆';
      let title = 'Flawless Mission Specialist!';
      let msg = `Remarkable work! You scored ${score}/${questions.length} (100%) on ${this.activeMission.name}. You are an elite NASA planetary historian!`;

      if (score === 3) {
        trophy = '🌟';
        title = 'Excellent Mission Explorer!';
        msg = `Great job! You scored 3/${questions.length} (75%). You have thoroughly investigated ${this.activeMission.name}!`;
      } else if (score < 3) {
        trophy = '🚀';
        title = 'Good Training Attempt!';
        msg = `You scored ${score}/${questions.length}. Review the onboard hardware above and retake the quiz to master this mission!`;
      }

      // Auto collect stamp if >= 3
      let stampEarnedMsg = '';
      if (score >= 3 && window.quizAndLogbook) {
        const added = window.quizAndLogbook.collectStamp(this.activeMission);
        if (added) {
          stampEarnedMsg = '<div class="quiz-stamp-awarded-alert">⭐ Heritage Stamp unlocked and added to your Student Logbook!</div>';
          const stampBtn = document.getElementById('cockpit-collect-stamp-btn');
          if (stampBtn) {
            stampBtn.innerHTML = `✅ Heritage Stamp in Logbook`;
            stampBtn.classList.add('collected');
          }
        }
      }

      quizBody.innerHTML = `
        <div class="cockpit-quiz-results">
          <div class="quiz-results-trophy">${trophy}</div>
          <h4 class="quiz-results-title">${title}</h4>
          <div class="quiz-results-score-badge">${score} / ${questions.length} Correct (${percentage}%)</div>
          <p class="quiz-results-desc">${msg}</p>
          ${stampEarnedMsg}
          <div class="quiz-results-btns">
            <button class="quiz-retake-btn" onclick="flightSimulator.retakeMissionQuiz()">
              🔄 Retake Quiz
            </button>
            <button class="quiz-logbook-view-btn" onclick="window.quizAndLogbook?.openModal('stamps')">
              📘 View in Logbook
            </button>
          </div>
        </div>
      `;
      return;
    }

    // Render active question
    const q = questions[currentIndex];
    const userAnswer = answers[currentIndex];
    const isAnswered = userAnswer !== null;

    let optionsHtml = q.options.map((opt, optIdx) => {
      let optClass = 'quiz-opt-btn';
      if (isAnswered) {
        if (optIdx === q.answerIndex) {
          optClass += ' is-correct';
        } else if (optIdx === userAnswer) {
          optClass += ' is-wrong';
        } else {
          optClass += ' is-disabled';
        }
      }
      const optLetter = ['A', 'B', 'C', 'D'][optIdx];
      return `
        <button class="${optClass}" data-opt-idx="${optIdx}" ${isAnswered ? 'disabled' : ''} onclick="flightSimulator.answerMissionQuiz(${optIdx})">
          <span class="quiz-opt-letter">${optLetter}</span>
          <span class="quiz-opt-text">${opt}</span>
        </button>
      `;
    }).join('');

    let feedbackHtml = '';
    if (isAnswered) {
      const isRight = userAnswer === q.answerIndex;
      feedbackHtml = `
        <div class="cockpit-quiz-feedback ${isRight ? 'correct' : 'wrong'}">
          <div class="quiz-feedback-title">${isRight ? '✅ Correct Answer!' : '❌ Incorrect'}</div>
          <p class="quiz-feedback-fact"><strong>Scientific Fact:</strong> ${q.explanation}</p>
          <div class="quiz-next-row">
            ${currentIndex < questions.length - 1 ? `
              <button class="quiz-next-btn" onclick="flightSimulator.nextMissionQuizQuestion()">
                Next Question ▶
              </button>
            ` : `
              <button class="quiz-next-btn finish-btn" onclick="flightSimulator.finishMissionQuiz()">
                View Quiz Results 🏆
              </button>
            `}
          </div>
        </div>
      `;
    }

    quizBody.innerHTML = `
      <div class="cockpit-quiz-card">
        <div class="quiz-question-meta">Question ${currentIndex + 1} of ${questions.length}</div>
        <h4 class="quiz-question-text">${q.question}</h4>
        <div class="quiz-options-list">
          ${optionsHtml}
        </div>
        ${feedbackHtml}
      </div>
    `;
  }

  /**
   * Handle student's option selection
   */
  answerMissionQuiz(optIdx) {
    if (!this.quizState || this.quizState.completed) return;
    const { questions, currentIndex, answers } = this.quizState;
    if (answers[currentIndex] !== null) return;

    answers[currentIndex] = optIdx;
    const isCorrect = optIdx === questions[currentIndex].answerIndex;
    if (isCorrect) {
      this.quizState.score++;
      if (window.spaceAudio) window.spaceAudio.playArrivalChime();
    } else {
      if (window.spaceAudio) window.spaceAudio.playClick();
    }

    this.renderMissionQuiz();
  }

  /**
   * Advance to the next question
   */
  nextMissionQuizQuestion() {
    if (!this.quizState) return;
    if (this.quizState.currentIndex < this.quizState.questions.length - 1) {
      this.quizState.currentIndex++;
      this.renderMissionQuiz();
    }
  }

  /**
   * Finish the 4-question quiz
   */
  finishMissionQuiz() {
    if (!this.quizState) return;
    this.quizState.completed = true;
    if (this.quizState.score >= 3 && window.spaceAudio) {
      window.spaceAudio.playArrivalChime();
    }
    this.renderMissionQuiz();
  }

  /**
   * Retake the quiz for this mission
   */
  retakeMissionQuiz() {
    if (!this.activeMission) return;
    this.initMissionQuiz(this.activeMission);
  }

  /**
   * Fast jump to Cockpit view without re-running launch animation
   */
  showCockpitDirectly(mission) {
    this.activeMission = mission;
    this.isFlying = true;

    const overlay = document.getElementById('flight-sim-overlay');
    if (!overlay) return;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Configure the space landing backdrop (matches Picture 2)
    this.configureArrivedLandingBackdrop(mission);

    this.showMissionCockpit();
  }

  /**
   * Closes flight simulation and returns to Mission Timeline
   */
  closeFlightSimulation() {
    if (window.spaceAudio) {
      window.spaceAudio.playClick();
      window.spaceAudio.stopAmbientSpaceHum();
    }
    if (window.mrSiuu) {
      window.mrSiuu.stopSpeech('cockpit-siuu');
    }

    const overlay = document.getElementById('flight-sim-overlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
    document.body.style.overflow = '';
    this.isFlying = false;

    if (this.flightTimeline) {
      this.flightTimeline.kill();
      this.flightTimeline = null;
    }
  }

  /**
   * Skip to next or previous mission
   */
  navigateMission(direction) {
    if (!this.activeMission) return;
    const missions = window.timelineApp?.missions || [];
    const filtered = missions.filter(m => m.body.toLowerCase() === this.activeMission.body.toLowerCase());
    const currentIndex = filtered.findIndex(m => m.id === this.activeMission.id);
    if (currentIndex === -1) return;

    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = filtered.length - 1;
    if (newIndex >= filtered.length) newIndex = 0;

    const nextMission = filtered[newIndex];
    if (window.mrSiuu) window.mrSiuu.stopSpeech('cockpit-siuu');
    this.showCockpitDirectly(nextMission);
  }

  collectActiveStamp() {
    if (!this.activeMission || !window.quizAndLogbook) return;
    const stampBtn = document.getElementById('cockpit-collect-stamp-btn');
    const wasAdded = window.quizAndLogbook.collectStamp(this.activeMission);

    if (wasAdded && stampBtn) {
      stampBtn.innerHTML = `✅ Heritage Stamp in Logbook`;
      stampBtn.classList.add('collected');
    }
  }
}

// Global simulation engine
window.flightSimulator = new FlightSimulator();
