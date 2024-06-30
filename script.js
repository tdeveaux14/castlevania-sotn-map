function getLatLng(event) {
  'use strict';
  console.log('%d.5, %d.5', event.latlng.lat, event.latlng.lng);
}

function main(url) {
  'use strict';
  const bounds = [
    [0, 0],
    [189, 241]
  ];
  const map_1 = L.imageOverlay('map_1.png', bounds);
  const map_1_debug = L.imageOverlay('map_1_debug.png', bounds);
  const map_2 = L.imageOverlay('map_2.png', bounds);
  const map_2_debug = L.imageOverlay('map_2_debug.png', bounds);
  const map_1_secrets = L.imageOverlay('map_1_secrets.png', bounds);
  const map_2_secrets = L.imageOverlay('map_2_secrets.png', bounds);
  const map_1_spikes = L.layerGroup([
    L.marker([146.5, 40.5]).bindTooltip('Spikes'),
    L.marker([146.5, 124.5]).bindTooltip('Spikes'),
    L.marker([6.5, 162.5]).bindTooltip('Spikes')
  ]);
  const map_2_spikes = L.layerGroup([
    L.marker([42.5, 200.5]).bindTooltip('Spikes')
  ]);
  let i = 0;
  let items = [
    [182.5, 146.75, 'life_max_up', 26, 28, 'Life max up', 1],
    [182, 134.5, 'platinum_mail', 28, 20, 'Platinum mail', 1],
    [181.5, 126.5, 'sirloin', 28, 26, 'Sirloin', 1],
    [181.5, 127.25, 'turkey', 28, 28, 'Turkey', 1],
    [181.5, 128, 'pot_roast', 28, 28, 'Pot roast', 1],
    [181.5, 128.75, 'frankfurter', 26, 24, 'Frankfurter', 1],
    [181.5, 132.5, 'resist_stone', 16, 26, 'Resist stone', 1],
    [181.5, 133, 'resist_dark', 16, 26, 'Resist dark', 1],
    [181.5, 133.5, 'resist_holy', 16, 26, 'Resist holy', 1],
    [181.5, 148.75, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [180, 148.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [179.5, 147, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [178.5, 150, 'card', 26, 28, 'Ghost Card', 1],
    [174.5, 151, 'falchion', 28, 28, 'Falchion', 1],
    [173.5, 132.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [169.5, 118.25, 'fire_mail', 28, 28, 'Fire mail', 1],
    [169.5, 118.75, 'power_of_mist', 28, 28, 'Power of Mist', 1],
    [169.5, 195.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [169.5, 201.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [167.5, 159.5, 'shuriken', 20, 16, 'Shuriken', 1],
    [167.5, 165.5, 'tnt', 28, 18, 'TNT', 1],
    [165.5, 162.5, 'bwaka_knife', 26, 28, 'Bwaka knife', 1],
    [164.5, 104.5, 'cutlass', 28, 24, 'Cutlass', 1],
    [163.5, 185.5, 'pot_roast', 28, 28, 'Pot roast', 1],
    [162.5, 151.5, 'tyrfing', 28, 28, 'Tyrfing', 1],
    [162.5, 162.5, 'healing_mail', 26, 22, 'Healing mail', 1],
    [161.5, 102.5, 'potion', 20, 26, 'Potion', 1],
    [161.5, 118.25, 'turkey', 28, 28, 'Turkey', 1],
    [161.5, 118.75, 'turquoise', 14, 16, 'Turquoise', 1],
    [161.5, 231.5, 'fire_of_bat', 28, 28, 'Fire of Bat', 1],
    [160.5, 72.5, 'zircon', 14, 16, 'Zircon', 1],
    [159.5, 119, 'leap_stone', 28, 24, 'Leap Stone', 1],
    [156.5, 52.5, 'silver_plate', 28, 20, 'Silver plate', 1],
    [154.5, 212.5, 'shaman_shield', 22, 28, 'Shaman shield', 1],
    [154.5, 213.5, 'bekatowa', 28, 28, 'Bekatowa', 1],
    [154.5, 214.5, 'ice_mail', 28, 24, 'Ice mail', 1],
    [153.5, 50.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [153.5, 54.5, 'str._potion', 16, 28, 'Str. potion', 1],
    [150.5, 189.5, 'star_flail', 30, 30, 'Star flail', 1],
    [150.5, 190.5, 'gold_plate', 28, 20, 'Gold plate', 1],
    [150.5, 191.5, 'steel_helm', 22, 22, 'Steel helm', 1],
    [149.5, 214.5, 'pentagram', 28, 28, 'Pentagram', 1],
    [149.5, 219.5, 'magic_missile', 28, 28, 'Magic Missile', 1],
    [147.5, 113.5, 'estoc', 28, 28, 'Estoc', 1],
    [146.5, 234.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [145.5, 27.5, 'silver_ring', 18, 18, 'Silver Ring', 1],
    [142.5, 58.5, 'echo_of_bat', 28, 28, 'Echo of Bat', 1],
    [141.5, 83.5, 'iron_ball', 20, 20, 'Iron ball', 1],
    [138.5, 134, 'luck_potion', 20, 20, 'Luck potion', 1],
    [135.5, 238.5, 'soul_of_wolf', 28, 28, 'Soul of Wolf', 1],
    [134.5, 74.5, 'card', 26, 28, 'Sword Card', 1],
    [134.5, 126.5, 'garnet', 14, 16, 'Garnet', 1],
    [133.5, 190.5, 'stone_mask', 16, 22, 'Stone mask', 1],
    [133.5, 195.25, 'topaz_circlet', 20, 12, 'Topaz circlet', 1],
    [133.5, 195.75, 'holy_rod', 28, 28, 'Holy rod', 1],
    [133.5, 201.25, 'card', 26, 28, 'Faerie Card', 1],
    [133.5, 201.75, 'potion', 20, 26, 'Potion', 1],
    [133.5, 202.25, 'antivenom', 20, 26, 'Antivenom', 1],
    [133.5, 230.5, 'faerie_scroll', 20, 28, 'Faerie Scroll', 1],
    [130.5, 78.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [130.5, 134, 'resist_fire', 16, 26, 'Resist fire', 1],
    [128.5, 134, 'manna_prism', 12, 28, 'Manna prism', 1],
    [126.5, 69.5, 'holy_sword', 26, 26, 'Holy sword', 1],
    [125.5, 189.25, 'life_max_up', 26, 28, 'Life max up', 1],
    [125.5, 189.75, 'jewel_of_open', 28, 28, 'Jewel of Open', 1],
    [123.5, 35.5, 'goggles', 28, 16, 'Goggles', 1],
    [122.5, 185, 'soul_of_bat', 28, 28, 'Soul of Bat', 1],
    [121.5, 28.5, 'morningstar', 28, 26, 'Morningstar', 1],
    [121.5, 58.5, 'grape_juice', 24, 28, 'Grape juice', 1],
    [121.5, 179, 'takemitsu', 26, 26, 'Takemitsu', 1],
    [121.5, 179.5, 'onyx', 14, 16, 'Onyx', 1],
    [121.5, 180.25, 'frankfurter', 26, 24, 'Frankfurter', 1],
    [121.5, 189.5, 'bronze_cuirass', 22, 18, 'Bronze cuirass', 1],
    [118.5, 67.5, 'library_card', 20, 20, 'Library card', 1],
    [118.5, 79.5, 'form_of_mist', 28, 28, 'Form of Mist', 1],
    [117.5, 50.5, 'knight_shield', 20, 28, 'Knight shield', 1],
    [117.5, 122.5, 'cheese', 28, 28, 'Cheese', 1],
    [117.5, 123, 'onyx', 14, 16, 'Onyx', 1],
    [117.5, 123.5, 'broadsword', 28, 28, 'Broadsword', 1],
    [116.5, 23.5, 'boomerang', 14, 28, 'Boomerang', 1],
    [113.5, 113.5, 'life_apple', 24, 22, 'Life apple', 1],
    [113.5, 114, 'hammer', 26, 26, 'Hammer', 1],
    [113.5, 114.5, 'potion', 20, 26, 'Potion', 1],
    [113.5, 130.5, 'gravity_boots', 24, 26, 'Gravity Boots', 1],
    [113.5, 230.5, 'gladius', 26, 26, 'Gladius', 1],
    [113.5, 238.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [112.5, 20.5, 'tnt', 28, 18, 'TNT', 1],
    [110.5, 17.5, 'ankh_of_life', 28, 30, 'Ankh of Life', 1],
    [110.5, 45.5, 'shield_rod', 26, 28, 'Shield rod', 1],
    [110.5, 99.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [110.5, 240, 'garnet', 14, 16, 'Garnet', 1],
    [109.5, 71.5, 'green_tea', 26, 28, 'Green tea', 1],
    [109.5, 74.5, 'blood_cloak', 24, 28, 'Blood cloak', 1],
    [108.5, 16.5, 'shuriken', 20, 16, 'Shuriken', 1],
    [106.5, 240.5, 'zircon', 14, 16, 'Zircon', 1],
    [105.5, 118.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [105.5, 126.25, 'alucart_shield', 26, 28, 'Alucart shield', 1],
    [105.5, 126.75, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [105.5, 130.25, 'alucart_mail', 28, 28, 'Alucart mail', 1],
    [105.5, 130.75, 'alucart_sword', 28, 28, 'Alucart sword', 1],
    [104.5, 12.5, 'magic_missile', 28, 28, 'Magic Missile', 1],
    [103.5, 149.5, 'zircon', 14, 16, 'Zircon', 1],
    [102.5, 9.5, 'mystic_pendant', 28, 24, 'Mystic pendant', 1],
    [102.5, 169.5, 'attack_potion', 20, 20, 'Attack potion', 1],
    [102.5, 171.5, 'library_card', 20, 20, 'Library card', 1],
    [101.5, 229.5, 'pot_roast', 28, 28, 'Pot roast', 1],
    [98.5, 46.5, 'card', 26, 28, 'Bat Card', 1],
    [98.5, 69.5, 'potion', 20, 26, 'Potion', 1],
    [98.5, 230.25, 'jewel_knuckles', 26, 28, 'Jewel knuckles', 1],
    [98.5, 230.75, 'mirror_cuirass', 28, 28, 'Mirror cuirass', 1],
    [97.5, 2.5, 'aquamarine', 14, 16, 'Aquamarine', 1],
    [97.5, 126.25, 'life_max_up', 26, 28, 'Life max up', 1],
    [97.5, 126.75, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [97.5, 134.5, 'bandanna', 26, 16, 'Bandanna', 1],
    [97.5, 138.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [92.5, 99.5, 'str._potion', 16, 28, 'Str. potion', 1],
    [90.5, 168, 'claymore', 28, 28, 'Claymore', 1],
    [89.5, 34.5, 'cloth_cape', 24, 28, 'Cloth cape', 1],
    [84.5, 97.5, 'hammer', 26, 26, 'Hammer', 1],
    [81.5, 58.5, 'sunglasses', 28, 18, 'Sunglasses', 1],
    [81.5, 122.5, 'holy_glasses', 22, 18, 'Holy glasses', 1],
    [80.5, 94.5, 'spirit_orb', 20, 28, 'Spirit Orb', 1],
    [78.5, 141.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [78.5, 172, 'library_card', 20, 20, 'Meal ticket', 1],
    [77.5, 38, 'resist_thunder', 16, 26, 'Resist thunder', 1],
    [77.5, 169, 'library_card', 20, 20, 'Meal ticket', 1],
    [77.5, 172, 'library_card', 20, 20, 'Meal ticket', 1],
    [76.5, 169, 'library_card', 20, 20, 'Meal ticket', 1],
    [76.5, 172, 'moonstone', 28, 28, 'Moonstone', 1],
    [74.5, 54.5, 'skill_of_wolf', 28, 28, 'Skill of Wolf', 1],
    [73.5, 175.5, 'gold_ring', 18, 18, 'Gold Ring', 1],
    [70.5, 57.5, 'basilard', 24, 10, 'Basilard', 1],
    [69.5, 38.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [65.5, 47.5, 'leather_shield', 22, 28, 'Leather shield', 1],
    [62.5, 68.5, 'cube_of_zoe', 24, 28, 'Cube of Zoe', 1],
    [62.5, 71.5, 'shield_potion', 20, 20, 'Shield potion', 1],
    [61.5, 42.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [61.5, 49.5, 'hide_cuirass', 22, 20, 'Hide cuirass', 1],
    [61.5, 147.5, 'shiitake', 20, 22, 'Shiitake', 1],
    [58.5, 143.5, 'shiitake', 20, 22, 'Shiitake', 1],
    [58.5, 146.5, 'toadstool', 24, 24, 'Toadstool', 1],
    [57.5, 74.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [57.5, 82.5, 'herald_shield', 24, 28, 'Herald shield', 1],
    [57.5, 95.5, 'pentagram', 28, 28, 'Pentagram', 1],
    [57.5, 109.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [57.5, 111.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [56.5, 145.5, 'nunchaku', 28, 28, 'Nunchaku', 1],
    [55.5, 13.5, 'holy_mail', 28, 26, 'Holy mail', 1],
    [55.5, 113.5, 'antivenom', 20, 26, 'Antivenom', 1],
    [54, 175.5, 'pot_roast', 28, 28, 'Pot roast', 1],
    [53.5, 4.5, 'power_of_wolf', 28, 28, 'Power of Wolf', 1],
    [53.5, 6.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [53.5, 62.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [53.5, 113, 'life_max_up', 26, 28, 'Life max up', 1],
    [53.5, 154.5, 'crystal_cloak', 24, 28, 'Crystal cloak', 1],
    [51.5, 88.5, 'secret_boots', 20, 22, 'Secret boots', 1],
    [49.5, 69.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [49.5, 167.5, 'resist_ice', 16, 26, 'Resist ice', 1],
    [49.5, 175.5, 'broadsword', 28, 28, 'Scimitar', 1],
    [46.5, 85.5, 'shiitake', 20, 22, 'Shiitake', 1],
    [45.5, 40.5, 'pot_roast', 28, 28, 'Pot roast', 1],
    [45.5, 70.5, 'turkey', 28, 28, 'Turkey', 1],
    [42.5, 34.5, 'life_apple', 24, 22, 'Life apple', 1],
    [42.5, 50.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [42.5, 63.5, 'shiitake', 20, 22, 'Shiitake', 1],
    [42.5, 138.25, 'peanuts', 18, 22, 'Peanuts', 1],
    [42.5, 138.75, 'peanuts', 18, 22, 'Peanuts', 1],
    [42.5, 139.25, 'peanuts', 18, 22, 'Peanuts', 1],
    [42.5, 139.75, 'peanuts', 18, 22, 'Peanuts', 1],
    [42.5, 141, 'turkey', 28, 28, 'Turkey', 1],
    [42.5, 143.5, 'ring_of_ares', 18, 28, 'Ring of Ares', 1],
    [42.5, 173, 'onyx', 14, 16, 'Onyx', 1],
    [41.5, 33.5, 'jewel_sword', 26, 28, 'Jewel sword', 1],
    [41.5, 137.5, 'power_of_sire', 28, 28, 'Power of Sire', 1],
    [41.5, 138.5, 'barley_tea', 22, 28, 'Barley tea', 1],
    [41.5, 214.5, 'holy_symbol', 22, 28, 'Holy Symbol', 1],
    [40, 153.5, 'knuckle_duster', 26, 20, 'Knuckle duster', 1],
    [39.5, 85.5, 'toadstool', 24, 24, 'Toadstool', 1],
    [39.5, 162.5, 'life_max_up', 26, 28, 'Life max up', 1],
    [39.5, 201.5, 'elixir', 22, 26, 'Elixir', 1],
    [37.5, 26, 'merman_statue', 28, 28, 'Merman Statue', 1],
    [37.5, 95, 'life_max_up', 26, 28, 'Life max up', 1],
    [29.5, 109.5, 'card', 26, 28, 'Demon Card', 1],
    [22.5, 121.5, 'shiitake', 20, 22, 'Shiitake', 1],
    [20.5, 124.5, 'shiitake', 20, 22, 'Shiitake', 1],
    [14.5, 117.5, 'combat_knife', 24, 10, 'Combat knife', 1],
    [14.5, 118.5, 'karma_coin', 26, 26, 'Karma Coin', 1],
    [7, 187.25, 'cross_shuriken', 28, 28, 'Cross shuriken', 1],
    [7, 187.75, 'cross_shuriken', 28, 28, 'Cross shuriken', 1],
    [6.5, 99.5, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [6.5, 104.5, 'cat-eye_circl.', 20, 12, 'Cat-eye circl.', 1],
    [6.5, 105.5, 'bloodstone', 28, 26, 'Bloodstone', 1],
    [6, 64, 'mormegil', 26, 26, 'Mormegil', 1],
    [6, 89, 'icebrand', 26, 28, 'Icebrand', 1],
    [5.5, 86.5, 'walk_armor', 28, 24, 'Walk armor', 1],
    [5.5, 187.25, 'karma_coin', 26, 26, 'Karma Coin', 1],
    [5.5, 187.75, 'karma_coin', 26, 26, 'Karma Coin', 1],
    [4.5, 99.5, 'ballroom_mask', 22, 20, 'Ballroom mask', 1],
    [2.5, 156.5, 'library_card', 20, 20, 'Library card', 1],
    [2.5, 157.5, 'spike_breaker', 28, 26, 'Spike Breaker', 1],
    [2.5, 187.5, 'pork_bun', 12, 10, 'Pork bun', 1],
    [1.5, 122.25, 'life_max_up', 26, 28, 'Life max up', 1],
    [1.5, 122.75, 'heart_max_up', 28, 24, 'Heart max up', 1],
    [1.5, 127.5, 'monster_vial_3', 10, 22, 'Monster vial 3', 1],
    [1.5, 129.25, 'monster_vial_3', 10, 22, 'Monster vial 3', 1],
    [1.5, 129.75, 'monster_vial_3', 10, 22, 'Monster vial 3', 1],
    [1.5, 131.25, 'monster_vial_3', 10, 22, 'Monster vial 3', 1]
  ];
  let params = url.searchParams;
  if (params.get('items')) {
    const param = params.get('items');
    while (i < param.length) {
      items[i][6] = param[i];
      i += 1;
    }
  }
  let markers = [];
  i = 0;
  while (i < items.length) {
    let marker = L.marker([items[i][0], items[i][1]], {
      icon: L.icon({
        iconUrl: items[i][2] + '.png',
        iconSize: [items[i][3], items[i][4]]
      }),
      opacity: items[i][6]
    }).bindTooltip(items[i][5]).on('click', hide);
    i += 1;
    markers.push(marker);
  }
  const map_1_items = L.layerGroup(markers);

  let items2 = [
    [15.5, 108.5, 'zircon', 14, 16, 'Zircon', 1], // NOTE(tdeveaux): Shared.
    [5.5, 90.5, 'high_potion', 20, 26, 'High potion', 1],
    [7.5, 92.5, 'resist_ice', 16, 26, 'Resist ice', 1], // NOTE(tdeveaux): Shared.
    [7.5, 94.5, 'resist_fire', 16, 26, 'Resist fire', 1], // NOTE(tdeveaux): Shared.
    [9.5, 92.5, 'resist_stone', 16, 26, 'Resist stone', 1], // NOTE(tdeveaux): Shared.
    [10.5, 94, 'resist_thunder', 16, 26, 'Resist thunder', 1], // NOTE(tdeveaux): Shared.
    [7.5, 114.5, 'bastard_sword', 28, 28, 'Bastard sword', 1],
    [7.5, 113.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [7.5, 113, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [7.5, 112.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [7.5, 108.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [7.5, 108, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [7.5, 107.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [7, 106.5, 'royal_cloak', 24, 28, 'Royal cloak', 1],
    [13.5, 90, 'library_card', 20, 20, 'Library card', 1], // NOTE(tdeveaux): Shared.
    [19.5, 122.5, 'iron_ball', 20, 20, 'Iron ball', 1], // NOTE(tdeveaux): Shared.
    [27.75, 122, 'garnet', 14, 16, 'Garnet', 1], // NOTE(tdeveaux): Shared.
    [27.5, 122.5, 'sword_of_dawn', 28, 28, 'Sword of Dawn', 1],
    [25.5, 89.5, 'lightning_mail', 28, 28, 'Lightning mail', 1],
    [27, 138.5, 'magic_missile', 28, 28, 'Magic Missile', 1], // NOTE(tdeveaux): Shared.
    [23.5, 136.5, 'bwaka_knife', 26, 28, 'Bwaka knife', 1], // NOTE(tdeveaux): Shared.
    [34.5, 152.5, 'heart_of_vlad', 24, 28, 'Heart of Vlad', 1],
    [27.5, 168.5, 'talwar', 28, 24, 'Talwar', 1],
    [35, 189.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [35, 186.5, 'smart_potion', 20, 20, 'Smart potion', 1],
    [31.5, 188.5, 'manna_prism', 12, 28, 'Manna prism', 1], // NOTE(tdeveaux): Shared.
    [41.5, 211.5, 'twilight_cloak', 24, 28, 'Twilight cloak', 1],
    [77.5, 195.5, 'zircon', 14, 16, 'Zircon', 1], // NOTE(tdeveaux): Shared.
    [77.5, 170.5, 'buffalo_star', 28, 22, 'Buffalo star', 1],
    [73.5, 153.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [73.5, 154, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [73.5, 154.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [77.5, 141.5, 'aquamarine', 14, 16, 'Aquamarine', 1], // NOTE(tdeveaux): Shared.
    [77.5, 166.5, 'gram', 28, 28, 'Gram', 1],
    [70.5, 168.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [71.5, 117.5, 'opal', 14, 16, 'Opal', 1],
    [71.5, 118, 'sword_of_hador', 26, 26, 'Sword of Hador', 1],
    [71.5, 118.5, 'high_potion', 20, 26, 'High potion', 1],
    [73.5, 110.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [73.5, 126.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [90.5, 171.5, 'turquoise', 14, 16, 'Turquoise', 1], // NOTE(tdeveaux): Shared.
    [90.5, 204.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [90.5, 194.5, 'ring_of_arcana', 16, 16, 'Ring of Arcana', 1],
    [98.5, 206.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [94.5, 234.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [91, 238.5, 'zircon', 14, 16, 'Zircon', 1], // NOTE(tdeveaux): Shared.
    [87.5, 231.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [85.5, 229, 'shuriken', 20, 16, 'Shuriken', 1], // NOTE(tdeveaux): Shared.
    [81.5, 225, 'tnt', 28, 18, 'TNT', 1], // NOTE(tdeveaux): Shared.
    [79.5, 223.5, 'diamond', 28, 26, 'Diamond', 1],
    [77.5, 221, 'boomerang', 14, 28, 'Boomerang', 1], // NOTE(tdeveaux): Shared.
    [73.5, 217, 'javelin', 28, 28, 'Javelin', 1],
    [67, 212, 'fire_boomerang', 22, 28, 'Fire boomerang', 1],
    [106.5, 182.5, 'goddess_shield', 26, 28, 'Goddess shield', 1],
    [114.5, 186.5, 'high_potion', 20, 26, 'High potion', 1],
    [122.5, 193.5, 'manna_prism', 12, 28, 'Manna prism', 1], // NOTE(tdeveaux): Shared.
    [118.5, 202.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [126.5, 198.5, 'katana', 28, 26, 'Katana', 1],
    [126.5, 191.5, 'resist_dark', 16, 26, 'Resist dark', 1], // NOTE(tdeveaux): Shared.
    [125.5, 172.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [129.5, 166, 'talisman', 24, 20, 'Talisman', 1],
    [117.5, 142.5, 'library_card', 20, 20, 'Library card', 1], // NOTE(tdeveaux): Shared.
    [107.5, 146.5, 'potion', 20, 26, 'Potion', 1], // NOTE(tdeveaux): Shared.
    [99.5, 146.5, 'antivenom', 20, 26, 'Antivenom', 1], // NOTE(tdeveaux): Shared.
    [81.5, 114.75, 'resist_fire', 16, 26, 'Resist fire', 1], // NOTE(tdeveaux): Shared.
    [81.5, 114.25, 'resist_thunder', 16, 26, 'Resist thunder', 1], // NOTE(tdeveaux): Shared.
    [81.5, 110.75, 'resist_holy', 16, 26, 'Resist holy', 1], // NOTE(tdeveaux): Shared.
    [81.5, 110.25, 'resist_dark', 16, 26, 'Resist dark', 1], // NOTE(tdeveaux): Shared.
    [85.5, 91.5, 'zircon', 14, 16, 'Zircon', 1], // NOTE(tdeveaux): Shared.
    [89.5, 102.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [89.5, 106.5, 'diamond', 28, 26, 'Diamond', 1],
    [110.5, 99.5, 'opal', 14, 16, 'Opal', 1],
    [129.5, 94.5, 'shiitake', 20, 22, 'Shiitake', 1], // NOTE(tdeveaux): Shared.
    [98.5, 73, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [110.5, 69, 'library_card', 20, 20, 'Meal ticket', 1], // NOTE(tdeveaux): Shared.
    [111.5, 69, 'library_card', 20, 20, 'Meal ticket', 1], // NOTE(tdeveaux): Shared.
    [112.5, 69, 'library_card', 20, 20, 'Meal ticket', 1], // NOTE(tdeveaux): Shared.
    [112.5, 72, 'library_card', 20, 20, 'Meal ticket', 1], // NOTE(tdeveaux): Shared.
    [111.5, 72, 'library_card', 20, 20, 'Meal ticket', 1], // NOTE(tdeveaux): Shared.
    [113.5, 66.5, 'peanuts', 18, 22, 'Peanuts (infinite)', 1], // NOTE(tdeveaux): Shared.
    [138.5, 86.5, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [139.5, 73.5, 'zircon', 14, 16, 'Zircon', 1], // NOTE(tdeveaux): Shared.
    [135, 65.5, 'pot_roast', 28, 28, 'Pot roast', 1], // NOTE(tdeveaux): Shared.
    [133.5, 86.5, 'dark_blade', 28, 28, 'Dark Blade', 1],
    [148.5, 78.5, 'manna_prism', 12, 28, 'Manna prism', 1], // NOTE(tdeveaux): Shared.
    [145.5, 68, 'elixir', 22, 26, 'Elixir', 1], // NOTE(tdeveaux): Shared.
    [146.5, 26.5, 'force_of_echo', 28, 28, 'Force of Echo', 1],
    [129.5, 97.5, 'shiitake', 20, 22, 'Shiitake', 1], // NOTE(tdeveaux): Shared.
    [133.5, 95.5, 'heart_max_up', 28, 24, 'Heart max up', 1], // NOTE(tdeveaux): Shared.
    [133.5, 127.5, 'potion', 20, 26, 'Potion', 1], // NOTE(tdeveaux): Shared.
    [135.5, 128, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [131.5, 145.5, 'bat_pentagram', 28, 28, 'Bat Pentagram', 1],
    [130.5, 158.5, 'garnet', 14, 16, 'Garnet', 1], // NOTE(tdeveaux): Shared.
    [141.5, 155.5, 'shiitake', 20, 22, 'Shiitake', 1], // NOTE(tdeveaux): Shared.
    [147.5, 155.5, 'toadstool', 24, 24, 'Toadstool', 1], // NOTE(tdeveaux): Shared.
    [149.5, 146, 'katana', 24, 24, 'Osafune katana', 1],
    [149.5, 215, 'alucart_shield', 26, 28, 'Alucard shield', 1], // NOTE(tdeveaux): Shared.
    [146.5, 177.5, 'shiitake', 20, 22, 'Shiitake', 1], // NOTE(tdeveaux): Shared.
    [143.5, 200.5, 'pot_roast', 28, 28, 'Pot roast', 1], // NOTE(tdeveaux): Shared.
    [145.5, 205.5, 'zircon', 14, 16, 'Zircon', 1], // NOTE(tdeveaux): Shared.
    [145.5, 206.5, 'opal', 14, 16, 'Opal', 1],
    [146.5, 207.5, 'beryl_circlet', 20, 12, 'Beryl circlet', 1],
    [133.5, 227.5, 'fire_boomerang', 22, 28, 'Fire boomerang', 1],
    [134.5, 234.5, 'hammer', 26, 26, 'Hammer', 1], // NOTE(tdeveaux): Shared.
    [134.5, 237.5, 'antivenom', 20, 26, 'Antivenom', 1], // NOTE(tdeveaux): Shared.
    [143.5, 170.5, 'high_potion', 20, 26, 'High potion', 1],
    [137.5, 171, 'life_max_up', 26, 28, 'Life max up', 1], // NOTE(tdeveaux): Shared.
    [142.5, 124.5, 'eye_of_vlad', 18, 20, 'Eye of Vlad', 1]
  ];

  let markers2 = [];
  i = 0;
  while (i < items2.length) {
    let marker = L.marker([items2[i][0], items2[i][1]], {
      icon: L.icon({
        iconUrl: 'map_2/' + items2[i][2] + '.png',
        iconSize: [items2[i][3], items2[i][4]]
      }),
      opacity: items2[i][6]
    }).bindTooltip(items2[i][5]);
    markers2.push(marker);
    i += 1;
  }
  const map_2_items = L.layerGroup(markers2);
  const baseMaps = {
    'Map 1': map_1,
    'Map 2': map_2
  };
  let overlayMaps = {
    'Items': map_1_items,
    'Debug': map_1_debug,
    'Secrets': map_1_secrets,
    'Spikes': map_1_spikes
  };
  const map = L.map('map_1', {
    attributionControl: false,
    crs: L.CRS.Simple,
    layers: [map_1, map_1_items, map_1_secrets],
    maxZoom: 5,
    minZoom: 1
  });
  if (Number(params.get('debug'))) {
    map.on('click', getLatLng);
  }
  let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
  map.on('baselayerchange', function (event) {
    if (event.name === 'Map 1') {
      overlayMaps = {
        'Items': map_1_items,
        'Debug': map_1_debug,
        'Secrets': map_1_secrets,
        'Spikes': map_1_spikes
      };
      if (map.hasLayer(map_2_debug)) {
        map.removeLayer(map_2_debug);
        map.addLayer(map_1_debug);
      }
      if (map.hasLayer(map_2_secrets)) {
        map.removeLayer(map_2_secrets);
        map.addLayer(map_1_secrets);
      }
      if (map.hasLayer(map_2_spikes)) {
        map.removeLayer(map_2_spikes);
        map.addLayer(map_1_spikes);
      }
      if (map.hasLayer(map_2_items)) {
        map.removeLayer(map_2_items);
        map.addLayer(map_1_items);
      }
      layerControl.remove();
      layerControl = L.control.layers(baseMaps, overlayMaps);
    } else {
      overlayMaps = {
        'Items': map_2_items,
        'Debug': map_2_debug,
        'Secrets': map_2_secrets,
        'Spikes': map_2_spikes
      };
      if (map.hasLayer(map_1_debug)) {
        map.removeLayer(map_1_debug);
        map.addLayer(map_2_debug);
      }
      if (map.hasLayer(map_1_secrets)) {
        map.removeLayer(map_1_secrets);
        map.addLayer(map_2_secrets);
      }
      if (map.hasLayer(map_1_spikes)) {
        map.removeLayer(map_1_spikes);
        map.addLayer(map_2_spikes);
      }
      if (map.hasLayer(map_1_items)) {
        map.removeLayer(map_1_items);
        map.addLayer(map_2_items);
      }
      layerControl.remove();
      layerControl = L.control.layers(baseMaps, overlayMaps);
    }
    layerControl.addTo(map);
    layerControl._update();
  });
  map.fitBounds(bounds);

  function hide(event) {
    let i = 0;
    let latlng = event.latlng;
    let param = '';
    while (i < items.length) {
      if ((items[i][0] === latlng.lat) && (items[i][1] === latlng.lng)) {
        items[i][6] ^= 1;
        // if (!items[i][6]) {
        //   markers[i].setOpacity(.2);
        // } else {
        //   markers[i].setOpacity(items[i][6]);
        // }
        markers[i].setOpacity(items[i][6]);
      }
      param += String(items[i][6]);
      i += 1;
    }
    params.set('items', param);
    window.history.replaceState({
      path: url.href
    }, '', url.href);
  }
}

main(new URL(document.location));
