<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:useBean id="Constants" class="ua.aits.tondach.functions.Constants" scope="session"/>

<t:indexpage>
    <title>  Галерея - природньо красиві і довговічні покрівлі </title>
    
    <div id="content" class="wide">
            <div class="reference" style="margin-top:20px">
             <h1>Мульде</h1>
              <div class="product-panes">
                <div class="overview">
                  <div class="gallery">
                    <ul class="images">
				<li class="first">
                        <div class="image" style="max-height: 100%;overflow: hidden;" data-node_id="7198">
                            <img src="${Constants.URL}media/1781/mulde_vz_e_schwarz.jpg" style="max-width: 100%;"  alt="" title="">
                        </div>
                        <div class="caption">
              <span class='right'>Мульде</span> 
                        </div>
                      </li>
				<li class="">
                        <div class="image" style="max-height: 100%;overflow: hidden;" data-node_id="7198">
                          <img src="${Constants.URL}media/1782/ref114-1-mulde-vz-e-antik_big.jpg" style="max-width: 100%;"  alt="" title="">
                        </div>
                        <div class="caption">
              <span class='right'>Мульде</span> 
                        </div>
                      </li>
				<li class="">
                        <div class="image" style="max-height: 100%;overflow: hidden;" data-node_id="7198">
                          <img src="${Constants.URL}media/1783/ref115-1-mulde-vz-e-antik_big.jpg" style="max-width: 100%;"  alt="" title="">
                        </div>
                        <div class="caption">
              <span class='right'>Мульде</span> 
                        </div>
                      </li>
				<li class="">
                        <div class="image" style="max-height: 100%;overflow: hidden;" data-node_id="7198">
                          <img src="${Constants.URL}media/1784/ref52-1-mulde-vz-a-rot_1_big.jpg" style="max-width: 100%;"  alt="" title="">
                        </div>
                        <div class="caption">
              <span class='right'>Мульде</span> 
                        </div>
                      </li>
				<li class="last">
                        <div class="image" style="max-height: 100%;overflow: hidden;" data-node_id="7198">
                          <img src="${Constants.URL}media/1785/mulde-vz_big.jpg" style="max-width: 100%;"  alt="" title="">
                        </div>
                        <div class="caption">
              <span class='right'>Мульде</span> 
                        </div>
                      </li>
                      
                    </ul>
                    <div class="prev"></div>
                    <div class="next"></div>
                  </div>
                </div>
              </div>
              <div class="details">
                <div class="product">
                  <h2>
                    Продукт
                  </h2><a href="${Constants.URL}products/gallery/mulde/">TONDACH<sup>®</sup> Мульде</a>
                </div>
                <div class="photoservice">
                  
                  <form class="mailform" method="get" action="">
                    <fieldset>
                      <label for="email">Відправити на E-Mail:</label> <input class="text clearFocus" type="text" value="E-Mail адреса" name="email">
						  <input class="btn" type="submit" value="Absenden">
                    </fieldset>
                    <div class="formsuccess">
                      Фото відправлено
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
</t:indexpage>