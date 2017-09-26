/**
 * Created by Malith on 25/09/2017
 */
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var myParser = require("body-parser");
const winston = require('winston')

const PORT_NO = 3000;

// TODO: credentials???
var pool = mysql.createPool({
  host: 'localhost',
  user: 'react',
  password: '123456',
  database: 'morasp5_moraspirit_main_db'
});

var app = express();
app.use(cors());

// to consume post data
app.use(myParser.json());
app.use(myParser.urlencoded({ extended: true }));

/**
 * Returns the newest 10 articles
 * nid
 * title
 * publisher
 * created time stamp
 * body summary
 * cover image URL
 */
app.get('/articles', function (req, res) {

  var query = 'SELECT n.nid, n.title, u.name, n.created, fdb.body_summary, nfi.uri FROM (SELECT uid, nid, title, created  from  (SELECT nid, title, created FROM `msp_node` where type=\'featured_article\' or type=\'sports_article\' ORDER BY created DESC  LIMIT 10)  a NATURAL JOIN `msp_node_revision`  b ) n LEFT JOIN `msp_field_data_body` fdb ON fdb.entity_id = n.nid LEFT JOIN (SELECT * FROM (SELECT entity_id, `field_featured_article_image_fid` AS fidd FROM `msp_field_data_field_featured_article_image` UNION SELECT entity_id, `field_sports_image_fid` AS fidd FROM `msp_field_revision_field_sports_image`) AS fi LEFT JOIN `msp_file_managed` fm ON fi.fidd = fm.fid) nfi ON nfi.entity_id = n.nid LEFT JOIN `msp_users` u ON n.uid= u.uid';
  pool.getConnection(function (err, connection) {
    if (err) {
      winston.log('error', "Error while getting connection from the pool " + err);
      res.status(500).json(err);
    }
    connection.query(query, function (err, rows, fields) {
      connection.release();
      if (err) {
        winston.log('error', "Error while querying moraSpirit main DB " + err);
        res.status(500).json(err);
      }
      else {
        res.json(rows);
      }
    });
  });
});

/**
 * Return 10 articles published way back from the article offset
 */
app.get('/articlesMore/:articleOffset', function (req, res) {

  var articleOffset = parseInt(req.params.articleOffset);
  var query = "SELECT n.nid, n.title, u.name, n.created, fdb.body_summary, nfi.uri FROM (SELECT uid, nid, title, created  from  (SELECT nid, title, created FROM `msp_node` where type=\'featured_article\' or type=\'sports_article\' ORDER BY created DESC  LIMIT 10 OFFSET ? )  a NATURAL JOIN `msp_node_revision`  b ) n LEFT JOIN `msp_field_data_body` fdb ON fdb.entity_id = n.nid LEFT JOIN (SELECT * FROM (SELECT entity_id, `field_featured_article_image_fid` AS fidd FROM `msp_field_data_field_featured_article_image` UNION SELECT entity_id, `field_sports_image_fid` AS fidd FROM `msp_field_revision_field_sports_image`) AS fi LEFT JOIN `msp_file_managed` fm ON fi.fidd = fm.fid) nfi ON nfi.entity_id = n.nid LEFT JOIN `msp_users` u ON n.uid= u.uid";
  pool.getConnection(function (err, connection) {
    if (err) {
      winston.log('error', "Error while getting connection from the pool " + err);
      res.status(500).json(err);
    }
    connection.query(query, [articleOffset], function (err, rows, fields) {
      connection.release();
      if (err) {
        winston.log('error', "Error while querying moraSpirit main DB " + err);
        res.status(500).json(err);
      }
      else {
        res.json(rows);
      }
    });
  });
});

/**
 * Returns single article for the passed ID
 * title
 * publisher
 * created date
 * modified date
 * article body
 * cover image URL
 */
app.get('/articles/:articleId', function (req, res) {

  var articleId = req.params.articleId.substring(1);
  console.log(articleId)
  var query = "SELECT  n.title, u.name,FROM_UNIXTIME(n.created,' %D %M %Y %h:%i:%p ') as created, FROM_UNIXTIME(n.timestamp,'%Y %D %M %h:%i:%p') as modified, fdb.body_value, nfi.uri FROM (SELECT uid, nid, title, created, timestamp  from  (SELECT nid, title, created FROM `msp_node` where nid = ?)  a NATURAL JOIN `msp_node_revision`  b ) n LEFT JOIN `msp_field_data_body` fdb ON fdb.entity_id = n.nid LEFT JOIN (SELECT * FROM (SELECT entity_id, `field_featured_article_image_fid` AS fidd FROM `msp_field_data_field_featured_article_image` UNION SELECT entity_id, `field_sports_image_fid` AS fidd FROM `msp_field_revision_field_sports_image`) AS fi LEFT JOIN `msp_file_managed` fm ON fi.fidd = fm.fid) nfi ON nfi.entity_id = n.nid LEFT JOIN `msp_users` u ON n.uid= u.uid ;";
  pool.getConnection(function (err, connection) {
    if (err) {
      winston.log('error', "Error while getting connection from the pool " + err);
      res.status(500).json(err);
    }
    connection.query(query, [articleId], function (err, rows, fields) {
      connection.release();
      if (err) {
        winston.log('error', "Error while querying moraSpirit main DB " + err);
        res.status(500).json(err);
      }
      else {
        res.json(rows);
      }
    });
  });
});

// TODO: This port should be changed (MORA can't request 3000!!!
app.listen(PORT_NO, function () {
  winston.log('info', 'MoraSpirit Mobile APP API is listening on port !' + PORT_NO);   // TODO: log this
});