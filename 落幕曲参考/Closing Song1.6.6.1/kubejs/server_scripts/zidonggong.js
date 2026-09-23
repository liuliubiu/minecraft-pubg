const bow = {
    'goety_revelation:bow_of_revelation': { maxCharge: 20 },
    //'minecraft:trident':{} 
}
PlayerEvents.tick(event => {
    let player = event.player
    if (!player.isUsingItem()) return
    if (player.crouching) return
    let item = player.getMainHandItem()
    if (!item) return
    let bows = bow[item.id]
    if (!bows) return
    let useDuration = player.getTicksUsingItem()
    if (useDuration >= bows.maxCharge * 0.99) {
        player.releaseUsingItem()
    }
})