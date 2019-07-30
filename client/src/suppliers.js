import React from "react";
import supplier from "./supplier";

function suplier({ suppliers }) {
    return (
        <div className="mvls-container">
            <div className="mvls-supplier-list">
                {supplier.map(m => (
                    <supplier key={supplier.id} supplier={m} />
                ))}
            </div>
        </div>
    );
}

export default supplier.js;
