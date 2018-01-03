import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  projects: [
    {
      title: "Block-Info",
      description: "Client-side-only application that pulls blockchain data and calculates a couple of KPIs that we felt were missing.",
      technologies: ["JavaScript", "Bootstrap", "APIs", "AJAX"],
      team: ["Raphael Paier", "Clemens Stift"],
      link: "www.stift.online"
    },
    {
      title: "Investment-Ready",
      description: "Revamp of complete Investment-Ready Website including UX and copywriting as well as Wordpress configuration and CSS adjustments.",
      technologies: ["CSS", "Wordpress", "Copywriting", "UX-Design"],
      team: ["Clemens Stift"],
      link: "www.investment-ready.org"
    },
    {
      title: "NBB Austria",
      description: "Design and implementation of NBB Austria Website from scratch - no templates used. Wordpress as Backend.",
      technologies: ["CSS", "Wordpress", "Copywriting", "UX-Design", "UI-Design"],
      team: ["Clemens Stift", "Marlon Alagoda"],
      link: "www.unternehmensverkauf.at"
    }
  ]
});
