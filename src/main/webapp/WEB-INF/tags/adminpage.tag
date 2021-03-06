<%-- 
    Document   : archive_page
    Created on : Jun 26, 2015, 9:03:07 PM
    Author     : kiwi
--%>

<%@tag description="Tondach Admin page" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<jsp:useBean id="Constants" class="ua.aits.tondach.functions.Constants" scope="session"/>
<c:if test="${sessionScope.user == null && pageContext.request.servletPath.substring(pageContext.request.servletPath.lastIndexOf('/')) != '/Login.jsp'}">
    <style>
        body {
            display:none;
        }
    </style>
    <script>window.location.href = "${Constants.URL}orders/login";</script>
</c:if>
  
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    

    <title>Tondach</title>
    <link rel="icon" href="${Constants.URL}orders/img/favicon.ico" type="image/x-icon">
    <link href="${Constants.URL}system/css/style.css" rel="stylesheet">
    <!-- Bootstrap core CSS -->
    <link href="${Constants.URL}system/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Custom styles for this template -->
    <link href="${Constants.URL}system/css/jumbotron.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="${Constants.URL}system/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
      
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" id="tondach">Tondach</a>
        </div>
          
          
          
          <div id="navbar" class="navbar-form navbar-header">
              <a id="news" href="<c:url value="/system/news" />">
                  <button type="submit" class="btn btn-success">Новини</button>
              </a>
              <a id="slaters" href="<c:url value="/system/slaters" />">
                <button type="submit" class="btn btn-success">Покрівельники</button>
              </a>
              <a id="riders" href="<c:url value="/system/riders" />">
                <button type="submit" class="btn btn-success">Перевізники</button>
              </a>
              <a id="sellers" href="<c:url value="/system/wherebuy" />">
                <button type="submit" class="btn btn-success">Де придбати</button>
              </a>
              <a id="download" href="<c:url value="/system/download" />">
                <button type="submit" class="btn btn-success">Файли для завантаження</button>
              </a>
              <a id="update" href="<c:url value="/system/update" />">
                <button type="submit" class="btn btn-success">Оновлення</button>
              </a>
          </div>
                
          
        <div id="navbar" class="navbar-collapse collapse">
          <div class="navbar-form navbar-right">
              <a id="logout"  href="<c:url value="/orders/system/logout.do" />">
            <button type="submit" class="btn btn-success">Вихід</button>
              </a>
          </div>  
        </div><!--/.navbar-collapse -->
      </div>
    </nav>

    <!-- Main jumbotron for a primary marketing message or call to action -->

    <div class="container">
      <!-- Example row of columns -->
      <jsp:doBody/>

    </div> <!-- /container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="${Constants.URL}system/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="${Constants.URL}system/js/ie10-viewport-bug-workaround.js"></script>
    
  </body>
</html>
