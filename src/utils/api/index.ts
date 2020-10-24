// export class RMApi {
//   _apiBase = 'https://rickandmortyapi.com/api/';

//   async getResource(url: string) {
//     try {
//       const res = await fetch(`${this._apiBase}${url}`);
//       return await res.json();
//     } catch (e) {
//       console.log(e);
//       throw new Error(`Could not fetch ${url}. Got error printed above.`);
//     }
//   }

//   _extractEpisodeNumber(character: any) {
//     const EpisodeRegExp = /https:\/\/rickandmortyapi\.com\/api\/episode\//;
//     return character.episode.map((item: string) =>
//       item.replace(EpisodeRegExp, 'Chapter ')
//     );
//   }

//   _extractLocationNumber(character: any) {
//     const locationRegExp = /https:\/\/rickandmortyapi\.com\/api\/location\//;
//     const origin = character.origin.url.replace(locationRegExp, '');
//     const location = character.location.url.replace(locationRegExp, '');
//     return { origin, location };
//   }

//   getCharactersPage = async (page?: number) => {
//     const res = await this.getResource(`/character/?page${page ? page : 1}`);
//     const resultInfo = await res.results.map(this._transformCharacter);
//     return resultInfo;
//   };

//   getLocations = async (origin: number, location: number) => {
//     let originData = {
//       locName: 'unknown',
//       locDimension: 'unknown',
//       residentsAmount: 'unknown',
//     };
//     const locationData = {
//       locName: 'unknown',
//       locDimension: 'unknown',
//       residentsAmount: 'unknown',
//     };
//     if (origin) {
//       const res = await this.getResource(`/location/${origin}/`);
//       originData = this._transformLocation(res);
//     }
//     if (location) {
//       const res = await this.getResource(`/location/${location}/`);
//       originData = this._transformLocation(res);
//     }
//     return { originData, locationData };
//   };

//   _transformCharacter = async (character: any) => {
//     // const { origin, location } = this._extractLocationNumber(character);
//     // const { originData, locationData } = await this.getLocations(
//     //   origin,
//     //   location
//     // );
//     return {
//       id: character.id,
//       name: character.name,
//       gender: character.gender,
//       species: character.species,
//       image: character.image,
//       episodesList: this._extractEpisodeNumber(character),
//       // origin: originData,
//       // location: locationData,
//     };
//   };

//   _transformLocation = (location: any) => {
//     return {
//       locName: location.name,
//       locDimension: location.dimension,
//       residentsAmount: location.residents.length,
//     };
//   };
// }

const apiBase =
  'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/';

const getResource = async (url: string) => {
  try {
    const res = await fetch(`${apiBase}${url}`);
    return await res.json();
  } catch (e) {
    console.log(e);
    throw new Error(`Could not fetch ${url}. Got error printed above.`);
  }
};

const extractEpisodeNumber = (character: any) => {
  const EpisodeRegExp = /https:\/\/rickandmortyapi\.com\/api\/episode\//;
  return character.episode.map((item: string) =>
    item.replace(EpisodeRegExp, 'Chapter ')
  );
};

const extractLocationNumber = (character: any) => {
  const locationRegExp = /https:\/\/rickandmortyapi\.com\/api\/location\//;
  const origin = character.origin.url.replace(locationRegExp, '');
  const location = character.location.url.replace(locationRegExp, '');
  return { origin, location };
};

export const getCharactersPage = async (page?: number) => {
  const res = await getResource(`/character/?page${page ? page : 1}`);
  return Promise.all(res.results.map(transformCharacter));
};

const getLocations = async (origin: number, location: number) => {
  let originData = null;
  let locationData = null;
  const defaultData = {
    locName: 'unknown',
    locDimension: 'unknown',
    residentsAmount: 'unknown',
  };

  if (origin) {
    const res = await getResource(`/location/${origin}/`);
    originData = transformLocation(res);
  }
  if (location) {
    const res = await getResource(`/location/${location}/`);
    locationData = transformLocation(res);
  }
  return {
    originData: originData ? originData : defaultData,
    locationData: locationData ? locationData : defaultData,
  };
};

const transformCharacter = async (character: any) => {
  const { origin, location } = extractLocationNumber(character);
  const { originData, locationData } = await getLocations(origin, location);
  return {
    id: character.id,
    name: character.name,
    gender: character.gender,
    species: character.species,
    image: character.image,
    episodesList: extractEpisodeNumber(character),
    origin: originData,
    location: locationData,
  };
};

const transformLocation = (location: any) => {
  return {
    locName: location.name,
    locDimension: location.dimension,
    residentsAmount: location.residents.length,
  };
};
