# tamagotchi

## Specs
|  behavior  |  input  |  output  |
|------------|---------|----------|
| user can feed tamagotchi with a button    |  press feed  |  adds 10 food points   |
| user can play with tamagotchi with a button   |  press play   |  adds 10 happiness points  |
| user can press button to tell a tamagotchi to sleep    |  press sleep  | tamagotchi sleeps for 1 minute  |
| every minute the creature loses 1 food points  | 5 minutes pass  | -5 food points  |
| every two minutes the tamagotchi loses 5 play points| 5 minutes pass | -10 play points |
| every three minutes the tamagotchi's sleep level decrements 5 points | 3 minutes pass | -5 exhaustion points |
| if the tamagotchi's hunger lever falls below 5 points, the tamagotchi will die | 2 minutes pass w/o feeding the tamagotchi |"I starved to death!" |
| if the tamagotchi's happiness level falls below 5 points, the tamagotchi will die | 2 minutes pass w/o playing with the tamagotchi | "I died of sadness" |
| if the tamagotchi's exhaustion levels fall below 5 points the tamagotchi dies | 3 minutes pass without feeding the tamagotchi | "I died from exhaustion"|
