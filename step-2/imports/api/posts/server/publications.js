// All posts-related publications

import { Meteor } from 'meteor/meteor';
import Posts from '../posts.js';

Meteor.publish('posts.all', () => Posts.find());
