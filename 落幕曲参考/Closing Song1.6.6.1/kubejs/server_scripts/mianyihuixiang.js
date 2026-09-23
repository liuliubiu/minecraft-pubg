let targetcurio = 'goety_revelation:halo_of_the_end'
let targereffect = $BuiltInRegistries.MOB_EFFECT.get($ResourceLocation('irons_spellbooks', 'echoing_strikes'))

function hasCurio(player, curioId) {
    return $CuriosApi.getCuriosHelper().findFirstCurio(player, curioId).isPresent()
}

global.handlePotionAdded = (event) => {
    let entity = event.entity
    if (!entity.isPlayer()) return

    let effectInstance = event.effectInstance
    if (!effectInstance) return

    // if (effectInstance.getEffect() !== targereffect) return

    if (hasCurio(entity, targetcurio)) {
        let server = entity.getServer()
        if (server == null) {
            server = entity.level.getServer()
        }
        if (server != null) {
            server.scheduleInTicks(1, () => {
                if (entity != null && entity.isAlive()) {
                    entity.removeEffect(targereffect)
                }
            })
        } else {
            entity.removeEffect(targereffect)
        }
    }
}