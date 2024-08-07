import React from "react";
import { useNavigate } from "react-router-dom";
function Card({title, quoteCount}) {
  const navigate = useNavigate();

  const handleClick = () => {
   const formattedTitle = encodeURIComponent(title.toLowerCase());
        navigate(`/show/${formattedTitle}`);
  }
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure>
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title text-sm">{title}</h2>
    <p className="text-sm text-descriptionGray">Total Kata : {quoteCount}</p>
    <div className="card-actions justify-end">
      <button className="btn font-semibold text-xs btn-warning" onClick={handleClick}>Tampilkan</button>
    </div>
  </div>
</div>
    );
}

export default Card;