StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('smithstory:summon_apollyon')
        .setCastTime(100)//20=1s
        .setCooldownSeconds(5)
        .setBaseManaCost(30000)
        .setManaCostPerLevel(5)
        .setCastType('long')
        .setSchool('irons_spellbooks:blood')
        .setMinRarity('common')
        .setMaxLevel(1)
        .setAllowLooting(false)
        .needsLearning(false)
        .setUniqueInfo((spellLevel, caster) => {
            return [Component.green(`召唤敌对亚波伦`)]
        })
        .onCast(amm => summoncow(amm))
})

function summoncow(amm) {
    let caster = amm.entity
    if (!caster) return
    let level = caster.level
    if (level.isClientSide()) return
    let pig = level.createEntity('goety_revelation:summon_apollyon')
    pig.setPosition(caster.x, caster.y, caster.z)
    pig.spawn()
}