import { Prisma } from '@prisma/client';

export class Sale implements Prisma.SaleUncheckedCreateInput {
  id?: number;
  productName: string;
  campaignName: string;
  setName: string;
  adName: string;
  buyerName: string;
  purchaseTime: string;
}
