export class LocationModel {

    constructor(
        public id_number: string,
        public city: string,
        public state: string,
        public zip?: string,
      ) { }
}
