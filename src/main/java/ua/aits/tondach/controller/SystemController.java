/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.aits.tondach.controller;

import java.sql.SQLException;
import java.text.ParseException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import ua.aits.tondach.functions.Helpers;
import ua.aits.tondach.model.ArticleModel;
import ua.aits.tondach.model.RiderModel;
import ua.aits.tondach.model.SellerModel;
import ua.aits.tondach.model.SlaterModel;
import ua.aits.tondach.model.UserModel;

/**
 *
 * @author kiwi
 */
@Controller
@Scope("session")
public class SystemController {
    
    Helpers Helpers = new Helpers();
    UserModel Users = new UserModel();
    ArticleModel Article = new ArticleModel();
    SlaterModel Slater = new SlaterModel();
    RiderModel Rider = new RiderModel();
    SellerModel Seller = new SellerModel();
    
    @RequestMapping(value = {"/system/login", "/system/logon", "/system/enter"}, method = RequestMethod.GET)
    public ModelAndView login(HttpServletRequest request, HttpServletResponse response)  {
        ModelAndView model = new ModelAndView("/system/login");
        return model;
    }
    
    @RequestMapping(value = {"/system/index", "/system/main", "/system/home"}, method = RequestMethod.GET)
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException  {
        ModelAndView model = new ModelAndView("/system/index");
        return model;
    }
    
    @RequestMapping(value = {"/system/menu", "/system/menu/"}, method = RequestMethod.GET)
    public ModelAndView menu(HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException  {
        ModelAndView model = new ModelAndView("/system/menu");
        return model;
    }
    
    @RequestMapping(value = {"/system/users", "/system/users/"}, method = RequestMethod.GET)
    public ModelAndView users(HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException  {
        ModelAndView model = new ModelAndView("/system/users");
        model.addObject("users", Users.getAllUsers());
        return model;
    }
    
    @RequestMapping(value = {"/system/users/add", "/system/users/add/"})
    public ModelAndView addUser(HttpServletRequest request,
		HttpServletResponse response) throws Exception {
            request.setCharacterEncoding("UTF-8");
            ModelAndView modelAndView = new ModelAndView("/system/users_add");
            return modelAndView;
    }
    
    @RequestMapping(value = {"/system/users/edit/{id}", "/system/users/edit/{id}/","/Carpath/system/users/edit/{id}", "/Carpath/system/users/edit/{id}/"})
    public ModelAndView editUser (@PathVariable("id") String id, HttpServletRequest request,
		HttpServletResponse response) throws Exception {
                ModelAndView modelAndView = new ModelAndView("/system/users_edit");
                modelAndView.addObject("user", Users.getOneUserFullById(id));
            return modelAndView;
    }
    
    @RequestMapping(value = {"/system/users/delete/{id}", "/system/users/delete/{id}/"})
    public ModelAndView deleteUser (@PathVariable("id") String id, HttpServletRequest request,
		HttpServletResponse response) throws Exception {
                ModelAndView modelAndView = new ModelAndView("/system/users_delete");
                modelAndView.addObject("user", Users.getOneUserFullById(id));
            return modelAndView;
    }
    
    @RequestMapping(value = {"system/add/", "/system/add/", "/system/add"}, method = RequestMethod.GET)
    public ModelAndView add(HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException   {
        ModelAndView model = new ModelAndView("/system/add");
        return model;
    }
    @RequestMapping(value = {"system/edit/{id}", "/system/edit/{id}"}, method = RequestMethod.GET)
    public ModelAndView edit(@PathVariable("id") String id, HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException   {
        ModelAndView model = new ModelAndView("/system/edit");
        model.addObject("article",Article.getOneArticle(id));
        return model;
    }
    @RequestMapping(value = {"system/delete/{id}", "/system/delete/{id}"}, method = RequestMethod.GET)
    public ModelAndView delete(@PathVariable("id") String id, HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException   {
        ModelAndView model = new ModelAndView("/system/delete");
        model.addObject("article",Article.getOneArticle(id));
        return model;
    }
    
    @RequestMapping(value = {"system/slaters/", "/system/slaters/", "/system/slaters"}, method = RequestMethod.GET)
    public ModelAndView slaters(HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException   {
        ModelAndView model = new ModelAndView("/system/slaters");
        model.addObject("slaters", Slater.getOneSlater("1"));
        return model;
    }
    
    @RequestMapping(value = {"system/riders/", "/system/riders/", "/system/riders"}, method = RequestMethod.GET)
    public ModelAndView riders(HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException   {
        ModelAndView model = new ModelAndView("/system/riders");
        model.addObject("riders", Rider.getOneRider("1"));
        return model;
    }
    
    @RequestMapping(value = {"system/news/", "/system/news/", "/system/news"}, method = RequestMethod.GET)
    public ModelAndView news(HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException   {
        ModelAndView model = new ModelAndView("/system/news");
        model.addObject("article", Article.getArticleByCount("0", "100"));
        return model;
    }
    @RequestMapping(value = {"system/wherebuy/", "/system/wherebuy/", "/system/wherebuy"}, method = RequestMethod.GET)
    public ModelAndView wherebuy(HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException   {
        ModelAndView model = new ModelAndView("/system/wherebuy");
        model.addObject("seller", Seller.getSellerByCount("0", "100"));
        return model;
    }
    
    @RequestMapping(value = {"system/editseller/{id}", "/system/editseller{id}"}, method = RequestMethod.GET)
    public ModelAndView wherebuyedit(@PathVariable("id") String id, HttpServletRequest request, HttpServletResponse response) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, ParseException   {
        ModelAndView model = new ModelAndView("/system/editseller");
        model.addObject("seller", Seller.getOneSeller(id));
        return model;
    }

    @RequestMapping(value = {"/tools/imageupload","/tools/imageupload/"}, method = RequestMethod.GET)
    public ModelAndView fileManager (HttpServletRequest request, HttpServletResponse response) throws Exception {
        String path = request.getParameter("path");
        String type = request.getParameter("type");
        String ckeditor = request.getParameter("CKEditor");
        String num = request.getParameter("CKEditorFuncNum");
        ModelAndView model = new ModelAndView("/tools/FileDrag");
        model.addObject("ckeditor", ckeditor);
        model.addObject("num", num);
        model.addObject("type", type);
        //model.addObject("folder", folder.replace('|', '/'));
        if("".equals(path)) {
            model.addObject("path",path.replace(",", "/"));
        }
   	return model;
    }

}

