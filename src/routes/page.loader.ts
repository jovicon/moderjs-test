export type LoaderData = {
  message: string;
};

export default async (): Promise<LoaderData> => {
  const res = await fetch(
    'https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood',
  );

  // TODO: Buscar otra API
  console.log('res:', res);

  return {
    message: 'Hello Modern.js',
  };
};
