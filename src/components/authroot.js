{% load static %}

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="icon" type="image/png" href="{% static 'images/fav.png' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'css/animate.css' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'css/bootstrap.min.css' %}">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="{% static 'css/jquery.mCustomScrollbar.min.css' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'css/style.css' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'css/custom.css' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'css/responsive.css' %}">    
    <link rel="stylesheet" type="text/css" href="{% static 'css/intlTelInput.css' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'css/demo.css' %}">
    <script type="text/javascript" src="{% static 'js/jquery.min.js' %}"></script>    
    <script type="text/javascript" src="{% static 'js/intlTelInput.js' %}"></script>
    <script type="text/javascript" src="{% static 'js/sweetalert2.js' %}"></script>
</head>

<body>
    <div class="login-bg">
        <div class="login-bg-inner">
            <div class="row h-100 align-items-center">
                <div class="col-lg d-none d-md-block">
                    <div class="content-detail d-flex flex-column align-items-center justify-content-center">
                        <img class="img-fluid" src="{% static 'images/login-logo.png' %}" alt="" aria-hidden="true" />
                        <h1 class="title text-center font-weight-bold text-white mt-4">Stay tuned with world</h1>
                    </div>
                </div>
                <div class="col-lg-auto">
                  {% block content %}
                  {% endblock %}
                </div>
            </div>
        </div>
    </div>
   <div class="process-comm" id="loading">
      <div class="spinner">
         <div class="bounce1"></div>
         <div class="bounce2"></div>
         <div class="bounce3"></div>
      </div>
   </div>
    <!-- core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
   
    <script type="text/javascript" src="{% static 'js/popper.min.js' %}"></script>
    <script type="text/javascript" src="{% static 'js/bootstrap.min.js' %}"></script>
    <script type="text/javascript" src="{% static 'js/jquery.mousewheel.min.js' %}"></script>
    <script type="text/javascript" src="{% static 'js/jquery.mCustomScrollbar.js' %}"></script>
    <script type="text/javascript" src="{% static 'js/script.js' %}"></script>

</body>

</html>