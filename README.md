popconfirm
==========

__Compatible Bootstrap 2.3 and Bootstrap 3__

A simple action confirmation plugin for jQuery based on Twitter Bootstrap Popover

## Example

Please, check our simple example here : http://jsfiddle.net/RDh7E/9/

## Extended popConfirm example:

Please, check example here: http://jsfiddle.net/7nYZw/


## How to use

__1:__ Add the `jquery.popconfirm.js` file into your Twitter Bootstrap document including jQuery.

```html
  <script type="text/javascript" src="js/jquery.popconfirm.js"></script>
```

```html
  <script type="text/javascript" src="js/jquery.popconfirm.extended.js"></script>
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

## Extended usage
```html
     <a class="popconfirm btn"
      data-popconfirm-to="URL"
			data-popconfirm-title="Title extended"
			data-popconfirm-content="Some content for extended"
			data-popconfirm-placement="bottom"
			data-popconfirm-container="body"
			data-popconfirm-yes="Confirm extended"
			data-popconfirm-no="Cancel extended"
                      >
                      Confirm</a>
```

## What it handles

* jQuery `.click()` and `.bind('click')` methods
* Hard coded `onclick` attributes
* `href` attribute from a `a` lik
* Submit a form from a `type="submit"` button/input
