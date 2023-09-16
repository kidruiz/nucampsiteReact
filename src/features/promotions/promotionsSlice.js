import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const selectedFeaturePromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
};
