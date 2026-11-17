import type { Structured } from "./types";

function q(
  id: string,
  chapter: string,
  parts: Structured["parts"],
): Structured {
  return { id, chapter, parts };
}

export const STRUCTURED: Structured[] = [
  q("cl1", "Climate of India", [
    { marks: 2, text: "Name the two branches of the South-West Monsoon.", answer: "The Arabian Sea branch and the Bay of Bengal branch." },
    { marks: 2, text: "Why does Chennai receive most of its rain in October and November?", answer: "It lies in the rain shadow of the Western Ghats during the South-West Monsoon. The retreating monsoon, blowing from the north-east, picks up moisture from the Bay of Bengal and sheds it on the Tamil Nadu coast." },
    { marks: 3, text: "A station receives about 180 cm of rain, almost all of it from June to September, and has a dry winter. (a) Name the season of heaviest rain. (b) Name the winds that bring it. (c) Name one west-coast city with a similar pattern.", answer: "(a) The South-West monsoon season. (b) The South-West monsoon winds. (c) Mumbai, Mangaluru or Kochi." },
    { marks: 3, text: "Give a reason for each: (a) Mawsynram is one of the wettest places on Earth. (b) The Thar remains dry even in the monsoon months. (c) The Malabar coast is wetter than the Coromandel coast in summer.", answer: "(a) Moist winds of the Bay of Bengal branch are forced to rise over the Khasi hills. (b) The Aravallis lie parallel to the Arabian Sea branch, so the winds are not forced to rise, and the region is far inland. (c) The Western Ghats face the Arabian Sea branch, while the Coromandel coast is in the rain shadow in summer." },
  ]),
  q("cl2", "Climate of India", [
    { marks: 2, text: "What is meant by the burst of the monsoon?", answer: "The sudden onset of heavy rain along the Kerala coast, usually in the first week of June, which marks the arrival of the South-West Monsoon." },
    { marks: 2, text: "State two features of the retreating monsoon.", answer: "Skies clear and day temperatures rise at first. Later, cyclonic storms bring rain to the east coast, especially Tamil Nadu, in October and November." },
    { marks: 3, text: "Explain three factors that influence the climate of India.", answer: "The Tropic of Cancer passes through the country, so much of India is tropical. The Himalayas block cold Central Asian winds and force the monsoon winds to rise. The Arabian Sea and the Bay of Bengal supply moisture. Distance from the sea and altitude further modify temperature and rainfall. Any three." },
    { marks: 3, text: "Distinguish between the South-West Monsoon and the North-East Monsoon under (a) season (b) direction of the wind (c) the coast that receives heavy rain.", answer: "(a) South-West: June to September. North-East: October to December. (b) South-West winds blow from sea to land; North-East winds blow from land to sea. (c) The west coast and most of India get the South-West rain; the Tamil Nadu coast gets the North-East rain." },
  ]),
  q("cl3", "Climate of India", [
    { marks: 2, text: "Name two local winds of India.", answer: "Any two: loo, kalbaisakhi, mango showers." },
    { marks: 2, text: "Why is the annual range of temperature small at Kochi but large at Delhi?", answer: "Kochi is on the coast, so the sea keeps temperatures equable. Delhi is inland, so summers are much hotter and winters much colder." },
    { marks: 3, text: "With reference to Western Disturbances, state (a) where they originate (b) the season in which they visit north-west India (c) one benefit to agriculture.", answer: "(a) They are depressions from the Mediterranean Sea. (b) Winter. (c) Their rain helps the rabi wheat crop of Punjab and the north-west." },
    { marks: 3, text: "Give a reason for each: (a) Mumbai is warmer than Shimla in summer. (b) The northern plains can have a cold wave in winter. (c) Rainfall in the northern plains decreases from east to west.", answer: "(a) Shimla is much higher, and temperature falls with height. (b) It is far from the sea, skies are clear, and cold winds blow from the north-west. (c) The Bay of Bengal branch loses moisture as it travels west, away from the sea." },
  ]),
  q("cl4", "Climate of India", [
    { marks: 2, text: "Define the word monsoon.", answer: "A seasonal reversal of winds, bringing a wet summer and a comparatively dry winter to the Indian subcontinent." },
    { marks: 2, text: "Name the four seasons of the Indian year recognised in the climate of India.", answer: "The cold-weather season, the hot-weather season, the South-West monsoon season and the retreating-monsoon season." },
    { marks: 3, text: "Explain the role of the Himalayas in the climate of India.", answer: "They stop the cold winds of Central Asia from entering India in winter. They intercept the monsoon winds and cause heavy rain. They help to keep the monsoon circulation within the subcontinent." },
    { marks: 3, text: "A station records 22 degrees C in January and 32 degrees C in May. January has 2 cm of rain and July has 70 cm. (a) Find the annual range of temperature from these two months. (b) Name the drier of the two months named. (c) Which winds bring the July rain?", answer: "(a) 32 - 22 = 10 degrees C. (b) January. (c) The South-West monsoon winds." },
  ]),
  q("so1", "Soil Resources", [
    { marks: 2, text: "Name two widely found soils of India.", answer: "Alluvial soil and black soil. Red soil may be named in place of black soil." },
    { marks: 2, text: "Why is black soil described as self-ploughing?", answer: "It becomes sticky when wet and cracks deeply when dry, so air enters the soil and it is turned over without much ploughing." },
    { marks: 3, text: "State three characteristics of alluvial soil.", answer: "It is a transported soil, laid down by rivers. It is deep and fertile, and rich in potash and lime. It is poor in nitrogen and humus, and it supports rice, wheat, sugarcane and pulses." },
    { marks: 3, text: "Name one crop grown on each of these soils: (a) black soil (b) laterite soil (c) desert soil.", answer: "(a) Cotton. (b) Cashew, tea or coffee. (c) Millets or barley, usually with irrigation." },
  ]),
  q("so2", "Soil Resources", [
    { marks: 2, text: "Distinguish between khadar and bangar.", answer: "Khadar is newer alluvium, flooded and renewed often, and is more fertile. Bangar is older alluvium, above the flood level, with kankar nodules, and is less fertile." },
    { marks: 2, text: "State two causes of soil erosion.", answer: "Any two: deforestation, overgrazing, ploughing up and down a slope, heavy rain on bare soil, wind in dry regions." },
    { marks: 3, text: "Explain three methods of soil conservation.", answer: "Any three: ploughing along the contour, terracing hill slopes, planting shelter belts, building check dams in gullies, keeping a cover of grass or crops, afforestation." },
    { marks: 3, text: "With reference to laterite soil, state (a) how it is formed (b) one region where it is found (c) why it is poor for ordinary crops.", answer: "(a) Heavy rain leaches silica and bases out of the soil. (b) The Western Ghats, the summits of the Eastern Ghats, or the hills of the north-east. (c) It is left with iron and aluminium oxides and is poor in humus and nitrogen." },
  ]),
  q("so3", "Soil Resources", [
    { marks: 2, text: "What is soil erosion?", answer: "The removal of topsoil by running water, wind or careless human use." },
    { marks: 2, text: "Why is alluvial soil suitable for agriculture?", answer: "It is deep, easy to work and rich in minerals such as potash and lime, so many crops grow well in it." },
    { marks: 3, text: "Name the soil and one state for each: (a) regur (b) red soil of the peninsula (c) mountain soil.", answer: "(a) Black soil - Maharashtra or Gujarat. (b) Red soil - Tamil Nadu, Karnataka or Odisha. (c) Mountain or forest soil - Uttarakhand or Himachal Pradesh." },
    { marks: 3, text: "Give a reason for each: (a) Black soil can support cotton with limited irrigation. (b) Red soil is red. (c) Desert soil is sandy and often saline.", answer: "(a) Its clay holds moisture. (b) It contains iron oxide. (c) Rainfall is low, evaporation is high, and salts are left in the sand." },
  ]),
  q("so4", "Soil Resources", [
    { marks: 2, text: "Name two crops grown widely on alluvial soil.", answer: "Any two: rice, wheat, sugarcane, jute." },
    { marks: 2, text: "What is leaching?", answer: "The washing of soluble minerals down out of the topsoil by heavy rain." },
    { marks: 3, text: "Describe where black soil is found in India.", answer: "It covers the Deccan trap. It is widespread in Maharashtra and Gujarat and extends into Madhya Pradesh and parts of Karnataka, Andhra Pradesh and Tamil Nadu. It has formed from weathered basalt." },
    { marks: 3, text: "Suggest three ways a farmer on a hill slope can check soil erosion.", answer: "Terrace the slope. Plough along the contour, not up and down. Keep a cover of trees or grass, and build small check dams in the gullies." },
  ]),
  q("nv1", "Natural Vegetation", [
    { marks: 2, text: "What is natural vegetation?", answer: "The plant cover that grows by itself, without being planted, and is suited to the local climate and soil." },
    { marks: 2, text: "Name two trees of the tropical evergreen forest.", answer: "Any two: ebony, mahogany, rosewood, rubber." },
    { marks: 3, text: "State three features of tropical deciduous forests.", answer: "They grow where rainfall is about 100 to 200 cm. Trees shed their leaves in the dry season. Teak, sal and sandalwood are important, and these forests are commercially valuable." },
    { marks: 3, text: "Give a reason for each: (a) Tropical evergreen forests are difficult to exploit. (b) Thorn-forest trees have long roots and small leaves. (c) Mangroves grow in the Ganga delta.", answer: "(a) The forest is dense, many species grow together, and the undergrowth is thick. (b) They must reach deep moisture and lose as little water as possible. (c) They can live in salty tidal mud. The Sundarbans are the largest example." },
  ]),
  q("nv2", "Natural Vegetation", [
    { marks: 2, text: "Name the two types of tropical deciduous forest.", answer: "Moist deciduous and dry deciduous." },
    { marks: 2, text: "Why are the forests on the windward Western Ghats evergreen?", answer: "Rainfall is over 200 cm and the dry season is short, so the trees do not all shed their leaves at once." },
    { marks: 3, text: "State three uses of forests.", answer: "Any three: timber and fuel, forest products such as lac and gum, prevention of soil erosion, a home for wildlife, raw material for paper and other industries, an influence on climate." },
    { marks: 3, text: "Distinguish between tropical evergreen and tropical deciduous forests under rainfall, leaf-fall and one tree of each.", answer: "Evergreen forests need over 200 cm of rain, do not shed all their leaves together, and include ebony or rosewood. Deciduous forests need about 100 to 200 cm, shed their leaves in the dry season, and include teak or sal." },
  ]),
  q("nv3", "Natural Vegetation", [
    { marks: 2, text: "What are mangroves?", answer: "Salt-tolerant forests of deltas and tidal coasts. Many have stilt roots." },
    { marks: 2, text: "Name two products obtained from deciduous forests.", answer: "Any two: teak timber, sal, sandalwood, tendu leaves, lac." },
    { marks: 3, text: "Why does the vegetation of Rajasthan change from west to east?", answer: "Rainfall increases towards the east. Thorn and scrub grow in the dry west. Dry deciduous forest, and then moister vegetation, appear as the rainfall rises eastwards." },
    { marks: 3, text: "Name the forest type and one region for each: (a) rainfall below 50 cm (b) a tidal delta (c) the slopes of the Himalayas.", answer: "(a) Thorn and scrub - the Thar. (b) Mangrove - the Sundarbans. (c) Mountain forest - Himalayan slopes, with oak, pine and deodar at different heights." },
  ]),
  q("nv4", "Natural Vegetation", [
    { marks: 2, text: "Define social forestry.", answer: "Raising trees on village land, roadsides and wasteland so that people can get fuel, fodder and small timber." },
    { marks: 2, text: "State two aims of forest conservation.", answer: "Any two: to check erosion and floods, to protect wildlife, to keep a lasting supply of forest products, to maintain the balance of climate and soil." },
    { marks: 3, text: "Describe how Himalayan vegetation changes with height.", answer: "The foothills have tropical deciduous forest, including sal. Higher up are temperate oaks, chestnuts and pines. Still higher are conifers such as deodar, silver fir and spruce. Above the tree line are alpine pastures, and then snow." },
    { marks: 3, text: "Give three reasons for the loss of forest cover in India.", answer: "Any three: clearing for farms and towns, overgrazing, cutting for fuel and timber, shifting cultivation, forest fires, roads, mines and dams." },
  ]),
  q("wa1", "Water Resources", [
    { marks: 2, text: "Name two means of irrigation used in India.", answer: "Any two: canals, wells and tube wells, tanks." },
    { marks: 2, text: "Why is irrigation needed in India although the country receives monsoon rain?", answer: "The rain is seasonal, uneven and uncertain. Many crops need water in the dry months." },
    { marks: 3, text: "State three advantages of well irrigation.", answer: "A farmer can sink a well on a small holding. Water is available in the dry season where the water table is high. It is cheaper than a large canal for a single farm, and it is important in the Northern Plains." },
    { marks: 3, text: "Give a reason for each: (a) Canals are important in Punjab. (b) Tanks are common on the Deccan. (c) Tube wells have increased in Uttar Pradesh.", answer: "(a) Perennial rivers and a gentle slope serve a region of modest rainfall. (b) Hard rock makes wells difficult, and natural hollows store monsoon water. (c) The alluvium holds groundwater, and wheat and sugarcane need irrigation." },
  ]),
  q("wa2", "Water Resources", [
    { marks: 2, text: "What is rainwater harvesting?", answer: "Collecting rainwater for use, or leading it into the ground so that the water table rises, instead of letting it run away." },
    { marks: 2, text: "Name two states where tank irrigation is widely used.", answer: "Tamil Nadu and Andhra Pradesh or Karnataka." },
    { marks: 3, text: "Explain three advantages of rainwater harvesting.", answer: "Any three: it raises the water table, reduces floods and runoff, stores water for dry months, checks erosion, and costs little." },
    { marks: 3, text: "With reference to Bhakra Nangal, name (a) the river (b) one state that benefits (c) one purpose of the project.", answer: "(a) Satluj. (b) Punjab, Haryana or Rajasthan. (c) Irrigation or hydel power." },
  ]),
  q("wa3", "Water Resources", [
    { marks: 2, text: "Distinguish between a perennial canal and an inundation canal.", answer: "A perennial canal draws water all year from a dam or barrage. An inundation canal flows only when the river is in flood." },
    { marks: 2, text: "Name two multipurpose projects and the river of each.", answer: "Any two pairs: Bhakra Nangal - Satluj; Hirakud - Mahanadi; Damodar Valley - Damodar; Tungabhadra - Tungabhadra." },
    { marks: 3, text: "State three disadvantages of large dams.", answer: "Any three: people are displaced, forests and fields are submerged, the reservoir silts up, they can cause disputes over water, and some sites are prone to earthquakes." },
    { marks: 3, text: "Suggest three ways to conserve water in a city.", answer: "Any three: harvest rain from roofs, repair leaking pipes, reuse treated waste water, avoid waste in homes, use drip irrigation in parks." },
  ]),
  q("wa4", "Water Resources", [
    { marks: 2, text: "What is a multipurpose river project?", answer: "A project, usually a dam, planned for several uses together, such as irrigation, power, flood control, fishing and navigation." },
    { marks: 2, text: "Why are peninsular rivers less useful for canals than the Himalayan rivers?", answer: "Many are seasonal and flow over rocky ground, so they do not supply water throughout the year." },
    { marks: 3, text: "Describe tank irrigation.", answer: "A tank is a small reservoir held by an earthen bund in a natural hollow. It is common in south India. It stores monsoon rain and waters the land below the bund. It fails if the monsoon fails, and many tanks silt up." },
    { marks: 3, text: "Name the project: (a) a project on the Mahanadi (b) a project on the Tungabhadra (c) the project on the Damodar.", answer: "(a) Hirakud. (b) The Tungabhadra project. (c) The Damodar Valley Corporation." },
  ]),
  q("mi1", "Mineral and Energy Resources", [
    { marks: 2, text: "Name two ferrous minerals.", answer: "Iron ore and manganese." },
    { marks: 2, text: "State two uses of manganese.", answer: "It is used in making steel, and in dry-cell batteries and alloys." },
    { marks: 3, text: "Name one leading state for iron ore and two mining areas in that state or nearby.", answer: "Odisha, with Keonjhar, Mayurbhanj or Sundargarh. Jharkhand (Singhbhum) or Chhattisgarh (Bailadila) may be given with two correct centres." },
    { marks: 3, text: "Give a reason for each: (a) Aluminium is used in aircraft. (b) Copper is used in electrical wires. (c) Petroleum is called a fossil fuel.", answer: "(a) It is light and strong. (b) It conducts electricity very well. (c) It formed from the remains of plants and animals buried long ago." },
  ]),
  q("mi2", "Mineral and Energy Resources", [
    { marks: 2, text: "Distinguish between conventional and non-conventional sources of energy, with one example of each.", answer: "Conventional sources have long been used on a large scale, such as coal. Non-conventional sources are renewable and newer in large-scale use, such as wind or solar energy." },
    { marks: 2, text: "Name two coalfields of Jharkhand.", answer: "Jharia and Bokaro. Giridih or Karanpura may replace either." },
    { marks: 3, text: "State three advantages of natural gas over coal.", answer: "It burns more cleanly and leaves little ash. It can be sent by pipeline. It has a high heating value and is a raw material for fertilisers." },
    { marks: 3, text: "With reference to Mumbai High, state (a) what is extracted (b) where it lies (c) the city whose refineries receive the oil.", answer: "(a) Crude oil and natural gas. (b) In the Arabian Sea, off Mumbai. (c) Mumbai." },
  ]),
  q("mi3", "Mineral and Energy Resources", [
    { marks: 2, text: "What is a fossil fuel? Name one.", answer: "A fuel formed over millions of years from buried organic matter. Coal, petroleum or natural gas." },
    { marks: 2, text: "Name two states that are important for bauxite.", answer: "Odisha and Gujarat. Jharkhand or Maharashtra may replace either." },
    { marks: 3, text: "Explain three conditions that favour hydel power.", answer: "A river with a reliable flow, a steep slope or a fall, and a narrow valley where a dam can be built. Heavy or well-spread rainfall helps." },
    { marks: 3, text: "Name one centre each for (a) an old oilfield and refinery in Assam (b) a nuclear power station (c) a state known for wind power.", answer: "(a) Digboi. (b) Tarapur, Kalpakkam or Rawatbhata. (c) Tamil Nadu or Gujarat." },
  ]),
  q("mi4", "Mineral and Energy Resources", [
    { marks: 2, text: "Why is coal called a conventional source of energy?", answer: "It has been used for a long time, on a large scale, to raise steam and to generate electricity." },
    { marks: 2, text: "State two uses of mica.", answer: "It is used in the electrical industry because it resists electricity, and it splits into thin sheets." },
    { marks: 3, text: "Describe the distribution of coal in India.", answer: "The best and largest reserves are Gondwana coals of the Damodar valley, including Jharia, Raniganj and Bokaro, and of the Mahanadi, Godavari and Wardha valleys. Younger Tertiary coal of lower grade is found in Assam, Meghalaya and other north-eastern states." },
    { marks: 3, text: "Give three reasons for developing non-conventional energy in India.", answer: "Coal and oil will not last forever. They pollute the air. Demand for power is rising, sunshine and wind are plentiful, and these sources can reach villages far from the grid." },
  ]),
  q("ag1", "Agriculture", [
    { marks: 2, text: "Name the two main cropping seasons of India.", answer: "Kharif and rabi." },
    { marks: 2, text: "State two geographical conditions required for rice.", answer: "A high temperature, above about 25 degrees C, and heavy rain above about 150 cm, or irrigation. Level land and alluvial soil suit it." },
    { marks: 3, text: "Explain three reasons why agriculture is important to India.", answer: "It employs a large share of the people. It supplies food. It provides raw material for industries and export crops that earn foreign exchange." },
    { marks: 3, text: "With reference to wheat, name (a) a suitable soil (b) the leading producing state (c) the reason it is a rabi crop.", answer: "(a) Well-drained alluvial soil, or black soil. (b) Uttar Pradesh. (c) It is sown in the cool winter and ripens in the warm spring." },
  ]),
  q("ag2", "Agriculture", [
    { marks: 2, text: "Differentiate between kharif and rabi crops, with one example of each.", answer: "Kharif crops are sown with the monsoon and harvested in autumn, for example rice. Rabi crops are sown in winter and harvested in spring, for example wheat." },
    { marks: 2, text: "Name two beverage crops of India.", answer: "Tea and coffee." },
    { marks: 3, text: "State three conditions for the growth of tea.", answer: "A warm, moist climate with about 150 to 250 cm of well-spread rain. Hill slopes, so that water drains. Deep, fertile, humus-rich soil, and plenty of labour for picking." },
    { marks: 3, text: "Give a reason for each: (a) Cotton grows well on the Deccan. (b) Jute is concentrated in West Bengal. (c) Millets are grown in dry areas.", answer: "(a) Black regur soil holds moisture and the climate is warm. (b) The delta has alluvial soil, heavy rain and water for retting. (c) Millets need less rain and can grow on poorer soil." },
  ]),
  q("ag3", "Agriculture", [
    { marks: 2, text: "What is a zaid crop? Give one example.", answer: "A crop grown in the short summer between rabi and kharif, with irrigation. Watermelon, cucumber or fodder." },
    { marks: 2, text: "Name the leading state for coffee and one district or hill area where it is grown.", answer: "Karnataka. Kodagu, Chikkamagaluru or Hassan." },
    { marks: 3, text: "Compare rice and wheat under season, rainfall and one producing state.", answer: "Rice is a kharif crop, needs heavy rain, and West Bengal is a leading producer. Wheat is a rabi crop, needs moderate rain or irrigation, and Uttar Pradesh is the leading producer." },
    { marks: 3, text: "Explain three problems of Indian agriculture.", answer: "Any three: dependence on the monsoon, small and scattered holdings, soil erosion, poor storage, and the pressure of population on the land." },
  ]),
  q("ag4", "Agriculture", [
    { marks: 2, text: "Name two fibre crops of India.", answer: "Cotton and jute." },
    { marks: 2, text: "Why is sugarcane called a tropical crop? Name the leading state.", answer: "It needs a hot climate and about 100 cm of rain or irrigation, with a cool, dry season for ripening. Uttar Pradesh." },
    { marks: 3, text: "Describe the geographical conditions for cotton.", answer: "Temperature about 21 to 30 degrees C, rainfall about 50 to 100 cm or irrigation, about 210 frost-free days, and black or alluvial soil. Bright sunshine is needed when the bolls open." },
    { marks: 3, text: "Name the crop: (a) the golden fibre (b) a beverage crop of Assam and the Nilgiris (c) a hardy food crop of dry peninsular India.", answer: "(a) Jute. (b) Tea. (c) Jowar, bajra or ragi." },
  ]),
  q("in1", "Manufacturing Industries", [
    { marks: 2, text: "Distinguish between an agro-based industry and a mineral-based industry, with one example of each.", answer: "An agro-based industry uses farm products, such as cotton textiles or sugar. A mineral-based industry uses minerals, such as iron and steel." },
    { marks: 2, text: "Name two centres of the cotton textile industry.", answer: "Any two: Mumbai, Ahmedabad, Coimbatore, Kanpur." },
    { marks: 3, text: "State three factors that helped the cotton textile industry to grow at Mumbai.", answer: "Any three: a humid climate, a port, cotton from the black-soil hinterland, capital, labour, and an early start." },
    { marks: 3, text: "With reference to the steel plant at Jamshedpur, name (a) the company (b) one raw material found nearby (c) the river that supplies water.", answer: "(a) Tata Iron and Steel Company. (b) Iron ore from Singhbhum or Noamundi, or coal from Jharia. (c) The Subarnarekha, or the Kharkai." },
  ]),
  q("in2", "Manufacturing Industries", [
    { marks: 2, text: "What is a public-sector industry? Give one example.", answer: "An industry owned and managed by the government. The Bhilai Steel Plant, or any SAIL plant." },
    { marks: 2, text: "Why has the sugar industry grown in peninsular India?", answer: "The cane has more sucrose, the crushing season is longer, and many mills are run by cooperatives." },
    { marks: 3, text: "Explain three factors that decide the location of an iron and steel plant.", answer: "It needs iron ore, coal and limestone nearby or cheaply transported, a supply of water, and good transport to the market. A port helps if ore or coal is brought by sea." },
    { marks: 3, text: "Give a reason for each: (a) Bengaluru is called the Silicon Valley of India. (b) Petrochemical plants stand near oil refineries. (c) The jute industry is concentrated along the Hugli.", answer: "(a) A large number of information-technology firms, skilled workers and research centres are there. (b) Petroleum is the raw material and is costly to move. (c) Jute is grown in the delta, water is available for processing, and Kolkata is a port and a market." },
  ]),
  q("in3", "Manufacturing Industries", [
    { marks: 2, text: "Name two products of the petrochemical industry.", answer: "Any two: plastics, synthetic fibre, synthetic rubber." },
    { marks: 2, text: "State two problems of the cotton textile industry.", answer: "Any two: old machines, irregular power, competition from synthetic cloth, shortage of long-staple cotton." },
    { marks: 3, text: "Name one iron and steel centre in each of (a) Chhattisgarh (b) Odisha (c) West Bengal.", answer: "(a) Bhilai. (b) Rourkela. (c) Durgapur or Burnpur." },
    { marks: 3, text: "Explain why small-scale industries matter to India.", answer: "They need less capital, use local material and labour, give work in towns and villages, supply parts to large factories, and reduce the pressure on farmland." },
  ]),
  q("in4", "Manufacturing Industries", [
    { marks: 2, text: "What is an integrated steel plant?", answer: "A plant in which iron is smelted, steel is made and the steel is rolled, all at one place." },
    { marks: 2, text: "Name two centres of the information-technology industry.", answer: "Any two: Bengaluru, Hyderabad, Pune, Chennai, Gurugram." },
    { marks: 3, text: "State three reasons for the spread of the cotton textile industry away from Mumbai.", answer: "Railways and electricity reduced the need for a humid coastal climate. Cotton is grown in many states. New centres grew near labour and markets, such as Coimbatore, Kanpur and Indore." },
    { marks: 3, text: "Name the industry: (a) raw material sugarcane, leading state Uttar Pradesh (b) raw material bauxite (c) the Hugli basin and the golden fibre.", answer: "(a) Sugar. (b) Aluminium. (c) Jute textiles." },
  ]),
  q("tr1", "Transport", [
    { marks: 2, text: "Name two classes of roads in India.", answer: "Any two: National Highways, State Highways, district roads, village roads." },
    { marks: 2, text: "Why is road transport more useful than the railway in hilly areas?", answer: "A road can climb a steeper slope and costs less to build. It also gives a door-to-door service where a railway is difficult to lay." },
    { marks: 3, text: "State three advantages of railways.", answer: "They carry bulky goods cheaply over long distances. They link cities, ports and industrial centres. They are dependable for heavy passenger traffic and help defence and trade." },
    { marks: 3, text: "Give a reason for each: (a) The northern plains have a dense railway network. (b) Airways matter to the north-eastern states. (c) Inland waterways are limited in India.", answer: "(a) The land is level and the population, farms and industries are dense. (b) Hills and forests make roads and rails difficult, so air links the valleys. (c) Many rivers are seasonal, shallow or rocky, and rail and road compete with them." },
  ]),
  q("tr2", "Transport", [
    { marks: 2, text: "What is a National Highway?", answer: "A main road of national importance, linking capitals, ports and industrial centres, built and maintained by the Central Government." },
    { marks: 2, text: "Name two major ports on the east coast.", answer: "Any two: Kolkata or Haldia, Paradip, Visakhapatnam, Chennai, Tuticorin." },
    { marks: 3, text: "Explain three advantages of road transport.", answer: "It offers a door-to-door service. Routes can be changed easily. It suits short distances, perishable goods, villages and hilly country, and a road costs less to build than a railway." },
    { marks: 3, text: "With reference to the Golden Quadrilateral, state (a) what it is (b) two cities it joins (c) one benefit.", answer: "(a) A network of wide highways linking the four largest metro cities. (b) Any two of Delhi, Mumbai, Chennai and Kolkata. (c) Faster movement of goods and people, and growth of towns along the route." },
  ]),
  q("tr3", "Transport", [
    { marks: 2, text: "Distinguish between a major port and a minor port.", answer: "Major ports are controlled by the Central Government and handle most overseas trade. Minor ports are looked after by the states and handle coastal and local trade." },
    { marks: 2, text: "Name two international airports of India.", answer: "Any two: Delhi, Mumbai, Chennai, Kolkata, Bengaluru." },
    { marks: 3, text: "State three reasons why inland water transport has not developed fully.", answer: "Many rivers are seasonal. Channels are shallow and silt up. Peninsular rivers have falls and rapids. Rail and road already compete for the traffic." },
    { marks: 3, text: "Name (a) a tidal port in the east (b) a deep port on the Andhra coast (c) a major port on the Konkan coast.", answer: "(a) Kolkata. (b) Visakhapatnam. (c) Mumbai, Mormugao or Jawaharlal Nehru Port." },
  ]),
  q("tr4", "Transport", [
    { marks: 2, text: "Why are pipelines used to move petroleum?", answer: "They carry a continuous flow of oil or gas safely and cheaply, and they take traffic off the roads and railways." },
    { marks: 2, text: "Name two goods commonly sent by pipeline in India.", answer: "Crude oil, petroleum products and natural gas. Any two." },
    { marks: 3, text: "Describe the role of airways in India.", answer: "They are the fastest means for passengers, mail and light high-value goods. They are essential for the north-east, Ladakh and the islands, and they help in disasters and defence. They are too costly for heavy bulky goods." },
    { marks: 3, text: "Give one reason each: (a) Mumbai is a major port. (b) NH 44 is important. (c) The Konkan Railway was difficult to build.", answer: "(a) It has a natural harbour and a rich hinterland, on the sea route towards the Suez Canal. (b) It is the long highway from Srinagar to Kanyakumari. (c) It had to cross the Western Ghats, many rivers and steep rainy slopes, with tunnels and bridges." },
  ]),
  q("wm1", "Waste Management", [
    { marks: 2, text: "What is waste? Name its two broad types.", answer: "Waste is material that is thrown away. The two types are biodegradable and non-biodegradable." },
    { marks: 2, text: "Distinguish between biodegradable and non-biodegradable waste, with one example of each.", answer: "Biodegradable waste is broken down by microbes, for example vegetable peels. Non-biodegradable waste is not, for example a plastic bag." },
    { marks: 3, text: "State three effects of dumping garbage in the open.", answer: "It smells and breeds flies. It pollutes soil and groundwater. It spreads disease, chokes drains and can harm animals that eat plastic." },
    { marks: 3, text: "Explain the three Rs, with one example of each.", answer: "Reduce: carry a cloth bag instead of taking a new plastic one. Reuse: refill a bottle. Recycle: send paper or glass to be made into new goods." },
  ]),
  q("wm2", "Waste Management", [
    { marks: 2, text: "What is composting?", answer: "Letting biodegradable waste, such as kitchen scraps and leaves, rot into manure." },
    { marks: 2, text: "Name two diseases linked with unsafe disposal of waste.", answer: "Any two: cholera, typhoid, dysentery, dengue." },
    { marks: 3, text: "Describe three safe ways of dealing with solid waste in a city.", answer: "Separate waste at home. Compost the wet waste. Recycle paper, metal and glass. What remains can go to a sanitary landfill. Any three of these." },
    { marks: 3, text: "Give a reason for each: (a) Plastic bags should be avoided. (b) E-waste should not be burnt in the open. (c) Factory waste should be treated before it enters a river.", answer: "(a) They do not rot, they choke drains, and cattle swallow them. (b) Burning releases poisonous metals such as lead and mercury. (c) Chemicals kill fish and make the water unfit to drink or to use on fields." },
  ]),
  q("wm3", "Waste Management", [
    { marks: 2, text: "What is a sanitary landfill?", answer: "A site where waste is spread in thin layers, compacted and covered with earth so that it does not pollute the surroundings." },
    { marks: 2, text: "Name two sources of e-waste.", answer: "Any two: discarded computers, mobile phones, televisions, batteries." },
    { marks: 3, text: "Explain how segregation of waste helps.", answer: "Wet waste can be composted. Dry waste such as paper, glass and metal can be recycled. Hazardous waste can be kept apart. Less waste then goes to a landfill, and collection is safer." },
    { marks: 3, text: "Suggest three things a student can do about waste at school.", answer: "Use both sides of a sheet of paper. Put waste in the correct bin. Avoid single-use plastic, and do not litter. Compost garden waste. Any three." },
  ]),
  q("wm4", "Waste Management", [
    { marks: 2, text: "Define pollution.", answer: "The addition of harmful substances to air, water or land so that they become unsafe for living beings." },
    { marks: 2, text: "Name two greenhouse gases.", answer: "Any two: carbon dioxide, methane, nitrous oxide." },
    { marks: 3, text: "Explain three causes of water pollution.", answer: "Any three: untreated sewage, factory effluents, fertilisers and pesticides washed off fields, garbage dumped in water, and oil spills." },
    { marks: 3, text: "What is acid rain? State two of its effects.", answer: "Rain made acidic by sulphur dioxide and oxides of nitrogen from burning fuels. It damages crops and forests, eats into buildings, and makes lakes and soil acidic. Any two effects with the meaning." },
  ]),
];
