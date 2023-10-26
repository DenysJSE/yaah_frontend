import './RecommendCard.css'
import SubjectTitleDuration from "../SubjectTitleDuration.tsx";

interface RecommendationCardInterface {
  RecommendationLogo: string
  title: string,
  description: string,
  level: string,
  courseDuration: string
}

function RecommendCard({RecommendationLogo, title, description, level, courseDuration}: RecommendationCardInterface) {
  return (
    <div className='recommendation-card'>
      <img src={RecommendationLogo} alt="recomLogo"/>
      <h2 className="recommendation-card-title">{title}</h2>
      <p className="recommendation-card-description">{description}</p>
      <SubjectTitleDuration description={level} additionalInfo={courseDuration} />
    </div>
  );
}

export default RecommendCard