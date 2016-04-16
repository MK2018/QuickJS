Reference Guide
************************

Basic Installation
========================
If you haven't already, be sure to check out the :doc:`installsetup` section.

A Guide To Quick.JS' Features
==============================

Pages
------------------------

Quick.JS aims to provide an easy way to create simple single page applications, or SPAs. In order to provide this experience, Quick.JS divides the base HTML file up into individual "pages" by using a custom delimiter. 

If you've read the Installion and Setting Up page linked at the top of this page, you'll know that this is accomplished using the ``<qk-page>`` HTML tag.

*Please note: From here on out in this section of the documentation, consider a page to be the content displayed on the page at one time. As we'll find out in a moment, this is happened by dividing up the HTML page into different sections. Thus, each section is a "page".*


Example:

.. code-block:: html

		<qk-page qk-pageid="page1">
			...your content here...
		</qk-page>
		<qk-page qk-pageid="page2">
			...more content here...
		</qk-page>
		<qk-page qk-pageid="page3">
			...even more content here...
		</qk-page>

In a nutshell, Quick.JS will identify every ``<qk-page>`` tag, and group all of that content together into a single unit to display. 

**IMPORTANT:** Do NOT nest ``<qk-page>`` tags. Only one page can be shown at a time, and nesting the pages may have unexpected consequences, such as not working.

When you declare your ``<qk-page>`` tags, you *must* also include the attribute ``qk-pageid`` in the tag. This tells Quick.JS what you want the page to be identified by. As we covered in the Setup page, when we initialize Quick.JS, we provide an argument to the argument list which specifies what the homepage is. This homepage is specified by the ``qk-pageid``. In another example, when we link between pages, we need to use the ``qk-pageid`` to specify the target page to display.

Constant Elements
------------------------

This is a feature that allows an element to be constantly displayed across pages. This is applicable to elements such as navbars or social media icons. Please note that this feature will be expanded upon quite a bit in the future, so look forward to that!

2-way Data Binding
------------------------

Quick.JS can do simple 2-way data binding, meaning that it can easily exchange data between the HTML page and an associated Javascript script. 

Check out the documentation on data binding :doc:`here.<databind>`

The Advantages of Quick.JS
---------------------------

Lots and lots of stuff! :)

*Don't worry, this page of documentation is still under development. We'll be finishing it up soon!*