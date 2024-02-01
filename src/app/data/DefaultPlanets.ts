import {Planet} from "./Planet";

export const defaultPlanets: Planet[] = [
  {
    id: 1,
    name: 'Venus',
    composition: 'Rock',
    color: 'Yellow',
    distanceFromSun: 5,
    habitable: false
  },
  {
    id: 2,
    name: 'Mercury',
    composition: 'Rock',
    color: 'Brown',
    distanceFromSun: 10,
    habitable: false
  },
  {
    id: 3,
    name: 'Earth',
    composition: 'Rock / Water',
    color: 'Green, Brown, White',
    distanceFromSun: 20,
    habitable: true
  },
  {
    id: 4,
    name: 'Mars',
    composition: 'Rock',
    color: 'Red',
    distanceFromSun: 30,
    habitable: false
  }
]
