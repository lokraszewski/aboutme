import React, { Component } from "react";
import work1Image from '../images/work1.jpg'
import work2Image from '../images/work2.jpg'
import work3Image from '../images/work3.jpg'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">

            <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: `url(${work1Image}` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://www.arm.com/products/silicon-ip-multimedia/gpu/mali-g78ae">
                        Mali-G78AE
                        </a>
                      </h3>
                      <span>
                        Reference virtualization driver implementation for the G78AE automotive grade GPU targeting the Xen hypervisor.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: `url(${work1Image}` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://www.arm.com/products/silicon-ip-multimedia/image-signal-processor/mali-c71">
                          Mali Camera C71
                        </a>
                      </h3>
                      <span>
                        Reference driver implementation for automotive image
                        signal processor.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: `url(${work2Image}` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://www.shimadzu.com/an/lifescience/maldi">
                          MALDI ToF mass spectrometers
                        </a>
                      </h3>
                      <span>Firmware for MALDI-ToF instruments</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: `url(${work3Image}` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://innovative-technology.com/">
                          Cash Handling
                        </a>
                      </h3>
                      <span>Firmware for cash handling solutions.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
