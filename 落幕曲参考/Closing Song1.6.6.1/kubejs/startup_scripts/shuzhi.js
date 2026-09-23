ItemEvents.modification(event=>{
  event.modify('zenith:zenith',item=>{
  item.maxDamage=120
  })

  event.modify('irons_spellbooks:gold_crown',item=>{
  item.maxDamage=0
  })

  event.modify("ironchests:iron_dolly", item => {
        item.maxDamage = 0; 
    });
  })