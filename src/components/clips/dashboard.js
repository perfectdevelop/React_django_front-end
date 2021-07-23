{% extends 'base.html' %}
{% load static %}
{% load i18n %}
{% block content %}

    {% block head %}
    <title>Clips | Flicker Face</title>
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
                            <div class="main-ws-sec">
                                
                                <div class="posts-section">
                                    <div class="video-list">
                                        <div class="row">
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://img.freepik.com/free-vector/group-people-watching-funny-video-laughing-cartoon_1284-33366.jpg?size=626&ext=jpg"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://image.winudf.com/v2/image1/Y29tLnZpZGVvc3RhdHVzYXBwbWFzdGVyLmZ1bm55dmlkZW9fY29tZWR5dmlkZW9fc2NyZWVuXzBfMTU3ODA2MjY2NV8wMDg/screen-0.jpg?fakeurl=1&type=.jpg"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAnSHiiskDsXvjQPX69QbJYADITmMWP801w&usqp=CAU"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/43084/thumb_43084.jpg"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://pbs.twimg.com/media/EVlIbhxWAAA6f4U.jpg"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://media.istockphoto.com/vectors/bullying-children-at-school-school-girls-and-gill-laughing-and-at-vector-id1247786953"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://i.pinimg.com/originals/6e/c3/57/6ec357175d0f29c360de55e148d1a622.gif"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://i.pinimg.com/originals/9f/f8/d6/9ff8d64f88aedf93452cb077af938453.gif"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://i.pinimg.com/originals/fa/47/43/fa474339716034078253c25d7d6fbb4b.gif"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://i.pinimg.com/originals/33/00/64/33006445d941ee767c269fc03d1f04ab.gif"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://i.gifer.com/o3c.gif"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6 p-1">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                    <video class="embed-responsive-item"
                                                        poster="https://i.pinimg.com/originals/ce/7c/4e/ce7c4ec19b614ccde9be9f45aa93035f.gif"
                                                        data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4">
                                                    </video>
                                                    <button class="btn btn-play">
                                                        <svg width="40" height="40" viewBox="0 0 58 58">
                                                        <circle style="fill:#ffffff;" cx="29" cy="29" r="29"/>
                                                        <g>
                                                            <polygon style="fill:#00557d;" points="44,29 22,44 22,29.273 22,14 	"/>
                                                            <path style="fill:#00557d;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                                                                c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                                                                l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
                                                        </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                               
                                
                            </div>                            
                        </div>
                        <div class="col-lg-3 pd-right-none no-pd">
                            <div class="right-sidebar right-sidebar-fixed">                                
                                {% include "layout/user_list.html" %}
                                {% include "layout/user_attaches.html" %}                
                            </div>
                            <!--right-sidebar end-->
                        </div>        
                    </div>                       
                </div>
            </div>
        </div>
    </main>

    {% include "layout/editmodal.html" %}
    {% include "layout/modal_gif.html" %}
    

{% endblock %}