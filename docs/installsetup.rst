Installing and Setting Up
**************************

Installation
========================

To install Quick.JS, we have two options: getting the latest release from GitHub or fetching Quick.JS from a CDN.

Using a CDN
-------------

Quick.JS is proud to be hosted on JSDelivr, the fastest commercially available content distribution network, or CDN for short. 

A guide on how to use the `CDN <http://www.jsdelivr.com/projects/quickjs>`_ will be posted shortly.

GitHub
--------

The Quick Version
++++++++++++++++++++
Head over to `Quick.JS' releases page <https://github.com/MK2018/QuickJS/releases>`_ on GitHub. Look for the latest release, and download the attached two files. One should be ``quick.js``, which is the actual JS logic, and the other should be ``quick.css``, which includes some styling to make Quick.JS work. Be sure to link to the ``quick.css`` file in your header and the ``quick.js`` file at the very bottom of your page, after every other JS import.


The Nice and Detailed Version
++++++++++++++++++++++++++++++++++++
If that paragraph above didn't quite work for you, don't worry. We can help. The very first thing that we'll need to do is to head over to the GitHub page for Quick.JS. This is where the code for Quick.JS lives, and it's where the released are housed for you to download them. The link to access the main repository with the latest source code is `here <https://github.com/MK2018/QuickJS>`__ and the code to access all of the prebuilt releases is `here <https://github.com/MK2018/QuickJS/releases>`__. We'll focus on the releases page.

On the releases page, the newest stable release will be at the top of the page. There is a short changelog and under it, there are 4 links: one for ``quick.css`` (this is for helping with styling), one for ``quick.js`` (this is the logic itself), and two for the source code of the release.

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Quick.JS Demo Page!</title>
			<link rel="stylesheet" type="text/css" href="./quick.css">
		</head>
		<body>
			<qk-page qk-pageid="page1">
				Welcome to Quick.JS!
				<a qk-linkto="page2">Go to page 2</a>
			</qk-page>
			<qk-page qk-pageid="page2">
				This is the second page of the demo app.
				<a qk-linkto="page1">Go back to page 1</a>
			</qk-page>
			<script src="./quick.js"></script>
			<script>
				qk.go({
					home: "page1",
				});
			</script>
		</body>
	</html>

Create a new folder to house all of your files for your Quick.JS project. Now, create a new file, paste the above starter page into it, and save it as ``index.html``. In the same folder, download both the ``quick.css`` and the ``quick.js`` files from GitHub, and put them both in the same folder. Now, when you fire up your ``index.html`` file in your web browser of choice, it should display 'Welcome to Quick.JS!' with no special styling.

At this point, you've successfully installed Quick.JS! If you would like to see a more complex demo page, download the source code for the release in either .zip format for Windows, or .tar.gz format for Linux/OS X. Within the source code, there is a ``build`` folder, and within that, there is a ``demo`` folder, which contains some demo files to help show off what Quick.JS can do. 

Setup
========================

Let's break down what's happening in that starter page. There are just a few things that distinguish it from a normal HTML document, so we'll take a look at those. First of all, there are the two links to the ``quick.js`` and the ``quick.css`` files, which are essential for making Quick.JS work. The CSS file is linked in the header, and the JS file is the last linked file in the footer of the document, like so:

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			...
			<link rel="stylesheet" type="text/css" href="./quick.css">
		</head>
		<body>
			...
			<script src="./quick.js"></script>
			...
		</body>
	</html>

These are essential. Without these imports, Quick.JS is not installed. The next thing to note is the ``<qk-page>`` tags scattered around the document, as we see here: 

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			...
		</head>
		<body>
			<qk-page qk-pageid="page1">
				...
			</qk-page>
			<qk-page qk-pageid="page2">
				...
			</qk-page>
			...
		</body>
	</html>

These are how Quick.JS divides up an application into separate 'pages.' As we know, the purpose of Quick.JS is to provide a simple way to create one-page apps, with no linking to multiple pages. As such, it needs a way to split up an HTML page into separate, virtual, page-like entities. The ``<qk-page>`` tag is the answer. You can also see that each ``<qk-page>`` has an attribute associated with it called ``qk-pageid``. In order for a ``<qk-page>`` to be recognized as valid, it *must* have that attribute, which is essentially just a unique ID for the page.

The final thing to note is the very last thing on the page. Take a look:

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			...
		</head>
		<body>
			...
			<script>
				qk.go({
					home: "page1",
				});
			</script>
		</body>
	</html>

As you've probably realized by now, anytime you see ``qk``, it represents something to do with Quick.JS (for instance, ``qk-page``). In this case, we're calling Quick.JS' starting method, by using ``qk.go()``. You've also probably noticed that we have a line that says ``home: "page1",``. This is part of a list of arguments that are provided to Quick.JS in order to help it out. 

Currently, the only argument that can be provided in the argument list is ``home``. Put in the ID of the ``qk-page`` that you intend to be the first page displayed. Recall that we specified the ID using the ``qk-pageid`` attribute.

Note that since we provide a *list* of arguments, there are curly braces within the parentheses for the ``qk.go()`` method, like so: 

.. code-block:: JavaScript

	{
		home: "page1",
		//...other arguments here,
		//...and here,
		//...in the future,
	}

Once this ``qk.go({args})`` method is called, the ball is rolling, and Quick.JS will format the page correctly. 

Boom.