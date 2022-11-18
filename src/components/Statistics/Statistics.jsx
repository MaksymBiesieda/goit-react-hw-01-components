import PropTypes from 'prop-types';
import { Section, Title, StatList, StatItem, StatLable, Percentage } from './Statistics.styled';

export default function Statistics({ title, stats }) {
    return (<Section>
  {title && <Title>{title}</Title>}
<StatList>
    {stats.map(({ id, label, percentage }) => {
     return <StatItem key={id}>
            <StatLable>{label}</StatLable>
            <Percentage>{percentage}%</Percentage>
            </StatItem>})
    }
</StatList>
</Section>)
    
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, label: PropTypes.string.isRequired, percentage: PropTypes.number.isRequired,})),
}