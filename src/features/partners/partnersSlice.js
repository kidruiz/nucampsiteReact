import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
};

export const selectAllPartners = () => PARTNERS;

// export const selectFeatureCampsite = () => {
//     return CAMPSITES.find((campsite) => campsite.featured);
// };
