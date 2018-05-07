export class AppointmentModel {

    constructor(
        public user_name: string,
        public app_date?: string,
        public app_time?: string,
        public app_location?: string,
      ) { }
}
