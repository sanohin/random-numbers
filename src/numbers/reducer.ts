import { GENERATE_RANDOM_NUMBERS } from "./actions";

const createRandomNumber = () => Math.floor(Math.random() * 10);

export const randomNumberReducer = (
  currentValue = createRandomNumber(),
  action: { type: string }
) => {
  if (action.type === GENERATE_RANDOM_NUMBERS) {
    return createRandomNumber();
  }
  return currentValue;
};
