function generateCup(cupTitle, cupIconSrc, cupTracks, isDLC, isWiiU, isSwitch, detailsText) {
    // grab cupTitle text and use it as cupID; replace space with dashes
    const cupID = cupTitle.replace(/\s+/g, '-').toLowerCase();

    // Recreates HTML structure and fills in info with template literals (grabbed from generateCup)
    const cupHTML = `
        <div class="wrapper" id="${cupID}">
            <div class="cup-container">
                <img id="cup-icon" src="${cupIconSrc}">
                <div class="cup-info">
                    <h2 id="cup-title">${cupTitle}</h2>
                    <div class="cup-details">
                        <div class="status">
                            <div class="console-list">
                                ${isDLC ? '<p id="DLC">DLC</p>' : ''}
                                ${isWiiU ? '<img id="wiiu" src="src/wiiu-icon.png">' : ''}
                                ${isSwitch ? '<img id="switch" src="src/switch-icon.png">' : ''}
                            </div>
                            <p id="details">${detailsText}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="track-container">
                ${cupTracks.map(track => `
                    <div class="track-info">
                        <img src="${track.trackImg}" alt="${track.trackTitle}" draggable="false">
                        <h4 class="retro-title" style="opacity: ${track.hasRetroTitle ? '1' : '0'};">${track.retroTitle}</h4>
                        <h3 class="track-title">${track.trackTitle}</h3>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', cupHTML);
}

//Cup Lists
const mushroomCup = {
    title: "Mushroom Cup",
    cupIconSrc: "src/cups/mushroom-cup/mushroom-cup.png",
    isDLC: false,
    isWiiU: true,
    isSwitch: true,
    detailsText: "",
    tracks: [
        {trackTitle: "Mario Kart Stadium",
            trackImg: "src/cups/mushroom-cup/MK8_Mario_Kart_Stadium_Course_Icon.png", 
            hasRetroTitle: false, 
            retroTitle: ""},

        {trackTitle: "Water Park",
            trackImg: "src/cups/mushroom-cup/MK8_Water_Park_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Sweet Sweet Canyon",
            trackImg: "src/cups/mushroom-cup/MK8_Sweet_Sweet_Canyon_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Thwomp Ruins",
            trackImg: "src/cups/mushroom-cup/MK8_Thwomp_Ruins_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(mushroomCup.title, mushroomCup.cupIconSrc, mushroomCup.tracks, mushroomCup.isDLC, mushroomCup.isWiiU, mushroomCup.isSwitch, mushroomCup.detailsText);

const flowerCup = {
    title: "Flower Cup",
    cupIconSrc: "src/cups/flower-cup/flower-cup.png",
    isDLC: false,
    isWiiU: true,
    isSwitch: true,
    detailsText: "",
    tracks: [
        {trackTitle: "Mario Circuit",
            trackImg: "src/cups/flower-cup/MK8_Mario_Circuit_Course_Icon.png", 
            hasRetroTitle: false, 
            retroTitle: ""},

        {trackTitle: "Toad Harbour",
            trackImg: "src/cups/flower-cup/MK8_Toad_Harbor_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Twisted Mansion",
            trackImg: "src/cups/flower-cup/MK8_Twisted_Mansion_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Shy Guy Falls",
            trackImg: "src/cups/flower-cup/MK8_Shy_Guy_Falls_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(flowerCup.title, flowerCup.cupIconSrc, flowerCup.tracks, flowerCup.isDLC, flowerCup.isWiiU, flowerCup.isSwitch, flowerCup.detailsText);

const starCup = {
    title: "Star Cup",
    cupIconSrc: "src/cups/star-cup/star-cup.png",
    isDLC: false,
    isWiiU: true,
    isSwitch: true,
    detailsText: "",
    tracks: [
        {trackTitle: "Sunshine Airport",
            trackImg: "src/cups/star-cup/MK8_Sunshine_Airport_Course_Icon.png", 
            hasRetroTitle: false, 
            retroTitle: ""},

        {trackTitle: "Dolphin Shoals",
            trackImg: "src/cups/star-cup/MK8_Dolphin_Shoals_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Electrodome",
            trackImg: "src/cups/star-cup/MK8_Electrodrome_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Mount Wario",
            trackImg: "src/cups/star-cup/MK8_Mount_Wario_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(starCup.title, starCup.cupIconSrc, starCup.tracks, starCup.isDLC, starCup.isWiiU, starCup.isSwitch, starCup.detailsText);

const specialCup = {
    title: "Special Cup",
    cupIconSrc: "src/cups/special-cup/special-cup.png",
    isDLC: false,
    isWiiU: true,
    isSwitch: true,
    detailsText: "",
    tracks: [
        {trackTitle: "Cloudtop Cruise",
            trackImg: "src/cups/special-cup/MK8_Cloudtop_Cruise_Course_Icon.png", 
            hasRetroTitle: false, 
            retroTitle: ""},

        {trackTitle: "Bone-Dry Dunes",
            trackImg: "src/cups/special-cup/MK8_Bone-Dry_Dunes_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Bowser's Castle",
            trackImg: "src/cups/special-cup/MK8_Bowser_s_Castle_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Rainbow Road",
            trackImg: "src/cups/special-cup/MK8_Rainbow_Road_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(specialCup.title, specialCup.cupIconSrc, specialCup.tracks, specialCup.isDLC, specialCup.isWiiU, specialCup.isSwitch, specialCup.detailsText);

const shellCup = {
    title: "Shell Cup",
    cupIconSrc: "src/cups/shell-cup/shell-cup.png",
    isDLC: false,
    isWiiU: true,
    isSwitch: true,
    detailsText: "",
    tracks: [
        {trackTitle: "Moo Moo Meadows",
            trackImg: "src/cups/shell-cup/MK8_Wii_Moo_Moo_Meadows_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Wii"},

        {trackTitle: "Mario Circuit",
            trackImg: "src/cups/shell-cup/MK8_GBA_Mario_Circuit_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GBA"},

        {trackTitle: "Cheep Cheep Beach",
            trackImg: "src/cups/shell-cup/MK8_DS_Cheep_Cheep_Beach_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "DS"},

        {trackTitle: "Toad's Turnpike",
            trackImg: "src/cups/shell-cup/MK8_N64_Toad_s_Turnpike_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "N64"}
    ],
};
generateCup(shellCup.title, shellCup.cupIconSrc, shellCup.tracks, shellCup.isDLC, shellCup.isWiiU, shellCup.isSwitch, shellCup.detailsText);

const bananaCup = {
    title: "Banana Cup",
    cupIconSrc: "src/cups/banana-cup/banana-cup.png",
    isDLC: false,
    isWiiU: true,
    isSwitch: true,
    detailsText: "",
    tracks: [
        {trackTitle: "Dry Dry Desert",
            trackImg: "src/cups/banana-cup/MK8_GCN_Dry_Dry_Desert_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "GCN"},

        {trackTitle: "Donut Plains 3",
            trackImg: "src/cups/banana-cup/MK8_SNES_Donut_Plains_3_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "SNES"},

        {trackTitle: "Royal Raceway",
            trackImg: "src/cups/banana-cup/MK8_N64_Royal_Raceway_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "N64"},

        {trackTitle: "DK Jungle",
            trackImg: "src/cups/banana-cup/MK8_3DS_DK_Jungle_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "3DS"}
    ],
};
generateCup(bananaCup.title, bananaCup.cupIconSrc, bananaCup.tracks, bananaCup.isDLC, bananaCup.isWiiU, bananaCup.isSwitch, bananaCup.detailsText);

const leafCup = {
    title: "Leaf Cup",
    cupIconSrc: "src/cups/leaf-cup/leaf-cup.png",
    isDLC: false,
    isWiiU: true,
    isSwitch: true,
    detailsText: "",
    tracks: [
        {trackTitle: "Wario Stadium",
            trackImg: "src/cups/leaf-cup/MK8_DS_Wario_Stadium_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "DS"},

        {trackTitle: "Sherbet Land",
            trackImg: "src/cups/leaf-cup/MK8_GCN_Sherbet_Land_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GCN"},

        {trackTitle: "Music Park",
            trackImg: "src/cups/leaf-cup/MK8_3DS_Music_Park_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "3DS"},

        {trackTitle: "Yoshi Valley",
            trackImg: "src/cups/leaf-cup/MK8_N64_Yoshi_Valley_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "N64"}
    ],
};
generateCup(leafCup.title, leafCup.cupIconSrc, leafCup.tracks, leafCup.isDLC, leafCup.isWiiU, leafCup.isSwitch, leafCup.detailsText);

const lightningCup = {
    title: "Lightning Cup",
    cupIconSrc: "src/cups/lightning-cup/lightning-cup.png",
    isDLC: false,
    isWiiU: true,
    isSwitch: true,
    detailsText: "",
    tracks: [
        {trackTitle: "Tick-Tock Clock",
            trackImg: "src/cups/lightning-cup/MK8_DS_Tick-Tock_Clock_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "DS"},

        {trackTitle: "Piranha Plant Slide",
            trackImg: "src/cups/lightning-cup/MK8_3DS_Piranha_Plant_Slide_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "3DS"},

        {trackTitle: "Grumble Volcano",
            trackImg: "src/cups/lightning-cup/MK8_Wii_Grumble_Volcano_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"},

        {trackTitle: "Rainbow Road",
            trackImg: "src/cups/lightning-cup/MK8_N64_Rainbow_Road_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "N64"}
    ],
};
generateCup(lightningCup.title, lightningCup.cupIconSrc, lightningCup.tracks, lightningCup.isDLC, lightningCup.isWiiU, lightningCup.isSwitch, lightningCup.detailsText);

const eggCup = {
    title: "Egg Cup",
    cupIconSrc: "src/cups/lightning-cup/lightning-cup.png",
    isDLC: true,
    isWiiU: true,
    isSwitch: true,
    detailsText: "First appeared as DLC for WiiU version",
    tracks: [
        {trackTitle: "Yoshi Circuit",
            trackImg: "src/cups/egg-cup/MK8_GCN_Yoshi_Circuit_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "GCN"},

        {trackTitle: "Excitebike Arena",
            trackImg: "src/cups/egg-cup/MK8_Excitebike_Arena_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Dragon Driftway",
            trackImg: "src/cups/egg-cup/MK8_Dragon_Driftway_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Mute City",
            trackImg: "src/cups/egg-cup/MK8_Mute_City_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(eggCup.title, eggCup.cupIconSrc, eggCup.tracks, eggCup.isDLC, eggCup.isWiiU, eggCup.isSwitch, eggCup.detailsText);

const triforceCup = {
    title: "Triforce Cup",
    cupIconSrc: "src/cups/tri-force-cup/tri-force-cup.png",
    isDLC: true,
    isWiiU: true,
    isSwitch: true,
    detailsText: "First appeared as DLC for WiiU version",
    tracks: [
        {trackTitle: "Wario's Gold Mine",
            trackImg: "src/cups/tri-force-cup/MK8_Wii_Wario_s_Gold_Mine_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Wii"},

        {trackTitle: "Rainbow Road",
            trackImg: "src/cups/tri-force-cup/MK8_SNES_Rainbow_Road_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "SNES"},

        {trackTitle: "Ice Ice Outpost",
            trackImg: "src/cups/tri-force-cup/MK8_Ice_Ice_Outpost_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Hyrule Castle",
            trackImg: "src/cups/tri-force-cup/MK8_Hyrule_Circuit_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(triforceCup.title, triforceCup.cupIconSrc, triforceCup.tracks, triforceCup.isDLC, triforceCup.isWiiU, triforceCup.isSwitch, triforceCup.detailsText);

const crossingCup = {
    title: "Crossing Cup",
    cupIconSrc: "src/cups/crossing-cup/crossing-cup.png",
    isDLC: true,
    isWiiU: true,
    isSwitch: true,
    detailsText: "First appeared as DLC for WiiU version",
    tracks: [
        {trackTitle: "Baby Park",
            trackImg: "src/cups/crossing-cup/MK8_GCN_Baby_Park_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "GCN"},

        {trackTitle: "Cheese Land",
            trackImg: "src/cups/crossing-cup/MK8_GBA_Cheese_Land_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GBA"},

        {trackTitle: "Wild Woods",
            trackImg: "src/cups/crossing-cup/MK8_Wild_Woods_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Hyrule Castle",
            trackImg: "src/cups/crossing-cup/MK8_Animal_Crossing_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: "Nook"}
    ],
};
generateCup(crossingCup.title, crossingCup.cupIconSrc, crossingCup.tracks, crossingCup.isDLC, crossingCup.isWiiU, crossingCup.isSwitch, crossingCup.detailsText);

const bellCup = {
    title: "Bell Cup",
    cupIconSrc: "src/cups/bell-cup/bell-cup.png",
    isDLC: true,
    isWiiU: true,
    isSwitch: true,
    detailsText: "First appeared as DLC for WiiU version",
    tracks: [
        {trackTitle: "Neo Bowser City",
            trackImg: "src/cups/bell-cup/MK8_3DS_Neo_Bowser_City_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "3DS"},

        {trackTitle: "Ribbon Road",
            trackImg: "src/cups/bell-cup/MK8_GBA_Ribbon_Road_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GBA"},

        {trackTitle: "Super Bell Subway",
            trackImg: "src/cups/bell-cup/MK8_Super_Bell_Subway_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Big Blue",
            trackImg: "src/cups/bell-cup/MK8_Big_Blue_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(bellCup.title, bellCup.cupIconSrc, bellCup.tracks, bellCup.isDLC, bellCup.isWiiU, bellCup.isSwitch, bellCup.detailsText);



const goldenDashCup = {
    title: "Golden Dash Cup",
    cupIconSrc: "src/cups/golden-dash-cup/golden-dash-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 1)",
    tracks: [
        {trackTitle: "Paris Promenade",
            trackImg: "src/cups/golden-dash-cup/MK8D_Tour_Paris_Promenade_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Toad Circuit",
            trackImg: "src/cups/golden-dash-cup/MK8D_3DS_Toad_Circuit_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "3DS"},

        {trackTitle: "Choco Mountain",
            trackImg: "src/cups/golden-dash-cup/MK8D_N64_Choco_Mountain_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "N64"},

        {trackTitle: "Coconut Mall",
            trackImg: "src/cups/golden-dash-cup/MK8D_Wii_Coconut_Mall_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"}
    ],
};
generateCup(goldenDashCup.title, goldenDashCup.cupIconSrc, goldenDashCup.tracks, goldenDashCup.isDLC, goldenDashCup.isWiiU, goldenDashCup.isSwitch, goldenDashCup.detailsText);

const luckyCatCup = {
    title: "Lucky Cat Cup",
    cupIconSrc: "src/cups/lucky-cat-cup/lucky-cat-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 1)",
    tracks: [
        {trackTitle: "Tokyo Blur",
            trackImg: "src/cups/lucky-cat-cup/MK8D_Tour_Tokyo_Blur_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Shroom Ridge",
            trackImg: "src/cups/lucky-cat-cup/MK8D_DS_Shroom_Ridge_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "DS"},

        {trackTitle: "Sky Garden",
            trackImg: "src/cups/lucky-cat-cup/MK8D_GBA_Sky_Garden_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GBA"},

        {trackTitle: "Ninja Hideaway",
            trackImg: "src/cups/lucky-cat-cup/MK8D_Ninja_Hideaway_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(luckyCatCup.title, luckyCatCup.cupIconSrc, luckyCatCup.tracks, luckyCatCup.isDLC, luckyCatCup.isWiiU, luckyCatCup.isSwitch, luckyCatCup.detailsText);

const turnipCup = {
    title: "Turnip Cup",
    cupIconSrc: "src/cups/turnip-cup/turnip-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 2)",
    tracks: [
        {trackTitle: "New York Minute",
            trackImg: "src/cups/turnip-cup/MK8D_Tour_New_York_Minute_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Mario Circuit 3",
            trackImg: "src/cups/turnip-cup/MK8D_SNES_Mario_Circuit_3_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "SNES"},

        {trackTitle: "Kalimari Desert",
            trackImg: "src/cups/turnip-cup/MK8D_N64_Kalimari_Desert_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "N64"},

        {trackTitle: "Waluigi Pinball",
            trackImg: "src/cups/turnip-cup/MK8D_DS_Waluigi_Pinball_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "DS"}
    ],
};
generateCup(turnipCup.title, turnipCup.cupIconSrc, turnipCup.tracks, turnipCup.isDLC, turnipCup.isWiiU, turnipCup.isSwitch, turnipCup.detailsText);

const propellerCup = {
    title: "Propeller Cup",
    cupIconSrc: "src/cups/propeller-cup/propeller-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 2)",
    tracks: [
        {trackTitle: "Sydney Sprint",
            trackImg: "src/cups/propeller-cup/MK8D_Tour_Sydney_Sprint_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Snow Land",
            trackImg: "src/cups/propeller-cup/MK8D_GBA_Snow_Land_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GBA"},

        {trackTitle: "Mushroom Gorge",
            trackImg: "src/cups/propeller-cup/MK8D_Wii_Mushroom_Gorge_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"},

        {trackTitle: "Sky High Sundae",
            trackImg: "src/cups/propeller-cup/MK8D_Sky-High_Sundae_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(propellerCup.title, propellerCup.cupIconSrc, propellerCup.tracks, propellerCup.isDLC, propellerCup.isWiiU, propellerCup.isSwitch, propellerCup.detailsText);

const rockCup = {
    title: "Rock Cup",
    cupIconSrc: "src/cups/rock-cup/rock-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 3)",
    tracks: [
        {trackTitle: "London Loop",
            trackImg: "src/cups/rock-cup/MK8D_Tour_London_Loop_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Boo Lake",
            trackImg: "src/cups/rock-cup/MK8D_GBA_Boo_Lake_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GBA"},

        {trackTitle: "Rock Rock Mountain",
            trackImg: "src/cups/rock-cup/MK8D_3DS_Rock_Rock_Mountain_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "3DS"},

        {trackTitle: "Maple Treeway",
            trackImg: "src/cups/rock-cup/MK8D_Wii_Maple_Treeway_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"}
    ],
};
generateCup(rockCup.title, rockCup.cupIconSrc, rockCup.tracks, rockCup.isDLC, rockCup.isWiiU, rockCup.isSwitch, rockCup.detailsText);

const moonCup = {
    title: "Moon Cup",
    cupIconSrc: "src/cups/moon-cup/moon-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 3)",
    tracks: [
        {trackTitle: "Berlin Byways",
            trackImg: "src/cups/moon-cup/MK8D_Tour_Berlin_Byways_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Peach Gardens",
            trackImg: "src/cups/moon-cup/MK8D_DS_Peach_Gardens_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "DS"},

        {trackTitle: "Merry Mountain",
            trackImg: "src/cups/moon-cup/MK8D_Merry_Mountain_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""},

        {trackTitle: "Rainbow Road",
            trackImg: "src/cups/moon-cup/MK8D_3DS_Rainbow_Road_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "3DS"}
    ],
};
generateCup(moonCup.title, moonCup.cupIconSrc, moonCup.tracks, moonCup.isDLC, moonCup.isWiiU, moonCup.isSwitch, moonCup.detailsText);

const fruitCup = {
    title: "Fruit Cup",
    cupIconSrc: "src/cups/fruit-cup/fruit-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 4)",
    tracks: [
        {trackTitle: "Amsterdam Drift",
            trackImg: "src/cups/fruit-cup/MK8D_Tour_Amsterdam_Drift_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Riverside Park",
            trackImg: "src/cups/fruit-cup/MK8D_GBA_Riverside_Park_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GBA"},

        {trackTitle: "DK Summit",
            trackImg: "src/cups/fruit-cup/MK8D_Wii_DK_Summit_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"},

        {trackTitle: "Yoshi's Island",
            trackImg: "src/cups/fruit-cup/MK8D_Yoshi's_Island_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(fruitCup.title, fruitCup.cupIconSrc, fruitCup.tracks, fruitCup.isDLC, fruitCup.isWiiU, fruitCup.isSwitch, fruitCup.detailsText);

const boomerangCup = {
    title: "Boomerang Cup",
    cupIconSrc: "src/cups/boomerang-cup/boomerang-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 4)",
    tracks: [
        {trackTitle: "Bangkok Rush",
            trackImg: "src/cups/boomerang-cup/MK8D_Tour_Bangkok_Rush_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Mario Circuit",
            trackImg: "src/cups/boomerang-cup/MK8D_DS_Mario_Circuit_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "DS"},

        {trackTitle: "Waluigi Stadium",
            trackImg: "src/cups/boomerang-cup/MK8D_GCN_Waluigi_Stadium_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GCN"},

        {trackTitle: "Singapore Speedway",
            trackImg: "src/cups/boomerang-cup/MK8D_Tour_Singapore_Speedway_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Tour"}
    ],
};
generateCup(boomerangCup.title, boomerangCup.cupIconSrc, boomerangCup.tracks, boomerangCup.isDLC, boomerangCup.isWiiU, boomerangCup.isSwitch, boomerangCup.detailsText);

const featherCup = {
    title: "Feather Cup",
    cupIconSrc: "src/cups/feather-cup/feather-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 5)",
    tracks: [
        {trackTitle: "Athens Dash",
            trackImg: "src/cups/feather-cup/MK8D_Tour_Athens_Dash_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Daisy Cruiser",
            trackImg: "src/cups/feather-cup/MK8D_GCN_Daisy_Cruiser_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GCN"},

        {trackTitle: "Moonview Highway",
            trackImg: "src/cups/feather-cup/MK8D_Wii_Moonview_Highway_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"},

        {trackTitle: "Squeaky Clean Sprint",
            trackImg: "src/cups/feather-cup/MK8D_Squeaky_Clean_Sprint_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(featherCup.title, featherCup.cupIconSrc, featherCup.tracks, featherCup.isDLC, featherCup.isWiiU, featherCup.isSwitch, featherCup.detailsText);

const cherryCup = {
    title: "Cherry Cup",
    cupIconSrc: "src/cups/cherry-cup/cherry-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 5)",
    tracks: [
        {trackTitle: "Los Angeles Laps",
            trackImg: "src/cups/cherry-cup/MK8D_Tour_Los_Angeles_Laps_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Sunset Wilds",
            trackImg: "src/cups/cherry-cup/MK8D_GBA_Sunset_Wilds_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GBA"},

        {trackTitle: "Koopa Cape",
            trackImg: "src/cups/cherry-cup/MK8D_Wii_Koopa_Cape_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"},

        {trackTitle: "Vancouver Velocity",
            trackImg: "src/cups/cherry-cup/MK8D_Tour_Vancouver_Velocity_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Tour"}
    ],
};
generateCup(cherryCup.title, cherryCup.cupIconSrc, cherryCup.tracks, cherryCup.isDLC, cherryCup.isWiiU, cherryCup.isSwitch, cherryCup.detailsText);

const acornCup = {
    title: "Acorn Cup",
    cupIconSrc: "src/cups/acorn-cup/acorn-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 6)",
    tracks: [
        {trackTitle: "Rome Avanti",
            trackImg: "src/cups/acorn-cup/MK8D_Tour_Rome_Avanti_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "DK Mountain",
            trackImg: "src/cups/acorn-cup/MK8D_GCN_DK_Mountain_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "GCN"},

        {trackTitle: "Daisy Circuit",
            trackImg: "src/cups/acorn-cup/MK8D_Wii_Daisy_Circuit_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"},

        {trackTitle: "Piranha Plant Cove",
            trackImg: "src/cups/acorn-cup/MK8D_Piranha_Plant_Cove_Course_Icon.png",
            hasRetroTitle: false,
            retroTitle: ""}
    ],
};
generateCup(acornCup.title, acornCup.cupIconSrc, acornCup.tracks, acornCup.isDLC, acornCup.isWiiU, acornCup.isSwitch, acornCup.detailsText);

const spinyCup = {
    title: "Spiny Cup",
    cupIconSrc: "src/cups/spiny-cup/spiny-cup.png",
    isDLC: true,
    isWiiU: false,
    isSwitch: true,
    detailsText: "Included in the Booster Course Pass (Wave 6)",
    tracks: [
        {trackTitle: "Madrid Drive",
            trackImg: "src/cups/spiny-cup/MK8D_Tour_Madrid_Drive_Course_Icon.png", 
            hasRetroTitle: true, 
            retroTitle: "Tour"},

        {trackTitle: "Rosalina's Ice World",
            trackImg: "src/cups/spiny-cup/MK8D_3DS_Rosalina's_Ice_World_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "3DS"},

        {trackTitle: "Bowser Castle 3",
            trackImg: "src/cups/spiny-cup/MK8D_SNES_Bowser_Castle_3_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "SNES"},

        {trackTitle: "Rainbow Road",
            trackImg: "src/cups/spiny-cup/MK8D_Wii_Rainbow_Road_Course_Icon.png",
            hasRetroTitle: true,
            retroTitle: "Wii"}
    ],
};
generateCup(spinyCup.title, spinyCup.cupIconSrc, spinyCup.tracks, spinyCup.isDLC, spinyCup.isWiiU, spinyCup.isSwitch, spinyCup.detailsText);