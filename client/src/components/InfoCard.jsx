import React from "react";
const InfoCard = ({label, value, unit, icon: Icon, color}) => {
    return (
        <div className="card">
      <div className="card-header">
        <span className="card-label">{label}</span>
        {/* Render Icon jika ada */}
        {Icon && <Icon size={24} color={color} />}
      </div>
      <div className="card-body">
        <span className="card-value" style={{ color: color }}>
          {value}
        </span>
        <span className="card-unit">{unit}</span>
      </div>
    </div>
    )
}
export default InfoCard