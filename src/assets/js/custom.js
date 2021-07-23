jQuery(function ($) {

    'use strict';
    var user_name = '';
    var invite_user_array = [];
    var currentPage = 1;
    var pagenum = 1;
    var post_attaches = [];
    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp','avi','mp4'];
    var imgExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    var videoExtension = ['avi','mp4'];
    var max_file_number = 10;
    var item_width = 160;
    var curSlidePos = 0;
    var slideLeft = 0
    var cur_user_avatar_url = '';
    var cur_user_full_name = '';
    var max_cnt = 500;
    var where = '';
    var invite_user_array = [];
    var token = $("#meta_csrf input[name='csrfmiddlewaretoken']").val();
    var need_get_post = '';
// ----------------------------------------------------------------
   


    (function() {
       
        function display_attaches()
        {
            $(".attachs_warp").html("");
            var temp=`
                <div class="owl-carousel owl-theme post-attaches-slider">
                                
                </div>
            `;
            $(".attachs_warp").append(temp);

            
            for (let index = 0; index < post_attaches.length; index++) {
                var html = `
                     <div class="item">
                         <div class="embed-responsive embed-responsive-16by9">
                             <img data-url="/media/${post_attaches[index]}"
                                 class="embed-responsive-item"
                                 src="/media/${post_attaches[index]}" />
                             <button type="button" data-name="${post_attaches[index]}" class="btn_transparent btn_delete_uploadedFile">
                                 <i class="fas fa-times"></i>
                             </button>
                             <input type="hidden" name="attachname[]" value="${post_attaches[index]}">
                         </div>
                     </div>
                `;
                $(".post-attaches-slider").append(html);               
             }
           
             
            $('.post-attaches-slider').owlCarousel({
                 items: 1,
                 nav: true,
                 dots: false,
                 loop: false,
                 margin: 50,
                 smartSpeed: 1200,
                 touchDrag: false,
                 mouseDrag : false,
                 navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
             });
        }

        function emojiPickerInit()
        {
            $('#post_content').emojiPicker({
                width: '300px',
                height: '200px',
                button: false
            });
            $('#post_content').emojiPicker('toggle');
            $('#post_content').emojiPicker('toggle');
        }

        function get_content_list()
        {
            $("#loading").css("display","block");        
            var data = $("#pagination-form").serialize();
            $.ajax({
                url: "/get_content_list?"+data,
                method: 'GET',            
                success: function (response) {                
                    var data = response.results;                              
                    $("#loading").css("display","none");                
                    pagenum = response.pagenum;
                    $(".total-page").html(pagenum);
                    if(data.length>0)
                    {
                        for(var i=0;i<data.length;i++)
                        {
                            var html = `
                            <div data-pid="${data[i].post_id}" class="post-bar post_item_view post_item_${data[i].post_id}">
                                <div class="post_topbar">
                                    <div class="user-detail">
                                        <img class="img_avatar" src="/media/${data[i].avatar}" alt="">
                                        <div class="user-name">                                       
                                            <h3>
                                                <a class="" href="/user/${data[i].username}">${data[i].fullname}</a>
                                            </h3>
                                            <span>
                                                <img src="/static/images/clock.png" alt="">
                                                ${data[i].created_at}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="post_action">`;

                                    if(data[i].me == '1')
                                    { 
                                        html +=  `
                                        <button class="btn btn_dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-h"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown_custom_position"> 
                                            <button data-id="${data[i].post_id}" class="btn_transparent dropdown-item btn_edit_post"><i class="far fa-edit"></i> Edit</button>
                                            <button data-id="${data[i].post_id}" class="btn_transparent dropdown-item btn_delete_post"><i class="far fa-trash-alt"></i> Delete</button>
                                            <button data-id="${data[i].post_id}" class="btn_transparent dropdown-item btn_hide_post btn_hide_post_${data[i].post_id}"><i class="fas fa-times"></i> `;
                                            if(data[i].public == "1")
                                            {
                                                html+=`Hide from public`;
                                            }
                                            else
                                            {
                                                html+=`Show to public`;
                                            }
                                            
                                            html+=` </button>
                                        </div>`;
                                        }

                                    html +=`                                
                                    </div>
                                </div>
                                <div class="job_descp">`;

                                    if(data[i].attach.length > 0)
                                    {
                                        var subhtml = '';
                                        var attachs = data[i].attach;
                                        subhtml += `
                                            <div class="owl-carousel owl-theme post-slider">                                 
                                            `;                                

                                        for(var j=0;j<attachs.length;j++)
                                        {                                
                                            var fileExt = attachs[j].split(".")[1];
                                            
                                            if ($.inArray(fileExt, imgExtension) == -1) {
                                                subhtml += `                                                
                                                    <div class="item">
                                                        <div class="embed-responsive embed-responsive-16by9">
                                                            <video class="embed-responsive-item attached_item_view attached_item_${data[i].post_id}" controls
                                                                data-url="/media/${attachs[j]}">
                                                                <source src="/media/${attachs[j]}">
                                                            </video>
                                                        </div>
                                                    </div>
                                                `;
                                            }
                                            else
                                            {
                                                subhtml += `
                                                    <div class="item">
                                                        <div class="embed-responsive embed-responsive-16by9">
                                                            <img data-url="/media/${attachs[j]}"
                                                                class="embed-responsive-item attached_item_view attached_item_${data[i].post_id}"
                                                                src="/media/${attachs[j]}" />
                                                        </div>
                                                    </div>
                                                `;
                                            }
                                        
                                        }
                                        subhtml += `
                                            </div>
                                            `;
                                        html += subhtml;
                                    }

                                    html +=`                                
                                    <span class="d-inline-block post_text_limit post_content_text mb-3 post_content_${data[i].post_id}">
                                        ${data[i].content}`;
                                    if(data[i].content.length > 250)
                                    {
                                        html+=`                                
                                            <button class="btn_transparent btn_show_more_content" data-id="${data[i].post_id}">
                                                read more
                                            </button>                                
                                        `;
                                    }            
                                    html +=`    
                                    </span>
                                    <ul class="skill-tags">
                                        <li>                                        
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="Awesome!!">Awesome!!</a>                                       
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="Nice pics!">Nice pics!</a>
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="Congrats!">Congrats!</a>  
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="Good Looking!">Good Looking!</a>
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="How are you?">How are you?</a>
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="Where are you?">Where are you?</a>  
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="Excellent!">Excellent!</a>
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="Helpful information!">Helpful information!</a>
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="Please most more information">Please most more information</a> 
                                        </li>
                                        <li>
                                            <a type="button" class="btn btn_autocomment btn-outline-auto btn-sm mr-1" data-pid="${data[i].post_id}" data-text="I am interested">I am interested</a>    
                                        </li>                                    
                                    </ul>
                                </div>
                                <div class="job-status-bar">
                                    <ul class="like-com">
                                        <li>
                                            <a data-id="${data[i].post_id}" class="btn_like `;
                                            if(data[i].liked == '1')
                                            {                                            
                                                html += `liked`;
                                            }                                        
                                            html +=`
                                            "><i class="fas fa-heart"></i> Like</a>
                                            <img src="" alt="">
                                            <span class="cnt_like_p_${data[i].post_id}">${data[i].likes}</span>
                                        </li>
                                        <li>
                                            <a data-id="${data[i].post_id}" class="com btn_viewcomment">
                                                <i class="fas fa-comment-alt"></i>
                                                Comment
                                                <label class="cnt_comment_${data[i].post_id}">${data[i].comments}</label>
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#"><i class="fas fa-eye"></i>Views ${data[i].views}</a>
                                </div>
                                <div class="comment-section">
                                    <div class="comment-sec display_closed comment_content comment_content_${data[i].post_id}">
                                        <ul class="added_comment_${data[i].post_id}">
                                        </ul>
                                    </div>
                                    <div class="post-comment">
                                        <div class="cm_img">
                                            <img src="${cur_user_avatar_url}" alt="">
                                        </div>
                                        <div class="comment_box">                                        
                                            <div class="d-flex">
                                                <input type="text" class="form-control comment_content_txt comment_content_txt_${data[i].post_id}"
                                                    placeholder="Post a comment">
                                                <button type="button" class="btn_store_comment" data-pid="${data[i].post_id}">Send</button>
                                            </div>                                        
                                        </div>
                                    </div>
                                    <!--post-comment end-->
                                </div>                        
                            </div>               
                            `;
                            $('.posts-section').append(html);
                        }  
                                            
                        $('.skill-tags').mCustomScrollbar({
                            axis: 'x',
                            theme: 'dark',
                            integer: 100,
                            setLeft: 0,
                            scrollbarPosition: 'outside',
                        });  
                        $('.post-slider').owlCarousel({
                            items: 1,
                            nav: true,
                            dots: false,
                            loop: false,
                            margin: 50,
                            smartSpeed: 1200,
                            touchDrag: false,
                            mouseDrag : false,
                            navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
                        });    
                        
                    }
                    else
                    {
                        $(".total-page").css('display','none');
                        $("#pagination-form").css('display','none');                    
                    }
                }
            })
        }

        function init_menu()
        {
            var cur_url = window.location.href;            
            if (cur_url.indexOf("group") >= 0)
            {                
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_group").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("page") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_page").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("job") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_job").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("trending") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_trending").addClass("selected_sub_menu");
            }            
            else if(cur_url.indexOf("messages") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_messages").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("notifications") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_notifications").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("ideas") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_ideas").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("clips") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_clips").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("trolls") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_trolls").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("funny") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_funny").addClass("selected_sub_menu");
            }
            else if(cur_url.indexOf("inspired") >= 0)
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
                $(".sub_menu_item_inspired").addClass("selected_sub_menu");
            }
            else
            {
                $(".sub_menu_item").removeClass("selected_sub_menu");
            }
        }
        

        $(document).ready(function(){
            emojiPickerInit();
            init_menu();
            cur_user_avatar_url = $('.cur_user_avatar_url').prop('src');
            cur_user_full_name = $(".user_full_name").html();
            
            need_get_post = $(".need_get_post").val();
            if(need_get_post == "1")
            {
                $(".btn-current-page").html(currentPage);
                $("#currentPage").val(currentPage);
                $(".total-page").html(pagenum);
                get_content_list();                
                where = $("input[name='where']").val();
            }
            
        });
        
        // -----------------------Post part-------------------------------
        $(window).scroll(function() {            
            if(need_get_post == "1")
            {                
                if($(window).scrollTop() + $(window).height() == $(document).height()) {                    
                    if(currentPage==pagenum)
                    {                        
                        return false;
                    }
                    currentPage++;
                    $(".btn-current-page").html(currentPage);
                    $("#currentPage").val(currentPage);
                    get_content_list();
                }
            }
        });
        $(document).on('click','.alertborder',function(){                
            $(this).removeClass('alertborder');
        });

        $('#btn_emojis').click(function(e) {
            e.preventDefault();
            
            $('#post_content').emojiPicker('toggle');
        });

        $(document).on('click','.btn_delete_post',function(){
            var id = $(this).data('id');
            if(id == "")
            {
                return false;
            }
            else
            {
                if (!confirm("Do you want to delete")){
                   return false;
                }
                else
                {
                    $.ajax({
                        url: "/delete_post",
                        method: 'GET', 
                        type: 'json',
                        data: {id:id},     
                        success: function(result){                  
                            if(result)
                            {
                                location.reload();
                            }
                        }
                    })
                }
                
            }
            
        });

        $(document).on('click','.btn_hide_post',function()
        {
            var post_id = $(this).data('id');
            if(post_id == "")
            {
                return false;
            }
            else
            {
                $.ajax({
                    url: "/set_private",
                    method: 'GET', 
                    type: 'json',
                    data: {id:post_id},     
                    success: function(response){                  
                        var result = response.status;
                        if(result == "1")
                        {
                            $(".btn_hide_post_"+post_id).html('<i class="fas fa-times" aria-hidden="true"></i> Hide from public');
                        }
                        else
                        {
                            $(".btn_hide_post_"+post_id).html('<i class="fas fa-times" aria-hidden="true"></i> Show to public');
                            var where = $("input[name='where']").val();
                            if(where == "dashboardpage")
                            {
                                $(".post_item_"+post_id).remove();
                            }
                        }
                    }
                })
            }
            
        });

        $(document).on('click','.btn_gif_input',function(){ 
            $("#gifInput").modal('toggle');
        });

        $(document).on('click','.btn_store_comment',function(){
            var post_id = $(this).data('pid');
            var comment = $(".comment_content_txt_"+post_id).val();
            var cnt_comment = parseInt($(".cnt_comment_"+post_id).html());
            if(comment == "")
            {
                return false;
            }
            else
            {
                $(".comment_content_txt_"+post_id).val(''); 
                $(".cnt_comment_"+post_id).html(cnt_comment+1);            
                // $(".total_cnt_comments_"+post_id).html("1 of "+(cnt_comment+1));            
                $.ajax({
                    url: "/addcomment",
                    method: 'GET',  
                    type: 'json',
                    data: {post_id:post_id,content:comment},          
                    success: function (response) {
                        if(response.results)
                        {
                           
                            var html = `
                                <li>
                                    <div class="comment-list comment_item_${response.pid} comment_num_${response.cid}">
                                        <div class="bg-img">
                                            <img src="${cur_user_avatar_url}" alt="">
                                        </div>
                                        <div class="comment pos_rel">
                                            <div class="d-flex">
                                                <div class="w-100">
                                                    <h3>${cur_user_full_name}</h3>
                                                    <span><img src="/static/images/clock.png" alt=""> 1Min
                                                    ago</span>
                                                </div>
                                                <div>
                                                    <button class="btn btn_dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown_custom_position" style=""> 
                                                        <button class="btn_transparent dropdown-item btn_edit_comment" data-cid="${response.cid}" data-pid="${response.pid}" data-toggle="modal" data-target="#editCommentModal">
                                                            <i class="far fa-edit" aria-hidden="true"></i> Edit
                                                        </button>
                                                        <button class="btn_transparent dropdown-item btn_delete_comment" data-cid="${response.cid}" data-pid="${response.pid}">
                                                            <i class="far fa-trash-alt" aria-hidden="true"></i> Delete
                                                        </button>                                                          
                                                    </div>                                                        
                                                </div>
                                            </div>
                                            
                                            <span class="comment_content post_text_limit comment_content_${response.cid}">
                                                ${comment}
                                            </span>
                                            
                                            <div class="mt-3">
                                                <button class="mr-2 btn_transparent btn_cnt_style btn_like_comment" data-cid="${response.cid}">
                                                <i class="far fa-heart text-warning display_none" aria-hidden="true"></i> &nbsp;Like(<span class="likes cnt_number_style">0</span>)</button>
                                                <button class="mr-2 btn_cnt_style btn_transparent btn_viewreply" data-id="${response.cid}"><i class="fa fa-reply-all display_none"></i>&nbsp;Reply(<span class="cnt_number_style cnt_reply_${response.cid}">0</span>)</button>
                                        
                                            </div>
                                            <div class="display_closed added_reply_${response.cid}">
                                                <div class="text-right">
                                                    <button type="button" class="btn_transparent btn_add_reply" data-cid="${response.cid}" data-toggle="modal" data-target="#addReplyModal">Add Reply</button>
                                                </div>
                                                <ul class="added_reply_content_${response.cid}">                                                
                                                                                                    
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div> 
                                </li>
                                `;        
                            $(".added_comment_"+post_id).prepend(html);
                        }
                        else
                        {
                            location.reload();
                        }
                    }   
                });         

               
            }
        });

        $(document).on('click','.btn_viewcomment',function(){
            var post_id = $(this).data('id');
            if($(".comment_content_"+post_id).hasClass('display_closed'))
            {
                $(".comment_content_"+post_id).removeClass('display_closed');
                $(".comment_content_"+post_id).slideDown("slow");
                if(post_id =="")
                {
                    return false;
                }
                else
                {
                    $.ajax({
                        url: "/getcomments",
                        method: 'GET',  
                        type: 'json',
                        data: {pid:post_id},          
                        success: function (response) {                            
                            var data = response.comments;
                            console.log(data);
                            if(data.length>0)
                            {
                                $(".added_comment_"+post_id).html("");
                                for(var i=0;i<data.length;i++)
                                {
                                    var html=`
                                        <li>
                                            <div class="comment-list comment_item_${data[i].pid} comment_num_${data[i].cid}">
                                                <div class="bg-img">
                                                    <img src="`;
                                                    if(data[i].avatar=="")
                                                    {
                                                        html +="/static/images/user.png";
                                                    }
                                                    else
                                                    {
                                                        html +=data[i].avatar;
                                                    }                         
                                                    html +=`
                                                    " alt="">
                                                </div>
                                                <div class="comment pos_rel">
                                                    <div class="d-flex">
                                                        <div class="w-100">
                                                            <h3>${data[i].full_name}</h3>
                                                            <span><img src="/static/images/clock.png" alt=""> ${data[i].created_at}
                                                            ago</span>
                                                        </div>
                                                        <div>`;
                                                        
                                                        if(data[i].me=='1')
                                                        {
                                                            html += `
                                                                <button class="btn btn_dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                                                                </button>
                                                                <div class="dropdown-menu dropdown_custom_position" style=""> 
                                                                    <button class="btn_transparent dropdown-item btn_edit_comment" data-cid="${data[i].cid}" data-pid="${data[i].pid}" data-toggle="modal" data-target="#editCommentModal">
                                                                        <i class="far fa-edit" aria-hidden="true"></i> Edit
                                                                    </button>
                                                                    <button class="btn_transparent dropdown-item btn_delete_comment" data-cid="${data[i].cid}" data-pid="${data[i].pid}">
                                                                        <i class="far fa-trash-alt" aria-hidden="true"></i> Delete
                                                                    </button>                                                           
                                                                </div>
                                                                `;
                                                        }

                                                        html +=`
                                                        </div>
                                                    </div>
                                                    
                                                    <span class="comment_content post_text_limit comment_content_${data[i].cid}">
                                                        ${data[i].content}
                                                    </span>
                                                    
                                                    <div class="mt-3">
                                                        <button class="mr-2 btn_transparent btn_cnt_style btn_like_comment" data-cid="${data[i].cid}">`;
                                                        if(data[i].mylike=="1")
                                                        {
                                                            html+=`<i class="fas fa-heart display_none text-warning" aria-hidden="true"></i>`;
                                                        }
                                                        else
                                                        {
                                                            html+=`<i class="far fa-heart display_none text-warning" aria-hidden="true"></i>`;
                                                        }
                                                        html +=`                                                    
                                                                &nbsp;Like(<span class="likes cnt_number_style">${data[i].likes}</span>)</button>
                                                        <button class="mr-2 btn_cnt_style btn_transparent btn_viewreply" data-id="${data[i].cid}"><i class="fa fa-reply-all display_none"></i>&nbsp;Reply(<span class="cnt_number_style cnt_reply_${data[i].cid}">${data[i].replies}</span>)</button>
                                                
                                                    </div>
                                                    <div class="display_closed added_reply_${data[i].cid}">
                                                        <div class="text-right">
                                                            <button type="button" class="btn_transparent btn_add_reply" data-cid="${data[i].cid}" data-toggle="modal" data-target="#addReplyModal">Add Reply</button>
                                                        </div>
                                                        <ul class="added_reply_content_${data[i].cid}">                                                
                                                                                                               
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                            </div> 
                                        </li>
                                    `;     
                                    $(".added_comment_"+post_id).append(html);
                                }
                                if(data.length>1)
                                {
                                    var pid = data[0].pid;
                                    if($(".btn_view_more_"+pid).hasClass('display_none'))
                                    {
                                        $(".btn_view_more_"+pid).removeClass('display_none');
                                    }
                                    if($(".btn_view_more_"+pid).hasClass("expandarea"))
                                    {
                                        $(".btn_view_more_"+pid).removeClass("expandarea");
                                        $(".btn_view_more_"+pid).html("View More Comments");
                                    }

                                    var loopval = 0;
                                    $(".added_comment_"+pid+" "+".comment_item_"+pid).each(function(){
                                        if(loopval > 0)
                                        {
                                            $(this).addClass("display_none");
                                        }
                                        loopval +=1;
                                    });
                                    $(".total_cnt_comments_"+pid).html("1 of "+data.length);
                                }
                                
                            }
                        }            
                    });
                }
            }
            else
            {
                $(".comment_content_"+post_id).addClass('display_closed');
                $(".comment_content_"+post_id).slideUp(("slow"));
            }
            
        });
        
        $(document).on('click','.btn_add_reply',function(){
            var comment_id = $(this).data('cid');
            $("#addReplyModalCID").val(comment_id);
        });
        $(document).on('click','.btn_store_reply',function(){
            var comment_id = $("#addReplyModalCID").val();
            var reply = $("#addReplyModalContent").val();            
            var cnt_reply = parseInt($(".cnt_reply_"+comment_id).html());            
            if(reply == "")
            {
                return false;
            }
            else
            {
                $("#addReplyModalCID").val('');
                $(".cnt_reply_"+comment_id).html(cnt_reply+1);            
                $.ajax({
                    url: "/addreply",
                    method: 'GET',  
                    type: 'json',
                    data: {comment_id:comment_id,content:reply},          
                    success: function (response) {
                        if(response.results)
                        {     
                            $("#addReplyModal").modal('toggle');
                            var html = `
                                <li id="reply_item_${response.cid}" class="reply_item_${response.cid}">
                                    <div class="comment-list">
                                        <div class="bg-img">
                                            <img class="d-none" src="${cur_user_avatar_url}" alt="" class="mCS_img_loaded">
                                        </div>
                                        <div class="comment">                                                    

                                            <div class="d-flex">
                                                <div class="w-100">
                                                    <h3>${cur_user_full_name}</h3>
                                                    <span><img src="/static/images/clock.png" alt=""> 1Min
                                                    ago</span>
                                                </div>
                                                <div>
                                                    <button class="btn btn_dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                                                    </button>

                                                    <div class="dropdown-menu dropdown_custom_position" style=""> 
                                                        <button class="btn_transparent dropdown-item btn_edit_reply" data-rid="${response.rid}" data-toggle="modal" data-target="#editReplyModal">
                                                            <i class="far fa-edit" aria-hidden="true"></i> Edit
                                                        </button>
                                                        <button class="btn_transparent dropdown-item btn_delete_reply" data-rid="${response.rid}" data-cid="${response.cid}">
                                                            <i class="far fa-trash-alt" aria-hidden="true"></i> Delete
                                                        </button>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            
                                            <div class="pt-10">
                                                <p class="reply_content reply_content_${response.rid}">
                                                    ${reply}
                                                </p>
                                                <button class="mt-2 btn_transparent btn_like_reply" data-rid="${response.rid}"><i class="far fa-heart text-danger" aria-hidden="true"></i>
                                                    (
                                                    <span class="likes cnt_number_style cnt_like_reply cnt_like_reply_${response.rid}">0
                                                    </span>
                                                    )
                                                </button>                                                    
                                            </div>
                                        </div>
                                    </div>                                            
                                </li>
                            `;
                            $(".added_reply_content_"+comment_id).prepend(html);
                        }
                        else
                        {
                            location.reload();
                        }
                    }   
                });         

               
            }
        });

        $(document).on('click','.btn_viewreply',function(){
            var comment_id = $(this).data('id');
            
            if($(".added_reply_"+comment_id).hasClass('display_closed'))
            {                
                $(".added_reply_"+comment_id).removeClass('display_closed');
                $(".added_reply_"+comment_id).slideDown("slow");
                if(comment_id =="")
                {
                    return false;
                }
                else
                {
                    $.ajax({
                        url: "/getreplies",
                        method: 'GET',  
                        type: 'json',
                        data: {cid:comment_id},          
                        success: function (response) {                            
                            var data = response.replies;
                            
                            if(data.length>0)
                            {
                                $(".added_reply_content_"+comment_id).html("");
                                for(var i=0;i<data.length;i++)
                                {
                                    var html = `
                                        <li id="reply_item_${data[i].rid}" class="reply_item_${data[i].cid}">
                                            <div class="comment-list">
                                                <div class="bg-img">
                                                    <img class="d-none" src="`;
                                                    if(data[i].avatar=="")
                                                    {
                                                        html+="/static/images/user.png";
                                                    }
                                                    else
                                                    {
                                                        html+=data[i].avatar;
                                                    }
                                                    html +=
                                                    `" alt="" class="mCS_img_loaded">
                                                </div>
                                                <div class="comment">                                                    

                                                    <div class="d-flex">
                                                        <div class="w-100">
                                                            <h3>${data[i].full_name}</h3>
                                                            <span><img src="/static/images/clock.png" alt=""> ${data[i].created_at}
                                                            ago</span>
                                                        </div>
                                                        <div>`;
                                                        
                                                        if(data[i].me=='1')
                                                        {
                                                            html += `
                                                                <button class="btn btn_dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                                                                </button>

                                                                <div class="dropdown-menu dropdown_custom_position" style=""> 
                                                                    <button class="btn_transparent dropdown-item btn_edit_reply" data-rid="${data[i].rid}" data-toggle="modal" data-target="#editReplyModal">
                                                                        <i class="far fa-edit" aria-hidden="true"></i> Edit
                                                                    </button>
                                                                    <button class="btn_transparent dropdown-item btn_delete_reply" data-rid="${data[i].rid}" data-cid="${data[i].cid}">
                                                                        <i class="far fa-trash-alt" aria-hidden="true"></i> Delete
                                                                    </button>                                                           
                                                                </div>
                                                            `;
                                                        }

                                                        html +=`
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="pt-10">
                                                        <p class="reply_content reply_content_${data[i].rid}">
                                                            ${data[i].content}
                                                        </p>
                                                        <button class="mt-2 btn_transparent btn_like_reply" data-rid="${data[i].rid}">`;
                                                        if(data[i].mylike == "1")
                                                        {
                                                            html+=`
                                                            <i class="fas fa-heart text-danger" aria-hidden="true"></i>
                                                            `;
                                                        }
                                                        else
                                                        {
                                                            html+=`
                                                            <i class="far fa-heart text-danger" aria-hidden="true"></i>
                                                            `;
                                                        }  
                                                        html+=`
                                                            (
                                                            <span class="likes cnt_number_style cnt_like_reply cnt_like_reply_${data[i].rid}">${data[i].likes}
                                                            </span>
                                                            )
                                                        </button>                                                    
                                                    </div>
                                                </div>
                                            </div>                                            
                                        </li>
                                    `;        
                                    $(".added_reply_content_"+comment_id).append(html);
                                }
                                if(data.length>1)
                                {                                    
                                    var cid = data[0].cid;
                                    if($(".btn_all_replies_"+cid).hasClass('display_none'))
                                    {
                                        $(".btn_all_replies_"+cid).removeClass('display_none');
                                    }
                                    if($(".btn_all_replies_"+cid).hasClass("expandarea"))
                                    {
                                        $(".btn_all_replies_"+cid).removeClass("expandarea");
                                        $(".btn_all_replies_"+cid).html("All replies");
                                    }

                                    var loopval = 0;
                                    $(".added_reply_content_"+cid+" "+".reply_item_"+cid).each(function(){
                                        if(loopval > 0)
                                        {
                                            $(this).addClass("display_none");
                                        }
                                        loopval +=1;
                                    });
                                }
                                
                            }
                        }            
                    });
                }
            }
            else
            {               
                $(".added_reply_"+comment_id).addClass('display_closed');
                $(".added_reply_"+comment_id).slideUp(("slow"));
            }
            
        });

        $(document).on('click','.btn_edit_reply',function(){
            var rid = $(this).data('rid');
                
            $("#editReplyID").val(rid);

            
            $.ajax({
                url: "/getreply",
                method: 'GET',  
                type: 'json',
                data: {rid:rid},          
                success: function (response)
                {  
                    $("#editReplyModalContent").val(response.data);
                }   
            });  
            
        });

        $(document).on('click','.btn_update_reply',function(){
            
            var rid = $("#editReplyID").val();
            var content = $("#editReplyModalContent").val();
            if(rid=="")
            {
                return false;
            }
            if(content=="")
            {
                return false;
            }
            
            $.ajax({
                url: "/updatereply",
                method: 'GET',  
                type: 'json',
                data: {rid:rid,content:content},          
                success: function (response)
                {  
                    $(".reply_content_"+rid).html(content);
                    $("#editReplyModal").modal('toggle');
                }   
            });  
            
        });

        $(document).on('click','.btn_delete_noti',function(){   
            var id = $(this).data('id');
            if(id != "")
            {
                $(".notification_"+id).remove();
                var cnt_notification = parseInt($('.cnt_notification').html());
                if(cnt_notification > 0)
                {
                    $('.cnt_notification').html(cnt_notification-1);
                }
                
                $.ajax({
                    url: "/delete_notification",
                    method: 'GET',
                    type: 'json',
                    data: {id:id},
                    success: function(response) 
                    {

                    }
                });
            }            

        });

        $(document).on('click','.notification_unread .notification_set_read',function(){   
            var id = $(this).data('id');
            
            if(id != "")
            {                
                $.ajax({
                    url: "/notification_set_read",
                    method: 'GET',
                    type: 'json',
                    data: {id:id},
                    success: function(response) 
                    {
                        if(response.results)
                        {                            
                            var temp = $(".notification_"+id).html();
                            var html = '<div class="pos_rel notification_set_read notification_unread_item notification_'+id+'" data-id="'+id+'">';
                            html += temp;
                            html += '</div>';
                            $(".notification_read").prepend(html);
                            $(".notification_"+id).remove();
                            var cnt_notification = parseInt($(".cnt_notification").html());
                            if(cnt_notification>0)
                            {
                                $(".cnt_notification").html(cnt_notification-1);
                            }
                        }
                    }
                });
            }            

        });

        $(document).on('click','.btn_delete_reply',function(){
            var  rid = $(this).data('rid');
            var  comment_id = $(this).data('cid');
            if(rid == "")
            {
                return false;
            }
            else
            {         
                $("#reply_item_"+rid).remove();      

                var loopval = 0;
                $(".added_reply_content_"+comment_id+" "+".reply_item_"+comment_id).each(function(){                    
                    loopval +=1;
                   
                });
                if(loopval < 2)
                {
                    if($(".btn_all_replies_"+comment_id).hasClass("expandarea"))
                    {
                        $(".btn_all_replies_"+comment_id).removeClass("expandarea");
                        $(".btn_all_replies_"+comment_id).addClass("display_none");
                    }
                }
                var cnt_reply = parseInt($(".cnt_reply_"+comment_id).html());
                if(cnt_reply > 0)
                {
                    $(".cnt_reply_"+comment_id).html(cnt_reply-1);
                }
                $.ajax({
                    url: "/deletereply",
                    method: 'GET',  
                    type: 'json',
                    data: {rid:rid},          
                    success: function (response) {
                        if(!response.results)
                        {
                            // location.reload();
                        }
                    }            
                });
            }
        
        
        });
        $(document).on('click','.btn_connection',function(){
            
            var id = $(this).data('id');
            
            $.ajax({
                url: "/set_follow",
                method: 'GET', 
                type: 'json',
                data: {id:id},           
                success: function (response) {
                    console.log(response);
                    if(response)
                    {
                        location.reload();
                    }
                }
            });
        });

        $(document).on('click','.btn_autocomment',function(){
            var post_id = $(this).data('pid');
            var comment = $(this).data('text');            
            if(comment == "")
            {
                return false;
            }
            else
            {        
                
                var cnt_comment = parseInt($(".cnt_comment_"+post_id).html());    
                $(".cnt_comment_"+post_id).html(cnt_comment+1);   
                $.ajax({
                    url: "/addcomment",
                    method: 'GET',  
                    type: 'json',
                    data: {post_id:post_id,content:comment},          
                    success: function (response) {
                        if(response.results)
                        {
                            
                            var html = ` 
                            <li>
                                <div class="comment-list comment_item_${response.pid} comment_num_${response.cid}">
                                    <div class="bg-img">
                                        <img src="${cur_user_avatar_url}" alt="">
                                    </div>
                                    <div class="comment pos_rel">
                                        <div class="d-flex">
                                            <div class="w-100">
                                                <h3>${cur_user_full_name}</h3>
                                                <span><img src="/static/images/clock.png" alt=""> 1Min ago</span>
                                            </div>
                                            <div>
                                                <button class="btn btn_dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown_custom_position" style=""> 
                                                    <button class="btn_transparent dropdown-item btn_edit_comment" data-cid="${response.cid}" data-pid="${response.pid}" data-toggle="modal" data-target="#editCommentModal">
                                                        <i class="far fa-edit" aria-hidden="true"></i> Edit
                                                    </button>
                                                    <button class="btn_transparent dropdown-item btn_delete_comment" data-cid="${response.cid}" data-pid="${response.pid}">
                                                        <i class="far fa-trash-alt" aria-hidden="true"></i> Delete
                                                    </button>                                                           
                                                </div>                                                   
                                            </div>
                                        </div>
                                        
                                        <span class="comment_content post_text_limit comment_content_${response.cid}">
                                            ${comment}
                                        </span>
                                        
                                        <div class="mt-3">
                                            <button class="mr-2 btn_transparent btn_cnt_style btn_like_comment" data-cid="${response.cid}">
                                                <i class="far fa-heart text-warning display_none" aria-hidden="true"></i>                                                    
                                                &nbsp;Like(<span class="likes cnt_number_style">0</span>)</button>
                                            <button class="mr-2 btn_cnt_style btn_transparent btn_viewreply" data-id="${response.cid}"><i class="fa fa-reply-all display_none"></i>&nbsp;Reply(<span class="cnt_number_style cnt_reply_${response.cid}">0</span>)</button>
                                    
                                        </div>
                                        <div class="display_closed added_reply_${response.cid}">
                                            <div class="text-right">
                                                <button type="button" class="btn_transparent btn_add_reply" data-cid="${response.cid}" data-toggle="modal" data-target="#addReplyModal">Add Reply</button>
                                            </div>
                                            <ul class="added_reply_content_${response.cid}">                                                
                                                                                                    
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div> 
                            </li>
                            
                            `;      

                            $(".added_comment_"+post_id).prepend(html);
                        }
                        else
                        {
                            location.reload();
                        }
                    }   
                });         

               
            }
        });

        $(document).on('click','.btn_like_reply',function(){
            var rid = $(this).data('rid');

            var likes = parseInt($(".cnt_like_reply_"+rid).html());
            if($(this).find('i.fa-heart').hasClass('far'))
            {
                $(this).find("span.likes").html(likes+1);
                $(this).find('i.fa-heart').removeClass('far');
                $(this).find('i.fa-heart').addClass('fas');
            }
            else
            {
                if(likes>0)
                {
                    $(this).find("span.likes").html(likes-1);
                }
                $(this).find('i.fa-heart').removeClass('fas');
                $(this).find('i.fa-heart').addClass('far');
            }
            if(rid=="")
            {
                return false;
            }
            else
            {
                $.ajax({
                    url: "/add_like_reply",
                    method: 'GET', 
                    type: 'json',
                    data: {rid:rid},     
                    success: function(result){                  
                        if(result)
                        {
                            
                        }
                    }
                })
            }
            
        });
        $(document).on('click','.btn_like_comment',function(){
            var likes = parseInt($(this).find("span.likes").html());
            if($(this).find('i.fa-heart').hasClass('far'))
            {
                $(this).find("span.likes").html(likes+1);
                $(this).find('i.fa-heart').removeClass('far');
                $(this).find('i.fa-heart').addClass('fas');
            }
            else
            {
                if(likes>0)
                {
                    $(this).find("span.likes").html(likes-1);
                }
                $(this).find('i.fa-heart').removeClass('fas');
                $(this).find('i.fa-heart').addClass('far');
            }
            var comment_id = $(this).data('cid');
            $.ajax({
                url: "/add_like_comment",
                method: 'GET', 
                type: 'json',
                data: {id:comment_id},     
                success: function(result){                  
                    if(result)
                    {
                        
                    }
                }
            })
        });

        $(document).on('click','.btn_edit_comment',function(){
            var pid = $(this).data('pid');
            var cid = $(this).data('cid');    
            $("#editCommentID").val(cid);

            
            $.ajax({
                url: "/getcomment",
                method: 'GET',  
                type: 'json',
                data: {cid:cid},          
                success: function (response)
                {  
                    $("#editCommentContent").val(response.data);
                }   
            });  
            
        });

        $(document).on('click','.btn_update_comment',function(){
            
            var cid = $("#editCommentID").val();
            var content = $("#editCommentContent").val();
            if(cid=="")
            {
                return false;
            }
            if(content=="")
            {
                return false;
            }
            
            $.ajax({
                url: "/updatecomment",
                method: 'GET',  
                type: 'json',
                data: {cid:cid,content:content},          
                success: function (response)
                {  
                    $(".comment_content_"+cid).html(content);
                    $("#editCommentModal").modal('toggle');
                }   
            });  
            
        });

        $(document).on('click','.btn_delete_comment',function(){
            var  cid = $(this).data('cid');
            var  post_id = $(this).data('pid');
            if(cid == "")
            {
                return false;
            }
            else
            {
                $(".comment_num_"+cid).remove();
                var cnt_comment = parseInt($(".cnt_comment_"+post_id).html());
                if(cnt_comment > 0)
                {
                    $(".cnt_comment_"+post_id).html(cnt_comment-1);
                }
                $.ajax({
                    url: "/deletecomment",
                    method: 'GET',  
                    type: 'json',
                    data: {cid:cid},          
                    success: function (response) {
                        if(!response.results)
                        {
                            location.reload();
                        }
                    }            
                });
            }
        
        
        });
        $(document).on('click','.btn_like',function(){
            var Pid = $(this).data('id');
                        
            var likes = parseInt($(".cnt_like_p_"+Pid).html());
            if($(this).hasClass('liked'))
            {
                if(likes>0)
                {
                    $(".cnt_like_p_"+Pid).html(likes-1);
                }
                $(this).removeClass('liked');                
            }
            else
            {
                $(".cnt_like_p_"+Pid).html(likes+1);
                $(this).addClass('liked');
            }
            
            $.ajax({
                url: "/add_like",
                method: 'GET', 
                type: 'json',
                data: {id:Pid},     
                success: function(result){                  
                    if(result)
                    {
                        
                    }
                }
            })
        });

                
        $(document).on('click','.gif_item_img',function(){
            var name = $(this).data('name');
            $.ajax({
                url: "/store_gif",
                method: 'GET',
                type: 'json',
                data: {name:name},
                success: function(response) 
                {                    
                    var data = response.attachname;
                    post_attaches.push(data);
                    console.log(data);  
                    display_attaches();   
                }
            });
        });

        $(".btn_store_post").click(function(){
            var is_check = true;
            var content = $("#post_content").val();            
            if(content == "")
            {                  
                if(post_attaches.length < 1)
                {
                    is_check = false;
                }
            }
            var visibleto = $("select[name='visibleto']").val();
            if(visibleto == "")
            {
                is_check = false;
                $("select[name='visibleto']").addClass('alertborder');
            }
            if(is_check)
            {
                var data = $("#form_create_post").serialize();
                $("#loading").css("display","flex");
                $.ajax({                
                    url:"/store_post",
                    type: 'post',
                    dataType: 'json',
                    data: data,

                    success: function(result){                  
                        location.reload();
                    }
                }); 
            }
            
        });

        $("#fileAttachmentBtn").change(function() 
        {            
            var csrf_token = $("#meta_csrf input[name='csrfmiddlewaretoken']").val();
            var file = document.getElementById('fileAttachmentBtn');
            var cur_file_number = 0; 
            var available_number = 0;
            $(".uploaded_files_item").each(function(){
                cur_file_number++;
            })
            available_number = max_file_number - cur_file_number;
            var total_file_num = 0;
            var temp_con = 0;
            total_file_num = this.files.length;
            if(total_file_num > available_number)
            {
                if(available_number < 1)
                {
                    alert("Maximum 10 files allowed !");                    
                }
                else
                {
                    alert("You can upload maximum "+ available_number +" files!");
                }
                
                return false;
            }
            for (let index = 0; index < this.files.length; index++) {

                if (this.files && this.files[index]) 
                {   
                    if(this.files[index].size > 500000000)
                    {
                        alert("File size should not exceed 2mb !");
                        return false;
                    }
                }
            }            
            
            $("#loading").css("display","flex");
            for (let index = 0; index < this.files.length; index++) {

                if (this.files && this.files[index]) 
                {                    
                    if ($.inArray(this.files[index]['name'].split('.').pop().toLowerCase(), fileExtension) == -1) {
                        alert("Only formats are allowed : "+fileExtension.join(', '));
                        $("#fileAttachmentBtn").val("");
                        $("#loading").css("display","none");
                        return false;
                    }
                    if(this.files[index].size > 500000000)
                    {
                        alert("File size should be less than 2Mb.");
                        $("#loading").css("display","none");
                        return false;
                    }
                    $('.slider_wrap').css('display','block');
                    var formdata = new FormData;
                                
                    formdata.append('attach',file.files[index]);
                    
                    $.ajax({
                        headers: { "X-CSRFToken": csrf_token },
                        url:"/store_postattach",
                        type: 'post',
                        dataType: 'json',
                        data: formdata,

                        processData: false,
                        contentType: false,
                        success: function(result){    
                            
                            post_attaches.push(result.attachname);
                            console.log(result);
                            display_attaches();
                        }
                    });               
                }
            }
            
            
            $("#loading").css("display","none");
        }); 
 
    
        $(document).on('click','.btn_delete_uploadedFile',function(){            
            var removeItem = $(this).data('name');
            post_attaches = jQuery.grep(post_attaches, function(value) {
            return value != removeItem;
            });
            
            display_attaches();
        });

        // edit post
        
        $(document).on('click','.btn_edit_post',function(){
            var id = $(this).data('id');
            $.ajax({                
                url:"/get_selected_post",
                type: 'get',
                dataType: 'json',
                data: {id:id},

                success: function(result){       
                    var data = result.results;           
                    if(data.post_id != "")
                    {
                        
                        $(".wrapper").mCustomScrollbar("scrollTo", "top");
                        var content = data.content;
                        var post_id = data.post_id;
                        var attachs = data.attach;
                        var visibleto = data.visibleto;
                        
                        $('.select_public option[value="'+visibleto+'"]').attr('selected','selected');
                        $(".post_content").val(content);
                        $("#post_id").val(post_id);
                        $(".btn_store_post").html("Update post");
                        
                        var btn_cancel = $("body").find(".btn_cancel_update_post");
                        if(btn_cancel.length < 1)
                        {
                            var cancelhtml = `
                                <button type="button" class="btn btn-sm btn_cancel_update_post">Cancel</button>
                            `;
                        }                        

                        $(".add_cancel_btn").prepend(cancelhtml);
                        
                        if(attachs.length > 0)
                        {                  
                            post_attaches = []                                                   
                            for(var j=0;j<attachs.length;j++)                            {                               
                                
                                var data = attachs[j]; 
                                post_attaches.push(data);
                                display_attaches();
                            }                            
                        }  
                    }
                    else
                    {
                        location.reload();
                    }
                }
            }); 
        });

        $(document).on('click','.btn_cancel_update_post',function(){
            $(".post_content").val('');
            $("#post_id").val('');   
            $(".attachs_warp").html("");
            $('.btn_cancel_update_post').remove();
            $(".btn_store_post").html("Create a Post");
        });
        // page_part

        $(document).on('click','#custom_users',function(){             
            // $("#inviteUser").modal('toggle');
        });
        $(document).on('click','.btn_page_follow',function(){
            var id = $(this).data('id');
            if(id=="")
            {               
                return false;
            }
            
            var formdata = new FormData;           
            
            formdata.append('id',id); 
            $("#loading").css("display","flex");
            $.ajax({
                headers: { "X-CSRFToken": token },
                url:"/page/set_followpage",
                type: 'post',
                dataType: 'json',
                data: formdata,

                processData: false,
                contentType: false,
                success: function(response){                  
                    $("#loading").css("display","none");
                    if(response.results)
                    { 
                        location.reload();
                    }
                    else
                    {
                        swal({
                            title: "Something wrong!",  
                            text: "Please try again.",                          
                            type: "error"
                        }).then(function() {
                            location.reload();
                        });
                    }                    

                }
            });
        });  

        $(document).on('click','.btn_page_like',function(){
            var likes = parseInt($(this).find("span.likes").html());
            if($(this).find('i.fa-heart').hasClass('far'))
            {
                $(this).find("span.likes").html(likes+1);
                $(this).find('i.fa-heart').removeClass('far');
                $(this).find('i.fa-heart').addClass('fas');
            }
            else
            {
                if(likes>0)
                {
                    $(this).find("span.likes").html(likes-1);
                }
                $(this).find('i.fa-heart').removeClass('fas');
                $(this).find('i.fa-heart').addClass('far');
            }
            var id = $(this).data('id');
            $.ajax({
                url: "/page/set_page_like",
                method: 'GET', 
                type: 'json',
                data: {id:id},     
                success: function(response){    
                           
                    if(!response.results)
                    {
                        swal({
                            title: "Something wrong!",  
                            text: "Please try again.",                          
                            type: "error"
                        }).then(function() {
                            location.reload();
                        });
                    }
                }
            })
        });

        // group part

        

        $(document).on('click','.btn_create_group',function(){
            var title = $(".group_title_input").val();
            if(title=="")
            {
                $(".group_title_input").addClass("alert-border");
                $(".group_title_input").focus();
                return false;
            }
            invite_user_array = [];
            
            var file = document.getElementById('group_img');
            var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
            var formdata = new FormData;
            if (file.files[0])
            {
                if ($.inArray(file.files[0]['name'].split('.').pop().toLowerCase(), fileExtension) == -1) {
                    alert("Only formats are allowed : "+fileExtension.join(', '));
                    $("#group_img").val("");
                    return false;
                }
                if(file.files[0].size > 10000000)
                {
                    alert("File size should be less than 10Mb.");
                    return false;
                }
                formdata.append('attach',file.files[0]);
            }
            
            formdata.append('title',title);
            formdata.append('invitetype',$("input[name='invite_users']:checked").val());

            $('input[type=checkbox]:checked').each(function() {
                invite_user_array.push($(this).val());                
            });            
            formdata.append('users',invite_user_array);
            $("#loading").css("display","flex");
            $.ajax({
                headers: { "X-CSRFToken": token },
                url:"/group/store_group",
                type: 'post',
                dataType: 'json',
                data: formdata,

                processData: false,
                contentType: false,
                success: function(response){                  
                    $("#loading").css("display","none");
                    var id = response.id;
                    if(response.results)
                    {                        
                        swal({
                            title: "Group created successfully!",                            
                            type: "success"
                        }).then(function() {
                            var replace_sub_url = 'detail/'+id;
                            var cur_url = window.location.href.replace('create', replace_sub_url);                       
                            window.location.replace(cur_url);
                        });
                    }
                    else
                    {
                        swal({
                            title: "Something wrong!",  
                            text: "Please try again.",                          
                            type: "error"
                        }).then(function() {
                            location.reload();
                        });
                    }                    

                }
            });
        });  


        $(document).on('click','.btn_group_follow',function(){
            var id = $(this).data('id');
            if(id=="")
            {               
                return false;
            }
            
            var formdata = new FormData;  
            formdata.append('id',id); 
            $("#loading").css("display","flex");
            $.ajax({
                headers: { "X-CSRFToken": token },
                url:"/group/set_followgroup",
                type: 'post',
                dataType: 'json',
                data: formdata,

                processData: false,
                contentType: false,
                success: function(response){                  
                    $("#loading").css("display","none");
                    if(response.results)
                    { 
                        location.reload();
                    }
                    else
                    {
                        swal({
                            title: "Something wrong!",  
                            text: "Please try again.",                          
                            type: "error"
                        }).then(function() {
                            location.reload();
                        });
                    }                    

                }
            });
        });  

        $(document).on('click','.btn_group_like',function(){
            var likes = parseInt($(this).find("span.likes").html());
            if($(this).find('i.fa-heart').hasClass('far'))
            {
                $(this).find("span.likes").html(likes+1);
                $(this).find('i.fa-heart').removeClass('far');
                $(this).find('i.fa-heart').addClass('fas');
            }
            else
            {
                if(likes>0)
                {
                    $(this).find("span.likes").html(likes-1);
                }
                $(this).find('i.fa-heart').removeClass('fas');
                $(this).find('i.fa-heart').addClass('far');
            }
            var id = $(this).data('id');
            $.ajax({
                url: "/group/set_group_like",
                method: 'GET', 
                type: 'json',
                data: {id:id},     
                success: function(response){    
                           
                    if(!response.results)
                    {
                        swal({
                            title: "Something wrong!",  
                            text: "Please try again.",                          
                            type: "error"
                        }).then(function() {
                            location.reload();
                        });
                    }
                }
            })
        });
        // invite_modal_part
        $(document).on('click','.btn_modal_invite',function(){
            $("#inviteUser").modal('hide');
        });
        $(document).on('click','.btn_cancel_invite',function(){
            $('input[type=checkbox]:checked').each(function() {
                $(this).prop('checked',false);                             
            });    
        });

        $(document).on('click','.btn_create_page',function(){
            var title = $(".group_title_input").val();
            if(title=="")
            {
                $(".group_title_input").addClass("alert-border");
                $(".group_title_input").focus();
                return false;
            }
                        
            var file = document.getElementById('group_img');
            var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
            var formdata = new FormData;
            if (file.files[0])
            {
                if ($.inArray(file.files[0]['name'].split('.').pop().toLowerCase(), fileExtension) == -1) {
                    alert("Only formats are allowed : "+fileExtension.join(', '));
                    $("#group_img").val("");
                    return false;
                }
                if(file.files[0].size > 10000000)
                {
                    alert("File size should be less than 10Mb.");
                    return false;
                }
                formdata.append('attach',file.files[0]);
            }
           
            
            formdata.append('title',title);
            formdata.append('invitetype',$("input[name='invite_users']:checked").val());

            $('input[type=checkbox]:checked').each(function() {
                invite_user_array.push($(this).val());                
            }); 
                
            formdata.append('users',invite_user_array);
            $("#loading").css("display","flex");
            $.ajax({
                headers: { "X-CSRFToken": token },
                url:"/page/store_page",
                type: 'post',
                dataType: 'json',
                data: formdata,

                processData: false,
                contentType: false,
                success: function(response){                  
                    $("#loading").css("display","none");
                    var id = response.id;
                    if(response.results)
                    {                        
                        swal({
                            title: "Page created successfully!",                            
                            type: "success"
                        }).then(function() {
                            var replace_sub_url = 'detail/'+id;
                            var cur_url = window.location.href.replace('create', replace_sub_url);                       
                            window.location.replace(cur_url);
                        });
                    }
                    else
                    {
                        swal({
                            title: "Something wrong!",  
                            text: "Please try again.",                          
                            type: "error"
                        }).then(function() {
                            
                        });
                    }                    

                }
            });
        });    



        // user profile part
        
        $(document).on('click','#btn_close_account',function(){
            
            $("#loading").css("display","flex");
            $.ajax({                
                url:"/close_account",
                type: 'get',
                dataType: 'json',
                success: function(result){
                    location.reload();
                }
            });
        });

        $(document).on('click','#btn_store_aboutme',function(){
            if($(".aboutme").val() == "")
            {
                return false;
            }
            var data = $('#form_aboutMe').serialize();
            $("#loading").css("display","flex");
            $.ajax({                
                url:"/store_aboutme",
                type: 'post',
                dataType: 'json',
                data: data,

                success: function(result){                    
                    $("#loading").css("display","none");
                    location.reload();
                }
            });
        });

        $(document).on('click','#btn_store_social_link',function(){
            
            var data = $('#form_socialLink').serialize();
            $("#loading").css("display","block");
            $.ajax({                
                url:"/store_sociallink",
                type: 'post',
                dataType: 'json',
                data: data,

                success: function(result){                    
                    $("#loading").css("display","none");
                    location.reload();
                }
            });
        });

        $(document).on('click','#btn_store_education',function(){    
            var checkval = true;
            $('#form_education .required_form_basicinfo').each(function(){
                
                if($(this).val()=="")
                {
                    $(this).addClass('alert-border');
                    checkval = false
                }
            });
            if(checkval)
            {
                var data = $('#form_education').serialize();
                $("#loading").css("display","flex");
                $.ajax({                
                    url:"/store_education",
                    type: 'get',
                    dataType: 'json',
                    data: data,

                    success: function(result){  
                        $("#loading").css("display","none");
                        location.reload();
                    }
                });
            }            

        });

        $(document).on('click','.btn_delete_education',function(){    
                      
            $("#loading").css("display","flex");
            $.ajax({                
                url:"/delete_education",
                type: 'get',
                dataType: 'json',
                data: {id:$(this).data('id')},

                success: function(result){  
                    $("#loading").css("display","none");
                    location.reload();
                }
            });

        });

        $(document).on('click','.btn_edit_education',function(){    
            var id = $(this).data('id');
            var education_school = $(".education_school_"+id).html();
            var education_degree = $(".education_degree_"+id).html();
            var education_start = $(".education_start_"+id).html();
            var education_end = $(".education_end_"+id).html();
            $(".modal_education_start").val(education_start);
            $(".modal_education_end").val(education_end);
            $(".modal_education_school").val(education_school);
            $(".modal_education_degree").val(education_degree);
            $("input[name='education_id']").val(id);
        });

        $(document).on('click','.btn_edit_experiences',function(){    
            var id = $(this).data('id');
            var exp_company = $(".exp_company_"+id).html();
            var exp_position = $(".exp_position_"+id).html();
            var exp_start = $(".exp_start_"+id).html();
            var exp_end = $(".exp_start_"+id).html();
            var exp_resp = $(".exp_resp_"+id).html();
            $(".modal_exp_start").val(exp_start);
            $(".modal_exp_end").val(exp_end);
            $(".modal_exp_company").val(exp_company);
            $(".modal_exp_position").val(exp_position);
            $(".modal_exp_resp").val(exp_resp);
            $("input[name='exp_id']").val(id);
        });
        
        
        $(document).on('click','.btn_delete_experience',function(){    
                      
            $("#loading").css("display","block");
            $.ajax({                
                url:"/delete_experience",
                type: 'get',
                dataType: 'json',
                data: {id:$(this).data('id')},

                success: function(result){  
                    $("#loading").css("display","none");
                    location.reload();
                }
            });

        });
        $(document).on('click','#btn_store_experience',function(){    
            var checkval = true;
            $('#form_experience .required_form_basicinfo').each(function(){
                
                if($(this).val()=="")
                {
                    $(this).addClass('alert-border');
                    checkval = false;
                }
            });
            if(checkval)
            {
                var data = $('#form_experience').serialize();
                $("#loading").css("display","flex");
                $.ajax({                
                    url:"/store_experience",
                    type: 'get',
                    dataType: 'json',
                    data: data,

                    success: function(result){  
                        $("#loading").css("display","none");
                        location.reload();
                    }
                });
            }

        });

        $(document).on('click','.tab_user_profile',function(){            
            var tab = $(this).data('tab');            
            $.cookie('tab', tab);            
        });

        $(document).on('click','#btn_store_basic_profile',function(){
            var is_checked = true;
            $('#form_basicinfo .required_form_basicinfo').each(function(){
                if($(this).val()=="")
                {
                    $(this).addClass('alert-border');
                    is_checked = false;
                }
            });     
            var currentdate = new Date();      
            var curYear = currentdate.getFullYear();    
            var putedYear = $('select[name="birthYear"]').val();
            if((parseInt(curYear)-parseInt(putedYear)) < 14)
            {
                is_checked = false;                    
                swal({
                    title: "You can not update your birthday!",  
                    text: "You should be more than 14.",                                               
                    type: "error"
                }).then(function() {
                    $('select[name="birthYear"]').focus();
                }); 
            }
            if(is_checked)
            {
                var data = $('#form_basicinfo').serialize();
                $("#loading").css("display","block");
                $.ajax({                
                    url:"/store_basicinfo",
                    type: 'post',
                    dataType: 'json',
                    data: data,

                    success: function(result){                    
                        $("#loading").css("display","none");
                        var data = result.response;
                        if(data.emailcount == '0' && data.phonecount == '0')
                        {                            
                            swal({
                                title: "Successfully stored!",                     
                                type: "success"
                            }).then(function() {
                                location.reload();
                            });
                        }
                        else if(data.emailcount == '1' && data.phonecount == '1')
                        {
                            Swal.fire('The phone number and email already exsist.Please try another.');
                        }
                        else if(data.emailcount == '1')
                        {
                            Swal.fire('The email already exsist.Please try another.');
                        }
                        else
                        {
                            Swal.fire('The phone number already exsist.Please try another.');
                        }
                    
                    }
                });
            }            
        });
    
    }());

 

    (function () {
        
        $(document).on('click','.btn_user_nav',function(){
            
            var item = $(this).data('item');
            $('.btn_user_nav').removeClass('selecte_nav');           
            $(this).addClass('selecte_nav');    
            $(".content_user_nav").addClass('display_none');
            $("#user_"+item).removeClass('display_none');
            $.cookie('nav', item);
            slider_reset();
        });

        $(document).on('click','.btn_add_benefit',function(){
            
            var value = $(".input_add_benefit").val();
            if(value == "")
            {
                return false;
            }
            var html=`
                <li>
                    <div>
                        <input type="checkbox"  class="input_benefit" name="benefit_item[]" value="${value}">
                        <span for="">${value}</span>
                    </div>
                </li>
            `;
            $(".added_benefit").append(html);
            $(".input_add_benefit").val("");
        });

        $(document).on('click','.btn_job_step',function(){            
            var chk_result = true;
            var cur = $(this).data('cur');
            $(".job_content_"+cur+" .required_field").each(function(){
                if($(this).val() == "")
                {
                    $(this).addClass("alert-border");
                    chk_result = false;
                }
            });
            var value = $(this).data('nav');
            if(chk_result)
            {
                $(".job_input_step_nav").removeClass("selected_nav");
                $(".job_content_item").removeClass("selected_nav_content");
                
                $(".job_"+value).addClass("selected_nav");
                $(".job_content_"+value).addClass("selected_nav_content");
                var benefits = '';
                var work_auth = '';
                if(value == "preview")
                {
                    $("#job_title_publish").html($(".input_job_title").val());
                    $("#job_description_publish").html($(".input_job_description").val());
                    $(".input_benefit").each(function(){
                        if(this.checked) {
                           if(benefits == "")
                           {
                               benefits+=$(this).val();
                           }
                           else
                           {
                                benefits+=", "+$(this).val();
                           }
                        }
                    });

                    $(".input_work_auth").each(function(){
                        if(this.checked) {
                           if(work_auth == "")
                           {
                                work_auth+=$(this).val();
                           }
                           else
                           {
                                work_auth+=", "+$(this).val();
                           }
                        }
                    });
                    
                    $(".job_info_benefits_publish").html(benefits);
                    $(".job_info_benefits_publish_input").val(benefits);
                    if(benefits == "")
                    {
                        $(".part_benefits").css("display","none");
                    }
                    else
                    {
                        $(".part_benefits").css("display","block");
                    }
                    if(work_auth == "")
                    {
                        $(".part_workauth").css("display","none");
                    }
                    else
                    {
                        $(".part_workauth").css("display","block");
                    }
                    if(benefits=="" && work_auth =="")
                    {
                        $(".part_benefits_workauth").css("display","none");
                    }
                    else
                    {
                        $(".part_benefits_workauth").css("display","block");
                    }
                    $(".job_info_workauth_publish").html(work_auth);
                    $(".job_info_workauth_publish_input").val(work_auth);
                    $(".job_info_postedby_publish").html(user_name);  
                    var currentdate = new Date();                   
                    $(".job_info_postedon_publish").html(currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear());                    
                    
                    autosize(document.getElementById("job_description_publish"));
                    $(".job_info_client_publish").html($(".input_client").val());                      
                    $(".job_info_travel_publish").html($(".input_travel").val());   
                    $(".job_info_salary_publish").html($(".salary_price").val()+"/"+$(".salary_period").val());   
                    $(".job_info_remote_publish").html($(".input_remote").val());   
                    $(".job_info_type_publish").html($(".input_type").val());   
                    
                    if($(".input_client").val()=="")
                    {
                        $(".part_client").css("display",'none');
                    }
                    else
                    {
                        $(".part_client").css("display",'block');
                    }
                    if($(".input_travel").val()=="")
                    {
                        $(".part_travel").css("display",'none');
                    }
                    else
                    {
                        $(".part_travel").css("display",'block');
                    }
                    if($(".salary_price").val()=="")
                    {
                        $(".part_salary").css("display",'none');
                    }
                    else
                    {
                        $(".part_salary").css("display",'block');
                    }
                    if($(".input_remote").val()=="")
                    {
                        $(".part_remote").css("display",'none');
                    }
                    else
                    {
                        $(".part_remote").css("display",'block');
                    }
                    if($(".input_type").val()=="")
                    {
                        $(".part_type").css("display",'none');
                    }
                    else
                    {
                        $(".part_type").css("display",'block');
                    }

                }
            }
            else
            {
                return false;
            }
        });
        
        $(document).on('click','.btn_select_job_view',function(){            
            var which = $(this).data('value');
            $(".btn_select_job_view").removeClass("btn_selected_job_view");
            $(".job_list_view").removeClass("job_list_view_selected");
            $(".btn_select_job_view_"+which).addClass("btn_selected_job_view");
            $(".job_list_"+which).addClass("job_list_view_selected");
        });
        
        
        $('.chk_reply_item').change(function() {
            var value = $(this).data('value');
            
            if(this.checked) {
                $(".input_reply_item_"+value).attr("disabled",false);
                $(".input_reply_item_"+value).addClass("required_field");
                $('#reply_not').prop('checked', false);
            }
            else
            {
                $(".input_reply_item_"+value).val('');
                $(".input_reply_item_"+value).attr("disabled",true);
                $(".input_reply_item_"+value).removeClass("required_field");
            }       
        });
        
        $('#reply_not').change(function() {
            
            if(this.checked) {
                $('.chk_reply_item').prop('checked', false);
                $(".input_reply_item").attr("disabled",true);                
                $(".input_reply_item").val('');
                $(".input_reply_item").removeClass("required_field");
                $(".input_reply_item").removeClass("alert-border");
            }               
        });
        
    }());

    (function () {
        
    }());   
 
});


    

