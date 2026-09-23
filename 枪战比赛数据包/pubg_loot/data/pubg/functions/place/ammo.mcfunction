# 站在要放箱子的那一格空气里执行
execute align xyz positioned ~0.5 ~0.5 ~0.5 run kill @e[type=marker,tag=pubg_loot,distance=..0.2]
execute align xyz run setblock ~ ~ ~ minecraft:orange_shulker_box[facing=up]{LootTable:"pubg:chests/ammo",CustomName:'{"text":"弹药箱","color":"gold","italic":false}'} replace
execute align xyz positioned ~0.5 ~0.5 ~0.5 run summon marker ~ ~ ~ {Tags:["pubg_loot","pubg_ammo"]}
tellraw @s {"text":"已放置橙色弹药箱。下一局执行 /function pubg:reset 会重新随机。","color":"gold"}
