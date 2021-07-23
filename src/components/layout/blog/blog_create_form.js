import React from 'react';
import { Link } from 'react-router-dom';

const Blog_create_form = () => {
    return (
        <div>
            <div class="post-topbar">
                <div class="post-project-fields">
                    <form id="form_create_post" method="post">
                        {/* {% csrf_token %} */}
                        <div class="row">
                            <div class="col-lg-12">
                                <h5 class="mb-3 font-weight-bold">Share and update</h5>
                            </div>
                            <div class="col-lg-12">
                                <textarea name="content"
                                    placeholder="Write your thoughts..." class="post_content" id="post_content"></textarea>
                            </div>
                            <div class="col-lg-12">
                                <div class="attachs_warp">
                                    <div class="owl-carousel owl-theme post-attaches-slider">

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="inp-field d-flex align-items-center">
                                    <select name="visibleto" class="select_public mb-0 mr-2">
                                        <option value="">Post visible to</option>
                                        <option value="1">Public</option>
                                        <option value="0">My Followers only</option>
                                    </select>
                                    <label for="fileAttachmentBtn" type="button" class="btn btn-light"
                                        title="Add Image">
                                        <input type="file" id="fileAttachmentBtn" accept=".jpg, .jpeg, .png, .gif, .avi, .mp4" hidden multiple />
                                        <i class="fa fa-image"></i>
                                    </label>
                                    <button type="button" class="btn btn-light"
                                        title="Add Smile" id="btn_emojis">
                                        <i class="fa fa-smile"></i>
                                    </button>
                                    <button type="button" class="btn btn-light btn_gif_input" title="Add Gif">
                                        <i class="fa fa-icons"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="post-st">
                                    <ul>
                                        <li class="add_cancel_btn">
                                            <button type="button" class="post_project active btn_store_post"
                                                title="Create a Post">Create a Post</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="post_id" id="post_id" />

                        {/* {% if cur_page %}                   
                <input type="hidden" name="page_id" id="page_id" value="{{ cur_page.id }}">  
            {% endif %}
            {% if cur_group %}                   
                <input type="hidden" name="group_id" id="group_id" value="{{ cur_group.id }}">  
            {% endif %} */}
                        <input type="hidden" name="page_id" id="page_id" value="" />
                    </form>
                </div>

                {/* <!--post-st end--> */}
            </div>
        </div>
    )
}

export default Blog_create_form;