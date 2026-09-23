StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('smithstory:summon_apostle')
        .setCastTime(100)
        .setCooldownSeconds(300)
        .setManaCostPerLevel(5)
        .setCastType('long')
        .setSchool('irons_spellbooks:blood')
        .setMinRarity('common')
        .setMaxLevel(1)
        .setAllowLooting(false)
        .needsLearning(false)
        .setUniqueInfo((spellLevel, caster) => {
            return [Component.green(`召唤敌对使徒`)]
        })
.onCast(amm => {
            let player = amm.entity
            let dim = player.level.dimension
            player.server.runCommandSilent(`execute in ${dim} run summon goety:apostle ${player.x} ${player.y} ${player.z}`)
        })
})