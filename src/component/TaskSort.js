/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TaskSort extends Component {
  //   componentWillReceiveProps(nextProps) {
  //     console.log(nextProps);
  //   }
  onClick = (sortBy, sortValue) => {
      // console.log(sortBy, '|', sortValue);
    this.props.onSort(sortBy, sortValue);
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sắp Xếp <span className="fa fa-caret-square-o-down ml" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li onClick={() => this.onClick("name", 1)}>
                <a
                  role="button"
                  className={
                    this.props.sortBy === "name" && this.props.sortValue === 1
                      ? "sort_selected"
                      : ""
                  }
                >
                  <span className="fa fa-sort-alpha-asc pr">Tên A-Z</span>
                </a>
              </li>
              <li onClick={() => this.onClick("name", -1)}>
                <a
                  role="button"
                  className={
                    this.props.sortBy === "name" && this.props.sortValue === -1
                      ? "sort_selected"
                      : ""
                  }
                >
                  <span className="fa fa-sort-alpha-desc pr">Tên Z-A</span>
                </a>
              </li>
              <li role="separator" className="divider" />
              <li onClick={() => this.onClick("status", 1)}>
                <a
                  role="button"
                  className={
                    this.props.sortBy === "status" && this.props.sortValue === 1
                      ? "sort_selected"
                      : ""
                  }
                >
                  Trạng Thái Kích Hoạt
                </a>
              </li>
              <li onClick={() => this.onClick("status", -1)}>
                <a
                  role="button"
                  className={
                    this.props.sortBy === "status" && this.props.sortValue === -1
                      ? "sort_selected"
                      : ""
                  }
                >
                  Trạng Thái Ẩn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskSort;
