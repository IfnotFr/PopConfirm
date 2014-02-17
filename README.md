popconfirm
==========

__Compatible Bootstrap 2.3 and Bootstrap 3__

A simple action confirmation plugin for jQuery based on Twitter Bootstrap Popover

## Example

Please, check our simple example here : http://jsfiddle.net/RDh7E/2/

## How to use

__1:__ Add the `jquery.popconfirm.js` file into your Twitter Bootstrap document including jQuery.

```html
  <script type="text/javascript" src="js/jquery.popconfirm.js"></script>
```

__2:__ Use the jQuery method `popConfirm()` on any object you want with handle click events :

```html
<a href="mypage.html" id="link">link</a>
```

```javascript
$("#link").popConfirm();
```

## Full options usage
```javascript
$("[data-toggle='confirmation']").popConfirm({
        title: "Really ?", // The title of the confirm
        content: "I have warned you !", // The message of the confirm
        placement: "bottom", // The placement of the confirm (Top, Right, Bottom, Left)
        yesBtn:   'Yeah',
        noBtn:    'Oh no !!!'
});
```

## What it handles

* jQuery `.click()` and `.bind('click')` methods
* Hard coded `onclick` attributes
* `href` attribute from a `a` lik
* Submit a form from a `type="submit"` button/input
