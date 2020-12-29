import { DEFAULT_DATA } from '../../constants';
import { CharacterSchema, LocationSchema } from '../../types';
export class RMApi {
  _apiBase = 'https://rickandmortyapi.com/api/';

  getCharactersPage = async (registerPromise: any, page?: number) => {
    const res = await registerPromise(
      this.getResource(`/character/?page=${page ? page : 1}`)
    );
    const characterPage = await registerPromise(
      Promise.all(res.results.map(this._transformCharacter))
    );
    return { characterPage, total: res.info.count };
  };

  async getResource(url: string) {
    try {
      const res = await fetch(`${this._apiBase}${url}`);
      return await res.json();
    } catch (e) {
      console.log(e);
      throw new Error(`Could not fetch ${url}. Got error printed above.`);
    }
  }

  _transformCharacter = async (character: CharacterSchema) => {
    const { origin, location } = this._extractLocationNumber(character);
    const {
      originData = DEFAULT_DATA,
      locationData = DEFAULT_DATA,
    } = await this.getLocations(Number(origin), Number(location));
    return {
      id: character.id,
      name: character.name,
      gender: character.gender,
      species: character.species,
      image: character.image,
      episodesList: this._extractEpisodeNumber(character),
      origin: originData,
      location: locationData,
    };
  };

  _extractLocationNumber(character: CharacterSchema) {
    const locationRegExp = /https:\/\/rickandmortyapi\.com\/api\/location\//;
    const origin = character.origin.url.replace(locationRegExp, '');
    const location = character.location.url.replace(locationRegExp, '');
    return { origin, location };
  }

  getLocations = async (origin: number, location: number) => {
    let originData;
    let locationData;

    if (origin) {
      const res = await this.getResource(`/location/${origin}/`);
      originData = this._transformLocation(res);
    }
    if (location) {
      const res = await this.getResource(`/location/${location}/`);
      originData = this._transformLocation(res);
    }
    return { originData, locationData };
  };

  _extractEpisodeNumber(character: CharacterSchema) {
    const EpisodeRegExp = /https:\/\/rickandmortyapi\.com\/api\/episode\//;
    return character.episode.map((item: string) =>
      item.replace(EpisodeRegExp, 'Chapter ')
    );
  }

  _transformLocation = (location: LocationSchema) => {
    return {
      locName: location.name,
      locDimension: location.dimension,
      residentsAmount: location.residents.length,
    };
  };
}
