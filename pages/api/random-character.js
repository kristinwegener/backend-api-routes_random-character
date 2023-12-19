import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    pet: chance.animal({ type: "pet" }),
    income: chance.euro({ max: 10000 }),
  };
  response.status(200).json(character);
}
