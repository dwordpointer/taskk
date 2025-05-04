import axiosInstance from './axiosInstance';
import { IApiResponse } from '../../@types/core';
import { ICharacter } from '../../@types/core/character';
import { IEpisode } from '../../@types/core/episode';

export const fetchCharacters = async (): Promise<IApiResponse<ICharacter>> => {
  try {
    const response = await axiosInstance.get('/character');
    return response.data;
  } catch (error) {
    console.error('Error fetching characters', error);
    throw error;
  }
};

export const fetchEpisodes = async (): Promise<IApiResponse<IEpisode>> => {
  try {
    const response = await axiosInstance.get('/episode');
    return response.data;
  } catch (error) {
    console.error('Error fetching episodes', error);
    throw error;
  }
};
