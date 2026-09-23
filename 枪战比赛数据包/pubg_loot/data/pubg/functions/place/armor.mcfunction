execute align xyz positioned ~0.5 ~0.5 ~0.5 run kill @e[type=marker,tag=pubg_loot,distance=..0.2]
execute align xyz run setblock ~ ~ ~ minecraft:blue_shulker_box[facing=up]{LootTable:"pubg:chests/armor",CustomName:'{"text":"装备箱","color":"blue","italic":false}'} replace
execute align xyz positioned ~0.5 ~0.5 ~0.5 run summon marker ~ ~ ~ {Tags:["pubg_loot","pubg_armor"]}
tellraw @s {"text":"已放置蓝色装备箱。下一局执行 /function pubg:reset 会重新随机。","color":"blue"}
