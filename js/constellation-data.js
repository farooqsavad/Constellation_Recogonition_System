/**
 * Comprehensive constellation data
<<<<<<< HEAD
 * Sourced from:
 * - Handbook of Stars and Constellations
 * - Space Rangers Stars and Constellations
 * - Constellation Guide
=======
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
 */
const constellationData = [
    {
        name: 'Orion',
        classification: 'northern',
        description: 'One of the most recognizable constellations, representing a hunter with a belt and sword. Contains the bright stars Betelgeuse and Rigel, as well as the famous Orion Nebula.',
        brightestStar: 'Rigel',
        visibility: 'Winter (Northern Hemisphere), Summer (Southern Hemisphere)',
        area: '594 square degrees',
        size: 78,
        brightness: 95,
        popularity: 98,
        stars: [
            'Betelgeuse (Alpha Orionis): A red supergiant marking Orion\'s right shoulder',
            'Rigel (Beta Orionis): A blue supergiant marking Orion\'s left foot',
            'Bellatrix (Gamma Orionis): A blue giant marking Orion\'s left shoulder',
            'Mintaka (Delta Orionis): The westernmost star in Orion\'s Belt',
            'Alnilam (Epsilon Orionis): The middle star in Orion\'s Belt',
            'Alnitak (Zeta Orionis): The easternmost star in Orion\'s Belt',
            'Saiph (Kappa Orionis): A blue supergiant marking Orion\'s right foot'
        ],
        deepSkyObjects: [
            'Orion Nebula (M42): A diffuse nebula visible below Orion\'s Belt',
            'Horsehead Nebula: A dark nebula silhouetted against a bright emission nebula',
            'Flame Nebula: An emission nebula near Alnitak',
            'De Mairan\'s Nebula (M43): Part of the Orion Nebula complex'
        ],
        mythology: 'In Greek mythology, Orion was a mighty hunter and the son of Poseidon. There are several myths about his death, the most common being that he was killed by a scorpion sent by Gaia (or in some versions, by Artemis). Zeus placed him in the sky as a constellation, along with the scorpion (Scorpius) on the opposite side of the sky so they would never meet.',
        history: 'Orion has been recognized by cultures worldwide for thousands of years. The ancient Egyptians associated it with Osiris, the god of the afterlife. The three stars of Orion\'s Belt have been incorporated into numerous ancient structures, including the pyramids of Giza, which some believe were aligned to mirror these stars.'
    },
    {
        name: 'UrsaMajor',
        classification: 'northern',
        description: 'Contains the Big Dipper asterism and is one of the most prominent constellations in the northern sky. It\'s circumpolar for most Northern Hemisphere observers.',
        brightestStar: 'Alioth (Epsilon Ursae Majoris)',
        visibility: 'Year-round (Northern Hemisphere), best seen during spring',
        area: '1280 square degrees',
        size: 95,
        brightness: 88,
        popularity: 96,
        stars: [
            'Dubhe (Alpha Ursae Majoris): One of the "Pointer Stars" that help locate Polaris',
            'Merak (Beta Ursae Majoris): One of the "Pointer Stars" that help locate Polaris',
            'Phecda (Gamma Ursae Majoris): Forms part of the bowl of the Big Dipper',
            'Megrez (Delta Ursae Majoris): The faintest of the seven stars in the Big Dipper',
            'Alioth (Epsilon Ursae Majoris): The brightest star in Ursa Major',
            'Mizar (Zeta Ursae Majoris): Forms a famous double star with Alcor',
            'Alkaid (Eta Ursae Majoris): The tip of the Big Dipper\'s handle'
        ],
        deepSkyObjects: [
            'M81 (Bode\'s Galaxy): A spiral galaxy visible with binoculars',
            'M82 (Cigar Galaxy): An irregular starburst galaxy near M81',
            'M101 (Pinwheel Galaxy): A face-on spiral galaxy',
            'M108: A barred spiral galaxy',
            'M97 (Owl Nebula): A planetary nebula'
        ],
        mythology: 'In Greek mythology, the constellation represents Callisto, a nymph who was transformed into a bear by Zeus\'s jealous wife, Hera. Zeus later placed her in the sky as the Great Bear. Her son, Arcas, was transformed into Ursa Minor (the Little Bear).',
        history: 'Ursa Major has been used for navigation for thousands of years, particularly by finding the North Star using the Pointer Stars. It\'s mentioned in Homer\'s Iliad and Odyssey and has been recognized by numerous cultures worldwide.'
    },
    {
        name: 'Cassiopeia',
        classification: 'northern',
        description: 'A distinctive W or M-shaped constellation representing a queen from Greek mythology. It\'s circumpolar for most Northern Hemisphere observers.',
        brightestStar: 'Schedar (Alpha Cassiopeiae)',
        visibility: 'Year-round (Northern Hemisphere), best seen during autumn and winter',
        area: '598 square degrees',
        size: 79,
        brightness: 82,
        popularity: 90,
        stars: [
            'Schedar (Alpha Cassiopeiae): An orange giant star',
            'Caph (Beta Cassiopeiae): A yellow-white giant',
            'Gamma Cassiopeiae: A variable star that occasionally outshines both Schedar and Caph',
            'Ruchbah (Delta Cassiopeiae): An eclipsing binary star system',
            'Segin (Epsilon Cassiopeiae): A blue-white giant star'
        ],
        deepSkyObjects: [
            'M52: An open star cluster visible with binoculars',
            'M103: An open star cluster',
            'NGC 457 (Owl Cluster or ET Cluster): An open cluster',
            'NGC 7789 (Caroline\'s Rose): An open cluster discovered by Caroline Herschel',
            'Cassiopeia A: The strongest radio source in the sky outside our solar system'
        ],
        mythology: 'In Greek mythology, Cassiopeia was the vain queen of Ethiopia who boasted that she and her daughter Andromeda were more beautiful than the Nereids (sea nymphs). This angered Poseidon, who sent a sea monster (represented by the constellation Cetus) to ravage the coast. Cassiopeia was placed in the sky as punishment, doomed to circle the celestial pole forever, spending half the year upside down.',
        history: 'Cassiopeia has been recognized since ancient times and was one of the 48 constellations listed by Ptolemy in his Almagest in the 2nd century CE. Its distinctive shape makes it one of the most easily recognizable constellations.'
    },
    {
        name: 'Cygnus',
        classification: 'northern',
        description: 'Also known as the Northern Cross, it represents a swan flying along the Milky Way. It contains Deneb, one of the brightest stars in the night sky.',
        brightestStar: 'Deneb (Alpha Cygni)',
        visibility: 'Summer and autumn (Northern Hemisphere)',
        area: '804 square degrees',
        size: 85,
        brightness: 87,
        popularity: 85,
        stars: [
            'Deneb (Alpha Cygni): A blue-white supergiant and one of the most luminous known stars',
            'Albireo (Beta Cygni): A beautiful double star with contrasting colors (gold and blue)',
            'Sadr (Gamma Cygni): Located at the center of the cross',
            'Delta Cygni: A multiple star system',
            'Gienah (Epsilon Cygni): An orange giant star'
        ],
        deepSkyObjects: [
            'North America Nebula (NGC 7000): A large emission nebula near Deneb',
            'Veil Nebula: A large supernova remnant',
            'Cygnus X-1: A famous X-ray source that was the first widely accepted black hole candidate',
            'NGC 6826 (Blinking Planetary): A planetary nebula',
            'NGC 7092 (M39): An open star cluster'
        ],
        mythology: 'In Greek mythology, Cygnus represents the form Zeus took to seduce Leda, the queen of Sparta. Another myth associates it with Orpheus, who was transformed into a swan after his death and placed next to his lyre (the constellation Lyra) in the sky.',
        history: 'Cygnus lies along the Milky Way and contains many deep-sky objects. The constellation has been known since ancient times and was included in Ptolemy\'s 48 constellations. It\'s home to the most massive stellar black hole discovered in our galaxy, Cygnus X-1.'
    },
    {
        name: 'Lyra',
        classification: 'northern',
        description: 'A small but prominent constellation representing the lyre (a stringed musical instrument) of Orpheus. It contains Vega, one of the brightest stars in the night sky.',
        brightestStar: 'Vega (Alpha Lyrae)',
        visibility: 'Summer (Northern Hemisphere)',
        area: '286 square degrees',
        size: 52,
        brightness: 90,
        popularity: 82,
        stars: [
            'Vega (Alpha Lyrae): The fifth brightest star in the night sky',
            'Sheliak (Beta Lyrae): An eclipsing binary star system',
            'Sulafat (Gamma Lyrae): A blue-white giant star',
            'Epsilon Lyrae: Known as the "Double Double," a quadruple star system'
        ],
        deepSkyObjects: [
            'Ring Nebula (M57): A famous planetary nebula',
            'M56: A globular cluster'
        ],
        mythology: 'In Greek mythology, Lyra represents the lyre (a stringed musical instrument) of Orpheus, the legendary musician who could charm all living things with his music. After Orpheus was killed, his lyre was thrown into a river. Zeus sent an eagle to retrieve it, and both the lyre and the eagle (represented by the constellation Aquila) were placed in the sky.',
        history: 'Lyra has been recognized as a constellation since ancient times and was included in Ptolemy\'s 48 constellations. Vega was the North Star around 12,000 BCE and will be again around 13,000 CE due to the precession of Earth\'s axis.'
    },
    {
        name: 'Leo',
        classification: 'zodiac',
        description: 'Represents the lion and is one of the zodiac constellations. It contains the bright star Regulus and several galaxies.',
        brightestStar: 'Regulus (Alpha Leonis)',
        visibility: 'Spring (Northern Hemisphere)',
        area: '947 square degrees',
        size: 88,
        brightness: 85,
        popularity: 88,
        stars: [
            'Regulus (Alpha Leonis): A multiple star system at the base of the Sickle of Leo',
            'Denebola (Beta Leonis): Marks the lion\'s tail',
            'Algieba (Gamma Leonis): A binary star system',
            'Zosma (Delta Leonis): Part of the lion\'s back',
            'Epsilon Leonis: Part of the Sickle of Leo'
        ],
        deepSkyObjects: [
            'Leo Triplet: A group of three galaxies (M65, M66, and NGC 3628)',
            'M95 and M96: Barred spiral galaxies',
            'M105: An elliptical galaxy'
        ],
        mythology: 'In Greek mythology, Leo represents the Nemean Lion, which was killed by Heracles (Hercules) as one of his twelve labors. The lion had a hide that could not be penetrated by weapons, so Heracles strangled it to death.',
        history: 'Leo is one of the oldest recognized constellations, with archaeological evidence suggesting it was known in Mesopotamia as early as 4000 BCE. It was one of the 48 constellations listed by Ptolemy in the 2nd century.'
    },
    {
        name: 'Scorpius',
        classification: 'zodiac',
        description: 'Resembles a scorpion and is one of the zodiac constellations. It contains Antares, a red supergiant often called "the heart of the scorpion."',
        brightestStar: 'Antares (Alpha Scorpii)',
        visibility: 'Summer (Northern Hemisphere), Winter (Southern Hemisphere)',
        area: '497 square degrees',
        size: 72,
        brightness: 90,
        popularity: 87,
        stars: [
            'Antares (Alpha Scorpii): A red supergiant star',
            'Beta Scorpii (Graffias): A multiple star system',
            'Delta Scorpii (Dschubba): A variable star',
            'Shaula (Lambda Scorpii): The second brightest star in Scorpius, marking the scorpion\'s stinger',
            'Sargas (Theta Scorpii): A yellow giant star'
        ],
        deepSkyObjects: [
            'M4: A globular cluster visible with binoculars',
            'M6 (Butterfly Cluster): An open cluster',
            'M7 (Ptolemy\'s Cluster): An open cluster',
            'NGC 6302 (Bug Nebula): A bipolar planetary nebula'
        ],
        mythology: 'In Greek mythology, Scorpius is the scorpion that killed Orion the Hunter. There are different versions of the story, but in one, the scorpion was sent by Gaia (Earth) to kill Orion after he boasted that he could kill any animal. Zeus placed both Orion and Scorpius in the sky, but on opposite sides so they would never meet.',
        history: 'Scorpius is one of the 48 constellations identified by Ptolemy in the 2nd century. The bright red star Antares has been observed by many ancient civilizations and was named for its resemblance to the planet Mars (Ares in Greek).'
    },
    {
        name: 'Pegasus',
        classification: 'northern',
        description: 'Named after the winged horse in Greek mythology, featuring a prominent square asterism known as the Great Square of Pegasus.',
        brightestStar: 'Enif (Epsilon Pegasi)',
        visibility: 'Fall (Northern Hemisphere)',
        area: '1121 square degrees',
        size: 92,
        brightness: 75,
        popularity: 82,
        stars: [
            'Enif (Epsilon Pegasi): An orange supergiant',
            'Scheat (Beta Pegasi): A red giant variable star',
            'Markab (Alpha Pegasi): A blue-white star',
            'Algenib (Gamma Pegasi): A blue-white subgiant',
            'Alpheratz (Alpha Andromedae): Formerly part of Pegasus, now considered part of Andromeda'
        ],
        deepSkyObjects: [
            'M15: A globular cluster',
            'NGC 7331: A spiral galaxy',
            'Stephan\'s Quintet: A group of five galaxies'
        ],
        mythology: 'Pegasus was a winged horse in Greek mythology that sprang from the blood of Medusa when Perseus beheaded her. Pegasus was tamed by the hero Bellerophon and helped him in his adventures.',
        history: 'Pegasus is one of the 48 constellations listed by Ptolemy. The Great Square of Pegasus is a prominent asterism used for navigation and finding other objects in the autumn sky.'
    },
    {
        name: 'Andromeda',
        classification: 'northern',
        description: 'Named after the princess in Greek mythology, contains the Andromeda Galaxy (M31), the nearest major galaxy to the Milky Way.',
        brightestStar: 'Alpheratz (Alpha Andromedae)',
        visibility: 'Fall (Northern Hemisphere)',
        area: '722 square degrees',
        size: 82,
        brightness: 76,
        popularity: 84,
        stars: [
            'Alpheratz (Alpha Andromedae): A binary star system',
            'Mirach (Beta Andromedae): A red giant star',
            'Almach (Gamma Andromedae): A multiple star system with contrasting colors',
            'Delta Andromedae: An orange giant star'
        ],
        deepSkyObjects: [
            'Andromeda Galaxy (M31): The nearest spiral galaxy to the Milky Way',
            'M32: A dwarf elliptical galaxy, satellite of M31',
            'M110: A dwarf elliptical galaxy, satellite of M31',
            'NGC 752: An open cluster'
        ],
        mythology: 'In Greek mythology, Andromeda was the daughter of King Cepheus and Queen Cassiopeia. Cassiopeia boasted that her daughter was more beautiful than the Nereids, which angered Poseidon. As punishment, Andromeda was chained to a rock as a sacrifice to a sea monster. She was rescued by Perseus, who later married her.',
        history: 'Andromeda is one of the 48 constellations listed by Ptolemy. The Andromeda Galaxy (M31) is the most distant object visible to the naked eye and was described as a "nebulous smear" by Persian astronomer Al-Sufi in the 10th century.'
    },
    {
        name: 'Aquila',
        classification: 'northern',
        description: 'Represents an eagle and contains the bright star Altair, part of the Summer Triangle asterism along with Vega and Deneb.',
        brightestStar: 'Altair (Alpha Aquilae)',
        visibility: 'Summer (Northern Hemisphere)',
        area: '652 square degrees',
        size: 80,
        brightness: 82,
        popularity: 78,
        stars: [
            'Altair (Alpha Aquilae): A white main sequence star, the 12th brightest star in the night sky',
            'Tarazed (Gamma Aquilae): An orange giant',
            'Alshain (Beta Aquilae): A yellow subgiant',
            'Delta Aquilae: A white main sequence star'
        ],
        deepSkyObjects: [
            'NGC 6709: An open cluster',
            'NGC 6755: An open cluster',
            'NGC 6781: A planetary nebula'
        ],
        mythology: 'Aquila represents the eagle that carried Zeus\'s thunderbolts in Greek mythology. In another story, it represents the eagle that abducted Ganymede, a young boy Zeus desired, and carried him to Mount Olympus.',
        history: 'Aquila is one of the 48 constellations listed by Ptolemy. The bright star Altair is one of the closest bright stars to Earth, at only 16.7 light-years away.'
    },
    {
        name: 'Sagittarius',
        classification: 'zodiac',
        description: 'Represents an archer and contains the center of the Milky Way galaxy. It\'s rich in star clusters and nebulae.',
        brightestStar: 'Kaus Australis (Epsilon Sagittarii)',
        visibility: 'Summer (Northern Hemisphere), Winter (Southern Hemisphere)',
        area: '867 square degrees',
        size: 86,
        brightness: 82,
        popularity: 92,
        stars: [
            'Kaus Australis (Epsilon Sagittarii): A blue-white star',
            'Nunki (Sigma Sagittarii): A blue-white star',
            'Kaus Media (Delta Sagittarii): An orange giant',
            'Kaus Borealis (Lambda Sagittarii): An orange giant',
            'Rukbat (Alpha Sagittarii): A blue main sequence star'
        ],
        deepSkyObjects: [
            'Lagoon Nebula (M8): An emission nebula',
            'Trifid Nebula (M20): An emission and reflection nebula',
            'Omega Nebula (M17): An emission nebula',
            'M22: One of the brightest globular clusters',
            'M23, M24, M25: Open clusters',
            'Sagittarius A*: The supermassive black hole at the center of the Milky Way'
        ],
        mythology: 'In Greek mythology, Sagittarius represents a centaur (half man, half horse) with a bow and arrow. It is often associated with the centaur Chiron, though some accounts suggest it represents a different centaur named Crotus.',
        history: 'Sagittarius is one of the 48 constellations listed by Ptolemy. Due to its position in the Milky Way, it contains many star clusters and nebulae. The center of our galaxy lies in the direction of Sagittarius.'
    },
    {
        name: 'UrsaMinor',
        classification: 'northern',
        description: 'Contains Polaris, the North Star, which marks the celestial north pole. It\'s also known as the Little Dipper.',
        brightestStar: 'Polaris (Alpha Ursae Minoris)',
        visibility: 'Year-round (Northern Hemisphere)',
        area: '256 square degrees',
        size: 56,
        brightness: 78,
        popularity: 85,
        stars: [
            'Polaris (Alpha Ursae Minoris): The North Star, a multiple star system',
            'Kochab (Beta Ursae Minoris): An orange giant',
            'Pherkad (Gamma Ursae Minoris): A white giant',
            'Epsilon Ursae Minoris: A yellow giant'
        ],
        deepSkyObjects: [
            'Little Dipper: An asterism formed by the main stars of Ursa Minor'
        ],
        mythology: 'In Greek mythology, Ursa Minor represents Arcas, the son of Callisto (represented by Ursa Major). In some versions, Zeus transformed Arcas into a bear and placed him in the sky near his mother.',
        history: 'Ursa Minor is one of the 48 constellations listed by Ptolemy. Polaris, the North Star, has been used for navigation for thousands of years because it remains nearly stationary in the sky as Earth rotates.'
    }
];