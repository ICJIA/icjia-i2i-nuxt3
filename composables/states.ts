export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("color", () => "pink");
export const useNav = () => useState<boolean>("nav", () => false);
export const useSimpleCounter = (val: number) =>
  useState<number>("test", () => val);
