---
published: false
---

## Beginning developing in Rails

ChemBio Hub is committed to building a wide variety of tools and applications for scientists across the spectrum of chemical biology in Oxford. In order to do this we need to keep up to date in terms of programming techniques and languages.

An opportunity to do this came up recently when we needed an application to allow a brief walk-up survey at the recent ChemBio Hub symposium. It was decided that a simple yes/no system should be used to ask people about a small number of concepts which ChemBio Hub could provide applications or information for, which we could then narrow down based on the results of the survey.

Since it was a small application, it fitted well as a tutorial application for Ruby on Rails, additionally, it was similar to one of the existing official Rails tutorials at [link].

The spec for the applications was:
- users should be able to walk up without entering any personal information to take the survey;
- the survey should be a linear app, displaying a new question when an answer is given
- the survey should have a set number of questions (interests), each with a title, descriptive photo and help text.
- each question should have multiple true or false (_boolean_) answers (preferences) associated with it, which make up the results of the survey
- on reaching the end of the survey, the user should be informed they have completed and the next person should use the same screen to start the survey.

