export class UserModel {

    constructor(
        public email: string,
        public name: string,
        public hash?: string,
        public salt?: string,
      ) { }
}
