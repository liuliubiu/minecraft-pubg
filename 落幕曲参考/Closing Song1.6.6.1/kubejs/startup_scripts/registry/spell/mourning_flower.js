StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('smithstory:mourning_flower')
        .setCastTime(40)
        .setCooldownSeconds(30)
        .setManaCostPerLevel(30)
        .setCastType('instant')
        .setSchool('irons_spellbooks:nature')
        .setMinRarity('uncommon')
        .setMaxLevel(1)
        .onCast(ctx => {
            let player = ctx.entity;
            if (!player || !player.player) return;
            let level = ctx.getSpellLevel();
            global.spawnEnchantRunes(player, 10);
            global.plantFlowers(player, 10, 317);
        })
        .setUniqueInfo((spellLevel, caster) => {
            return [
                Component.green('范围: 10 格')
            ];
        })
        .setAllowLooting(false)
        .needsLearning(false)
        .canBeCraftedBy(() => false);
});