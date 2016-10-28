# CK Editor Example

```
<script src="lib/ckeditor/ckeditor.js"></script>
```

```
<textarea id="editor1" name="editor1"></textarea>
<script type="text/javascript">
    CKEDITOR.replace( 'editor1' );
</script>
```

Editor Data
```
var editor_data = CKEDITOR.instances.editor1.getData();
```