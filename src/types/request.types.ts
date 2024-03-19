import { Officetel, Schedule } from './common.types';

interface GetOfficetelsResponse extends Array<Officetel> {}

interface GetSchedulesResponse extends Array<Schedule> {}

export type { GetOfficetelsResponse, GetSchedulesResponse };
