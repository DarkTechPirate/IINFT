export interface Insect {
  id: string;
  name: string;
  scientificName: string;
  type: 'Primary' | 'Secondary';
  description: string;
  characteristics: string[];
  lifeHistory: string[];
  natureOfDamage: string[];
  hostRange: string;
  images?: any[];
}

export const primaryInsects: Insect[] = [
  {
    id: 'p1',
    name: 'Rice Weevil',
    scientificName: 'Sitophilus oryzae (Linn.)',
    type: 'Primary',
    description: 'Weevils are characterized by their distinct beak or snout. Adult weevils typically have a size of about 3 mm.',
    images: [require('../../images/RICE_WEEVIL.jpg')],
    characteristics: [
      'Weevils are characterized by their distinct beak or snout',
      'Adult weevils typically have a size of about 3 mm',
      'Weevils have elbowed antennae, and these antennae are slightly clubbed in shape',
      'Weevil coloration can range from reddish brown chocolate to almost brown',
      'Weevils generally have hind wings, except for a species called Sitophilus granarius',
      'Among the three species mentioned, Sitophilus zeamais is the largest one'
    ],
    lifeHistory: [
      'The female lays translucent white eggs on the surface of the grain',
      'An adult female can lay between 150 and 250 eggs during its lifespan',
      'Once the eggs hatch, the larvae emerge and feed on the endosperm of the grain for about 20 days',
      'After the larval period, the pupal stage generally lasts for four to six days',
      'When development is complete, the adult emerges by creating a circular hole in the grain kernel',
      'The adult has a lifespan of three to five months, during which it continues to breed and lay eggs',
      'The complete life cycle, from egg to adult, is completed in approximately 26 days under conditions of 30°C and 75% relative humidity',
      'During the winter season, the insects either hibernate or remain less active',
      'Warm and humid conditions are highly favourable for rapid development of this pest',
      'The germination capacity of the grain is lost because the adults feed on the starchy endosperm while the larvae feed primarily on the germ'
    ],
    natureOfDamage: [
      'Weevils are known for hollowing out grains and reducing them to a powdery form',
      'This type of feeding behavior results in significant damage and quality loss in stored grains',
      'Sitophilus oryzae (rice weevil) and Sitophilus zeamais (maize weevil) are field carry-over insects that begin attacking grains in the field before harvest',
      'Adult weevils are responsible for cutting circular holes in grain kernels',
      'The presence of circular holes on grains is a clear indication of weevil infestation in stored grain products'
    ],
    hostRange: 'Rice, wheat, maize, pulses, sorghum, barley'
  },
  {
    id: 'p2',
    name: 'Pulse Beetle',
    scientificName: 'Callosobruchus maculatus (Fab.)',
    type: 'Primary',
    description: 'It is 3–4.5 mm in length, coloured brown with gray and black spots on the abdomen, which is heart-shaped.',
    images: [
      require('../../images/PULSE_BEETLE.jpg'),
      require('../../images/PULSE_BEETLE_EGGS.jpg')
    ],
    characteristics: [
      'It is 3–4.5 mm in length, coloured brown with gray and black spots on the abdomen, which is heart-shaped',
      'The male beetle abdomen is smaller than the female',
      'The antenna is pectinate (male) and serrate (female)'
    ],
    lifeHistory: [
      'The adult lays a single egg, which is firmly glued to the surface of the grain',
      'Freshly laid eggs are translucent in colour and gradually turn opaque before hatching',
      'The eggs hatch within three to five days under favourable conditions',
      'A single female adult has the capacity to produce 80 to 100 eggs during its lifespan',
      'The larva is fleshy and creamy white in colour with a distinct black mouth',
      'The complete life cycle is completed within 28 to 35 days at a temperature of 30°C and 70% relative humidity',
      'The pulse beetle shows peak breeding activity during the months of July and August'
    ],
    natureOfDamage: [
      'The larva feeds on the endosperm portion of the grains and make circular holes and pupates inside the grain',
      'Adults make exit holes to come out of the grain',
      'The life span of adults is short between 8 and 14 days'
    ],
    hostRange: 'All whole pulses, beans and grams, cotton seed, maize'
  },
  {
    id: 'p3',
    name: 'Cigarette Beetle',
    scientificName: 'Lasioderma serricorne (Fab.)',
    type: 'Primary',
    description: 'It is oval-shaped, brown-coloured, with 2.0–2.5 mm long.',
    images: [require('../../images/cigarette_bettle.jpg')],
    characteristics: [
      'It is oval-shaped, brown-coloured, with 2.0–2.5 mm long',
      'The elytra of the beetles are smooth and have very short hairs',
      'The antennae are relatively short, approximately half the length of the body. The fourth to tenth segments of the antennae have a serrated or saw-like appearance',
      'They tuck their head under the protective shield-like structure called the pronotum',
      'The larvae of these beetles are white and have a scarab beetle-like shape'
    ],
    lifeHistory: [
      'The female can lay approximately 100 to 110 eggs loosely on the grain surface',
      'Once hatched, the larvae often consume their own eggshells',
      'Newly emerged larvae are quite active and may either move around on the surface or bore directly into the commodity',
      'Larvae tend to penetrate more deeply into loosely packed commodities compared to tightly packed ones',
      'There are generally four to six larval generations per year',
      'The larval period lasts for about four to five weeks',
      'The pupal stage has a duration of eight to ten days',
      'Adults are strong fliers and are most active in the evening and at night',
      'Adult beetles live for two to four weeks'
    ],
    natureOfDamage: [
      'The larvae are very active and make cylindrical holes into the commodity'
    ],
    hostRange: 'Tobacco (Leaves and cigarettes), turmeric, coriander, wheat flour, cereal bran, peanuts, cocoa beans, cottonseed, spices, meat, fishmeal, ginger and chillies'
  },
  {
    id: 'p4',
    name: 'Lesser Grain Borer',
    scientificName: 'Rhyzopertha dominica (Fab.)',
    type: 'Primary',
    description: 'Adults are small cylindrical shaped with a length of 3 mm and width of 1 mm approximately.',
    images: [require('../../images/RHIZOPERTHA.jpg')],
    characteristics: [
      'Adults are small cylindrical shaped with a length of 3 mm and width of 1 mm approximately',
      'Its colour ranges from brown to black, with a large three-segmented antenna',
      'There is a prominent constriction between prothorax and elytra',
      'One of the most important characteristic features of the lesser grain borer is its head which is deflexed downward to such an extent that it is almost hidden when viewed from above. This gives them a hunched appearance'
    ],
    lifeHistory: [
      'The adult lays eggs either singly or in clusters on the grain surface',
      'A single female can lay approximately 550 eggs during her lifetime',
      'The grubs usually penetrate the grain kernel and continue to grow, pupating after the third instar stage',
      'The complete life cycle takes about 25 days under favourable conditions',
      'The insect feeds primarily on the starchy endosperm portion of the grains',
      'The optimum climatic conditions for its development are 34°C temperature, 70% relative humidity, and a seed moisture content of around 14%',
      'The insect shows a preference for dark and dingy storage environments',
      'In bagged grain storage, infestation is not usually restricted to the periphery, but can spread throughout the storage'
    ],
    natureOfDamage: [
      'The life span of adults is longer; they voraciously feeds on the internal portion of the kernels and reduce them to mere shells',
      'The irregular holes in the package and small piles of messy waste flour and it penetrate inside the package'
    ],
    hostRange: 'Wheat, rice, barley, maize, sorghum, groundnut, dry fruits'
  },
  {
    id: 'p5',
    name: 'Angoumois Grain Moth',
    scientificName: 'Sitrotrega cerealella',
    type: 'Primary',
    description: 'They are typically small and grayish brown in colour moth.',
    images: [require('../../images/angoumois_grain_moth.jpg')],
    characteristics: [
      'They are typically small and grayish brown in colour moth',
      'The wings can expand up to 10–14 mm, and the rear edges of the wings are fringed',
      'Adults fly during nighttime and are attracted to light',
      'It leaves tiny specks when they come in contact with windows and walls'
    ],
    lifeHistory: [
      'A single adult can lay around 100 eggs, depositing them one by one on the surface of the grains',
      'Depending on climatic conditions, the incubation period varies between 4 and 30 days',
      'After hatching, the larva penetrates the internal portion of the grain and begins feeding',
      'The larva is brownish gray in colour, approximately 5 mm long, and bears three pairs of true legs and four pairs of prolegs',
      'The larva passes through four instars, each lasting about six days under conditions of 30°C and 76% relative humidity',
      'At the pupal stage, the insect may undergo hibernation during the winter season',
      'The matured larva spins a cocoon within the grain to complete the pupal stage',
      'On emergence, the adult pushes out of the grain, leaving behind a circular hole with a distinctive flap-like door',
      'In storage structures and granaries, the adult stage is most commonly observed, although it is relatively short-lived'
    ],
    natureOfDamage: [
      'The larva drills into the endosperm portion of the grain, pupate and emerge through the circular hole',
      'The infestation is confined to a 30 cm depth from the top surface'
    ],
    hostRange: 'Paddy, wheat, maize, sorghum, barley and oats'
  },
  {
    id: 'p6',
    name: 'Khapra Beetle',
    scientificName: 'Trogoderma granarium Everts',
    type: 'Primary',
    description: 'The adult is oval, and its size ranges from 1.5 to 3 mm. It is reddish brown in colour.',
    images: [require('../../images/Khapra_beetle_Trogoderma_granarium_Everts_.jpg')],
    characteristics: [
      'The adult is oval, and its size ranges from 1.5 to 3 mm. It is reddish brown in colour',
      'There is no distinct separation of body parts. The abdomen is relatively larger',
      'The entire body is covered with fine hairs',
      'The sexual dimorphism of females is well-developed and comparatively larger than males',
      'The larvae are typically straw-colored with distinct hairy bands on each segment'
    ],
    lifeHistory: [
      'The complete life cycle is finished within 25 days, with four to five generations occurring per year',
      'Breeding activity typically takes place from April to October',
      'From November to March, the insect hibernates in the larval stage',
      'Under starvation, the larvae are capable of reducing their body size, hiding in cracks or crevices, and becomes inactive',
      'Larvae can survive without food for up to one year, making them highly resilient pests',
      'Adult beetles are harmless as they do not feed, never fly, and possess a short lifespan'
    ],
    natureOfDamage: [
      'Larva generally feeds on the germ portion of the grains',
      'The presence of skins of larvae, frass and debris indicates the infestation of grains',
      'Damage is observed on the peripheral layer of the bag and bulk storage'
    ],
    hostRange: 'Sorghum, rice, barley, gram, maize, poppy, pulses, pistachio, walnut and other dried fruits'
  },
  {
    id: 'p7',
    name: 'Drug Store Beetle',
    scientificName: 'Stegobium paniceum (Linn.)',
    type: 'Primary',
    description: 'It is 2.25–3.5mm long, cylindrical in shape and reddish brown in color.',
    images: [require('../../images/Drug_store_beetle_Stegobium_paniceum_Linn..jpg')],
    characteristics: [
      'It is 2.25–3.5mm long, cylindrical in shape and reddish brown in color',
      'The elytra are surrounded by fine hairs longitudinally',
      'Similar to L. serricorne but can be distinguished by its antennae (clubbed antennae, which end in a 3-segmented club)',
      'The elytra are smooth'
    ],
    lifeHistory: [
      'A female lays 75–100 eggs on or near food materials',
      'Eggs hatch within 1–3 weeks, and larvae (creamy white, C-shaped) cause the main damage',
      'Larval stage lasts for 4–20 weeks, after which pupation occurs inside a silken cocoon',
      'The pupal stage takes 1–3 weeks, and it completes its cycle in 40–50 days under warm conditions',
      'There may be 3–6 generations per year depending on the climate and availability of food source',
      'Adults live for 2–4 weeks. They are strong fliers, and are attracted towards light and it doesn\'t feed extensively',
      'The beetle is a cosmopolitan pest that attacks stored grains, spices, dried herbs, pharmaceuticals, and even non-food items like books and leather',
      'Both larvae and adults can bore into packaging materials such as cardboard, foil, and thin metal sheets'
    ],
    natureOfDamage: [
      'Grubs damage the product by boring and making cylindrical holes in the damaged produce'
    ],
    hostRange: 'Stored grains, pulses, spices, dried herbs, pharmaceuticals, animal products, and even non-food items like books and packaging materials'
  },
  {
    id: 'p8',
    name: 'Groundnut Beetle',
    scientificName: 'Caryedon serratus (Olivier)',
    type: 'Primary',
    description: 'Adult size ranges from 3–5 mm long. It is reddish brown in color with scattered, dark, irregular spots on the elytra.',
    images: [require('../../images/Groundnut_beetle_Caryedon_serratus_Olivier.jpg')],
    characteristics: [
      'Adult size ranges from 3–5 mm long. It is reddish brown in color with scattered, dark, irregular spots on the elytra',
      'The prothorax is trapezoidal with soft, fine, dense gray hairs and broader hind legs',
      'The antenna is serrated, 11 segmented and larger in males',
      'In females, the pygidium is projected beyond the elytra',
      'The larvae are whitish with brown heads'
    ],
    lifeHistory: [
      'The adult lays approximately 100-105 eggs at 27°C and 70% relative humidity',
      'The incubation period lasts for 2–5 days, and pupation occurs within 10–22 days',
      'At 45°C and 70% relative humidity, adults survive for only 3–4 days',
      'The survival rate of adults is highly dependent on atmospheric conditions',
      'At lower temperatures (27–30°C) and higher relative humidity (70–90%), the adult life span extends up to 21 days',
      'The life span of female is comparatively longer than males'
    ],
    natureOfDamage: [
      'It infest both peanuts (Arachis hypogaea Linnaeus) and tamarind (Tamarindus indica Linnaeus)',
      'It is the most important noxious stored pest that causes 20% damage to ground nuts',
      'The heat and moisture generated by beetles accelerate mold growth, which results in the development of aflatoxin in groundnuts'
    ],
    hostRange: 'Groundnut pods, tamarind, pulses, and other stored leguminous seeds'
  }
];

export const secondaryInsects: Insect[] = [
  {
    id: 's1',
    name: 'Red Rust Flour Beetle',
    scientificName: 'Tribolium castaneum',
    type: 'Secondary',
    description: 'It is flat and oblong in shape, ranges from 3 to 4 mm and is coloured reddish brown.',
    images: [
      require('../../images/TRIBOLIUM.jpg'),
      require('../../images/TRIBOLIUM_LARVAE.jpg')
    ],
    characteristics: [
      'It is flat and oblong in shape, ranges from 3 to 4 mm and is coloured reddish brown',
      'The eyes are completely notched in Tribolium confusum, whereas in Tribolium castaneum, the eyes are notched partially',
      'T. castaneum has a clear, three-segmented clubbed antenna',
      'T. confusum is found in imported food grains and in hilly regions',
      'The larvae are yellowish-white, cylindrical, with pale brown heads covered with fine hairs'
    ],
    lifeHistory: [
      'Female adults can lay 150 to 300 eggs during their life span, which ranges from five to eight months',
      'Nearly 50% of the eggs are laid within the first four to five weeks',
      'The eggs are white, translucent, and sticky in nature, requiring 5–12 days to hatch',
      'The larvae feed primarily on broken grains and milled products',
      'Adults are most active during the rainy season',
      'The complete life cycle is completed within three to five weeks at 25–27°C and 60–70% relative humidity',
      'Adults are capable of surviving for more than one year and show rapid multiplication during the rainy season',
      'Males remain fertile throughout their life span, while females retain the ability to lay eggs for up to one year'
    ],
    natureOfDamage: [
      'Red flour beetle is considered as a major insects of flour and milled products and a secondary insect to grains',
      'It prefers to feed on the germ portion. It constructs tunnels when moved through flour',
      'It also releases gaseous quinines (producing an acid odor) during a high infestation, which turns the flour unfit for consumption'
    ],
    hostRange: 'Wheat flour, dry fruits, pulses and prepared cereal foods'
  },
  {
    id: 's2',
    name: 'Saw Toothed Grain Beetle',
    scientificName: 'Oryzaephilus surinamensis',
    type: 'Secondary',
    description: 'Adults are dark brown in colour with 2.5 mm length. Six saw teeth-like projections on each side of the thorax is seen.',
    images: [require('../../images/Saw_toothed_grain_beetle_Oryzaephilus_surinamensis_.jpg')],
    characteristics: [
      'Adults are dark brown in colour with 2.5 mm length',
      'Six saw teeth-like projections on each side of the thorax is seen',
      'Males can be differentiated from females with the presence of a tooth on the femur of the hind leg',
      'The abdomen is completely covered by the elytra'
    ],
    lifeHistory: [
      'A female lays about 375 eggs, either freely or in crevices',
      'Eggs hatch within 3–5 days',
      'The larval period lasts for 12–15 days; freshly emerged larvae are flattened and light yellow in color',
      'The larva builds a silky web with viscous secretions and food particles to pupate',
      'The complete life cycle is completed within three weeks at 30°C and 75% relative humidity',
      'In general, the insect can survive for more than seven months',
      'Adults may live for up to three years and can undergo eight generations during this period',
      'Adults are winged but rarely fly and tend to migrate from the commodity, making eradication difficult'
    ],
    natureOfDamage: [
      'The grains become rough and uneven due to severe damage caused by adults and larvae',
      'Insect debris and secretions generate unpleasant odors in stored grains'
    ],
    hostRange: 'Rice, wheat, maize, cereal products, oil seeds, cocoa beans, dry fruits etc.'
  },
  {
    id: 's3',
    name: 'Rice Moth',
    scientificName: 'Corcyra cephalonica (Staint.)',
    type: 'Secondary',
    description: 'Adults are gray colored, 12 mm length at rest with 15 mm wingspan.',
    images: [
      require('../../images/Rice_moth_Corcyra_cephalonica_Staint._.jpg')
    ],
    characteristics: [
      'Adults are gray colored, 12 mm length at rest with 15 mm wingspan',
      'Projected tuft of scale present in the head',
      'Dark veins present in the forewings and hind wings are translucent'
    ],
    lifeHistory: [
      'Eggs are small, oval, whitish, and incubate for 3–5 days',
      'Newly emerged larvae actively feeds on broken grains',
      'A fully matured larva can reach up to 12 mm size and forms dense webbing',
      'The larval period lasts 10–15 days, after which pupation occurs',
      'Pupation lasts about 10 days',
      'Adults have a short life span of 7–14 days',
      'The complete life cycle is finished in 28–35 days at 23–32°C and 75% relative humidity',
      'The insect is nocturnal in nature',
      'Infestation usually occurs in the peripheral region of stored commodities'
    ],
    natureOfDamage: [
      'It attacks especially rice and is commonly present in flour mills',
      'Larva causes severe damage to the grains',
      'The rice quality is reduced by larval debris, feeding behaviour and webbing'
    ],
    hostRange: 'Rice, wheat, maize, sorghum, groundnut, cocoa, coffee, dried fruits, and oilseeds'
  },
  {
    id: 's4',
    name: 'Flat Grain Beetle',
    scientificName: 'Cryptolestes pusillus',
    type: 'Secondary',
    description: 'It is flat, reddish brown in colour, and its size ranges from 1.5 to 2 mm long. So, it is considered the smallest one among stored pests.',
    images: [require('../../images/Flat_grain_beetle_Cryptolestes_pusillus_.jpg')],
    characteristics: [
      'It is flat, reddish brown in colour, and its size ranges from 1.5 to 2 mm long. So, it is considered the smallest one among stored pests',
      'A long, thin, hair-like antenna is located at the head',
      'A fine longitudinal line is present on both sides of the neck',
      'Larva is white and grows up to 3 mm long'
    ],
    lifeHistory: [
      'Eggs are laid freely in flour, grains, and cracks',
      'The incubation period is about 5 days, after which yellowish-white larvae (0.7 mm long) emerges',
      'The complete life cycle from egg to adult takes about 6 weeks at 28°C and 70% relative humidity, but it may extend to 9 weeks during summer',
      'Adults have an average lifespan of 6–12 months',
      'The insect is more tolerant to cold climates compared to many other stored grain pests'
    ],
    natureOfDamage: [
      'Both larvae and adults feed on broken kernels and milled products',
      'High infestation and enormous feeding behavior of larvae lead to heat generation and an increase in moisture content',
      'This results in mold growth, and stored grains become unfit for consumption'
    ],
    hostRange: 'Cereals, flour, oilseeds, nuts, dried fruits, spices, and processed food products'
  },
  {
    id: 's5',
    name: 'Indian Meal Moth',
    scientificName: 'Plodia interpunctella (Hubner)',
    type: 'Secondary',
    description: 'The wingspan of adults is 8-15mm long. The forewing is dual coloured with silver white and reddish brown.',
    images: [require('../../images/Indian_meal_moth_Plodia_interpuctella_Hubner.jpg')],
    characteristics: [
      'The wingspan of adults is 8-15mm long',
      'The forewing is dual coloured with silver white and reddish brown',
      'It has long hind wings with silky fringes',
      'The antenna is two-thirds of body size when at rest'
    ],
    lifeHistory: [
      'A female moth may lay 100–365 eggs, with an incubation period of 2–14 days',
      'Eggs are grayish white, spherical, and less than 1 mm in diameter',
      'Newly emerged larvae begin feeding immediately and can enter packaging materials through cracks and holes',
      'Matured larvae may grow up to 13 mm in length',
      'The larval stage lasts 4–5 weeks, followed by a pupal period of about 10 days',
      'The full development cycle can be completed in 26 days at 20°C and 70% relative humidity'
    ],
    natureOfDamage: [
      'The feeding and webbing behavior of larvae causes intense damage to the grains',
      'Adults fly from infested grain to other commodities, which results in cross-contamination'
    ],
    hostRange: 'Cereals, pulses, nuts, dried fruits, oilseeds, spices, cocoa, chocolate, and packaged foods'
  }
];

export const sourcesOfInfestation = [
  {
    id: 'soi1',
    title: 'Field Infestation',
    description: 'Insects present in grains at the time of harvest. Common with primary pests that can develop in standing crops.',
  },
  {
    id: 'soi2',
    title: 'Storage Structures',
    description: 'Residual populations from previous storage cycles. Insects hiding in cracks, crevices, and grain residues.',
  },
  {
    id: 'soi3',
    title: 'Transportation',
    description: 'Contaminated vehicles, ships, containers, or railway wagons used for transporting grains.',
  },
  {
    id: 'soi4',
    title: 'Processing Equipment',
    description: 'Mills, conveyors, elevators, and other equipment harboring insect populations.',
  },
  {
    id: 'soi5',
    title: 'Packaging Materials',
    description: 'Infested bags, containers, or packaging materials brought from external sources.',
  },
  {
    id: 'soi6',
    title: 'Cross-Contamination',
    description: 'Migration from nearby infested storage facilities or agricultural areas.',
  },
  {
    id: 'soi7',
    title: 'Poor Sanitation',
    description: 'Accumulated grain dust, spillage, and debris providing breeding sites for insects.',
  },
];

export const detectionMethods = [
  {
    id: 'dm1',
    title: 'Visual Inspection',
    description: 'Regular examination of grain samples for presence of live insects, damaged kernels, and insect debris. Check surfaces, walls, and equipment.',
  },
  {
    id: 'dm2',
    title: 'Grain Sampling',
    description: 'Systematic collection of grain samples from different depths and locations. Use standard sieves to separate insects from grain.',
  },
  {
    id: 'dm3',
    title: 'Temperature Monitoring',
    description: 'Use temperature probes to detect hot spots in grain mass. Localized heating often indicates insect activity.',
  },
  {
    id: 'dm4',
    title: 'Pheromone Traps',
    description: 'Install species-specific traps that attract insects using synthetic pheromones. Useful for early detection and monitoring.',
  },
  {
    id: 'dm5',
    title: 'Pitfall Traps',
    description: 'Simple traps placed in storage areas to catch crawling insects. Helpful for detecting secondary pests.',
  },
  {
    id: 'dm6',
    title: 'Moisture Assessment',
    description: 'Monitor grain moisture levels. High moisture promotes insect development and mold growth.',
  },
  {
    id: 'dm7',
    title: 'Sensory Detection',
    description: 'Check for unusual odors (musty, sweet) indicating insect infestation or mold. Look for webbing and clumping.',
  },
  {
    id: 'dm8',
    title: 'Electronic Monitoring',
    description: 'Use acoustic sensors or other electronic devices to detect insect movement inside grain masses.',
  },
];
