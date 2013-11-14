popconfirm
==========

__Compatible Bootstrap 2.3 and Bootstrap 3__

A simple action confirmation plugin for jQuery based on Twitter Bootstrap Popover

## How to use

Add the `jquery.popconfirm.js` file into your Twitter Bootstrap document including jQuery.

```html
  <script type="text/javascript" src="js/jquery.popconfirm.js"></script>
```

Use the jQuery method `popConfirm()` on any object you want with handle click events :

```html
<a href="mypage.html" id="link">link</a>
<script type="text/javascript">
	$(document).ready(function() {
		$("#link").popConfirm();
	});
</script>
```

You can also use `data-toggle` for selecting all elements by default :
```html
<a href="mypage.html" data-toggle="pop-confirm">link</a>
<script type="text/javascript">
	$(document).ready(function() {
		$("[data-toggle='confirmation']").popConfirm();
	});
</script>
```

## What it handles

* jQuery `.click()` and `.bind('click')` methods
* Hard coded `onclick` attributes
* `href` attribute from a `a` lik
* Submit a form from a `type="submit"` button/input

## LICENSE - "MIT License"

Copyright (c) 2013 Anael Favre, [http://www.anaël.com/](http://www.xn--anal-npa.com)

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
