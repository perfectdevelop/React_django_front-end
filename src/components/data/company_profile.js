
{% extends 'base.html' %}
{% load static %}
{% load i18n %}
{% block content %}

    {% block head %}
    <title>Home | Flicker Face</title>
    {% endblock %}
    <div class="bg-white shadow-sm border-bottom" style="margin-top: 55px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="d-flex align-items-center py-3">
                        <div class="profile-left">
                            <h5 class="font-weight-bold text-dark mb-1 mt-0">Google <span class="text-info"><i
                                        data-toggle="tooltip" data-placement="top" title="Verified"
                                        class="feather-check-circle"></i></span></h5>
                            <p class="mb-0 text-muted"> Internet | Mountain View, CA | 14,128,005 followers</p>
                        </div>
                        <div class="profile-right ml-auto">
                            <button type="button" class="btn btn-primary"> <i class="feather-plus"></i> Follow </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="main-section mt-3">
        <div class="container">
            <div class="main-section-data">
                <div class="row">
                    <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                        <div class="main-left-sidebar left-sidebar-fixed no-margin">
                            <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
                                <div class="p-5">
                                    <img src="/static/images/clogo.png" class="img-fluid" alt="Responsive image">
                                </div>
                                <div class="p-3 border-top border-bottom">
                                    <h6 class="font-weight-bold text-dark mb-1 mt-0">Overview</h6>
                                    <p class="mb-0 text-muted">Google???s mission is to organize the world???s information and make it
                                        universally accessible and useful.
                                    </p>
                                </div>
                                <div class="p-3">
                                    <div class="d-flex align-items-top mb-2">
                                        <p class="mb-0 text-dark font-weight-bold">Common Connections</p>
                                        <p class="font-weight-bold text-info mb-0 mt-0 ml-auto">358</p>
                                    </div>
                                    <div class="d-flex align-items-top">
                                        <p class="mb-0 text-dark font-weight-bold">All Employees</p>
                                        <p class="font-weight-bold text-info mb-0 mt-0 ml-auto">191,895</p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="col-lg-6 col-md-8 no-pd">
                        <div class="main-ws-sec">
                            <div class="box shadow-sm rounded bg-white mb-3 overflow-hidden">
                                <ul class="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                            aria-controls="home" aria-selected="true">About</a>
                                    </li>                       
                                </ul>
                            </div>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="box shadow-sm border rounded bg-white mb-3">
                                        <div class="box-title border-bottom p-3">
                                            <h6 class="m-0">About</h6>
                                        </div>
                                        <div class="box-body p-3">
                                            <p>Google???s mission is to organize the world???s information and make it universally
                                                accessible and useful.
                                            </p>
                                            <p class="mb-0">Since our founding in 1998, Google has grown by leaps and bounds. From
                                                offering search in a single language we now offer dozens of products and
                                                services???including various forms of advertising and web applications for all kinds
                                                of tasks???in scores of languages. And starting from two computer science students in
                                                a university dorm room, we now have thousands of employees and offices around the
                                                world. A lot has changed since the first Google search engine appeared. But some
                                                things haven???t changed: our dedication to our users and our belief in the
                                                possibilities of the Internet itself.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div class="box shadow-sm border rounded bg-white mb-3">
                                        <div class="box-title border-bottom p-3">
                                            <h6 class="m-0">Locations</h6>
                                        </div>
                                        <div class="p-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="card overflow-hidden">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501889.172354371!2d73.15671299623955!3d31.003573085499198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1575738201305!5m2!1sen!2sin"
                                                            width="100%" height="150" frameborder="0" style="border:0;"
                                                            allowfullscreen=""></iframe>
                                                        <div class="card-body">
                                                            <h6 class="card-title">Postal Address</h6>
                                                            <p class="card-text">PO Box 16122 Collins Street West Victoria 8007
                                                                Australia</p>
                                                            <a href="#" class="text-link font-weight-bold"><i
                                                                    class="feather-external-link"></i> Get Directions</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card overflow-hidden">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658166621!2d75.78663235513761!3d30.900473637624447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1575738867148!5m2!1sen!2sin"
                                                            width="100%" height="150" frameborder="0" style="border:0;"
                                                            allowfullscreen=""></iframe>
                                                        <div class="card-body">
                                                            <h6 class="card-title">Envato HQ</h6>
                                                            <p class="card-text">121 King Street, Melbourne Victoria 3000 Australia
                                                            </p>
                                                            <a href="#" class="text-link font-weight-bold"><i
                                                                    class="feather-external-link"></i> Get Directions</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                  
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 pd-right-none no-pd">
                        <div class="right-sidebar right-sidebar-fixed">                                
                            <div class="box shadow-sm border rounded bg-white mb-3">
                                <div class="box-title border-bottom p-3">
                                    <h6 class="m-0">Overview</h6>
                                </div>
                                <div class="box-body">
                                    <table class="table table-borderless mb-0">
                                        <tbody>
                                            <tr class="border-bottom">
                                                <th class="p-3">Website</th>
                                                <td class="p-3"><a href="#">www.google.com</a></td>
                                            </tr>
                                            <tr class="border-bottom">
                                                <th class="p-3">Industry</th>
                                                <td class="p-3">Internet</td>
                                            </tr>
                                            <tr class="border-bottom">
                                                <th class="p-3">Company size</th>
                                                <td class="p-3">10,001+ employees <i data-toggle="tooltip"
                                                        data-placement="top" title="Google???s mission is to organize the world???s information and make it universally accessible and useful.
                                            " class="feather-info text-info"></i> </td>
                                            </tr>
                                            <tr class="border-bottom">
                                                <th class="p-3">Headquarters</th>
                                                <td class="p-3">Mountain View, CA</td>
                                            </tr>
                                            <tr class="border-bottom">
                                                <th class="p-3">Type</th>
                                                <td class="p-3">Public Company</td>
                                            </tr>
                                            <tr class="border-bottom">
                                                <th class="p-3">Founded</th>
                                                <td class="p-3">1998</td>
                                            </tr>                                
                                        </tbody>
                                    </table>
                                </div>
                            </div>         
                        </div>
                    </div>        
                </div>                       
            </div>
        </div>
    </div>
    

   
    

{% endblock %}