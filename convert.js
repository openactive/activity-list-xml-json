const XmlReader = require('xml-reader');
 
const reader = XmlReader.create({stream: true, emitTopLevelOnly: true});
const xml =
`
<?xml version="1.0"?>

 <body>
    <outline text="American Football" _note="9caeb442-2834-4859-b660-9172ed61ee71 | american_football | American Football is a team sport where the objective is to score points by advancing the ball into the opposing team's end zone by running with it or throwing it to a teammate.">
      <outline text="Flag Football" _note="a4375402-067d-4549-9d3a-8c1e998350a1 | flag_football | Flag is the fastest growing format of the game in Great Britain, encompassing schools, colleges, universities and in the community." />
    </outline>
    <outline text="Angling" _note="72d19892-5f55-4e9c-87b0-a5433baa49c8 | angling | Angling is the sport of catching fish with a rod, line, and hook. | altLabel:Fishing" />
    <outline text="Aquathon" _note="f440805a-0364-48a8-b722-deb418a87d89 | aquathon | " />
    <outline text="Archery" _note="343f01cb-a2e8-48e8-9c0f-dcc7fbaf7ce4 | archery | Archery involves using a bow and arrow to hit a stationary target. Points are then scored based on the position the arrow lands on the target." />
    <outline text="Arm Wrestling" _note="d18b2d90-e6aa-4fb1-a5f0-2094b1328a0c | arm_wrestling | " />
    <outline text="Athletics" _note="4d280e1b-a370-4582-ab4d-442b2eeaf5d4 | athletics | Athletics is a collection of track and field events that involve running, jumping and throwing.">
      <outline text="Discus Throw" _note="31ff0671-ac82-438c-881f-ba52b9e5e91a | discus_throw | Throwing athletics track and field event." />
      <outline text="Hammer Throw" _note="e0b45fa9-5576-414c-9fa7-bcf44a119253 | hammer_throw | Hammer throw is a modern day Olympic track and field event where athletes hurl a steel ball attached to a wire." />
      <outline text="High Jump" _note="7c9fced1-df85-465f-92cb-205e31659929 | high_jump | High jump is an athletic track and field event" />
      <outline text="Javelin Throw" _note="a11a67ba-65e3-4b45-839a-0e1e4013b966 | javelin_throw | Javelin is the athletic sport of throwing a metal spear as far as possible." />
      <outline text="Long Jump" _note="52aa05ed-b23f-4bad-b443-b8af1baa0725 | long_jump | Long jump (historically called the broad jump) is a track and field event in which athletes combine speed, strength, and agility in an attempt to leap as far as possible from a take off point." />
      <outline text="Pole Vault" _note="5df80216-2af8-4ad3-8120-a34c11ea1a87 | pole_vault | Pole vaulting is a track and field event in which the athlete uses a long, flexible pole as an aid to jump over a bar." />
      <outline text="Shot Put" _note="b807b6e2-fedf-4682-bef4-dddd5e711a51 | shot_put | Shot Put is an athletic discipline that involves 'putting' a spherical weight as far as possible." />
      <outline text="Track and Field" _note="91dbf631-5071-43d2-b49d-3cecf2a40f5c | track_and_field | " />
    </outline>
    <outline text="Australian Rules Football" _note="55877996-733a-4d9b-ad7d-79f07dcb56f9 | australian_rules_football | " />
    <outline text="Badminton" _note="c0360db0-a817-4bae-9167-40f89b49fc9e | badminton | Badminton is a racket sport that involves hitting a shuttlecock over a net on indoor courts. Points are scored when the opponent is unable to return the shuttlecock before it hits the floor.">
      <outline text="Outdoor Badminton" _note="fb712db6-6d9c-4fc8-b4d8-6058cd0fc340 | outdoor_badminton | Badminton is a racket sport that involves hitting a shuttlecock over a net on indoor courts. Points are scored when the opponent is unable to return the shuttlecock before it hits the floor." />
      <outline text="Para-Badminton" _note="e1231699-4b6b-424c-ab84-4c7706f3dfff | parabadminton | " />
    </outline>
    <outline text="Ballooning" _note="85ac8e6d-4241-46fb-9ea2-4417567a852c | ballooning | " />
    <outline text="Baseball" _note="ab4a33f2-dc13-4f7f-afa4-a3184dc00eab | baseball | Baseball is played by two teams of nine players each. The teams take turns batting and fielding. The batting team is called the offensive team and the fielding team is called the defensive team." />
    <outline text="Basketball" _note="e09776e6-f1b4-421b-b667-5c5913cf97aa | basketball | Basketball is a game played by two teams of usually five players each on a rectangular court having a raised basket or goal at each end, points being scored by tossing the ball through the opponent's basket.">
      <outline text="Deaf Basketball" _note="37047196-6521-4f6e-ae8f-b97956ad9af8 | deaf_basketball | Deaf basketball is basketball played by individuals with hearing impairments. Sign language is used to communicate whistle blows and communication between players." />
      <outline text="Inclusive Zone Basketball" _note="66be9946-88f5-4889-bb6b-46dbef833f6d | inclusive_zone_basketball | " />
      <outline text="Walking Basketball" _note="491f00db-e058-43a3-afb7-d352d3dd5b5e | walking_basketball | Walking Basketball provides low impact, cardio exercise, incorporating constant brisk walking. It improves fitness, and is mentally challenging. Playing as part of a team, it brings a sense of camaraderie which is fun and rewarding." />
      <outline text="Wheelchair Basketball" _note="bd661e66-7781-4934-90f4-8655d07eebd7 | wheelchair_basketball | Wheelchair basketball retains most major rules and scoring of basketball, and maintains a 10-foot basketball hoop and standard basketball court." />
    </outline>
    <outline text="Baton Twirling" _note="6321f3aa-e54b-4f87-98be-56b1f57819a2 | baton_twirling | Baton Twirling involves performing with a baton to music." />
    <outline text="Biathlon" _note="ab39e693-0dc7-485f-93e0-480c7ac838bc | biathlon | Biathlon takes place in winter combining cross-country skiing and rifle shooting." />
    <outline text="Bicycle Polo" _note="7d028d22-a6e7-45dd-a4b0-53e9199ef668 | bicycle_polo | " />
    <outline text="Billiards" _note="c4661096-04c3-41de-b8d2-00788dd53023 | billiards | " />
    <outline text="Bobsleigh" _note="fa83a907-c08e-46d0-949b-a9fb43057378 | bobsleigh | Bobsleigh involves teams of 2 or 4 people steering a sled down a ice track as quickly as possible." />
    <outline text="Boccia" _note="611363c5-8acf-4eeb-aeba-c33e9c70146e | boccia | The aim of the game is to throw leather balls - coloured red or blue as close as you can to a white target ball, or jack." />
    <outline text="Bowls" _note="b885f4f6-2242-4d11-9466-065d60402624 | bowls | Played outdoors on a flat square of grass, or indoors on an artificial surface, bowls involves throwing/rolling a ball to end up as close to a target as possible.">
      <outline text="Boules" _note="5574585d-3f21-493c-8860-54077f7e9bb2 | boules | " />
      <outline text="Carpet Bowls" _note="46f94a25-a024-4b0a-be2f-3aef1dfea5ec | carpet_bowls | " />
      <outline text="Crown Green Bowls" _note="7e3d7efd-d2da-4d42-86e6-4466a3062ceb | crown_green_bowls | " />
      <outline text="Deck Bowls" _note="e2d7a898-09a9-4342-8ea8-0446936682bf | deck_bowls | " />
      <outline text="Flat Green Bowls" _note="d0796a7e-9ed9-4b45-921d-6b0a20780c27 | flat_green_bowls | " />
      <outline text="Short Mat Bowls" _note="3f0def6f-600f-43d2-b86b-d4114231d50a | short_mat_bowls | " />
    </outline>
    <outline text="Boxing" _note="d4417bb3-383f-489b-b0c7-731b82f3b220 | boxing | Boxing is fast, technical and requires very high levels of fitness. Scoring is based around technique with bouts decided by judges and the result is based on the number of punches that land in a 'target area'. | related:boxing_fitness">
      <outline text="Chess-Boxing" _note="2ef0ae95-61e2-4beb-9eda-e96f126878de | chessboxing | Chess boxing is a hybrid sport which involves alternating rounds of boxing and chess" />
    </outline>
    <outline text="Camogie" _note="da9093e5-3290-4eb4-b77f-5008ad00986e | camogie | " />
    <outline text="Canoeing" _note="e0425262-6f1d-4c58-ba8a-dd790c5351b1 | canoeing | Canoeing involves using a paddle to move across the water in a narrow vessel.">
      <outline text="Canoe Polo" _note="cb174be9-744b-46ff-b5b8-623257590b0d | canoe_polo | Canoe Polo combines paddling and ball handling skills with an exciting contact team game." />
    </outline>
    <outline text="Caving" _note="a27fa5f2-1283-44dd-aed6-613476d3a0fa | caving | Caving is the recreational pastime of exploring cave systems" />
    <outline text="Cheerleading" _note="0141d752-088f-4bab-99fa-9a3d61ee5cf9 | cheerleading | Competitive cheerleading involves squads of cheerleaders competing against each other by performing routines to music that include stunts, jumps and tumbles.   | related:cheer_fitness">
      <outline text="Cheer Dance" _note="9e44e734-eb79-4522-a32a-e295a99b74aa | cheer_dance | " />
      <outline text="Street Cheer" _note="a8258191-c95e-4c7b-8ccb-2272bf6278a8 | street_cheer | " />
    </outline>
    <outline text="Climbing" _note="d09970bc-e11c-40cc-a594-38e4ff32d611 | climbing | ">
      <outline text="Abseiling" _note="b3d9964a-3a8f-4ac0-a96c-322eeb462ef6 | abseiling | Abseiling is a technique used in climbing to allow safe descent of steep terrain." />
      <outline text="Bouldering" _note="ef33414f-b228-4b65-b5e1-329c0215490d | bouldering | " />
      <outline text="Lead Climbing" _note="e3f7b1de-71f1-4e2c-aa41-9ca109f563ca | lead_climbing | " />
      <outline text="Rock Climbing" _note="ae0fdf39-41c2-492a-9a69-2853914d0413 | rock_climbing | Sport Rock Climbing involves climbing a rock using fixed protection that is already inplace as they ascend. " />
      <outline text="Top Rope Climbing" _note="4acb955c-4084-4588-bbd1-64afe1cace6f | top_rope_climbing | " />
    </outline>
    <outline text="Cricket" _note="77e3f8fa-c8b3-4e4e-bf1a-ff4b914bb6ec | cricket | The aim of the batting team is to score as many 'runs' as possible - running between the wickets, exchanging ends with a second batsman (the non-striker), who has been waiting near the bowler's wicket.">
      <outline text="Cricket nets" _note="ebfabffe-1218-4c7f-a9d5-a6adf37dd503 | cricket_nets | " />
      <outline text="Kwik Cricket" _note="958ebad8-c24b-4742-8c19-0a6fce9a8dc8 | kwik_cricket | Kwik Cricket aims to provide children of all levels of ability and experience with an opportunity to regularly participate in a fun, introduction to cricket and to encourage fair play by all. The format is suitable for all ages but is mostly suitable for players under the age of 11." />
      <outline text="Long Form Cricket" _note="b8efe801-b826-4119-b8b2-40d6a4811474 | long_form_cricket | e.g. 40-50 Overs" />
      <outline text="Practice nets" _note="089fe8a7-7af3-4420-a361-88acb57fc95c | practice_nets | " />
      <outline text="Short Form Cricket" _note="efb69c57-7410-4987-9303-6161db093405 | short_form_cricket | e.g. 20:20" />
      <outline text="Table Cricket" _note="f4c54ee8-d572-4b09-a82b-0be2c1ff4745 | table_cricket | Table Cricket is a game for everyone to play and enjoy – young or old, disabled and non-disabled – and is a great way to teach the basic rules of cricket, all on a table top." />
    </outline>
    <outline text="Croquet" _note="8cba755c-5b62-4e79-b9f2-4f0cb5248f74 | croquet | Croquet is an ideal way to spend a summer's afternoon." />
    <outline text="Crossfit" _note="853eab30-5812-44a8-8996-9e9e107bc4f9 | crossfit | CrossFit is a strength and conditioning program consisting mainly of a mix of aerobic exercise, gymnastics (body weight exercises), and Olympic weight lifting." />
    <outline text="Curling" _note="e0fced38-3d72-48bb-b203-05e75d4df55e | curling | Curling is a sport in which players slide stones across ice towards a circular target area.">
      <outline text="Kurling" _note="59dac22d-b698-4a6a-80ef-41cd16b22716 | kurling | New Age Kurling is a form of the original curling game, but adapted so that it can be played indoors on any smooth, flat surface, such as a sports hall, rather than on ice." />
    </outline>
    <outline text="Cycling" _note="4a19873e-118e-43f4-b86e-05acba8fb1de | cycling | Cycling is a great sport, loved by millions around the world.">
      <outline text="Bmx Racing" _note="d30c3317-7562-4be6-8e31-b82434fd6690 | bmx_racing | BMX racing is a type of off-road bicycle racing." />
      <outline text="Commuter Cycling" _note="caf9d732-a551-48c3-8cda-ce6c9c27b906 | commuter_cycling | " />
      <outline text="Cyclo-Cross" _note="36353bac-315d-4b88-bcf3-3696c6f3b164 | cyclocross | " />
      <outline text="Handcycling" _note="2d8eba85-af3d-4d8a-b92f-030d15b4885c | handcycling | Handcycling involves cycling using the arms opposed to the legs." />
      <outline text="Racing" _note="7a0af13b-23da-4ff1-9862-3734f3f55289 | racing | " />
      <outline text="Road Cycling" _note="2a41c553-84be-4970-b3d0-42f9ef6bd9a4 | road_cycling | " />
      <outline text="Track Cycling" _note="3428ded3-04ea-405d-88da-3bf2933ef66a | track_cycling | " />
    </outline>
    <outline text="Dance" _note="6ca15167-51da-4d91-a1ae-8a45dc47b0ea | dance | Dance is an art form that generally refers to movement of the body, usually rhythmic and to music, used as a form of expression, social interaction or presented in a spiritual or performance setting. | related:dance_fitness">
      <outline text="Aerial" _note="d768ed4a-6235-41d6-8dea-58466b31d913 | aerial | ">
        <outline text="Aerial Discipline" _note="b0eb3e2b-8297-4d86-96f2-e07b725b2fe4 | aerial_discipline | Aerial discipline is a collections of aerial activities which include the use of vertical rope, silks tissu, straps, static trapeze and hoop." />
        <outline text="Aerial Hoop" _note="54bcc6f1-3b57-4ad8-a21c-7034cfe66e5c | aerial_hoop | " />
      </outline>
      <outline text="African Dance" _note="560624c2-d64c-462a-acc3-0e6d551069e7 | african_dance | " />
      <outline text="Azonto" _note="ed8ad685-cd60-41d1-acd9-68a11f0f3c7b | azonto |  | related:azonto_fitness" />
      <outline text="Bachata" _note="dd7732b4-cc31-4d75-8562-f973f280f518 | bachata | " />
      <outline text="Ballet" _note="1ae7395a-27a7-4e33-9f6d-a1a6c17d0757 | ballet | Ballet is a classical dance form characterized by grace and precision of movement and by elaborate formal gestures, steps, and poses. | related:ballet_fitness" />
      <outline text="Ballroom And Latin" _note="40c3a315-1401-4c31-a5c1-994c59a98469 | ballroom_and_latin | Ballroom dancing is a couples dance where couples move to the music using step-patterns and rhythms that match the character of a given song. | related:ballroom_and_latin_fitness">
        <outline text="American Smooth" _note="51e011a6-7e06-45c5-8ad9-ceaccc9ad1e4 | american_smooth | " />
        <outline text="Argentine Tango" _note="aaffbbb4-1af5-4111-8677-2a2b464bbf48 | argentine_tango | " />
        <outline text="Ceroc" _note="bfb734f6-52a6-4751-940b-fd1ddced39ab | ceroc | " />
        <outline text="Charleston" _note="18ccf049-3c7d-46a5-b2ea-c6ce5a6e520f | charleston | " />
        <outline text="Foxtrot" _note="4547052c-b656-4710-b6fc-9ecf9831ff0f | foxtrot | " />
        <outline text="Latin" _note="516c71ac-829e-40cf-82f9-fafa8f30f856 | latin | Latin dancing consists of five dances: the Rumba, Cha Cha, Samba, Paso Doble' and the Jive.">
          <outline text="Cha-Cha-Cha" _note="1f688be3-434c-4d91-9f5a-6ce45824f018 | chachacha | " />
          <outline text="Jive" _note="2aee03d2-800a-4c49-bf41-7a8d5dc0a1f4 | jive | " />
          <outline text="Pasa Doble" _note="7619ce32-24ad-46e4-97fd-897b833ab7d8 | pasa_doble | " />
          <outline text="Rumba" _note="ce759794-142e-43b8-8136-72bcbee1892e | rumba | " />
          <outline text="Samba" _note="d9fa56b8-960a-4eac-b932-c6277106e174 | samba | " />
        </outline>
        <outline text="Lindy Hop" _note="e5ab8ce2-ee98-493e-aab7-28b6b8545c38 | lindy_hop | " />
        <outline text="Merengue" _note="af66a0a0-4d1f-41a0-b6f3-4913cfb305c1 | merengue | " />
        <outline text="Polka" _note="2801bb07-9364-4309-baef-00b9e1a526ad | polka | " />
        <outline text="Quick Step" _note="4a48d4f4-23b5-495c-9f1d-f8c5d0ee766a | quick_step | " />
        <outline text="Swing" _note="2667bc56-f0a1-4a43-8e93-d68400022c51 | swing | " />
        <outline text="Swing Train" _note="718dd868-54ad-4626-bb51-cf15019f62fc | swing_train | " />
        <outline text="Tango" _note="3492077c-f460-46e9-a6e7-5cb2384a0345 | tango | " />
        <outline text="Viennese Waltz" _note="2b83c71b-436c-4f14-92db-9ad9d9d38c6f | viennese_waltz | " />
        <outline text="Waltz" _note="001fbbe6-757f-4186-9e9f-2f180ca5a4a6 | waltz | " />
      </outline>
      <outline text="Belly Dance" _note="24c7442b-19de-4cc5-90bf-91e943ebe81c | belly_dance | Belly dancing is originally a solo, improvised dance involving torso articulation. | related:bellydance_fitness" />
      <outline text="Bhangra" _note="a9c4bd7d-a31c-4dee-bfe6-ca823b2e5bff | bhangra |  | related:bhangra_fitness" />
      <outline text="Bollywood" _note="0969ddf0-16fa-4ea1-a4f8-d2aeefb46900 | bollywood |  | related:bollywood_fitness">
        <outline text="Bollywood Bhangra" _note="584c51fa-2485-4c01-b9c1-791a9c4d7c06 | bollywood_bhangra | " />
      </outline>
      <outline text="Burlesque" _note="6b0bb823-e720-4934-9a28-150523eefd54 | burlesque |   | related:burlesque_dance_fitness">
        <outline text="Burlesque Chair Dance" _note="89270ae0-9e0e-47af-97fa-8975d706701d | burlesque_chair_dance | " />
      </outline>
      <outline text="Capoeira" _note="8662c76c-b73e-4429-af33-90a122064cf6 | capoeira | Capoeira is a Brazilian martial art that combines elements of dance, acrobatics and music." />
      <outline text="Chakra Dance" _note="b38f9ea7-87db-40fc-b86f-eb1a8e71dc7c | chakra_dance |" />
      <outline text="Chinese Movement &amp;amp; Dance" _note="51555787-12cd-4b09-b1c7-e03415c47a4c | chinese_movement_dance |  | related:chinese_movement__dance_fitness |">
        <outline text="Chi Kung" _note="bb2598e9-9b4f-49e1-8463-c6e1312b36b4 | chi_kung |" />
      </outline>
      <outline text="Carnival" _note="7ad8b8bf-ccc1-4346-8445-c930ff50272f | carnival | " />
      <outline text="Contemporary" _note="19254731-5f47-4ec4-a137-6993a1af9c33 | contemporary | " />
      <outline text="Country And Western" _note="1375887d-41f3-442d-a9b0-847512d060a1 | country_and_western |  | related:country_and_western_fitness">
        <outline text="Line Dancing" _note="2998a4ad-e206-4cf8-9f9d-8a36faa0bc88 | line_dancing | " />
      </outline>
      <outline _complete="true" text="Cultural Dances" _note="60021392-7242-413d-b842-cc79298d7268 | cultural_dances | " />
      <outline _complete="true" text="Dance Sport" _note="b1a6bc86-c7b7-4d94-aaaa-28b22678ca21 | dance_sport | " />
      <outline text="Diddi Dance" _note="7cc3c73b-0756-4646-afbc-20f34f15f9ae | diddi_dance | " />
      <outline text="Disco" _note="f12daba1-d1e4-49a5-831c-89d83c0cb1f4 | disco | " />
      <outline text="Flamenco" _note="07ba80dd-a7b6-4d4d-96e6-48aef4643a9a | flamenco | Flamenco dance is a Spanish dance form characterised by hand clapping, percussive footwork, and intricate hand, arm and body movements." />
      <outline text="Folk Dance" _note="34cabe03-72b3-4539-ac52-e69a52393330 | folk_dance | ">
        <outline text="Morris Dancing" _note="7c23c208-a4da-42c5-a382-5bea008acd75 | morris_dancing | " />
      </outline>
      <outline text="Funk" _note="2679770b-f86d-40b5-82a9-59fb6b764d1f | funk | " />
      <outline text="Greek Dancing" _note="e158efb1-d57d-40f7-8b1e-9320bcc0868a | greek_dancing | " />
      <outline text="Horton Technique" _note="52c0e52d-ac08-45f4-9327-18b6863a961c | horton_technique | " />
      <outline text="Irish Dancing" _note="0b254ccb-26bb-457c-ae68-ad6cb40b17ea | irish_dancing | " />
      <outline text="Jazz" _note="d3bdf357-14dc-4da1-af67-9c057eb2bd7a | jazz |  | related:jazz_fitness" />
      <outline text="Jumpstyle" _note="bfab0fb7-85c3-4440-9e34-d4045b832aad | jumpstyle | " />
      <outline text="Kathak" _note="4440651f-a659-45ac-a28e-d68d3bae438f | kathak | " />
      <outline text="Lyrical" _note="75bab9e3-a229-4125-a62f-552a4304b357 | lyrical | " />
      <outline text="Majorettes" _note="8a8354d9-8055-4830-ac4c-0997ca86dd51 | majorettes | " />
      <outline text="Mambo" _note="b1b89ce8-9330-4bbb-b11d-104fc20014f9 | mambo | " />
      <outline text="Modern" _note="481b8c41-ee0b-4665-8e15-c970c1f55ec8 | modern | " />
      <outline text="Multi Dance" _note="991c8551-b3ed-4e96-8732-1bd0d05c1257 | multi_dance | " />
      <outline text="Para Dance" _note="b11ad9ab-e737-4342-9033-7ca4398d4a3a | para_dance | ">
        <outline text="Combi Dance Sport" _note="05fe1f0c-71aa-4ae3-91db-e0edd9a34b06 | combi_dance_sport | " />
        <outline text="Wheelchair Ballroom Dancing" _note="8f59fab3-ea66-401b-8e5b-4fdeab28e668 | wheelchair_ballroom_dancing | " />
        <outline text="Wheelchair Dance Sport" _note="376ac090-f1ba-49d6-87f5-e2640494798a | wheelchair_dance_sport | Wheelchair dance sport is a sport which involves athletes with a physical impairment that affects the lower limbs." />
      </outline>
      <outline text="Pole Dancing" _note="64506a93-7c5c-4c82-81fa-301b69644fb6 | pole_dancing |  | related:pole_fitness" />
      <outline text="Rock and Roll" _note="46430d83-7f1a-4970-9788-860687b39df2 | rock_and_roll | " />
      <outline text="Salsa" _note="a454c7e6-52da-426d-9bd1-743e9d7d266d | salsa | Latin American style of dance with Cuban origins. | related:salsa_fitness">
        <outline text="Pachanga" _note="b3829f3e-a63e-455f-a51c-1f50ecf85ad5 | pachanga | " />
      </outline>
      <outline text="Scottish Dance" _note="906f392c-1f51-4ef3-83dd-99b387d5aa84 | scottish_dance |  | related:scottish_dance_fitness" />
      <outline text="Sequence Dancing" _note="1ab24764-c02e-4a0e-a96e-7c25894b39c8 | sequence_dancing | " />
      <outline text="Square Dancing" _note="f5cad176-efcd-495a-b249-03c9027ab368 | square_dancing | " />
      <outline text="Street Dance" _note="85ddf0e4-115d-4c0b-9bca-4c3b4b635bb2 | street_dance |  | related:street_dance_fitness">
        <outline text="Be-Bop" _note="6111dd77-6ee6-41cc-87f7-d21aa7406b33 | bebop | " />
        <outline text="Break Dance" _note="6e5bbb26-4aa1-4ab7-947b-fa58687ab374 | break_dance | " />
        <outline text="Commercial" _note="8f39e848-ec7d-4472-b10e-d929060a0467 | commercial | " />
        <outline text="Dancehall" _note="bc18a355-c6af-4801-b673-053af9aa0422 | dancehall | " />
        <outline text="Freestyle" _note="e00f8c2f-092b-4dd3-ac1e-573c2c04d3db | freestyle | " />
        <outline text="Hip Hop" _note="19f95881-d3e2-4d65-87aa-8362bebdb024 | hip_hop | " />
        <outline text="House" _note="3a1c30fc-c02a-4632-b6bc-aaedb73e1582 | house | " />
        <outline text="Krump" _note="d1868552-5254-4b14-9204-d8bf24e4e403 | krump | " />
        <outline text="Locking" _note="be59cf38-0a17-4dbf-9127-0445244b36fe | locking | " />
        <outline text="Melbourne Shuffle" _note="ae6106d9-b882-4651-8cf8-f041466f3da5 | melbourne_shuffle | " />
        <outline text="Popping" _note="154d3567-7203-4977-b946-d3708a268590 | popping | " />
        <outline text="Street Cheer" _note="a8258191-c95e-4c7b-8ccb-2272bf6278a8 | street_cheer | " />
        <outline text="Urban" _note="24ad6d76-f62b-49c6-b11b-2f7cf02a65d3 | urban | " />
        <outline text="Voguing" _note="304ffd59-4389-4c7b-bcab-90f9dad8aaf5 | voguing | " />
        <outline text="Waacking" _note="01f250d7-0a49-448e-a872-b3d51fe266c9 | waacking | " />
      </outline>
      <outline _complete="true" text="Street Dance Hip Hop" _note="b57b7cc8-3bf1-44a0-8cf6-3befb6b345e7 | street_dance_hip_hop | " />
      <outline text="Tap" _note="a3245596-9505-4b4e-ac9e-db1b5e6732fb | tap | Tap dancing is a form of dance characterised by the sounds of tap shoes striking the floor as a form of percussion. | related:tap_fitness" />
    </outline>
    <outline text="Darts" _note="b008b1d5-9019-463e-9941-74bb34a9edfa | darts | " />
    <outline text="Diving" _note="aafbe00d-e03e-4e5d-9612-c53c8b332d94 | diving | Diving is a sport where the diver jumps into a pool from a platform or springboard at a range of heights.">
      <outline text="Platform Diving" _note="9cd1a9a0-0582-4166-bb69-d8f568f86e89 | platform_diving | " />
    </outline>
    <outline text="Dodgeball" _note="f38d52ca-3c19-4194-b115-1261b3491d44 | dodgeball | Dodgeball is a game in which players try to hit other players on the opposing team with balls while avoiding being hit themselves." />
    <outline text="Dragon Boat Racing" _note="578efdf0-b09f-4035-88d8-a17db31e5d6e | dragon_boat_racing | " />
    <outline text="Equestrian" _note="45a372d9-baca-4f6c-859f-04de3efae742 | equestrian | Horse riding, or equestrian sport, refers to the skill of training and riding horses. | altLabel:Horse Riding">
      <outline text="Dressage" _note="c07a722b-cf04-4942-84b9-df5e41de6d19 | dressage | Dressage is a competitive equestrian sport" />
      <outline text="Eventing" _note="80f89d89-ec8f-4f2a-95a9-ad1059a9ba4e | eventing | Eventing combines the three elements of Dressage, Show Jumping and Cross Country." />
      <outline text="Hacking" _note="a0014119-71aa-429a-b6ae-44d36f39dec7 | hacking | " />
      <outline text="Harness Racing" _note="87e79d1d-3a80-4d8b-9d37-67d3e45b6a8e | harness_racing | " />
      <outline text="Horse Racing" _note="69178f7f-d8fb-447d-934e-50fffddfbd1f | horse_racing | " />
      <outline text="Polocrosse" _note="b6dfca91-022a-4880-aec8-47962e077a1f | polocrosse | " />
      <outline text="Pony Trekking" _note="15c92817-bb3b-4734-82ef-de09b8d33ca2 | pony_trekking | Riding on a pony through the countryside" />
      <outline text="Schooling" _note="159ec3f8-86cc-4a14-8a48-c619e40756bf | schooling | " />
      <outline text="Show Jumping" _note="5a21f34d-86ae-49a2-bb71-1ce191e3a1b8 | show_jumping | Show jumping takes place over a course of obstacles, which can include verticals, spreads, double and triple combinations, usually with many turns and changes of direction." />
    </outline>
    <outline text="Exercise machine" _note="de71c5ea-e93e-49aa-808a-f4a2e68cdddd | exercise_machine | ">
      <outline text="Cross training machine" _note="831ce34c-0218-48f5-8de4-54332e983b01 | cross_training_machine | " />
      <outline text="Exercise bike" _note="ab4c1a81-a7c5-4368-b254-a066d68b8662 | exercise_bike | " />
      <outline text="Resistance weights machines" _note="0f31b611-d9a0-402d-a3c9-637ddcf02e43 | resistance_weights_machines | " />
      <outline text="Rowing machine" _note="f1536a01-4340-472e-99e8-312a58f06660 | rowing_machine | " />
      <outline text="Running machine" _note="1c650bc5-a7a3-4f75-b318-47a394118588 | running_machine | " />
      <outline text="Step machine" _note="23a62930-761a-4dd0-a54e-72e946904c43 | step_machine | " />
      <outline text="Treadmill" _note="45cd1e2e-b994-4b00-9cca-28bebb67aa24 | treadmill | " />
    </outline>
    <outline text="Fencing" _note="92808e60-820c-4ee2-89ec-ea8d99d3f528 | fencing | There are three types of fencing - epee, foils and sabre.">
      <outline text="Wheelchair Fencing" _note="097723ea-70e3-41c6-a1b8-6d1e619d7154 | wheelchair_fencing | Wheelchair fencing is Fencing for the physically disabled." />
    </outline>
    <outline text="Fives" _note="2003612f-c42e-4399-8056-0630d09492d2 | fives | ">
      <outline text="Eton" _note="518a008c-861d-4785-9716-2ba945d2b360 | eton | " />
      <outline text="Rugby" _note="5d528d2f-83df-482e-bfb9-fcaee5b85f4a | rugby | " />
    </outline>
    <outline text="Floorball" _note="c76018ee-50a6-42b3-b0dd-a9efb56ae7ab | floorball | Floorball is a type of floor hockey with five field players and a goalkeeper on each team." />
    <outline text="Football" _note="0a5f732d-e806-4e51-ad40-0a7de0239c8c | football | Football is widely considered to be the most popular sport in the world. The beautiful game is England's national sport.">
      <outline text="11-a-side" _note="117e7f70-6c42-4b1f-a3bb-620b63ea2632 | 11_a_side |  | hiddenLabel:11 a side;hiddenLabel:11aside" />
      <outline text="Blind Football" _note="6016ce87-d9ed-4bd6-8cc9-5598c2f59f79 | blind_football | While the core game remains the same as sighted football, there are a few alterations to make football accessible to people with visual impairments." />
      <outline text="Futsal" _note="1de4c90e-6a27-4bc4-a2be-437a443c7ded | futsal | Futsal is the global format for indoor small-sided football and the worlds fastest growing indoor sport." />
      <outline text="Powerchair Football" _note="f6301564-93d5-41ff-91a1-7ac2dd833951 | powerchair_football | Powerchair is a competitive team sport for people with disabilities who use power wheelchairs." />
      <outline text="Small Sided Football" _note="22fe3033-b0e4-4717-8455-599180b5bcba | small_sided_football | ">
        <outline text="5-a-side" _note="64ba748e-d7f0-46bd-ac49-63820c5eb10e | 5_a_side |  | hiddenLabel:5 a side;hiddenLabel:5aside" />
        <outline text="6-a-side" _note="f816f3b5-3128-4421-b71a-25cc7c1e1880 | 6_a_side |  | hiddenLabel:6 a side;hiddenLabel:6aside" />
        <outline text="7-a-side" _note="55e525a5-615a-4c3f-a889-9049c95c94cf | 7_a_side |  | hiddenLabel:7 a side;hiddenLabel:7aside" />
        <outline text="8-a-side" _note="19b36744-bbcd-4999-8c0d-0a7985dc475e | 8_a_side |  | hiddenLabel:8 a side;hiddenLabel:8aside" />
        <outline text="9-a-side" _note="2c21b96d-1286-4e17-9079-d268c0a276d5 | 9_a_side |  | hiddenLabel:9 a side;hiddenLabel:9aside" />
      </outline>
      <outline text="Walking Football" _note="b8019b67-2ade-406f-a012-91a5c3869652 | walking_football | Walking football is a variant of football that is aimed at keeping people aged over-50 involved with football." />
      <outline text="Wheelchair Football" _note="666cf454-4733-4697-89cb-8e28f6e8595b | wheelchair_football | " />
    </outline>
    <outline text="Footgolf" _note="4ba72fbb-fc08-4f3e-b779-342be690bc1c | footgolf | Footgolf is played on a golf course using a size 5 football." />
    <outline text="Gaelic Games" _note="f5cb51c4-bf16-47a7-b149-d9463704cb42 | gaelic_games | ">
      <outline text="Gaelic Football" _note="bb481220-a155-49fd-9b9d-21884dcb6070 | gaelic_football | Gaelic Football is a combination of rugby and football." />
      <outline text="Gaelic Handball" _note="4d42c46a-d023-476b-a24b-0c4a99ae6be4 | gaelic_handball | " />
      <outline text="Hurling" _note="1f820c4a-0388-4e95-a767-0daf0cc11573 | hurling | " />
    </outline>
    <outline text="Gardening" _note="5b880e93-4a16-4c37-86ac-ba2ffba68358 | gardening | " />
    <outline text="Geocaching" _note="05ac6c7c-1479-43cc-9985-4119f1d8fce0 | geocaching | Geocaching is the real-world treasure hunt that's happening right now, all around you. There are 2,775,063 active geocaches and over 15 million geocachers worldwide." />
    <outline text="Gliding" _note="ee4d8ab0-524d-49b4-bf02-b5f6fc0fdc5c | gliding | Gliding involves flying in an engine-less aircraft">
      <outline text="Hang Gliding" _note="51ead1ae-5d80-41ba-931a-42df1a100cf2 | hang_gliding | " />
      <outline text="Para Gliding" _note="8395e45d-6bc4-4b76-8590-25839a63cc6c | para_gliding | " />
    </outline>
    <outline text="Group Exercise" _note="984068a7-5b7b-4989-bb33-f96953d8960c | group_exercise | ">
      <outline text="Dance Fitness" _note="d3b5104a-2e31-4cca-a278-ef8e0987a764 | dance_fitness |  | related:dance">
        <outline text="Azonto Fitness" _note="20532927-bb47-4bdf-b341-4966336baf11 | azonto_fitness |  | related:azonto">
          <outline text="AzontoBeats" _note="b976886d-d5f5-49c7-9502-008ab3d3d7a6 | azonto_beats | " />
        </outline>
        <outline text="Ballet Fitness" _note="c44e1f63-8925-4ec6-97a5-6719d751c69a | ballet_fitness |  | related:ballet">
          <outline text="Ballestics" _note="d8f950b3-238d-406e-a33f-70a0fb6e8888 | ballestics | " />
        </outline>
        <outline text="Ballroom and Latin Fitness" _note="4b3f737f-7266-487f-b89b-bb5ba189162e | ballroom_and_latin_fitness |  | related:ballroom_and_latin">
          <outline text="Chasamba®" _note="1749b17d-f802-4ae7-b164-346dc7b9e0dd | chasamba | " />
          <outline text="Fitsteps®" _note="5fec7c88-47c6-4304-b6d7-730d47348d67 | fitsteps | FitSteps was designed by Natalie Lowe and Ian Waite of â€˜Strictly Come Dancingâ€™ and delivers a mixture of Ballroom and Latin." />
        </outline>
        <outline text="Barre" _note="182b0c14-988d-44eb-aab1-538aaa3caee6 | barre |">
          <outline text="Barrecore" _note="74f646fd-729a-40c6-9d55-655caaf0be72 | barrecore | " />
          <outline text="Barreconcept" _note="77127099-78be-4cbb-b1bc-8411b040abfb | barreconcept | Incorporates pilates and yoga with the positions, moves and techniques of Ballet." />
          <outline text="Booty Barre" _note="4ec24176-1e57-48d6-a4d4-afd56de2bc0d | booty_barre | " />
          <outline text="Beam Fit" _note="f3a673fe-1c88-48c1-b3ec-9dc749934cc2 | beam_fit | " />
          <outline text="Piloxing Barre" _note="b4f06beb-f96e-4a3d-8b98-af4bb6505f65 | piloxing_barre | " />
        </outline>
        <outline text="Bellydance Fitness" _note="433cd2b6-d661-409a-a6c5-76f0a34bbb4c | bellydance_fitness |  | related:belly_dance">
          <outline text="Belrobics" _note="8112356e-fb65-41da-af16-92a77ab41318 | belrobics | " />
        </outline>
        <outline text="Bhangra Fitness" _note="bd8e72f6-f342-4884-8063-d2f996bad56c | bhangra_fitness |   | related:bhangra">
          <outline text="Bhangracise" _note="8091d1ac-4bb1-449c-9779-199c042fff90 | bhangracise | " />
        </outline>
        <outline text="Bokwa" _note="00d8ae15-5e40-4d08-83f4-e0328fed8aab | bokwa | Bokwa participants draw letters and numbers with their feet while performing an energizing and addictive cardio workout routine." />
        <outline text="Bollywood Fitness" _note="23b8ffe3-4b6e-49d0-805f-a9f09d37b196 | bollywood_fitness |  | related:bollywood ">
          <outline text="Just Jhoom!" _note="c2c0865a-4e87-4505-800b-afd315d74172 | just_jhoom | " />
        </outline>
        <outline text="Burlesque Dance Fitness" _note="38bfaac1-8fdf-4b5d-b076-d53d681738ab | burlesque_dance_fitness |  | related:burlesque">
          <outline text="Burlexercise" _note="10c49f6c-ec59-41ac-9e41-4f4fb9035245 | burlexercise | " />
        </outline>
        <outline text="Cheer Fitness" _note="2c61b0e1-80c1-488b-9255-836d2bf4188e | cheer_fitness |  | related:cheerleading">
          <outline text="Cheerobics®" _note="a19e1921-57f4-4504-a6bd-240972116d59 | cheerobics | " />
        </outline>
        <outline text="Chinese Movement &amp;amp; Dance Fitness" _note="75cbc726-05a8-417c-8329-127d6ceeea9f | chinese_movement__dance_fitness |  | related:chinese_movement_dance |">
          <outline text="Chiball" _note="2908ef3f-ba30-47a1-9333-f80dbb6f7b8f | chiball | " />
        </outline>
        <outline text="Country And Western Fitness" _note="cfe3dda0-976e-45cb-a92a-f18a4b06af4d | country_and_western_fitness |  | related:country_and_western">
          <outline text="Country Heat" _note="a673cc2a-510d-428e-b342-af9b27a4463d | country_heat | " />
        </outline>
        <outline text="Dance Aerobics" _note="6b176d87-b82b-4fab-aec1-6d6f94ba8e4c | dance_aerobics | ">
          <outline text="Body Jam™" _note="6a3eece8-bca4-4159-a5de-094a0c10cf6a | body_jam | Body Jam is a choreographed dance workout" />
          <outline text="Booiaka®" _note="3ab9ba4c-d0cd-4521-8c70-acbed5c3d5f0 | booiaka | Booiaka is a freestyle dance class meaning 'it's the way you move'" />
          <outline text="CIZE" _note="b9437d88-fe3f-4cd6-b5a6-9aafc7758a6a | cize | " />
          <outline text="Dance Moves" _note="88a50ef9-5740-4919-a7d9-4d921d0b1c16 | dance_moves | " />
          <outline text="Dancercise" _note="f0d6d771-12a0-48f6-8672-3f89148bc420 | dancercise | " />
          <outline text="DDmix" _note="2d58e4b0-c94c-4fe4-af5b-df9fada379fd | ddmix | " />
          <outline text="Divacise" _note="5dcf53a8-8408-4298-b6f7-169aec0e5d0e | divacise | " />
          <outline text="drumnbounce" _note="d5b07b1e-d5a7-4bdf-80cf-abce650cc671 | drumnbounce | " />
          <outline text="Funky HAU2" _note="0a2a036f-2f60-45c7-98e3-276aee015732 | funky_hau2 | " />
          <outline text="Groove Fx" _note="64f6baac-a0b1-4072-9e33-c4a34e6d44f7 | groove_fx | " />
          <outline text="Moves FItness" _note="76b3f9ce-b214-43d6-8390-2b8765b0067d | moves_fitness | " />
          <outline text="Piloxing" _note="0771fcb2-b5f7-4247-8d54-90648c839d46 | piloxing | " />
          <outline text="Shbam™" _note="a58a4e1b-ee15-437a-9d7e-de201b3daaf7 | shbam | " />
          <outline text="Strutology" _note="f0f0e53d-1416-4aca-96dc-fe49df0d18a4 | strutology | " />
          <outline text="Synergy®" _note="6490e361-ffde-44ff-b779-be7607297b44 | synergy | " />
        </outline>
        <outline text="FLexercise" _note="18383130-20e1-4a19-980b-ef9c518c3b72 | flexercise | FLexercise is used to deliver 'Bagot Stack' which is designed to improve posture and well-being through core stability and rhythmic exercise to music." />
        <outline text="Fierce" _note="a7e6619b-056c-493a-8577-7183bfc089a1 | fierce | " />
        <outline text="Flowetic®" _note="2faf7812-4197-4215-a79f-0d8f5d909616 | flowetic | " />
        <outline text="Hoop Dance" _note="b3061d83-e2cc-4ddf-8179-1c4295e9ee54 | hoop_dance | ">
          <outline text="Globe Fit" _note="88014533-76c8-49dd-ba7d-f7309b46a5af | globe_fit | " />
          <outline text="Globe Fit Hoola" _note="c372c3bf-ec95-48d8-89c9-d9a2cc824709 | globe_fit_hoola | " />
          <outline text="Hooptone" _note="62c660f4-aab5-489c-b237-039d4e7b49bb | hooptone | " />
          <outline text="Hot Hula Fitness" _note="020e0782-66a4-4189-a939-4c55803438be | hot_hula_fitness | " />
          <outline text="Hula Fitness" _note="da4f03ab-1fee-42b5-9f80-0fa9e9c4cf97 | hula_fitness | " />
          <outline text="Hulacise" _note="73f5b219-e6c2-4d58-bbf1-290307db5881 | hulacise | " />
          <outline text="Hulafit" _note="c936aa37-4318-4c13-b850-ce394c7bbb0e | hulafit | " />
          <outline text="Powerhoop" _note="fb7409ae-0e69-4b65-8406-bab8f40b522c | powerhoop | " />
        </outline>
        <outline text="Jazz Fitness" _note="6851b00d-d573-4f0b-bfd9-e785c35c3c0c | jazz_fitness |  | related:jazz">
          <outline text="Jazzercise" _note="57fbbb8f-f843-4c78-949e-9ff2485e74f3 | jazzercise | Jazzercise classes combine dance-based cardio with strength training to music." />
        </outline>
        <outline text="KFA" _note="08c42d3a-6a36-445a-9f04-1b2af78b976a | kfa | ">
          <outline text="Kfa Body Moves" _note="79c40dd8-24f7-4376-b30f-028002250da5 | kfa_body_moves | " />
          <outline text="Kfa Creative Moves" _note="bcf837e8-bf82-4100-8da5-a7e079db004f | kfa_creative_moves | " />
          <outline text="Kfa Fit Moves" _note="4b70335d-c213-4dfe-a344-4aaeedc4ae69 | kfa_fit_moves | " />
          <outline text="Kfa Mature Moves" _note="1960f302-c1e4-44be-a066-a9ded5b2e0e6 | kfa_mature_moves | " />
          <outline text="Kfa Moves" _note="f1733763-e6f2-4ec1-a7af-bac6879fdf15 | kfa_moves | " />
          <outline text="KFA Seated/Chair" _note="11d19f2e-9888-4ee9-9393-f8d8faa4c21b | kfa_seatedchair | " />
          <outline text="Kfa Youth Moves" _note="b23865cb-dd19-462f-ae4d-0a63a28fa7b3 | kfa_youth_moves | " />
        </outline>
        <outline text="Konga®" _note="f7e0c378-a100-49ea-a239-1a5fa062d5fb | konga | " />
        <outline text="Medau">
          <outline text="Medau Elements" _note="6fc3f706-23d0-4027-bebb-8a7cddb92b34 | medau_elements |" />
          <outline text="Medau Mature Moves" _note="562ef2a8-0936-4cf5-8504-aff783fe0521 | medau_mature_moves | " />
          <outline text="Medau Movement" _note="52b5604b-9139-4235-be4a-6441c506605b | medau_movement | " />
        </outline>
        <outline text="Nia" _note="95875523-6fca-4eb6-b53e-9250e31bdb6a | nia | ">
          <outline text="Classic Nia" _note="f2c27c1e-a195-41a6-9f64-6c7bfe65fe66 | classic_nia | " />
        </outline>
        <outline text="Party Fitness" _note="6ec422f3-0524-476b-aadf-7e67df46a63d | party_fitness | ">
          <outline text="Club Cardio" _note="ff29e6fa-bc3d-4b29-97eb-9ae0c970d0ae | club_cardio | " />
          <outline text="Clubbercise" _note="55cc1b4d-6181-47d9-bd85-7f8a15ba6130 | clubbercise | " />
          <outline text="Clubbercise Kids" _note="fe2c9859-aa69-43c5-bcc3-ba5a6c7d9815 | clubbercise_kids | " />
          <outline text="KpopX" _note="2ebbedb5-d841-46c4-b031-5b7ac68d8b7d | kpopx | " />
          <outline text="Popdance Active &amp;amp; Able" _note="6837e64f-04d7-48c2-b99e-f36847f9e7b9 | popdance_active__able | " />
          <outline text="Popdance Adults" _note="71bf180d-d28c-4822-a7ee-25e97c7e4662 | popdance_adults | " />
          <outline text="Popdance Fit" _note="9c39316e-6d6a-4101-9e88-c721d784fe20 | popdance_fit | " />
          <outline text="Popdance Kids" _note="a1a27e85-f64b-44e7-98c9-efdb5be83a02 | popdance_kids | " />
          <outline text="Popdance Teens" _note="97fb991a-50a7-488a-be64-4dc2759fc5d3 | popdance_teens | " />
          <outline text="Popdance Tots" _note="df2f0608-7124-4833-8cc1-bbb5b9da34fe | popdance_tots | " />
          <outline text="Rave Fitness" _note="6bdea630-ad22-4e58-98a3-bca26ee3f1da | rave_fitness | " />
          <outline text="Ravercise" _note="221eeae9-f696-4b62-b065-556e9720c54b | ravercise | " />
        </outline>
        <outline text="Pole Fitness" _note="2cc156d8-0bee-4e38-bd84-89f41da6f9da | pole_fitness | Pole dancing is a form of performance art and fitness, which combines dance and acrobatics centered on a vertical pole.  | related:pole_dancing">
          <outline _complete="true" text="Xpole Fitness" _note="cd4e9ee0-4df6-4591-b137-be3013e5beb2 | xpole_fitness | " />
        </outline>
        <outline text="Salsa Fitness" _note="5cdf5ead-e19d-4619-9585-cfe509c3fe52 | salsa_fitness | Latin American style of dance with Cuban origins. | related:salsa">
          <outline text="Sosa™" _note="f8483e8d-2976-4fa4-91b4-4d19b379802a | sosa | " />
          <outline text="Salsa Aerobics" _note="28f78557-642e-405f-ba0e-eec50cfabf04 | salsa_aerobics | " />
          <outline text="Cubatone" _note="7a5bf6bb-e56d-41b9-8ebf-dd1d1a89455d | cubatone | " />
        </outline>
        <outline text="Scottish Dance Fitness" _note="edc8fd32-92ba-4014-9c81-7afc618bfaba | scottish_dance_fitness |   | related:scottish_dance">
          <outline text="Kelta Fit" _note="4c25b48b-ae07-4864-816a-530041a95795 | kelta_fit | " />
          <outline text="Highland Hustle" _note="01e18a21-51d5-4779-9419-2843851816f9 | highland_hustle | " />
        </outline>
        <outline text="Street Dance Fitness" _note="8087a5b8-41ad-4537-8cb3-563d23f31a1f | street_dance_fitness |  | related:street_dance">
          <outline text="Bounce Dancefit" _note="a4b01c1f-0668-4e2b-853f-8bf393b208f1 | bounce_dancefit | " />
          <outline text="Fit-Beatz" _note="790f5139-ea63-4d0c-85cf-bcf1ccb4e272 | fitbeatz | " />
          <outline text="Freez" _note="03f33259-16af-44d9-b37b-ce240a33ad3f | freez | " />
          <outline text="Mash It Up" _note="4d569686-4971-4ea8-bda1-cd34bf17ba67 | mash_it_up | " />
          <outline text="Mini-Beatz" _note="e6d9364a-f024-4c81-9d01-564856bed52c | minibeatz | " />
          <outline text="Street Fit" _note="2f590a5b-bb2e-40ad-ae15-5db383408ad8 | street_fit | " />
          <outline text="Street Step" _note="7aafc311-42f0-41e3-9891-b924e0645f8f | street_step | " />
          <outline text="Tyga®" _note="4aeecde4-1998-4ee9-9c27-01d2ff046c50 | tyga | " />
          <outline text="Voga" _note="949ea0e2-8bc1-4740-9bb7-c6d266669df4 | voga | " />
        </outline>
        <outline text="Tap Fitness" _note="51e77d9b-beda-4f48-b55d-d4abe936c785 | tap_fitness |  | related:tap" />
        <outline text="Veraflow" _note="cb43f105-1d34-4f68-8c04-a8522e987615 | veraflow | " />
        <outline text="Yoga Rave" _note="f582e0e9-459b-4425-b8c7-e7f03e4d92fb | yoga_rave | " />
        <outline text="Zumba®" _note="78503fa2-ed24-4a80-a224-e2e94581d8a8 | zumba | ">
          <outline text="Zumba Glow" _note="de8cb1f4-176a-4744-9978-ae23a0089b64 | zumba_glow | " />
          <outline text="Zumba® Gold" _note="7f4fffb6-f136-46e0-9fac-7142567b41b5 | zumba_gold | Zumba Gold® is designed for active older adults who are looking for a modified Zumba® class that recreates the original moves but at a lower-intensity." />
          <outline text="Zumba® Kids" _note="21ab8610-1377-4308-939c-bfeb966f1b05 | zumba_kids | Zumba® for kids" />
          <outline text="Zumba® Kids Jr." _note="bfe10990-df14-4252-8e96-296051478db7 | zumba_kids_jr | " />
          <outline text="Zumba Sentao™" _note="7d5a96a4-3539-4b76-a116-6fa05edb77f1 | zumba_sentao | " />
          <outline text="Zumba® Step" _note="f1ef142d-7607-46e5-9406-5e12ae0c00a7 | zumba_step | " />
          <outline text="Zumba Strong®" _note="377ea9ea-656f-4d7f-8cba-034e30572c72 | zumba_strong | " />
          <outline text="Zumba® Toning" _note="54706d22-5a4b-4298-97d3-8b19be20d47a | zumba_toning | " />
          <outline text="Zumbini®" _note="38ed9492-6530-47f6-9021-1a584721275d | zumbini | " />
        </outline>
      </outline>
      <outline text="Multi Fitness" _note="261395e5-9e11-4348-8bef-e0fafef0e765 | multi_fitness | ">
        <outline text="20-20-20" _note="a71d477f-7263-43d7-8d17-3d69bda8991b | 202020 | " />
        <outline text="Block Fit" _note="6971ba4b-60e9-4f94-b11f-1f6436a88451 | block_fit | " />
        <outline text="Body Conditioning" _note="f25c050b-b454-4b6c-9301-f696f787c8f2 | body_conditioning | ">
          <outline text="BODY VIVE®" _note="bc11138d-741a-4eff-aca0-a72f579ec037 | body_vive | " />
        </outline>
        <outline text="Bootcamp" _note="fe3465a2-3a1e-458e-a48b-fc117350e5a7 | bootcamp | ">
          <outline text="Barrys Bootcamp" _note="d07775c2-03f9-4d43-b24a-e5c25934dab5 | barrys_bootcamp | " />
          <outline text="British Military Fitness" _note="31853d3e-0583-43b1-a8b4-867d9ed85e97 | british_military_fitness | " />
        </outline>
        <outline text="Circuit Training" _note="d22d1d7d-8a2f-4e18-88c8-80abcbdded9d | circuit_training | " />
        <outline text="Cross Training" _note="a2863690-4973-4408-bdb3-0f29f93ae221 | cross_training | " />
        <outline text="HIIT" _note="21b6faae-c7cd-431f-9f2f-7d151e82de33 | hiit | A form of interval training, a cardiovascular exercise strategy alternating short periods of intense anaerobic exercise with less intense recovery periods, until too exhausted to continue.">
          <outline text="Body Attack" _note="8a75b5bd-812d-4dfd-aff6-87f799770d8c | body_attack |" />
          <outline text="Burn" _note="59ffeeac-1619-4f01-9c17-b007a3bb345d | burn | " />
          <outline text="Cross Fit" _note="09ed21f1-c969-434d-8866-7ff5c8b83ef9 | cross_fit | " />
          <outline text="Insanity" _note="56ba53cd-aaa5-4401-a5f9-7aa2d87bf594 | insanity | Insanity uses MAX Interval Training to force the body to work for longer periods of time at a higher capacity than traditional workouts." />
          <outline text="Les Mills Grit™" _note="8e1264db-697b-480b-b492-d3dc88bd0b2b | les_mills_grit | " />
          <outline text="Metafit" _note="d9f86e98-ffbc-4621-aabd-e5d7ff0aa058 | metafit | " />
          <outline text="MetaPWR" _note="d53cc35b-08b4-4a10-9626-6abbbcc79473 | metapwr | MetaPWR is a power circuit class using functional kit and exercises to work muscles and boost metabolism. " />
          <outline text="Methodology X" _note="ac826676-8528-4fa1-9173-d62ad42a963d | methodology_x | " />
          <outline text="PWR-Beatz" _note="4ab6e375-b1f9-4fe8-9e9b-bf49653fabcf | pwrbeatz | " />
          <outline text="Sh1ft" _note="e86a5ec6-6376-4398-a013-a7aeae7904c2 | sh1ft | " />
          <outline text="Tabata" _note="296c2a05-e224-4c9e-ba1a-944b769335d0 | tabata | " />
          <outline text="Vypa®" _note="4d7267d8-6df5-4d28-9de3-2c51c33f7608 | vypa | " />
        </outline>
        <outline text="Hour of Power" _note="aff38834-4a9c-4ec3-b7e4-7089126b6498 | hour_of_power | " />
        <outline text="Interval Training" _note="7231ae66-c9f4-4e1a-9bab-e454323c0b35 | interval_training | ">
          <outline text="Armageddon Fitness" _note="824b33d4-39c8-42df-8e56-ff84a367b8ef | armageddon_fitness |" />
        </outline>
        <outline text="Personal Training" _note="22ca9f17-edda-4425-b905-3867e19d4873 | personal_training | " />
        <outline text="Rabble" _note="8b8421c1-1fc2-4b70-9ebc-ef7baf6d590e | rabble | " />
        <outline text="Zumba Strong®" _note="377ea9ea-656f-4d7f-8cba-034e30572c72 | zumba_strong | " />
      </outline>
      <outline text="Water-Based Classes" _note="82057527-8288-4faa-bc2e-11aa734f61f1 | waterbased_classes | ">
        <outline text="Aqua Aerobics" _note="6e31262b-ce37-4fc7-b3e3-d827ac5e8b42 | aqua_aerobics | ">
          <outline text="Aqua Fit" _note="9a4ecdc3-5f70-48e8-9718-8542db315230 | aqua_fit | Aquafit is shallow and deep water aerobics." />
          <outline text="Aqua Fit (Shallow Water)" _note="ddc48677-d3af-47e0-84a9-d6f6514ea001 | aqua_fit_shallow_water | Aquafit is shallow and deep water aerobics." />
          <outline text="Aqua Fit (Deep Water)" _note="a9de3e47-f47d-459e-b2ab-b1bee054dfa1 |aqua_fit_deep_water | A deep water resistance workout" />
          <outline text="Aqua Zumba®" _note="1646bc29-dda3-4a97-a2ad-48c21bce8bb5 | aqua_zumba | Zumba crossed with traditional aqua fitness disciplines creating a challenging, body-toning water-based workout." />
          <outline text="Aquacise" _note="ad730396-0431-41e9-83cb-3468c8df8443 | aquacise | " />
          <outline text="Waterworks" _note="c94a2240-0c3b-4478-bda7-1c0cea162367 | waterworks | " />
        </outline>
        <outline text="Hydro Therapy" _note="5165000e-cd5b-4fd1-b6dc-630c4b989282 | hydro_therapy |" />
        <outline text="Aqua Jogging" _note="a7695eb1-2241-4c94-bea0-67922e643f2e | aqua_jogging | Aquajogging involves wearing a flotation device around your middle and then moving your arms and legs in a running motion in the deep end of the pool" />
        <outline text="Hydro Spin" _note="de259fd8-65f1-4318-b4fd-6f0ec2cb59c8 | hydro_spin |" />
      </outline>
      <outline text="Abs/Core" _note="741097ba-21a0-4b7b-8099-86ddb562458a | abscore | ">
        <outline text="Beam Fit" _note="f3a673fe-1c88-48c1-b3ec-9dc749934cc2 | beam_fit | " />
        <outline text="Bosu®" _note="ead300ad-a399-4768-b7ad-59e09fbe29fc | bosu | " />
        <outline text="CORE DE FORCE" _note="054142e7-fa51-4675-9ec6-58f9ee804991 | core_de_force | " />
        <outline text="Core Stability" _note="cb09c9da-93e1-4d39-83af-b7565971d2de | core_stability | " />
        <outline text="Cx Worx™" _note="6b533564-ee1d-4e6e-9532-b07f8b5ef60d | cx_worx | " />
      </outline>
      <outline text="Aerobics" _note="678b9fc4-1860-4377-85b9-e4c01628582a | aerobics | Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardiovascular fitness).">
        <outline text="Blast Fx" _note="fee226da-a928-44ec-a194-f1d328e2a9df | blast_fx | " />
        <outline text="Bodyattack™" _note="0fca2365-5304-4fec-9c56-8b53c06020c3 | bodyattack | BODYATTACK™ is the sports-inspired cardio workout for building strength and stamina." />
      </outline>
      <outline text="Animal Flow®" _note="85b1e6ad-797f-4879-960e-eb4612da7c9d | animal_flow | " />
      <outline text="Body Conditioning" _note="f25c050b-b454-4b6c-9301-f696f787c8f2 | body_conditioning | ">
        <outline text="Deep HAU2" _note="54a58cf7-fcc4-43e9-843c-f9b120d03cfc | deep_hau2 | " />
        <outline text="Jagua®" _note="3dc2148f-54c4-4482-b0fa-931822bdbd39 | jagua | " />
        <outline text="Legs Bums And Tums" _note="ffdcfccf-fa85-4e11-9a83-257b7bb7b07b | legs_bums_and_tums | This class focuses on toning up legs, bums and tums." />
      </outline>
      <outline text="Born To Move" _note="31f3db8a-16a1-4cb8-85e7-9413149816b4 | born_to_move | " />
      <outline text="Boxing Fitness" _note="1eb737b6-9962-469d-98cc-0a2e4e86d356 | boxing_fitness |  | related:boxing">
        <outline text="Bag-Fit" _note="279d3250-6f78-482b-85aa-99e83c6a2cd0 | bagfit | " />
        <outline text="Boxercise" _note="25b963ea-e01e-4fd9-ba38-275f1d278ed6 | boxercise | Boxercise is an effective form of cross training that incorporates a combination of boxing movements and aerobics. This makes a fun alternative and also improves rhythm, co-ordination as well as burning calories!" />
        <outline text="Boxfit" _note="9b84edd8-1934-409a-965e-77a74e9b3609 | boxfit | The Boxfit classes are an all-level circuit training class." />
        <outline text="Turbo KICK" _note="0a4f1f2b-5ca1-458b-b90a-b488f4a9f569 | turbo_kick | " />
        <outline text="Punch And Strike" _note="424a5a34-5b68-44e8-a348-cd17445edb00 | punch_and_strike | " />
        <outline text="Piloxing" _note="0771fcb2-b5f7-4247-8d54-90648c839d46 | piloxing | " />
        <outline text="Piloxing Knockout" _note="bc6152ae-f97a-4181-a0c5-d4474db41f17 | piloxong_knock_out | " />
      </outline>
      <outline text="Buggy Fitness" _note="4ad68772-7dc5-4635-8a0f-d4cd9c656c25 | buggy_fitness | ">
        <outline text="Buggy Boot Camp" _note="35283629-1fd1-4693-9cd4-d0335549cad9 | buggy_boot_camp | A postnatal fitness programme for mums with their babies in their buggies." />
        <outline text="Buggy Bounce" _note="bff44604-67e4-41e8-9d37-9c64886f99e9 | buggy_bounce | " />
      </outline>
      <outline text="Callanetics" _note="8310ea9c-4785-4472-8899-a541cbcc0359 | callanetics | " />
      <outline text="Chair Based Exercise" _note="ee3cf3ee-082e-4f53-9cb2-3ef0589497ed | chair_based_exercise | Chair based exercise classes are designed to help improve strength and balance, from the comfort of a chair.">
        <outline text="Burlesque Chair Dance" _note="89270ae0-9e0e-47af-97fa-8975d706701d | burlesque_chair_dance | " />
        <outline text="Extend" _note="ea5f74c7-6d69-44c5-8bdc-42e46488f4e0 | extend | " />
        <outline text="Fabs" _note="e6d04eaa-a1b9-4e5f-97a3-445783f51bae | fabs | " />
        <outline text="KFA Seated/Chair" _note="11d19f2e-9888-4ee9-9393-f8d8faa4c21b | kfa_seatedchair | " />
        <outline text="Sit N B Fit" _note="1dae5189-7677-4921-9ad2-e04b23faff57 | sit_n_b_fit | " />
      </outline>
      <outline text="Exercise Ball" _note="f7b4d296-7b3d-466d-b138-b668a268b402 | exercise_ball | ">
        <outline text="Fitball" _note="e30df90a-fd99-4545-b5fe-2f8a34a01eae | fitball | " />
        <outline text="Stability Ball" _note="30f96504-5e46-4925-8e6f-79c910a84ddb | stability_ball | " />
        <outline text="Swiss Ball" _note="1c34e4a5-d36a-4c04-a9bf-03586524d93d | swiss_ball | " />
      </outline>
      <outline text="Extend" _note="ea5f74c7-6d69-44c5-8bdc-42e46488f4e0 | extend | " />
      <outline text="Fabs" _note="e6d04eaa-a1b9-4e5f-97a3-445783f51bae | fabs | " />
      <outline text="Flexibar" _note="c31ac4c7-5c95-4915-8528-adebaacbb39d | flexibar | " />
      <outline text="Flexibility/Stretching" _note="56be8d24-0c9b-438c-8679-192e5714daf9 | flexibilitystretching | ">
        <outline text="Bodybalance™" _note="b6402e8e-e405-4b97-8c76-4868324bc907 | bodybalance | BODY BALANCE™ is a combination workout of Yoga, Tai Chi and Pilates." />
        <outline text="Flexaware" _note="fc2308ff-aae7-46c9-83e3-d857dd641ad1 | flexaware | " />
        <outline text="Jukari Fit To Flex" _note="abe7a21d-1dfe-4d5e-9007-a4e09f1970b0 | jukari_fit_to_flex | " />
        <outline text="Stretch And Tone" _note="ed91a872-e006-424d-9e94-a0d7bdec5df9 | stretch_and_tone | " />
        <outline text="Stretch Class" _note="da71f513-a3b3-44f5-8268-c45f92fdcd55 | stretch_class | " />
      </outline>
      <outline text="Functional Fitness" _note="493b7750-01d7-493f-811d-335929afeb77 | functional_fitness | ">
        <outline text="Body Attack" _note="8a75b5bd-812d-4dfd-aff6-87f799770d8c | body_attack |" />
        <outline text="Blast Fx" _note="fee226da-a928-44ec-a194-f1d328e2a9df | blast_fx | " />
        <outline text="Deep HAU2" _note="54a58cf7-fcc4-43e9-843c-f9b120d03cfc | deep_hau2 | " />
        <outline text="FREESTYLER" _note="220a4b93-50dc-404f-802b-ae6b953c07b0 | freestyler | " />
      </outline>
      <outline text="Fuse Fit" _note="2f6a2f82-ba95-444e-b895-c2878d00dff7 | fuse_fit | " />
      <outline text="Indoor Cycling" _note="5f09c2ca-ceeb-4e0c-871f-e2d0b9971317 | indoor_cycling | Indoor Cycling can takes place on indoors on a stationary bike. | altLabel:Group Cycling">
        <outline text="Rpm™" _note="2c2b9be5-9491-4958-bee8-70ced347d384 | rpm | RPM™ is an indoor cycling class, set to the rhythm of motivating music." />
        <outline text="Spinning" _note="14eff16c-6da8-4f3e-9a85-37a8e7d3062d | spinning | " />
        <outline text="Sprint®" _note="4dcf7963-c089-4e9c-995e-8735b3ffc2d7 | sprint | " />
      </outline>
      <outline text="Indoor Rowing" _note="12756b9e-de31-4372-8df8-027ca02ef5ff | indoor_rowing | " />
      <outline text="Jump Fx" _note="a426499e-fc97-4a56-81ab-09f581ef0a91 | jump_fx | " />
      <outline text="Kangoo Jumps™" _note="74a424c2-94d7-4e2b-a262-c6b492216704 | kangoo_jumps | " />
      <outline text="Kettlebells" _note="fa2d7665-bb7f-4596-a157-e08c975d6073 | kettlebells | Kettlebell classes use a cast iron weight with a handle to perform exercises to core muscle groups to develops dynamic strength.">
        <outline text="Kettlercise" _note="039d64f4-3d6a-4f11-aaa7-79d887be423f | kettlercise | " />
      </outline>
      <outline text="Martial Arts Fitness" _note="7a72e0e1-73ab-488e-872c-33e825360ddb | martial_arts_fitness | | related:martial_arts">
        <outline text="Body Combat™" _note="c3bc55ef-1250-4542-9041-617e3764c7d7 | body_combat | BODYCOMBAT™ is a high-energy martial arts-inspired workout that is totally non-contact." />
        <outline text="Fight Fx" _note="5ad9ab0b-dda5-4028-94a0-f3c205734a2d | fight_fx | " />
      </outline>
      <outline text="Medicine Ball" _note="87b7d180-d8c0-4721-adf6-9a257c164421 | medicine_ball | A class using a Swiss ball to work on core strengthening, including the abdominal muscles which help to improve your balance." />
      <outline text="Meditation" _note="0c2a1e6b-4b02-4b8a-ae6d-59f225ff5341 | meditation | " />
      <outline text="New Body" _note="9518746d-17e6-4ec4-9559-73c8d0fcb266 | new_body | " />
      <outline text="Otago" _note="72871f24-fdcd-4a88-9400-9cb08b911e70 | otago | " />
      <outline text="Pilates" _note="3a6b1c08-7aa6-48d4-9690-dca9e0133057 | pilates | Pilates improves flexibility, builds strength and develops control and endurance in the body.">
        <outline text="Bodybalance™" _note="b6402e8e-e405-4b97-8c76-4868324bc907 | bodybalance | BODY BALANCE™ is a combination workout of Yoga, Tai Chi and Pilates." />
        <outline text="Nova" _note="72ab185f-cd57-44da-a310-753fd2646d40 | nova | " />
        <outline text="Piloxing" _note="0771fcb2-b5f7-4247-8d54-90648c839d46 | piloxing | " />
        <outline text="Piyo®" _note="675f5977-68a3-433a-9bb5-20278bd94e0c | piyo | " />
      </outline>
      <outline text="Pound™" _note="89f3254e-0d8b-4d43-9dc3-ddbd0d5ddfea | pound | " />
      <outline text="Power Plate" _note="fb4c0f65-7b9b-438b-b215-65013d2edb7c | power_plate | " />
      <outline _complete="true" text="Recovery" _note="26e6a178-c7bc-44a8-bd37-393c7309acbe | recovery | " />
      <outline _complete="true" text="Relaxation" _note="8b22cd70-630e-4192-99ca-5c0118945984 | relaxation | " />
      <outline text="Skipping" _note="1bdf3fac-9d6b-401b-a773-87a9a1c86ed1 | skipping | ">
        <outline text="SkipFit" _note="673a6aeb-0838-4d80-8814-365487317d53 | skipfit | " />
        <outline text="Skiptrix®" _note="ec70ff71-965c-4033-9308-4ab2d38539fc | skiptrix | A group exercise programme with multi-levels of jump rope skills and tricks structured into an aerobic workout." />
      </outline>
      <outline text="Step Aerobics" _note="01e547fd-2a10-40a4-a297-6d827c10529c | step_aerobics | Step involves performing aerobics on an elevated platform (the step).">
        <outline text="Bodystep™" _note="eda910f1-0de6-4038-b954-43b691f7d954 | bodystep | BODY STEP™ combines basic stepping with moves like burpees, push ups and weight plate exercises to work the upper body." />
        <outline text="Zumba® Step" _note="f1ef142d-7607-46e5-9406-5e12ae0c00a7 | zumba_step | " />
      </outline>
      <outline text="Suspension" _note="3f3bb0c5-0373-43d9-a75c-c6a7590c14de | suspension | ">
        <outline text="Trx®" _note="c3d3f498-e7f0-4b80-be4e-ee11da9b5765 | trx | " />
      </outline>
      <outline text="Trampoline Fitness" _note="faccd7f9-982d-43cc-acd7-cf45964eeabd | trampoline_fitness |  | related:trampolining">
        <outline text="Air Fit" _note="a6b74795-3c06-4538-860f-06cc6170c896 | air_fit | " />
        <outline text="Boogie Bounce" _note="a31c6b89-7794-4cc6-9a4f-3cc0e03b428f | boogie_bounce | Boogie Bounce is a 'fat burning' class on mini trampolines with stability handles." />
        <outline text="Bounce" _note="94ab96ff-c17d-4f20-a2fc-234f0b4bfb54 | bounce | " />
        <outline text="Jiggy Jump" _note="7e817909-2a95-42a3-90d0-22cc48594f9f | jiggy_jump | " />
        <outline text="Rebound" _note="fb3d49c9-5eb5-44cc-b65c-76c86b0e0651 | rebound | " />
        <outline text="World Jumping®" _note="8a4abff3-c616-4f33-80a1-398b88c672a3 | world_jumping | " />
      </outline>
      <outline text="TRE" _note="9ed1c7b0-46ad-465b-9697-036791e41abf | tre | " />
      <outline text="Trigger Point" _note="97d38fa5-70bd-4c69-acc9-e08c885aab7b | trigger_point | " />
      <outline text="Weight Training" _note="25905e33-e0a3-466c-986e-aaed6bccdaef | weight_training | ">
        <outline text="Bodypump™" _note="5e78bcbe-36db-425a-9064-bf96d09cc351 | bodypump | BODYPUMP™ is using light to moderate weights with lots of repetition to provide a total body workout." />
        <outline text="P90X" _note="b8cc8058-1d31-4509-903a-f798493f1b0b | p90x | " />
        <outline text="Powerbags" _note="c58fb951-3607-42b7-b5d6-baf2b5d70a98 | powerbags | " />
        <outline text="Powerhoop" _note="fb7409ae-0e69-4b65-8406-bab8f40b522c | powerhoop | " />
        <outline text="PowerWave™" _note="e811bbc7-5d82-430f-a417-13472006a63a | powerwave | " />
        <outline text="Pump Fx" _note="4b9c1b69-ae55-43c7-9f27-7444e3c56ee5 | pump_fx | " />
        <outline text="Trx®" _note="c3d3f498-e7f0-4b80-be4e-ee11da9b5765 | trx | " />
        <outline text="Vipr" _note="f801638f-bf5a-44b9-8cf8-a47b44791480 | vipr | " />
      </outline>
      <outline text="Yoga" _note="bf1a5e00-cdcf-465d-8c5a-6f57040b7f7e | yoga | Yoga is an ancient form of exercise that focuses on strength, flexibility and breathing to boost physical and mental wellbeing.">
        <outline text="Ashtanga Yoga" _note="1a8e23f3-5e12-411f-99fc-a4fe98010f7d | ashtanga_yoga | Ashtanga is an advanced form of yoga that focuses on building strength and flexibility through flow sequenced postures." />
        <outline text="Baby Yoga" _note="1fdf548e-3a7b-45ea-b94b-924475cdc7b0 | baby_yoga | " />
        <outline text="Bikram Yoga" _note="a7f3179d-1640-4621-96d7-92e620a5e3a8 | bikram_yoga | " />
        <outline text="Bodybalance™" _note="b6402e8e-e405-4b97-8c76-4868324bc907 | bodybalance | BODY BALANCE™ is a combination workout of Yoga, Tai Chi and Pilates." />
        <outline text="Broga" _note="910cfd04-baf7-4bc6-9620-75919388a3fc | broga | " />
        <outline text="Broga" _note="910cfd04-baf7-4bc6-9620-75919388a3fc | broga | " />
        <outline text="Dharma Yoga" _note="f50df69c-8910-4a8a-8285-416340c4ada2 | dharma_yoga | " />
        <outline text="Fitness Yoga" _note="47ab2b4b-1217-4330-a9bc-0921083610b8 | fitness_yoga | " />
        <outline text="Forrest Yoga" _note="2a37deaf-01b2-42f8-b961-2b1174ca9054 | forrest_yoga | " />
        <outline text="Hatha Yoga" _note="90611f8f-fea2-402e-827f-41b487a5f3a0 | hatha_yoga | Hatha Yoga stretches are referred to as 'postures' that are performed slowly and gently rather than energetically and is suitable for all levels." />
        <outline text="Hot Yoga" _note="2fda7187-d1a4-4273-b784-06f062c0ffcd | hot_yoga | " />
        <outline text="Iyengar Yoga" _note="431d5bfd-7ffc-4324-bc69-1c039c7008e1 | iyengar_yoga | " />
        <outline text="Jivamukti Yoga" _note="b8a5bacc-3bd5-407f-81a3-c6dbb3561e57 | jivamukti_yoga | " />
        <outline text="Kundalini Yoga" _note="637bfbba-5253-453d-9dc3-59049efbabee | kundalini_yoga | " />
        <outline text="Mysore Style Ashtanga Yoga" _note="48382419-4875-4f63-b044-88d2fc4e8eab | mysore_style_ashtanga_yoga | " />
        <outline text="Nova" _note="72ab185f-cd57-44da-a310-753fd2646d40 | nova | " />
        <outline text="Piyo®" _note="675f5977-68a3-433a-9bb5-20278bd94e0c | piyo | " />
        <outline text="Qigong" _note="c5e5beaf-0af7-4f43-a28f-6f4ef0e6da92 | qigong | Qigong practices can be classified as martial, medical, or spiritual." />
        <outline text="Restorative Yoga" _note="1b7d6a89-1f6b-4e3d-89c9-c32fc539a7dd | restorative_yoga | " />
        <outline text="Scaravelli Inspired Yoga" _note="bde70671-929f-4167-9181-4c3a2758fd67 | scaravelli_inspired_yoga | " />
        <outline text="Vinyasa Yoga" _note="df58ee70-fa79-423f-b146-4d719b3e7aac | vinyasa_yoga | " />
        <outline text="Voga" _note="949ea0e2-8bc1-4740-9bb7-c6d266669df4 | voga | " />
        <outline text="Voguing" _note="304ffd59-4389-4c7b-bcab-90f9dad8aaf5 | voguing | " />
        <outline text="Warm Yoga" _note="38ac6e05-5b54-4d59-a27d-d8cba6de28d3 | warm_yoga | " />
        <outline text="Yin Yoga" _note="56e4a0e9-0b99-4e7e-aab7-137b4712a041 | yin_yoga | " />
        <outline text="Yoga Nidra" _note="06178c28-8f7f-4cb2-8975-f6694dc105d0 | yoga_nidra | " />
        <outline text="Yoga Rave" _note="f582e0e9-459b-4425-b8c7-e7f03e4d92fb | yoga_rave | " />
        <outline text="Yogalates™" _note="e94cfd93-802d-49d9-8f47-190a385ade1c | yogalates | " />
      </outline>
      <outline _complete="true" text="Exercise To Music" _note="b9886ed0-35af-4905-a610-39b1be8a4cf0 | exercise_to_music | " />
      <outline _complete="true" text="Strength &amp;amp; Conditioning Classes" _note="4fc77761-16a2-47df-bd96-39a3f205bfa7 | strength__conditioning_classes | " />
      <outline _complete="true" text="Cardiovascular Classes" _note="d5f34cb1-35c0-46e5-ad6d-181f77274640 | cardiovascular_classes | " />
    </outline>
    <outline text="Goalball" _note="59d547bb-0d3b-40a8-b9c6-6d6f33e1e16b | goalball | The object of the game is to score a goal by bowling the ball along the floor so that it crosses the goal line of the opposing team." />
    <outline text="Golf" _note="7ae6067a-07f7-4aea-9e1f-eeeea5ae9047 | golf | Golf is an adaptable game that it suits everyone, whatever their age, fitness level or ability. Whether you want to keep healthy, burn calories or spend time with friends, golf is for you.">
      <outline text="Adventure Golf" _note="eaa5efed-f7d3-40b3-8f6e-1951c2a09a65 | adventure_golf | " />
      <outline text="Driving Range" _note="920c6d6b-a912-43bb-ae3c-0378b8ca0855 | driving_range | " />
      <outline text="Full Course Golf" _note="e2dfac8f-9b4f-4dfb-980f-b0d8f1ed5333 | full_course_golf | " />
      <outline text="Golf Xtreme" _note="c26bb4b7-060d-4f73-b4c1-9749f078def1 | golf_xtreme | Golf Xtreme is the golf game and programme for secondary schools" />
      <outline text="Pitch And Putt" _note="dba4de0f-b94d-4aff-bda1-46c20f8dfff0 | pitch_and_putt | " />
      <outline text="Short Course Golf" _note="ff6d2caa-ee67-4b79-a3bd-0b497e31b0f7 | short_course_golf | " />
      <outline text="Speedgolf" _note="858d08bb-6f3d-477d-8a96-8df275a7d7d8 | speedgolf | Speedgolf is a fun, fast, and fitness-oriented alternative to traditional golf." />
      <outline text="Texas Scramble Golf" _note="62c96301-5aa3-4cef-bf68-8420d7a91755 | texas_scramble_golf | Variation of golf that involves playing as a team." />
      <outline text="Tri-Golf" _note="7be1393f-6b55-4d00-818f-ed58c9ea81bc | trigolf | A 'mini' version of golf designed specifically for young children at infant, primary and junior schools." />
    </outline>
    <outline text="Gymnastics" _note="f6ccded0-2666-4a51-88a4-ed6905bb4313 | gymnastics | Gymnastics is an acrobatic sport which requires strength, agility and co-ordination.">
      <outline text="Artistic Gymnastics" _note="864e81a0-77fc-4e23-af9d-240ec3fcc56b | artistic_gymnastics | Artistic gymnastics is a discipline of gymnastics where gymnasts perform short routines on different apparatus" />
      <outline text="Rhythmic Gymnastics" _note="e0e18bd1-00e7-4cab-9752-368d455201cd | rhythmic_gymnastics | Rhythmic Gymnastics discipline within Gymnastics" />
    </outline>
    <outline text="Handball" _note="14232d6d-5e9d-493d-b4a9-ce2061b79ba5 | handball | Handball is a team sport that requires you to score by throwing a ball into a goal." />
    <outline text="Highland Games" _note="01792ac1-4111-4814-9942-cb8a7f9c58c2 | highland_games | ">
      <outline text="Caber toss" _note="512ee498-f70d-466d-a11b-7940322de3d6 | caber_toss | " />
      <outline text="Scottish Hammer throw" _note="8a1fd08b-d1a7-44fa-9b7e-6db43e3a9f45 | scottish_hammer_throw | " />
      <outline text="Sheaf toss" _note="5d01e863-5273-43cf-b854-709261cd3694 | sheaf_toss | " />
      <outline text="Stone put" _note="bcfb61fb-2756-44ac-a69c-742b62303bc1 | stone_put | " />
      <outline text="Weight over the bar" _note="569414aa-290f-4f84-afd6-8ad7a5c27377 | weight_over_the_bar | " />
      <outline text="Weight throw" _note="700989ef-a6d2-492c-a3c8-d028f08d8eba | weight_throw | " />
    </outline>
    <outline text="Hockey" _note="fbb36017-6222-4af2-8186-392e3da0a418 | hockey | Team, ball game played with sticks.">
      <outline text="Field Hockey" _note="a66168d3-5b36-4a14-8e13-4cd9e914cb8f | field_hockey | " />
    </outline>
    <outline text="Horseball" _note="9c1e407a-6635-4e8c-b36d-b3c20e982e16 | horseball | " />
    <outline text="Hovering" _note="102dc002-f755-4b79-8484-562c45391d8e | hovering | " />
    <outline text="Ice Hockey" _note="d82e1366-afab-4c87-b94e-6b5372733b13 | ice_hockey | A six-a-side game on ice that involves trying to get the puck in your opponents net using your stick." />
    <outline text="Ice Skating" _note="0b276929-8b33-4807-9f5e-687c8bb2c2f9 | ice_skating | Ice skating involves dancing or racing on ice.">
      <outline text="Figure Skating" _note="ac029612-6f4a-45fe-b446-cbec44efadd2 | figure_skating | Figure skating involves performing on ice as an individual, duo or in a group." />
      <outline text="Speed Skating" _note="7e78f18b-e0b6-4196-a0f7-5bb0f1a87962 | speed_skating | Speed skating involves skating round a circuit as fast as possible to win the race." />
    </outline>
    <outline text="Jet Skiing" _note="c07d63a0-8eb9-4602-8bcc-23be6deb8f83 | jet_skiing | " />
    <outline text="Kabaddi" _note="7721dfe3-924f-4d15-b5f3-2fe09cd08279 | kabaddi | " />
    <outline text="Karting" _note="23f49068-d508-4f7e-9f83-09878f9fb4f8 | karting | " />
    <outline text="Kayaking" _note="598ceb23-216c-4f8a-9a7a-0eef6e3a4ae8 | kayaking | In all forms of kayaking you use a double bladed paddle and will be in a seated position with your legs in front of you." />
    <outline text="Kendo" _note="a9e57033-47f4-4247-af62-15fbbc8d0628 | kendo | " />
    <outline text="Kite Surfing" _note="864619d9-0b10-4860-97cc-c31de79b2347 | kite_surfing | " />
    <outline text="Korfball" _note="43d4bed6-f379-4a0d-9d29-e834c7ad759e | korfball | Korfball is a fast-paced and dynamic game that is the only truly mixed team ball sport in the world." />
    <outline text="Lacrosse" _note="a6aa92a5-fd6f-42a0-a4c0-788410c68db0 | lacrosse | Lacrosse is a team game where goals are scored by shooting a ball into a net, using a stick with a pocket on the end, called a crosse." />
    <outline text="Land Sailing" _note="879a76f4-4403-45d1-9fa3-76f387407787 | land_sailing | ">
      <outline text="Sand Yachting" _note="73c73572-f86d-4ecf-b0c0-2f442cf15e19 | sand_yachting | " />
    </outline>
    <outline text="Lifesaving Sport" _note="645a7c05-799a-4f43-8920-261eb11cf1f1 | lifesaving_sport | Lifesaving Sport is a competitive sport that gives you the opportunity to compete with fellow lifesavers and grow your essential lifesaving skills." />
    <outline text="Luge" _note="6e50edf5-250e-4704-adad-7d8192b58555 | luge | " />
    <outline text="Martial Arts" _note="2330f2d4-d0dc-4231-8dd9-07d37a452228 | martial_arts | | related:martial_arts_fitness">
      <outline text="Aikido" _note="22584a2a-fafc-4710-863c-8a1fc3f96b2c | aikido | Aikido is a Japanese martial art focusing on self-defense that is based on harmonising your movement and intention with that of an aggressive attack." />
      <outline text="Capoeira" _note="8662c76c-b73e-4429-af33-90a122064cf6 | capoeira | Capoeira is a Brazilian martial art that combines elements of dance, acrobatics and music." />
      <outline text="Ju-Jitsu" _note="75f342fd-a42a-4c64-b583-c08a43ff4c94 | jujitsu | A defensive martial art." />
      <outline text="Judo" _note="1653aaaf-cb1e-4611-b45e-95a32d4a7db5 | judo | Judo is an dynamic combat sport represented in the Olympics." />
      <outline text="Karate" _note="50e6f8dc-59a8-4899-af75-7ac344a85a06 | karate | Karate is a striking martial art" />
      <outline text="Kickboxing" _note="6901af47-aed9-45e4-8d9f-fc71199a64df | kickboxing | Kickboxing is a martial art that predominately involves kicking." />
      <outline text="Kobudo" _note="657aa7cf-d879-498d-93c2-f762ffaac5e9 | kobudo | Kobudo is a multi-weapon martial art." />
      <outline text="Krav Maga" _note="6fd10510-8569-4759-b876-58d51c2e5c0b | krav_maga | " />
      <outline text="Kung Fu" _note="831828a2-b7de-4a6a-81dd-0bec66ba1163 | kung_fu | Kung Fu is a Chinese Martial Art used for self-defense." />
      <outline text="Lishi" _note="11b06df1-ccf5-4176-b1be-b4c39c5377c7 | lishi | " />
      <outline text="Mixed Martial Arts" _note="38fb5265-2234-4499-b930-ee6d132f72d8 | mixed_martial_arts | Mixed Martial Arts is a full-contact combat sport" />
      <outline text="Muay Thai" _note="a570d2bd-f6e3-4838-9c7f-cb5c458dcd19 | muay_thai | Muay Thai is a form of martial arts and orginates from Thailand." />
      <outline text="Ninjutsu" _note="704a7e7f-8a3b-411f-8c9e-175815eaddaf | ninjutsu | Ninjitsu is the ancient art of the ninja shadow warriors of Japan." />
      <outline text="Self Defence" _note="1b88144e-91cf-4642-8e6a-8e4524f7c56f | self_defence | " />
      <outline text="Systema" _note="84448fa6-6e63-49dc-8659-737bd6b24710 | systema | " />
      <outline text="Taekwondo" _note="9bc83d83-c651-4f37-b7e8-8ae4885d1899 | taekwondo | Taekwondo is a Korean martial art." />
      <outline text="Tai Chi" _note="c16df6ed-a4a0-4275-a8c3-1c8cff56856f | tai_chi | Tai chi combines deep breathing and relaxation with slow and gentle movements." />
      <outline text="Wushu" _note="18974180-5901-4297-95b3-f6d7147e106c | wushu | " />
    </outline>
    <outline text="Modern Pentathlon" _note="ae5a96a7-b4a6-417b-b0f6-7e863bae02de | modern_pentathlon | Modern Pentathlon is a multi-discipline sport" />
    <outline text="Motor Sport" _note="41cab644-c5c3-4029-96fe-0ebe658c15c3 | motor_sport | Motorsport is a group of motorised racing sports.">
      <outline text="Motor Cycling" _note="fa7229ad-8aa1-4a02-b8aa-c19ba2ebdc34 | motor_cycling | " />
      <outline text="Speedway" _note="cdf2c689-1d5c-4b09-b155-9887e468bf1b | speedway | Speedway bikes have no brakes, just one gear, a clutch and 500cc engines which run on methanol fuel" />
    </outline>
    <outline text="Mountain Biking" _note="8302ec84-3d0b-44cb-b622-254596d37086 | mountain_biking | Mountain biking involves cycling off road." />
    <outline text="Mountaineering" _note="5fba2a76-07ee-4f99-b243-018245b0200d | mountaineering | A combination of hill walking and scrambling to climb a mountain" />
    <outline text="Netball" _note="fbdc35a8-3dd0-40ee-a7ca-6ff40b3e5f90 | netball | Netball is a team game which involves shooting a ball through a hoop" />
    <outline text="Obstacle Course Racing" _note="5ce47e82-8db6-4610-b8d1-9ba407a8f2af | obstacle_course_racing | " />
    <outline text="Octopush" _note="de9d4baf-b19e-4cb3-a7fc-c9ea9c83ac88 | octopush | Octopush is underwater hockey" />
    <outline text="Orienteering" _note="b2d5619e-56a7-4c40-b691-7f946f6ff5df | orienteering | Orienteering is a challenging outdoor adventure sport" />
    <outline text="Paintball" _note="94bd797c-839b-4aa6-a717-c6465832c854 | paintball | " />
    <outline text="Parachuting" _note="74d78e37-1a40-4856-8dcb-db356e1b8b4c | parachuting | " />
    <outline text="Parkour" _note="293f2c7f-19fd-4db1-921c-e37867ae9839 | parkour | Parkour / Freerunning / Art du Deplacement is the non-competitive physical discipline of training to move freely over and through any terrain using only the abilities of the body, principally through running, jumping, climbing and quadrupedal movement." />
    <outline text="Petanque" _note="fc435509-332a-41db-b204-0da4153cf4f6 | petanque | Pétanque is a form of boules normally played on hard dirt or gravel" />
    <outline text="Pickleball" _note="d354b58e-0c97-47c8-92cb-937b91d56eef | pickleball | A paddle sport created for all ages and skill levels. The rules are simple and the game is easy for beginners to learn, but can develop into a quick, fast-paced, competitive game for experienced players." />
    <outline text="Polo" _note="7c025ef0-a1a5-4783-9e74-0eedbc7e2983 | polo | Equestrian team sport." />
    <outline text="Polocrosse" _note="b6dfca91-022a-4880-aec8-47962e077a1f | polocrosse | " />
    <outline text="Polybat" _note="e59508cf-67d1-4364-9cc4-e866f1f51405 | polybat | Polybat endeavours to provide youngsters with more severe impairments, who cannot play recreational table tennis, with a suitable bat/ball net type game (with the net removed)." />
    <outline text="Pool" _note="eaa5a9bc-c23d-4643-80d9-8691646545be | pool | " />
    <outline text="Powerkiting" _note="16640aee-2d2e-41c9-92e2-175f605d308f | powerkiting | " />
    <outline text="Quoits" _note="76f7d884-ca72-4005-a5cb-47cc00649c7c | quoits | " />
    <outline text="Racketball" _note="32225241-1c8c-4ba3-b540-22b710433c18 | racketball | Racketball is played on any regular squash court and is similar to squash." />
    <outline text="Rafting" _note="f508fd6d-26ea-4004-b489-6ae1fadb14e4 | rafting | ">
      <outline text="White Water Rafting" _note="2ba0661d-fd28-479d-b00c-d48264330c68 | white_water_rafting | White water rafting is a sport which uses an inflatable raft to navigate a rough river with a team steered by a tour guide at the stern." />
      <outline text="Wild Water Rafting" _note="3cdf195b-a971-4dfa-9602-c2c24da2100c | wild_water_rafting | " />
    </outline>
    <outline text="Real Tennis" _note="ef19cbfc-1e0a-4d1e-9a63-cec70474d322 | real_tennis | " />
    <outline text="Roller Blading" _note="7e5cb3ee-8c91-4f85-8c97-e335e0013eb3 | roller_blading | Travelling using skates with wheels." />
    <outline text="Roller Derby" _note="c73c51cd-bf1f-4f96-b16a-c06bcfabd844 | roller_derby | Roller Derby is an all-girl contact sports." />
    <outline text="Roller Hockey" _note="f2b21bb0-07a1-4333-9ae3-bd8d089c9490 | roller_hockey | Roller hockey is a form of hockey played on a dry surface using roller skates, skates with wheels." />
    <outline text="Rollerskiing" _note="36a18949-a10f-4161-9ac0-2fb7ae7f250f | rollerskiing | Roller skiing is an off-snow equivalent to cross-country skiing that takes place on smooth surfaces such as paths in parks, safe roads and cycle tracks." />
    <outline text="Ropes Courses" _note="cd8341ce-fea2-4deb-a835-b376921a2124 | ropes_course |  A ropes course is a challenging personal development and team building activity which usually consists of high and/or low elements.">
      <outline text="High Ropes" _note="b4096db9-024b-4918-8aa5-7b3085d298fc | high_ropes | A high course can be a pre-fabricated, professionally installed course, built of utility poles, cables, and bolts, or it can be a course that is hand-built in a wooded area, where ropes and wire are attached to different trees." />
      <outline text="Low Ropes" _note="0b08f2d0-8833-44ce-9686-e3792886c7a2 | low_ropes | Low ropes courses consist of a series of real and imaginary obstacles designed to challenge groups and individuals to work together to accomplish a task." />
    </outline>
    <outline text="Rounders" _note="212e6f20-e6f7-4724-96dc-b5a51f913380 | rounders | The sport of Rounders is a fun, exciting, striking and fielding team game, where points known as 'Rounders' are scored by a player hitting a ball and then completing a circuit of the track." />
    <outline text="Rowing" _note="d2733a1c-662c-427a-a270-400171c07320 | rowing | Rowing can be either recreational or competitive, indoor or outdoor." />
    <outline text="Rugby League" _note="a7f0a364-a496-4446-aec6-594a629353b3 | rugby_league | Rugby league is a full contact game, played by two teams of 13 players.">
      <outline text="Tag Rugby League" _note="31d6ca75-4844-4899-8da7-a61ca9d10c5f | tag_rugby_league | " />
      <outline text="Touch Rugby League" _note="71b5aaaa-72d7-43c5-82d8-3157021e7cb6 | touch_rugby_league | " />
    </outline>
    <outline text="Rugby Union" _note="9e143963-8f17-41ab-8915-3828c5a9ddae | rugby_union | Rugby union is a contact sport where aim is to use the ball to score more points than the other team.">
      <outline text="Rugby Sevens" _note="d82e0c3c-4c91-4da9-9b2d-05915c6d8965 | rugby_sevens | " />
      <outline text="Tag Rugby Union" _note="ddea86a8-e3c5-4a95-adea-9ec2c909bdba | tag_rugby_union | " />
      <outline text="Touch Rugby Union" _note="dc8b8b2b-0a83-403f-863a-4ec05ebb2410 | touch_rugby_union | Touch rugby differs from rugby through the method of tackling which involves touching the opponents using their hands on any part of the body, clothing, or the ball." />
    </outline>
    <outline text="Running" _note="72ddb2dc-7d75-424e-880a-d90eabe91381 | running | Running is a form of exercise that can be done at anytime and anywhere.">
      <outline text="Fell Running" _note="90346371-03e3-47c8-a25d-07e976b4a4c8 | fell_running | " />
    </outline>
    <outline text="Sailing" _note="6bb8b844-df3e-4cae-bf5f-3e129c6b1a9d | sailing | Sailing and windsurfing are two great sports for getting you active and energetic, outside in the fresh air.">
      <outline text="Powerboating" _note="72fa98e5-9129-4c7a-b4f3-f5cec788b719 | powerboating | " />
      <outline text="Sailability" _note="d440bf42-cdf0-4cc5-a61e-128625532648 | sailability | Sailing is one of the very few sports in which able-bodied sailors and disabled sailors can participate on equal terms." />
    </outline>
    <outline text="Scuba Diving" _note="6c1fed1c-7576-4b04-acfd-ca1d1cac6707 | scuba_diving | Scuba diving is a form of underwater diving in which a diver uses a self-contained underwater breathing apparatus (scuba) to breathe underwater." />
    <outline text="Shinty" _note="d279360d-4c00-42c0-816e-be361ce5cd19 | shinty | " />
    <outline text="Shooting" _note="36359d6f-33ab-44c3-80c0-4076b57c9fed | shooting | Target shooting today is a popular sport, comprising over 41 different disciplines across 3 main categories (Fullbore Rifle &amp;amp; Pistol, Small-bore Rifle &amp;amp; Pistol, and Shotgun)">
      <outline text="Air" _note="f1d9b809-d7fd-4c9b-9e16-c9b090377521 | air | " />
      <outline text="Airgun" _note="a202df8a-a1b1-46c3-bdd8-4e72e4f6ec1e | airgun | " />
      <outline text="Clay Pigeon" _note="0a9e77ca-ef73-4221-abd9-c3d1485d6ec6 | clay_pigeon | Clay pigeon shooting is the art of shooting at special flying targets with a shotgun." />
      <outline text="Clay Target" _note="c62b4571-d717-47a8-978a-453a175e049e | clay_target | " />
      <outline text="Crossbow" _note="3c6a077b-da02-4519-aa87-b2a114669f56 | crossbow | " />
      <outline text="Muzzle loading" _note="b9f1a766-fdb8-4bb4-9a9d-b86317b20819 | muzzle_loading | " />
      <outline text="Pistol" _note="b4eeb751-9e31-4308-9296-1c7965fbef40 | pistol | " />
      <outline text="Rifle" _note="d1bee9bf-b637-4e7a-bb73-1425047744fe | rifle | " />
      <outline text="Shotgun" _note="a653dcda-a3b4-4a68-9d00-87b0b4335c66 | shotgun | " />
      <outline text="Target Shooting" _note="1f6438b9-d1da-46b3-aa6d-3cd140391567 | target_shooting | " />
    </outline>
    <outline text="Skateboarding" _note="50feff1b-790f-4f0f-9c07-0314557897c4 | skateboarding | Skateboarding is an action sport which involves riding and performing tricks using a skateboard." />
    <outline text="Skeleton Racing" _note="eed5e947-6e67-44e8-a0c0-c5c640e1edbe | skeleton_racing | " />
    <outline text="Skiing" _note="3a25e627-27b4-4f2b-ae93-4caf8278b02c | skiing | Skiing is a popular sport that takes place on snow, artificial surfaces and more recently, on indoor artificial snow slopes. It can be undertaken as a leisure activity or competitive sport and is suitable for most ages.">
      <outline text="Alpine Ski Racing" _note="5ab8e88a-fbec-4ff7-b878-dff1ca0ba841 | alpine_ski_racing | " />
      <outline text="Alpine Skiing" _note="f21b5af1-e230-47d4-a58a-858caee30691 | alpine_skiing | " />
      <outline text="Cross Country Skiing" _note="f9b01e23-68b4-4a60-a2d3-2efcd248ba7c | cross_country_skiing | " />
      <outline text="Nordic Skiing" _note="9bb258e2-57f2-423e-8dd8-a3796df1cfd1 | nordic_skiing | " />
    </outline>
    <outline text="Snooker" _note="ee7fa47c-617b-44ac-88fa-ef7b7ae03516 | snooker | Snooker is played using a cue and 22 snooker balls" />
    <outline text="Snorkelling" _note="84cfc236-7934-4668-9206-dbd753254a20 | snorkelling | " />
    <outline text="Snowboarding" _note="7baa967e-87db-4346-84f8-5045ed49fd6a | snowboarding | Snowboarding combines elements of skiing, skateboarding and surfing.">
      <outline text="Freestyle Snowboarding" _note="23fe7a44-f2f8-47d0-bc25-f381a99632a4 | freestyle_snowboarding | " />
      <outline text="Snowboard Racing" _note="e384bb86-3236-4881-8d32-69ea44331a8d | snowboard_racing | " />
    </outline>
    <outline text="Softball" _note="ec1475e3-6ae4-4187-a492-8f821fbc2faa | softball | Softball is a direct descendant of Baseball, only the ball is bigger and the game is more fun." />
    <outline text="Sombo" _note="9f80ffea-d562-4118-a767-c03095bdfd27 | sombo | " />
    <outline text="Squash" _note="b7845b8a-4c0c-4a8f-93d3-d41d62eec889 | squash | The game is played by two players (or four players for doubles) with standard rackets in a four-walled court with a small hollow rubber ball." />
    <outline text="Stoolball" _note="2492ce31-e85c-4ba4-b11b-f497bf7598b5 | stoolball | Stoolball is a team sport, similar to Twenty20 cricket." />
    <outline text="Surfing" _note="ba5381a0-c981-4879-9b44-8b18e922c412 | surfing | Surfing is a surface water sport in which a person rides on a moving wave on a surf board.">
      <outline text="Board Surfing" _note="743dcd77-ea4b-4399-bc5c-ccb9b0fb8520 | board_surfing | " />
      <outline text="Body Boarding" _note="f5d80681-f6e0-487e-8173-ed2a7c277347 | body_boarding | " />
      <outline text="Body Surfing" _note="4e91a965-67da-4135-8787-4bfe3bd1a6e2 | body_surfing | " />
      <outline text="Stand Up Paddleboarding" _note="12e7315a-3182-415b-aaf3-923d23adfdf8 | stand_up_paddleboarding | Unlike traditional surfing where the rider is sitting until a wave comes, stand up paddle boarders maintain an upright stance on their boards and use a paddle to propel themselves through the water." />
    </outline>
    <outline text="Swimming" _note="2750229d-b725-4171-9276-376be913957c | swimming | Swimming is an excellent form of exercise as it gives a full-body workout.">
      <outline text="Synchronised Swimming" _note="35bf3588-f547-482f-a6f2-3e42cbc9691e | synchronised_swimming | Synchronised swimming (synchro) is an exciting mixture of swimming, dance and gymnastics performed mostly by women." />
      <outline text="Swimming Lessons" _note="dfaf6bb4-d2fe-4db5-a271-4ceeaaaf55b9 | swimming_lessons | " />
      <outline text="Swimfit" _note="2571c4c2-a3bd-4a53-b6f5-d3ae296968d6 | swimfit | Swimfit provides everything you need to motivate, challenge and support you to reach your fitness goals. Whether that is to lose weight, to tone, to improve technique or just to become fitter and stronger." />
    </outline>
    <outline text="Table Tennis" _note="1a05993d-b206-4efe-85da-646fa340bdf4 | table_tennis | Table tennis is an Olympic sport where two for four players hit a ball with paddles back and forth to each other on a table which is divided with a net." />
    <outline text="Tang Soo Do" _note="a05b8aae-2dd1-4869-89a4-6255b197be77 | tang_soo_do | " />
    <outline text="Tchoukball" _note="2042c328-e002-4055-81d3-9c07a7b2c2f4 | tchoukball | Tchoukball is a fast and exciting sport that is typically played indoors however beach, grass and wheel chair versions are great alternatives" />
    <outline text="Ten-Pin Bowling" _note="1caf9e44-b0b0-43ed-82e3-066f45637d07 | tenpin_bowling | The player rolls a ball to knock over as many pins as possible." />
    <outline text="Tennis" _note="f2ea7405-6098-4378-b0fe-4e398a659fc4 | tennis | Tennis involves hitting a ball over a net using a racket.">
      <outline text="Deaf Tennis" _note="868ff4fe-9fdf-4b94-9bb3-52b1acb80740 | deaf_tennis | Deaf tennis has a long history in British tennis and playing the sport requires no adaption apart from making sure communication is clear between players, coaches and officials." />
      <outline text="Padel Tennis" _note="178ac9d5-9042-41e4-b8b9-12edf824afbf | padel_tennis | The sport is derived from tennis, and the name comes from the English word paddle, referring to the paddles players use during play." />
      <outline text="Visually Impaired Tennis" _note="36295b69-22b9-4554-8a87-6ba7ae75426d | visually_impaired_tennis | " />
      <outline text="Wheelchair Tennis" _note="7aa2af56-7454-4061-919e-21be6e3a6a4d | wheelchair_tennis | " />
    </outline>
    <outline text="Tobagganing" _note="6c572662-df79-44cf-a4f0-19bb0c8dbd73 | tobagganing | " />
    <outline text="Trampolining" _note="0082b27f-8be5-4ade-ae1f-5f0b2be9e164 | trampolining | Trampolining is a competitive Olympic sport in which gymnasts perform acrobatics while bouncing on a trampoline. | related:trampoline_fitness" />
    <outline text="Triathlon" _note="c4e6c711-66fc-438e-b206-1dfdddc2d912 | triathlon | Triathlon is an exciting multi-discipline sport made up of a swim, then a bike ride and then a run.">
      <outline text="Aquathlon" _note="9fee9fb7-9279-4b79-806e-0dc78782e308 | aquathlon | The sport of aquathlon consists of a continuous, two-stage race involving swimming followed by running." />
      <outline text="Duathlon" _note="7a0d4399-d7a2-43e4-b9dc-5bf88c7a7eea | duathlon | " />
      <outline text="Aquabike" _note="4b8ca2a9-1758-4bcf-bc63-4c39f6d3ecab | aquabike" />
      <outline text="Run/Bike" _note="0bf97666-e55f-4f16-a709-84b433d67612 | run_bike" />
    </outline>
    <outline text="Tug Of War" _note="3ecfe343-9570-4d21-86f2-2bd9c46b4951 | tug_of_war | The object is to pull the opposing team a distance of four metres." />
    <outline text="Ultimate Frisbee" _note="8088e8a5-2b29-4e64-a1b2-857576e36818 | ultimate_frisbee | Ultimate is an exciting, non-contact team sport." />
    <outline text="Volleyball" _note="065c8564-144a-4833-b95a-db8550e6ac86 | volleyball | Volleyball is an Olympic team sport in which two teams of 6 players are separated by a net.">
      <outline text="Beach Volleyball" _note="1731f73f-ed27-487c-86fc-d76fc2cf7984 | beach_volleyball | Beach Volleyball is a variation of Volleyball that takes place on sand instead of a hard court." />
      <outline text="Indoor Volleyball" _note="4a2ba988-045a-45d0-91a8-dbbfb33886b7 | indoor_volleyball | " />
      <outline text="Sitting Volleyball" _note="ba8f0f90-de5e-4abf-88a8-6d1a7c1e0f91 | sitting_volleyball | Sitting volleyball has grown to be one of the more popular Paralympic sports due to the fast and exciting action." />
    </outline>
    <outline text="Wakeboarding" _note="a11b2b1f-e0cd-4dd0-af89-498662f00cc1 | wakeboarding | Wakeboarding is a surface water sport which involves riding a wakeboard over the surface of a body of water.">
      <outline text="Knee Boarding" _note="62883bb1-ea39-401b-a277-06cbf56915b6 | knee_boarding | " />
    </outline>
    <outline text="Walking" _note="95092977-5a20-4d6e-b312-8fddabe71544 | walking | Walking is the easiest, most accessible, cost effective, and enjoyable way for most people to increase their physical activity. | altLabel:Rambling">
      <outline text="Dog Walking" _note="e82ea1b1-2b4f-4269-a4f9-42190e502754 | dog_walking | " />
      <outline text="Fell Walking" _note="1f198adc-d97b-410e-b661-e439be962155 | fell_walking | " />
      <outline text="Hiking" _note="619f374a-c1b6-48d2-aabe-a01b6dedb9fd | hiking | " />
      <outline text="Hill Walking" _note="f6ec0ab4-6855-48d5-90ad-da87d70c2715 | hill_walking | " />
      <outline text="Mountain Walking" _note="428391c1-a75a-49aa-b777-56a1c966cc37 | mountain_walking | " />
      <outline text="Nordic Walking" _note="c72e1713-25c1-4886-926a-4cd549bb4916 | nordic_walking | " />
      <outline text="Power Walking" _note="26e6e5bb-b316-4e8f-9575-8036a002d0f1 | power_walking | " />
    </outline>
    <outline text="Wallball" _note="5edd0b4a-e4cb-40e7-bd90-28d47f914ed0 | wallball | Wallball is a sport in which players compete by hitting a ball against a wall with their hands. It is played all over the world and after being accepted as an official World Games sport." />
    <outline text="Water Polo" _note="91cef809-04e9-424c-9c33-487c91d651fa | water_polo | Water polo is a fast-paced sport played by two teams in a swimming pool." />
    <outline text="Water Skiing" _note="ba9a2508-fbc7-4cd2-bf5a-398211ba88a4 | water_skiing | " />
    <outline text="Weightlifting" _note="8e2dcbed-9ec9-46b0-a1c8-af2a4d0d2e01 | weightlifting | Olympic Weight Lifting is one of the world's oldest competitive sports.">
      <outline text="Clean and Jerk" _note="1bf1695a-d0e9-4c2c-8a02-8853ab619324 | clean_and_jerk | " />
      <outline text="Powerlifting" _note="b4ededac-c921-47a8-a689-23fbdecab8d8 | powerlifting | " />
      <outline text="Snatch" _note="04f7b51f-752c-4856-8d11-87da39ac4dad | snatch | " />
    </outline>
    <outline text="Wheelchair Rugby" _note="12c9d7fd-4365-4603-b338-6d88c21169f3 | wheelchair_rugby | As one of the only full-contact disability sports, it is little wonder wheelchair rugby, aka 'murderball' was one of the biggest hits of the London 2012 Paralympic Games." />
    <outline text="Windsurfing" _note="76282a7a-11cf-4da7-86f1-b0f192dd0f56 | windsurfing | Windsurfing is a surface water sport that combines elements of surfing and sailing." />
    <outline text="Wrestling" _note="88ba0d3d-ce9e-4ee7-a6e5-2f16c944bfac | wrestling | Wrestling is a sport as old as mankind itself. Since the dawn of time men have been pitted against each other in physical hand-to-hand combat, making this almost certainly the most ancient of Olympic sports." />
  </body>
  
`;
 


function outlineToConcept(outline, parentId) {
  var prefLabel = outline.attributes.text;
  var notes = outline.attributes._note ? outline.attributes._note.split("|").map(x => x.trim()) : [];
  var [id, notation, definition, tagString] = notes;
  if (tagString) {
    var tags = tagString.split(";").map(x => x.trim());
    var related = tags.filter(x => (x.split(":")[0] == "related")).map(x => x.split(":")[1]);
    var altLabel = tags.filter(x => (x.split(":")[0] == "altLabel")).map(x => x.split(":")[1].replace("\"",""));
    var hiddenLabel = tags.filter(x => (x.split(":")[0] == "hiddenLabel")).map(x => x.split(":")[1].replace("\"",""));
  }

  var concept = conceptKey[notation] ? conceptKey[notation] : {
    "id": "https://openactive.io/activity-list#" + id,
    "inScheme": [ "https://openactive.io/activity-list" ],
    "notation": notation,
    "type": "Concept",
    "prefLabel": prefLabel
  };

  if (definition) concept.definition = definition;
  if (related && related.length > 0) concept.related = related;
  if (altLabel && altLabel.length > 0) concept.altLabel = altLabel;
  if (hiddenLabel && hiddenLabel.length > 0) concept.hiddenLabel = hiddenLabel;
  if (parentId) {
    if (concept.broader) {
      concept.broader.push("https://openactive.io/activity-list#" + parentId);
    } else {
      concept.broader = [ "https://openactive.io/activity-list#" + parentId ];
    }
  } else {
    concept.topConceptOf = "https://openactive.io/activity-list";
  }

  if (!conceptKey[notation]) {
    conceptList.push(concept);
    conceptKey[notation] = concept;
  }

  if (outline.children.length > 0) {
    var children = outline.children.filter(x => x.attributes._complete != "true");
    concept.narrower = children.map(x => outlineToConcept(x, id));
  }

  return concept;
}

var conceptTree = [];
var conceptList = [];
var conceptKey = {};

reader.on('tag:outline', (data) => {
  if (data.attributes._complete != "true") {
    //console.log(data);
    conceptTree.push(outlineToConcept(data));
  }  
});
// {name: 'item', type: 'element', value: '', attributes: {v: '1'}, children: []}
// {name: 'item', type: 'element', value: '', attributes: {v: '2'}, children: []}
// {name: 'item', type: 'element', value: '', attributes: {v: '3'}, children: []}

/*var treeConfig = {
  "hasTopConcept": [ "high_jump" ],
  "restrictions": {
    "flag_football": "flatten",
    "flag_football": "exclude", 
    "flag_football": "exclude_narrower" 
  }
}*/

reader.on('done', (data) => {
  conceptList.map(x => {
    if (x.related) {
      x.related = x.related.map(x => conceptKey[x] ? conceptKey[x].id : "UNMATCHED:" + x);
    }
    return x;
  })

  var activityTree = {
    "context": "https://www.openactive.io/ns/oa.jsonld",
    "id": "https://openactive.io/activity-list/activity-list.jsonld",
    "title": "OpenActive Activity List",
    "description": "This document describes the OpenActive standard activity list.",
    "type": "ConceptScheme",
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "concept": conceptTree
  }

  var activityListOLD = {
    "@context": "https://www.openactive.io/ns/oa.jsonld",
    "id": "https://api.example.com/activities",
    "type": "Collection",
    "totalItems": conceptList.length,
    "item": conceptList
  }

  var activityList = {
    "context": "https://openactive.io/",
    "id": "https://openactive.io/activity-list",
    "title": "OpenActive Activity List",
    "description": "This document describes the OpenActive standard activity list.",
    "type": "ConceptScheme",
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "concept": conceptList
  }

  var conceptFields = ["id", "notation", "type", "prefLabel", "altLabel", "hiddenLabel", "related", "definition", "topConceptOf"];
  var activityListFields = Object.keys(activityList).concat(conceptFields).concat(["broader"]);
  var activityTreeFields = Object.keys(activityTree).concat(conceptFields).concat(["narrower"]);

  if (process.argv[2] == "list") console.log(JSON.stringify(activityList, activityListFields, 2));
  if (process.argv[2] == "tree") console.log(JSON.stringify(activityTree, activityTreeFields, 2));
});

  
// 0
 
reader.parse(xml);