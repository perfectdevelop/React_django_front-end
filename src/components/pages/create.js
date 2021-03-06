{% extends 'base.html' %}
{% load static %}
{% load i18n %}
{% block content %}

    {% block head %}
    <title>Home | Flicker Face</title>
    {% endblock %}

    <main>
        <div class="main-section">
            <div class="container">
                <div class="main-section-data">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 pd-left-none no-pd">                            
                            <div class="main-left-sidebar left-sidebar-fixed no-margin">
                                {% include "layout/profile_info.html" %}
                                {% include "layout/user_nav.html" %}
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 no-pd">
                            {% include "layout/page/page_searchbox.html" %}
                            <!--search-sec end-->
                            <div class="main-ws-sec">
                                <div class="post-topbar">
                                    <div class="post-project-fields">
                                        <form id="form_create_group" method="post">
                                        {% csrf_token %}
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h5 class="mb-3 font-weight-bold">Create a Page and Invite People</h5>
                                                </div>
                                                <div class="col-lg-12 form-group">
                                                    <label>Page Title</label>
                                                    <input name="title" class="mb-0 form-control group_title_input" maxlength="60" />
                                                </div>
                                                <div class="col-lg-12 form-group">
                                                    <label>Select background image (Optional)</label>
                                                    <div>
                                                        <label type="button" class="btn image-picker"
                                                            title="Add Image">
                                                            <input type="file" id="group_img" name="group_img" accept=".jpg, .jpeg, .png, .gif,"
                                                                hidden />
                                                            <i class="fa fa-image"></i>
                                                            <img class="image-preview" style="display: none;" src=""
                                                                alt="" />
                                                            <button type="button" title="remove"
                                                                class="btn btn-danger btn-file-remove"
                                                                style="display:none;"><i
                                                                    class="fa fa-times"></i></button>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 form-group">
                                                    <label>Invite People</label>
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input"
                                                            id="all_users" value="1" name="invite_users"  checked>
                                                        <label class="custom-control-label" for="all_users">
                                                            All My Followers
                                                        </label>
                                                    </div>
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" id="custom_users"
                                                            name="invite_users" value="0" data-toggle="modal" data-target="#inviteUser">
                                                        <label class="custom-control-label" for="custom_users">
                                                            Custom
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="post-st">
                                                        <ul>
                                                            <li>
                                                                <button type="button" class="post_project active btn_create_page"
                                                                    title="Create a Post">Create</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <!--post-st end-->
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 pd-right-none no-pd">
                            <div class="right-sidebar">                
                                {% include "layout/user_list.html" %}                          
                            </div>
                            <!--right-sidebar end-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    

{% include "layout/modal_invite.html" %}


{% endblock %}