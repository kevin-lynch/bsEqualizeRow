# Bootstrap Equalize Row Height
Jquery plugin that allows you to equalise row height when using Bootstrap grid

## Getting Started

Simply add a class to the grid items you would like the plugin to equalise the height. The plugin will then process these elements ensuring the height is same for all elements on their respective rows.

### Prerequisites

Ensure your page includes jquery and bootstrap before including the plugin script

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="dist/js/bsEqualizeRow.min.js"></script>
```

### Useage

You simply need to add a class to the grid items and then use this class name within the plugin intiation

HTML
```
<div class="myClass col-sm-4 col-md-3">
	<img src="dist/img/350x150.png" alt="" title="" />
</div>
<div class="myClass col-sm-4 col-md-3">
	<img src="dist/img/350x150.png" alt="" title="" />
</div>
<div class="myClass col-sm-4 col-md-3">
	<img src="dist/img/350x250.png" alt="" title="" />
</div>
<div class="myClass col-sm-4 col-md-3">
	<img src="dist/img/350x150.png" alt="" title="" />
</div>
```
JQuery
```
$('.myClass').bsEqualizeRow();
```

## Demo

View working [Demo](https://github.com/kevin-lynch)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/kevin-lynch) for details on submitting pull requests to me.

## Authors

* **Kevin Lynch** - [Kevin-Lynch](https://github.com/kevin-lynch)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details