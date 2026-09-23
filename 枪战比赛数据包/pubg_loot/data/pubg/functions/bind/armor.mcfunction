execute align xyz positioned ~ ~-1 ~ unless block ~ ~ ~ #pubg:containers run tellraw @s {"text":"请站在箱子、木桶或潜影盒上面再执行。","color":"red"}
execute align xyz positioned ~ ~-1 ~ if block ~ ~ ~ #pubg:containers positioned ~0.5 ~0.5 ~0.5 run kill @e[type=marker,tag=pubg_loot,distance=..0.25]
execute align xyz positioned ~ ~-1 ~ if block ~ ~ ~ #pubg:containers run data remove block ~ ~ ~ Items
execute align xyz positioned ~ ~-1 ~ if block ~ ~ ~ #pubg:containers run data remove block ~ ~ ~ LootTableSeed
execute align xyz positioned ~ ~-1 ~ if block ~ ~ ~ #pubg:containers run data merge block ~ ~ ~ {LootTable:"pubg:chests/armor",CustomName:'{"text":"装备箱","color":"blue","italic":false}'}
execute align xyz positioned ~ ~-1 ~ if block ~ ~ ~ #pubg:containers positioned ~0.5 ~0.5 ~0.5 run summon marker ~ ~ ~ {Tags:["pubg_loot","pubg_armor"]}
execute align xyz positioned ~ ~-1 ~ if block ~ ~ ~ #pubg:containers run tellraw @s {"text":"脚下的容器已改成装备箱，下一局会跟着 /function pubg:reset 一起重置。","color":"blue"}
