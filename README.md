popconfirm
==========

__Compatible Bootstrap 2.3 and Bootstrap 3__

A simple action confirmation plugin for jQuery based on Twitter Bootstrap Popover

## Example

Please, check our simple example here : http://jsfiddle.net/RDh7E/28/

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
        container: "body", // The html container
        yesBtn: "Yeah",
        noBtn: "Oh no !!!"
});
```

You can also pass parameters using the html attribute : data-confirm-* (replace * by the option name).

Example :
```html
<a href="destination.html" data-confirm-title="My Super Title" data-confirm-content="My Super Question">Link</a>
```


## What it handles

* jQuery `.click()` and `.bind('click')` methods
* Hard coded `onclick` attributes
* `href` attribute from a `a` lik
* Submit a form from a `type="submit"` button/input
