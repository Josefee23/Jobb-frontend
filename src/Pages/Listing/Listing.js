import React from "react";
import "./Listing.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from './../../Loading/Error/Loading';
const Listing = () => {
  const [data, setData] = React.useState(null);
  const [search, setSearch] = React.useState("all");

  const handleChange = (value) => {
    setSearch(value);
  };

  console.log(search);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: search,
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "1d3313bee7msh4398c05fc4860acp1134ecjsnffeb5f6666e6",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true); // Set loading state to true when fetching data
  //     setError(null); // Reset error state

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //       setError(error); // Set error state if there's an error
  //     } finally {
  //       setLoading(false); // Set loading state to false when data fetching is done
  //     }
  //   };

  //   fetchData(); // Call the async function to fetch data when the component mounts
  // }, [search]); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div>
      <div className="inner-banner-one position-relative">
        <div className="container">
          {/* Inner Content */}
          <div className="position-relative">
            <div className="row">
              <div className="col-xl-6 m-auto text-center">
                <div className="title-two">
                  <h2 className="text-white">Job Listing</h2>
                </div>
                <p className="text-lg text-white mt-30 lg-mt-20 mb-35 lg-mb-20">
                  We delivered blazing fast & striking work solution
                </p>
              </div>
            </div>
          </div>
          {/* Job Search Section */}
          <div className="position-relative">
            <div className="row">
              <div className="col-xl-9 col-lg-8 m-auto">
                <div className="job-search-one position-relative">
                  <p className="vv">
                    REQUIRED Free-form jobs search query. It is highly
                    recommended to include job title and location as part of the
                    query, see query examples below.
                  </p>
                  <p className="vv">
                    Query examples <br /> web development in chicago <br />{" "}
                    marketing manager in new york via linkedin <br /> developer
                    in germany 60306
                  </p>
                  <form>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Job"
                        value={search}
                        onChange={(e) => handleChange(e.target.value)}
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        class="btn bbb btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-5 pt-lg--3 pb-4 pb-xl-3 job-listing-three">
        <div className="container">
          {isLoading?(<p>Loading...</p>):error?(<p>{Error}</p>):(<div className="row">
            <div className="col-xl-3 col-lg-4">
              <button
                type="button"
                className="filter-btn w-100 pt-2 pb-2 h-auto fw-500 tran3s d-lg-none mb-40"
                data-bs-toggle="offcanvas"
                data-bs-target="#filteroffcanvas"
              >
                <i className="bi bi-funnel"></i>Filter
              </button>
              <div
                className="filter-area-tab offcanvas offcanvas-start"
                id="filteroffcanvas"
              >
                
                <div className="main-title fw-500 text-dark">Filter By</div>

                <div className="light-bg border-20 ps-4 pe-4 pt-25 pb-30 mt-20">
                  <div className="filter-block bottom-line pb-25">
                    <a
                      className="filter-title fw-500 text-dark"
                      data-bs-toggle="collapse"
                      href="#collapseLocation"
                      role="button"
                      aria-expanded="false"
                    >
                      Location
                    </a>
                    <div className="collapse show" id="collapseLocation">
                      <div className="main-body">
                        <div
                          className="nice-selectt  false"
                          role="button"
                          tabIndex="0"
                        >
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="filter-block bottom-line pb-25 mt-25">
                    <a
                      className="filter-title fw-500 text-dark mt-3 mb-0"
                      data-bs-toggle="collapse"
                      href="#collapseJobType"
                      role="button"
                      aria-expanded="false"
                    >
                      Job Type
                    </a>
                    <div className="collapse show" id="collapseJobType">
                      <div className="main-body">
                        <ul class="style-none filter-input">
                          <li>
                            <input
                              type="checkbox"
                              name="JobType"
                              value="Fixed-Price"
                            />
                            <label>
                              Fixed-Price <span>4</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="JobType"
                              value="Freelance"
                            />
                            <label>
                              Freelance <span>4</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="JobType"
                              value="Fulltime"
                            />
                            <label>
                              Fulltime <span>12</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="JobType"
                              value="Part time"
                            />
                            <label>
                              Part time <span>8</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="filter-block bottom-line pb-25 mt-25">
                    <a
                      className="filter-title fw-500 text-dark mt-3 mb-0"
                      data-bs-toggle="collapse"
                      href="#collapseExp"
                      role="button"
                      aria-expanded="false"
                    >
                      Experience
                    </a>
                    <div className="collapse show" id="collapseExp">
                      <div className="main-body">
                        <ul class="style-none filter-input">
                          <li>
                            <input
                              type="checkbox"
                              name="JobType"
                              value="Fixed-Price"
                            />
                            <label>
                              Fixed-Price <span>4</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="JobType"
                              value="Freelance"
                            />
                            <label>
                              Freelance <span>4</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="JobType"
                              value="Fulltime"
                            />
                            <label>
                              Fulltime <span>12</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="JobType"
                              value="Part time"
                            />
                            <label>
                              Part time <span>8</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="filter-block bottom-line pb-25 mt-25">
                    <a
                      className="filter-title fw-500 text-dark collapsed mt-3 mb-0"
                      data-bs-toggle="collapse"
                      href="#collapseCategory"
                      role="button"
                      aria-expanded="false"
                    >
                      Category
                    </a>
                    <div className="collapse" id="collapseCategory">
                      <div className="main-body">
                        <ul class="style-none filter-input">
                          <li>
                            <input
                              type="checkbox"
                              name="Accounting"
                              value="Accounting"
                            />
                            <label>
                              Accounting <span>4</span>
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="Coder" value="Coder" />
                            <label>
                              Coder <span>2</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="Design"
                              value="Design"
                            />
                            <label>
                              Design <span>2</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="Developer"
                              value="Developer"
                            />
                            <label>
                              Developer <span>6</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="Finance"
                              value="Finance"
                            />
                            <label>
                              Finance <span>6</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button className="btn-ten fw-500 text-white w-100 text-center tran3s mt-30">
                    Reset Filter
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-8">
              <div class="job-post-item-wrapper ms-xxl-5 ms-xl-3">
                <div class="upper-filter d-flex justify-content-between align-items-center mb-20">
                  <div class="total-job-found">
                    All <span class="text-dark">15</span> jobs found
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="short-filter d-flex align-items-center">
                      <div class="text-dark fw-500 me-2">Short:</div>
                      <div
                        class="nice-selectt  false"
                        role="button"
                        tabindex="0"
                      >
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <button
                      class="style-changer-btn text-center rounded-circle tran3s ms-2 list-btn"
                      title="Active List"
                    >
                      <i class="bi bi-list"></i>
                    </button>
                    <button
                      class="style-changer-btn text-center rounded-circle tran3s ms-2 grid-btn active"
                      title="Active Grid"
                    >
                      <i class="bi bi-grid"></i>
                    </button>
                  </div>
                </div>
                <div class="accordion-box list-style show">
                  {data?.data?.map((list) => (
                    <div class="job-list-one style-two position-relative border-style mb-20">
                      <div class="row justify-content-between align-items-center">
                        <div class="col-md-5">
                          <div class="job-title d-flex align-items-center">
                            <a class="logo" href="/job-details-v1/1">
                              <img
                                alt="logo"
                                loading="lazy"
                                width="60"
                                height="60"
                                decoding="async"
                                data-nimg="1"
                                class="lazy-img m-auto"
                                srcset={
                                  list?.employer_logo
                                    ? list?.employer_logo
                                    : "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_22.142b36c3.png&w=64&q=75"
                                }
                                src={
                                  list?.employer_logo
                                    ? list?.employer_logo
                                    : "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_22.142b36c3.png&w=64&q=75"
                                }
                                style={{ color: "transparent" }}
                              />
                            </a>
                            <div class="split-box1">
                              <a
                                class="job-duration fw-500"
                                href="/job-details-v1/1"
                              >
                                {list?.job_employment_type}
                              </a>
                              <p
                                class="title fw-500 tran3s ml-5"
                                href="/job-details-v1/1"
                              >
                                {list?.job_title}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                          <div class="job-location">
                            <a href="/job-details-v1/1">
                              {list?.job_state}, {list?.job_country}
                            </a>
                          </div>
                          <div class="job-salary">
                            <span class="fw-500 text-dark">$900</span> / Monthly
                            . Fresher
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <div class="btn-group d-flex align-items-center justify-content-sm-end xs-mt-20">
                            <Link
                              class="apply-btn text-center tran3s"
                              to={`/job/${list?.job_id}`}
                            >
                              APPLY
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="accordion-box grid-style">
                <div class="row">
                  <div class="col-sm-6 mb-30">
                    <div class="job-list-two style-two position-relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </section>
    </div>
  );
};

export default Listing;
