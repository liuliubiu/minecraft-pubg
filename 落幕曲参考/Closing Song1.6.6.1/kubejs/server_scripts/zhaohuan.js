ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar('goety:buried_scroll')
        .input('64x minecraft:sandstone')
        .recipeTime(300)
        .mobOutput("legendary_monsters:dune_sentinel");

        event.recipes.summoningrituals.altar('goety:floral_scroll')
        .input('64x minecraft:cobblestone','64x minecraft:deepslate','16x minecraft:vine')
        .recipeTime(300)
        .mobOutput("legendary_monsters:overgrown_colossus");

        event.recipes.summoningrituals.altar('minecraft:iron_ingot')
        .input('4x minecraft:gold_block','5x legendary_monsters:ancient_spike')
        .recipeTime(300)
        .mobOutput("legendary_monsters:ancient_guardian");

        event.recipes.summoningrituals.altar('legendary_monsters:eye_of_frost')
        .input('32x minecraft:snow_block','5x soulsweapons:verglas')
        .recipeTime(300)
        .mobOutput("legendary_monsters:frostbitten_golem");

        event.recipes.summoningrituals.altar('legendary_monsters:eye_of_ghost')
        .input('3x legendary_monsters:long_stick_half','3x legendary_monsters:knights_sword_blade_half')
        .recipeTime(300)
        .mobOutput("legendary_monsters:posessed_paladin");

        event.recipes.summoningrituals.altar('slashblade:proudsoul_sphere')
        .input('10x iceandfire:witherbone','3x goety:ectoplasm','16x minecraft:netherrack')
        .recipeTime(300)
        .mobOutput("legendary_monsters:withered_abomination");

        event.recipes.summoningrituals.altar('minecraft:netherrack')
        .input('32x minecraft:bone','6x soulsweapons:lost_soul')
        .recipeTime(300)
        .mobOutput("legendary_monsters:skeletosaurus");

        event.recipes.summoningrituals.altar('legendary_monsters:eye_of_magma')
        .input('16x minecraft:netherrack','12x minecraft:obsidian')
        .recipeTime(300)
        .mobOutput("legendary_monsters:lava_eater");

        event.recipes.summoningrituals.altar('alexsmobs:gazelle_horn')
        .input('16x alexsmobs:acacia_blossom','5x irons_spellbooks:divine_pearl')
        .recipeTime(300)
        .mobOutput("mowziesmobs:umvuthi");

        event.recipes.summoningrituals.altar('minecraft:diamond_sword')
        .input('4x bosses_of_mass_destruction:soul_star','32x minecraft:iron_ingot','16x minecraft:stone')
        .recipeTime(300)
        .mobOutput("mowziesmobs:ferrous_wroughtnaut");

        event.recipes.summoningrituals.altar('goety:venomous_fang')
        .input('16x minecraft:cobweb','10x minecraft:spider_eye')
        .recipeTime(300)
        .mobOutput("goety:brood_mother");

        event.recipes.summoningrituals.altar('legendary_monsters:eye_of_air')
        .input('5x minecraft:diamond','10x legendary_monsters:cloud_rod')
        .recipeTime(300)
        .mobOutput("legendary_monsters:cloud_golem");

        event.recipes.summoningrituals.altar('minecraft:milk_bucket')
        .input('goety:witch_hat','goety:witch_robe','goety:witch_cauldron','goety:cauldron_ladle')
        .recipeTime(300)
        .mobOutput("goety:crone");

        event.recipes.summoningrituals.altar('minecraft:rotten_flesh')
        .input('10x goety:dark_fabric','butcher:cowcorpseitem','butcher:pig_corpse_item','butcher:sheep_corpse_item','64x minecraft:gold_ingot')
        .recipeTime(300)
        .mobOutput("eeeabsmobs:corpse_warlock");

        event.recipes.summoningrituals.altar('fumo:koishi_item')
        .input('7x ice_and_fire_delight:cooked_sea_serpent_meat','32x minecraft:bone_block','8x minecraft:diamond')
        .recipeTime(300)
        .mobOutput("dodosmobs:bone_chimera");

        event.recipes.summoningrituals.altar('legendary_monsters:eye_of_shulker')
        .input('4x minecraft:shulker_shell','64x minecraft:end_stone','16x minecraft:ender_pearl')
        .recipeTime(300)
        .mobOutput("legendary_monsters:shulker_mimic");

        event.recipes.summoningrituals.altar('legendary_monsters:eye_of_chorus')
        .input('64x minecraft:chorus_fruit','64x minecraft:end_stone','16x minecraft:ender_pearl')
        .recipeTime(300)
        .mobOutput("legendary_monsters:endersent");

        event.recipes.summoningrituals.altar('iceandfire:cyclops_eye')
        .input('5x iceandfire:ice_dragon_flesh','32x minecraft:white_wool','16x alexsmobs:moose_ribs')
        .recipeTime(300)
        .mobOutput("mowziesmobs:frostmaw");

        event.recipes.summoningrituals.altar('celestial_core:pure_nether_star')
        .input('64x minecraft:iron_ingot','2x alexsmobs:crocodile_scute')
        .recipeTime(300)
        .mobOutput("eeeabsmobs:nameless_guardian");

        event.recipes.summoningrituals.altar('mowziesmobs:bluff_rod')
        .input('32x celestial_core:sakura_fragment')
        .recipeTime(300)
        .mobOutput("mowziesmobs:sculptor");

        event.recipes.summoningrituals.altar('irons_spellbooks:epic_ink')
        .input('soulsweapons:demon_heart','16x iceandfire:silver_ingot','minecraft:heart_of_the_sea')
        .recipeTime(300)
        .mobOutput("irons_spellbooks:dead_king");

        event.recipes.summoningrituals.altar('minecraft:golden_apple')
        .input('smithstory:ranjinle')
        .recipeTime(50)
        .mobOutput("minecraft:pig");

        event.recipes.summoningrituals.altar('smithstory:naiyin')
        .input('#c:chests')
        .recipeTime(100)
        .mobOutput("artifacts:mimic");

        event.recipes.summoningrituals.altar('minecraft:blue_orchid')
        .input('2x goety:feet_of_frog','minecraft:brown_mushroom','minecraft:red_mushroom')
        .recipeTime(100)
        .mobOutput("iceandfire:hydra");

        event.recipes.summoningrituals.altar('minecraft:mutton')
        .input('10x minecraft:white_wool')
        .recipeTime(100)
        .mobOutput("minecraft:goat");
});