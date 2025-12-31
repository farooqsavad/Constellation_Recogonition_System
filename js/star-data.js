/**
 * Detailed Star Data
 * Comprehensive information about major stars in the night sky
 * Sourced from:
 * - Handbook of Stars and Constellations
 * - Space Rangers Stars and Constellations
 * - Constellation Guide
 */

const starData = {
    // Brightest Stars
    "sirius": {
        name: "Sirius",
        designation: "Alpha Canis Majoris",
        constellation: "Canis Major",
        rightAscension: "06h 45m 08.9s",
        declination: "-16° 42′ 58″",
        apparentMagnitude: -1.46, // Brightest star in the night sky
        distance: 8.6, // light years
        spectralClass: "A1V",
        color: "Blue-White",
        luminosity: 25.4, // times that of the Sun
        mass: 2.02, // solar masses
        radius: 1.71, // solar radii
        temperature: 9940, // Kelvin
        age: 242, // million years
        description: "Sirius, also known as the Dog Star, is the brightest star in the night sky. It's actually a binary star system consisting of Sirius A (the star we see) and Sirius B (a white dwarf companion). Sirius has been important in many cultures throughout history, including ancient Egypt where its heliacal rising marked the annual flooding of the Nile.",
        observationTips: "Sirius is easily visible to the naked eye and is best observed during winter months in the Northern Hemisphere. Its brightness makes it easy to locate, and it appears to twinkle with different colors due to atmospheric refraction."
    },
    
    "canopus": {
        name: "Canopus",
        designation: "Alpha Carinae",
        constellation: "Carina",
        rightAscension: "06h 23m 57.1s",
        declination: "-52° 41′ 45″",
        apparentMagnitude: -0.74, // Second brightest star in the night sky
        distance: 310, // light years
        spectralClass: "F0II",
        color: "Yellow-White",
        luminosity: 10700, // times that of the Sun
        mass: 8, // solar masses
        radius: 71, // solar radii
        temperature: 7400, // Kelvin
        age: 25, // million years
        description: "Canopus is the second brightest star in the night sky and is a supergiant star nearing the end of its life. It was named after the navigator of the fleet of King Menelaus in Greek mythology. Canopus was an important navigation star for ancient mariners and remains important for spacecraft navigation today.",
        observationTips: "Canopus is not visible from most of the Northern Hemisphere but is a prominent star in the southern sky. It's best observed during southern summer months and appears as a bright, slightly yellowish star."
    },
    
    "vega": {
        name: "Vega",
        designation: "Alpha Lyrae",
        constellation: "Lyra",
        rightAscension: "18h 36m 56.3s",
        declination: "+38° 47′ 01″",
        apparentMagnitude: 0.03, // Fifth brightest star in the night sky
        distance: 25, // light years
        spectralClass: "A0V",
        color: "Blue-White",
        luminosity: 40, // times that of the Sun
        mass: 2.1, // solar masses
        radius: 2.3, // solar radii
        temperature: 9602, // Kelvin
        age: 455, // million years
        description: "Vega is one of the brightest stars in the night sky and forms one corner of the Summer Triangle asterism. It was the first star other than the Sun to be photographed and to have its spectrum recorded. Vega rotates rapidly, completing a full rotation every 12.5 hours, which causes it to be flattened at the poles.",
        observationTips: "Vega is easily visible to the naked eye and is best observed during summer months in the Northern Hemisphere. It's almost directly overhead at mid-northern latitudes during summer evenings."
    },
    
    "arcturus": {
        name: "Arcturus",
        designation: "Alpha Boötis",
        constellation: "Boötes",
        rightAscension: "14h 15m 39.7s",
        declination: "+19° 10′ 57″",
        apparentMagnitude: -0.05, // Fourth brightest star in the night sky
        distance: 37, // light years
        spectralClass: "K0III",
        color: "Orange",
        luminosity: 170, // times that of the Sun
        mass: 1.1, // solar masses
        radius: 25, // solar radii
        temperature: 4286, // Kelvin
        age: 7100, // million years
        description: "Arcturus is the brightest star in the northern celestial hemisphere and the fourth brightest star in the night sky. Its name means 'Guardian of the Bear' in Greek, referring to its position near the constellations Ursa Major and Ursa Minor. Arcturus is an old star that has exhausted its core hydrogen and evolved into a red giant.",
        observationTips: "Arcturus is easily visible to the naked eye and is best observed during spring and summer months in the Northern Hemisphere. It can be found by following the arc of the handle of the Big Dipper ('Arc to Arcturus')."
    },
    
    "rigel": {
        name: "Rigel",
        designation: "Beta Orionis",
        constellation: "Orion",
        rightAscension: "05h 14m 32.3s",
        declination: "-08° 12′ 06″",
        apparentMagnitude: 0.13, // Seventh brightest star in the night sky
        distance: 860, // light years
        spectralClass: "B8Ia",
        color: "Blue-White",
        luminosity: 120000, // times that of the Sun
        mass: 21, // solar masses
        radius: 79, // solar radii
        temperature: 12100, // Kelvin
        age: 8, // million years
        description: "Rigel is a blue supergiant star and the brightest star in the constellation Orion. Its name comes from the Arabic phrase 'the left leg of the giant,' referring to its position in Orion. Rigel is actually a multiple star system, with the main star (Rigel A) being orbited by at least three smaller companions.",
        observationTips: "Rigel is easily visible to the naked eye and is best observed during winter months in the Northern Hemisphere. It marks the left foot (from the observer's perspective) of Orion the Hunter."
    },
    
    "betelgeuse": {
        name: "Betelgeuse",
        designation: "Alpha Orionis",
        constellation: "Orion",
        rightAscension: "05h 55m 10.3s",
        declination: "+07° 24′ 25″",
        apparentMagnitude: 0.42, // Variable, can be between 0.0 and 1.3
        distance: 548, // light years (uncertain)
        spectralClass: "M1-2Ia-ab",
        color: "Red",
        luminosity: 126000, // times that of the Sun, but variable
        mass: 11.6, // solar masses
        radius: 887, // solar radii, but variable
        temperature: 3500, // Kelvin
        age: 8.5, // million years
        description: "Betelgeuse is a red supergiant star and one of the largest stars visible to the naked eye. Its name comes from the Arabic 'yad al-jauza,' meaning 'the hand of Orion.' Betelgeuse is a variable star that changes in brightness and size, and it's nearing the end of its life. It's expected to explode as a supernova within the next 100,000 years.",
        observationTips: "Betelgeuse is easily visible to the naked eye and is best observed during winter months in the Northern Hemisphere. Its distinctive reddish color contrasts with the blue-white Rigel on the opposite side of Orion."
    },
    
    "antares": {
        name: "Antares",
        designation: "Alpha Scorpii",
        constellation: "Scorpius",
        rightAscension: "16h 29m 24.5s",
        declination: "-26° 25′ 55″",
        apparentMagnitude: 1.09, // Variable
        distance: 550, // light years
        spectralClass: "M1.5Iab-b",
        color: "Red",
        luminosity: 75900, // times that of the Sun
        mass: 12, // solar masses
        radius: 680, // solar radii
        temperature: 3400, // Kelvin
        age: 15, // million years
        description: "Antares is a red supergiant star and the brightest star in the constellation Scorpius. Its name means 'rival of Mars' (Ares) in Greek, due to its reddish appearance similar to the planet. Antares is a binary star system, with the main star (Antares A) being orbited by a smaller blue companion (Antares B).",
        observationTips: "Antares is easily visible to the naked eye and is best observed during summer months in the Northern Hemisphere. Its location near the center of the Milky Way makes it a good starting point for exploring that region of the sky."
    },
    
    "deneb": {
        name: "Deneb",
        designation: "Alpha Cygni",
        constellation: "Cygnus",
        rightAscension: "20h 41m 25.9s",
        declination: "+45° 16′ 49″",
        apparentMagnitude: 1.25, // 19th brightest star in the night sky
        distance: 2600, // light years (uncertain)
        spectralClass: "A2Ia",
        color: "Blue-White",
        luminosity: 196000, // times that of the Sun
        mass: 19, // solar masses
        radius: 203, // solar radii
        temperature: 8525, // Kelvin
        age: 10, // million years
        description: "Deneb is a blue-white supergiant star and one of the most luminous stars known. Its name comes from the Arabic 'dhanab,' meaning 'tail,' as it marks the tail of the swan in the constellation Cygnus. Deneb forms one corner of the Summer Triangle asterism, along with Vega and Altair.",
        observationTips: "Deneb is easily visible to the naked eye and is best observed during summer and autumn months in the Northern Hemisphere. Despite its great distance, it appears bright in our sky due to its enormous intrinsic luminosity."
    },
    
    "aldebaran": {
        name: "Aldebaran",
        designation: "Alpha Tauri",
        constellation: "Taurus",
        rightAscension: "04h 35m 55.2s",
        declination: "+16° 30′ 33″",
        apparentMagnitude: 0.87, // 14th brightest star in the night sky
        distance: 65, // light years
        spectralClass: "K5III",
        color: "Orange-Red",
        luminosity: 425, // times that of the Sun
        mass: 1.7, // solar masses
        radius: 44, // solar radii
        temperature: 3900, // Kelvin
        age: 6600, // million years
        description: "Aldebaran is an orange giant star and the brightest star in the constellation Taurus. Its name comes from the Arabic 'al-dabarān,' meaning 'the follower,' as it appears to follow the Pleiades cluster across the sky. Aldebaran appears to be part of the Hyades cluster but is actually much closer to Earth.",
        observationTips: "Aldebaran is easily visible to the naked eye and is best observed during winter months in the Northern Hemisphere. Its orange-red color and position as the 'eye' of the bull in Taurus make it easy to identify."
    },
    
    "altair": {
        name: "Altair",
        designation: "Alpha Aquilae",
        constellation: "Aquila",
        rightAscension: "19h 50m 47.0s",
        declination: "+08° 52′ 06″",
        apparentMagnitude: 0.77, // 12th brightest star in the night sky
        distance: 16.7, // light years
        spectralClass: "A7V",
        color: "White",
        luminosity: 10.6, // times that of the Sun
        mass: 1.8, // solar masses
        radius: 1.8, // solar radii
        temperature: 7550, // Kelvin
        age: 1200, // million years
        description: "Altair is a white main sequence star and one of the closest bright stars to Earth. Its name comes from the Arabic 'al-nasr al-ṭā'ir,' meaning 'the flying eagle,' referring to the constellation Aquila. Altair rotates very rapidly, completing a full rotation in just under 9 hours, which causes it to be flattened at the poles.",
        observationTips: "Altair is easily visible to the naked eye and is best observed during summer months in the Northern Hemisphere. It forms one corner of the Summer Triangle asterism, along with Vega and Deneb."
    },
    
    "regulus": {
        name: "Regulus",
        designation: "Alpha Leonis",
        constellation: "Leo",
        rightAscension: "10h 08m 22.3s",
        declination: "+11° 58′ 02″",
        apparentMagnitude: 1.35, // 21st brightest star in the night sky
        distance: 79, // light years
        spectralClass: "B8IVn",
        color: "Blue-White",
        luminosity: 288, // times that of the Sun
        mass: 3.8, // solar masses
        radius: 3.1, // solar radii
        temperature: 12460, // Kelvin
        age: 1000, // million years
        description: "Regulus is a multiple star system and the brightest star in the constellation Leo. Its name means 'little king' in Latin, reflecting its importance in ancient astronomy. The main star, Regulus A, rotates so rapidly that it's distorted into an oblate spheroid, completing a rotation in just 15.9 hours.",
        observationTips: "Regulus is easily visible to the naked eye and is best observed during spring months in the Northern Hemisphere. It marks the 'heart' of the lion in Leo and is located almost exactly on the ecliptic, meaning it can be occulted by the Moon and, very rarely, by planets."
    },
    
    "fomalhaut": {
        name: "Fomalhaut",
        designation: "Alpha Piscis Austrini",
        constellation: "Piscis Austrinus",
        rightAscension: "22h 57m 39.0s",
        declination: "-29° 37′ 20″",
        apparentMagnitude: 1.16, // 18th brightest star in the night sky
        distance: 25, // light years
        spectralClass: "A3V",
        color: "White",
        luminosity: 16.6, // times that of the Sun
        mass: 1.92, // solar masses
        radius: 1.84, // solar radii
        temperature: 8590, // Kelvin
        age: 440, // million years
        description: "Fomalhaut is a white main sequence star and the brightest star in the constellation Piscis Austrinus. Its name comes from the Arabic 'fum al-ḥūt,' meaning 'mouth of the fish.' Fomalhaut has a debris disk around it and at least one exoplanet, Fomalhaut b, which was one of the first exoplanets to be directly imaged.",
        observationTips: "Fomalhaut is visible to the naked eye and is best observed during autumn months in the Northern Hemisphere. It appears as a solitary bright star low in the southern sky from northern latitudes."
    },
    
    "polaris": {
        name: "Polaris",
        designation: "Alpha Ursae Minoris",
        constellation: "Ursa Minor",
        rightAscension: "02h 31m 49.1s",
        declination: "+89° 15′ 51″",
        apparentMagnitude: 1.98, // Not among the brightest stars
        distance: 430, // light years
        spectralClass: "F7Ib",
        color: "Yellow-White",
        luminosity: 2500, // times that of the Sun
        mass: 5.4, // solar masses
        radius: 37.5, // solar radii
        temperature: 6015, // Kelvin
        age: 70, // million years
        description: "Polaris, also known as the North Star or Pole Star, is a multiple star system and the brightest star in the constellation Ursa Minor. It's located very close to the north celestial pole, making it an important navigation star throughout human history. Polaris is actually a triple star system, with the main star being a yellow-white supergiant.",
        observationTips: "Polaris is visible to the naked eye throughout the year from the Northern Hemisphere. It can be found by following a line from the two stars at the end of the 'bowl' of the Big Dipper (the 'Pointer Stars'). Polaris remains nearly stationary in the sky while other stars appear to rotate around it due to Earth's rotation."
    },
    
    "castor": {
        name: "Castor",
        designation: "Alpha Geminorum",
        constellation: "Gemini",
        rightAscension: "07h 34m 36.0s",
        declination: "+31° 53′ 18″",
        apparentMagnitude: 1.58, // 24th brightest star in the night sky
        distance: 51, // light years
        spectralClass: "A1V",
        color: "White",
        luminosity: 30, // times that of the Sun (combined)
        mass: 2.8, // solar masses (Castor A)
        radius: 2.4, // solar radii (Castor A)
        temperature: 10000, // Kelvin (Castor A)
        age: 370, // million years
        description: "Castor is a sextuple star system and one of the two bright stars in the constellation Gemini, along with Pollux. It consists of three binary pairs of stars orbiting a common center of mass. Despite being designated Alpha Geminorum, it's actually fainter than Beta Geminorum (Pollux).",
        observationTips: "Castor is easily visible to the naked eye and is best observed during winter months in the Northern Hemisphere. A small telescope can resolve it into two stars, while spectroscopic observations reveal its true nature as a sextuple system."
    },
    
    "pollux": {
        name: "Pollux",
        designation: "Beta Geminorum",
        constellation: "Gemini",
        rightAscension: "07h 45m 19.4s",
        declination: "+28° 01′ 34″",
        apparentMagnitude: 1.14, // 17th brightest star in the night sky
        distance: 34, // light years
        spectralClass: "K0III",
        color: "Orange",
        luminosity: 43, // times that of the Sun
        mass: 1.9, // solar masses
        radius: 8.8, // solar radii
        temperature: 4666, // Kelvin
        age: 724, // million years
        description: "Pollux is an orange giant star and the brightest star in the constellation Gemini. It was the first giant star known to have an exoplanet, Pollux b, discovered in 2006. Despite being designated Beta Geminorum, it's actually brighter than Alpha Geminorum (Castor).",
        observationTips: "Pollux is easily visible to the naked eye and is best observed during winter months in the Northern Hemisphere. Its orange color contrasts with the white Castor, making the pair easy to distinguish."
    },
    
    "spica": {
        name: "Spica",
        designation: "Alpha Virginis",
        constellation: "Virgo",
        rightAscension: "13h 25m 11.6s",
        declination: "-11° 09′ 41″",
        apparentMagnitude: 1.04, // 15th brightest star in the night sky
        distance: 250, // light years
        spectralClass: "B1III-IV",
        color: "Blue-White",
        luminosity: 12100, // times that of the Sun
        mass: 10.5, // solar masses
        radius: 7.4, // solar radii
        temperature: 22400, // Kelvin
        age: 12.5, // million years
        description: "Spica is a binary star system and the brightest star in the constellation Virgo. Its name comes from the Latin 'spīca virginis,' meaning 'the virgin's ear of grain,' referring to the sheaf of wheat the goddess Virgo holds. The two stars in the Spica system orbit each other every 4 days and are so close they're tidally distorted into egg shapes.",
        observationTips: "Spica is easily visible to the naked eye and is best observed during spring and summer months in the Northern Hemisphere. It can be found by following the arc of the Big Dipper's handle to Arcturus and then continuing to Spica ('Arc to Arcturus, then spike to Spica')."
    }
};

// Export the data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = starData;
}