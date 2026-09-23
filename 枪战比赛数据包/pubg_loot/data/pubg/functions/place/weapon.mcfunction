execute align xyz positioned ~0.5 ~0.5 ~0.5 run kill @e[type=marker,tag=pubg_loot,distance=..0.2]
execute align xyz run setblock ~ ~ ~ minecraft:red_shulker_box[facing=up]{LootTable:"pubg:chests/weapon",CustomName:'{"text":"武器箱","color":"red","italic":false}'} replace
execute align xyz positioned ~0.5 ~0.5 ~0.5 run summon marker ~ ~ ~ {Tags:["pubg_loot","pubg_weapon"]}
tellraw @s {"text":"已放置红色武器箱。下一局执行 /function pubg:reset 会重新随机。","color":"red"}
