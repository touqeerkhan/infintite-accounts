import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/all';
import { GrMail } from 'react-icons/gr';

import './index.css'
import { Dropdown, NavDropdown, Container, Row, Col } from 'react-bootstrap';
function NavBar(props) {
  const [color, setColor] = useState('#009580');
  function setBgColor(colorValue) {
    setColor(colorValue);
  }

  return (
    <div className={'nav-top'}>
      <div className='top' style={{ backgroundColor: color }}>
        <div className='container'>
          <div className='t-op row align-items-center'>
            <div className='col-sm-6 top-left'>
              <ul className='pb-1 mb-0'>
                <li className='ml-3'>
                  <FaPhone className={'top-icon'} />
                </li>
                <li> 0121 667 3882</li>
                <li className='ml-3'>
                  <GrMail className={'top-icon'} />
                </li>
                <li> Hello@infiniteaccounts.com</li>
              </ul>
            </div>
            <div className='col-sm-6 top-middle'>
              <ul className='pb-0 mb-0'>
                <li>
                  <a href='#'>
                    <FaInstagram className={'top-icon'} />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaTwitter className={'top-icon'} />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaPinterest className={'top-icon'} />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaYoutube className={'top-icon'} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={'container'}>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div
            className='collapse navbar-collapse accountant-navbar text-uppercase'
            id='navbarNav'
          >
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  to={'/'}
                  className={'nav-link'}
                  onClick={() => setBgColor('#009580')}
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to={'/aboutUs'}
                  className={'nav-link'}
                  onClick={() => setBgColor('#009580')}
                >
                  ABOUT US
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to={'/cloud'}
                  className={'nav-link'}
                  onClick={() => setBgColor('#009580')}
                >
                  Cloud Computing
                </Link>
              </li>
               <li class="dropdown">
      	<a href="#" class="dropdown-toggle" data-toggle="dropdown">
      		Gadgets <b class="caret"></b>
      	</a>
        <ul class="dropdown-menu mega-menu">
          <li>
            <div class="row-fluid">
              <ul class="media-list span4">
                <li class="media">
                	<a href="#" class="pull-left">
                		<img src="http://lorempixel.com/70/70/" alt="" class="media-object" />
                	</a>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="#">Shiny Gadgets</a></h5>
                    <ul class="unstyled">
                      <li><a href="#">Subcategory One</a></li>
                      <li><a href="#">Subcategory Two</a></li>
                      <li><a href="#">Subcategory Three</a></li>
                      <li><a href="#">Subcategory Four</a></li>
                      <li><a href="#">Subcategory Five</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul class="media-list span4">
                <li class="media">
                	<a href="#" class="pull-left">
                		<img src="http://lorempixel.com/70/70/" alt="" class="media-object" />
                	</a>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="#">Shiny Gadgets</a></h5>
                    <ul class="unstyled">
                      <li><a href="#">Subcategory One</a></li>
                      <li><a href="#">Subcategory Two</a></li>
                      <li><a href="#">Subcategory Three</a></li>
                      <li><a href="#">Subcategory Four</a></li>
                      <li><a href="#">Subcategory Five</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul class="media-list span4">
                <li class="media">
                	<a href="#" class="pull-left">
                		<img src="http://lorempixel.com/70/70/" alt="" class="media-object" />
                	</a>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="#">Shiny Gadgets</a></h5>
                    <ul class="unstyled">
                      <li><a href="#">Subcategory One</a></li>
                      <li><a href="#">Subcategory Two</a></li>
                      <li><a href="#">Subcategory Three</a></li>
                      <li><a href="#">Subcategory Four</a></li>
                      <li><a href="#">Subcategory Five</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
            <div class="row-fluid">
              <ul class="media-list span4">
                <li class="media">
                	<a href="#" class="pull-left">
                		<img src="http://lorempixel.com/70/70/" alt="" class="media-object" />
                	</a>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="#">Shiny Gadgets</a></h5>
                    <ul class="unstyled">
                      <li><a href="#">Subcategory One</a></li>
                      <li><a href="#">Subcategory Two</a></li>
                      <li><a href="#">Subcategory Three</a></li>
                      <li><a href="#">Subcategory Four</a></li>
                      <li><a href="#">Subcategory Five</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul class="media-list span4">
                <li class="media">
                	<a href="#" class="pull-left">
                		<img src="http://lorempixel.com/70/70/" alt="" class="media-object" />
                	</a>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="#">Shiny Gadgets</a></h5>
                    <ul class="unstyled">
                      <li><a href="#">Subcategory One</a></li>
                      <li><a href="#">Subcategory Two</a></li>
                      <li><a href="#">Subcategory Three</a></li>
                      <li><a href="#">Subcategory Four</a></li>
                      <li><a href="#">Subcategory Five</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul class="media-list span4">
                <li class="media">
                	<a href="#" class="pull-left">
                		<img src="http://lorempixel.com/70/70/" alt="" class="media-object" />
                	</a>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="#">Shiny Gadgets</a></h5>
                    <ul class="unstyled">
                      <li><a href="#">Subcategory One</a></li>
                      <li><a href="#">Subcategory Two</a></li>
                      <li><a href="#">Subcategory Three</a></li>
                      <li><a href="#">Subcategory Four</a></li>
                      <li><a href="#">Subcategory Five</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
              <li className='nav-item'>
                <Link
                  to={'/who-we-serve'}
                  className={'nav-link'}
                  onClick={() => setBgColor('#009580')}
                >
                  WHO WE SERVE
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to={'/offices'}
                  className={'nav-link'}
                  onClick={() => setBgColor('#009580')}
                >
                  OFFICES
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/resources'} className={'nav-link'}>
                  RESOURCES
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contact-us'} className={'nav-link'}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;
