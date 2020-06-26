import React, { Component } from "react";
import "./AppliedInternships.scss";
import AppliedInternshipCard from "./AppliedInternshipCard";
import FilterModal from "./FilterModal";
import Filter from "./Filter";
import $ from "jquery";

class AppliedInternships extends Component {
  state = {
    enableFilterModal: false
  };
  componentDidMount() {
    if ($(window).width() < 992) {
      this.setState({ enableFilterModal: true });
    } else {
      $("#filter-modal-toggler").remove();
    }
  }
  render() {
    return (
      <div id="applied-internships" className="row mx-auto">
        {this.state.enableFilterModal && (
          <FilterModal
            ref={({ handleShow }) => (this.showModal = handleShow)}
          />
        )}
        <button
          id="filter-modal-toggler"
          className="d-block d-md-none btn shadow p-2  w-75 mx-auto"
          style={{
            border: "none"
          }}
          onClick={() => this.showModal()}
        >
          Filters
        </button>
        <div className="col-12 col-md-7 offset-md-1">
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
          <AppliedInternshipCard />
        </div>

        <div
          id="filter-box"
          className="col-md-3 p-1 rounded mx-auto d-none d-md-flex offset-md-1"
        >
          <Filter />
        </div>
      </div>
    );
  }
}

export default AppliedInternships;
