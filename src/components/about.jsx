import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Hi! I'm Lukasz, I am a software developer passionate
                        about low level and system programming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my competencies
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-upload" />
                  </span>
                  <div className="desc">
                    <h3>Build Systems</h3>
                    <p>
                      Maintainer of <a href="https://github.com/ARM-software/bob-build">bob-build</a>. Experience in migration and optimization of popular
                      build tools such as Bazel, Soong, CMake.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-signal" />
                  </span>
                  <div className="desc">
                    <h3>Embedded Software</h3>
                    <p>
                      Variety of projects both bare-metal & RTOS, using C/C++. Experience in medical & automotive sectors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-radar" />
                  </span>
                  <div className="desc">
                    <h3>CI/CD</h3>
                    <p>
                      Experience in writing CI/CD pipelines targeting
                      Gitlab, Jenkins, Github Actions and custom in-house
                      solutions.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-truck2" />
                  </span>
                  <div className="desc">
                    <h3>Linux Kernel</h3>
                    <p>Kernel Driver development for GPUs & ISPs. </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-device-laptop" />
                  </span>
                  <div className="desc">
                    <h3>Testing</h3>
                    <p>
                      Functional/unit/integration software testing. Familiar
                      with hardware testing jig design and automation.
                    </p>
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
