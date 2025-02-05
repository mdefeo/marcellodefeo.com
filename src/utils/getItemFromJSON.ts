export const getItemFromJSON = (data: any[], itemName: string) => {
    return data.find((item) => item.name === itemName);
  };