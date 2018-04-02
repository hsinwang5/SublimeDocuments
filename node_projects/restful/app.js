var express             = require("express");
var app                 = express();
var bodyParser          = require("body-parser");
var mongoose            = require("mongoose");
var methodOverride      = require("method-override");
var expressSanitizer    = require("express-sanitizer")

mongoose.connect("mongodb://localhost/restful");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

//passing in an oject with {type: xx, default: xx} sets a default value
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

//test create
// Blog.create({
//     title: "Test blog",
//     image: "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07a78ca4d41f04cad17ecb9d8481f565&auto=format&fit=crop&w=500&q=60",
//     body: "This is just a test blog, nothing to see here"
// });

//RESTful routes
app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogPost){
        if(err) {
            console.log(err);
        } else{
            res.render("index", {blogs: blogPost})
        }
    });
});

app.get("/blogs/new", function(req, res){
    res.render("new");
});

//show route
app.get("/blogs/:id", function(req, res){
     Blog.findById(req.params.id, function(err, foundBlog){
         if (err){
             res.redirect("/blogs");
         } else {
             res.render("show", {blog: foundBlog});
         }
     });
});

//edit route
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog});
        }
    })
});

//create route
app.post("/blogs", function(req, res){
    console.log(req.body);
    req.body.blog.body = req.sanitize(req.body.blog.body);
    console.log("after sanitization");
    console.log(req.body);
    Blog.create(req.body.blog, function(err, post){
        if (err){
            console.log(err);
        } else{
            res.redirect("/blogs");
        }
    });
});

//update route (put)
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if (err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//Delete route
app.delete("/blogs/:id", function(req, res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
    //redirect somewhere
});

app.listen(3000, function(){
    console.log("restful server running!");
});