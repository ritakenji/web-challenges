import Chance from "chance";
import { uid } from "uid";

export default function handler(req, res) {
  const chance = new Chance();
  const character = {
    id: uid(),
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    geoHash: chance.geohash(),
    twitter: chance.twitter(),
  };

/*   console.log("Query: ", req.query); */

  res.status(200).json(character);
}
