import CardAdditionalInfo from '@components/CardAdditionalInfo.tsx';
import './RecommendCard.css';

interface RecommendationCardInterface {
  RecommendationLogo: string;
  title: string;
  description: string;
  level: string;
  courseDuration: string;
}

function RecommendCard({
  RecommendationLogo,
  title,
  description,
  level,
  courseDuration
}: RecommendationCardInterface) {
  return (
    <div className='recommendation-card'>
      <img src={RecommendationLogo} alt='recommendation-card-logo' />
      <h2 className='recommendation-card-title'>{title}</h2>
      <p className='recommendation-card-description'>{description}</p>
      <CardAdditionalInfo description={level} additionalInfo={courseDuration} />
    </div>
  );
}

export default RecommendCard;
