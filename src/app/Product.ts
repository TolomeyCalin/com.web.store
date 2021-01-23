export class Product{
  constructor(
    public productId: number,
    public productName: string,
    public productDescription: string,
    public price: number,
    public productStock: number,
    public productCategoryId: number,
  )
   {
  }
}
