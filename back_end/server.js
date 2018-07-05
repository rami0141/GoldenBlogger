const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// importing the Blogs model
import Blogs from './models/Blogs';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// connecting to Mongo database - Database name "blog"
mongoose.connect('mongodb://localhost:27017/blog');

// listening to the open mongo event
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongo connection established successfuly!')
});

// Get All Blogs
router.route('/blogs').get((req, res) => {
  Blogs.find((err, blogs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(blogs);
    }
  })
});

// Get Blogs By ID
router.route('/blogs/:id').get((req, res) => {
  Blogs.findById(req.params.id, (err, blogs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(blogs);
    }
  });
});

// Post Blog
router.route('/blogs/add').post((req, res) => {
  let blog = new Blogs(req.body);
  blog.save()
    .then(newBlog => {
      res.status(200).json({'blog': "Added successfuly"})
    })
    .catch (err => {
      res.status(400).send('Failed to create a new blog');
    });
});

// Update Blogs
router.route('/blogs/update/:id').post((req, res) => {
  Blogs.findById(req.params.id, (err, issue) => {
    if (!blogs) {
      return next(new Error('Could not load document'));
    } else {
        blogs.title = req.body.title;
        blogs. name = req.body.name;
        blogs.topic = req.body.topic;
        blogs.imageLink = req.body.imageLink;
        blogs.summary = req.body.summary;
        blogs.blog = req.body.blog;

        // makes sure that update blog gets saved in the database
        blogs.save().then(blogs => {
          res.json('Blog was added');
        }).catch(err => {
          res.status(400).send('Blog post failed');
        });
      }
  });
});

// Delete blogs
router.route('/blogs/delete/:id').get((req, res) => {
  Blogs.findByIdAndRemove({_id: req.params.id}, (err, blogs) => {
    if (err) {
      res.json(err);
    } else {
      res.json('Removed successfuly');
    }
  });
});


app.use('/', router);

app.listen(4000, () =>
  console.log("Sever running on port 4000")
);
