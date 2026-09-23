StartupEvents.registry("item", event => {
    event.create('smithstory:ranjinle')
        .food(food => {
            food.hunger(7)
            food.saturation(10)
        })
        .displayName("小猪")
})