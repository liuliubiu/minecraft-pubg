// 整合包原有的 loot_modifications.js 会往主世界所有箱子里额外塞拔刀剑傲魂、铜和火药。
// 这个脚本只从比赛箱子里拿掉那些额外物品，生存世界的其他箱子不受影响。
LootJS.modifiers(event => {
    event.addLootTableModifier(
        'pubg:chests/ammo',
        'pubg:chests/weapon',
        'pubg:chests/armor',
        'pubg:chests/supply'
    )
        .removeLoot('slashblade:proudsoul_tiny')
        .removeLoot('slashblade:proudsoul')
        .removeLoot('slashblade:proudsoul_ingot')
        .removeLoot('slashblade:proudsoul_sphere')
        .removeLoot('slashblade:proudsoul_crystal')
        .removeLoot('minecraft:copper_block')
        .removeLoot('minecraft:copper_ingot')
        .removeLoot('minecraft:gunpowder');
});
