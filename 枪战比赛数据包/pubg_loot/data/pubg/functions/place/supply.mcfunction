execute align xyz positioned ~0.5 ~0.5 ~0.5 run kill @e[type=marker,tag=pubg_loot,distance=..0.2]
execute align xyz run setblock ~ ~ ~ minecraft:lime_shulker_box[facing=up]{LootTable:"pubg:chests/supply",CustomName:'{"text":"物资箱","color":"green","italic":false}'} replace
execute align xyz positioned ~0.5 ~0.5 ~0.5 run summon marker ~ ~ ~ {Tags:["pubg_loot","pubg_supply"]}
tellraw @s {"text":"已放置绿色物资箱。下一局执行 /function pubg:reset 会重新随机。","color":"green"}
