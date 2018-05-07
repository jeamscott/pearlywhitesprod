export class PatientModel {

    constructor(
        public user_name: string,
        public id_number?: string,
        public first_name?: string,
        public last_name?: string,
        public phone_number?: string,
        public street?: string,
        public city?: string,
        public state?: string,
        public zip_code?: string,
        public email_address?: string,
        public visit_history?: string,        
      ) { }
}
