import React from 'react';
import '../components/globalCSS/NavigationBar.css'


class NavigationBar extends React.Component{

  state={
    isToggled:true,
  }

  render(){
    console.log(this.state.isToggled)
    return (
      <div>
          <nav className={this.state.isToggled?"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 toggled":"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"}>
              <div class="container-fluid d-flex flex-column p-0">
                  <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
                      <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                      <div class="sidebar-brand-text mx-3"><span>Brand</span></div>
                  </a>
                  <hr class="sidebar-divider my-0"/>
                  <ul class="nav navbar-nav text-light" id="accordionSidebar">
                      <li class="nav-item" role="presentation"><a class="nav-link" href=""><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                      <li class="nav-item" role="presentation"><a class="nav-link active" href=""><i class="fas fa-user"></i><span>Profile</span></a></li>
                      <li class="nav-item" role="presentation"><a class="nav-link" href=""><i class="fas fa-table"></i><span>Table</span></a></li>
                      <li class="nav-item" role="presentation"><a class="nav-link" href=""><i class="far fa-user-circle"></i><span>Login</span></a></li>
                      <li class="nav-item" role="presentation"><a class="nav-link" href=""><i class="fas fa-user-circle"></i><span>Register</span></a></li>
                  </ul>
                  <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button" onClick={() => this.setState({isToggled: !this.state.isToggled})} ></button></div>

              </div>
          </nav>
          <div class="d-flex flex-column" id="content-wrapper">
              <div id="content">
                  <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                      <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button" onClick={() => this.setState({isToggled: !this.state.isToggled})}><i class="fas fa-bars"></i></button>

                          <ul class="nav navbar-nav flex-nowrap ml-auto">
                              <li class="nav-item dropdown no-arrow mx-1" role="presentation">
                                  <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="badge badge-danger badge-counter">3+</span><i class="fas fa-bell fa-fw"></i></a>
                                      <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                                          role="menu">
                                          <h6 class="dropdown-header">alerts center</h6>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="mr-3">
                                                  <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                                              </div>
                                              <div><span class="small text-gray-500">December 12, 2019</span>
                                                  <p>A new monthly report is ready to download!</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="mr-3">
                                                  <div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
                                              </div>
                                              <div><span class="small text-gray-500">December 7, 2019</span>
                                                  <p>$290.29 has been deposited into your account!</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="mr-3">
                                                  <div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
                                              </div>
                                              <div><span class="small text-gray-500">December 2, 2019</span>
                                                  <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                              </div>
                                          </a><a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                  </div>
                              </li>
                              <li class="nav-item dropdown no-arrow mx-1" role="presentation">
                                  <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i class="fas fa-envelope fa-fw"></i><span class="badge badge-danger badge-counter">7</span></a>
                                      <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                                          role="menu">
                                          <h6 class="dropdown-header">alerts center</h6>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="dropdown-list-image mr-3"><img class="rounded-circle" alt="avatar4" src="assets/img/avatars/avatar4.jpeg"/>
                                                  <div class="bg-success status-indicator"></div>
                                              </div>
                                              <div class="font-weight-bold">
                                                  <div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                  <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="dropdown-list-image mr-3"><img class="rounded-circle" alt="avatar2" src="assets/img/avatars/avatar2.jpeg"/>
                                                  <div class="status-indicator"></div>
                                              </div>
                                              <div class="font-weight-bold">
                                                  <div class="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                  <p class="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar3.jpeg"/>
                                                  <div class="bg-warning status-indicator"></div>
                                              </div>
                                              <div class="font-weight-bold">
                                                  <div class="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                  <p class="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar5.jpeg"/>
                                                  <div class="bg-success status-indicator"></div>
                                              </div>
                                              <div class="font-weight-bold">
                                                  <div class="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                  <p class="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                              </div>
                                          </a><a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                  </div>
                                  <div class="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
                              </li>
                              <div class="d-none d-sm-block topbar-divider"></div>
                              <li class="nav-item dropdown no-arrow" role="presentation">
                                  <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span><img class="border rounded-circle img-profile" alt="avatar1" src="assets/img/avatars/avatar1.jpeg"/></a>
                                      <div
                                          class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                          <a
                                              class="dropdown-item" role="presentation" href="#"><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                                              <div class="dropdown-divider"></div><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a></div>
                      </div>
                      </li>
                      </ul>
              </div>
              </nav>
          </div>
      </div>
      </div>
    );
  }
}
export default NavigationBar;
