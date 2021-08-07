import { sendPost } from "./utils";

export const play = async (val: number) =>
  await sendPost("https://codechallenge.boohma.com/play", { player: val });
