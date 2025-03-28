export default function Card ({ title, description, backGroundColor }) {
  return (
    <div className={`card ${backGroundColor}`}>̣
      <div className="card-body">
        <h2>{ title }</h2>
        <p>{ description }</p>
      </div>
    </div>
  );
    
}