import { FormGroupName } from "@angular/forms";
import { init, i, id, InstaQLEntity } from "@instantdb/core";
// ID for app: recipe app
const APP_ID = "a1db3342-8db8-4ee4-a6d8-1c8907c5e13e";

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
    recipes: i.entity({
    name: i.string(),
    image: i.string(),
    difficulty: i.string(),
    prepTimeMinutes: i.number(),
    }),
  },
});

const db = init({appId: APP_ID, schema});
export {db, schema };
