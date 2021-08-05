
import GithubSvg from '../svgIcon/GithubSvg'
import LinkSvg from '../svgIcon/LinkSvg'
function WorkCard({ image = "", title = "", description = "", techIcon = [], websiteUrl = "", githubUrl = "" }) {
  return (
    <>
    <div className="col-4 col-s-12">
      <div className="card">
        <div className="card_image">
          <img src={`/images/mywork/${image}`} alt={title} />
        </div>
        <div className="card_title">
          <h3>{title}</h3>
        </div>
        <div className="card_body">
          <div className="project_info">
            <p>{description}</p>
          </div>
          <div className="tech_info">
            {!techIcon.length ? techIcon.map((tech) => {
              return (
                <div className="tech_image">
                  <img src={`/images/mywork/${tech}`} alt={title} />
                </div>
              )
            }) : null}
          </div>
        </div>
        <div className="card_footer">
        <a href={websiteUrl}>
          <div className="card_link">
          <GithubSvg/>
          </div>
          </a>
          <a href={githubUrl}>
          <div className="card_link">
           <LinkSvg />
          </div>
          </a>
        </div>
      </div>
      </div>
    </>
  );
}

export default WorkCard;
