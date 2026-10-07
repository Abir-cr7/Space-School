import json
import os
import re

with open('nasa_images_cache.json', 'r', encoding='utf-8') as f:
    images = json.load(f)

raw_missions = [
  {"name":"Ranger 7; 8; 9","year":"1964-1965","body":"Moon","type":"Impact Probes","hardware":"High-speed TV Cameras, Solar Panels","status":"Impacted Lunar Surface","story":"Transmitted over 17,000 close-up photos of the Moon seconds before crashing into the surface to prepare for Apollo landings!"},
  {"name":"Mariner 4","year":"1964-1965","body":"Mars","type":"Flyby Probe","hardware":"Digital TV Camera, Magnetometer, Solar Vanes","status":"Derelict in Solar Orbit","story":"The year is 1965! Mariner 4 completed the first successful Mars flyby, sending back the first 22 close-up photos of Martian craters!"},
  {"name":"Surveyor 1 to 7","year":"1966-1968","body":"Moon","type":"Soft Landers","hardware":"Soil Samplers, TV Cameras, Landing Legs","status":"Landed on Moon Surface","story":"Proved that the lunar soil was solid enough to support heavy human landers like the Apollo Lunar Module!"},
  {"name":"Lunar Orbiter 1 to 5","year":"1966-1967","body":"Moon","type":"Orbiters","hardware":"70mm Film Camera System, Film Processor","status":"De-orbited / Crashed onto Moon","story":"Mapped 99% of the lunar surface in extreme detail so NASA engineers could pick safe landing spots for astronauts!"},
  {"name":"Mariner 6 & 7","year":"1969","body":"Mars","type":"Flyby Probes","hardware":"Infrared Spectrometers, Wide-angle Cameras","status":"Derelict in Solar Orbit","story":"Flew past Mars' equator and south pole, proving that the Martian atmosphere is made mostly of carbon dioxide!"},
  {"name":"Apollo 11","year":"1969","body":"Moon","type":"Crewed Lander & Hardware","hardware":"Eagle Descent Stage, EASEP Experiments, US Flag","status":"Hardware Remains at Tranquility Base","story":"The historic first human lunar landing! Astronauts left the Eagle descent stage and scientific instruments on the Moon's surface!"},
  {"name":"Apollo 12 to 17","year":"1969-1972","body":"Moon","type":"Crewed Landers & Rovers","hardware":"Lunar Roving Vehicles (LRVs), ALSEP Science Packages, Descent Stages","status":"Hardware Remains on Moon","story":"Astronauts drove electric Lunar Rovers across valleys and craters, leaving behind 3 rovers and dozens of long-term science packages!"},
  {"name":"Mariner 9","year":"1971","body":"Mars","type":"First Mars Orbiter","hardware":"Ultraviolet Spectrometer, Digital Imaging Cameras","status":"Decommissioned in Mars Orbit","story":"Became the first artificial satellite around Mars! It mapped 100% of Mars and discovered the giant Olympus Mons volcano!"},
  {"name":"Viking 1 & 2","year":"1975-1976","body":"Mars","type":"Orbiters & Soft Landers","hardware":"Gas Chromatographs, Biology Instruments, Seismometers","status":"Landed on Mars Surface","story":"Viking 1 made the first successful soft landing on Mars in July 1976, taking the first color panoramas of the red landscape!"},
  {"name":"Clementine","year":"1994","body":"Moon","type":"Orbiter","hardware":"Multispectral Laser Ranging System, UV/IR Cameras","status":"Lost in Solar Orbit","story":"Returned the first global digital topography map of the Moon and discovered hints of water ice at the lunar south pole!"},
  {"name":"Mars Pathfinder & Sojourner","year":"1996-1997","body":"Mars","type":"Lander & First Rover","hardware":"Sojourner Microwave-Sized Rover, APXS Instrument","status":"Landed at Ares Vallis","story":"Deployed Sojourner—the very first robotic rover on Mars! It rolled on six wheels to analyze nearby Martian rocks!"},
  {"name":"Mars Global Surveyor","year":"1996-2006","body":"Mars","type":"Orbiter","hardware":"MOC Camera, Laser Altimeter","status":"Decommissioned in Orbit","story":"Studied Mars for nearly 10 years, discovering ancient gullies that proved liquid water once flowed across Mars!"},
  {"name":"Lunar Prospector","year":"1998-1999","body":"Moon","type":"Orbiter","hardware":"Neutron Spectrometer, Gamma Ray Spectrometer","status":"Intentionally Impacted Polar Crater","story":"Detected strong hydrogen signals at the Moon's shadowed poles, confirming hidden subsurface water ice!"},
  {"name":"2001 Mars Odyssey","year":"2001-Present","body":"Mars","type":"Active Orbiter","hardware":"THEMIS Thermal Imager, Gamma Ray Spectrometer","status":"Active in Mars Orbit","story":"NASA's longest-lived Mars spacecraft! It confirmed massive underground ice sheets beneath the Martian soil!"},
  {"name":"Spirit & Opportunity Rovers","year":"2003-2018","body":"Mars","type":"Twin Rovers","hardware":"Rock Abrasion Tools, Mössbauer Spectrometers, Solar Arrays","status":"Landed on Mars Surface","story":"These twin rovers explored Mars for years! Opportunity drove over 28 miles and proved ancient Mars had liquid lakes!"},
  {"name":"Mars Reconnaissance Orbiter (MRO)","year":"2005-Present","body":"Mars","type":"Active Orbiter","hardware":"HiRISE Ultra-HD Camera, CRISM Spectrometer","status":"Active in Mars Orbit","story":"Carries the giant HiRISE camera, sending back breathtaking high-resolution images of rovers, dust devils, and avalanches on Mars!"},
  {"name":"Phoenix Mars Lander","year":"2007-2008","body":"Mars","type":"Arctic Lander","hardware":"Robotic Arm Scoop, TEGA Analyzer, Microscopy Suite","status":"Landed at Martian Arctic","story":"Landed near Mars' north pole and used its robotic arm to dig up real water ice hidden just inches beneath the red soil!"},
  {"name":"Lunar Reconnaissance Orbiter (LRO)","year":"2009-Present","body":"Moon","type":"Active Orbiter","hardware":"LROC Cameras, Diviner Thermal Radiometer","status":"Active in Lunar Orbit","story":"Maps the Moon in 3D with sub-meter detail! It can even photograph the footsteps and rovers left behind by Apollo astronauts!"},
  {"name":"Curiosity Rover (MSL)","year":"2011-Present","body":"Mars","type":"Nuclear-Powered Rover","hardware":"ChemCam Laser, SAM Chemistry Lab, Robotic Drill","status":"Active in Gale Crater","story":"A car-sized nuclear-powered rover exploring Gale Crater! It zaps rocks with lasers and proved Mars once had habitable lakes!"},
  {"name":"GRAIL (Ebb & Flow)","year":"2011-2012","body":"Moon","type":"Twin Orbiters","hardware":"Ultra-precise Ka-band Ranging System","status":"Impacted Lunar Mountain","story":"Flew in formation around the Moon to map its internal gravitational field and crustal structure with extreme precision!"},
  {"name":"MAVEN Orbiter","year":"2013-Present","body":"Mars","type":"Atmospheric Orbiter","hardware":"Neutral Gas Spectrometer, Solar Wind Analyzers","status":"Active in Mars Orbit","story":"Measures how the solar wind strips away Mars' thin atmosphere into space over billions of years!"},
  {"name":"InSight Lander","year":"2018-2022","body":"Mars","type":"Geophysics Lander","hardware":"SEIS Seismometer, HP3 Heat Probe, Solar Panels","status":"Landed at Elysium Planitia","story":"Placed a sensitive seismometer directly on Mars' soil to listen to 1,300+ marsquakes and map the planet's core!"},
  {"name":"Perseverance Rover & Ingenuity","year":"2020-Present","body":"Mars","type":"Rover & Helicopter","hardware":"SuperCam, Sample Caching System, Ingenuity Rotorcraft","status":"Active in Jezero Crater","story":"Perseverance is collecting rock samples to bring back to Earth, while Ingenuity made history as the first powered aircraft on another planet!"},
  {"name":"Artemis I (Orion)","year":"2022","body":"Moon","type":"Uncrewed Flight Test","hardware":"Orion Capsule, European Service Module","status":"Returned to Earth (Splashdown)","story":"Paved the way for human return to the Moon by flying Orion 40,000 miles past the Moon and back safely!"},
  {"name":"Odysseus Lander (CLPS)","year":"2024","body":"Moon","type":"Commercial Lander","hardware":"NASA Laser Retroreflectors, Stereo Cameras","status":"Landed at Moon South Pole","story":"First American soft landing on the Moon in over 50 years, delivering scientific instruments to Malapert A crater near the south pole!"}
]

# Detailed hardware deep-dives for students
hardware_deep_dives = {
    "Ranger 7; 8; 9": [
        {"name": "High-Speed Vidicon TV Cameras", "function": "Snapped 4,308 pictures in the final 17 minutes before impact.", "heritage": "Left as metal debris on Mare Cognitum after high-speed crash."},
        {"name": "Cruciform Solar Panels", "function": "Generated 200W of electricity from solar sunlight during the 68-hour flight.", "heritage": "Fragments preserved on the lunar plains."}
    ],
    "Mariner 4": [
        {"name": "Slow-Scan Digital TV Camera", "function": "Recorded the first 21-line digital images onto a reel-to-reel magnetic tape recorder.", "heritage": "Still floating quietly in an endless solar orbit between Earth and Mars."},
        {"name": "Solar Pressure Vanes", "function": "Tiny mechanical flaps at the ends of solar panels used solar photon pressure to steer.", "heritage": "Intact on the derelict craft in deep space."}
    ],
    "Surveyor 1 to 7": [
        {"name": "Crushable Aluminum Landing Legs", "function": "Absorbed impact shock to prove lunar soil could safely support human landing gear.", "heritage": "Resting intact at Oceanus Procellarum and other maria."},
        {"name": "Surface Sampler Trenching Scoop", "function": "Dug trenches into lunar soil under remote control from Earth.", "heritage": "Surveyor 3 was visited by Apollo 12 astronauts in 1969!"}
    ],
    "Lunar Orbiter 1 to 5": [
        {"name": "Dual-Lens 70mm Eastman Kodak Camera", "function": "Exposed real photographic film in lunar orbit, developed it chemically onboard, and scanned it for radio transmission.", "heritage": "De-orbited intentionally to avoid interfering with Apollo missions."},
        {"name": "Automated Onboard Film Lab", "function": "A mini darkroom that chemically processed film in zero gravity.", "heritage": "Impacted lunar farside."}
    ],
    "Mariner 6 & 7": [
        {"name": "Infrared Radiometer & Spectrometer", "function": "Measured atmospheric temperature and composition of Martian polar caps.", "heritage": "Derelict in heliocentric orbit."},
        {"name": "High-Resolution Narrow-Angle Camera", "function": "Photographed 20% of Mars surface during close flyby.", "heritage": "Silent monument drifting in solar orbit."}
    ],
    "Apollo 11": [
        {"name": "Lunar Module Eagle Descent Stage", "function": "Rocket stage that touched down on Mare Tranquillitatis and served as the launchpad for Neil & Buzz.", "heritage": "Stands permanently at Tranquility Base with ladder plaque: 'We Came In Peace For All Mankind'."},
        {"name": "Laser Ranging Retroreflector (LRRR)", "function": "An array of 100 quartz prisms that reflects Earth-fired laser pulses to measure Moon distance to millimeter accuracy.", "heritage": "Still completely operational and actively pinged by Earth observatories today!"},
        {"name": "Passive Seismic Experiment (PSEP)", "function": "Solar-powered seismometer that recorded the first moonquakes and meteorite impacts.", "heritage": "Resting at Tranquility Base."}
    ],
    "Apollo 12 to 17": [
        {"name": "Lunar Roving Vehicle (LRV)", "function": "Electric 4x4 rover driven by astronauts up to 8 mph across mountains and craters.", "heritage": "Three Lunar Rovers remain parked on the Moon (Apollo 15, 16, 17) as historic monuments."},
        {"name": "ALSEP Nuclear Science Packages", "function": "Radioisotope-powered scientific instruments that transmitted data to Earth until 1977.", "heritage": "Preserved across five distinct lunar landing sites."}
    ],
    "Mariner 9": [
        {"name": "Digital Vidicon Imaging System", "function": "Outlasted a global dust storm to map 100% of Mars, discovering Olympus Mons and Valles Marineris.", "heritage": "Silent orbiter circling Mars until estimated decay around 2022-2070."},
        {"name": "Infrared Interferometer Spectrometer", "function": "Discovered water vapor in Mars' southern atmosphere.", "heritage": "Remains in high Mars orbit."}
    ],
    "Viking 1 & 2": [
        {"name": "Gas Chromatograph - Mass Spectrometer", "function": "Analyzed Martian soil chemistry to search for organic building blocks of life.", "heritage": "Preserved in Chryse Planitia and Utopia Planitia."},
        {"name": "Stereo Color Facsimile Cameras", "function": "Sent back the first crystal-clear color panoramas of the crimson Martian landscape.", "heritage": "Resting with US bicentennial flag emblems on Mars."}
    ],
    "Clementine": [
        {"name": "Ultraviolet / Visible (UVVIS) Camera", "function": "Mapped mineral distributions across lunar mountains and basins.", "heritage": "Spacecraft derelict in solar orbit."},
        {"name": "Bistatic Radar Experiment", "function": "Bounced radio waves into deep shadowed south polar craters, discovering hints of water ice.", "heritage": "Inspired modern Artemis lunar exploration."}
    ],
    "Mars Pathfinder & Sojourner": [
        {"name": "Sojourner Six-Wheeled Rover", "function": "Microwave-sized autonomous rover that explored 100 meters of Martian soil around the lander.", "heritage": "Rests peacefully at Ares Vallis, named Carl Sagan Memorial Station."},
        {"name": "Alpha Proton X-Ray Spectrometer (APXS)", "function": "Pressed against rocks like 'Yogi' and 'Barnacle Bill' to determine elemental composition.", "heritage": "Mounted to Sojourner's robotic nose on Mars."}
    ],
    "Mars Global Surveyor": [
        {"name": "Mars Orbiter Camera (MOC)", "function": "Snapped over 240,000 images over a decade, revealing modern gully channels formed by liquid flows.", "heritage": "Silent satellite in high Martian orbit."},
        {"name": "Mars Orbiter Laser Altimeter (MOLA)", "function": "Shot millions of laser pulses to create the definitive 3D topographic elevation map of Mars.", "heritage": "Decommissioned in orbit in 2006."}
    ],
    "Lunar Prospector": [
        {"name": "Neutron Spectrometer", "function": "Measured slowed cosmic neutrons to identify hydrogen concentrations (water ice) at lunar poles.", "heritage": "Crashed into Shoemaker Crater at lunar south pole in 1999."},
        {"name": "Gamma Ray Spectrometer", "function": "Constructed global maps of lunar surface elemental abundance (iron, titanium, thorium).", "heritage": "Impacted on Moon."}
    ],
    "2001 Mars Odyssey": [
        {"name": "THEMIS Thermal Emission Imaging System", "function": "Images Mars in 5 visible and 9 infrared bands to detect mineral deposits and buried ice.", "heritage": "Active today! Longest continually operating Mars spacecraft in human history."},
        {"name": "Gamma Ray Spectrometer Suite", "function": "Discovered vast reservoirs of subsurface water ice across high Martian latitudes.", "heritage": "Still in active service."}
    ],
    "Spirit & Opportunity Rovers": [
        {"name": "Rock Abrasion Tool (RAT)", "function": "Diamond-tipped teeth ground circular holes into Martian bedrock to expose unweathered interiors.", "heritage": "Opportunity drove a record-setting 28.06 miles across Meridiani Planum."},
        {"name": "Mössbauer Spectrometer", "function": "Identified the iron mineral jarosite, unequivocal proof that acidic liquid water once flooded Mars.", "heritage": "Resting on the Martian surface as planetary heritage landmarks."}
    ],
    "Mars Reconnaissance Orbiter (MRO)": [
        {"name": "HiRISE (High Resolution Imaging Science Experiment)", "function": "0.5-meter reflecting telescope that resolves features as tiny as a dinner plate on Mars.", "heritage": "Active today! Relays communications for Curiosity and Perseverance rovers."},
        {"name": "SHARAD Shallow Radar Sounder", "function": "Probes up to 1 kilometer beneath Martian crust to map buried polar ice sheets.", "heritage": "Actively operating in Mars orbit."}
    ],
    "Phoenix Mars Lander": [
        {"name": "Articulated Robotic Arm & Trenching Scoop", "function": "Dug into permafrost near the Martian north pole, exposing white ice that sublimated in days.", "heritage": "Landed at Vastitas Borealis, covered in seasonal winter frost."},
        {"name": "TEGA Thermal and Evolved Gas Analyzer", "function": "Baked soil samples in tiny ovens to sniff water vapor and carbon dioxide.", "heritage": "Preserved on the arctic Martian plains."}
    ],
    "Lunar Reconnaissance Orbiter (LRO)": [
        {"name": "LROC Narrow Angle Cameras", "function": "Capable of spotting Apollo Lunar Modules, rover tracks, and robotic landers from orbit.", "heritage": "Active in lunar orbit since 2009, mapping Artemis landing candidates."},
        {"name": "Diviner Lunar Radiometer", "function": "Discovered the coldest recorded spots in the solar system inside south polar craters (-415°F / 25 K).", "heritage": "Active today."}
    ],
    "Curiosity Rover (MSL)": [
        {"name": "ChemCam Laser Induced Breakdown Spectrometer", "function": "Fires pulses of infrared laser light to vaporize rock targets up to 7 meters away.", "heritage": "Active today in Gale Crater! Has driven over 31 kilometers."},
        {"name": "SAM (Sample Analysis at Mars) Laboratory", "function": "Onboard chemistry lab with ovens and spectrometers that detected organic carbon molecules.", "heritage": "Continues science operations inside Mount Sharp foothills."}
    ],
    "GRAIL (Ebb & Flow)": [
        {"name": "Lunar Gravity Ranging System", "function": "Measured micron-scale distance changes between twin probes to reveal Moon's thin crust.", "heritage": "Deliberately crashed into a lunar mountain near Goldschmidt crater in 2012."},
        {"name": "MoonKAM Student Cameras", "function": "Allowed middle school students across America to select targets on the Moon for photography.", "heritage": "Impacted on the Moon."}
    ],
    "MAVEN Orbiter": [
        {"name": "Neutral Gas and Ion Mass Spectrometer", "function": "Samples the composition and structure of Mars' upper atmosphere and escaping gases.", "heritage": "Active today, helping scientists understand how Mars lost its ancient oceans."},
        {"name": "Solar Wind Ion Analyzer", "function": "Monitors solar wind stripping away atmospheric ions into interplanetary space.", "heritage": "Active Mars relay asset."}
    ],
    "InSight Lander": [
        {"name": "SEIS Ultra-Sensitive Seismometer", "function": "Listened under a vacuum dome to record over 1,300 marsquakes and meteorite impact thuds.", "heritage": "Landed at Elysium Planitia, resting with dust-coated solar arrays."},
        {"name": "HP3 Heat Flow and Physical Properties Probe", "function": "Designed to measure heat radiating from the Martian core.", "heritage": "Permanent planetary heritage fixture on Mars."}
    ],
    "Perseverance Rover & Ingenuity": [
        {"name": "SuperCam Laser & Microphone", "function": "Zaps rocks and recorded the first actual acoustic audio of wind and rover wheels on Mars!", "heritage": "Active today in Jezero Crater, depositing sealed titanium sample tubes."},
        {"name": "Ingenuity Mars Helicopter", "function": "First powered aerodynamic flight on another world; flew 72 times across 10+ miles of Mars!", "heritage": "Permanently grounded at 'Valinor Hills' as humanity's Wright Brothers moment on Mars."}
    ],
    "Artemis I (Orion)": [
        {"name": "Orion Crew Module & Heat Shield", "function": "Traveled 1.4 million miles and withstood 5,000°F re-entry temperatures returning at Mach 32.", "heritage": "Returned safely to Earth (splashdown in Pacific Ocean)."},
        {"name": "European Service Module (ESM)", "function": "Provided propulsion, power via 4 solar wings, and orbital maneuvering around the Moon.", "heritage": "Burned up safely in Earth upper atmosphere as designed."}
    ],
    "Odysseus Lander (CLPS)": [
        {"name": "NASA Laser Retroreflector Array (LRA)", "function": "Eight dome-shaped corner retroreflectors mounted on top of the lander for laser ranging.", "heritage": "Permanently stationed at Malapert A crater near the lunar south pole."},
        {"name": "Stereo Cameras for Lunar Plume-Surface Studies", "function": "Captured rocket plume ejecta physics during landing touchdown.", "heritage": "Historic heritage: First private spacecraft on Moon surface."}
    ]
}

enriched = []
for i, m in enumerate(raw_missions):
    img_data = images.get(m['name'], {})
    img_url = img_data.get('image_url', '')
    nasa_id = img_data.get('nasa_id', f'NASA-M{i+1}')
    nasa_title = img_data.get('nasa_title', m['name'])
    
    yr = m['year'].split('-')[0].strip()
    yr_num = int(yr[:4])
    if yr_num < 1970:
        decade = '1960s'
    elif yr_num < 1980:
        decade = '1970s'
    elif yr_num < 2000:
        decade = '1990s'
    elif yr_num < 2010:
        decade = '2000s'
    elif yr_num < 2020:
        decade = '2010s'
    else:
        decade = '2020s'

    t = m['type'].lower()
    if 'rover' in t or 'helicopter' in t:
        cat = 'rover'
    elif 'lander' in t:
        cat = 'lander'
    elif 'orbiter' in t:
        cat = 'orbiter'
    else:
        cat = 'probe'

    travel = '3 days (384,400 km)' if m['body'] == 'Moon' else '7 to 8.5 months (approx. 225 million km)'
    if 'Artemis' in m['name']:
        travel = '5 days transit to Moon (25.5 day mission)'
    elif 'Odysseus' in m['name']:
        travel = '6 days transit to Moon'

    st = m['status'].lower()
    if 'active' in st:
        status_category = 'active'
    elif 'impact' in st or 'crashed' in st or 'de-orbited' in st or 'splashdown' in st:
        status_category = 'impacted'
    else:
        status_category = 'heritage'

    deep_dive = hardware_deep_dives.get(m['name'], [
        {"name": m['hardware'].split(',')[0], "function": "Primary scientific sensor", "heritage": "Hardware artifact"}
    ])

    # Preserve quiz data if already enriched
    existing_quiz = []
    if os.path.exists('js/data.js'):
        try:
            with open('js/data.js', 'r', encoding='utf-8') as df:
                old_text = df.read()
                m_match = re.search(r'const MISSIONS_DATA = (\[.*?\]);', old_text, re.DOTALL)
                if m_match:
                    old_missions = json.loads(m_match.group(1))
                    for om in old_missions:
                        if om.get('name') == m['name'] and 'quiz' in om:
                            existing_quiz = om['quiz']
                            break
        except Exception:
            pass

    obj = {
        'id': f'mission-{i+1}',
        'name': m['name'],
        'year': m['year'],
        'decade': decade,
        'body': m['body'],
        'type': m['type'],
        'category': cat,
        'hardware': m['hardware'],
        'status': m['status'],
        'statusCategory': status_category,
        'story': m['story'],
        'travelDuration': travel,
        'nasaImage': img_url,
        'nasaId': nasa_id,
        'nasaTitle': nasa_title,
        'hardwareItems': [h.strip() for h in m['hardware'].split(',')],
        'hardwareDeepDive': deep_dive,
        'quiz': existing_quiz
    }
    enriched.append(obj)

os.makedirs('js', exist_ok=True)
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write('// Space School: NASA Hardware & Planetary Heritage Dataset\n')
    f.write('// Official post-1960 NASA Missions to the Moon and Mars\n')
    f.write('const MISSIONS_DATA = ' + json.dumps(enriched, indent=2, ensure_ascii=False) + ';\n\n')
    f.write('if (typeof module !== "undefined") { module.exports = MISSIONS_DATA; }\n')

print(f"Generated js/data.js successfully with {len(enriched)} missions!")
