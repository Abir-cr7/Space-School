/**
 * Space School: NASA Hardware & Planetary Heritage
 * Character Controller: "Mr. Siuu"
 * Friendly 2D vector-animated cartoon space scientist.
 * Warm, wise, and enthusiastic educator.
 */

class MrSiuuCharacter {
  constructor() {
    this.speechSynth = window.speechSynthesis || null;
    this.currentUtterance = null;
    this.isSpeaking = false;
    this.activeVoice = null;
    this.initVoices();
  }

  initVoices() {
    if (!this.speechSynth) return;
    const loadVoices = () => {
      const voices = this.speechSynth.getVoices();
      if (voices && voices.length > 0) {
        this.activeVoice = voices.find(v => v.lang && v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David') || v.name.includes('Zira') || v.name.includes('Jenny') || v.name.includes('Guy'))) || voices.find(v => v.lang && v.lang.startsWith('en')) || voices[0];
      }
    };
    loadVoices();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  /**
   * Generates the expressive 2D SVG vector markup for Mr. Siuu.
   * @param {string} idPrefix Unique ID prefix for animation targeting
   * @param {boolean} showFullBody Whether to show full body or cockpit bust
   */
  getSvgMarkup(idPrefix = 'siuu', showFullBody = true) {
    return `
    <svg class="mr-siuu-svg" id="${idPrefix}-svg" viewBox="0 0 240 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mr. Siuu, friendly space scientist">
      <defs>
        <!-- Gradients for soft, friendly aesthetic -->
        <linearGradient id="${idPrefix}-suit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="60%" stop-color="#F3E8D8"/>
          <stop offset="100%" stop-color="#E2D4C0"/>
        </linearGradient>

        <linearGradient id="${idPrefix}-visor-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2D2846"/>
          <stop offset="45%" stop-color="#1E1B2E"/>
          <stop offset="100%" stop-color="#0F0D18"/>
        </linearGradient>

        <linearGradient id="${idPrefix}-accent-orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FF8C42"/>
          <stop offset="100%" stop-color="#FF5A36"/>
        </linearGradient>

        <filter id="${idPrefix}-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#1E1B2E" flood-opacity="0.12"/>
        </filter>
      </defs>

      <!-- Main Character Floating Group -->
      <g id="${idPrefix}-char-group" class="siuu-float-group">
        
        <!-- Subtle Jetpack / Oxygen Backpack -->
        <g id="${idPrefix}-backpack">
          <rect x="52" y="115" width="28" height="70" rx="12" fill="#E2D4C0" stroke="#FF8C42" stroke-width="2.5"/>
          <rect x="160" y="115" width="28" height="70" rx="12" fill="#E2D4C0" stroke="#FF8C42" stroke-width="2.5"/>
          <!-- Indicator lights -->
          <circle cx="66" cy="132" r="3.5" fill="#34D399" class="siuu-led-blink"/>
          <circle cx="174" cy="132" r="3.5" fill="#60A5FA" class="siuu-led-blink"/>
        </g>

        ${showFullBody ? `
        <!-- Legs & Space Boots -->
        <g id="${idPrefix}-legs">
          <!-- Left Leg -->
          <path d="M92 195 L88 238 Q88 248 100 248 L108 248 Q114 248 114 238 L112 195 Z" fill="url(#${idPrefix}-suit-grad)" stroke="#1E1B2E" stroke-width="2.5"/>
          <path d="M84 238 C84 230 116 230 116 238 L114 252 C114 256 84 256 84 252 Z" fill="#FF5A36"/>
          <!-- Right Leg -->
          <path d="M128 195 L126 238 Q126 248 138 248 L148 248 Q154 248 154 238 L148 195 Z" fill="url(#${idPrefix}-suit-grad)" stroke="#1E1B2E" stroke-width="2.5"/>
          <path d="M124 238 C124 230 156 230 156 238 L154 252 C154 256 124 256 124 252 Z" fill="#FF5A36"/>
        </g>
        ` : ''}

        <!-- Torso & Scientist Space Suit -->
        <g id="${idPrefix}-torso" filter="url(#${idPrefix}-soft-shadow)">
          <path d="M78 125 Q120 118 162 125 Q174 165 160 200 Q120 208 80 200 Q66 165 78 125 Z" fill="url(#${idPrefix}-suit-grad)" stroke="#1E1B2E" stroke-width="2.5"/>
          
          <!-- Chest Control Unit -->
          <rect x="96" y="138" width="48" height="42" rx="8" fill="#FFF9F2" stroke="#FF8C42" stroke-width="2"/>
          <!-- Mini Display Screen -->
          <rect x="103" y="145" width="34" height="15" rx="3" fill="#1E1B2E"/>
          <!-- Vital heartbeats on screen -->
          <path d="M106 153 L112 153 L115 148 L118 157 L122 150 L125 153 L134 153" stroke="#34D399" stroke-width="1.8" stroke-linecap="round" fill="none"/>
          
          <!-- Colorful push buttons -->
          <circle cx="106" cy="169" r="3.5" fill="#FF5A36"/>
          <circle cx="118" cy="169" r="3.5" fill="#FF8C42"/>
          <circle cx="130" cy="169" r="3.5" fill="#38BDF8"/>

          <!-- NASA Space School Vintage Gold Patch -->
          <circle cx="85" cy="148" r="9" fill="#1E1B2E" stroke="#FF8C42" stroke-width="1.5"/>
          <path d="M79 148 Q85 142 91 148" stroke="#FF5A36" stroke-width="1.5" fill="none"/>
          <circle cx="85" cy="148" r="2.5" fill="#FFF9F2"/>
        </g>

        <!-- Left Arm (Holding clipboard or relaxed) -->
        <g id="${idPrefix}-arm-left">
          <path d="M76 130 Q54 150 62 178 Q70 184 76 174 Q74 152 82 136 Z" fill="url(#${idPrefix}-suit-grad)" stroke="#1E1B2E" stroke-width="2.5"/>
          <!-- Glove -->
          <circle cx="65" cy="180" r="9" fill="#FF8C42" stroke="#1E1B2E" stroke-width="2"/>
        </g>

        <!-- Right Arm (Animated Wave / Pointing Gesture) -->
        <g id="${idPrefix}-arm-right" class="siuu-waving-arm" style="transform-origin: 160px 135px;">
          <path d="M160 132 Q188 140 185 170 Q176 176 172 165 Q175 148 156 138 Z" fill="url(#${idPrefix}-suit-grad)" stroke="#1E1B2E" stroke-width="2.5"/>
          <!-- Glove with friendly waving hand -->
          <circle cx="184" cy="172" r="9" fill="#FF8C42" stroke="#1E1B2E" stroke-width="2"/>
          <path d="M188 168 Q194 163 192 158" stroke="#1E1B2E" stroke-width="2" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Big Friendly Helmet -->
        <g id="${idPrefix}-helmet" filter="url(#${idPrefix}-soft-shadow)">
          <!-- Outer Helmet Shell -->
          <ellipse cx="120" cy="85" rx="54" ry="50" fill="url(#${idPrefix}-suit-grad)" stroke="#1E1B2E" stroke-width="3"/>
          
          <!-- Helmet Neck Ring -->
          <path d="M88 124 C95 132 145 132 152 124 L146 130 C138 136 102 136 94 130 Z" fill="#FF8C42" stroke="#1E1B2E" stroke-width="2"/>

          <!-- Golden Visor Rim -->
          <ellipse cx="120" cy="86" rx="43" ry="38" fill="none" stroke="url(#${idPrefix}-accent-orange)" stroke-width="3"/>

          <!-- Dark Visor Surface -->
          <ellipse cx="120" cy="86" rx="41" ry="36" fill="url(#${idPrefix}-visor-grad)"/>

          <!-- Inside the Visor: Mr. Siuu's Friendly Face -->
          <!-- Warm Face Base -->
          <ellipse cx="120" cy="88" rx="34" ry="28" fill="#FFDFBA" opacity="0.94"/>

          <!-- Scientist Hair Tufts (Brown retro hair peeking out) -->
          <path d="M96 74 Q105 64 120 66 Q136 64 144 74 Q135 68 120 70 Q105 68 96 74 Z" fill="#5D4037"/>

          <!-- Left Eyebrow -->
          <path id="${idPrefix}-brow-left" d="M102 73 Q108 69 114 72" stroke="#4A3525" stroke-width="2.2" stroke-linecap="round" fill="none"/>
          <!-- Right Eyebrow -->
          <path id="${idPrefix}-brow-right" d="M126 72 Q132 69 138 73" stroke="#4A3525" stroke-width="2.2" stroke-linecap="round" fill="none"/>

          <!-- Eyes & Blinking Eyelids -->
          <!-- Left Eye Group -->
          <g id="${idPrefix}-eye-left">
            <ellipse cx="109" cy="84" rx="6.5" ry="7.5" fill="#FFFFFF"/>
            <ellipse id="${idPrefix}-pupil-left" cx="109.5" cy="84" rx="4" ry="4.5" fill="#1E1B2E"/>
            <circle cx="108" cy="82" r="1.8" fill="#FFFFFF"/> <!-- Catchlight -->
            <!-- Animated Eyelid for Blinking -->
            <ellipse id="${idPrefix}-eyelid-left" cx="109" cy="84" rx="7" ry="0" fill="#FFDFBA" stroke="#4A3525" stroke-width="1.2"/>
          </g>

          <!-- Right Eye Group -->
          <g id="${idPrefix}-eye-right">
            <ellipse cx="131" cy="84" rx="6.5" ry="7.5" fill="#FFFFFF"/>
            <ellipse id="${idPrefix}-pupil-right" cx="131.5" cy="84" rx="4" ry="4.5" fill="#1E1B2E"/>
            <circle cx="130" cy="82" r="1.8" fill="#FFFFFF"/> <!-- Catchlight -->
            <!-- Animated Eyelid for Blinking -->
            <ellipse id="${idPrefix}-eyelid-right" cx="131" cy="84" rx="7" ry="0" fill="#FFDFBA" stroke="#4A3525" stroke-width="1.2"/>
          </g>

          <!-- Cute Cheeks -->
          <ellipse cx="98" cy="94" rx="4.5" ry="2.5" fill="#FF8C42" opacity="0.45"/>
          <ellipse cx="142" cy="94" rx="4.5" ry="2.5" fill="#FF8C42" opacity="0.45"/>

          <!-- Friendly Button Nose -->
          <path d="M120 86 Q122 89 120 91" stroke="#E08C68" stroke-width="1.8" stroke-linecap="round" fill="none"/>

          <!-- Expressive Smiling & Talking Mouth -->
          <g id="${idPrefix}-mouth-group">
            <path id="${idPrefix}-mouth-path" d="M112 97 Q120 104 128 97" stroke="#9E2A2B" stroke-width="2.5" stroke-linecap="round" fill="#E63946"/>
          </g>

          <!-- Visor Glass Reflection / Glare Arc -->
          <path d="M90 70 A36 32 0 0 1 144 64 A38 34 0 0 0 92 84 Z" fill="#FFFFFF" opacity="0.32"/>
          <circle cx="145" cy="100" r="3" fill="#FFFFFF" opacity="0.25"/>
        </g>

      </g>
    </svg>
    `;
  }

  /**
   * Initializes GSAP micro-animations for Mr. Siuu
   */
  initAnimations(idPrefix = 'siuu') {
    if (typeof gsap === 'undefined') return;

    const charGroup = document.getElementById(`${idPrefix}-char-group`);
    const wavingArm = document.querySelector(`#${idPrefix}-svg .siuu-waving-arm`);
    const eyelidLeft = document.getElementById(`${idPrefix}-eyelid-left`);
    const eyelidRight = document.getElementById(`${idPrefix}-eyelid-right`);
    const pupilLeft = document.getElementById(`${idPrefix}-pupil-left`);
    const pupilRight = document.getElementById(`${idPrefix}-pupil-right`);

    // 1. Idle Gentle Floating Animation
    if (charGroup) {
      gsap.to(charGroup, {
        y: -10,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }

    // 2. Friendly Hand Wave
    if (wavingArm) {
      gsap.to(wavingArm, {
        rotation: 18,
        duration: 1.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "160px 135px"
      });
    }

    // 3. Natural Eye Blinking Routine
    const blink = () => {
      if (!eyelidLeft || !eyelidRight) return;
      gsap.timeline()
        .to([eyelidLeft, eyelidRight], { attr: { ry: 7.5 }, duration: 0.12, ease: "power1.in" })
        .to([eyelidLeft, eyelidRight], { attr: { ry: 0 }, duration: 0.12, ease: "power1.out" });
      
      const nextBlink = 3000 + Math.random() * 3500;
      setTimeout(blink, nextBlink);
    };
    setTimeout(blink, 2000);

    // 4. Subtle Curious Eye Shifts
    if (pupilLeft && pupilRight) {
      const shiftGaze = () => {
        const dx = (Math.random() - 0.5) * 4;
        const dy = (Math.random() - 0.5) * 2;
        gsap.to([pupilLeft, pupilRight], {
          x: dx,
          y: dy,
          duration: 0.35,
          ease: "power2.out"
        });
        setTimeout(shiftGaze, 3500 + Math.random() * 3000);
      };
      setTimeout(shiftGaze, 4000);
    }
  }

  /**
   * Starts mouth talking animation synced with speech
   */
  startTalkingAnimation(idPrefix = 'siuu') {
    const mouth = document.getElementById(`${idPrefix}-mouth-path`);
    if (!mouth || typeof gsap === 'undefined') return;

    this.mouthTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    this.mouthTimeline
      .to(mouth, { attr: { d: "M111 96 Q120 109 129 96" }, duration: 0.16, ease: "sine.inOut" })
      .to(mouth, { attr: { d: "M113 98 Q120 101 127 98" }, duration: 0.14, ease: "sine.inOut" })
      .to(mouth, { attr: { d: "M110 97 Q120 106 130 97" }, duration: 0.18, ease: "sine.inOut" });
  }

  stopTalkingAnimation(idPrefix = 'siuu') {
    if (this.mouthTimeline) {
      this.mouthTimeline.kill();
      this.mouthTimeline = null;
    }
    const mouth = document.getElementById(`${idPrefix}-mouth-path`);
    if (mouth && typeof gsap !== 'undefined') {
      gsap.to(mouth, { attr: { d: "M112 97 Q120 104 128 97" }, duration: 0.2 });
    }
  }

  /**
   * Narrates text using Speech Synthesis with kid-friendly pitch & warmth.
   * Strictly adheres to personality rules (warm, wise, enthusiastic, never shouts).
   */
  speak(text, idPrefix = 'siuu', onStart = null, onEnd = null) {
    if (!this.speechSynth || window.spaceAudio?.isMuted) {
      if (onStart) onStart();
      if (onEnd) setTimeout(onEnd, 3000);
      return;
    }

    // Resolve voice dynamically if not yet set
    if (!this.activeVoice) {
      const voices = this.speechSynth.getVoices();
      if (voices && voices.length > 0) {
        this.activeVoice = voices.find(v => v.lang && v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David') || v.name.includes('Zira') || v.name.includes('Jenny') || v.name.includes('Guy'))) || voices.find(v => v.lang && v.lang.startsWith('en')) || voices[0];
      }
    }

    this.speechSynth.cancel();
    if (this.speechSynth.paused) {
      this.speechSynth.resume();
    }
    this.isSpeaking = true;

    // Clean narration text for natural speech (remove emojis, format cleanly)
    const cleanText = text
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (this.activeVoice) {
      utterance.voice = this.activeVoice;
    } else {
      utterance.lang = 'en-US';
    }
    utterance.pitch = 1.15; // Slightly higher, warm and friendly
    utterance.rate = 0.96;  // Clear, easy to follow pacing for students
    utterance.volume = 0.95;

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.startTalkingAnimation(idPrefix);
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.stopTalkingAnimation(idPrefix);
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      if (e && e.error === 'interrupted') return;
      this.isSpeaking = false;
      this.stopTalkingAnimation(idPrefix);
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.speechSynth.speak(utterance);
  }

  stopSpeech(idPrefix = 'siuu') {
    if (this.speechSynth) {
      this.speechSynth.cancel();
    }
    this.isSpeaking = false;
    this.stopTalkingAnimation(idPrefix);
  }

  /**
   * Generates inspiring educational quotes from Mr. Siuu
   */
  getRandomQuote(topic = 'general') {
    const quotes = {
      general: [
        "Welcome to Space School! Every piece of hardware left on the Moon and Mars tells a thrilling story of human discovery.",
        "Did you know? Even after a space mission ends, the scientific instruments remain as historic heritage monuments for future explorers!",
        "Step aboard, future scientist! Choose your destination and let's explore NASA's greatest engineering marvels together."
      ],
      moon: [
        "The Moon has no wind or rain, so the Apollo rovers, descent stages, and footprints will stay preserved for millions of years!",
        "From Ranger's high-speed cameras in 1964 to the Artemis program today, NASA has turned the Moon into a giant cosmic classroom.",
        "Laser retroreflectors left by Apollo 11 are still pinged with green laser pulses from Earth observatories every month!"
      ],
      mars: [
        "Mars is a planet entirely inhabited by robots! Six NASA rovers and a heroic little helicopter named Ingenuity have paved the way for human boots.",
        "It takes 7 to 8 months for our rockets to cross the 225-million-kilometer gulf of space to reach Mars. What an incredible journey!",
        "Every rock Curiosity and Perseverance zaps with their lasers brings us closer to discovering if ancient Mars ever hosted tiny microbial life."
      ]
    };
    const list = quotes[topic] || quotes.general;
    return list[Math.floor(Math.random() * list.length)];
  }
}

// Global character instance
window.mrSiuu = new MrSiuuCharacter();
