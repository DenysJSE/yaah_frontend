import './RecommendCard.css'

interface RecommendationCardInterface {
  RecommendationLogo: string
  title: string,
  description: string,
  level: string,
  duration: number
}

function RecommendCard({RecommendationLogo, title, description, level, duration}: RecommendationCardInterface) {
  return (
    <div className='recommendation-card'>
      <img src={RecommendationLogo} alt="recomLogo"/>
      <h2 className="recommendation-card-title">{title}</h2>
      <p className="recommendation-card-description">{description}</p>
      <div className='recommendation-level-duration'>
        <span className="recommendation-course-level">{level}</span>
        <div className="recommendation-dot"></div>
        <span className="recommendation-course-duration">{duration} hours</span>
      </div>
    </div>
  );
}

export default RecommendCard