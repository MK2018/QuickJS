Some Extra Information
**************************

You may or may not find some of this useful. We certainly hope that you make *some* use of it.

What Does Quick.JS Use to Compile?
==============================================
Quick.JS uses `Google's Closure Compiler <https://developers.google.com/closure/compiler/>`_ to compile and minify. After compiling, Closure keeps some newline tags in the JS code, which takes up ~10 bytes of space. Since we believe that every byte really does matter, we run it through the minifier `here <http://jscompress.com/>`_ to remove those newlines. 

As for our CSS, we use a standard CSS minifier `here <https://cssminifier.com/>`_. Since our CSS code is tiny, we don't use Sass or LESS. It would be massively overkill. 

Building Your Own Copy of This Documentation
==============================================

Fun fact: This documentation is directly linked to Quick.JS' repository. Whenever changes are commited, these docs are rebuilt. Due to this, they should always be the most up-to-date and reliable docs out there for Quick.JS. 

**However**, if you, for whatever reason, want to build your own copy of the documentation to host locally, please feel free to. The only prerequisite is that you have `Sphinx <http://www.sphinx-doc.org/en/stable/>`_ installed. If you have Python installed, it's as easy as running ``pip install Sphinx`` in a terminal or command prompt. Open the ``docs/`` folder of the GitHub repository on your local machine in a terminal or command prompt (OSX, Windows, or Linux all work fine in this case). From there, just run ``make html`` to generate HTML versions of the documentation, or run ``make latex`` to make a LaTeX version.