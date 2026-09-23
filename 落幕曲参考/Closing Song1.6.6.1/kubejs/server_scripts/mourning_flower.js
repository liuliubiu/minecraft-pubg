let config = {
    flowerRadius: 10,
    maxFlowers: 317,
    validGrounds: {
        'minecraft:grass_block': true,
        'minecraft:dirt': true
    },
    replaceableBlocks: {
        'minecraft:air': true
    },
    flowerTypes: [
        'minecraft:poppy',
        'minecraft:dandelion',
        'minecraft:blue_orchid',
        'minecraft:allium',
        'minecraft:azure_bluet',
        'minecraft:red_tulip',
        'minecraft:orange_tulip',
        'minecraft:white_tulip',
        'minecraft:pink_tulip',
        'minecraft:oxeye_daisy',
        'minecraft:cornflower',
        'minecraft:lily_of_the_valley',
        'minecraft:torchflower'
    ],
    witherRadius: 10,
    witherPercentPerLevel: 0.2,
    enchantParticleCount: [200, 150, 100, 100]
}

let FLOWER_STATES = []
for (let i = 0; i < config.flowerTypes.length; i++) {
    let block = Block.getBlock(config.flowerTypes[i])
    if (block) FLOWER_STATES.push(block.defaultBlockState())
}

global.plantFlowers = function (player, radius, maxFlowers) {
    if (!player || !player.player) return
    radius = radius || config.flowerRadius
    maxFlowers = maxFlowers || config.maxFlowers

    let world = player.level
    let cx = Math.floor(player.x)
    let cz = Math.floor(player.z)
    let planted = 0
    let radiusSq = radius * radius

    for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
            let distSq = dx * dx + dz * dz
            if (distSq > radiusSq) continue

            let x = cx + dx
            let z = cz + dz
            if (x < -30000000 || x > 30000000 || z < -30000000 || z > 30000000) continue

            let y
            try {
                y = world.getHeight(Heightmap.Type.MOTION_BLOCKING, x, z)
            } catch (e) {
                y = world.getMaxBuildHeight() - 1
                while (y > world.getMinBuildHeight()) {
                    let block = world.getBlock(x, y, z)
                    if (block && block.id !== 'minecraft:air') break
                    y--
                }
            }
            if (y <= world.getMinBuildHeight()) continue

            let groundBlock = world.getBlock(x, y, z)
            if (!(groundBlock && config.validGrounds[groundBlock.id])) continue

            let aboveBlock = world.getBlock(x, y + 1, z)
            if (!(aboveBlock && config.replaceableBlocks[aboveBlock.id])) continue

            let randomIndex = Math.floor(Math.random() * FLOWER_STATES.length)
            let flowerState = FLOWER_STATES[randomIndex]

            try {
                let pos = new BlockPos(x, y + 1, z)
                world.setBlock(pos, flowerState, 3)
                planted++
            } catch (e) {
                continue
            }

        }
    }
}

global.witherAura = function (player, level, radius) {
    if (!player || !player.player) return;
    radius = radius || config.witherRadius;
    let world = player.level;
    let percent = level * config.witherPercentPerLevel;
    let entities = world.getEntities();
    entities.forEach(function (entity) {
        if (entity.isLiving() && !entity.equals(player) && entity.isAlive()) {
            let dx = entity.x - player.x;
            let dy = entity.y - player.y;
            let dz = entity.z - player.z;
            let dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist <= radius) {
                let maxHealth = entity.getMaxHealth();
                let damage = Math.max(1, Math.floor(maxHealth * percent));
                var damaged = false;
                entity.attack(damage);
                damaged = true;
                entity.level.runCommandSilent('particle minecraft:soul ' + entity.x + ' ' + (entity.y + 1) + ' ' + entity.z + ' 0.3 0.3 0.3 0.02 5');
            }
        }
    });
};

global.spawnEnchantRunes = function (player, radius, counts) {
    if (!player || !player.player) return
    radius = radius || config.flowerRadius
    counts = counts || config.enchantParticleCount
    let world = player.level

    world.runCommandSilent('particle minecraft:end_rod ~ ~0.2 ~ ' + radius + ' 0  ' + radius + ' 0.01 ' + (counts[0] || 200))
    world.runCommandSilent('particle minecraft:end_rod ~ ~1.0 ~ ' + radius + ' 0.1 ' + radius + ' 0.01 ' + (counts[1] || 150))
    world.runCommandSilent('particle minecraft:end_rod ~ ~2.0 ~ ' + (radius * 0.8) + ' 0.2 ' + (radius * 0.8) + ' 0.01 ' + (counts[2] || 100))
    world.runCommandSilent('particle minecraft:end_rod ~ ~0.1 ~ ' + radius + ' 0.3 ' + radius + ' 0.02 ' + (counts[3] || 100))
}