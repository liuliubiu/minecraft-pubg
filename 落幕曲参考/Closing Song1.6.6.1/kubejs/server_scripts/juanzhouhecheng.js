ServerEvents.recipes(event => {
    event.shaped(Item.of('irons_spellbooks:scroll', { ISB_Spells: { data: [{ id: "smithstory:summon_apostle", index: 0, level: 1, locked: true }], maxSpells: 1, mustEquip: false, spellWheel: false } }), [
        'BCD',
        'EAF',
        'GHJ'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'cataclysm:cursium_ingot',
        C: 'goety:crone_hat',
        D: 'soulsweapons:nights_edge_item',
        E: 'cataclysm:ignitium_ingot',
        F: 'cataclysm:infernal_forge',
        G: 'cataclysm:tidal_claws',
        H: 'goety:witch_hat',
        J: 'goety:infernal_tome'
    })

        event.shaped(Item.of('irons_spellbooks:scroll', { ISB_Spells: { data: [{ id: "smithstory:summon_apollyon", index: 0, level: 1, locked: true }], maxSpells: 1, mustEquip: false, spellWheel: false } }), [
        'BHD',
        'HAH',
        'GHJ'
    ], {
        A: 'goety:night_beacon',
        B:'celestial_core:pure_nether_star',
        D:'minecraft:netherite_ingot',
        G:'dreadsteel:dreadsteel_ingot',
        H:'goety:unholy_blood',
        J:'celestial_core:void_essence'
    })

    event.shaped(Item.of('irons_spellbooks:scroll', { ISB_Spells: { data: [{ id: "peyroscythe:made_in_heaven_real", index: 0, level: 1, locked: true }], maxSpells: 1, mustEquip: false, spellWheel: false } }), [
        'DAG',
        'EBE',
        'FCD'
    ], {
        A: 'minecraft:clock',
        B:'soulsweapons:essence_of_luminescence',
        C:'time_slow:time_slow',
        D:'extrameat:raw_bee',
        E:'minecraft:crying_obsidian',
        F:'irons_spellbooks:blood_vial',
        G:'soulsweapons:demon_heart'
    })

    event.shaped(Item.of('irons_spellbooks:necronomicon_spell_book', '{ISBEnhance:"irons_spellbooks:raise_dead",ISB_Spells:{data:[{id:"irons_spellbooks:blood_slash",index:0,level:5,locked:1b},{id:"irons_spellbooks:blood_step",index:1,level:5,locked:1b},{id:"irons_spellbooks:ray_of_siphoning",index:2,level:5,locked:1b},{id:"irons_spellbooks:blaze_storm",index:3,level:5,locked:1b}],maxSpells:10,mustEquip:1b,spellWheel:1b}}'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'irons_spellbooks:arcane_essence',
        B:'irons_spellbooks:blood_staff'
    })

    event.shaped(
    Item.of('irons_spellbooks:blood_staff'),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'irons_spellbooks:arcane_essence',
      B: 'irons_spellbooks:necronomicon_spell_book'
    }
  ).id('smithstory:blood_staff_from_necronomicon')
})