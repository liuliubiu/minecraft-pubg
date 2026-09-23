let AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")
let UUID = Java.loadClass("java.util.UUID")
let uuid = UUID.fromString("ba03d281-b34e-4f7e-86a2-1858da7c7989")//改这个
ForgeEvents.onEvent("net.minecraftforge.event.ItemAttributeModifierEvent", event => {
    let { itemStack, slotType } = event
    let item = itemStack.getItem()
    if (item.id === "goety_revelation:bow_of_revelation"&& slotType === "mainhand") {
        event.addModifier(
            "projectile_damage:generic",//改这个
            new AttributeModifier(
                uuid,
                "bow",
                60,
                AttributeModifier.Operation.ADDITION
            )
        )
    }
})