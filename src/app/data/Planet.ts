export interface Planet {
  id: number,
  name: String,
  composition: String,
  color: String,
  distanceFromSun: number | undefined,
  habitable: boolean
}
