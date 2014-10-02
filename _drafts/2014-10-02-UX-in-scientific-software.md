---
published: false
---

## UX in Scientific Software

On Tuesday 30th September 2014 Karen, Andrew and myself attended a [UX Oxford](http://www.meetup.com/UX-Oxford/) talk by Roman Pichler [(@romanpichler)](http://twitter.com/romanpichler) entitled "UX and Scrum". The slides have been made available [here](http://www.slideshare.net/romanpichler/ux-and-scrum).  In the talk there were a number of interesting ideas put forward relating to UX (User Experience) in terms of project planning - when to start thinking about UX planning, ideas on how UX can fit an agile/scrum workflow and how to reliably keep track of and advance UX plans and ideas.

**Some key concepts from the talk**
One interesting idea was that of the persona, complimentary to a user story. This describes a target user type in more detail, outlining what they hope to get out of the system and how they may use the system, rather than describing one specific linear process. Roman has constructed a template for building personas which can be found [here](http://www.romanpichler.com/tools/persona-template/). More information on personas in project planning can be found [here](http://guide.agilealliance.org/guide/personas.html).

Another concept was that of the Product Canvas. This image is taken directly from the slideshare presentation linked above.

<iframe src="//www.slideshare.net/slideshow/embed_code/35561129?startSlide=19" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="https://www.slideshare.net/romanpichler/ux-and-scrum" title="UX and Scrum" target="_blank">UX and Scrum</a> </strong> from <strong><a href="http://www.slideshare.net/romanpichler" target="_blank">Roman Pichler</a></strong> </div>

The idea is to list personas next to high level ideas and functionality, epics and any other "regular" aspect of project or sprint planning, as well as work to be done in the next sprint or fully visualised UX designs. This canvas layout is intended for the early stages of planning but is useful for keeping track of initial good ideas which can be lost due to early difficulty in implementing or lying slightly outside the scope of the project at the start.

Attending this talk was useful in forcing us to think about how UX was important in the work we do. For myself in particular, it made me think about UX in scientific software.

**What makes good UX for scientific software?**
Firstly, good UX is not simply about adding eye candy or new technology - this can help but is not the be all and end all. There has to be a good reason for adding something like this.

There are some things that can enhance UX of scientific software.
- Clear instructions - Having a monolithic help page lifted from a unix man or an entire wiki dedicated to your software application does not mean it is clear how to perform simple tasks, leading to frustrated users. Contextual help, simple paragraphs at the start of sections, small help snippets for individual form fields casn all help explain how to use your software and minimise frustration.
- Example datasets - 
- Better charting engines - lots of options here such as D3 that can create interactive charts, narrow down data and display datasets in different ways.

**What makes bad UX for scientific software?**
Conversely, simply saying that command line software, like a lot of bioinformatics tools, does not have good UX is not correct. The fact that such software continues to be used and preferred by many scientific researchers speaks volumes - they find the user experience good enough to provide them with the data they need.

A lot of problems for web based scientific software ccome from trying to directly replicate the command line experience aand options in a web form - dropdowns and checklists everywhere. The functionality is the same but the user experience is not