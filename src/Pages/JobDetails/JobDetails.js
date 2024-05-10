import React from "react";
import "./JobDetails.css";
import { Link } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const id = window.location.pathname.split("/")[2];
  console.log(id);
  const [job, setJob] = React.useState(null);


const options = {
  method: "GET",
  url: "https://jsearch.p.rapidapi.com/job-details",
  params: {
    job_id: id,
    extended_publisher_details: "false",
  },
  headers: {
    "X-RapidAPI-Key": "1d3313bee7msh4398c05fc4860acp1134ecjsnffeb5f6666e6",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setJob(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function to fetch data when the component mounts
  }, [id]); // Empty dependency array means this effect runs only once after the component mounts
  return (
    <div>
      <div class="inner-banner-one position-relative">
        <div class="container">
          <div class="position-relative">
            <div class="row">
              <div class="col-xl-6 m-auto text-center">
                <div class="title-two">
                  <h2 class="text-white">Job Details</h2>
                </div>
                <p class="text-lg text-white mt-30 lg-mt-20">
                 Company job details &amp; requirements
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="shape"
          loading="lazy"
          width="83"
          height="94"
          decoding="async"
          data-nimg="1"
          class="lazy-img shapes shape_01"
          src="https://jobi-nextjs.vercel.app/_next/static/media/shape_02.e6196842.svg"
          style={{ color: "transparent" }}
        />
        <img
          alt="shape"
          loading="lazy"
          width="141"
          height="57"
          decoding="async"
          data-nimg="1"
          class="lazy-img shapes shape_02"
          src="https://jobi-nextjs.vercel.app/_next/static/media/shape_03.746a3d0c.svg"
          style={{ color: "transparent" }}
        />
      </div>
      <section className="job-details pt-100 lg-pt-80 pb-130 lg-pb-80">
        <div className="container">
          <div className="row">
            {job?.data.map((j) => (
              <div className="col-xxl-9 col-xl-8">
                <div className="details-post-data me-xxl-5 pe-xxl-4">
                  <div className="post-date">
                    18 Jul 2024 by{" "}
                    <Link to="#" className="fw-500 text-dark">
                      slack
                    </Link>
                  </div>

                  <h3 className="post-title">{j.job_job_title}</h3>

                  <ul className="share-buttons d-flex flex-wrap style-none">
                    <li>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="bi bi-facebook"></i>
                        <span>Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="bi bi-twitter"></i>
                        <span>Twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="bi bi-link-45deg"></i>
                        <span>Copy</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="post-block border-style mt-50 lg-mt-30">
                    <div className="d-flex align-items-center">
                      <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                        1
                      </div>
                      <h4 className="block-title">Overview</h4>
                    </div>
                    <p>
                      When team members told us they needed more flexibility
                      around where and how they worked, we acted, creating two
                      options to accommodate two different styles of work. One
                      non-negotiable principle along the way? We had to retain
                      our deep culture of collaboration, both among ourselves
                      and with our clients. Introducing Work From Near and Work
                      From Anywhere at WillowTree. Please indicate which
                      location(s) you're interested.
                    </p>
                  </div>
                  <div className="post-block border-style mt-30">
                    <div className="d-flex align-items-center">
                      <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                        2
                      </div>
                      <h4 className="block-title">Job Description</h4>
                    </div>
                    <p style={{ whiteSpace: "pre-line" }}>
                      {j.job_description}
                    </p>
                    <p>
                      We understand our responsibility to create a diverse,
                      equitable, and inclusive place within the tech industry,
                      while pushing to make our industry more representative.{" "}
                    </p>
                  </div>
                  <div className="post-block border-style mt-40 lg-mt-30">
                    <div className="d-flex align-items-center">
                      <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                        3
                      </div>
                      <h4 className="block-title">Responsibilities</h4>
                    </div>
                    <ul className="list-type-one style-none mb-15">
                      {j.job_highlights?.Responsibilities?.map((h) => (
                        <li>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="post-block border-style mt-40 lg-mt-30">
                    <div className="d-flex align-items-center">
                      <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                        3
                      </div>
                      <h4 className="block-title">Qualifications</h4>
                    </div>
                    <ul className="list-type-one style-none mb-15">
                      {j.job_highlights?.Qualifications?.map((h) => (
                        <li>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="post-block border-style mt-40 lg-mt-30">
                    <div className="d-flex align-items-center">
                      <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                        4
                      </div>
                      <h4 className="block-title">Required Skills:</h4>
                    </div>
                    <ul className="list-type-two style-none mb-15">
                      <li>
                        You’ve been designing digital products for 2+ years.
                      </li>
                      <li>
                        A portfolio that exemplifies strong visual design and a
                        focus on defining the user experience.
                      </li>
                      <li>
                        You’ve proudly shipped and launched several products.
                      </li>
                      <li>
                        You have some past experience working in an agile
                        environment – Think two-week sprints.
                      </li>
                      <li>
                        Experience effectively presenting and communicating your
                        design decisions to clients and team members
                      </li>
                      <li>
                        Up-to-date knowledge of design software like Figma,
                        Sketch etc.
                      </li>
                    </ul>
                  </div>
                  <div className="post-block border-style mt-40 lg-mt-30">
                    <div className="d-flex align-items-center">
                      <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                        5
                      </div>
                      <h4 className="block-title">Benefits:</h4>
                    </div>
                    <ul className="list-type-one style-none mb-15">
                      {j.job_highlights?.Benefits?.map((h) => (
                        <li>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {job?.data.map((j) => (
              <div className="col-xxl-3 col-xl-4">
                <div className="job-company-info ms-xl-5 ms-xxl-0 lg-mt-50">
                  <div className="border-top nn mt-40 pt-40">
                    <ul className="job-meta-data row style-none">
                      <li className="col-xl-7 col-md-4 col-sm-6">
                        <span>Salary</span>
                        <div>900/Monthly</div>
                      </li>
                      <li className="col-xl-5 col-md-4 col-sm-6">
                        <span>Expertise</span>
                        <div>Fresher</div>
                      </li>
                      <li className="col-xl-7 col-md-4 col-sm-6">
                        <span>Location</span>
                        <div>
                          {j.job_country}, {j.job_city}
                        </div>
                      </li>
                      <li className="col-xl-5 col-md-4 col-sm-6">
                        <span>Job Type</span>
                        <div>{j.job_employment_type}</div>
                      </li>
                      <li className="col-xl-7 col-md-4 col-sm-6">
                        <span>Date</span>
                        <div>18 Jul 2024 </div>
                      </li>
                      <li className="col-xl-5 col-md-4 col-sm-6">
                        <span>Experience</span>
                        <div>Fresher</div>
                      </li>
                    </ul>

                    <Link
                      to={j.job_apply_link}
                      className="btn-one w-100 mt-25"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
