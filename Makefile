SOURCE=icons/ manifest.json block.js ext.js style.css
BUILD=wikilayout

all:
	@mkdir -pv $(BUILD)
	@cp -rv $(SOURCE) $(BUILD)
	@cd wikilayout && zip -r -FS ../wikilayout.zip *
	@rm -rfv $(BUILD)


clean:
	@rm -vf wikilayout.zip

