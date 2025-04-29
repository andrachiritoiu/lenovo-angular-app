import { init, i, id, InstaQLEntity } from "@instantdb/core";

// ID for app: Lenovo-app
const APP_ID = "54b155c7-eeb4-4487-ba7c-6daddff53e0e";

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
    recipes: i.entity({
      id: i.string(),
      name: i.string(),
      image: i.string(),
      difficulty: i.string(),
      prepTimeMinutes: i.number(),
    
    }),
  },
});

const db = init({ appId: APP_ID, schema });
export {db, schema}