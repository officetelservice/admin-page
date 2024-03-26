import { Officetel, Schedule, Reserve } from './common.types';

interface GetOfficetelDetailReponse {
	officetel: Officetel;
	reserves: Reserve[];
}

interface GetOfficetelsResponse extends Array<Officetel> {}

interface GetSchedulesResponse extends Array<Schedule> {}

export type {
	GetOfficetelDetailReponse,
	GetOfficetelsResponse,
	GetSchedulesResponse,
};
