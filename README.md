# NC News

## Link to deployed app

https://nc-news-123.netlify.app/

## Summary

This app is intended to be the outline of a generic news app. Including functionality one might expect on as news site such as:

- Viewing all articles
- Filtering articles by topic
- Sorting articles by date, comment count or votes
- Voting system on articles
- Ability to post and delete comments on an article

### Using the app

Following the link to the deployed app above, one may navigate to different topics using the nav bar or may scroll down for more articles. Each article card is a link that takes one to the selected article, there one may vote on the article and/or post a comment. Currently, the default user is the same for anyone using the app. Comments made by this user can also be deleted.

### Link to backend repo

https://github.com/girdenis-p/news-api

## Setup

### Minimum requirements

- Node: v19

### Cloning the repository

If you wish to run this app locally, fork this repo and then clone to your machine using:
```
  $ git clone <url-of-your-forked-repo>
```

### Installing dependencies

First go into the new directory using:
```
  $ cd <name-of-your-forked-repo>
```
Then install the dependencies by running:
```
  $ npm i
```

### Running the app locally

To run the app on localhost, you can use the pre-defined Create React App script by running:
```
  $ npm start
```