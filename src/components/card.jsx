

const Card = (props) => {
  const { titleText, description } = props;
  return (
    <article className='card'>
      <h2 className='card-title'>{titleText}</h2>
      <p className='card-body'>{description}</p>
      <button className='card-button' type="button">Submit</button>
    </article>
  );
};


export default Card;
