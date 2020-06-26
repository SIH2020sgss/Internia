import React from "react";
import "./Filter.scss";
import $ from "jquery";

export default class Filter extends React.Component {
  render() {
    return (
      <div
        id="filter-container"
        className=" bg-warning shadow col-md-12 p-2 text-center"
      >
        <p className="lead font-weight-bold mx-auto"> Internship Filters</p>
        {/* -------------------------form starts here -------------------- */}
        <form id="filter-form">
          <div class="form-group w-75 mx-auto">
            <label for="domains">Example select</label>
            <select class="form-control" id="domains">
              <option>Android Development</option>
              <option>Web Development</option>
              <option>Machine Learning</option>
              <option>Artificial Intelligence</option>
              <option>Cyber Security</option>
              <option>Marketing</option>
              <option>Game Development</option>
              <option>AR/VR</option>
            </select>
          </div>

          <div class="input-group input-group-sm mb-2">
            <select
              class="form-control form-control-sm"
              id="select2"
              multiple="multiple"
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </form>
        {/* -------------------------form ends here -------------------- */}
      </div>
    );
  }
}
