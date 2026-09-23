execute as @e[type=marker,tag=pubg_loot] at @s run setblock ~ ~ ~ air replace
kill @e[type=marker,tag=pubg_loot]
tellraw @s {"text":"已拆掉所有比赛箱子和它们的重置标记。","color":"yellow"}
