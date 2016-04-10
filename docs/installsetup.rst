Installing and Setting Up
**************************

Installation
========================

To install Quick.JS, we're going to have to get the latest release from GitHub.

The Quick Version
------------------------
Head over to `Quick.JS' releases page <https://github.com/MK2018/QuickJS/releases>`_ on GitHub. Look for the latest release, and download the attached two files. One should be ``quick.js``, which is the actual JS logic, and the other should be ``quick.css``, which includes some styling to make Quick.JS work. Be sure to link to the ``quick.css`` file in your header and the ``quick.css`` file at the very bottom of your page, after every other JS import. That should work for you!


The Nice and Detailed Version
--------------------------------
If that paragraph above didn't quite work for you, don't worry. We can help. The very first thing that we'll need to do is to head over to the GitHub page for Quick.JS. This is where the code for Quick.JS lives, and it's where the released are housed for you to download them. The link to access the main repository with the latest source code is `here <https://github.com/MK2018/QuickJS>`_ and the code to access all of the prebuilt releases is `here on Quick.JS' releases page <https://github.com/MK2018/QuickJS/releases>`_. We'll focus on the releases page.

On the releases page, the newest stable release will be at the top of the page. There is a short changelog and under it, there are 4 links: one for ``quick.css`` (this is for helping with styling the utility), one for ``quick.js`` (this is the utility itself), and two for the source code of the release. 

If you already have a working knowledge of HTML, and understand how to link CSS and JS files to your desired page, just download the ``quick.css`` and ``quick.js`` files, and save them in a place where you can link to them from your HTML page. 

If not, here's a basic html page to start with. 

.. gist:: https://gist.github.com/MK2018/b3aace803cd6804b7e5cc78b0ab298f8

Copy this into a new HTML file, and put the ``quick.css`` and ``quick.js`` files into the same directory. Open the HTML file in a web browser, and it should display 'Welcome to Quick.JS!'

Setup
========================