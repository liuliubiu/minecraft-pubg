LootJS.modifiers((event) => {
    event
    .addEntityLootModifier('legendary_monsters:dune_sentinel')    
    .addLoot('goety:black_iron_helmet','goety:black_iron_chestplate','goety:black_iron_leggings','goety:black_iron_boots');

    
    event
    .addEntityLootModifier("mowziesmobs:umvuthi")    
    .addLoot('tarotcards:the_sun');

    event
    .addEntityLootModifier("goety:hostile_redstone_golem")    
    .addLoot('cataclysm:burning_ashes','cataclysm:abyssal_sacrifice','goety:forbidden_fragment');

    event
    .addEntityLootModifier("goety:hostile_redstone_monstrosity")    
    .addLoot('goety:forbidden_fragment');

    event
    .addEntityLootModifier("alexscaves:forsaken")    
    .addLoot('celestial_artifacts:cursed_totem');

    event
    .addEntityLootModifier("soulsweapons:moonknight")    
    .addLoot('celestial_artifacts:cursed_protector');

    event
    .addEntityLootModifier("mowziesmobs:sculptor")   
    .randomChance(0.5) 
    .addLoot('mowziesmobs:geomancer_beads','mowziesmobs:geomancer_robe');
    
    event
    .addEntityLootModifier("mowziesmobs:sculptor")   
    .randomChance(0.5) 
    .addLoot('mowziesmobs:geomancer_belt','mowziesmobs:geomancer_sandals');
    
    });  