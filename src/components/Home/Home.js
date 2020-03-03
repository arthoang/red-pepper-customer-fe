import React, { Component } from 'react';
import classes from './Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";


library.add(faPhoneAlt);
library.add(faMapMarkerAlt);
library.add(faEnvelope);

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            
            <div id="wrapper" style={{ backgroundSize: "cover" }}>
  
   
  
  
  <section
    className="vc_rows wpb_row vc_row-fluid vc_custom_1490255156246 vc_row-has-fill"
    style={{ backgroundSize: "cover" }}
  >
    <div className="container" style={{ backgroundSize: "cover" }}>
      <div className="row" style={{ backgroundSize: "cover" }}>
        <div
          className="box-shadow wpb_column vc_column_container vc_col-sm-12 vc_col-md-6"
          style={{ backgroundSize: "cover" }}
        >
          <div className="vc_column-inner" style={{ backgroundSize: "cover" }}>
            <div className="wpb_wrapper" style={{ backgroundSize: "cover" }}>
              <div
                className="wpb_text_column wpb_content_element  vc_custom_1490091020928"
                style={{ backgroundSize: "cover" }}
              >
                <div
                  className="wpb_wrapper"
                  style={{ backgroundSize: "cover" }}
                >
                  <h2 style={{ textAlign: "center" }}>
                    Book a Table<span className="tiny-border center">.</span>
                  </h2>
                </div>
              </div>
              <style dangerouslySetInnerHTML={{ __html: "" }} />
              <div
                className="wpb_text_column wpb_content_element  vc_custom_1490090963332 ptop30"
                style={{ backgroundSize: "cover" }}
              >
                <div
                  className="wpb_wrapper"
                  style={{ backgroundSize: "cover" }}
                >
                  <div
                    className="rtb-booking-form"
                    style={{ backgroundSize: "cover" }}
                  >
                    <form method="POST" action>
                      <input
                        type="hidden"
                        name="action"
                        defaultValue="booking_request"
                      />
                      <fieldset className="reservation">
                        <legend>Book a table </legend>
                        <div
                          className="rtb-text date"
                          style={{ backgroundSize: "cover" }}
                        >
                          <label htmlFor="rtb-date">Date </label>
                          <input
                            type="text"
                            name
                            id="rtb-date"
                            defaultValue
                            required
                            aria-required="true"
                            className="picker__input"
                            aria-haspopup="true"
                            aria-expanded="false"
                            aria-readonly="false"
                            aria-owns="rtb-date_root"
                          />
                          <input
                            type="hidden"
                            name="rtb-date"
                            defaultValue="2020/02/27"
                          />
                        </div>
                        <div
                          className="rtb-text time"
                          style={{ backgroundSize: "cover" }}
                        >
                          <label htmlFor="rtb-time">Time </label>
                          <input
                            type="text"
                            name
                            id="rtb-time"
                            defaultValue
                            required
                            aria-required="true"
                            className="picker__input"
                            aria-haspopup="true"
                            aria-expanded="false"
                            aria-readonly="false"
                            aria-owns="rtb-time_root"
                          />
                          <input type="hidden" name="rtb-time" />
                        </div>
                        <div
                          className="rtb-select party"
                          style={{ backgroundSize: "cover" }}
                        >
                          <label htmlFor="rtb-party">Party </label>
                          <select
                            name="rtb-party"
                            id="rtb-party"
                            required
                            aria-required="true"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option>
                            <option value={32}>32</option>
                            <option value={33}>33</option>
                            <option value={34}>34</option>
                            <option value={35}>35</option>
                            <option value={36}>36</option>
                            <option value={37}>37</option>
                            <option value={38}>38</option>
                            <option value={39}>39</option>
                            <option value={40}>40</option>
                            <option value={41}>41</option>
                            <option value={42}>42</option>
                            <option value={43}>43</option>
                            <option value={44}>44</option>
                            <option value={45}>45</option>
                            <option value={46}>46</option>
                            <option value={47}>47</option>
                            <option value={48}>48</option>
                            <option value={49}>49</option>
                            <option value={50}>50</option>
                            <option value={51}>51</option>
                            <option value={52}>52</option>
                            <option value={53}>53</option>
                            <option value={54}>54</option>
                            <option value={55}>55</option>
                            <option value={56}>56</option>
                            <option value={57}>57</option>
                            <option value={58}>58</option>
                            <option value={59}>59</option>
                            <option value={60}>60</option>
                            <option value={61}>61</option>
                            <option value={62}>62</option>
                            <option value={63}>63</option>
                            <option value={64}>64</option>
                            <option value={65}>65</option>
                            <option value={66}>66</option>
                            <option value={67}>67</option>
                            <option value={68}>68</option>
                            <option value={69}>69</option>
                            <option value={70}>70</option>
                            <option value={71}>71</option>
                            <option value={72}>72</option>
                            <option value={73}>73</option>
                            <option value={74}>74</option>
                            <option value={75}>75</option>
                            <option value={76}>76</option>
                            <option value={77}>77</option>
                            <option value={78}>78</option>
                            <option value={79}>79</option>
                            <option value={80}>80</option>
                            <option value={81}>81</option>
                            <option value={82}>82</option>
                            <option value={83}>83</option>
                            <option value={84}>84</option>
                            <option value={85}>85</option>
                            <option value={86}>86</option>
                            <option value={87}>87</option>
                            <option value={88}>88</option>
                            <option value={89}>89</option>
                            <option value={90}>90</option>
                            <option value={91}>91</option>
                            <option value={92}>92</option>
                            <option value={93}>93</option>
                            <option value={94}>94</option>
                            <option value={95}>95</option>
                            <option value={96}>96</option>
                            <option value={97}>97</option>
                            <option value={98}>98</option>
                            <option value={99}>99</option>
                            <option value={100}>100</option>
                          </select>
                        </div>
                      </fieldset>
                      <fieldset className="contact">
                        <legend>Contact Details </legend>
                        <div
                          className="rtb-text name"
                          style={{ backgroundSize: "cover" }}
                        >
                          <label htmlFor="rtb-name">Name </label>
                          <input
                            type="text"
                            name="rtb-name"
                            id="rtb-name"
                            defaultValue
                            required
                            aria-required="true"
                          />
                        </div>
                        <div
                          className="rtb-text email"
                          style={{ backgroundSize: "cover" }}
                        >
                          <label htmlFor="rtb-email">Email </label>
                          <input
                            type="email"
                            name="rtb-email"
                            id="rtb-email"
                            defaultValue
                            required
                            aria-required="true"
                          />
                        </div>
                        <div
                          className="rtb-text phone"
                          style={{ backgroundSize: "cover" }}
                        >
                          <label htmlFor="rtb-phone">Phone </label>
                          <input
                            type="tel"
                            name="rtb-phone"
                            id="rtb-phone"
                            defaultValue
                          />
                        </div>
                        <div
                          className="add-message"
                          style={{ backgroundSize: "cover" }}
                        >
                          <a href="#">Add a Message </a>
                        </div>
                        <div
                          className="rtb-textarea message"
                          style={{ backgroundSize: "cover" }}
                        >
                          <label htmlFor="rtb-message">Message </label>
                          <textarea
                            name="rtb-message"
                            id="rtb-message"
                            defaultValue={""}
                          />
                        </div>
                      </fieldset>
                      <button type="submit">Request Booking</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-5"
          style={{ backgroundSize: "cover" }}
        >
          <div className="vc_column-inner" style={{ backgroundSize: "cover" }}>
            <div className="wpb_wrapper" style={{ backgroundSize: "cover" }}>
              <div
                className="wpb_text_column wpb_content_element  vc_custom_1581392673824"
                style={{ backgroundSize: "cover" }}
              >
                <div
                  className="wpb_wrapper"
                  style={{ backgroundSize: "cover" }}
                >
                  <h2>
                    WELCOME TO SITE
                    <span className="teaser">The Art of Cookings</span>
                  </h2>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" style={{ backgroundSize: "cover" }} />
  </section>
  <section
    className="vc_rows wpb_row vc_row-fluid"
    style={{ backgroundSize: "cover" }}
  >
    <div className="container" style={{ backgroundSize: "cover" }}>
      <div className="row" style={{ backgroundSize: "cover" }}>
        <div
          className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-10"
          style={{ backgroundSize: "cover" }}
        >
          <div className="vc_column-inner" style={{ backgroundSize: "cover" }}>
            <div className="wpb_wrapper" style={{ backgroundSize: "cover" }}>
              <div className="row" style={{ backgroundSize: "cover" }}>
                <div
                  className="col-md-4 text-center"
                  style={{ backgroundSize: "cover" }}
                >
                  <i className="icon_pin_alt fontsize48 id-color mb30" />
                  <h3>Address</h3>
                  123 3 Ave S, Saskatoon, SK S7K 1L6 Canada{" "}
                </div>
                <div
                  className="col-md-4 text-center"
                  style={{ backgroundSize: "cover" }}
                >
                  <i className="icon_clock_alt fontsize48 id-color mb30" />
                  <h3>Timing</h3>
                  <h2>
                    We're Open<span className="teaser">Everyday!</span>
                  </h2>
                  Monday - Sunday
                  <br />
                  <strong>11.00 - 21.00</strong>{" "}
                </div>
                <div
                  className="col-md-4 text-center"
                  style={{ backgroundSize: "cover" }}
                >
                  <i className="icon_phone fontsize48 id-color mb30" />
                  <h3>Phone</h3>
                  <a href="tel:3064771977">(306) 477-1977</a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" style={{ backgroundSize: "cover" }} />
  </section>
  <section
    data-stellar-background-ratio=".2"
    className="vc_rows wpb_row vc_row-fluid text-light vc_custom_1490090515932 vc_row-has-fill parallax"
    style={{ backgroundSize: "cover", backgroundPosition: "0% 208.4px" }}
  >
    <div className="container" style={{ backgroundSize: "cover" }}>
      <div className="row" style={{ backgroundSize: "cover" }}>
        <div
          className="wpb_column vc_column_container vc_col-sm-12"
          style={{ backgroundSize: "cover" }}
        >
          <div className="vc_column-inner" style={{ backgroundSize: "cover" }}>
            <div className="wpb_wrapper" style={{ backgroundSize: "cover" }}>
              <h2 className="text-center">
                Specialties <span className="teaser">Fresh and delicious</span>
                <span className="small-border center" />{" "}
              </h2>
              <div className="row" style={{ backgroundSize: "cover" }}>
                <div
                  className="col-md-3 col-sm-6 text-center"
                  style={{ backgroundSize: "cover" }}
                >
                  <div
                    className="menu-itemss"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure className="pic-hover hover-scale mb10">
                      <span
                        className="center-xy"
                        style={{ left: "76.5px", top: "76.5px" }}
                      >
                        <a
                          className="image-popup"
                          href="http://nhit.sg-host.com/wp-content/uploads/2017/03/2-2.jpg"
                        >
                          <i className="fa fa-image btn-action btn-action-hide" />
                        </a>
                      </span>
                      <span
                        className="bg-overlay"
                        style={{ width: 213, height: 213 }}
                      />
                      <span className="border-overlay" />
                      <img
                        src="http://nhit.sg-host.com/wp-content/uploads/2017/03/2-2.jpg"
                        className="img-responsive"
                        alt
                      />
                    </figure>
                    <h3>Cheese Shrimp Roll</h3>
                    <span className="id-color">$42</span>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 text-center"
                  style={{ backgroundSize: "cover" }}
                >
                  <div
                    className="menu-itemss"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure className="pic-hover hover-scale mb10">
                      <span
                        className="center-xy"
                        style={{ left: "76.5px", top: "76.5px" }}
                      >
                        <a
                          className="image-popup"
                          href="http://nhit.sg-host.com/wp-content/uploads/2017/03/2-6.jpg"
                        >
                          <i className="fa fa-image btn-action btn-action-hide" />
                        </a>
                      </span>
                      <span
                        className="bg-overlay"
                        style={{ width: 213, height: 215 }}  
                      />
                      <span className="border-overlay" />
                      <img
                        src="http://nhit.sg-host.com/wp-content/uploads/2017/03/2-6.jpg"
                        className="img-responsive"
                        alt
                      />
                    </figure>
                    <h3>Baked Crab Cheese</h3>
                    <span className="id-color">$66</span>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 text-center"
                  style={{ backgroundSize: "cover" }}
                >
                  <div
                    className="menu-itemss"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure className="pic-hover hover-scale mb10">
                      <span
                        className="center-xy"
                        style={{ left: "76.5px", top: "76.5px" }}
                      >
                        <a
                          className="image-popup"
                          href="http://nhit.sg-host.com/wp-content/uploads/2017/03/3-6.jpg"
                        >
                          <i className="fa fa-image btn-action btn-action-hide" />
                        </a>
                      </span>
                      <span
                        className="bg-overlay"
                        style={{ width: 213, height: 213 }}
                      />
                      <span className="border-overlay" />
                      <img
                        src="http://nhit.sg-host.com/wp-content/uploads/2017/03/3-6.jpg"
                        className="img-responsive"
                        alt
                      />
                    </figure>
                    <h3>Foie Gras</h3>
                    <span className="id-color">$99</span>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 text-center"
                  style={{ backgroundSize: "cover" }}
                >
                  <div
                    className="menu-itemss"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure className="pic-hover hover-scale mb10">
                      <span
                        className="center-xy"
                        style={{ left: "76.5px", top: "76.5px" }}
                      >
                        <a
                          className="image-popup"
                          href="http://nhit.sg-host.com/wp-content/uploads/2017/03/1-7.jpg"
                        >
                          <i className="fa fa-image btn-action btn-action-hide" />
                        </a>
                      </span>
                      <span
                        className="bg-overlay"
                        style={{ width: 213, height: 213 }}
                      />
                      <span className="border-overlay" />
                      <img
                        src="http://nhit.sg-host.com/wp-content/uploads/2017/03/1-7.jpg"
                        className="img-responsive"
                        alt
                      />
                    </figure>
                    <h3>Roasted Chicken</h3>
                    <span className="id-color">$55</span>
                  </div>
                </div>
              </div>
              <div
                className="vc_empty_space"
                style={{ height: 32, backgroundSize: "cover" }}
              >
                <span className="vc_empty_space_inner" />
              </div>
              <div
                className="vc_btn3-container  customThemeRed vc_btn3-center"
                style={{ backgroundSize: "cover" }}
              >
                <a
                  className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-round vc_btn3-style-modern vc_btn3-icon-left vc_btn3-color-white"
                  href="/menu"
                  title="Menu"
                >
                  <i className="vc_btn3-icon fas fa-utensils" /> Our Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" style={{ backgroundSize: "cover" }} />
  </section>
 
</div>

            
            </React.Fragment>
         
        );
    }
}

export default Home;