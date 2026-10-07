/**
 * Space School: NASA Hardware & Planetary Heritage
 * Mission Selection Timeline (Stage 2)
 */

class MissionTimeline {
  constructor() {
    this.currentDestination = 'Moon'; // 'Moon' or 'Mars'
    this.activeDecade = 'all';
    this.activeCategory = 'all';
    this.activeStatus = 'all';
    this.searchQuery = '';
    this.missions = typeof MISSIONS_DATA !== 'undefined' ? MISSIONS_DATA : [];
  }

  setDestination(dest) {
    this.currentDestination = dest;
    this.activeDecade = 'all';
    this.activeCategory = 'all';
    this.activeStatus = 'all';
    this.searchQuery = '';
    this.render();
  }

  getFilteredMissions() {
    return this.missions.filter(m => {
      // Destination filter
      if (m.body.toLowerCase() !== this.currentDestination.toLowerCase()) {
        return false;
      }
      // Decade filter
      if (this.activeDecade !== 'all' && m.decade !== this.activeDecade) {
        return false;
      }
      // Category filter
      if (this.activeCategory !== 'all' && m.category !== this.activeCategory) {
        return false;
      }
      // Status filter
      if (this.activeStatus !== 'all' && m.statusCategory !== this.activeStatus) {
        return false;
      }
      // Search query
      if (this.searchQuery.trim() !== '') {
        const q = this.searchQuery.toLowerCase();
        const matchesName = m.name.toLowerCase().includes(q);
        const matchesHardware = m.hardware.toLowerCase().includes(q);
        const matchesType = m.type.toLowerCase().includes(q);
        const matchesStory = m.story.toLowerCase().includes(q);
        const matchesYear = m.year.toLowerCase().includes(q);
        if (!matchesName && !matchesHardware && !matchesType && !matchesStory && !matchesYear) {
          return false;
        }
      }
      return true;
    });
  }

  render() {
    const container = document.getElementById('timeline-missions-list');
    const destTitle = document.getElementById('timeline-destination-title');
    const destSubtitle = document.getElementById('timeline-destination-subtitle');
    const destIcon = document.getElementById('timeline-destination-icon');
    const countBadge = document.getElementById('timeline-count-badge');

    if (destTitle) {
      destTitle.textContent = this.currentDestination === 'Moon' ? 'Moon Planetary Heritage' : 'Mars Planetary Heritage';
    }
    if (destSubtitle) {
      destSubtitle.textContent = this.currentDestination === 'Moon' 
        ? 'Relive 1964–Present Lunar exploration missions, Apollo landers, rovers, and south-pole explorers!'
        : 'Explore 1965–Present Red Planet flybys, Viking landers, autonomous rovers, and Ingenuity helicopter!';
    }
    if (destIcon) {
      destIcon.textContent = this.currentDestination === 'Moon' ? '🌙' : '🔴';
    }

    const filtered = this.getFilteredMissions();
    if (countBadge) {
      countBadge.textContent = `${filtered.length} Historic Missions`;
    }

    if (!container) return;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-timeline-state">
          <div class="empty-icon">🛰️</div>
          <h3>No historic missions match your filter</h3>
          <p>Try resetting the search filter or decade to explore more NASA hardware!</p>
          <button class="pill-btn primary" onclick="timelineApp.resetFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((m, index) => {
      const isLanded = m.status.toLowerCase().includes('landed') || m.status.toLowerCase().includes('remains');
      const isActive = m.status.toLowerCase().includes('active');
      const isImpacted = m.status.toLowerCase().includes('impact') || m.status.toLowerCase().includes('crashed') || m.status.toLowerCase().includes('de-orbited') || m.status.toLowerCase().includes('splashdown');

      let statusBadgeClass = 'status-heritage';
      let statusIcon = '🏛️';
      if (isActive) {
        statusBadgeClass = 'status-active';
        statusIcon = '🟢';
      } else if (isImpacted) {
        statusBadgeClass = 'status-impact';
        statusIcon = '💥';
      }

      return `
        <article class="timeline-mission-card glass-panel" data-mission-id="${m.id}" data-aos="fade-up">
          <div class="timeline-node-marker">
            <span class="marker-dot"></span>
            <span class="marker-year">${m.year}</span>
          </div>

          <div class="card-inner-layout">
            <!-- Authentic NASA Archival Thumbnail -->
            <div class="card-media-wrapper">
              <img src="${m.nasaImage}" alt="${m.name} - ${m.nasaTitle}" class="card-nasa-img" loading="lazy" onerror="this.src='https://images-assets.nasa.gov/image/PIA02975/PIA02975~small.jpg'"/>
              <span class="card-nasa-tag">NASA ID: ${m.nasaId}</span>
              <span class="card-body-tag ${m.body.toLowerCase()}">${m.body === 'Moon' ? '🌙 Moon' : '🔴 Mars'}</span>
            </div>

            <!-- Content Details -->
            <div class="card-content-body">
              <div class="card-header-row">
                <div>
                  <h3 class="mission-card-title">${m.name}</h3>
                  <span class="mission-type-chip">${m.type}</span>
                </div>
                <div class="status-indicator-pill ${statusBadgeClass}">
                  <span class="status-dot"></span>
                  <span class="status-text">${m.status}</span>
                </div>
              </div>

              <!-- Hardware Tags -->
              <div class="hardware-spec-row">
                <span class="hardware-label">🛠️ Left Hardware:</span>
                <div class="hardware-chip-list">
                  ${m.hardwareItems.map(item => `<span class="hw-chip">${item}</span>`).join('')}
                </div>
              </div>

              <!-- Story summary -->
              <p class="mission-card-story">
                "${m.story}"
              </p>

              <!-- Travel & Heritage Specs -->
              <div class="card-specs-footer">
                <div class="spec-stat">
                  <span class="spec-stat-label">Flight Duration:</span>
                  <span class="spec-stat-value">${m.travelDuration}</span>
                </div>
                <div class="spec-stat">
                  <span class="spec-stat-label">Decade:</span>
                  <span class="spec-stat-value">${m.decade}</span>
                </div>
              </div>

              <!-- Board Rocket Action Button -->
              <div class="card-action-bar">
                <button class="board-rocket-btn" onclick="timelineApp.boardMission('${m.id}')" aria-label="Board Rocket for ${m.name}">
                  <span class="btn-rocket-icon">🚀</span>
                  <span class="btn-label">Board Rocket</span>
                  <span class="btn-shine"></span>
                </button>
                <button class="preview-specs-btn" onclick="timelineApp.quickInspect('${m.id}')" title="Inspect Hardware Blueprint">
                  🔍 Inspect Hardware
                </button>
              </div>

            </div>
          </div>
        </article>
      `;
    }).join('');

    // Trigger subtle entrance animation via GSAP
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.timeline-mission-card', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
      );
    }
  }

  resetFilters() {
    this.activeDecade = 'all';
    this.activeCategory = 'all';
    this.activeStatus = 'all';
    this.searchQuery = '';
    
    // Reset UI controls
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.filter-chip[data-value="all"]').forEach(c => c.classList.add('active'));
    const searchInput = document.getElementById('mission-search-input');
    if (searchInput) searchInput.value = '';

    this.render();
  }

  boardMission(missionId) {
    if (window.spaceAudio) {
      window.spaceAudio.playClick();
    }
    const mission = this.missions.find(m => m.id === missionId);
    if (!mission) return;

    if (window.flightSimulator) {
      window.flightSimulator.startFlightSequence(mission);
    }
  }

  quickInspect(missionId) {
    if (window.spaceAudio) {
      window.spaceAudio.playClick();
    }
    const mission = this.missions.find(m => m.id === missionId);
    if (!mission) return;

    if (window.flightSimulator) {
      window.flightSimulator.showCockpitDirectly(mission);
    }
  }
}

// Global timeline instance
window.timelineApp = new MissionTimeline();
