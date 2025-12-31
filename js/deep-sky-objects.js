/**
 * Deep Sky Objects Data
 * Comprehensive information about notable deep sky objects
 * Sourced from:
 * - Handbook of Stars and Constellations
 * - Space Rangers Stars and Constellations
 * - Constellation Guide
 */

const deepSkyObjectsData = {
    // Messier Objects
    "m1": {
        name: "M1 (Crab Nebula)",
        messierNumber: 1,
        ngcNumber: "NGC 1952",
        type: "Supernova Remnant",
        constellation: "Taurus",
        rightAscension: "05h 34m 31.9s",
        declination: "+22° 00′ 52″",
        apparentMagnitude: 8.4,
        distance: 6500, // light years
        diameter: 11, // light years
        discoveredBy: "John Bevis",
        discoveryYear: 1731,
        description: "The Crab Nebula is the remnant of a supernova explosion that was observed by Chinese astronomers in 1054 CE. It contains a pulsar at its center, which is the rapidly rotating neutron star left behind by the supernova. The nebula is expanding at a rate of about 1,500 kilometers per second.",
        observationTips: "M1 is visible in binoculars under dark skies and appears as a small, fuzzy patch. A medium-sized telescope will reveal more detail, showing an oval-shaped nebula with some mottling. It's best observed during winter months when Taurus is high in the sky."
    },
    
    "m31": {
        name: "M31 (Andromeda Galaxy)",
        messierNumber: 31,
        ngcNumber: "NGC 224",
        type: "Spiral Galaxy",
        constellation: "Andromeda",
        rightAscension: "00h 42m 44.3s",
        declination: "+41° 16′ 09″",
        apparentMagnitude: 3.4,
        distance: 2500000, // light years
        diameter: 220000, // light years
        discoveredBy: "Persian astronomers",
        discoveryYear: 964,
        description: "The Andromeda Galaxy is the nearest major galaxy to our Milky Way and is the most distant object visible to the naked eye. It's a spiral galaxy containing approximately one trillion stars, more than twice the number in our Milky Way. Andromeda and the Milky Way are on a collision course and will merge in about 4.5 billion years.",
        observationTips: "M31 is visible to the naked eye under dark skies as a fuzzy patch. Binoculars will show an elongated shape, while telescopes reveal more detail including the galaxy's bright core and dust lanes. It's best observed during autumn months when Andromeda is high in the sky."
    },
    
    "m42": {
        name: "M42 (Orion Nebula)",
        messierNumber: 42,
        ngcNumber: "NGC 1976",
        type: "Emission Nebula",
        constellation: "Orion",
        rightAscension: "05h 35m 17.3s",
        declination: "-05° 23′ 28″",
        apparentMagnitude: 4.0,
        distance: 1344, // light years
        diameter: 24, // light years
        discoveredBy: "Nicolas-Claude Fabri de Peiresc",
        discoveryYear: 1610,
        description: "The Orion Nebula is one of the brightest nebulae in the sky and is visible to the naked eye. It's a stellar nursery where new stars are being formed, containing the young open cluster known as the Trapezium. The nebula is part of a much larger cloud of gas and dust that extends throughout the Orion constellation.",
        observationTips: "M42 is visible to the naked eye as a fuzzy patch below Orion's Belt. Binoculars show its distinctive shape, while telescopes reveal intricate detail including the Trapezium cluster at its heart. It's best observed during winter months when Orion is high in the sky."
    },
    
    "m45": {
        name: "M45 (Pleiades)",
        messierNumber: 45,
        ngcNumber: null, // No NGC designation
        type: "Open Cluster",
        constellation: "Taurus",
        rightAscension: "03h 47m 24.0s",
        declination: "+24° 07′ 00″",
        apparentMagnitude: 1.6,
        distance: 444, // light years
        diameter: 12, // light years
        discoveredBy: "Ancient",
        discoveryYear: null,
        description: "The Pleiades, also known as the Seven Sisters, is one of the most famous star clusters in the sky. It contains hundreds of stars, with about nine visible to the naked eye under good conditions. The cluster is surrounded by a faint reflection nebula, which is dust reflecting the light of the hot, blue stars. The Pleiades has been known since ancient times and features in the mythology of many cultures.",
        observationTips: "M45 is easily visible to the naked eye as a small, misty patch of stars. Binoculars provide the best view, showing dozens of stars in a beautiful setting. It's best observed during winter months when Taurus is high in the sky."
    },
    
    "m13": {
        name: "M13 (Great Globular Cluster in Hercules)",
        messierNumber: 13,
        ngcNumber: "NGC 6205",
        type: "Globular Cluster",
        constellation: "Hercules",
        rightAscension: "16h 41m 41.2s",
        declination: "+36° 27′ 36″",
        apparentMagnitude: 5.8,
        distance: 22800, // light years
        diameter: 145, // light years
        discoveredBy: "Edmond Halley",
        discoveryYear: 1714,
        description: "The Great Globular Cluster in Hercules is one of the most prominent globular clusters in the northern sky. It contains approximately 300,000 stars packed into a sphere about 145 light-years in diameter. In 1974, the Arecibo radio telescope transmitted a message toward M13 as a demonstration of human technological achievement, though any reply would take about 50,000 years.",
        observationTips: "M13 is visible to the naked eye under dark skies as a fuzzy star. Binoculars show it as a round, fuzzy patch, while telescopes begin to resolve individual stars around the edges. It's best observed during summer months when Hercules is high in the sky."
    },
    
    "m57": {
        name: "M57 (Ring Nebula)",
        messierNumber: 57,
        ngcNumber: "NGC 6720",
        type: "Planetary Nebula",
        constellation: "Lyra",
        rightAscension: "18h 53m 35.1s",
        declination: "+33° 01′ 45″",
        apparentMagnitude: 8.8,
        distance: 2300, // light years
        diameter: 1, // light years
        discoveredBy: "Antoine Darquier de Pellepoix",
        discoveryYear: 1779,
        description: "The Ring Nebula is one of the most famous planetary nebulae, appearing as a smoky ring through telescopes. It's the expanding shell of gas ejected from a dying star that has collapsed to form a white dwarf at the center. The different colors in the nebula represent different gases: blue-green for oxygen, red for hydrogen, and yellow for nitrogen.",
        observationTips: "M57 requires at least binoculars to see, appearing as a small, faint, round patch. A medium-sized telescope will reveal its distinctive ring shape. It's best observed during summer months when Lyra is high in the sky."
    },
    
    "m51": {
        name: "M51 (Whirlpool Galaxy)",
        messierNumber: 51,
        ngcNumber: "NGC 5194",
        type: "Spiral Galaxy",
        constellation: "Canes Venatici",
        rightAscension: "13h 29m 52.7s",
        declination: "+47° 11′ 43″",
        apparentMagnitude: 8.4,
        distance: 23000000, // light years
        diameter: 60000, // light years
        discoveredBy: "Charles Messier",
        discoveryYear: 1773,
        description: "The Whirlpool Galaxy is a grand-design spiral galaxy with a prominent spiral structure. It's interacting with a smaller galaxy, NGC 5195, which is distorting its shape through gravitational forces. This interaction is triggering star formation along the spiral arms, making them appear bright and well-defined.",
        observationTips: "M51 requires at least binoculars to see, appearing as a faint, fuzzy patch. A medium to large telescope will begin to show the spiral structure and the companion galaxy. It's best observed during spring months when Canes Venatici is high in the sky."
    },
    
    "m81": {
        name: "M81 (Bode's Galaxy)",
        messierNumber: 81,
        ngcNumber: "NGC 3031",
        type: "Spiral Galaxy",
        constellation: "Ursa Major",
        rightAscension: "09h 55m 33.2s",
        declination: "+69° 03′ 55″",
        apparentMagnitude: 6.94,
        distance: 12000000, // light years
        diameter: 90000, // light years
        discoveredBy: "Johann Elert Bode",
        discoveryYear: 1774,
        description: "Bode's Galaxy is one of the brightest galaxies visible from Earth. It's a grand-design spiral galaxy with well-defined arms and a bright central bulge. M81 is interacting gravitationally with several nearby galaxies, including M82 (the Cigar Galaxy), which has led to increased star formation in both galaxies.",
        observationTips: "M81 is visible in binoculars under dark skies as a small, oval patch of light. Telescopes reveal more detail, including the bright core and hints of spiral structure. It's best observed during spring months when Ursa Major is high in the sky."
    },
    
    "m82": {
        name: "M82 (Cigar Galaxy)",
        messierNumber: 82,
        ngcNumber: "NGC 3034",
        type: "Starburst Galaxy",
        constellation: "Ursa Major",
        rightAscension: "09h 55m 52.2s",
        declination: "+69° 40′ 47″",
        apparentMagnitude: 8.41,
        distance: 12000000, // light years
        diameter: 37000, // light years
        discoveredBy: "Johann Elert Bode",
        discoveryYear: 1774,
        description: "The Cigar Galaxy is a starburst galaxy with an exceptionally high rate of star formation. Its unusual appearance is due to a past collision with M81 (Bode's Galaxy), which triggered intense star formation and created the distinctive lanes of dust that give it its cigar-like shape. The galaxy is experiencing a massive burst of star birth, with stars forming 10 times faster than in our Milky Way.",
        observationTips: "M82 is visible in binoculars under dark skies as a small, elongated patch of light near M81. Telescopes reveal more detail, including the dark dust lanes that cross the galaxy. It's best observed during spring months when Ursa Major is high in the sky."
    },
    
    "m104": {
        name: "M104 (Sombrero Galaxy)",
        messierNumber: 104,
        ngcNumber: "NGC 4594",
        type: "Spiral Galaxy",
        constellation: "Virgo",
        rightAscension: "12h 39m 59.4s",
        declination: "-11° 37′ 23″",
        apparentMagnitude: 8.0,
        distance: 29000000, // light years
        diameter: 50000, // light years
        discoveredBy: "Pierre Méchain",
        discoveryYear: 1781,
        description: "The Sombrero Galaxy is a spiral galaxy seen nearly edge-on, giving it the appearance of a sombrero hat. It has a bright central bulge and a prominent dust lane that circles the galaxy's equator. The Sombrero Galaxy contains approximately 2,000 globular clusters, which is 10 times more than the Milky Way, despite being similar in size.",
        observationTips: "M104 requires at least binoculars to see, appearing as a small, oval patch of light. A medium to large telescope will reveal its distinctive shape with the dark dust lane. It's best observed during spring months when Virgo is high in the sky."
    },
    
    "m27": {
        name: "M27 (Dumbbell Nebula)",
        messierNumber: 27,
        ngcNumber: "NGC 6853",
        type: "Planetary Nebula",
        constellation: "Vulpecula",
        rightAscension: "19h 59m 36.3s",
        declination: "+22° 43′ 16″",
        apparentMagnitude: 7.5,
        distance: 1360, // light years
        diameter: 2.5, // light years
        discoveredBy: "Charles Messier",
        discoveryYear: 1764,
        description: "The Dumbbell Nebula was the first planetary nebula to be discovered and is one of the brightest in the sky. It's the expanding shell of gas ejected from a dying star that has collapsed to form a white dwarf at the center. The nebula gets its name from its shape, which resembles a dumbbell or an hourglass when viewed through a telescope.",
        observationTips: "M27 is visible in binoculars under dark skies as a small, fuzzy patch. A medium-sized telescope will reveal its distinctive dumbbell shape. It's best observed during summer and autumn months when Vulpecula is high in the sky."
    },
    
    "m8": {
        name: "M8 (Lagoon Nebula)",
        messierNumber: 8,
        ngcNumber: "NGC 6523",
        type: "Emission Nebula",
        constellation: "Sagittarius",
        rightAscension: "18h 03m 37.0s",
        declination: "-24° 23′ 12″",
        apparentMagnitude: 6.0,
        distance: 4100, // light years
        diameter: 110, // light years
        discoveredBy: "Giovanni Hodierna",
        discoveryYear: 1654,
        description: "The Lagoon Nebula is one of the brightest and most massive star-forming regions in our galaxy. It contains a young open cluster, NGC 6530, whose hot stars illuminate the surrounding gas and dust. The nebula gets its name from the dark lane that runs through it, giving it the appearance of a lagoon.",
        observationTips: "M8 is visible to the naked eye under dark skies as a small, fuzzy patch. Binoculars show more detail, including the dark lane, while telescopes reveal intricate structure and the embedded star cluster. It's best observed during summer months when Sagittarius is high in the sky."
    },
    
    "m20": {
        name: "M20 (Trifid Nebula)",
        messierNumber: 20,
        ngcNumber: "NGC 6514",
        type: "Emission and Reflection Nebula",
        constellation: "Sagittarius",
        rightAscension: "18h 02m 23.0s",
        declination: "-23° 01′ 48″",
        apparentMagnitude: 6.3,
        distance: 5200, // light years
        diameter: 42, // light years
        discoveredBy: "Charles Messier",
        discoveryYear: 1764,
        description: "The Trifid Nebula gets its name from the dark dust lanes that divide it into three lobes when viewed through a telescope. It's both an emission nebula (the red part) and a reflection nebula (the blue part), with the different colors resulting from different processes: the red comes from hydrogen gas excited by ultraviolet light from hot stars, while the blue comes from starlight reflected by dust particles.",
        observationTips: "M20 requires at least binoculars to see, appearing as a small, fuzzy patch near M8. A medium to large telescope will reveal its distinctive trifid shape. It's best observed during summer months when Sagittarius is high in the sky."
    },
    
    "m16": {
        name: "M16 (Eagle Nebula)",
        messierNumber: 16,
        ngcNumber: "NGC 6611",
        type: "Emission Nebula",
        constellation: "Serpens",
        rightAscension: "18h 18m 48.0s",
        declination: "-13° 49′ 00″",
        apparentMagnitude: 6.0,
        distance: 7000, // light years
        diameter: 70, // light years
        discoveredBy: "Jean-Philippe de Chéseaux",
        discoveryYear: 1745,
        description: "The Eagle Nebula is a star-forming region made famous by the Hubble Space Telescope image 'Pillars of Creation,' which shows towering columns of gas and dust where new stars are being born. The nebula contains a young open cluster, NGC 6611, whose hot stars illuminate the surrounding gas and dust.",
        observationTips: "M16 requires at least binoculars to see, appearing as a fuzzy patch with a small cluster of stars. A telescope will show more detail of the nebula, though the famous pillars require very large telescopes or long-exposure photography to see. It's best observed during summer months when Serpens is high in the sky."
    },
    
    "m17": {
        name: "M17 (Omega Nebula)",
        messierNumber: 17,
        ngcNumber: "NGC 6618",
        type: "Emission Nebula",
        constellation: "Sagittarius",
        rightAscension: "18h 20m 26.0s",
        declination: "-16° 10′ 36″",
        apparentMagnitude: 6.0,
        distance: 5500, // light years
        diameter: 40, // light years
        discoveredBy: "Jean-Philippe de Chéseaux",
        discoveryYear: 1745,
        description: "The Omega Nebula, also known as the Swan Nebula, is one of the brightest and most massive star-forming regions in our galaxy. It gets its names from its shape, which resembles the Greek letter omega or a swan. The nebula contains a young open cluster whose hot stars illuminate the surrounding gas and dust.",
        observationTips: "M17 requires at least binoculars to see, appearing as a fuzzy patch. A medium-sized telescope will reveal its distinctive shape. It's best observed during summer months when Sagittarius is high in the sky."
    },
    
    "m33": {
        name: "M33 (Triangulum Galaxy)",
        messierNumber: 33,
        ngcNumber: "NGC 598",
        type: "Spiral Galaxy",
        constellation: "Triangulum",
        rightAscension: "01h 33m 50.9s",
        declination: "+30° 39′ 36″",
        apparentMagnitude: 5.7,
        distance: 2730000, // light years
        diameter: 60000, // light years
        discoveredBy: "Giovanni Battista Hodierna",
        discoveryYear: 1654,
        description: "The Triangulum Galaxy is the third-largest member of the Local Group of galaxies, after the Andromeda Galaxy and the Milky Way. It's a spiral galaxy with a small central bulge and loosely wound arms. M33 is unusual in that it shows no evidence of a central black hole, unlike most galaxies of its size.",
        observationTips: "M33 is visible to the naked eye under exceptionally dark skies. Binoculars show it as a large, faint, oval patch, while telescopes reveal more detail including hints of spiral structure. It's best observed during autumn months when Triangulum is high in the sky."
    },
    
    "m101": {
        name: "M101 (Pinwheel Galaxy)",
        messierNumber: 101,
        ngcNumber: "NGC 5457",
        type: "Spiral Galaxy",
        constellation: "Ursa Major",
        rightAscension: "14h 03m 12.6s",
        declination: "+54° 20′ 57″",
        apparentMagnitude: 7.86,
        distance: 21000000, // light years
        diameter: 170000, // light years
        discoveredBy: "Pierre Méchain",
        discoveryYear: 1781,
        description: "The Pinwheel Galaxy is a face-on spiral galaxy with prominent arms that give it a pinwheel appearance. It's one of the largest and most photogenic galaxies visible from Earth. M101 has a high rate of star formation, particularly in its spiral arms, which contain many bright H II regions where new stars are being born.",
        observationTips: "M101 requires at least binoculars to see, appearing as a faint, fuzzy patch. A large telescope under dark skies will begin to show the spiral structure. It's best observed during spring months when Ursa Major is high in the sky."
    }
};

// Export the data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = deepSkyObjectsData;
}