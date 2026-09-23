ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Added', event => {
    if (typeof global.handlePotionAdded == 'function') {
        global.handlePotionAdded(event);
    } else {
        console.log("ciallo")
    }
});