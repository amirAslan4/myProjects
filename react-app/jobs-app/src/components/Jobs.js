import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import moment from "moment";

//Context
import { JobsContext } from "../context/JobsContextProvider";

//Functions
import { setStatusColor, setStatusBackground } from "../helper/functions";

//Styled-Components
import styled from "styled-components";

// const IsLoading = styled.div``;

const Style = styled.span`
  color: ${(props) => setStatusColor(props.status)};
  text-align: center;
  letter-spacing: 1px;
  font-size: 11px;
  font-weight: bold;

  span {
    background-color: ${(props) => setStatusBackground(props.status)};
    padding: 3px 10px;
    border-radius: 3px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

const JobColumns = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: flex;
    background: #e2e8f0;
    padding: 16px 24px;
    border-radius: 4px;
    color: #64748b;
    font-weight: bold;
    font-size: 15px;
    height: 60px;

    span {
      flex: 1;
    }

    .job_info {
      flex: 3;
    }
  }
`;

const JobsContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767.9px) {
    display: flex;
    flex-direction: column;
  }

  .job-row {
    background: #fff;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    font-size: 14px;
    min-height: 75px;

    span,
    div {
      flex: 1;
    }

    .job_info {
      flex: 3;
    }

    .icon {
      background-color: #645cff;
      display: block;
      border-radius: 3px;
      color: #fff;
      font-size: 2rem;
      width: 40px;
      height: 40px;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      margin-bottom: 1rem;

      @media screen and (min-width: 992px) {
        display: none;
      }
    }

    .edit-btn {
      color: #0f5132;
      font-size: 16px;
      cursor: pointer;
      margin-right: 12px;
    }

    .delete-btn {
      color: #842029;
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }

    @media screen and (max-width: 576px) {
      .delete-btn,
      .edit-btn {
        font-size: 22px;
      }
    }

    .position {
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 1px;
    }

    .company {
      font-size: 16px;
      text-transform: capitalize;
      letter-spacing: 1px;
    }

    .date {
      color: #64748b;
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
      flex-direction: column;
      flex: calc(50% - 20px);
      margin-right: 20px;
      margin-bottom: 20px;

      span,
      div {
        margin-bottom: 22px;
      }
    }

    @media screen and (max-width: 767.9px) {
      flex-direction: column;
      margin-bottom: 20px;

      span,
      div {
        margin-bottom: 15px;
      }
    }
  }
`;

const EmptyContainer = styled.h5`
  text-align: center;
  font-size: 20px;

  span {
    color: #645cff;
  }
`;

const Jobs = () => {
  const { jobs, isLoading, deleteJob } = useContext(JobsContext);

  if (isLoading) {
    return <div className="isLoading"></div>;
  }
  if (!jobs.length) {
    return (
      <EmptyContainer>
        Currently, you have no <span>JOBS</span> to display
      </EmptyContainer>
    );
  }
  return (
    <>
      <JobColumns>
        <span className="job_info">Position</span>
        <span className="job_info">Company</span>
        <span>Date</span>
        <span>Status</span>
        <span>Action</span>
      </JobColumns>
      <JobsContainer>
        {jobs.map((item) => {
          const { _id: id, company, position, status, createdAt } = item;
          const date = moment(createdAt).format("MMMM Do, YYYY");

          return (
            <article key={id} className="job-row">
              <span className="icon">{company.charAt(0)}</span>
              <span className="job_info position">{position}</span>
              <span className="job_info company">{company}</span>
              <span className="date">{date}</span>
              <Style status={status}>
                <span>{status}</span>
              </Style>
              <div>
                <Link to={`/edit/${id}`} className="edit-btn">
                  <FaEdit />
                </Link>
                <button
                  type="button"
                  onClick={() => deleteJob(id)}
                  className="delete-btn"
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </JobsContainer>
    </>
  );
};

export default Jobs;
