Data Binding With Quick.JS
***************************

Getting Started + A Quick Example
===================================

Let's take a look back at the starter template provided to us in the :doc:`installsetup` section. It looked like this:

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Quick.JS Demo Page!</title>
			<link rel="stylesheet" type="text/css" href="./quick.css"> 
			<!-- or JSDelivr CDN Link-->
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
			<!-- or JSDelivr CDN Link-->
			<script>
				qk.go({
					home: "page1",
				});
			</script>
		</body>
	</html>

Let's now assume that in the same directory we have a Javascript file called ``data.js``. Here's the contents of that file:

.. code-block:: javascript

	var someRandomData = new function(){
		this.sampleData = {"helloworld" : "Welcome to Quick.JS!"};
	};

As you can tell, it's a fairly small file, it has some critical characteristics. First, it has a *namespace*. This is denoted by:

.. code-block:: javascript

	var someRandomData = new function(){ ...your data here...};

This helps in keeping your code clean. If you need some more convincing as to why you should include a namespace in your code, you should read the `Wikipedia article <https://en.wikipedia.org/wiki/Namespace>`_ about it. Trust me, it will make your life easier.

Inside of our namespace, we have a single line of JSON-formatted data. In a nutshell, JSON, short for Javascript Object Notation, is a way to organize data via a series of key-value pairs. In the example above, our key-value pair has the key ``"helloworld"`` and the value ``"Hello World!"``. This was set to the variable ``this.sampleData``. If you want to learn more about JSON, check out `W3Schools' nice guide <http://www.w3schools.com/json/>`_.

After that brief tangent on JSON and namespacing, let's bring it back to the topic at hand, data binding. 

In our HTML document, let's replace the line ``Welcome to Quick.JS!`` with a ``div`` tag. We'll also link to that ``data.js`` file in the footer. Here's an example:

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Quick.JS Demo Page!</title>
			<link rel="stylesheet" type="text/css" href="./quick.css"> 
			<!-- or JSDelivr CDN Link-->
		</head>
		<body>
			<qk-page qk-pageid="page1">
				<div>
					<!-- nothing here yet -->
				</div>
				<a qk-linkto="page2">Go to page 2</a>
			</qk-page>
			<qk-page qk-pageid="page2">
				This is the second page of the demo app.
				<a qk-linkto="page1">Go back to page 1</a>
			</qk-page>
			<script src="./data.js"></script> <!-- our data source -->
			<script src="./quick.js"></script> 
			<!-- or JSDelivr CDN Link-->
			<script>
				qk.go({
					home: "page1",
				});
			</script>
		</body>
	</html>

Very good. If you've been paying attention, you'll have noticed that in our data file, we declared the value of our key-value pair to be ``"Welcome to Quick.JS!"``. Coincidence? Nope. We're going to make that ``div`` we just added say ``"Welcome to Quick.JS!"`` also, just with the magic of data binding. Let's do that now.

The first thing to change is to add a special attribute to that ``div``, like so:

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			...
		</head>
		<body>
			<qk-page qk-pageid="page1">
				<div qk-datafrom="someRandomData.sampleData">
					<!-- nothing here yet -->
				</div>
				<a qk-linkto="page2">Go to page 2</a>
			</qk-page>
			...
		</body>
	</html>

As you know, anything that's prefaced by ``qk`` is related to Quick.JS. Thus, it's not hard to figure out that ``qk-datafrom`` is an attribute critical to Quick.JS' data binding. It essentially serves to point Quick.JS to a starting point to fetch it's data from. When we imported ``data.js`` using the ``<script src="./data.js"></script>`` line in our HTML page, all of the variables in ``data.js`` became accessible to our HTML and all of the rest of our Javascript. By saying ``someRandomData.sampleData``, we reference the ``someRandomData`` namespace that we had defined previously, and then with ``sampleData`` we can reference the specific variable within that namespace. 

Even if we opened up this page in a web browser right now, nothing would appear. Why? We have our variable linked up to our ``div``, so what's the catch? Well, remember how the variable itself is in JSON format? We need to define which value from that JSON that we want to appear. In order to do that, we need to supply the key for the value that we want. This is done using double square brackets. Take a look:

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			...
		</head>
		<body>
			<qk-page qk-pageid="page1">
				<div qk-datafrom="someRandomData.sampleData">
					[[data.helloworld]]
				</div>
				<a qk-linkto="page2">Go to page 2</a>
			</qk-page>
			...
		</body>
	</html>

Okay. The ``helloworld`` part makes sense: it's just the key for the value that we'd like to display. But what about the ``data`` part? Quick.JS uses a pseudo-parent object to reference all of the data within the variable specified by ``qk-datafrom``. Essentially, this means that if our ``data.js`` actually looked like this:

.. code-block:: javascript

	var someRandomData = new function(){
		this.sampleData = {"data_array": [
			"helloworld" : "Welcome to Quick.JS!", 
			"helloworld2" : "not what we want"], 
		"evenmoredata": "more data"};
	};

where we see that ``this.sampleData`` is not one JSON key-value pair, but rather an array of key-value pairs and another random pair, we can still navigate through our data. Say that we still wanted to access the ``"helloworld"`` key-value pair. Instead of using ``[[data.helloworld]]`` like we did previously, we can say ``[[data.data_array.helloworld]]. 

Okay. Let's uncomplicate things. Now that we've established what the double square bracket notation is and what the ``data.`` prefix is, let's just assume that our ``data.js`` file looks like this:

.. code-block:: javascript

	var someRandomData = new function(){
		this.sampleData = {"name" : "Quick.JS!"};
	};

Well. The ``Welcome to`` part of ``"Welcome to Quick.JS!"`` is gone! Don't worry, it's a perfect opportunity to demonstrate how we can mix standard text and Quick.JS' double bracket notation in the same ``div``. Take a look:

.. code-block:: html

	<!DOCTYPE html>
	<html>
		<head>
			...
		</head>
		<body>
			<qk-page qk-pageid="page1">
				<div qk-datafrom="someRandomData.sampleData">
					Welcome to [[data.name]]
				</div>
				<a qk-linkto="page2">Go to page 2</a>
			</qk-page>
			...
		</body>
	</html>

Now, we can change the value for the key ``"name"`` to be anything we want. If we change it from ``"Quick.JS!"`` to, say, ``"Google"``, it would merely display ``"Welcome to Google"``. Simple as that.