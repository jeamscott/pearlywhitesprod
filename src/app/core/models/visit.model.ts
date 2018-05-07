export class VisitModel {

    constructor(
        public id_number: string,
        public visit_id?: string,
        public treatment_id?: string,
        public user_role?: string,
        public location_id?: string,
      ) { }
}
