// Space School: NASA Hardware & Planetary Heritage Dataset
// Official post-1960 NASA Missions to the Moon and Mars
const MISSIONS_DATA = [
  {
    "id": "mission-1",
    "name": "Ranger 7; 8; 9",
    "year": "1964-1965",
    "decade": "1960s",
    "body": "Moon",
    "type": "Impact Probes",
    "category": "probe",
    "hardware": "High-speed TV Cameras, Solar Panels",
    "status": "Impacted Lunar Surface",
    "statusCategory": "impacted",
    "story": "Transmitted over 17,000 close-up photos of the Moon seconds before crashing into the surface to prepare for Apollo landings!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA02975/PIA02975~small.jpg",
    "nasaId": "PIA02975",
    "nasaTitle": "First Image of the Moon taken by a U.S. Spacecraft",
    "hardwareItems": [
      "High-speed TV Cameras",
      "Solar Panels"
    ],
    "hardwareDeepDive": [
      {
        "name": "High-Speed Vidicon TV Cameras",
        "function": "Snapped 4,308 pictures in the final 17 minutes before impact.",
        "heritage": "Left as metal debris on Mare Cognitum after high-speed crash."
      },
      {
        "name": "Cruciform Solar Panels",
        "function": "Generated 200W of electricity from solar sunlight during the 68-hour flight.",
        "heritage": "Fragments preserved on the lunar plains."
      }
    ],
    "quiz": [
      {
        "question": "What was the primary mission objective of the Ranger 7, 8, and 9 probes?",
        "options": [
          "Retrieve Moon soil samples and return to Earth",
          "Transmit thousands of high-speed TV photos seconds before crashing into the Moon",
          "Establish the first permanent crewed lunar base",
          "Deploy an electric rover buggy"
        ],
        "answerIndex": 1,
        "explanation": "Ranger probes carried high-speed Vidicon TV cameras that transmitted over 17,000 close-up photos right up until impact, proving the lunar surface was solid and safe for future Apollo landings."
      },
      {
        "question": "How did the Ranger spacecraft generate electricity during their flight to the Moon?",
        "options": [
          "Nuclear fission reactor",
          "Disposable dry-cell flashlight batteries",
          "Cruciform solar panels generating 200W of electricity",
          "Hand-cranked generators"
        ],
        "answerIndex": 2,
        "explanation": "Two cruciform solar panels deployed after launch to convert sunlight into 200 Watts of electrical power for the onboard cameras and transmitters."
      },
      {
        "question": "What happened to the Ranger 7, 8, and 9 spacecraft at the end of their flights?",
        "options": [
          "They soft-landed gently on parachute canopies",
          "They entered an eternal orbit around Mars",
          "They intentionally impacted the lunar surface at high speed",
          "They returned to Earth and splashed down in the Pacific Ocean"
        ],
        "answerIndex": 2,
        "explanation": "Ranger probes were designed as impactors—they flew straight toward the Moon at over 5,000 mph, snapping photos until the exact moment of collision!"
      },
      {
        "question": "Which lunar sea was Ranger 7's impact site, later renamed Mare Cognitum (\"The Sea That Has Become Known\")?",
        "options": [
          "Mare Cognitum",
          "Sea of Tranquility",
          "Ocean of Storms",
          "Sea of Serenity"
        ],
        "answerIndex": 0,
        "explanation": "In honor of Ranger 7's historic first close-up photographs, the International Astronomical Union named its impact plain Mare Cognitum ('The Sea That Has Become Known')."
      }
    ]
  },
  {
    "id": "mission-2",
    "name": "Mariner 4",
    "year": "1964-1965",
    "decade": "1960s",
    "body": "Mars",
    "type": "Flyby Probe",
    "category": "probe",
    "hardware": "Digital TV Camera, Magnetometer, Solar Vanes",
    "status": "Derelict in Solar Orbit",
    "statusCategory": "heritage",
    "story": "The year is 1965! Mariner 4 completed the first successful Mars flyby, sending back the first 22 close-up photos of Martian craters!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA02980/PIA02980~thumb.jpg",
    "nasaId": "PIA02980",
    "nasaTitle": "Atlantis Region on Mars - Mariner 4",
    "hardwareItems": [
      "Digital TV Camera",
      "Magnetometer",
      "Solar Vanes"
    ],
    "hardwareDeepDive": [
      {
        "name": "Slow-Scan Digital TV Camera",
        "function": "Recorded the first 21-line digital images onto a reel-to-reel magnetic tape recorder.",
        "heritage": "Still floating quietly in an endless solar orbit between Earth and Mars."
      },
      {
        "name": "Solar Pressure Vanes",
        "function": "Tiny mechanical flaps at the ends of solar panels used solar photon pressure to steer.",
        "heritage": "Intact on the derelict craft in deep space."
      }
    ],
    "quiz": [
      {
        "question": "What historic first did Mariner 4 achieve in July 1965?",
        "options": [
          "First human landing on Mars",
          "First successful flyby of Mars and first close-up photos of another planet",
          "First wheeled robot driven across Martian sand dunes",
          "First discovery of liquid oceans on Mars"
        ],
        "answerIndex": 1,
        "explanation": "Mariner 4 made history on July 14–15, 1965, flying within 6,118 miles of Mars and returning the first 22 close-up images of Martian craters."
      },
      {
        "question": "How did Mariner 4 store its photos before slowly transmitting them back to Earth?",
        "options": [
          "A reel-to-reel digital magnetic tape recorder",
          "3.5-inch floppy disks",
          "Chemical Polaroid instant prints",
          "High-speed cloud internet storage"
        ],
        "answerIndex": 0,
        "explanation": "Mariner 4 stored 21 lines of digital image data on an onboard continuous-loop magnetic tape recorder, which took over 8 hours per image to beam back across 134 million miles."
      },
      {
        "question": "What surprising atmospheric discovery did Mariner 4 make about Mars?",
        "options": [
          "Mars had breathable oxygen and rainy storm clouds",
          "Mars had a very thin atmosphere of carbon dioxide and almost no global magnetic field",
          "Mars had an extremely dense atmosphere like Venus",
          "Mars had a magnetic field 10 times stronger than Earth's"
        ],
        "answerIndex": 1,
        "explanation": "Mariner 4's radio occultation experiment showed Mars' surface atmospheric pressure was less than 1% of Earth's, consisting primarily of thin carbon dioxide."
      },
      {
        "question": "What innovative feature did Mariner 4 have on the tips of its four solar panels to help steer without using fuel?",
        "options": [
          "Solar pressure vanes pushed by solar photons",
          "Tiny jet fans",
          "Flapping mechanical wings",
          "Helium balloons"
        ],
        "answerIndex": 0,
        "explanation": "Mariner 4 had movable solar vanes on its solar panel tips that used the delicate pressure of sunlight (solar radiation pressure) for attitude stabilization."
      }
    ]
  },
  {
    "id": "mission-3",
    "name": "Surveyor 1 to 7",
    "year": "1966-1968",
    "decade": "1960s",
    "body": "Moon",
    "type": "Soft Landers",
    "category": "lander",
    "hardware": "Soil Samplers, TV Cameras, Landing Legs",
    "status": "Landed on Moon Surface",
    "statusCategory": "heritage",
    "story": "Proved that the lunar soil was solid enough to support heavy human landers like the Apollo Lunar Module!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA02976/PIA02976~medium.jpg",
    "nasaId": "PIA02976",
    "nasaTitle": "Surveyor 1 Shadow",
    "hardwareItems": [
      "Soil Samplers",
      "TV Cameras",
      "Landing Legs"
    ],
    "hardwareDeepDive": [
      {
        "name": "Crushable Aluminum Landing Legs",
        "function": "Absorbed impact shock to prove lunar soil could safely support human landing gear.",
        "heritage": "Resting intact at Oceanus Procellarum and other maria."
      },
      {
        "name": "Surface Sampler Trenching Scoop",
        "function": "Dug trenches into lunar soil under remote control from Earth.",
        "heritage": "Surveyor 3 was visited by Apollo 12 astronauts in 1969!"
      }
    ],
    "quiz": [
      {
        "question": "What was Surveyor 1's historic achievement in June 1966?",
        "options": [
          "First U.S. spacecraft to achieve a soft landing on the Moon",
          "First spacecraft to land on Mars",
          "First crewed orbital flight",
          "First satellite to leave the Solar System"
        ],
        "answerIndex": 0,
        "explanation": "Surveyor 1 proved that a spacecraft could safely soft-land on the lunar surface using retro-rockets without sinking into thick dust."
      },
      {
        "question": "What did Surveyor's crushable aluminum landing legs demonstrate to NASA engineers?",
        "options": [
          "That the Moon was made of pure green cheese",
          "That lunar regolith was firm enough to support the heavy Apollo Lunar Module",
          "That the Moon had liquid water rivers",
          "That landing gear melted instantly on the Moon"
        ],
        "answerIndex": 1,
        "explanation": "Strain gauges on Surveyor's landing pads confirmed that the lunar soil could easily bear the weight of astronauts and the Apollo Lunar Module."
      },
      {
        "question": "Which Apollo mission later landed near Surveyor 3 and brought pieces of it back to Earth?",
        "options": [
          "Apollo 8",
          "Apollo 11",
          "Apollo 12",
          "Apollo 13"
        ],
        "answerIndex": 2,
        "explanation": "Apollo 12 astronauts Pete Conrad and Alan Bean landed within walking distance of Surveyor 3 in November 1969 and retrieved its TV camera to study long-term space exposure!"
      },
      {
        "question": "What tool did Surveyor 3 and 7 use to test the mechanical properties of lunar soil?",
        "options": [
          "A remote-controlled surface sampler trenching scoop",
          "A jackhammer",
          "A chainsaw",
          "A laser blaster"
        ],
        "answerIndex": 0,
        "explanation": "The motorized surface sampler scoop dug multiple trenches, showing the soil had the consistency of wet beach sand and could be safely excavated."
      }
    ]
  },
  {
    "id": "mission-4",
    "name": "Lunar Orbiter 1 to 5",
    "year": "1966-1967",
    "decade": "1960s",
    "body": "Moon",
    "type": "Orbiters",
    "category": "orbiter",
    "hardware": "70mm Film Camera System, Film Processor",
    "status": "De-orbited / Crashed onto Moon",
    "statusCategory": "impacted",
    "story": "Mapped 99% of the lunar surface in extreme detail so NASA engineers could pick safe landing spots for astronauts!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA00094/PIA00094~medium.jpg",
    "nasaId": "PIA00094",
    "nasaTitle": "Lunar Orbiter 1 - First Earthrise Image from the Moon (Aug 23, 1966)",
    "hardwareItems": [
      "70mm Film Camera System",
      "Film Processor"
    ],
    "hardwareDeepDive": [
      {
        "name": "Dual-Lens 70mm Eastman Kodak Camera",
        "function": "Exposed real photographic film in lunar orbit, developed it chemically onboard, and scanned it for radio transmission.",
        "heritage": "De-orbited intentionally to avoid interfering with Apollo missions."
      },
      {
        "name": "Automated Onboard Film Lab",
        "function": "A mini darkroom that chemically processed film in zero gravity.",
        "heritage": "Impacted lunar farside."
      }
    ],
    "quiz": [
      {
        "question": "What percentage of the lunar surface was mapped by the five Lunar Orbiter spacecraft?",
        "options": [
          "About 10%",
          "Exactly 50%",
          "Over 99% of both the near and far sides",
          "Only 5%"
        ],
        "answerIndex": 2,
        "explanation": "The five Lunar Orbiter missions mapped 99% of the Moon with unprecedented resolution, providing the detailed cartography NASA needed to select Apollo landing sites."
      },
      {
        "question": "How did Lunar Orbiter process its photographs before radioing them back to Earth?",
        "options": [
          "It beamed physical film canisters back to Earth via parachutes",
          "It developed 70mm film chemically in an onboard zero-gravity film lab and scanned it with a CRT scanner",
          "It used modern 4K digital flash memory cards",
          "It drew sketches with an automated robotic pencil"
        ],
        "answerIndex": 1,
        "explanation": "Lunar Orbiter carried a Kodak camera system that exposed real film, developed it using a semi-dry web process in orbit, and scanned the negatives with a tiny beam of light!"
      },
      {
        "question": "What iconic historic photograph was captured by Lunar Orbiter 1 in August 1966?",
        "options": [
          "The first photo of Saturn's rings",
          "The first view of Earth rising above the lunar horizon ('Earthrise')",
          "The first selfie taken in space",
          "The first photo of Pluto"
        ],
        "answerIndex": 1,
        "explanation": "On August 23, 1966, Lunar Orbiter 1 took humanity's first photograph of planet Earth floating above the lunar landscape, a precursor to Apollo 8's famous color Earthrise."
      },
      {
        "question": "Why were the Lunar Orbiters deliberately commanded to crash into the Moon at the end of their missions?",
        "options": [
          "They accidentally ran out of battery",
          "To ensure they wouldn't collide with future crewed Apollo spacecraft",
          "Because their cameras broke immediately",
          "Because Earth lost interest in space"
        ],
        "answerIndex": 1,
        "explanation": "NASA intentionally de-orbited the spacecraft to prevent dead satellites from posing navigation hazards to Apollo astronauts in lunar orbit."
      }
    ]
  },
  {
    "id": "mission-5",
    "name": "Mariner 6 & 7",
    "year": "1969",
    "decade": "1960s",
    "body": "Mars",
    "type": "Flyby Probes",
    "category": "probe",
    "hardware": "Infrared Spectrometers, Wide-angle Cameras",
    "status": "Derelict in Solar Orbit",
    "statusCategory": "heritage",
    "story": "Flew past Mars' equator and south pole, proving that the Martian atmosphere is made mostly of carbon dioxide!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/101-KSC-69P-223/101-KSC-69P-223~medium.jpg",
    "nasaId": "101-KSC-69P-223",
    "nasaTitle": "KSC-69p-223",
    "hardwareItems": [
      "Infrared Spectrometers",
      "Wide-angle Cameras"
    ],
    "hardwareDeepDive": [
      {
        "name": "Infrared Radiometer & Spectrometer",
        "function": "Measured atmospheric temperature and composition of Martian polar caps.",
        "heritage": "Derelict in heliocentric orbit."
      },
      {
        "name": "High-Resolution Narrow-Angle Camera",
        "function": "Photographed 20% of Mars surface during close flyby.",
        "heritage": "Silent monument drifting in solar orbit."
      }
    ],
    "quiz": [
      {
        "question": "In what historic year did twin spacecraft Mariner 6 and Mariner 7 fly past Mars?",
        "options": [
          "1957",
          "1969 (the same summer as the Apollo 11 Moon landing!)",
          "1985",
          "2001"
        ],
        "answerIndex": 1,
        "explanation": "Mariner 6 and 7 made their close flybys of Mars in July and August 1969, just days after Neil Armstrong and Buzz Aldrin stepped onto the Moon!"
      },
      {
        "question": "What were Mariner 6 and 7's instruments able to determine about the Martian polar caps?",
        "options": [
          "They were made of frozen liquid methane",
          "They were made predominantly of frozen carbon dioxide (dry ice)",
          "They were giant sheets of glass",
          "They were made of white sugar crystals"
        ],
        "answerIndex": 1,
        "explanation": "Infrared radiometers and spectrometers proved that Mars' seasonal polar ice caps consist largely of frozen carbon dioxide (dry ice) at temperatures below -125°C."
      },
      {
        "question": "How many close-up images of Mars were returned by the twin Mariner 6 and 7 probes?",
        "options": [
          "Only 2 images",
          "201 images covering 20% of the planet's surface",
          "Over 500,000 images",
          "Zero images due to lens fog"
        ],
        "answerIndex": 1,
        "explanation": "Mariner 6 and 7 returned 201 high-quality photographs, revealing chaotic terrain, cratered southern highlands, and polar caps in far greater detail than Mariner 4."
      },
      {
        "question": "Where are the derelict Mariner 6 and 7 spacecraft located today?",
        "options": [
          "Crashed into Mars' Olympus Mons volcano",
          "Drifting silently in endless heliocentric orbits around the Sun",
          "On display in the Smithsonian Air and Space Museum",
          "At the bottom of the Pacific Ocean"
        ],
        "answerIndex": 1,
        "explanation": "Because they were flyby missions that didn't enter orbit, both spacecraft sailed past Mars into eternal orbits around the Sun (heliocentric orbit)."
      }
    ]
  },
  {
    "id": "mission-6",
    "name": "Apollo 11",
    "year": "1969",
    "decade": "1960s",
    "body": "Moon",
    "type": "Crewed Lander & Hardware",
    "category": "lander",
    "hardware": "Eagle Descent Stage, EASEP Experiments, US Flag",
    "status": "Hardware Remains at Tranquility Base",
    "statusCategory": "heritage",
    "story": "The historic first human lunar landing! Astronauts left the Eagle descent stage and scientific instruments on the Moon's surface!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~medium.jpg",
    "nasaId": "as11-40-5903",
    "nasaTitle": "Buzz Aldrin on Lunar Surface with Apollo 11 Lunar Module (July 20, 1969)",
    "hardwareItems": [
      "Eagle Descent Stage",
      "EASEP Experiments",
      "US Flag"
    ],
    "hardwareDeepDive": [
      {
        "name": "Lunar Module Eagle Descent Stage",
        "function": "Rocket stage that touched down on Mare Tranquillitatis and served as the launchpad for Neil & Buzz.",
        "heritage": "Stands permanently at Tranquility Base with ladder plaque: 'We Came In Peace For All Mankind'."
      },
      {
        "name": "Laser Ranging Retroreflector (LRRR)",
        "function": "An array of 100 quartz prisms that reflects Earth-fired laser pulses to measure Moon distance to millimeter accuracy.",
        "heritage": "Still completely operational and actively pinged by Earth observatories today!"
      },
      {
        "name": "Passive Seismic Experiment (PSEP)",
        "function": "Solar-powered seismometer that recorded the first moonquakes and meteorite impacts.",
        "heritage": "Resting at Tranquility Base."
      }
    ],
    "quiz": [
      {
        "question": "On what date did Apollo 11's Lunar Module 'Eagle' touch down on the Moon?",
        "options": [
          "October 4, 1957",
          "July 20, 1969",
          "December 25, 1972",
          "April 12, 1981"
        ],
        "answerIndex": 1,
        "explanation": "On July 20, 1969, Neil Armstrong and Buzz Aldrin made history by landing at Tranquility Base with the words: 'Houston, Tranquility Base here. The Eagle has landed.'"
      },
      {
        "question": "What major piece of Apollo 11 hardware remains standing at Tranquility Base today?",
        "options": [
          "The Saturn V third stage rocket",
          "The Lunar Module Eagle Descent Stage",
          "An electric lunar rover buggy",
          "The Command Module Columbia"
        ],
        "answerIndex": 1,
        "explanation": "The octagonal descent stage served as the launch platform for the ascent stage to return Neil and Buzz to orbit, leaving the descent stage permanently standing on the lunar plain."
      },
      {
        "question": "Which Apollo 11 science experiment is STILL actively pinged by Earth lasers today to measure the exact distance to the Moon?",
        "options": [
          "The Laser Ranging Retroreflector (LRRR)",
          "The solar wind foil sheet",
          "The lunar seismometer",
          "The television broadcast antenna"
        ],
        "answerIndex": 0,
        "explanation": "The LRRR is an array of 100 quartz corner-cube prisms that reflects laser beams from Earth observatories, measuring the Earth-Moon distance down to millimeter precision!"
      },
      {
        "question": "What words are engraved on the historic plaque affixed to the Apollo 11 Lunar Module ladder?",
        "options": [
          "First to arrive, never to return",
          "Here Men From The Planet Earth First Set Foot Upon The Moon. We Came In Peace For All Mankind.",
          "Property of the United States Space Command",
          "Reach for the Stars with Apollo"
        ],
        "answerIndex": 1,
        "explanation": "The stainless steel plaque signed by Armstrong, Aldrin, Collins, and President Nixon reads: 'Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind.'"
      }
    ]
  },
  {
    "id": "mission-7",
    "name": "Apollo 12 to 17",
    "year": "1969-1972",
    "decade": "1960s",
    "body": "Moon",
    "type": "Crewed Landers & Rovers",
    "category": "rover",
    "hardware": "Lunar Roving Vehicles (LRVs), ALSEP Science Packages, Descent Stages",
    "status": "Hardware Remains on Moon",
    "statusCategory": "heritage",
    "story": "Astronauts drove electric Lunar Rovers across valleys and craters, leaving behind 3 rovers and dozens of long-term science packages!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/S71-30542/S71-30542~medium.jpg",
    "nasaId": "S71-30542",
    "nasaTitle": "View of Apollo 15 Lunar Roving Vehicle and Lunar Module during simulations",
    "hardwareItems": [
      "Lunar Roving Vehicles (LRVs)",
      "ALSEP Science Packages",
      "Descent Stages"
    ],
    "hardwareDeepDive": [
      {
        "name": "Lunar Roving Vehicle (LRV)",
        "function": "Electric 4x4 rover driven by astronauts up to 8 mph across mountains and craters.",
        "heritage": "Three Lunar Rovers remain parked on the Moon (Apollo 15, 16, 17) as historic monuments."
      },
      {
        "name": "ALSEP Nuclear Science Packages",
        "function": "Radioisotope-powered scientific instruments that transmitted data to Earth until 1977.",
        "heritage": "Preserved across five distinct lunar landing sites."
      }
    ],
    "quiz": [
      {
        "question": "Which revolutionary vehicle was introduced on Apollo 15, 16, and 17 to help astronauts explore miles away from the lander?",
        "options": [
          "The Lunar Roving Vehicle (LRV electric buggy)",
          "A rocket backpack",
          "A motorized unicycle",
          "A lunar hovercraft"
        ],
        "answerIndex": 0,
        "explanation": "The Boeing/GM Lunar Roving Vehicle was a fold-out electric four-wheel drive buggy that allowed astronauts to travel up to 22 miles across valleys, craters, and mountains!"
      },
      {
        "question": "Approximately how much lunar rock and core sample material did Apollo astronauts bring back to Earth?",
        "options": [
          "About 1 pound",
          "382 kilograms (842 pounds) across six landing missions",
          "5,000 kilograms",
          "Zero, they were not allowed to collect rocks"
        ],
        "answerIndex": 1,
        "explanation": "Apollo crews collected 382 kg of lunar rocks, core drillings, and soil samples, which scientists still study today to understand the origin of the Earth and Moon."
      },
      {
        "question": "What long-term scientific station was left on the lunar surface during every landing mission from Apollo 12 to 17?",
        "options": [
          "ALSEP (Apollo Lunar Surface Experiments Package) powered by a SNAP-27 nuclear RTG",
          "A robotic telescope",
          "A weather greenhouse",
          "A solar oven"
        ],
        "answerIndex": 0,
        "explanation": "ALSEP packages included seismometers, heat flow probes, and magnetometers powered by plutonium nuclear generators that sent data to Earth continuously until 1977."
      },
      {
        "question": "Who was the commander of Apollo 17 in December 1972, making him the last human to walk on the lunar surface?",
        "options": [
          "Alan Shepard",
          "Gene Cernan",
          "John Young",
          "Pete Conrad"
        ],
        "answerIndex": 1,
        "explanation": "Captain Gene Cernan stepped off the lunar surface on December 14, 1972, leaving the last human footprints on the Moon of the 20th century."
      }
    ]
  },
  {
    "id": "mission-8",
    "name": "Mariner 9",
    "year": "1971",
    "decade": "1970s",
    "body": "Mars",
    "type": "First Mars Orbiter",
    "category": "orbiter",
    "hardware": "Ultraviolet Spectrometer, Digital Imaging Cameras",
    "status": "Decommissioned in Mars Orbit",
    "statusCategory": "heritage",
    "story": "Became the first artificial satellite around Mars! It mapped 100% of Mars and discovered the giant Olympus Mons volcano!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA15090/PIA15090~thumb.jpg",
    "nasaId": "PIA15090",
    "nasaTitle": "Mariner 9 View of Nirgal Vallis",
    "hardwareItems": [
      "Ultraviolet Spectrometer",
      "Digital Imaging Cameras"
    ],
    "hardwareDeepDive": [
      {
        "name": "Digital Vidicon Imaging System",
        "function": "Outlasted a global dust storm to map 100% of Mars, discovering Olympus Mons and Valles Marineris.",
        "heritage": "Silent orbiter circling Mars until estimated decay around 2022-2070."
      },
      {
        "name": "Infrared Interferometer Spectrometer",
        "function": "Discovered water vapor in Mars' southern atmosphere.",
        "heritage": "Remains in high Mars orbit."
      }
    ],
    "quiz": [
      {
        "question": "What historic orbital milestone did Mariner 9 achieve in November 1971?",
        "options": [
          "First spacecraft to land on Mars",
          "First spacecraft to ever enter orbit around another planet",
          "First flyby of Jupiter",
          "First spacecraft to orbit the Sun"
        ],
        "answerIndex": 1,
        "explanation": "Mariner 9 beat the Soviet Mars 2 and 3 probes to become the very first artificial satellite ever to orbit another planet in solar system history!"
      },
      {
        "question": "What unexpected planetary event enveloped Mars when Mariner 9 arrived in late 1971?",
        "options": [
          "A massive planet-wide global dust storm hiding the entire surface",
          "A sudden ice age",
          "An explosion of active volcanoes",
          "An ocean flood"
        ],
        "answerIndex": 0,
        "explanation": "A colossal global dust storm obscured the entire Martian surface except for the peaks of four giant volcanoes, forcing NASA engineers to wait until the dust cleared to begin mapping!"
      },
      {
        "question": "What colossal canyon system, stretching over 2,500 miles across Mars, was discovered by and named after Mariner 9?",
        "options": [
          "Grand Canyon",
          "Valles Marineris (Mariner Valleys)",
          "Mariana Trench",
          "Great Rift Valley"
        ],
        "answerIndex": 1,
        "explanation": "Valles Marineris is the largest canyon system in the Solar System—four times deeper and ten times longer than Earth's Grand Canyon—named in honor of Mariner 9!"
      },
      {
        "question": "What record-breaking shield volcano did Mariner 9 photograph as the dust storm subsided?",
        "options": [
          "Mount Everest",
          "Olympus Mons (the largest volcano in the Solar System)",
          "Mauna Kea",
          "Mount Fuji"
        ],
        "answerIndex": 1,
        "explanation": "Olympus Mons stands nearly 14 miles (22 km) high—nearly three times taller than Mount Everest—and spans roughly the size of the entire state of Arizona!"
      }
    ]
  },
  {
    "id": "mission-9",
    "name": "Viking 1 & 2",
    "year": "1975-1976",
    "decade": "1970s",
    "body": "Mars",
    "type": "Orbiters & Soft Landers",
    "category": "lander",
    "hardware": "Gas Chromatographs, Biology Instruments, Seismometers",
    "status": "Landed on Mars Surface",
    "statusCategory": "heritage",
    "story": "Viking 1 made the first successful soft landing on Mars in July 1976, taking the first color panoramas of the red landscape!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA00563/PIA00563~medium.jpg",
    "nasaId": "PIA00563",
    "nasaTitle": "Viking Lander 1 on Chryse Planitia, Mars (PIA00563)",
    "hardwareItems": [
      "Gas Chromatographs",
      "Biology Instruments",
      "Seismometers"
    ],
    "hardwareDeepDive": [
      {
        "name": "Gas Chromatograph - Mass Spectrometer",
        "function": "Analyzed Martian soil chemistry to search for organic building blocks of life.",
        "heritage": "Preserved in Chryse Planitia and Utopia Planitia."
      },
      {
        "name": "Stereo Color Facsimile Cameras",
        "function": "Sent back the first crystal-clear color panoramas of the crimson Martian landscape.",
        "heritage": "Resting with US bicentennial flag emblems on Mars."
      }
    ],
    "quiz": [
      {
        "question": "On what historic date did Viking 1 become the first successful U.S. lander to operate on Mars?",
        "options": [
          "July 20, 1976 (exactly 7 years after Apollo 11 landed on the Moon!)",
          "December 7, 1941",
          "January 1, 2000",
          "April 12, 1961"
        ],
        "answerIndex": 0,
        "explanation": "Viking 1 touched down at Chryse Planitia on July 20, 1976, transmitting the first sharp color panoramas of the reddish Martian desert and boulder-strewn landscape."
      },
      {
        "question": "How were the Viking 1 and 2 landers powered to survive harsh Martian nights and dust storms?",
        "options": [
          "Lightweight solar panels",
          "Radioisotope Thermoelectric Generators (RTGs) fueled by Plutonium-238",
          "Wind turbines",
          "Geothermal steam"
        ],
        "answerIndex": 1,
        "explanation": "Because dust storms and winter cold would degrade solar panels, each Viking lander was powered by dual SNAP-19 nuclear RTGs that provided steady warmth and electricity for years."
      },
      {
        "question": "What primary scientific question did Viking's automated biology experiments seek to answer?",
        "options": [
          "Whether dinosaur fossils were buried in the dunes",
          "Whether living microorganisms were present in the Martian soil",
          "If plants could grow without water",
          "How fast sand dunes could roll"
        ],
        "answerIndex": 1,
        "explanation": "Viking scooped Martian soil into miniature automated chemical laboratories (Labeled Release, Pyrolytic Release, and Gas Exchange) to test for signs of active microbial metabolism."
      },
      {
        "question": "How long did the Viking 1 lander continue operating on Mars before communications ceased in 1982?",
        "options": [
          "Only 2 hours",
          "Over 6 years (2,245 Martian sols)",
          "Exactly 30 days",
          "50 years"
        ],
        "answerIndex": 1,
        "explanation": "Designed for a 90-day mission, Viking 1 operated for over 6 Earth years (until November 1982), holding the record for the longest Mars surface mission for more than two decades!"
      }
    ]
  },
  {
    "id": "mission-10",
    "name": "Clementine",
    "year": "1994",
    "decade": "1990s",
    "body": "Moon",
    "type": "Orbiter",
    "category": "orbiter",
    "hardware": "Multispectral Laser Ranging System, UV/IR Cameras",
    "status": "Lost in Solar Orbit",
    "statusCategory": "heritage",
    "story": "Returned the first global digital topography map of the Moon and discovered hints of water ice at the lunar south pole!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA00304/PIA00304~medium.jpg",
    "nasaId": "PIA00304",
    "nasaTitle": "Farside View of Earth Moon as Seen by the Clementine Spacecraft",
    "hardwareItems": [
      "Multispectral Laser Ranging System",
      "UV/IR Cameras"
    ],
    "hardwareDeepDive": [
      {
        "name": "Ultraviolet / Visible (UVVIS) Camera",
        "function": "Mapped mineral distributions across lunar mountains and basins.",
        "heritage": "Spacecraft derelict in solar orbit."
      },
      {
        "name": "Bistatic Radar Experiment",
        "function": "Bounced radio waves into deep shadowed south polar craters, discovering hints of water ice.",
        "heritage": "Inspired modern Artemis lunar exploration."
      }
    ],
    "quiz": [
      {
        "question": "What joint organization partnered with NASA to build and launch the Clementine spacecraft in 1994?",
        "options": [
          "Ballistic Missile Defense Organization (BMDO) / Department of Defense",
          "European Space Agency",
          "United Nations",
          "National Geographic Society"
        ],
        "answerIndex": 0,
        "explanation": "Clementine was a joint NASA and BMDO project designed to test lightweight military sensors and imaging systems in deep space while mapping the Moon."
      },
      {
        "question": "What groundbreaking discovery did Clementine's bistatic radar experiment suggest at the lunar south pole?",
        "options": [
          "Active geysers of liquid methane",
          "Potential water ice deposits sheltered inside permanently shadowed craters",
          "Caves filled with gold",
          "Alien artifacts"
        ],
        "answerIndex": 1,
        "explanation": "Radar reflections beamed from Clementine into deep craters near the Moon's south pole suggested the presence of frozen water ice in perpetually dark crater floors."
      },
      {
        "question": "How many spectral wavelengths did Clementine use to create the first digital mineral map of the entire Moon?",
        "options": [
          "1 black-and-white band",
          "11 optical and near-infrared spectral wavelengths",
          "500 wavelengths",
          "Only UV wavelengths"
        ],
        "answerIndex": 1,
        "explanation": "Clementine carried UV/Visible, Near-Infrared, and Long-Wave Infrared cameras that allowed planetary scientists to map minerals like titanium and iron across 100% of the Moon!"
      },
      {
        "question": "What instrument on Clementine provided the first comprehensive global 3D topographic model of the Moon?",
        "options": [
          "Laser Image Detection and Ranging (LIDAR) Laser Altimeter",
          "A mechanical plumb line",
          "A radio speedometer",
          "An acoustic sonar ping"
        ],
        "answerIndex": 0,
        "explanation": "Clementine's LIDAR laser bounced light pulses off the surface to measure heights and crater depths, discovering the true 8-mile depth of the colossal South Pole-Aitken basin."
      }
    ]
  },
  {
    "id": "mission-11",
    "name": "Mars Pathfinder & Sojourner",
    "year": "1996-1997",
    "decade": "1990s",
    "body": "Mars",
    "type": "Lander & First Rover",
    "category": "rover",
    "hardware": "Sojourner Microwave-Sized Rover, APXS Instrument",
    "status": "Landed at Ares Vallis",
    "statusCategory": "heritage",
    "story": "Deployed Sojourner—the very first robotic rover on Mars! It rolled on six wheels to analyze nearby Martian rocks!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA01122/PIA01122~medium.jpg",
    "nasaId": "PIA01122",
    "nasaTitle": "Sojourner Rover on the Surface of Mars at Ares Vallis (PIA01122)",
    "hardwareItems": [
      "Sojourner Microwave-Sized Rover",
      "APXS Instrument"
    ],
    "hardwareDeepDive": [
      {
        "name": "Sojourner Six-Wheeled Rover",
        "function": "Microwave-sized autonomous rover that explored 100 meters of Martian soil around the lander.",
        "heritage": "Rests peacefully at Ares Vallis, named Carl Sagan Memorial Station."
      },
      {
        "name": "Alpha Proton X-Ray Spectrometer (APXS)",
        "function": "Pressed against rocks like 'Yogi' and 'Barnacle Bill' to determine elemental composition.",
        "heritage": "Mounted to Sojourner's robotic nose on Mars."
      }
    ],
    "quiz": [
      {
        "question": "What was Sojourner's major claim to fame when it rolled off Pathfinder on July 5, 1997?",
        "options": [
          "First flying helicopter on Mars",
          "The very first wheeled robotic rover ever driven on another planet",
          "The fastest rocket ever built",
          "The heaviest rover on Mars"
        ],
        "answerIndex": 1,
        "explanation": "Sojourner was a 23-pound (10.5 kg) microwave-oven-sized rover that made history as humanity's very first robotic rover on the surface of another planet!"
      },
      {
        "question": "How did Mars Pathfinder cushion its high-speed impact when landing at Ares Vallis?",
        "options": [
          "A system of giant inflatable airbags that bounced over 15 times",
          "Giant springs attached to its bottom",
          "Landing on a soft swimming pool",
          "Using rocket sky cranes"
        ],
        "answerIndex": 0,
        "explanation": "Pathfinder deployed a parachute and rocket braking system, then inflated 24 giant airbags that allowed the lander to bounce along the Martian plain like a beach ball before stopping!"
      },
      {
        "question": "What sensor on Sojourner's robotic arm was pressed against rocks to analyze their chemical makeup?",
        "options": [
          "Alpha Proton X-Ray Spectrometer (APXS)",
          "Digital thermometer",
          "Metal detector",
          "Drill bit"
        ],
        "answerIndex": 0,
        "explanation": "The APXS instrument bombarded Martian rocks like 'Barnacle Bill' and 'Yogi' with alpha particles and X-rays, proving they were rich in volcanic silica and resembled volcanic andesite on Earth."
      },
      {
        "question": "How did millions of students and citizens around the world follow the Mars Pathfinder mission in 1997?",
        "options": [
          "Via early World Wide Web websites, setting historic internet traffic records!",
          "Morse code over telegraph wires",
          "Carrier pigeons",
          "Printed monthly newsletters"
        ],
        "answerIndex": 0,
        "explanation": "Mars Pathfinder was the first space mission to go viral on the modern Internet, logging over 565 million web hits in its first month as people viewed daily rover photos!"
      }
    ]
  },
  {
    "id": "mission-12",
    "name": "Mars Global Surveyor",
    "year": "1996-2006",
    "decade": "1990s",
    "body": "Mars",
    "type": "Orbiter",
    "category": "orbiter",
    "hardware": "MOC Camera, Laser Altimeter",
    "status": "Decommissioned in Orbit",
    "statusCategory": "heritage",
    "story": "Studied Mars for nearly 10 years, discovering ancient gullies that proved liquid water once flowed across Mars!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA07944/PIA07944~thumb.jpg",
    "nasaId": "PIA07944",
    "nasaTitle": "Mars Express Seen by Mars Global Surveyor",
    "hardwareItems": [
      "MOC Camera",
      "Laser Altimeter"
    ],
    "hardwareDeepDive": [
      {
        "name": "Mars Orbiter Camera (MOC)",
        "function": "Snapped over 240,000 images over a decade, revealing modern gully channels formed by liquid flows.",
        "heritage": "Silent satellite in high Martian orbit."
      },
      {
        "name": "Mars Orbiter Laser Altimeter (MOLA)",
        "function": "Shot millions of laser pulses to create the definitive 3D topographic elevation map of Mars.",
        "heritage": "Decommissioned in orbit in 2006."
      }
    ],
    "quiz": [
      {
        "question": "What fuel-saving maneuver did Mars Global Surveyor use to circularize its orbit over several months?",
        "options": [
          "Aerobraking using the drag of Mars' upper atmosphere",
          "Gravitational slingshots around Jupiter",
          "Solar sails",
          "Towing by another satellite"
        ],
        "answerIndex": 0,
        "explanation": "Aerobraking allowed MGS to dip its solar panels repeatedly into Mars' thin upper atmosphere, slowing the craft into a circular orbit without using precious rocket propellant."
      },
      {
        "question": "What geological features discovered by MGS's Mars Orbiter Camera (MOC) hinted at recent liquid water activity?",
        "options": [
          "Fresh gully channels carved into crater rims and sand dunes",
          "Active geysers shooting into space",
          "Flowing rivers of mud",
          "Steam vents"
        ],
        "answerIndex": 0,
        "explanation": "High-resolution MOC images revealed sharp, fresh gullies on steep slopes that suggested groundwater or melting snow had carved channels in geologically recent times."
      },
      {
        "question": "Which instrument on MGS fired laser pulses to build the first ultra-precise 3D topographic map of Mars?",
        "options": [
          "Mars Orbiter Laser Altimeter (MOLA)",
          "Thermal Emission Spectrometer",
          "Wide-angle fish-eye lens",
          "Magnetometer"
        ],
        "answerIndex": 0,
        "explanation": "MOLA fired over 600 million laser pulses to construct a global elevation model, mapping volcanoes, impact basins, and showing the northern lowlands were smooth ancient ocean beds."
      },
      {
        "question": "How long did Mars Global Surveyor operate before its mission ended in November 2006?",
        "options": [
          "1 year",
          "Nearly 10 full years of continuous mapping and rover communication relay",
          "2 days",
          "25 years"
        ],
        "answerIndex": 1,
        "explanation": "MGS operated for an incredible decade, returning over 240,000 photos and acting as the vital communication relay for the Spirit and Opportunity rovers!"
      }
    ]
  },
  {
    "id": "mission-13",
    "name": "Lunar Prospector",
    "year": "1998-1999",
    "decade": "1990s",
    "body": "Moon",
    "type": "Orbiter",
    "category": "orbiter",
    "hardware": "Neutron Spectrometer, Gamma Ray Spectrometer",
    "status": "Intentionally Impacted Polar Crater",
    "statusCategory": "impacted",
    "story": "Detected strong hydrogen signals at the Moon's shadowed poles, confirming hidden subsurface water ice!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA18162/PIA18162~medium.jpg",
    "nasaId": "PIA18162",
    "nasaTitle": "Lunar Prospector Artist Concept",
    "hardwareItems": [
      "Neutron Spectrometer",
      "Gamma Ray Spectrometer"
    ],
    "hardwareDeepDive": [
      {
        "name": "Neutron Spectrometer",
        "function": "Measured slowed cosmic neutrons to identify hydrogen concentrations (water ice) at lunar poles.",
        "heritage": "Crashed into Shoemaker Crater at lunar south pole in 1999."
      },
      {
        "name": "Gamma Ray Spectrometer",
        "function": "Constructed global maps of lunar surface elemental abundance (iron, titanium, thorium).",
        "heritage": "Impacted on Moon."
      }
    ],
    "quiz": [
      {
        "question": "What key element did Lunar Prospector's Neutron Spectrometer detect in massive concentrations at the lunar poles?",
        "options": [
          "Gold",
          "Hydrogen (indicating water ice in shadowed polar craters)",
          "Pure uranium",
          "Liquid mercury"
        ],
        "answerIndex": 1,
        "explanation": "By measuring slowed neutrons, Lunar Prospector discovered rich deposits of hydrogen at both the north and south poles, indicating up to billions of tons of subsurface water ice!"
      },
      {
        "question": "What unusual cargo did Lunar Prospector carry inside a small brass capsule?",
        "options": [
          "The cremated ashes of legendary planetary geologist Dr. Eugene Shoemaker",
          "A gold record with rock music",
          "Seeds of pine trees",
          "A gold medal from the Olympics"
        ],
        "answerIndex": 0,
        "explanation": "A portion of Eugene Shoemaker's ashes was placed aboard the spacecraft, making him the first human ever to be laid to rest on the Moon when it impacted the south pole."
      },
      {
        "question": "What mysterious lunar features did Lunar Prospector map that cause spacecraft orbits to change unpredictably?",
        "options": [
          "Mascons (Mass Concentrations of dense rock beneath lunar maria)",
          "Underground volcanic lava tubes",
          "Moon tornadoes",
          "Magnetic storm clouds"
        ],
        "answerIndex": 0,
        "explanation": "Lunar Prospector mapped mascons—giant concentrations of dense basaltic rock left from ancient asteroid impacts that create uneven gravity tugs on orbiting satellites."
      },
      {
        "question": "How did Lunar Prospector conclude its mission in July 1999?",
        "options": [
          "It was intentionally crashed into a permanently shadowed crater near the south pole to test for water vapor plumes",
          "It flew into deep interstellar space",
          "It landed gently with a parachute",
          "It was recovered by a Space Shuttle crew"
        ],
        "answerIndex": 0,
        "explanation": "Flight controllers targeted a permanently shadowed crater near the lunar south pole for impact, hoping Earth telescopes might spot a plume of kicked-up water ice."
      }
    ]
  },
  {
    "id": "mission-14",
    "name": "2001 Mars Odyssey",
    "year": "2001-Present",
    "decade": "2000s",
    "body": "Mars",
    "type": "Active Orbiter",
    "category": "orbiter",
    "hardware": "THEMIS Thermal Imager, Gamma Ray Spectrometer",
    "status": "Active in Mars Orbit",
    "statusCategory": "active",
    "story": "NASA's longest-lived Mars spacecraft! It confirmed massive underground ice sheets beneath the Martian soil!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA04244/PIA04244~medium.jpg",
    "nasaId": "PIA04244",
    "nasaTitle": "Artist Concept of Mars Odyssey",
    "hardwareItems": [
      "THEMIS Thermal Imager",
      "Gamma Ray Spectrometer"
    ],
    "hardwareDeepDive": [
      {
        "name": "THEMIS Thermal Emission Imaging System",
        "function": "Images Mars in 5 visible and 9 infrared bands to detect mineral deposits and buried ice.",
        "heritage": "Active today! Longest continually operating Mars spacecraft in human history."
      },
      {
        "name": "Gamma Ray Spectrometer Suite",
        "function": "Discovered vast reservoirs of subsurface water ice across high Martian latitudes.",
        "heritage": "Still in active service."
      }
    ],
    "quiz": [
      {
        "question": "What historic longevity record does 2001 Mars Odyssey hold?",
        "options": [
          "Fastest spacecraft ever launched",
          "Longest continuously operating spacecraft at Mars in history",
          "Heaviest satellite ever built",
          "First mission to land on Olympus Mons"
        ],
        "answerIndex": 1,
        "explanation": "Arriving at Mars in October 2001, Odyssey has been exploring and transmitting science data for over two decades, making it the longest-lived Mars mission ever!"
      },
      {
        "question": "What did Odyssey's Gamma Ray Spectrometer (GRS) discover just inches below the Martian soil?",
        "options": [
          "Vast reservoirs of subsurface water ice across high latitudes",
          "Liquid gasoline",
          "Underground diamond mines",
          "Fossilized sea shells"
        ],
        "answerIndex": 0,
        "explanation": "GRS detected vast amounts of hydrogen just under the dusty surface, proving that if Mars were heated, the top meter of soil at high latitudes contains massive water ice sheets!"
      },
      {
        "question": "What is the primary role Odyssey played for surface rovers like Spirit, Opportunity, and Curiosity?",
        "options": [
          "Shining bright headlights at night",
          "Acting as the primary UHF communications relay satellite beaming rover data back to Earth",
          "Dropping fresh batteries to the ground",
          "Cleaning rover solar panels with laser beams"
        ],
        "answerIndex": 1,
        "explanation": "More than 85% of all data from Spirit and Opportunity was relayed back to Earth via Odyssey's high-gain antenna as it passed overhead twice each Martian day!"
      },
      {
        "question": "What camera on Odyssey mapped the thermal inertia and mineral composition of the entire Martian surface?",
        "options": [
          "Thermal Emission Imaging System (THEMIS)",
          "Polaroid instant camera",
          "GoPro action cam",
          "Web camera"
        ],
        "answerIndex": 0,
        "explanation": "THEMIS measures infrared heat emitted day and night, allowing geologists to distinguish between sand, bare rock, and water-altered minerals across Mars."
      }
    ]
  },
  {
    "id": "mission-15",
    "name": "Spirit & Opportunity Rovers",
    "year": "2003-2018",
    "decade": "2000s",
    "body": "Mars",
    "type": "Twin Rovers",
    "category": "rover",
    "hardware": "Rock Abrasion Tools, Mössbauer Spectrometers, Solar Arrays",
    "status": "Landed on Mars Surface",
    "statusCategory": "heritage",
    "story": "These twin rovers explored Mars for years! Opportunity drove over 28 miles and proved ancient Mars had liquid lakes!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA20285/PIA20285~small.jpg",
    "nasaId": "PIA20285",
    "nasaTitle": "Mars Rover Opportunity at Rock Abrasion Target Potts",
    "hardwareItems": [
      "Rock Abrasion Tools",
      "Mössbauer Spectrometers",
      "Solar Arrays"
    ],
    "hardwareDeepDive": [
      {
        "name": "Rock Abrasion Tool (RAT)",
        "function": "Diamond-tipped teeth ground circular holes into Martian bedrock to expose unweathered interiors.",
        "heritage": "Opportunity drove a record-setting 28.06 miles across Meridiani Planum."
      },
      {
        "name": "Mössbauer Spectrometer",
        "function": "Identified the iron mineral jarosite, unequivocal proof that acidic liquid water once flooded Mars.",
        "heritage": "Resting on the Martian surface as planetary heritage landmarks."
      }
    ],
    "quiz": [
      {
        "question": "What nickname was given to the tiny spherical hematite mineral nodules discovered by Opportunity at Meridiani Planum?",
        "options": [
          "Martian 'blueberries'",
          "Martian golf balls",
          "Space pearls",
          "Red rubies"
        ],
        "answerIndex": 0,
        "explanation": "Opportunity discovered grey hematite concretions nicknamed 'blueberries' that precipitated out of standing, mineral-rich liquid groundwater in ancient Martian lakes!"
      },
      {
        "question": "How long were Spirit and Opportunity originally designed to last on Mars, compared to how long Opportunity actually survived?",
        "options": [
          "10 days designed, survived 15 days",
          "90 days designed, Opportunity survived nearly 15 YEARS (5,111 sols)!",
          "5 years designed, survived 6 years",
          "1 year designed, survived 2 years"
        ],
        "answerIndex": 1,
        "explanation": "Both rovers had a planned 90-sol primary mission. Spirit operated for 6 years, while Opportunity soldiered on for nearly 15 years, driving a marathon distance of over 28 miles!"
      },
      {
        "question": "What surprise discovery did Spirit's stuck right front wheel uncover when dragging through Martian soil?",
        "options": [
          "Pure white silica deposits, proof of ancient volcanic hydrothermal hot springs or steam vents!",
          "A gold coin",
          "Frozen seawater",
          "A buried electrical cable"
        ],
        "answerIndex": 0,
        "explanation": "Spirit's jammed wheel dug a trench revealing 90% pure silica soil, which on Earth only forms in hydrothermal hot springs where microbial life thrives!"
      },
      {
        "question": "How did both rovers clean their solar panels to keep surviving far beyond their warranties?",
        "options": [
          "Astronauts wiped them down",
          "Martian dust devils and wind gusts blew the dust away ('cleaning events')",
          "They had automated windshield wipers",
          "They submerged themselves in water"
        ],
        "answerIndex": 1,
        "explanation": "Fortuitous Martian dust devils passed over the rovers, sweeping away accumulated reddish dust and restoring battery charging power!"
      }
    ]
  },
  {
    "id": "mission-16",
    "name": "Mars Reconnaissance Orbiter (MRO)",
    "year": "2005-Present",
    "decade": "2000s",
    "body": "Mars",
    "type": "Active Orbiter",
    "category": "orbiter",
    "hardware": "HiRISE Ultra-HD Camera, CRISM Spectrometer",
    "status": "Active in Mars Orbit",
    "statusCategory": "active",
    "story": "Carries the giant HiRISE camera, sending back breathtaking high-resolution images of rovers, dust devils, and avalanches on Mars!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA04758/PIA04758~medium.jpg",
    "nasaId": "PIA04758",
    "nasaTitle": "Artist Concept of Mars Reconnaissance Orbiter",
    "hardwareItems": [
      "HiRISE Ultra-HD Camera",
      "CRISM Spectrometer"
    ],
    "hardwareDeepDive": [
      {
        "name": "HiRISE (High Resolution Imaging Science Experiment)",
        "function": "0.5-meter reflecting telescope that resolves features as tiny as a dinner plate on Mars.",
        "heritage": "Active today! Relays communications for Curiosity and Perseverance rovers."
      },
      {
        "name": "SHARAD Shallow Radar Sounder",
        "function": "Probes up to 1 kilometer beneath Martian crust to map buried polar ice sheets.",
        "heritage": "Actively operating in Mars orbit."
      }
    ],
    "quiz": [
      {
        "question": "What is the name of MRO's high-resolution telescope camera, the most powerful camera ever sent to another planet?",
        "options": [
          "HiRISE (High Resolution Imaging Science Experiment)",
          "Hubble Space Telescope",
          "James Webb Camera",
          "Wide Field Camera 3"
        ],
        "answerIndex": 0,
        "explanation": "HiRISE features a 0.5-meter reflecting telescope that resolves features as tiny as 30 centimeters (1 foot) across from 180 miles above the Martian surface!"
      },
      {
        "question": "What seasonal dark streaks did HiRISE discover flowing down warm Martian slopes, known as RSL?",
        "options": [
          "Recurring Slope Lineae (suggesting possible briny water flows)",
          "Red lava rivers",
          "Dust avalanches of copper",
          "Plant vines"
        ],
        "answerIndex": 0,
        "explanation": "Recurring Slope Lineae (RSL) are narrow dark streaks that lengthen down sunny slopes in spring and summer, hinting at subsurface salty brine seeps."
      },
      {
        "question": "What incredible feat did HiRISE achieve during the landings of Curiosity, Phoenix, and Perseverance?",
        "options": [
          "Photographed the spacecraft descending by parachute in real-time from orbit!",
          "Refueled their rocket thrusters",
          "Carried them piggyback to Mars",
          "Broadcast live audio commentary to Mars"
        ],
        "answerIndex": 0,
        "explanation": "HiRISE captured breathtaking photos of the Phoenix, Curiosity, and Perseverance spacecraft swinging under their supersonic parachutes as they plummeted through the Martian air!"
      },
      {
        "question": "What radar sounder on MRO penetrates up to a mile beneath Mars' ice caps to detect subsurface layers?",
        "options": [
          "SHARAD (Shallow Radar)",
          "Doppler weather radar",
          "Police speed gun",
          "Sonar transducer"
        ],
        "answerIndex": 0,
        "explanation": "SHARAD beams radio waves down into the surface, penetrating deep into the polar layered deposits to map hundreds of layers of water ice and dust."
      }
    ]
  },
  {
    "id": "mission-17",
    "name": "Phoenix Mars Lander",
    "year": "2007-2008",
    "decade": "2000s",
    "body": "Mars",
    "type": "Arctic Lander",
    "category": "lander",
    "hardware": "Robotic Arm Scoop, TEGA Analyzer, Microscopy Suite",
    "status": "Landed at Martian Arctic",
    "statusCategory": "heritage",
    "story": "Landed near Mars' north pole and used its robotic arm to dig up real water ice hidden just inches beneath the red soil!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA10701/PIA10701~thumb.jpg",
    "nasaId": "PIA10701",
    "nasaTitle": "Color Image of Phoenix Lander on Mars Surface",
    "hardwareItems": [
      "Robotic Arm Scoop",
      "TEGA Analyzer",
      "Microscopy Suite"
    ],
    "hardwareDeepDive": [
      {
        "name": "Articulated Robotic Arm & Trenching Scoop",
        "function": "Dug into permafrost near the Martian north pole, exposing white ice that sublimated in days.",
        "heritage": "Landed at Vastitas Borealis, covered in seasonal winter frost."
      },
      {
        "name": "TEGA Thermal and Evolved Gas Analyzer",
        "function": "Baked soil samples in tiny ovens to sniff water vapor and carbon dioxide.",
        "heritage": "Preserved on the arctic Martian plains."
      }
    ],
    "quiz": [
      {
        "question": "Where on Mars did the Phoenix lander touch down in May 2008?",
        "options": [
          "Inside the deep Valles Marineris canyon",
          "In the arctic north plains (Vastitas Borealis, 68° north latitude)",
          "At the equator",
          "On the summit of Olympus Mons"
        ],
        "answerIndex": 1,
        "explanation": "Phoenix landed in the flat, polygonal-patterned arctic plains of Vastitas Borealis to examine whether the polar permafrost could ever support microbial life."
      },
      {
        "question": "What dramatic proof of water ice did Phoenix's robotic arm discover after digging a trench nicknamed 'Dodo-Goldilocks'?",
        "options": [
          "Bright white chunks of subsurface ice that evaporated (sublimated) over 4 days",
          "Liquid water puddles that flowed away",
          "An underground ice skating rink",
          "Big white stones of limestone"
        ],
        "answerIndex": 0,
        "explanation": "Robotic arm cameras photographed diced chunks of white material that disappeared into gas over 4 days, confirming they were pure water ice rather than salt or dry ice!"
      },
      {
        "question": "What surprising atmospheric phenomenon did Phoenix's LIDAR laser detect falling from Martian clouds?",
        "options": [
          "Water-ice snow falling from clouds 2.5 miles up",
          "Heavy rainstorms",
          "Acid hail",
          "Molten volcanic ash"
        ],
        "answerIndex": 0,
        "explanation": "Phoenix detected actual water-ice snow falling from low Martian clouds, though the snowflakes sublimated in the dry air before reaching the ground (virga)."
      },
      {
        "question": "What chemical salt discovered by Phoenix's wet chemistry lab acts as an antifreeze and potential food source for microbes?",
        "options": [
          "Table salt (Sodium Chloride)",
          "Perchlorate salts",
          "Baking soda",
          "Epsom salts"
        ],
        "answerIndex": 1,
        "explanation": "Phoenix discovered perchlorates (chlorine and oxygen compounds) that lower the freezing point of water to -70°C and could serve as an energy source for extremophile microbes."
      }
    ]
  },
  {
    "id": "mission-18",
    "name": "Lunar Reconnaissance Orbiter (LRO)",
    "year": "2009-Present",
    "decade": "2000s",
    "body": "Moon",
    "type": "Active Orbiter",
    "category": "orbiter",
    "hardware": "LROC Cameras, Diviner Thermal Radiometer",
    "status": "Active in Lunar Orbit",
    "statusCategory": "active",
    "story": "Maps the Moon in 3D with sub-meter detail! It can even photograph the footsteps and rovers left behind by Apollo astronauts!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA12086/PIA12086~thumb.jpg",
    "nasaId": "PIA12086",
    "nasaTitle": "Loading Lunar Reconnaissance Orbiter LRO in the Thermal Vacuum Chamber",
    "hardwareItems": [
      "LROC Cameras",
      "Diviner Thermal Radiometer"
    ],
    "hardwareDeepDive": [
      {
        "name": "LROC Narrow Angle Cameras",
        "function": "Capable of spotting Apollo Lunar Modules, rover tracks, and robotic landers from orbit.",
        "heritage": "Active in lunar orbit since 2009, mapping Artemis landing candidates."
      },
      {
        "name": "Diviner Lunar Radiometer",
        "function": "Discovered the coldest recorded spots in the solar system inside south polar craters (-415°F / 25 K).",
        "heritage": "Active today."
      }
    ],
    "quiz": [
      {
        "question": "What historic artifacts did LRO's Narrow Angle Cameras photograph in razor-sharp detail on the lunar surface?",
        "options": [
          "Apollo Lunar Module descent stages, rover buggies, and astronaut footpaths!",
          "Dinosaur tracks",
          "Viking ship remnants",
          "Old pirate treasure chests"
        ],
        "answerIndex": 0,
        "explanation": "LRO flew as low as 13 miles above the surface, returning breathtaking pictures of Apollo 11, 12, 14, 15, 16, and 17 sites, showing footprints, rover tracks, and scientific hardware!"
      },
      {
        "question": "What instrument on LRO recorded the coldest temperature measured anywhere in the Solar System (-248°C / -415°F)?",
        "options": [
          "Diviner Lunar Radiometer Experiment",
          "A mercury glass thermometer",
          "An infrared heat lamp",
          "A digital weather vane"
        ],
        "answerIndex": 0,
        "explanation": "Diviner measures thermal radiation, finding that permanently shadowed craters at the lunar south pole are colder than the surface of Pluto!"
      },
      {
        "question": "Why is LRO's topographical data essential for the upcoming Artemis missions?",
        "options": [
          "It identified permanently sunlit ridges and water-ice crater landing sites at the lunar south pole",
          "It checked for moonquakes to stop launches",
          "It planted flags for future astronauts",
          "It cleaned the landing zones"
        ],
        "answerIndex": 0,
        "explanation": "LRO created sub-meter 3D topographic maps of candidate landing sites near the south pole, locating areas with continuous sunlight for solar power and access to water ice."
      },
      {
        "question": "What laser experiment onboard LRO fired pulses back to Earth to measure its orbit with centimeter accuracy?",
        "options": [
          "Lunar Orbiter Laser Altimeter (LOLA)",
          "Laser pointer show",
          "ChemCam laser",
          "Laser welding unit"
        ],
        "answerIndex": 0,
        "explanation": "LOLA fired millions of laser pulses to create the most accurate global elevation map of any celestial body in the solar system, including Earth!"
      }
    ]
  },
  {
    "id": "mission-19",
    "name": "Curiosity Rover (MSL)",
    "year": "2011-Present",
    "decade": "2010s",
    "body": "Mars",
    "type": "Nuclear-Powered Rover",
    "category": "rover",
    "hardware": "ChemCam Laser, SAM Chemistry Lab, Robotic Drill",
    "status": "Active in Gale Crater",
    "statusCategory": "active",
    "story": "A car-sized nuclear-powered rover exploring Gale Crater! It zaps rocks with lasers and proved Mars once had habitable lakes!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA19808/PIA19808~medium.jpg",
    "nasaId": "PIA19808",
    "nasaTitle": "Curiosity Rover Self-Portrait at Mount Sharp in Gale Crater (Aug 2015)",
    "hardwareItems": [
      "ChemCam Laser",
      "SAM Chemistry Lab",
      "Robotic Drill"
    ],
    "hardwareDeepDive": [
      {
        "name": "ChemCam Laser Induced Breakdown Spectrometer",
        "function": "Fires pulses of infrared laser light to vaporize rock targets up to 7 meters away.",
        "heritage": "Active today in Gale Crater! Has driven over 31 kilometers."
      },
      {
        "name": "SAM (Sample Analysis at Mars) Laboratory",
        "function": "Onboard chemistry lab with ovens and spectrometers that detected organic carbon molecules.",
        "heritage": "Continues science operations inside Mount Sharp foothills."
      }
    ],
    "quiz": [
      {
        "question": "What revolutionary rocket descent system lowered Curiosity safely to the Martian surface in August 2012?",
        "options": [
          "Giant inflatable bouncy airbags",
          "The rocket-powered Sky Crane that hovered and winched the rover down on nylon tethers",
          "A single giant glider wing",
          "A hot air balloon"
        ],
        "answerIndex": 1,
        "explanation": "Because Curiosity weighed nearly a metric ton (too heavy for airbags), NASA invented the Sky Crane: a rocket descent stage that hovered and lowered Curiosity on cables before flying away!"
      },
      {
        "question": "How is Curiosity powered so that it can operate day and night without relying on solar panels?",
        "options": [
          "A Multi-Mission Radioisotope Thermoelectric Generator (MMRTG) fueled by Plutonium-238",
          "Gasoline combustion engine",
          "Rechargeable AA lithium batteries",
          "Wind turbines on its mast"
        ],
        "answerIndex": 0,
        "explanation": "Curiosity's MMRTG converts heat from decaying plutonium into about 110 Watts of electricity 24 hours a day, providing continuous heat to keep internal electronics warm."
      },
      {
        "question": "What major habitable discovery did Curiosity make inside Gale Crater?",
        "options": [
          "Gale Crater once contained a persistent, freshwater lake with all the essential chemical building blocks for microbial life",
          "Gale Crater was an active ocean full of fish",
          "Mars never had any liquid water",
          "Mars had trees and grass"
        ],
        "answerIndex": 0,
        "explanation": "Drilling into ancient mudstones at Yellowknife Bay, Curiosity found clay minerals, carbon, hydrogen, oxygen, phosphorus, and sulfur, proving ancient Mars was friendly to microbial life."
      },
      {
        "question": "What instrument fires a powerful infrared laser pulse to vaporize rock samples from up to 23 feet away?",
        "options": [
          "ChemCam (Chemistry and Camera)",
          "Star Wars lightsaber",
          "X-ray microscope",
          "Flashlight"
        ],
        "answerIndex": 0,
        "explanation": "ChemCam zaps rocks with thousands of laser pulses, creating a glowing spark of plasma that an onboard spectrometer analyzes to identify rock elements from meters away!"
      }
    ]
  },
  {
    "id": "mission-20",
    "name": "GRAIL (Ebb & Flow)",
    "year": "2011-2012",
    "decade": "2010s",
    "body": "Moon",
    "type": "Twin Orbiters",
    "category": "orbiter",
    "hardware": "Ultra-precise Ka-band Ranging System",
    "status": "Impacted Lunar Mountain",
    "statusCategory": "impacted",
    "story": "Flew in formation around the Moon to map its internal gravitational field and crustal structure with extreme precision!",
    "travelDuration": "3 days (384,400 km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA16493/PIA16493~small.jpg",
    "nasaId": "PIA16493",
    "nasaTitle": "Ebb and Flow Final Moments",
    "hardwareItems": [
      "Ultra-precise Ka-band Ranging System"
    ],
    "hardwareDeepDive": [
      {
        "name": "Lunar Gravity Ranging System",
        "function": "Measured micron-scale distance changes between twin probes to reveal Moon's thin crust.",
        "heritage": "Deliberately crashed into a lunar mountain near Goldschmidt crater in 2012."
      },
      {
        "name": "MoonKAM Student Cameras",
        "function": "Allowed middle school students across America to select targets on the Moon for photography.",
        "heritage": "Impacted on the Moon."
      }
    ],
    "quiz": [
      {
        "question": "What were the names of the twin spacecraft that flew in tandem around the Moon for the GRAIL mission?",
        "options": [
          "Ebb and Flow",
          "Castor and Pollux",
          "Lewis and Clark",
          "Spirit and Opportunity"
        ],
        "answerIndex": 0,
        "explanation": "The two identical spacecraft were named 'Ebb' and 'Flow' by elementary school students in Bozeman, Montana, through a nationwide NASA naming contest!"
      },
      {
        "question": "How did Ebb and Flow measure the gravitational field of the Moon with extreme precision?",
        "options": [
          "By beaming microwaves at each other to detect changes in the distance between them down to the width of a human red blood cell!",
          "By dropping heavy weights onto the surface",
          "By weighing the Moon with a giant scale",
          "By measuring the Moon's magnetic compass needle"
        ],
        "answerIndex": 0,
        "explanation": "Flying 137 miles apart, the Lunar Gravity Ranging System measured tiny changes in distance caused by dense underground rocks tugging on the lead spacecraft first!"
      },
      {
        "question": "What surprising structure did GRAIL discover about the Moon's crust?",
        "options": [
          "The lunar crust is much thinner (34-43 km) and heavily fractured by ancient impacts compared to earlier models",
          "The Moon is completely hollow inside",
          "The crust is made of solid lead",
          "The crust is 500 miles thick"
        ],
        "answerIndex": 0,
        "explanation": "GRAIL showed the lunar crust was pulverized deep into the interior by early bombardment and was 10 to 20 kilometers thinner than previously believed."
      },
      {
        "question": "How did GRAIL conclude its scientific mission in December 2012?",
        "options": [
          "Deliberately commanded to impact a lunar mountain ridge near crater Goldschmidt",
          "Sent into an orbit around Mercury",
          "Retrieved by the International Space Station",
          "Abandoned in high Earth orbit"
        ],
        "answerIndex": 0,
        "explanation": "Running low on fuel, both spacecraft fired their remaining thrusters to impact an unnamed mountain rim near crater Goldschmidt, later named after mission leader Dr. Sally Ride."
      }
    ]
  },
  {
    "id": "mission-21",
    "name": "MAVEN Orbiter",
    "year": "2013-Present",
    "decade": "2010s",
    "body": "Mars",
    "type": "Atmospheric Orbiter",
    "category": "orbiter",
    "hardware": "Neutral Gas Spectrometer, Solar Wind Analyzers",
    "status": "Active in Mars Orbit",
    "statusCategory": "active",
    "story": "Measures how the solar wind strips away Mars' thin atmosphere into space over billions of years!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000788/GSFC_20171208_Archive_e000788~medium.jpg",
    "nasaId": "GSFC_20171208_Archive_e000788",
    "nasaTitle": "MAVEN Spacecraft Exploring the Mars Upper Atmosphere",
    "hardwareItems": [
      "Neutral Gas Spectrometer",
      "Solar Wind Analyzers"
    ],
    "hardwareDeepDive": [
      {
        "name": "Neutral Gas and Ion Mass Spectrometer",
        "function": "Samples the composition and structure of Mars' upper atmosphere and escaping gases.",
        "heritage": "Active today, helping scientists understand how Mars lost its ancient oceans."
      },
      {
        "name": "Solar Wind Ion Analyzer",
        "function": "Monitors solar wind stripping away atmospheric ions into interplanetary space.",
        "heritage": "Active Mars relay asset."
      }
    ],
    "quiz": [
      {
        "question": "What does the acronym MAVEN stand for?",
        "options": [
          "Mars Atmosphere and Volatile EvolutioN",
          "Multi-Agency Vehicle for Extra-terrestrial Navigation",
          "Mars Automated Video Exploration Network",
          "Mineral Analysis and Velocity Engine"
        ],
        "answerIndex": 0,
        "explanation": "MAVEN stands for Mars Atmosphere and Volatile EvolutioN, designed to study the upper atmosphere, ionosphere, and interactions with the solar wind."
      },
      {
        "question": "What major scientific mystery did MAVEN solve about Mars' evolutionary history?",
        "options": [
          "How the solar wind stripped away Mars' thick ancient atmosphere into space after the global magnetic field shut down",
          "Why Mars has two moons",
          "Why Mars has red rocks",
          "How fast Mars spins around its axis"
        ],
        "answerIndex": 0,
        "explanation": "MAVEN proved that intense solar storms and charged solar wind particles stripped away most of Mars' atmosphere over 3 to 4 billion years, turning a warm wet world into a dry desert."
      },
      {
        "question": "What happens to ions in the Martian upper atmosphere during a solar storm?",
        "options": [
          "Atmospheric escape rates increase by more than a factor of 10 to 20!",
          "The atmosphere freezes into solid ice",
          "The atmosphere doubles in thickness",
          "Nothing changes at all"
        ],
        "answerIndex": 0,
        "explanation": "MAVEN observed that Coronal Mass Ejections (CMEs) from the Sun strip away ions at dramatic speeds, carrying hundreds of pounds of Martian air into deep space every minute!"
      },
      {
        "question": "What secondary role does MAVEN perform to support rovers like Curiosity and Perseverance?",
        "options": [
          "Telecommunications data relay orbiter linking surface rovers to Earth",
          "Atmospheric weather satellite tracking hurricanes on Earth",
          "Solar panel cleaning service",
          "Supplying rover spare parts"
        ],
        "answerIndex": 0,
        "explanation": "MAVEN lowered its orbit in 2019 to serve as a vital ultra-high-frequency (UHF) relay communications satellite for NASA's rovers exploring Jezero and Gale craters!"
      }
    ]
  },
  {
    "id": "mission-22",
    "name": "InSight Lander",
    "year": "2018-2022",
    "decade": "2010s",
    "body": "Mars",
    "type": "Geophysics Lander",
    "category": "lander",
    "hardware": "SEIS Seismometer, HP3 Heat Probe, Solar Panels",
    "status": "Landed at Elysium Planitia",
    "statusCategory": "heritage",
    "story": "Placed a sensitive seismometer directly on Mars' soil to listen to 1,300+ marsquakes and map the planet's core!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA19664/PIA19664~medium.jpg",
    "nasaId": "PIA19664",
    "nasaTitle": "InSight Lander in Mars-Surface Configuration",
    "hardwareItems": [
      "SEIS Seismometer",
      "HP3 Heat Probe",
      "Solar Panels"
    ],
    "hardwareDeepDive": [
      {
        "name": "SEIS Ultra-Sensitive Seismometer",
        "function": "Listened under a vacuum dome to record over 1,300 marsquakes and meteorite impact thuds.",
        "heritage": "Landed at Elysium Planitia, resting with dust-coated solar arrays."
      },
      {
        "name": "HP3 Heat Flow and Physical Properties Probe",
        "function": "Designed to measure heat radiating from the Martian core.",
        "heritage": "Permanent planetary heritage fixture on Mars."
      }
    ],
    "quiz": [
      {
        "question": "What was InSight's primary scientific objective on Mars?",
        "options": [
          "Study the deep interior of Mars (crust, mantle, and metallic core) using geophysics",
          "Search for fossilized bones in lake beds",
          "Drive thousands of miles across sand dunes",
          "Fly a helicopter over volcanic craters"
        ],
        "answerIndex": 0,
        "explanation": "InSight was the first robotic explorer dedicated entirely to studying Mars' deep crust, mantle, and core using seismology and heat flow measurements."
      },
      {
        "question": "What ultra-sensitive French instrument did InSight place directly onto the Martian ground using its robotic arm?",
        "options": [
          "SEIS (Seismic Experiment for Interior Structure) seismometer covered by a Wind and Thermal Shield",
          "A mechanical shovel",
          "A sound recording microphone",
          "A metal detector"
        ],
        "answerIndex": 0,
        "explanation": "The robotic arm deployed SEIS and placed a dome-shaped shield over it to shield the delicate sensors from Martian winds, enabling it to detect tremors smaller than a hydrogen atom!"
      },
      {
        "question": "Approximately how many 'marsquakes' did InSight detect during its four years on the Red Planet?",
        "options": [
          "Over 1,300 marsquakes and meteorite impact tremors",
          "Exactly 0 marsquakes",
          "Over 500,000 earthquakes",
          "Only 2 tremors"
        ],
        "answerIndex": 0,
        "explanation": "InSight recorded more than 1,318 marsquakes, including a colossal magnitude 4.7 quake in May 2022 that reverberated across the entire planet for several hours!"
      },
      {
        "question": "What ultimately brought an end to InSight's mission in December 2022?",
        "options": [
          "Martian dust accumulated on its solar panels, slowly depleting its electrical power",
          "It fell into a deep crater",
          "It was struck by an asteroid",
          "Its computer overheated"
        ],
        "answerIndex": 0,
        "explanation": "Without any dust devil cleaning events, heavy Martian dust covered InSight's twin circular solar panels until its batteries could no longer power the lander."
      }
    ]
  },
  {
    "id": "mission-23",
    "name": "Perseverance Rover & Ingenuity",
    "year": "2020-Present",
    "decade": "2020s",
    "body": "Mars",
    "type": "Rover & Helicopter",
    "category": "rover",
    "hardware": "SuperCam, Sample Caching System, Ingenuity Rotorcraft",
    "status": "Active in Jezero Crater",
    "statusCategory": "active",
    "story": "Perseverance is collecting rock samples to bring back to Earth, while Ingenuity made history as the first powered aircraft on another planet!",
    "travelDuration": "7 to 8.5 months (approx. 225 million km)",
    "nasaImage": "https://images-assets.nasa.gov/image/PIA24836/PIA24836~medium.jpg",
    "nasaId": "PIA24836",
    "nasaTitle": "Perseverance Rover and Ingenuity Mars Helicopter at Rochette (PIA24836)",
    "hardwareItems": [
      "SuperCam",
      "Sample Caching System",
      "Ingenuity Rotorcraft"
    ],
    "hardwareDeepDive": [
      {
        "name": "SuperCam Laser & Microphone",
        "function": "Zaps rocks and recorded the first actual acoustic audio of wind and rover wheels on Mars!",
        "heritage": "Active today in Jezero Crater, depositing sealed titanium sample tubes."
      },
      {
        "name": "Ingenuity Mars Helicopter",
        "function": "First powered aerodynamic flight on another world; flew 72 times across 10+ miles of Mars!",
        "heritage": "Permanently grounded at 'Valinor Hills' as humanity's Wright Brothers moment on Mars."
      }
    ],
    "quiz": [
      {
        "question": "What history-making rotorcraft accompanied Perseverance to Mars and achieved 72 powered flights in the thin Martian atmosphere?",
        "options": [
          "Ingenuity Mars Helicopter",
          "Apollo Lunar Module",
          "Orion Capsule",
          "Cassini Probe"
        ],
        "answerIndex": 0,
        "explanation": "Ingenuity made history as the first powered, controlled aircraft on another planet, logging over 2 hours of flight time across 72 successful aerial sorties!"
      },
      {
        "question": "Where did Perseverance land on Mars in February 2021 to search for ancient biosignatures?",
        "options": [
          "Jezero Crater (an ancient river delta and lake basin)",
          "Olympus Mons caldera",
          "Elysium Planitia",
          "Gale Crater"
        ],
        "answerIndex": 0,
        "explanation": "Jezero Crater was chosen because it once held an ancient river that fed into a deep lake, leaving behind layered delta sediments ideal for preserving fossilized microbes!"
      },
      {
        "question": "What experimental instrument on Perseverance successfully converted Martian carbon dioxide into breathable oxygen?",
        "options": [
          "MOXIE (Mars Oxygen ISRU Experiment)",
          "ChemCam",
          "Mastcam-Z",
          "PIXL"
        ],
        "answerIndex": 0,
        "explanation": "MOXIE produced oxygen from the Martian atmosphere by heating CO2 to 800°C, demonstrating critical technology needed to support future human astronauts and rocket liftoffs!"
      },
      {
        "question": "What is the primary purpose of the sealed titanium tubes Perseverance is drilling and depositing on the Martian ground?",
        "options": [
          "To store pristine rock core samples for future retrieval by the Mars Sample Return mission!",
          "To serve as trail markers so the rover doesn't get lost",
          "To bury unused tools",
          "To create art sculptures on Mars"
        ],
        "answerIndex": 0,
        "explanation": "Perseverance is gathering hermetically sealed cores of sedimentary and volcanic rocks that will be collected by a future NASA/ESA mission to bring back to laboratories on Earth!"
      }
    ]
  },
  {
    "id": "mission-24",
    "name": "Artemis I (Orion)",
    "year": "2022",
    "decade": "2020s",
    "body": "Moon",
    "type": "Uncrewed Flight Test",
    "category": "probe",
    "hardware": "Orion Capsule, European Service Module",
    "status": "Returned to Earth (Splashdown)",
    "statusCategory": "impacted",
    "story": "Paved the way for human return to the Moon by flying Orion 40,000 miles past the Moon and back safely!",
    "travelDuration": "5 days transit to Moon (25.5 day mission)",
    "nasaImage": "https://images-assets.nasa.gov/image/art001e000672/art001e000672~medium.jpg",
    "nasaId": "art001e000672",
    "nasaTitle": "Orion Spacecraft Captures Earth and Moon during Artemis I Flight (Nov 2022)",
    "hardwareItems": [
      "Orion Capsule",
      "European Service Module"
    ],
    "hardwareDeepDive": [
      {
        "name": "Orion Crew Module & Heat Shield",
        "function": "Traveled 1.4 million miles and withstood 5,000°F re-entry temperatures returning at Mach 32.",
        "heritage": "Returned safely to Earth (splashdown in Pacific Ocean)."
      },
      {
        "name": "European Service Module (ESM)",
        "function": "Provided propulsion, power via 4 solar wings, and orbital maneuvering around the Moon.",
        "heritage": "Burned up safely in Earth upper atmosphere as designed."
      }
    ],
    "quiz": [
      {
        "question": "What colossal rocket launched the uncrewed Orion spacecraft on the Artemis I mission in November 2022?",
        "options": [
          "Space Launch System (SLS)",
          "Saturn I",
          "Atlas V",
          "Space Shuttle"
        ],
        "answerIndex": 0,
        "explanation": "The Space Launch System (SLS) is NASA's most powerful rocket since the Saturn V, producing 8.8 million pounds of thrust during liftoff from Kennedy Space Center!"
      },
      {
        "question": "How far past the far side of the Moon did the Orion capsule travel, setting a distance record for human-rated spacecraft?",
        "options": [
          "Over 40,000 miles (64,000 km) beyond the Moon",
          "Only 500 miles",
          "Exactly 10 miles",
          "1 million miles"
        ],
        "answerIndex": 0,
        "explanation": "Orion entered a distant retrograde orbit, traveling 268,563 miles from Earth—farther than any spacecraft designed for human crews had ever flown (breaking Apollo 13's record)!"
      },
      {
        "question": "What crucial system was tested when Orion re-entered Earth's atmosphere at 25,000 mph (Mach 32)?",
        "options": [
          "Orion's 16.5-foot advanced ablative heat shield withstanding temperatures of nearly 5,000°F (2,760°C)",
          "Solar panel steering motors",
          "Porthole windshield wipers",
          "Satellite TV antenna"
        ],
        "answerIndex": 0,
        "explanation": "Returning at lunar return velocities, Orion's heat shield proved it could protect human crews from temperatures half as hot as the surface of the Sun before splashing down safely!"
      },
      {
        "question": "What is the main goal of NASA's Artemis program following Artemis I?",
        "options": [
          "Landing the first woman and first person of color on the Moon and establishing long-term sustainable lunar exploration",
          "Abandoning deep space exploration",
          "Flying to Pluto without stopping",
          "Building a highway around the Earth"
        ],
        "answerIndex": 0,
        "explanation": "Artemis aims to return astronauts to the Moon, explore the lunar south pole for water ice, and build the Gateway space station to prepare for future crewed journeys to Mars!"
      }
    ]
  },
  {
    "id": "mission-25",
    "name": "Odysseus Lander (CLPS)",
    "year": "2024",
    "decade": "2020s",
    "body": "Moon",
    "type": "Commercial Lander",
    "category": "lander",
    "hardware": "NASA Laser Retroreflectors, Stereo Cameras",
    "status": "Landed at Moon South Pole",
    "statusCategory": "heritage",
    "story": "First American soft landing on the Moon in over 50 years, delivering scientific instruments to Malapert A crater near the south pole!",
    "travelDuration": "6 days transit to Moon",
    "nasaImage": "https://images-assets.nasa.gov/image/NHQ202402280001/NHQ202402280001~medium.jpg",
    "nasaId": "NHQ202402280001",
    "nasaTitle": "Intuitive Machines IM-1 Odysseus Lander Descent to Lunar South Pole (Feb 2024)",
    "hardwareItems": [
      "NASA Laser Retroreflectors",
      "Stereo Cameras"
    ],
    "hardwareDeepDive": [
      {
        "name": "NASA Laser Retroreflector Array (LRA)",
        "function": "Eight dome-shaped corner retroreflectors mounted on top of the lander for laser ranging.",
        "heritage": "Permanently stationed at Malapert A crater near the lunar south pole."
      },
      {
        "name": "Stereo Cameras for Lunar Plume-Surface Studies",
        "function": "Captured rocket plume ejecta physics during landing touchdown.",
        "heritage": "Historic heritage: First private spacecraft on Moon surface."
      }
    ],
    "quiz": [
      {
        "question": "What milestone did Intuitive Machines' 'Odysseus' lander achieve on February 22, 2024?",
        "options": [
          "First commercial spacecraft to soft-land on the Moon and first American lunar landing since Apollo 17 in 1972!",
          "First spacecraft to land on Jupiter",
          "First rover on Venus",
          "First human landing on Mars"
        ],
        "answerIndex": 0,
        "explanation": "Built by Intuitive Machines in Houston, Texas, under NASA's CLPS initiative, Odysseus became the first commercial lander in history to safely touch down on the lunar surface."
      },
      {
        "question": "What does NASA's CLPS initiative stand for?",
        "options": [
          "Commercial Lunar Payload Services",
          "Cosmic Lander Propulsion System",
          "Central Lunar Photography Satellite",
          "Crewed Lunar Program Survey"
        ],
        "answerIndex": 0,
        "explanation": "Commercial Lunar Payload Services (CLPS) contracts private American aerospace companies to deliver NASA science instruments and technology demonstrations to the Moon."
      },
      {
        "question": "Near which crater at the lunar south pole did Odysseus touch down?",
        "options": [
          "Malapert A crater (approx. 80° south latitude)",
          "Tycho crater",
          "Copernicus crater",
          "Gale crater"
        ],
        "answerIndex": 0,
        "explanation": "Odysseus touched down near Malapert A, closer to the Moon's rugged south pole than any previous American spacecraft, gathering vital environmental data for Artemis astronauts!"
      },
      {
        "question": "What NASA navigation technology helped Odysseus pinpoint its position during descent when onboard lasers malfunctioned?",
        "options": [
          "NASA's NDL (Navigation Doppler Lidar) technology demonstration payload",
          "Earth GPS cellphone signals",
          "A handheld magnetic compass",
          "A paper star map"
        ],
        "answerIndex": 0,
        "explanation": "NASA flight software patched Odysseus mid-flight to use NASA's experimental Navigation Doppler Lidar (NDL) payload for precision altitude and velocity data during landing!"
      }
    ]
  }
];

if (typeof module !== "undefined") { module.exports = MISSIONS_DATA; }
