import React from "react";

export default function ArticlePreview({title, image_url}) {
  return (
    <div className="col-md-6 w-50 p-5">
        <div className="card border-0">
            <img src={image_url} className="card-img-top rounded-4" alt="Article 1"/>
            <div className="card-body px-0">
                <h6 className="fw-bold mt-3 mb-2">{title}</h6>
                <a href="#" className="btn btn-outline-teal w-50 mx-auto d-block mt-2">Découvrir</a>
            </div>
        </div>
    </div>
  );
}