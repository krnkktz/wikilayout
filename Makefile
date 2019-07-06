SOURCE=html/ css/ js/ icons/ manifest.json
BUILD=wikilayout

all:
	@mkdir -pv $(BUILD)
	@cp -rv $(SOURCE) $(BUILD)
	@cd wikilayout && zip -r -FS ../wikilayout.zip *
	@rm -rfv $(BUILD)


clean:
	@rm -vf wikilayout.zip

