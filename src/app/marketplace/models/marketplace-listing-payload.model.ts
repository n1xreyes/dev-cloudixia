import { Category } from 'src/app/shared/models/category.model';

export class MarketplaceListingPayload {
    query: string;
    categories: Category[];
}
