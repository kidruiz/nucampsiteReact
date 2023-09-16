import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectedFeatureCampsite } from '../campsites/campsitesSlice';
import { selectedFeaturePromotion } from '../promotions/promotionsSlice';

const DisplayList = () => {
    const items = [selectedFeatureCampsite(), selectedFeaturePromotion()];

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