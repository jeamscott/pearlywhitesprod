export class InventoryModel {

    constructor(
        public item_name: string,
        public product_description: string,
        public quantity: string,
        public cost?: string,
      ) { }
}
