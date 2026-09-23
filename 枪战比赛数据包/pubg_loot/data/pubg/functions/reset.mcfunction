# 清空已开过的箱子，并重新挂上战利品表。下一次打开才会重新随机。
execute as @e[type=marker,tag=pubg_ammo] at @s run data remove block ~ ~ ~ Items
execute as @e[type=marker,tag=pubg_ammo] at @s run data remove block ~ ~ ~ LootTableSeed
execute as @e[type=marker,tag=pubg_ammo] at @s run data merge block ~ ~ ~ {LootTable:"pubg:chests/ammo",CustomName:'{"text":"弹药箱","color":"gold","italic":false}'}

execute as @e[type=marker,tag=pubg_weapon] at @s run data remove block ~ ~ ~ Items
execute as @e[type=marker,tag=pubg_weapon] at @s run data remove block ~ ~ ~ LootTableSeed
execute as @e[type=marker,tag=pubg_weapon] at @s run data merge block ~ ~ ~ {LootTable:"pubg:chests/weapon",CustomName:'{"text":"武器箱","color":"red","italic":false}'}

execute as @e[type=marker,tag=pubg_armor] at @s run data remove block ~ ~ ~ Items
execute as @e[type=marker,tag=pubg_armor] at @s run data remove block ~ ~ ~ LootTableSeed
execute as @e[type=marker,tag=pubg_armor] at @s run data merge block ~ ~ ~ {LootTable:"pubg:chests/armor",CustomName:'{"text":"装备箱","color":"blue","italic":false}'}

execute as @e[type=marker,tag=pubg_supply] at @s run data remove block ~ ~ ~ Items
execute as @e[type=marker,tag=pubg_supply] at @s run data remove block ~ ~ ~ LootTableSeed
execute as @e[type=marker,tag=pubg_supply] at @s run data merge block ~ ~ ~ {LootTable:"pubg:chests/supply",CustomName:'{"text":"物资箱","color":"green","italic":false}'}

tellraw @a {"text":"比赛箱子已重置，打开后会重新随机刷新。","color":"green"}
