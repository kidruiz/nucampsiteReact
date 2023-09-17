import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeatureCampsite } from '../campsites/campsitesSlice';
import { selectedFeaturePromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeatureCampsite(), selectedFeaturePromotion(), selectFeaturedPartner()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;