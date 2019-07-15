import React from "react";

function supplier({ supplier }) {
    const { supplier_id, supplier_name,price ,image,phone_no } = supplier;
    let supplierText = "";

    if (supplier_id === 0) {
        supplierText = "Not available";
    } else if (supplier_id === 1) {
        supplierText = "available";
    } else {
        supplierText = `available ${supplier_id} supplier`;
    }

    return (
        <div className="mvls-supplier">

            <div className="mvls-supplier-body">
                <div className="mvls-image">{Image}</div>
                <p className="mvls-supplier-id">{supplierText}</p>
            </div>
            <div className="mvls-supplier-footer">
                <a href={`/supplier/${supplier_id}`} className="mvls-btn mvls-btn-supplier">
                    See supplier
                </a>
            </div>
        </div>
    );
}

export default supplier;