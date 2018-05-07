export class TreatmentModel {

    constructor(
        public id_number: string,
        public treatment_id: string,
        public description?: string,
        public tooth_id?: string,
      ) { }
}
