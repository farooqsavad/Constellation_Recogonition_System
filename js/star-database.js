/**
 * Comprehensive star database for constellation detection
 * Contains accurate information about stars in all 20 constellations
 */

const starDatabase = {
    // Andromeda constellation stars
    "Alpheratz": {
        name: "Alpheratz",
        altNames: ["Alpha Andromedae", "21 Andromedae"],
        spectralType: "B8IVpMnHg",
        magnitude: "2.07",
        distance: "97 light-years",
        constellation: "Andromeda",
        facts: [
            "Marks the northeastern corner of the Great Square of Pegasus",
            "Was once considered part of both Pegasus and Andromeda",
            "A mercury-manganese star with unusually strong spectral lines of these elements"
        ]
    },
    "Mirach": {
        name: "Mirach",
        altNames: ["Beta Andromedae", "43 Andromedae"],
        spectralType: "M0III",
        magnitude: "2.05",
        distance: "197 light-years",
        constellation: "Andromeda",
        facts: [
            "A red giant star that serves as a guide star to find the Andromeda Galaxy",
            "Its name comes from the Arabic word for 'girdle'",
            "About 100 times larger in diameter than our Sun"
        ]
    },
    "Almach": {
        name: "Almach",
        altNames: ["Gamma Andromedae", "57 Andromedae"],
        spectralType: "K3IIb + B9V",
        magnitude: "2.10",
        distance: "350 light-years",
        constellation: "Andromeda",
        facts: [
            "A spectacular binary star with gold and blue-green components",
            "One of the most beautiful double stars in the sky when viewed through a telescope",
            "The primary star is a golden-yellow giant, while its companion is a blue-green star"
        ]
    },
    "Delta Andromedae": {
        name: "Delta Andromedae",
        altNames: ["δ Andromedae", "Sadiradra"],
        spectralType: "K3III",
        magnitude: "3.28",
        distance: "101 light-years",
        constellation: "Andromeda",
        facts: [
            "An orange giant star",
            "About 10 times the radius of the Sun",
            "Approximately 60 times more luminous than the Sun"
        ]
    },
    "Adhil": {
        name: "Adhil",
        altNames: ["Xi Andromedae", "ξ Andromedae"],
        spectralType: "K0III-IV",
        magnitude: "4.88",
        distance: "196 light-years",
        constellation: "Andromeda",
        facts: [
            "An orange subgiant star",
            "The name was approved by the IAU in 2016",
            "Derived from the Arabic word meaning 'the train' (of a garment)"
        ]
    },

    // Aquila constellation stars
    "Altair": {
        name: "Altair",
        altNames: ["Alpha Aquilae", "53 Aquilae"],
        spectralType: "A7V",
        magnitude: "0.77",
        distance: "16.7 light-years",
        constellation: "Aquila",
        facts: [
            "The 12th brightest star in the night sky",
            "One of the closest bright stars to Earth",
            "Rotates very rapidly, completing one rotation in about 9 hours",
            "Forms the southern point of the Summer Triangle asterism"
        ]
    },
    "Alshain": {
        name: "Alshain",
        altNames: ["Beta Aquilae", "60 Aquilae"],
        spectralType: "G8IV",
        magnitude: "3.71",
        distance: "44.7 light-years",
        constellation: "Aquila",
        facts: [
            "A yellow-orange subgiant star",
            "The name comes from the Persian word for 'falcon'",
            "Has a faint red dwarf companion"
        ]
    },
    "Tarazed": {
        name: "Tarazed",
        altNames: ["Gamma Aquilae", "50 Aquilae"],
        spectralType: "K3II",
        magnitude: "2.72",
        distance: "460 light-years",
        constellation: "Aquila",
        facts: [
            "An orange bright giant star",
            "About 100 times the diameter of the Sun",
            "Approximately 2,700 times more luminous than the Sun"
        ]
    },
    "Deneb el Okab": {
        name: "Deneb el Okab",
        altNames: ["Zeta Aquilae", "17 Aquilae"],
        spectralType: "A0Vn",
        magnitude: "2.99",
        distance: "83 light-years",
        constellation: "Aquila",
        facts: [
            "A white main sequence star",
            "The name means 'the eagle's tail' in Arabic",
            "Rotates rapidly, with an equatorial velocity of about 331 km/s"
        ]
    },
    "Eta Aquilae": {
        name: "Eta Aquilae",
        altNames: ["η Aquilae"],
        spectralType: "F6Ib-G4Ib",
        magnitude: "3.5-4.4 (variable)",
        distance: "1,200 light-years",
        constellation: "Aquila",
        facts: [
            "A yellow-white supergiant Cepheid variable star",
            "Pulsates with a period of 7.177 days",
            "One of the brightest Cepheid variables visible from Earth"
        ]
    },

    // Auriga constellation stars
    "Capella": {
        name: "Capella",
        altNames: ["Alpha Aurigae", "13 Aurigae"],
        spectralType: "G5III + G0III",
        magnitude: "0.08",
        distance: "42.9 light-years",
        constellation: "Auriga",
        facts: [
            "The sixth brightest star in the night sky",
            "Actually a system of four stars (two binary pairs)",
            "The name means 'little she-goat' in Latin",
            "The brightest yellow star visible from Earth"
        ]
    },
    "Menkalinan": {
        name: "Menkalinan",
        altNames: ["Beta Aurigae", "34 Aurigae"],
        spectralType: "A2IV",
        magnitude: "1.90",
        distance: "81 light-years",
        constellation: "Auriga",
        facts: [
            "An eclipsing binary star system",
            "The two stars orbit each other every 3.96 days",
            "The name means 'shoulder of the charioteer' in Arabic"
        ]
    },
    "Hassaleh": {
        name: "Hassaleh",
        altNames: ["Iota Aurigae", "3 Aurigae"],
        spectralType: "K3II",
        magnitude: "2.69",
        distance: "512 light-years",
        constellation: "Auriga",
        facts: [
            "An orange bright giant star",
            "About 126 times the diameter of the Sun",
            "Approximately 3,600 times more luminous than the Sun"
        ]
    },
    "Almaaz": {
        name: "Almaaz",
        altNames: ["Epsilon Aurigae", "7 Aurigae"],
        spectralType: "F0Ia + B5V",
        magnitude: "2.92-3.83 (variable)",
        distance: "2,000 light-years",
        constellation: "Auriga",
        facts: [
            "An unusual eclipsing binary system",
            "Eclipses last nearly two years and occur every 27 years",
            "The eclipsing object is believed to be a huge disk of dust around a B-type star"
        ]
    },
    "Theta Aurigae": {
        name: "Theta Aurigae",
        altNames: ["θ Aurigae", "37 Aurigae"],
        spectralType: "A0III",
        magnitude: "2.62",
        distance: "173 light-years",
        constellation: "Auriga",
        facts: [
            "A white giant star",
            "A spectroscopic binary with a period of about 3.7 days",
            "Shows unusual chemical abundances in its atmosphere"
        ]
    },

    // Canis Major constellation stars
    "Sirius": {
        name: "Sirius",
        altNames: ["Alpha Canis Majoris", "Dog Star"],
        spectralType: "A1V",
        magnitude: "-1.46",
        distance: "8.6 light-years",
        constellation: "Canis Major",
        facts: [
            "The brightest star in the night sky",
            "Has a white dwarf companion called Sirius B",
            "Its name comes from the Greek word for 'glowing' or 'scorching'",
            "Was important to ancient Egyptians for predicting the Nile floods"
        ]
    },
    "Adhara": {
        name: "Adhara",
        altNames: ["Epsilon Canis Majoris", "21 Canis Majoris"],
        spectralType: "B2II",
        magnitude: "1.50",
        distance: "430 light-years",
        constellation: "Canis Major",
        facts: [
            "The second brightest star in Canis Major",
            "One of the brightest ultraviolet sources in the sky",
            "The name means 'virgins' in Arabic"
        ]
    },
    "Wezen": {
        name: "Wezen",
        altNames: ["Delta Canis Majoris", "25 Canis Majoris"],
        spectralType: "F8Ia",
        magnitude: "1.83",
        distance: "1,800 light-years",
        constellation: "Canis Major",
        facts: [
            "A yellow-white supergiant star",
            "About 200 times the diameter of the Sun",
            "Approximately 50,000 times more luminous than the Sun",
            "The name means 'weight' in Arabic"
        ]
    },
    "Mirzam": {
        name: "Mirzam",
        altNames: ["Beta Canis Majoris", "2 Canis Majoris"],
        spectralType: "B1II-III",
        magnitude: "1.98",
        distance: "500 light-years",
        constellation: "Canis Major",
        facts: [
            "A blue-white giant star",
            "A Beta Cephei variable that pulsates slightly",
            "The name means 'the announcer' in Arabic, as it rises before Sirius"
        ]
    },
    "Aludra": {
        name: "Aludra",
        altNames: ["Eta Canis Majoris", "31 Canis Majoris"],
        spectralType: "B5Ia",
        magnitude: "2.45",
        distance: "2,000 light-years",
        constellation: "Canis Major",
        facts: [
            "A blue supergiant star",
            "About 80 times the diameter of the Sun",
            "Approximately 176,000 times more luminous than the Sun",
            "The name means 'the virgin' in Arabic"
        ]
    },

    // Capricornus constellation stars
    "Deneb Algedi": {
        name: "Deneb Algedi",
        altNames: ["Delta Capricorni", "49 Capricorni"],
        spectralType: "A5V",
        magnitude: "2.85",
        distance: "39 light-years",
        constellation: "Capricornus",
        facts: [
            "The brightest star in Capricornus",
            "An eclipsing binary system",
            "The name means 'the tail of the goat' in Arabic"
        ]
    },
    "Dabih": {
        name: "Dabih",
        altNames: ["Beta Capricorni", "9 Capricorni"],
        spectralType: "K0III + A0V",
        magnitude: "3.05",
        distance: "328 light-years",
        constellation: "Capricornus",
        facts: [
            "A multiple star system",
            "The primary is an orange giant, while the secondary is a white main sequence star",
            "The name means 'the butcher' in Arabic"
        ]
    },
    "Nashira": {
        name: "Nashira",
        altNames: ["Gamma Capricorni", "40 Capricorni"],
        spectralType: "A7III",
        magnitude: "3.68",
        distance: "139 light-years",
        constellation: "Capricornus",
        facts: [
            "A white giant star",
            "The name means 'bearer of good news' in Arabic",
            "Forms a wide optical double with Deneb Algedi"
        ]
    },
    "Omega Capricorni": {
        name: "Omega Capricorni",
        altNames: ["ω Capricorni", "34 Capricorni"],
        spectralType: "K4III",
        magnitude: "4.12",
        distance: "630 light-years",
        constellation: "Capricornus",
        facts: [
            "An orange giant star",
            "About 60 times the diameter of the Sun",
            "Approximately 700 times more luminous than the Sun"
        ]
    },
    "Zeta Capricorni": {
        name: "Zeta Capricorni",
        altNames: ["ζ Capricorni", "36 Capricorni"],
        spectralType: "G4Ib",
        magnitude: "3.74",
        distance: "398 light-years",
        constellation: "Capricornus",
        facts: [
            "A yellow supergiant star",
            "About 35 times the diameter of the Sun",
            "Approximately 700 times more luminous than the Sun"
        ]
    },

    // Cetus constellation stars
    "Diphda": {
        name: "Diphda",
        altNames: ["Beta Ceti", "16 Ceti", "Deneb Kaitos"],
        spectralType: "K0III",
        magnitude: "2.04",
        distance: "96 light-years",
        constellation: "Cetus",
        facts: [
            "The brightest star in Cetus",
            "An orange giant star",
            "About 17 times the diameter of the Sun",
            "The name means 'the second frog' in Arabic"
        ]
    },
    "Menkar": {
        name: "Menkar",
        altNames: ["Alpha Ceti", "92 Ceti"],
        spectralType: "M1.5IIIa",
        magnitude: "2.54",
        distance: "220 light-years",
        constellation: "Cetus",
        facts: [
            "A red giant star",
            "About 89 times the diameter of the Sun",
            "The name means 'the nose' or 'snout' in Arabic"
        ]
    },
    "Mira": {
        name: "Mira",
        altNames: ["Omicron Ceti", "68 Ceti"],
        spectralType: "M7IIIe",
        magnitude: "2.0-10.1 (variable)",
        distance: "300 light-years",
        constellation: "Cetus",
        facts: [
            "The first variable star ever discovered",
            "A red giant that varies in brightness over about 332 days",
            "The name means 'wonderful' or 'astonishing' in Latin",
            "Has a white dwarf companion called Mira B"
        ]
    },
    "Tau Ceti": {
        name: "Tau Ceti",
        altNames: ["τ Ceti", "52 Ceti"],
        spectralType: "G8V",
        magnitude: "3.50",
        distance: "11.9 light-years",
        constellation: "Cetus",
        facts: [
            "One of the closest Sun-like stars to Earth",
            "Has at least four exoplanets, with one potentially in the habitable zone",
            "Often featured in science fiction as a destination for interstellar travel"
        ]
    },
    "Eta Ceti": {
        name: "Eta Ceti",
        altNames: ["η Ceti", "31 Ceti"],
        spectralType: "K1III",
        magnitude: "3.45",
        distance: "118 light-years",
        constellation: "Cetus",
        facts: [
            "An orange giant star",
            "About 15 times the diameter of the Sun",
            "Has two confirmed exoplanets"
        ]
    },

    // Columba constellation stars
    "Phact": {
        name: "Phact",
        altNames: ["Alpha Columbae", "7 Columbae"],
        spectralType: "B7IV",
        magnitude: "2.65",
        distance: "268 light-years",
        constellation: "Columba",
        facts: [
            "The brightest star in Columba",
            "A blue-white subgiant star",
            "The name comes from the Arabic word for 'ring dove'"
        ]
    },
    "Wazn": {
        name: "Wazn",
        altNames: ["Beta Columbae", "3 Columbae"],
        spectralType: "K1.5III",
        magnitude: "3.12",
        distance: "86 light-years",
        constellation: "Columba",
        facts: [
            "An orange giant star",
            "About 12 times the diameter of the Sun",
            "The name means 'weight' in Arabic"
        ]
    },
    "Epsilon Columbae": {
        name: "Epsilon Columbae",
        altNames: ["ε Columbae", "12 Columbae"],
        spectralType: "K1II-III",
        magnitude: "3.87",
        distance: "263 light-years",
        constellation: "Columba",
        facts: [
            "An orange giant star",
            "About 25 times the diameter of the Sun",
            "Approximately 200 times more luminous than the Sun"
        ]
    },
    "Delta Columbae": {
        name: "Delta Columbae",
        altNames: ["δ Columbae", "15 Columbae"],
        spectralType: "G7II",
        magnitude: "3.85",
        distance: "237 light-years",
        constellation: "Columba",
        facts: [
            "A yellow bright giant star",
            "About 30 times the diameter of the Sun",
            "Approximately 300 times more luminous than the Sun"
        ]
    },
    "Eta Columbae": {
        name: "Eta Columbae",
        altNames: ["η Columbae", "1 Columbae"],
        spectralType: "B9V",
        magnitude: "3.96",
        distance: "531 light-years",
        constellation: "Columba",
        facts: [
            "A blue-white main sequence star",
            "About 3.5 times the diameter of the Sun",
            "Approximately 290 times more luminous than the Sun"
        ]
    },

    // Gemini constellation stars
    "Pollux": {
        name: "Pollux",
        altNames: ["Beta Geminorum", "78 Geminorum"],
        spectralType: "K0III",
        magnitude: "1.14",
        distance: "33.8 light-years",
        constellation: "Gemini",
        facts: [
            "The brightest star in Gemini",
            "An orange giant star",
            "Has a confirmed exoplanet",
            "Named after one of the mythological twins (Pollux and Castor)"
        ]
    },
    "Castor": {
        name: "Castor",
        altNames: ["Alpha Geminorum", "66 Geminorum"],
        spectralType: "A1V + A2V + M1V",
        magnitude: "1.58",
        distance: "51 light-years",
        constellation: "Gemini",
        facts: [
            "A sextuple star system (three binary pairs)",
            "The second brightest star in Gemini",
            "Named after one of the mythological twins (Pollux and Castor)"
        ]
    },
    "Alhena": {
        name: "Alhena",
        altNames: ["Gamma Geminorum", "24 Geminorum"],
        spectralType: "A0IV",
        magnitude: "1.93",
        distance: "109 light-years",
        constellation: "Gemini",
        facts: [
            "A white subgiant star",
            "The third brightest star in Gemini",
            "The name comes from the Arabic word for 'brand' or 'mark'"
        ]
    },
    "Wasat": {
        name: "Wasat",
        altNames: ["Delta Geminorum", "55 Geminorum"],
        spectralType: "F0IV",
        magnitude: "3.53",
        distance: "60.5 light-years",
        constellation: "Gemini",
        facts: [
            "A yellow-white subgiant star",
            "Has a faint red dwarf companion",
            "The name means 'middle' in Arabic, as it marks the center of the constellation"
        ]
    },
    "Mebsuta": {
        name: "Mebsuta",
        altNames: ["Epsilon Geminorum", "27 Geminorum"],
        spectralType: "G8Ib",
        magnitude: "3.06",
        distance: "840 light-years",
        constellation: "Gemini",
        facts: [
            "A yellow supergiant star",
            "About 150 times the diameter of the Sun",
            "Approximately 8,500 times more luminous than the Sun",
            "The name means 'the outstretched paw' in Arabic"
        ]
    },

    // Grus constellation stars
    "Alnair": {
        name: "Alnair",
        altNames: ["Alpha Gruis", "Al Nair"],
        spectralType: "B7IV",
        magnitude: "1.74",
        distance: "101 light-years",
        constellation: "Grus",
        facts: [
            "The brightest star in Grus",
            "A blue-white subgiant star",
            "The name means 'the bright one' in Arabic",
            "One of the navigational stars used in celestial navigation"
        ]
    },
    "Beta Gruis": {
        name: "Beta Gruis",
        altNames: ["β Gruis", "Tiaki"],
        spectralType: "M5III",
        magnitude: "2.1",
        distance: "170 light-years",
        constellation: "Grus",
        facts: [
            "A red giant star",
            "About 180 times the diameter of the Sun",
            "Approximately 2,000 times more luminous than the Sun",
            "The name 'Tiaki' means 'guide' in Māori"
        ]
    },
    "Gamma Gruis": {
        name: "Gamma Gruis",
        altNames: ["γ Gruis"],
        spectralType: "B8III",
        magnitude: "3.01",
        distance: "211 light-years",
        constellation: "Grus",
        facts: [
            "A blue-white giant star",
            "About 4 times the diameter of the Sun",
            "Approximately 350 times more luminous than the Sun"
        ]
    },
    "Delta Gruis": {
        name: "Delta Gruis",
        altNames: ["δ Gruis"],
        spectralType: "M4.5III",
        magnitude: "3.97",
        distance: "325 light-years",
        constellation: "Grus",
        facts: [
            "A red giant star",
            "About 60 times the diameter of the Sun",
            "Approximately 900 times more luminous than the Sun"
        ]
    },
    "Epsilon Gruis": {
        name: "Epsilon Gruis",
        altNames: ["ε Gruis"],
        spectralType: "A2V",
        magnitude: "3.49",
        distance: "130 light-years",
        constellation: "Grus",
        facts: [
            "A white main sequence star",
            "About twice the diameter of the Sun",
            "Approximately 25 times more luminous than the Sun"
        ]
    },

    // Leo constellation stars
    "Regulus": {
        name: "Regulus",
        altNames: ["Alpha Leonis", "32 Leonis"],
        spectralType: "B8IVn",
        magnitude: "1.35",
        distance: "79 light-years",
        constellation: "Leo",
        facts: [
            "The brightest star in Leo",
            "A quadruple star system",
            "Rotates very rapidly, completing one rotation in just 15.9 hours",
            "The name means 'little king' in Latin"
        ]
    },
    "Denebola": {
        name: "Denebola",
        altNames: ["Beta Leonis", "94 Leonis"],
        spectralType: "A3V",
        magnitude: "2.14",
        distance: "36 light-years",
        constellation: "Leo",
        facts: [
            "The second brightest star in Leo",
            "A white main sequence star",
            "Has a debris disk, suggesting a planetary system",
            "The name means 'the lion's tail' in Arabic"
        ]
    },
    "Algieba": {
        name: "Algieba",
        altNames: ["Gamma Leonis", "41 Leonis"],
        spectralType: "K1III + G7III",
        magnitude: "2.08",
        distance: "130 light-years",
        constellation: "Leo",
        facts: [
            "A binary star system consisting of two giant stars",
            "One of the finest double stars for small telescopes",
            "The name means 'the forehead' in Arabic"
        ]
    },
    "Zosma": {
        name: "Zosma",
        altNames: ["Delta Leonis", "68 Leonis"],
        spectralType: "A4V",
        magnitude: "2.56",
        distance: "58 light-years",
        constellation: "Leo",
        facts: [
            "A white main sequence star",
            "About 2.2 times the diameter of the Sun",
            "The name means 'the girdle' in ancient Greek"
        ]
    },
    "Epsilon Leonis": {
        name: "Epsilon Leonis",
        altNames: ["ε Leonis", "Ras Elased Australis"],
        spectralType: "G1II",
        magnitude: "2.98",
        distance: "251 light-years",
        constellation: "Leo",
        facts: [
            "A yellow bright giant star",
            "About 21 times the diameter of the Sun",
            "Approximately 288 times more luminous than the Sun",
            "The name means 'the southern star of the lion's head' in Arabic"
        ]
    },

    // Orion constellation stars
    "Betelgeuse": {
        name: "Betelgeuse",
        altNames: ["Alpha Orionis", "58 Orionis"],
        spectralType: "M1-2Ia-ab",
        magnitude: "0.0-1.3 (variable)",
        distance: "548 light-years",
        constellation: "Orion",
        facts: [
            "A red supergiant star marking Orion's right shoulder",
            "One of the largest known stars, with a diameter about 1,000 times that of the Sun",
            "A semiregular variable star that changes in brightness",
            "Expected to explode as a supernova within the next 100,000 years"
        ]
    },
    "Rigel": {
        name: "Rigel",
        altNames: ["Beta Orionis", "19 Orionis"],
        spectralType: "B8Ia",
        magnitude: "0.13",
        distance: "860 light-years",
        constellation: "Orion",
        facts: [
            "A blue-white supergiant marking Orion's left foot",
            "The seventh brightest star in the night sky",
            "About 79 times the diameter of the Sun",
            "Approximately 120,000 times more luminous than the Sun",
            "The name comes from the Arabic phrase meaning 'the left leg of the giant'"
        ]
    },
    "Bellatrix": {
        name: "Bellatrix",
        altNames: ["Gamma Orionis", "24 Orionis"],
        spectralType: "B2III",
        magnitude: "1.64",
        distance: "250 light-years",
        constellation: "Orion",
        facts: [
            "A blue giant star marking Orion's left shoulder",
            "The name means 'female warrior' in Latin",
            "About 6 times the diameter of the Sun",
            "Approximately 6,400 times more luminous than the Sun"
        ]
    },
    "Mintaka": {
        name: "Mintaka",
        altNames: ["Delta Orionis", "34 Orionis"],
        spectralType: "O9.5II + B0III",
        magnitude: "2.23",
        distance: "1,200 light-years",
        constellation: "Orion",
        facts: [
            "The westernmost star in Orion's Belt",
            "A multiple star system",
            "The name means 'belt' in Arabic",
            "Almost perfectly aligned with the celestial equator"
        ]
    },
    "Alnilam": {
        name: "Alnilam",
        altNames: ["Epsilon Orionis", "46 Orionis"],
        spectralType: "B0Ia",
        magnitude: "1.69",
        distance: "2,000 light-years",
        constellation: "Orion",
        facts: [
            "The middle star in Orion's Belt",
            "A blue supergiant star",
            "About 30 times the mass of the Sun",
            "Approximately 375,000 times more luminous than the Sun",
            "The name means 'string of pearls' in Arabic"
        ]
    },
    "Alnitak": {
        name: "Alnitak",
        altNames: ["Zeta Orionis", "50 Orionis"],
        spectralType: "O9.5Ib + B0III",
        magnitude: "1.88",
        distance: "1,260 light-years",
        constellation: "Orion",
        facts: [
            "The easternmost star in Orion's Belt",
            "A triple star system",
            "The primary is a blue supergiant",
            "The name means 'the girdle' in Arabic",
            "Located near the Flame Nebula and the Horsehead Nebula"
        ]
    },
    "Saiph": {
        name: "Saiph",
        altNames: ["Kappa Orionis", "53 Orionis"],
        spectralType: "B0.5Ia",
        magnitude: "2.06",
        distance: "650 light-years",
        constellation: "Orion",
        facts: [
            "A blue supergiant marking Orion's right foot",
            "About 11 times the mass of the Sun",
            "Approximately 57,500 times more luminous than the Sun",
            "The name means 'sword of the giant' in Arabic"
        ]
    },

    // Pavo constellation stars
    "Peacock": {
        name: "Peacock",
        altNames: ["Alpha Pavonis"],
        spectralType: "B2IV",
        magnitude: "1.94",
        distance: "183 light-years",
        constellation: "Pavo",
        facts: [
            "The brightest star in Pavo",
            "A blue-white subgiant star",
            "Named after the constellation, which represents a peacock",
            "One of the navigational stars used in celestial navigation"
        ]
    },
    "Beta Pavonis": {
        name: "Beta Pavonis",
        altNames: ["β Pavonis"],
        spectralType: "A7III",
        magnitude: "3.42",
        distance: "137 light-years",
        constellation: "Pavo",
        facts: [
            "A white giant star",
            "About 4 times the diameter of the Sun",
            "Approximately 50 times more luminous than the Sun"
        ]
    },
    "Delta Pavonis": {
        name: "Delta Pavonis",
        altNames: ["δ Pavonis"],
        spectralType: "G8IV",
        magnitude: "3.56",
        distance: "19.9 light-years",
        constellation: "Pavo",
        facts: [
            "A yellow subgiant star",
            "One of the closest Sun-like stars to Earth",
            "Considered a good candidate for the search for extraterrestrial intelligence",
            "About 1.2 times the diameter of the Sun"
        ]
    },
    "Eta Pavonis": {
        name: "Eta Pavonis",
        altNames: ["η Pavonis"],
        spectralType: "K2III",
        magnitude: "3.62",
        distance: "359 light-years",
        constellation: "Pavo",
        facts: [
            "An orange giant star",
            "About 25 times the diameter of the Sun",
            "Approximately 200 times more luminous than the Sun"
        ]
    },
    "Lambda Pavonis": {
        name: "Lambda Pavonis",
        altNames: ["λ Pavonis"],
        spectralType: "B2III",
        magnitude: "4.22",
        distance: "1,430 light-years",
        constellation: "Pavo",
        facts: [
            "A blue giant star",
            "About 8 times the diameter of the Sun",
            "Approximately 5,000 times more luminous than the Sun"
        ]
    },

    // Pegasus constellation stars
    "Enif": {
        name: "Enif",
        altNames: ["Epsilon Pegasi", "8 Pegasi"],
        spectralType: "K2Ib",
        magnitude: "2.38",
        distance: "690 light-years",
        constellation: "Pegasus",
        facts: [
            "The brightest star in Pegasus",
            "An orange supergiant star",
            "About 185 times the diameter of the Sun",
            "Approximately 12,000 times more luminous than the Sun",
            "The name means 'the nose' in Arabic, referring to the nose of the winged horse"
        ]
    },
    "Scheat": {
        name: "Scheat",
        altNames: ["Beta Pegasi", "53 Pegasi"],
        spectralType: "M2.5II-III",
        magnitude: "2.42-2.74 (variable)",
        distance: "196 light-years",
        constellation: "Pegasus",
        facts: [
            "A red giant star",
            "A semiregular variable star",
            "About 95 times the diameter of the Sun",
            "The name comes from the Arabic word meaning 'the foreleg'"
        ]
    },
    "Markab": {
        name: "Markab",
        altNames: ["Alpha Pegasi", "54 Pegasi"],
        spectralType: "B9III",
        magnitude: "2.49",
        distance: "140 light-years",
        constellation: "Pegasus",
        facts: [
            "A blue-white giant star",
            "Marks the southwestern corner of the Great Square of Pegasus",
            "About 4.7 times the diameter of the Sun",
            "The name means 'the saddle' in Arabic"
        ]
    },
    "Algenib": {
        name: "Algenib",
        altNames: ["Gamma Pegasi", "88 Pegasi"],
        spectralType: "B2IV",
        magnitude: "2.83",
        distance: "333 light-years",
        constellation: "Pegasus",
        facts: [
            "A blue-white subgiant star",
            "Marks the southeastern corner of the Great Square of Pegasus",
            "A Beta Cephei variable star that pulsates slightly",
            "The name means 'the side' in Arabic"
        ]
    },
    "Matar": {
        name: "Matar",
        altNames: ["Eta Pegasi", "44 Pegasi"],
        spectralType: "G2II-III + F0V",
        magnitude: "2.94",
        distance: "215 light-years",
        constellation: "Pegasus",
        facts: [
            "A binary star system",
            "The primary is a yellow bright giant",
            "The name means 'lucky rain of shooting stars' in Arabic"
        ]
    },

    // Phoenix constellation stars
    "Ankaa": {
        name: "Ankaa",
        altNames: ["Alpha Phoenicis"],
        spectralType: "K0III",
        magnitude: "2.40",
        distance: "85 light-years",
        constellation: "Phoenix",
        facts: [
            "The brightest star in Phoenix",
            "An orange giant star",
            "About 15 times the diameter of the Sun",
            "The name comes from the Arabic word for 'phoenix'"
        ]
    },
    "Beta Phoenicis": {
        name: "Beta Phoenicis",
        altNames: ["β Phoenicis"],
        spectralType: "G8III + G8III",
        magnitude: "3.32",
        distance: "198 light-years",
        constellation: "Phoenix",
        facts: [
            "A binary star system consisting of two yellow giant stars",
            "The two components orbit each other with a period of about 168 years",
            "Each star is about 10 times the diameter of the Sun"
        ]
    },
    "Gamma Phoenicis": {
        name: "Gamma Phoenicis",
        altNames: ["γ Phoenicis"],
        spectralType: "K5III",
        magnitude: "3.41",
        distance: "234 light-years",
        constellation: "Phoenix",
        facts: [
            "An orange giant star",
            "About 60 times the diameter of the Sun",
            "Approximately 550 times more luminous than the Sun"
        ]
    },
    "Delta Phoenicis": {
        name: "Delta Phoenicis",
        altNames: ["δ Phoenicis"],
        spectralType: "B8V",
        magnitude: "3.95",
        distance: "142 light-years",
        constellation: "Phoenix",
        facts: [
            "A blue-white main sequence star",
            "About 3 times the diameter of the Sun",
            "Approximately 100 times more luminous than the Sun"
        ]
    },
    "Zeta Phoenicis": {
        name: "Zeta Phoenicis",
        altNames: ["ζ Phoenicis"],
        spectralType: "B6V + B9V",
        magnitude: "3.9-4.4 (variable)",
        distance: "300 light-years",
        constellation: "Phoenix",
        facts: [
            "An eclipsing binary star system",
            "The two stars orbit each other every 1.67 days",
            "The brightness varies as one star passes in front of the other"
        ]
    },

    // Pisces constellation stars
    "Eta Piscium": {
        name: "Eta Piscium",
        altNames: ["η Piscium", "Alpherg"],
        spectralType: "G7III",
        magnitude: "3.62",
        distance: "294 light-years",
        constellation: "Pisces",
        facts: [
            "The brightest star in Pisces",
            "A yellow giant star",
            "About 26 times the diameter of the Sun",
            "Approximately 316 times more luminous than the Sun"
        ]
    },
    "Gamma Piscium": {
        name: "Gamma Piscium",
        altNames: ["γ Piscium"],
        spectralType: "G9III",
        magnitude: "3.70",
        distance: "131 light-years",
        constellation: "Pisces",
        facts: [
            "A yellow giant star",
            "About 10 times the diameter of the Sun",
            "Approximately 63 times more luminous than the Sun"
        ]
    },
    "Omega Piscium": {
        name: "Omega Piscium",
        altNames: ["ω Piscium"],
        spectralType: "F4IV",
        magnitude: "4.03",
        distance: "106 light-years",
        constellation: "Pisces",
        facts: [
            "A yellow-white subgiant star",
            "About 2.5 times the diameter of the Sun",
            "Approximately 10 times more luminous than the Sun"
        ]
    },
    "Iota Piscium": {
        name: "Iota Piscium",
        altNames: ["ι Piscium"],
        spectralType: "F7V",
        magnitude: "4.13",
        distance: "45 light-years",
        constellation: "Pisces",
        facts: [
            "A yellow-white main sequence star",
            "Similar to our Sun but slightly hotter and more massive",
            "About 1.5 times the diameter of the Sun",
            "Approximately 3.3 times more luminous than the Sun"
        ]
    },
    "Alrescha": {
        name: "Alrescha",
        altNames: ["Alpha Piscium", "α Piscium"],
        spectralType: "A2V + A3V",
        magnitude: "3.82",
        distance: "139 light-years",
        constellation: "Pisces",
        facts: [
            "A binary star system consisting of two white stars",
            "The two components orbit each other with a period of about 720 years",
            "The name means 'the cord' in Arabic, referring to the cord connecting the two fish in the constellation"
        ]
    },

    // Piscis Austrinus constellation stars
    "Fomalhaut": {
        name: "Fomalhaut",
        altNames: ["Alpha Piscis Austrini", "24 Piscis Austrini"],
        spectralType: "A3V",
        magnitude: "1.16",
        distance: "25 light-years",
        constellation: "Piscis Austrinus",
        facts: [
            "The brightest star in Piscis Austrinus",
            "The 18th brightest star in the night sky",
            "Has a debris disk and at least one exoplanet",
            "The name means 'mouth of the whale' or 'mouth of the southern fish' in Arabic"
        ]
    },
    "Epsilon Piscis Austrini": {
        name: "Epsilon Piscis Austrini",
        altNames: ["ε Piscis Austrini"],
        spectralType: "B8V",
        magnitude: "4.18",
        distance: "400 light-years",
        constellation: "Piscis Austrinus",
        facts: [
            "A blue-white main sequence star",
            "About 3 times the diameter of the Sun",
            "Approximately 230 times more luminous than the Sun"
        ]
    },
    "Delta Piscis Austrini": {
        name: "Delta Piscis Austrini",
        altNames: ["δ Piscis Austrini"],
        spectralType: "G8III",
        magnitude: "4.21",
        distance: "171 light-years",
        constellation: "Piscis Austrinus",
        facts: [
            "A yellow giant star",
            "About 10 times the diameter of the Sun",
            "Approximately 60 times more luminous than the Sun"
        ]
    },
    "Beta Piscis Austrini": {
        name: "Beta Piscis Austrini",
        altNames: ["β Piscis Austrini"],
        spectralType: "A1V",
        magnitude: "4.29",
        distance: "148 light-years",
        constellation: "Piscis Austrinus",
        facts: [
            "A white main sequence star",
            "About 2.3 times the diameter of the Sun",
            "Approximately 25 times more luminous than the Sun"
        ]
    },
    "Gamma Piscis Austrini": {
        name: "Gamma Piscis Austrini",
        altNames: ["γ Piscis Austrini"],
        spectralType: "A0V",
        magnitude: "4.46",
        distance: "215 light-years",
        constellation: "Piscis Austrinus",
        facts: [
            "A white main sequence star",
            "About 2.5 times the diameter of the Sun",
            "Approximately 40 times more luminous than the Sun"
        ]
    },

    // Puppis constellation stars
    "Naos": {
        name: "Naos",
        altNames: ["Zeta Puppis", "ζ Puppis"],
        spectralType: "O4If",
        magnitude: "2.21",
        distance: "1,080 light-years",
        constellation: "Puppis",
        facts: [
            "The brightest star in Puppis",
            "One of the hottest and most luminous stars visible to the naked eye",
            "About 60 times the mass of the Sun",
            "Approximately 550,000 times more luminous than the Sun",
            "Moving through space at an unusually high velocity"
        ]
    },
    "Tureis": {
        name: "Tureis",
        altNames: ["Rho Puppis", "ρ Puppis"],
        spectralType: "F5II-III",
        magnitude: "2.81",
        distance: "63 light-years",
        constellation: "Puppis",
        facts: [
            "A yellow-white bright giant star",
            "A Delta Scuti variable that pulsates slightly",
            "About 3.5 times the diameter of the Sun",
            "Approximately 22 times more luminous than the Sun"
        ]
    },
    "Pi Puppis": {
        name: "Pi Puppis",
        altNames: ["π Puppis"],
        spectralType: "K3Ib",
        magnitude: "2.73",
        distance: "810 light-years",
        constellation: "Puppis",
        facts: [
            "An orange supergiant star",
            "About 200 times the diameter of the Sun",
            "Approximately 15,000 times more luminous than the Sun",
            "A member of the Collinder 135 open cluster"
        ]
    },
    "Tau Puppis": {
        name: "Tau Puppis",
        altNames: ["τ Puppis"],
        spectralType: "K1III",
        magnitude: "2.95",
        distance: "182 light-years",
        constellation: "Puppis",
        facts: [
            "An orange giant star",
            "About 20 times the diameter of the Sun",
            "Approximately 150 times more luminous than the Sun"
        ]
    },
    "Xi Puppis": {
        name: "Xi Puppis",
        altNames: ["ξ Puppis", "Asmidiske"],
        spectralType: "G5Ib",
        magnitude: "3.34",
        distance: "1,350 light-years",
        constellation: "Puppis",
        facts: [
            "A yellow supergiant star",
            "About 150 times the diameter of the Sun",
            "Approximately 15,000 times more luminous than the Sun",
            "The name 'Asmidiske' is of uncertain origin"
        ]
    },

    // Ursa Major constellation stars
    "Alioth": {
        name: "Alioth",
        altNames: ["Epsilon Ursae Majoris", "77 Ursae Majoris"],
        spectralType: "A0IV",
        magnitude: "1.77",
        distance: "81 light-years",
        constellation: "Ursa Major",
        facts: [
            "The brightest star in Ursa Major",
            "The 31st brightest star in the night sky",
            "Forms part of the handle of the Big Dipper",
            "A white subgiant star",
            "The name comes from the Arabic word meaning 'the fat tail of a sheep'"
        ]
    },
    "Dubhe": {
        name: "Dubhe",
        altNames: ["Alpha Ursae Majoris", "50 Ursae Majoris"],
        spectralType: "K0III + F0V",
        magnitude: "1.79",
        distance: "123 light-years",
        constellation: "Ursa Major",
        facts: [
            "The second brightest star in Ursa Major",
            "One of the 'Pointer Stars' that help locate Polaris",
            "A binary star system",
            "The name comes from the Arabic word for 'bear'"
        ]
    },
    "Alkaid": {
        name: "Alkaid",
        altNames: ["Eta Ursae Majoris", "85 Ursae Majoris", "Benetnash"],
        spectralType: "B3V",
        magnitude: "1.86",
        distance: "104 light-years",
        constellation: "Ursa Major",
        facts: [
            "The third brightest star in Ursa Major",
            "Forms the tip of the Big Dipper's handle",
            "A blue main sequence star",
            "The name means 'the leader' in Arabic"
        ]
    },
    "Mizar": {
        name: "Mizar",
        altNames: ["Zeta Ursae Majoris", "79 Ursae Majoris"],
        spectralType: "A2V + A2V",
        magnitude: "2.04",
        distance: "83 light-years",
        constellation: "Ursa Major",
        facts: [
            "Forms a famous double star with Alcor",
            "The first binary star discovered through a telescope",
            "Each component is itself a spectroscopic binary",
            "The name means 'waistband' in Arabic"
        ]
    },
    "Merak": {
        name: "Merak",
        altNames: ["Beta Ursae Majoris", "48 Ursae Majoris"],
        spectralType: "A1V",
        magnitude: "2.37",
        distance: "79 light-years",
        constellation: "Ursa Major",
        facts: [
            "One of the 'Pointer Stars' that help locate Polaris",
            "A white main sequence star",
            "About 2.7 times the diameter of the Sun",
            "The name means 'the loins' in Arabic"
        ]
    },

    // Ursa Minor constellation stars
    "Polaris": {
        name: "Polaris",
        altNames: ["Alpha Ursae Minoris", "North Star", "Pole Star"],
        spectralType: "F7Ib",
        magnitude: "1.98",
        distance: "430 light-years",
        constellation: "Ursa Minor",
        facts: [
            "The brightest star in Ursa Minor",
            "Currently serves as the North Star, as it's located very close to the north celestial pole",
            "A yellow-white supergiant",
            "A Cepheid variable star, though its variations are now very small",
            "Has two companion stars, making it a triple star system"
        ]
    },
    "Kochab": {
        name: "Kochab",
        altNames: ["Beta Ursae Minoris", "7 Ursae Minoris"],
        spectralType: "K4III",
        magnitude: "2.08",
        distance: "131 light-years",
        constellation: "Ursa Minor",
        facts: [
            "The second brightest star in Ursa Minor",
            "An orange giant star",
            "About 42 times the diameter of the Sun",
            "Approximately 450 times more luminous than the Sun",
            "The name comes from the Arabic word for 'star'"
        ]
    },
    "Pherkad": {
        name: "Pherkad",
        altNames: ["Gamma Ursae Minoris", "13 Ursae Minoris"],
        spectralType: "A3II",
        magnitude: "3.05",
        distance: "487 light-years",
        constellation: "Ursa Minor",
        facts: [
            "A white bright giant star",
            "Forms the 'Guardians of the Pole' with Kochab",
            "About 15 times the diameter of the Sun",
            "The name means 'the dim one' in Arabic"
        ]
    },
    "Epsilon Ursae Minoris": {
        name: "Epsilon Ursae Minoris",
        altNames: ["ε Ursae Minoris", "22 Ursae Minoris"],
        spectralType: "G5III",
        magnitude: "4.23",
        distance: "347 light-years",
        constellation: "Ursa Minor",
        facts: [
            "A yellow giant star",
            "About 17 times the diameter of the Sun",
            "Approximately 151 times more luminous than the Sun"
        ]
    },
    "Zeta Ursae Minoris": {
        name: "Zeta Ursae Minoris",
        altNames: ["ζ Ursae Minoris", "16 Ursae Minoris"],
        spectralType: "A3V",
        magnitude: "4.32",
        distance: "376 light-years",
        constellation: "Ursa Minor",
        facts: [
            "A white main sequence star",
            "About 2.5 times the diameter of the Sun",
            "Approximately 40 times more luminous than the Sun"
        ]
    },

    // Vela constellation stars
    "Suhail": {
        name: "Suhail",
        altNames: ["Lambda Velorum", "λ Velorum", "Suhail al Muhlif"],
        spectralType: "K4Ib",
        magnitude: "2.21",
        distance: "545 light-years",
        constellation: "Vela",
        facts: [
            "The brightest star in Vela",
            "An orange supergiant star",
            "About 207 times the diameter of the Sun",
            "Approximately 11,000 times more luminous than the Sun",
            "The name comes from the Arabic word meaning 'the plain'"
        ]
    },
    "Gamma Velorum": {
        name: "Gamma Velorum",
        altNames: ["γ Velorum", "Regor", "Suhail al Muhlif"],
        spectralType: "WC8 + O7.5III",
        magnitude: "1.83",
        distance: "840 light-years",
        constellation: "Vela",
        facts: [
            "The second brightest star in Vela",
            "A multiple star system",
            "Contains the brightest Wolf-Rayet star visible from Earth",
            "The name 'Regor' was given by astronaut Gus Grissom (it's 'Roger' spelled backwards)"
        ]
    },
    "Delta Velorum": {
        name: "Delta Velorum",
        altNames: ["δ Velorum", "Alsephina"],
        spectralType: "A1V + A5V",
        magnitude: "1.96",
        distance: "80 light-years",
        constellation: "Vela",
        facts: [
            "An eclipsing binary star system",
            "The two main components orbit each other every 45.2 days",
            "The name 'Alsephina' means 'the ship's deck' in Arabic"
        ]
    },
    "Kappa Velorum": {
        name: "Kappa Velorum",
        altNames: ["κ Velorum", "Markeb"],
        spectralType: "B2IV",
        magnitude: "2.50",
        distance: "570 light-years",
        constellation: "Vela",
        facts: [
            "A blue-white subgiant star",
            "About 6 times the diameter of the Sun",
            "Approximately 15,000 times more luminous than the Sun",
            "The name 'Markeb' means 'the ship's elbow' in Arabic"
        ]
    },
    "Mu Velorum": {
        name: "Mu Velorum",
        altNames: ["μ Velorum"],
        spectralType: "G5III + A5V",
        magnitude: "2.69",
        distance: "117 light-years",
        constellation: "Vela",
        facts: [
            "A binary star system",
            "The primary is a yellow giant",
            "About 11 times the diameter of the Sun",
            "Approximately 60 times more luminous than the Sun"
        ]
    }
};

// Export the star database
if (typeof module !== 'undefined' && module.exports) {
    module.exports = starDatabase;
}