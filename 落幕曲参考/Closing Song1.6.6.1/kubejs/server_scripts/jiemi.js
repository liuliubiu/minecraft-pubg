ItemEvents.foodEaten(event => {
  const { player, item } = event;
  const targetItem = 'wan_ancient_beasts:cooked_ancient_meat'; 
  const commandToRun = 'goety revelation solvePuzzle @s'; 

  if (item.id == targetItem) {
    event.server.runCommandSilent(commandToRun.replace('@s', player.username));
  }
});