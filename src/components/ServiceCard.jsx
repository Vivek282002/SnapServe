export default function ServiceCard({icon, title, buttonText, onClick}) {
  return (
    
    <div className="card text-center p-3 shadow-sm h-100">
    <div className="display-3">{icon}</div>
    <h5 className="mt-3">{title}</h5>
    <button className="btn btn-primary mt-2" onClick={onClick}>{buttonText}</button>
    </div>
    

  );
}